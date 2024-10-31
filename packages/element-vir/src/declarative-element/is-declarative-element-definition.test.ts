import {AssertionError} from '@augment-vir/assert';
import {describe, itCases} from '@augment-vir/test';
import {nothing} from '../lit-exports/all-lit-exports.js';
import {defineElementNoInputs} from './define-element-no-inputs.js';
import {defineElement} from './define-element.js';
import {assertDeclarativeElementDefinition} from './is-declarative-element-definition.js';

describe(assertDeclarativeElementDefinition.name, () => {
    itCases(assertDeclarativeElementDefinition, [
        {
            it: 'passes with a definition that has inputs',
            inputs: [
                defineElement()({
                    tagName: 'test-thing-984451',
                    render() {
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
                    render() {
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
                matchMessage: 'Input is not a declarative element constructor',
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
