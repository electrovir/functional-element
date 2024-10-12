import {css, html} from 'element-vir';
import {colorThemeCssVars} from '../../color-theme/color-theme.js';
import {defineBookElement} from '../define-book-element.js';

export const BookEntryDescription = defineBookElement<{
    descriptionParagraphs: ReadonlyArray<string>;
}>()({
    tagName: 'book-entry-description',
    styles: css`
        :host {
            color: ${colorThemeCssVars['element-book-page-foreground-faint-level-1-color'].value};
            display: inline-flex;
            flex-direction: column;
            gap: 8px;
        }

        :host(:hover) {
            color: ${colorThemeCssVars['element-book-page-foreground-color'].value};
        }

        p {
            margin: 0;
            padding: 0;
        }

        p:first-child {
            margin-top: 8px;
        }
    `,
    renderCallback({inputs}) {
        return inputs.descriptionParagraphs.map((paragraph) => {
            return html`
                <p>${paragraph}</p>
            `;
        });
    },
});
