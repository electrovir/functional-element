import {describe, itCases} from '@augment-vir/test';
import {fuzzySearch} from './fuzzy-search';

describe(fuzzySearch.name, () => {
    itCases(fuzzySearch, [
        {
            it: 'includes a matched single letter case',
            input: {
                searchIn: 'iiiiiii',
                searchQuery: 'i',
            },
            expect: true,
        },
        {
            it: 'includes matched multiple non-consecutive letters',
            input: {
                searchIn: 'hello there',
                searchQuery: 'her',
            },
            expect: true,
        },
        {
            it: 'excludes no matches',
            input: {
                searchIn: 'hello there',
                searchQuery: 'z',
            },
            expect: false,
        },
        {
            it: 'is case insensitive',
            input: {
                searchIn: 'hello there',
                searchQuery: 'E',
            },
            expect: true,
        },
    ]);
});
