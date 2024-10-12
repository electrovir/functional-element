import {describe, itCases} from '@augment-vir/test';
import {ControlsWrapper, createNewControls, traverseControls} from './controls-wrapper.js';

const exampleControls = {
    children: {
        a: {
            children: {
                a1: {
                    children: {},
                    controls: {
                        a1Value1: 'u',
                        a1Value2: 'v',
                    },
                },
                a2: {
                    children: {},
                    controls: {
                        aValue1: 'override',
                    },
                },
            },
            controls: {
                aValue1: 's',
                aValue2: 't',
            },
        },
        b: {
            children: {},
            controls: {
                bValue1: 'q',
                bValue2: 'r',
            },
        },
    },
    controls: {},
} as const satisfies ControlsWrapper;

describe(traverseControls.name, () => {
    itCases(traverseControls, [
        {
            it: 'returns an empty object if there are no more breadcrumbs',
            inputs: [
                exampleControls,
                [],
            ],
            expect: {},
        },
        {
            it: 'returns an empty object if the requested breadcrumb does not exist',
            inputs: [
                exampleControls,
                ['does not exist'],
            ],
            expect: {},
        },
        {
            it: 'grabs top level controls',
            inputs: [
                exampleControls,
                ['a'],
            ],
            expect: exampleControls.children.a.controls,
        },
        {
            it: 'grabs nested combined controls',
            inputs: [
                exampleControls,
                [
                    'a',
                    'a1',
                ],
            ],
            expect: {
                ...exampleControls.children.a.controls,
                ...exampleControls.children.a.children.a1.controls,
            },
        },
        {
            it: 'overrides parent values',
            inputs: [
                exampleControls,
                [
                    'a',
                    'a2',
                ],
            ],
            expect: {
                ...exampleControls.children.a.controls,
                ...exampleControls.children.a.children.a2.controls,
            },
        },
    ]);
});

describe(createNewControls.name, () => {
    itCases(createNewControls, [
        {
            it: 'inserts global controls if no breadcrumbs are provided',
            inputs: [
                exampleControls,
                [],
                {
                    aThing: 'should not do anything',
                },
            ],
            expect: {
                ...exampleControls,
                controls: {
                    aThing: 'should not do anything',
                },
            },
        },
    ]);
});
