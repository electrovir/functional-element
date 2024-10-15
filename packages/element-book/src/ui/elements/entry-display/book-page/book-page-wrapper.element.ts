import {combineErrors} from '@augment-vir/common';
import {css, html} from 'element-vir';
import {BookEntryType} from '../../../../data/book-entry/book-entry-type.js';
import {
    ControlsWrapper,
    traverseControls,
} from '../../../../data/book-entry/book-page/controls-wrapper.js';
import {BookTreeNode} from '../../../../data/book-tree/book-tree-node.js';
import {BookRouter} from '../../../../routing/book-router.js';
import {BookMainRoute, ValidBookPaths} from '../../../../routing/book-routing.js';
import {BookError} from '../../common/book-error.element.js';
import {BookRouteLink} from '../../common/book-route-link.element.js';
import {defineBookElement} from '../../define-book-element.js';
import {BookEntryDescription} from '../book-entry-description.element.js';
import {BookPageControls} from './book-page-controls.element.js';

export const BookPageWrapper = defineBookElement<{
    isTopLevel: boolean;
    pageNode: BookTreeNode<BookEntryType.Page>;
    router: BookRouter | undefined;
    controls: ControlsWrapper;
}>()({
    tagName: 'book-page-wrapper',
    styles: css`
        :host {
            display: block;
        }

        h2,
        h3 {
            margin: 0;
            padding: 0;
            font-size: 1.5em;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .page-header .title-group {
            align-items: flex-start;
            display: flex;
            flex-direction: column;
        }

        ${BookRouteLink} {
            display: inline-block;
        }
    `,
    render({inputs}) {
        const titleTemplate = inputs.isTopLevel
            ? html`
                  <h2 class="header-with-icon">${inputs.pageNode.entry.title}</h2>
              `
            : html`
                  <h3 class="header-with-icon">${inputs.pageNode.entry.title}</h3>
              `;

        const linkPaths: ValidBookPaths = [
            BookMainRoute.Book,
            ...inputs.pageNode.fullUrlBreadcrumbs,
        ];

        const error = inputs.pageNode.entry.errors.length
            ? combineErrors(inputs.pageNode.entry.errors)
            : undefined;
        if (error) {
            console.error(error);
        }

        return html`
            <div class="page-header block-entry">
                <div class="title-group">
                    <${BookRouteLink.assign({
                        route: {
                            paths: linkPaths,
                            hash: undefined,
                            search: undefined,
                        },
                        router: inputs.router,
                    })}>
                        ${titleTemplate}
                    </${BookRouteLink}>
                    ${error
                        ? html`
                              <${BookError.assign({message: error.message})}></${BookError}>
                          `
                        : html`
                              <${BookEntryDescription.assign({
                                  descriptionParagraphs:
                                      inputs.pageNode.entry.descriptionParagraphs,
                              })}></${BookEntryDescription}>
                              <${BookPageControls.assign({
                                  config: inputs.pageNode.entry.controls,
                                  currentValues: traverseControls(
                                      inputs.controls,
                                      inputs.pageNode.fullUrlBreadcrumbs,
                                  ),
                                  fullUrlBreadcrumbs: inputs.pageNode.fullUrlBreadcrumbs,
                              })}></${BookPageControls}>
                          `}
                </div>
            </div>
        `;
    },
});
