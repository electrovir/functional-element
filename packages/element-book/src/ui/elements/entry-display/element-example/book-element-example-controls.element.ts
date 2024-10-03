import {css, html} from 'element-vir';
import {BookEntryType} from '../../../../data/book-entry/book-entry-type';
import {BookTreeNode} from '../../../../data/book-tree/book-tree-node';
import {BookRouter} from '../../../../routing/book-router';
import {BookMainRoute, ValidBookPaths} from '../../../../routing/book-routing';
import {colorThemeCssVars} from '../../../color-theme/color-theme';
import {BookRouteLink} from '../../common/book-route-link.element';
import {defineBookElement} from '../../define-book-element';

export const BookElementExampleControls = defineBookElement<{
    elementExampleNode: BookTreeNode<BookEntryType.ElementExample>;
    router: BookRouter | undefined;
}>()({
    tagName: 'book-element-example-controls',
    styles: css`
        :host {
            display: flex;
            color: ${colorThemeCssVars['element-book-page-foreground-faint-level-1-color'].value};
            border-bottom: 1px solid currentColor;
            padding: 0 8px 4px;
        }
    `,
    renderCallback({inputs}) {
        const linkPaths: ValidBookPaths = [
            BookMainRoute.Book,
            ...inputs.elementExampleNode.fullUrlBreadcrumbs,
        ];

        return html`
            <${BookRouteLink.assign({
                route: {
                    paths: linkPaths,
                    hash: undefined,
                    search: undefined,
                },
                router: inputs.router,
            })}>
                ${inputs.elementExampleNode.entry.title}
            </${BookRouteLink}>
        `;
    },
});
