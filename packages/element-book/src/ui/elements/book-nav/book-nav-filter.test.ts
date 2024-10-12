import {ensureType} from '@augment-vir/common';
import {describe, itCases} from '@augment-vir/test';
import {BookEntryType} from '../../../data/book-entry/book-entry-type.js';
import {BookTreeNode} from '../../../data/book-tree/book-tree-node.js';
import {treeExample} from '../../../test/example-tree.test-helper.js';
import {shouldShowTreeNodeInNav} from './book-nav-filter.js';

describe(shouldShowTreeNodeInNav.name, () => {
    itCases(shouldShowTreeNodeInNav, [
        {
            it: 'hides root node',
            inputs: [
                ensureType<BookTreeNode<BookEntryType.Root>>(treeExample.tree),
                undefined,
            ],
            expect: false,
        },
        {
            it: 'shows page node',
            inputs: [
                ensureType<BookTreeNode<BookEntryType.Page>>(treeExample.flattenedNodes[1]),
                undefined,
            ],
            expect: true,
        },
        {
            it: 'hides example when parent is not selected',
            inputs: [
                ensureType<BookTreeNode<BookEntryType.ElementExample>>(
                    treeExample.flattenedNodes[2],
                ),
                undefined,
            ],
            expect: false,
        },
        {
            it: 'shows example when parent is selected',
            inputs: [
                ensureType<BookTreeNode<BookEntryType.ElementExample>>(
                    treeExample.flattenedNodes[2],
                ),
                ensureType<BookTreeNode<BookEntryType.Page>>(treeExample.flattenedNodes[1])
                    .fullUrlBreadcrumbs,
            ],
            expect: true,
        },
        {
            it: 'shows example when sibling is selected',
            inputs: [
                ensureType<BookTreeNode<BookEntryType.ElementExample>>(
                    treeExample.flattenedNodes[2],
                ),
                ensureType<BookTreeNode<BookEntryType.Page>>(
                    treeExample.flattenedNodes[1],
                ).fullUrlBreadcrumbs.concat('another thing'),
            ],
            expect: true,
        },
    ]);
});
