import {Values} from '@augment-vir/common';
import {AnyBookEntryType, BookEntryType} from '../book-entry/book-entry-type.js';
import {BookEntry} from '../book-entry/book-entry.js';

export const isBookTreeNodeMarker = '_isBookTreeNode';

type InternalBookTreeNodeType<Entry> = {
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

export type BookTreeNode<EntryTypes extends BookEntryType = AnyBookEntryType> =
    | Values<{
          [EntryType in EntryTypes]: InternalBookTreeNodeType<
              Extract<BookEntry, {entryType: EntryType}>
          >;
      }>
    | (AnyBookEntryType extends EntryTypes ? InternalBookTreeNodeType<BookEntry> : never);

export type BookTree = Readonly<{
    tree: Readonly<BookTreeNode<BookEntryType.Root>>;
    flattenedNodes: ReadonlyArray<Readonly<BookTreeNode>>;
}>;
