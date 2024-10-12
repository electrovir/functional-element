import {ElementBookApp} from 'element-book';
import {css, defineElementNoInputs, html} from 'element-vir';
import {createTheme} from '../create-theme/create-theme.js';
import {createThemeBookEntries} from './theme-book-entries.js';

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
    renderCallback({state}) {
        return html`
            <${ElementBookApp.assign({
                entries: createThemeBookEntries(state.theme),
            })}></${ElementBookApp}>
        `;
    },
});
