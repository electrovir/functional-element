import {BookEntryType} from '../data/book-entry/book-entry-type.js';
import {defineBookPage} from '../data/book-entry/book-page/define-book-page.js';
import {BookTreeNode} from '../data/book-tree/book-tree-node.js';
import {createBookTreeFromEntries} from '../data/book-tree/book-tree.js';

const page1 = defineBookPage({
    parent: undefined,
    title: 'page 1',
    defineExamples({defineExample}) {
        defineExample({
            title: 'example 1',
            render() {
                return 'hi';
            },
        });
    },
});

const exampleEntries = [
    page1,
    defineBookPage({
        parent: undefined,
        title: 'page 2',
    }),
    defineBookPage({
        parent: page1,
        title: 'page 1 child',
    }),
    defineBookPage({
        parent: page1,
        title: 'aaaaaaaa',
        descriptionParagraphs: ['this page should be sorted above page 1 child'],
    }),
] as const;

const exampleTreeInputs = {
    entries: exampleEntries,
    debug: false,
} as const;

const tree = createBookTreeFromEntries(exampleTreeInputs);

export const treeExample = {
    tree: tree.tree,
    flattenedNodes: tree.flattenedNodes as [
        BookTreeNode<BookEntryType.Root>,
        BookTreeNode<BookEntryType.Page>,
        BookTreeNode<BookEntryType.ElementExample>,
        BookTreeNode<BookEntryType.Page>,
        BookTreeNode<BookEntryType.Page>,
        BookTreeNode<BookEntryType.Page>,
    ],
    treeInputs: exampleTreeInputs,
    entries: exampleEntries,
} as const;
