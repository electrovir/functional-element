import {randomInteger} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {Observable, defineElement, defineElementNoInputs, html, listen} from 'element-vir';

const myObservable = new Observable({defaultValue: 5});

const VirObservablesTestParent = defineElementNoInputs({
    tagName: 'vir-observable-prop-input-test-parent',
    stateInitStatic: {
        renderCount: 0,
    },
    renderCallback({state, updateState}) {
        updateState({renderCount: state.renderCount + 1});
        return html`
            <p>Parent render count (should not change): ${state.renderCount}</p>
            <p>
                <${VirObservablesTestChild.assign({
                    observableProp: myObservable,
                })}></${VirObservablesTestChild}>
            </p>
            <p>
                <button
                    ${listen('click', () => {
                        myObservable.setValue(randomInteger({min: 1, max: 100}));
                    })}
                >
                    trigger update from parent
                </button>
            </p>
        `;
    },
});
const VirObservablesTestChild = defineElement<{observableProp: typeof myObservable}>()({
    tagName: 'vir-observable-prop-input-test-child',
    stateInitStatic: {
        renderCount: 0,
    },
    renderCallback({inputs, state, updateState}) {
        updateState({renderCount: state.renderCount + 1});
        return html`
            <p>child render count (should increase): ${state.renderCount}</p>
            <p>observableProp value: ${inputs.observableProp.value}</p>
            <p>
                <button
                    ${listen('click', () => {
                        inputs.observableProp.setValue(randomInteger({min: 101, max: 200}));
                    })}
                >
                    trigger update from child
                </button>
            </p>
        `;
    },
});

export const observablePropInputTestPage = defineBookPage({
    title: 'observable prop input',
    parent: undefined,
    defineExamples({defineExample}) {
        defineExample({
            title: 'test',
            render() {
                return html`
                    <${VirObservablesTestParent}></${VirObservablesTestParent}>
                `;
            },
        });
    },
});
