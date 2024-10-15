import {ElementBookApp} from 'element-book';
import {
    defineElementNoInputs,
    html,
    requireAllCustomElementsToBeDeclarativeElements,
} from 'element-vir';
import {allBookPages} from './all-book-pages.js';

requireAllCustomElementsToBeDeclarativeElements();

export const VirTestBookApp = defineElementNoInputs({
    tagName: 'vir-test-book-app',
    render() {
        return html`
            <${ElementBookApp.assign({
                pages: allBookPages,
                internalRouterConfig: {
                    useInternalRouter: true,
                    basePath: 'element-vir',
                },
            })}></${ElementBookApp}>
        `;
    },
});
