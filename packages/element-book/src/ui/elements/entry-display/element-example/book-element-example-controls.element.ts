import {css, html} from 'element-vir';
import {BookEntryType} from '../../../../data/book-entry/book-entry-type.js';
import {BookTreeNode} from '../../../../data/book-tree/book-tree-node.js';
import {BookRouter} from '../../../../routing/book-router.js';
import {BookMainRoute, ValidBookPaths} from '../../../../routing/book-routing.js';
import {colorThemeCssVars} from '../../../color-theme/color-theme.js';
import {BookRouteLink} from '../../common/book-route-link.element.js';
import {defineBookElement} from '../../define-book-element.js';

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
    render({inputs}) {
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
