import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {BookEntry} from './book-entry';
import {BookEntryType} from './book-entry-type';

describe('BookEntry', () => {
    it('has correct property types', () => {
        assert.tsType<BookEntry>().matches<{
            title: string;
            parent?: BookEntry | undefined;
            entryType: BookEntryType;
        }>();
    });
});
