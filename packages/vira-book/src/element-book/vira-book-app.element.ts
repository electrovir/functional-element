import {ElementBookApp, ElementBookSlotName} from 'element-book';
import {css, defineElementNoInputs, html} from 'element-vir';
import {joinUrlParts} from 'url-vir';
import {allElementBookEntries} from './all-element-book-entries';

export const ViraBookApp = defineElementNoInputs({
    tagName: 'vira-book-app',
    styles: css`
        :host {
            display: block;
            height: 100%;
            width: 100%;
        }

        ${ElementBookApp} {
            height: 100%;
            width: 100%;
        }

        h1 {
            margin: 0;
            margin-bottom: 16px;
            padding: 0;
            margin-left: 16px;
        }
    `,
    renderCallback() {
        return html`
            <${ElementBookApp.assign({
                internalRouterConfig: {
                    basePath: joinUrlParts('element-vir', 'vira'),
                    useInternalRouter: true,
                },
                entries: allElementBookEntries,
                themeColor: '#33ccff',
            })}>
                <h1 slot=${ElementBookSlotName.NavHeader}>Vira</h1>
            </${ElementBookApp}>
        `;
    },
});
