import {defineElement, html, testId} from 'element-vir';

export const VirWithInputs = defineElement<{
    first: number;
    second: string;
}>()({
    tagName: 'vir-with-inputs',
    render({inputs: inputs}) {
        return html`
            <span ${testId('first')}>${inputs.first}</span>
            <span ${testId('second')}>${inputs.second}</span>
        `;
    },
});
