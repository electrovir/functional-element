import {Values} from '@augment-vir/common';
import {AnyBookEntryType, BookEntryType} from '../book-entry/book-entry-type.js';
import {BookEntry} from '../book-entry/book-entry.js';

/**
 * Property used to mark tree nodes.
 *
 * @category Internal
 */
export const isBookTreeNodeMarker = '_isBookTreeNode';

/**
 * The base tree node type for {@link BookTreeNode}.
 *
 * @category Internal
 */
export type InternalBookTreeNodeType<Entry> = {
    [isBookTreeNodeMarker]: true;
    entry: Entry;
    /** UrlBreadcrumb is different from entry.title because it's modified to support URLs. */
    urlBreadcrumb: string;
    fullUrlBreadcrumbs: ReadonlyArray<string>;
    children: Record<string, BookTreeNode>;
    /**
     * False when an entry has been added by traversing manually added parents. True when the entry
     * was added as an explicit entry.
     */
    manuallyAdded: boolean;
};

/**
 * Any element-book tree node.
 *
 * @category Internal
 */
export type BookTreeNode<EntryTypes extends BookEntryType = AnyBookEntryType> =
    | Values<{
          [EntryType in EntryTypes]: InternalBookTreeNodeType<
              Extract<BookEntry, {entryType: EntryType}>
          >;
      }>
    | (AnyBookEntryType extends EntryTypes ? InternalBookTreeNodeType<BookEntry> : never);

/**
 * The full element-book app tree for representing page structure.
 *
 * @category Internal
 */
export type BookTree = Readonly<{
    tree: Readonly<BookTreeNode<BookEntryType.Root>>;
    flattenedNodes: ReadonlyArray<Readonly<BookTreeNode>>;
}>;
