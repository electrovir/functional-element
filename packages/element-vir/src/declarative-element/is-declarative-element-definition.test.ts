import {itCases} from '@augment-vir/browser-testing';
import {AssertionError} from 'run-time-assertions';
import {nothing} from '../lit-exports/all-lit-exports';
import {defineElement} from './define-element';
import {defineElementNoInputs} from './define-element-no-inputs';
import {assertDeclarativeElementDefinition} from './is-declarative-element-definition';

describe(assertDeclarativeElementDefinition.name, () => {
    itCases(assertDeclarativeElementDefinition, [
        {
            it: 'passes with a definition that has inputs',
            inputs: [
                defineElement<{}>()({
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
            throws: 'input is not an element constructor',
        },
        {
            it: 'rejects an empty object',
            inputs: [
                {},
            ],
            throws: AssertionError,
        },
    ]);
});
