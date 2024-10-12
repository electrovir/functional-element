import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {BookEntryType} from '../data/book-entry/book-entry-type.js';
import {isBookTreeNode} from '../data/book-tree/book-tree.js';
import {treeExample} from './example-tree.test-helper.js';

describe('treeExample', () => {
    it('matches correct flattened nodes', () => {
        const expectedTypes = [
            BookEntryType.Root,
            BookEntryType.Page,
            BookEntryType.ElementExample,
            BookEntryType.Page,
            BookEntryType.Page,
            BookEntryType.Page,
        ] as const;

        assert.isLengthExactly(treeExample.flattenedNodes, expectedTypes.length);

        expectedTypes.forEach((expectedType, index) => {
            assert.isTrue(isBookTreeNode(treeExample.flattenedNodes[index], expectedType));
        });
    });
});
