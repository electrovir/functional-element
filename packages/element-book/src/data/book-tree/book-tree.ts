import {check} from '@augment-vir/assert';
import {BookEntryType} from '../book-entry/book-entry-type.js';
import {BookEntry, isBookEntry} from '../book-entry/book-entry.js';
import {listUrlBreadcrumbs, titleToUrlBreadcrumb} from '../book-entry/url-breadcrumbs.js';
import {bookEntryVerifiers} from '../book-entry/verify-book-entry.js';
import {BookTree, BookTreeNode, isBookTreeNodeMarker} from './book-tree-node.js';
import {addTreeToCache, getTreeFromCache} from './tree-cache.js';

export function doesNodeHaveEntryType<const EntryType extends BookEntryType>(
    node: unknown,
    entryType: EntryType,
): node is BookTreeNode<EntryType> {
    return (
        check.hasKey(node, 'entry') &&
        check.isObject(node.entry) &&
        node.entry.entryType === entryType
    );
}

export function isBookTreeNode<const SpecificType extends BookEntryType>(
    input: unknown,
    entryType: SpecificType,
): input is BookTreeNode<SpecificType> {
    return !!(isAnyBookTreeNode(input) && input.entry.entryType === entryType);
}

export function isAnyBookTreeNode(input: unknown): input is BookTreeNode<BookEntryType> {
    return !!(
        check.hasKeys(input, [
            isBookTreeNodeMarker,
            'entry',
        ]) && input[isBookTreeNodeMarker]
    );
}

export function createEmptyBookTreeRoot(): BookTreeNode<BookEntryType.Root> {
    const rootNode: Readonly<BookTreeNode<BookEntryType.Root>> = {
        [isBookTreeNodeMarker]: true,
        entry: {
            entryType: BookEntryType.Root,
            title: '',
            parent: undefined,
            errors: [],
            descriptionParagraphs: [],
        },
        urlBreadcrumb: '',
        fullUrlBreadcrumbs: [],
        children: {} as Record<string, BookTreeNode>,
        manuallyAdded: true,
    };

    return rootNode;
}

export function createBookTreeFromEntries({
    entries,
    debug,
}: {
    entries: ReadonlyArray<BookEntry>;
    debug: boolean;
}): BookTree {
    const cachedTree = getTreeFromCache(entries);
    if (cachedTree) {
        return cachedTree;
    }

    const tree = createEmptyBookTreeRoot();

    entries.forEach((newEntry) => addEntryToTree({tree, newEntry, debug, manuallyAdded: true}));

    const flattenedNodes = flattenTree(tree);

    const bookTree: BookTree = {
        tree,
        flattenedNodes,
    };

    addTreeToCache(entries, bookTree);

    if (debug) {
        console.info('element-book tree:', tree);
    }

    return bookTree;
}

function getOrAddImmediateParent(
    tree: BookTreeNode<BookEntryType.Root>,
    entry: BookEntry,
    debug: boolean,
): BookTreeNode {
    if (!entry.parent) {
        return tree;
    }

    const immediateParent = traverseToImmediateParent(entry, tree);

    if (immediateParent) {
        return immediateParent;
    }

    if (debug) {
        console.info(`parent of ${entry.title} not found in tree; adding it now.`);
    }

    addEntryToTree({tree, newEntry: entry.parent, debug, manuallyAdded: false});
    const immediateParentAfterAdding = traverseToImmediateParent(entry, tree);

    if (!immediateParentAfterAdding) {
        throw new Error(
            `Failed to find node despite having just added it: ${listUrlBreadcrumbs(entry, false).join(' > ')}`,
        );
    }

    return immediateParentAfterAdding;
}

function addEntryToTree({
    tree,
    newEntry,
    debug,
    manuallyAdded,
}: {
    tree: BookTreeNode<BookEntryType.Root>;
    newEntry: BookEntry;
    debug: boolean;
    manuallyAdded: boolean;
}) {
    const errors = bookEntryVerifiers[newEntry.entryType](newEntry);

    newEntry.errors.push(...errors);

    const immediateParent = getOrAddImmediateParent(tree, newEntry, debug);

    const newEntryUrlBreadcrumb = titleToUrlBreadcrumb(newEntry.title);

    const existingChild = immediateParent.children[newEntryUrlBreadcrumb];

    if (existingChild) {
        // ignores multiple entries that have been added by following parent chains
        if (manuallyAdded) {
            if (existingChild.manuallyAdded) {
                existingChild.entry.errors.push(
                    new Error(
                        `Cannot create duplicate '${newEntryUrlBreadcrumb}'${
                            immediateParent.urlBreadcrumb
                                ? ` in parent '${immediateParent.urlBreadcrumb}'.`
                                : ''
                        }`,
                    ),
                );

                return;
            }

            existingChild.manuallyAdded = true;
        }

        return;
    }

    const newNode: BookTreeNode = {
        [isBookTreeNodeMarker]: true,
        children: {},
        urlBreadcrumb: newEntryUrlBreadcrumb,
        fullUrlBreadcrumbs: [
            ...immediateParent.fullUrlBreadcrumbs,
            newEntryUrlBreadcrumb,
        ],
        entry: newEntry,
        manuallyAdded,
    };

    immediateParent.children[newEntryUrlBreadcrumb] = newNode;

    if (
        isBookEntry(newEntry, BookEntryType.Page) &&
        Object.values(newEntry.elementExamples).length
    ) {
        Object.values(newEntry.elementExamples).forEach((elementExample) =>
            addEntryToTree({tree, newEntry: elementExample, debug, manuallyAdded}),
        );
    }
}

export function traverseToImmediateParent(
    entryOrNode: Readonly<BookEntry> | BookTreeNode,
    currentTree: Readonly<BookTreeNode>,
): BookTreeNode | undefined {
    const breadcrumbs: string[] = isAnyBookTreeNode(entryOrNode)
        ? entryOrNode.fullUrlBreadcrumbs.slice(0, -1)
        : listUrlBreadcrumbs(entryOrNode, false);

    if (!breadcrumbs.length) {
        return undefined;
    }

    const immediateParentNode: BookTreeNode | undefined = breadcrumbs.reduce(
        (currentAncestor, nextBreadcrumb) => {
            if (!currentAncestor) {
                return undefined;
            }

            return currentAncestor.children[nextBreadcrumb];
        },
        currentTree as typeof currentTree | undefined,
    );

    return immediateParentNode;
}

export function flattenTree(node: Readonly<BookTreeNode>): BookTreeNode[] {
    const hasErrors: boolean = !!node.entry.errors.length;

    const childNodes = hasErrors
        ? []
        : Object.values(node.children).map((child) => flattenTree(child));

    const entries: BookTreeNode[] = [
        node,
        ...childNodes,
    ].flat();

    return entries;
}
