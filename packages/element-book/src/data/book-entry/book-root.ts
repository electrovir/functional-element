import {Overwrite} from '@augment-vir/common';
import {BaseBookEntry} from './base-book-entry';
import {BookEntryType} from './book-entry-type';

export type BookRoot = Overwrite<
    BaseBookEntry,
    {
        entryType: BookEntryType.Root;
        parent: undefined;
    }
>;
