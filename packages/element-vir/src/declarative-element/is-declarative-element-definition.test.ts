import {AssertionError} from '@augment-vir/assert';
import {describe, itCases} from '@augment-vir/test';
import {nothing} from '../lit-exports/all-lit-exports.js';
import {defineElement} from './define-element.js';
import {defineElementNoInputs} from './define-element-no-inputs.js';
import {assertDeclarativeElementDefinition} from './is-declarative-element-definition.js';

describe(assertDeclarativeElementDefinition.name, () => {
    itCases(assertDeclarativeElementDefinition, [
        {
            it: 'passes with a definition that has inputs',
            inputs: [
                defineElement()({
                    tagName: 'test-thing-984451',
                    renderCallback() {
                        return nothing;
                    },
                }),
            ],
            throws: undefined,
        },
        {
            it: 'passes with a definition that has no inputs',
            inputs: [
                defineElementNoInputs({
                    tagName: 'test-thing-158685',
                    renderCallback() {
                        return nothing;
                    },
                }),
            ],
            throws: undefined,
        },
        {
            it: 'rejects a number input',
            inputs: [
                5,
            ],
            throws: {
                matchMessage: 'input is not an element constructor',
            },
        },
        {
            it: 'rejects an empty object',
            inputs: [
                {},
            ],
            throws: {
                matchConstructor: AssertionError,
            },
        },
    ]);
});
