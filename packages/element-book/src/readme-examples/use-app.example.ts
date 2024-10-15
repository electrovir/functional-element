import {defineElementNoInputs, html} from 'element-vir';
import {ElementBookApp} from '../ui/elements/element-book-app/element-book-app.element.js';
import {myPage} from './define-page.example.js';

export const MyApp = defineElementNoInputs({
    tagName: 'my-app',
    render() {
        return html`
            <${ElementBookApp.assign({
                pages: [
                    myPage,
                ],
            })}></${ElementBookApp}>
        `;
    },
});
