import {defineElementNoInputs, html} from '../index.js';
import {MyWithInputs} from './my-with-inputs.element.js';

export const MyWithAssignment = defineElementNoInputs({
    tagName: 'my-with-assignment',
    render() {
        return html`
            <h1>My App</h1>
            <${MyWithInputs.assign({
                email: 'user@example.com',
                username: 'user',
            })}></${MyWithInputs}>
        `;
    },
});
