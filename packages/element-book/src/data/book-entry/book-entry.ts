import {check} from '@augment-vir/assert';
import {BookEntryType} from './book-entry-type';
import {BookElementExample, BookPage} from './book-page/book-page';
import {BookRoot} from './book-root';

export type BookEntry = BookPage | BookRoot | BookElementExample;

export function isBookEntry<const SpecificType extends BookEntryType>(
    entry: unknown,
    entryType: SpecificType,
): entry is Extract<BookEntry, {entryType: SpecificType}> {
    return check.hasKey(entry, 'entryType') && entry.entryType === entryType;
}
