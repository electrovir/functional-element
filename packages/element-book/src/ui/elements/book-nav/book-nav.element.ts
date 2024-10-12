import {check} from '@augment-vir/assert';
import {checkIfEntirelyInScrollView, waitForAnimationFrame} from '@augment-vir/web';
import {classMap, css, html, renderIf} from 'element-vir';
import {Element16Icon, ViraIcon} from 'vira';
import {BookEntryType} from '../../../data/book-entry/book-entry-type.js';
import {BookTreeNode} from '../../../data/book-tree/book-tree-node.js';
import {isBookTreeNode} from '../../../data/book-tree/book-tree.js';
import {BookRouter} from '../../../routing/book-router.js';
import {BookMainRoute, defaultBookFullRoute} from '../../../routing/book-routing.js';
import {colorThemeCssVars} from '../../color-theme/color-theme.js';
import {BookRouteLink} from '../common/book-route-link.element.js';
import {defineBookElement} from '../define-book-element.js';
import {ElementBookSlotName} from '../element-book-app/element-book-app-slots.js';
import {shouldShowTreeNodeInNav} from './book-nav-filter.js';

export const BookNav = defineBookElement<{
    flattenedNodes: ReadonlyArray<Readonly<BookTreeNode>>;
    selectedPath: ReadonlyArray<string> | undefined;
    router: BookRouter | undefined;
}>()({
    tagName: 'book-nav',
    cssVars: {
        'book-nav-internal-indent': '0',
    },
    styles: ({cssVars}) => css`
        :host {
            display: flex;
            flex-direction: column;
            padding: 16px 0;
            background-color: ${colorThemeCssVars[
                'element-book-page-background-faint-level-2-color'
            ].value};
        }

        .title-row:hover {
            background-color: ${colorThemeCssVars['element-book-nav-hover-background-color'].value};
            color: ${colorThemeCssVars['element-book-nav-hover-foreground-color'].value};
        }

        .title-row:active {
            background-color: ${colorThemeCssVars['element-book-nav-active-background-color']
                .value};
            color: ${colorThemeCssVars['element-book-nav-active-foreground-color'].value};
        }

        .title-row {
            display: block;
            ${BookRouteLink.cssVars['book-route-link-anchor-padding']
                .name}: 1px 24px 1px calc(calc(16px * ${cssVars['book-nav-internal-indent']
                .value}) + 8px);
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .selected,
        .selected:hover {
            background-color: ${colorThemeCssVars['element-book-nav-selected-background-color']
                .value};
            color: ${colorThemeCssVars['element-book-nav-selected-foreground-color'].value};
            pointer-events: none;
        }

        .title-text {
            white-space: nowrap;
            padding: 1px 0;
            text-overflow: ellipsis;
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 16px;
        }

        ${ViraIcon} {
            display: inline-flex;
            color: ${colorThemeCssVars['element-book-accent-icon-color'].value};
        }
    `,
    renderCallback({inputs}) {
        const navTreeTemplates = inputs.flattenedNodes.map((treeNode) => {
            if (!shouldShowTreeNodeInNav(treeNode, inputs.selectedPath)) {
                return;
            }
            const liStyle = css`
                --book-nav-internal-indent: ${treeNode.fullUrlBreadcrumbs.length - 1};
            `;

            return html`
                <li style=${liStyle}>
                    <${BookRouteLink.assign({
                        router: inputs.router,
                        route: {
                            paths: [
                                BookMainRoute.Book,
                                ...treeNode.fullUrlBreadcrumbs,
                            ],
                        },
                    })}
                        class=${classMap({
                            'title-row': true,
                            selected: inputs.selectedPath
                                ? check.jsonEquals(inputs.selectedPath, treeNode.fullUrlBreadcrumbs)
                                : false,
                        })}
                    >
                        <div class="title-text">
                            ${renderIf(
                                isBookTreeNode(treeNode, BookEntryType.ElementExample),
                                html`
                                    <${ViraIcon.assign({icon: Element16Icon})}></${ViraIcon}>
                                `,
                            )}
                            ${treeNode.entry.title}
                        </div>
                    </${BookRouteLink}>
                </li>
            `;
        });

        return html`
            <${BookRouteLink.assign({
                route: defaultBookFullRoute,
                router: inputs.router,
            })}>
                <slot name=${ElementBookSlotName.NavHeader}>Book</slot>
            </${BookRouteLink}>
            <ul>
                ${navTreeTemplates}
            </ul>
        `;
    },
});

export async function scrollSelectedNavElementIntoView(
    bookNavInstance: typeof BookNav.instanceType,
) {
    await waitForAnimationFrame(2);

    const selected = bookNavInstance.shadowRoot.querySelector('.selected');

    if (!selected) {
        throw new Error('Failed to find selected nav tree element.');
    }

    if (await checkIfEntirelyInScrollView(selected)) {
        return;
    }

    selected.scrollIntoView({behavior: 'smooth', block: 'center'});
}
