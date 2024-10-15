import {defineElementNoInputs, html} from '../index.js';
import {MySimple} from './my-simple.element.js';

export const MyApp = defineElementNoInputs({
    tagName: 'my-app',
    render() {
        return html`
            <h1>My App</h1>
            <${MySimple}></${MySimple}>
        `;
    },
});
