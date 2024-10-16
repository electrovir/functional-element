import {check} from '@augment-vir/assert';
import {BookEntryType} from './book-entry-type.js';
import {BookElementExample, BookPage} from './book-page/book-page.js';
import {BookRoot} from './book-root.js';

/**
 * All possible book entries.
 *
 * @category Internal
 */
export type BookEntry = BookPage | BookRoot | BookElementExample;

/**
 * Check if the input is a book entry of the given type.
 *
 * @internal
 */
export function isBookEntry<const SpecificType extends BookEntryType>(
    entry: unknown,
    entryType: SpecificType,
): entry is Extract<BookEntry, {entryType: SpecificType}> {
    return check.hasKey(entry, 'entryType') && entry.entryType === entryType;
}
