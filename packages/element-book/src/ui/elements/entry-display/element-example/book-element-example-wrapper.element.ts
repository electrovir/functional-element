import {omitObjectKeys} from '@augment-vir/common';
import {css, html} from 'element-vir';
import {BookEntryType} from '../../../../data/book-entry/book-entry-type.js';
import {BookPageControlsValues} from '../../../../data/book-entry/book-page/book-page-controls.js';
import {BookTreeNode} from '../../../../data/book-tree/book-tree-node.js';
import {BookRouter} from '../../../../routing/book-router.js';
import {colorThemeCssVars} from '../../../color-theme/color-theme.js';
import {defineBookElement} from '../../define-book-element.js';
import {BookElementExampleControls} from './book-element-example-controls.element.js';
import {BookElementExampleViewer} from './book-element-example-viewer.element.js';

export const BookElementExampleWrapper = defineBookElement<{
    elementExampleNode: BookTreeNode<BookEntryType.ElementExample>;
    currentPageControls: BookPageControlsValues;
    router: BookRouter | undefined;
}>()({
    tagName: 'book-element-example-wrapper',
    styles: css`
        :host {
            display: inline-flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        .examples-wrapper {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
        }

        .error {
            color: red;
            font-weight: bold;
        }

        .individual-example-wrapper {
            display: flex;
            flex-direction: column;
            gap: 24px;
            max-width: 100%;
        }

        ${BookElementExampleControls} {
            color: ${colorThemeCssVars['element-book-page-foreground-faint-level-1-color'].value};
        }

        :host(:hover) ${BookElementExampleControls} {
            color: ${colorThemeCssVars['element-book-accent-icon-color'].value};
        }
    `,
    renderCallback({inputs}) {
        return html`
            <div class="individual-example-wrapper">
                <${BookElementExampleControls.assign(
                    omitObjectKeys(inputs, ['currentPageControls']),
                )}></${BookElementExampleControls}>
                <${BookElementExampleViewer.assign(inputs)}></${BookElementExampleViewer}>
            </div>
        `;
    },
});
