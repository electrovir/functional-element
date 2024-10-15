import {defineElement, html} from 'element-vir';

const ArrayAElement = defineElement<{value: string}>()({
    tagName: 'element-vir-test-a',
    render({inputs}) {
        return html`
            A - ${inputs.value}
        `;
    },
});

const ArrayBElement = defineElement<{value: string}>()({
    tagName: 'element-vir-test-b',
    render({inputs}) {
        return html`
            B - ${inputs.value}
        `;
    },
});

const ArrayCElement = defineElement<{value: string}>()({
    tagName: 'element-vir-test-c',
    render({inputs}) {
        return html`
            C - ${inputs.value}
        `;
    },
});

const ArrayDElement = defineElement<{value: string}>()({
    tagName: 'element-vir-test-d',
    render({inputs}) {
        return html`
            D - ${inputs.value}
        `;
    },
});

export const allTestArrayElements = [
    ArrayAElement,
    ArrayBElement,
    ArrayCElement,
    ArrayDElement,
];
