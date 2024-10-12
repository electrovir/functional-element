import {defineElement, html} from '../index.js';

export const MyWithInputs = defineElement<{
    username: string;
    email: string;
}>()({
    tagName: 'my-with-inputs',
    renderCallback({inputs}) {
        return html`
            <span>Hello there ${inputs.username}!</span>
        `;
    },
});
