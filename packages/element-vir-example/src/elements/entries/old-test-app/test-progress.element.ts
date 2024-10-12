import {assert} from '@augment-vir/assert';
import {defineElement, html, requireAllCustomElementsToBeDeclarativeElements} from 'element-vir';

requireAllCustomElementsToBeDeclarativeElements();

export type TestTypesProgressInputs = {
    thingA: number;
    thingB?: number;
};

export const TestTypesProgress = defineElement<TestTypesProgressInputs>()({
    tagName: 'vir-test-types-progress',
    renderCallback() {
        return html``;
    },
});

// test that this property exists
assert.tsType<typeof TestTypesProgress.instanceType>().matches<{instanceInputs: any}>();
