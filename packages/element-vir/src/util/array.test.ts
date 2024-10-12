import {describe, itCases} from '@augment-vir/test';
import {insertAndRemoveValues} from './array.js';

describe(insertAndRemoveValues.name, () => {
    itCases(insertAndRemoveValues, [
        {
            it: 'does not modify an array if no operations are given',
            inputs: [
                [
                    'a',
                    'b',
                    'c',
                ],
                [],
                [],
            ],
            expect: [
                'a',
                'b',
                'c',
            ],
        },
        {
            it: 'does not modify an empty array',
            inputs: [
                [],
                [
                    {
                        index: 4,
                        values: ['a value'],
                    },
                ],
                [
                    8,
                    9,
                ],
            ],
            expect: [],
        },
        {
            it: 'does not modify an empty array',
            inputs: [
                [],
                [
                    {
                        index: 4,
                        values: ['a value'],
                    },
                ],
                [
                    8,
                    9,
                ],
            ],
            expect: [],
        },
        {
            it: 'will insert a value into index 0 of an empty array, ignoring everything else',
            inputs: [
                [],
                [
                    {
                        index: 0,
                        values: ['a value 1'],
                    },
                    {
                        index: 5,
                        values: ['a value 2'],
                    },
                ],
                [
                    8,
                    9,
                ],
            ],
            expect: ['a value 1'],
        },
        {
            it: 'inserts values into an array with existing values',
            inputs: [
                [
                    'a',
                    'b',
                    'c',
                    'd',
                    'e',
                    'f',
                    'g',
                ],
                [
                    {
                        index: 3,
                        values: [
                            'extra 1-1',
                            'extra 1-2',
                            'extra 1-3',
                        ],
                    },
                    {
                        index: 5,
                        values: ['extra 2'],
                    },
                ],
                [
                    0,
                    6,
                ],
            ],
            expect: [
                'b',
                'c',
                'extra 1-1',
                'extra 1-2',
                'extra 1-3',
                'd',
                'e',
                'extra 2',
                'f',
            ],
        },
    ]);
});
