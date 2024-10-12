import {check} from '@augment-vir/assert';
import {BookEntryType} from '../../../data/book-entry/book-entry-type.js';
import {BookTreeNode} from '../../../data/book-tree/book-tree-node.js';

export function shouldShowTreeNodeInNav(
    currentNode: Readonly<BookTreeNode>,
    selectedPath: undefined | ReadonlyArray<string>,
): boolean {
    if (currentNode.entry.entryType === BookEntryType.Root) {
        return false;
    }

    if (currentNode.entry.entryType === BookEntryType.Page) {
        return true;
    }

    const isParentSelected = check.jsonEquals(
        selectedPath as unknown,
        currentNode.fullUrlBreadcrumbs.slice(0, -1),
    );

    if (isParentSelected) {
        return true;
    }

    return check.jsonEquals(
        selectedPath?.slice(0, -1),
        currentNode.fullUrlBreadcrumbs.slice(0, -1),
    );
}
