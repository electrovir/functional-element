import {assert} from '@augment-vir/assert';
import {describe, it, itCases} from '@augment-vir/test';
import {treeExample} from '../../test/example-tree.test-helper';
import {BookEntryType} from '../book-entry/book-entry-type';
import {
    createBookTreeFromEntries,
    createEmptyBookTreeRoot,
    doesNodeHaveEntryType,
    flattenTree,
} from './book-tree';
import {BookTreeNode, isBookTreeNodeMarker} from './book-tree-node';

const expectedTree = {
    [isBookTreeNodeMarker]: true,
    manuallyAdded: true,
    children: {
        'page-1': {
            [isBookTreeNodeMarker]: true,
            manuallyAdded: true,
            children: {
                'example-1': {
                    [isBookTreeNodeMarker]: true,
                    manuallyAdded: true,
                    children: {},
                    entry: treeExample.entries[0].elementExamples['example-1']!,
                    urlBreadcrumb: 'example-1',
                    fullUrlBreadcrumbs: [
                        'page-1',
                        'example-1',
                    ],
                },
                'page-1-child': {
                    [isBookTreeNodeMarker]: true,
                    manuallyAdded: true,
                    children: {},
                    entry: treeExample.entries[2],
                    urlBreadcrumb: 'page-1-child',
                    fullUrlBreadcrumbs: [
                        'page-1',
                        'page-1-child',
                    ],
                },
                aaaaaaaa: {
                    [isBookTreeNodeMarker]: true,
                    manuallyAdded: true,
                    children: {},
                    entry: treeExample.entries[3],
                    urlBreadcrumb: 'aaaaaaaa',
                    fullUrlBreadcrumbs: [
                        'page-1',
                        'aaaaaaaa',
                    ],
                },
            },
            entry: treeExample.entries[0],
            fullUrlBreadcrumbs: [
                'page-1',
            ],
            urlBreadcrumb: 'page-1',
        },
        'page-2': {
            [isBookTreeNodeMarker]: true,
            manuallyAdded: true,
            children: {},
            entry: treeExample.entries[1],
            urlBreadcrumb: 'page-2',
            fullUrlBreadcrumbs: [
                'page-2',
            ],
        },
    },
    entry: {
        descriptionParagraphs: [],
        entryType: BookEntryType.Root,
        errors: [],
        parent: undefined,
        title: '',
    },
    urlBreadcrumb: '',
    fullUrlBreadcrumbs: [],
} satisfies BookTreeNode<BookEntryType.Root>;

describe(createBookTreeFromEntries.name, () => {
    it('produces a correct tree', () => {
        assert.deepEquals(createBookTreeFromEntries(treeExample.treeInputs).tree, expectedTree);
    });
});

describe(doesNodeHaveEntryType.name, () => {
    it('type guards', () => {
        const emptyTreeRootNode = createEmptyBookTreeRoot() as any;

        assert.tsType(emptyTreeRootNode).notEquals<BookTreeNode<BookEntryType.Page>>();
        if (doesNodeHaveEntryType(emptyTreeRootNode, BookEntryType.Page)) {
            assert.tsType(emptyTreeRootNode).equals<BookTreeNode<BookEntryType.Page>>();
            assert.tsType(emptyTreeRootNode.entry.entryType).equals<typeof BookEntryType.Page>();
            assert.tsType(emptyTreeRootNode).notEquals<BookTreeNode<BookEntryType.Root>>();
        }
    });
});

describe(flattenTree.name, () => {
    itCases(flattenTree, [
        {
            it: 'flattens a basic tree',
            input: treeExample.tree,
            expect: [
                treeExample.tree,
                treeExample.tree.children['page-1']!,
                treeExample.tree.children['page-1']!.children['example-1']!,
                treeExample.tree.children['page-1']!.children['page-1-child']!,
                treeExample.tree.children['page-1']!.children['aaaaaaaa']!,
                treeExample.tree.children['page-2']!,
            ],
        },
    ]);
});
