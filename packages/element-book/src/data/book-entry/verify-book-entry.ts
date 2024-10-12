import {check} from '@augment-vir/assert';
import {BookEntryType} from './book-entry-type.js';
import {BookEntry} from './book-entry.js';
import {checkControls} from './book-page/book-page-controls.js';

export const bookEntryVerifiers = {
    [BookEntryType.ElementExample]: () => {
        // currently all element example checking happens on page definition
        return [];
    },
    [BookEntryType.Page]: (bookPage) => {
        return [
            !bookPage.title && new Error(`Cannot define an element-book page with an empty title.`),
            ...checkControls(bookPage.controls, bookPage.title),
        ].filter(check.isTruthy);
    },
    [BookEntryType.Root]: () => {
        return [];
    },
} satisfies {
    [EntryType in BookEntryType]: (entry: Extract<BookEntry, {entryType: EntryType}>) => Error[];
} as {
    [EntryType in BookEntryType]: (entry: BookEntry) => Error[];
};
