import {ElementBookApp} from 'element-book';
import {css, defineElementNoInputs, html} from 'element-vir';
import {createTheme} from '../create-theme/create-theme.js';
import {createThemeBookPages} from './theme-book-pages.js';

export const VirThemeBookApp = defineElementNoInputs({
    tagName: 'vir-theme-book-app',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 32px;
            min-height: 100%;
            width: 100%;
        }

        ${ElementBookApp} {
            flex-grow: 1;
        }
    `,
    stateInitStatic: {
        theme: createTheme({
            elementTagPrefix: 'vir',
        }),
    },
    render({state}) {
        return html`
            <${ElementBookApp.assign({
                pages: createThemeBookPages(state.theme),
            })}></${ElementBookApp}>
        `;
    },
});
