import {describe, itCases} from '@augment-vir/test';
import {filterToSelectedOptions} from './dropdown-helpers.js';
import {mockOptions} from './dropdown.mock.js';

describe(filterToSelectedOptions.name, () => {
    itCases(filterToSelectedOptions, [
        {
            it: 'returns nothing when nothing is selected',
            input: {
                selected: [],
                options: mockOptions,
            },
            expect: [],
        },
        {
            it: 'returns nothing for no options',
            input: {
                selected: [
                    1,
                    2,
                    3,
                ],
                options: [],
            },
            expect: [],
        },
        {
            it: 'returns the selected option',
            input: {
                selected: [3],
                options: mockOptions,
            },
            expect: [
                mockOptions[3],
            ],
        },
        {
            it: 'truncates the selection without isMultiSelect',
            input: {
                selected: [
                    2,
                    3,
                ],
                options: mockOptions,
            },
            expect: [
                mockOptions[2],
            ],
        },
        {
            it: 'supports isMultiSelect',
            input: {
                selected: [
                    2,
                    3,
                ],
                isMultiSelect: true,
                options: mockOptions,
            },
            expect: [
                mockOptions[2],
                mockOptions[3],
            ],
        },
    ]);
});
