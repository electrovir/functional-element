import {defineElement, html} from '../index.js';

export const MyWithInputs = defineElement<{
    username: string;
    email: string;
}>()({
    tagName: 'my-with-inputs',
    render({inputs}) {
        return html`
            <span>Hello there ${inputs.username}!</span>
        `;
    },
});
