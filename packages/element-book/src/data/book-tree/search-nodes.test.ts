import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineBookPage} from '../book-entry/book-page/define-book-page.js';
import {createBookTreeFromEntries} from './book-tree.js';
import {searchFlattenedNodes} from './search-nodes.js';

describe(searchFlattenedNodes.name, () => {
    it('filters out unmatched nodes', () => {
        const childA = defineBookPage({
            parent: undefined,
            title: 'child A',
        });

        const childC = defineBookPage({
            parent: childA,
            title: 'child-c',
            elementExamplesCallback({defineExample}) {
                defineExample({
                    renderCallback() {
                        return 'yo';
                    },
                    title: 'example A',
                });
            },
        });

        const childB = defineBookPage({
            parent: undefined,
            title: 'child-b',
        });

        const originalTree = createBookTreeFromEntries({
            entries: [
                childA,
                childC,
                childB,
            ],
            debug: false,
        });

        const flattenedOriginalNodeTitles = originalTree.flattenedNodes.map(
            (flattenedNode) => flattenedNode.entry.title,
        );

        const searchedNodes = searchFlattenedNodes({
            searchQuery: 'A',
            flattenedNodes: originalTree.flattenedNodes,
        });

        const searchedTitles = searchedNodes.map((searchedNode) => searchedNode.entry.title);

        assert.deepEquals(flattenedOriginalNodeTitles, [
            '',
            'child A',
            'child-c',
            'example A',
            'child-b',
        ]);
        assert.deepEquals(searchedTitles, [
            'child A',
            'child-c',
            'example A',
        ]);
    });
});
