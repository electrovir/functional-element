import {defineElementNoInputs, html} from '../index.js';

export const MySimple = defineElementNoInputs({
    tagName: 'my-simple',
    render() {
        return html`
            <span>Hello there!</span>
        `;
    },
});
