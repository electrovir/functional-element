import {css, defineElementEvent, html, onDomCreated, renderIf} from 'element-vir';
import {LoaderAnimated24Icon, ViraIcon, viraAnimationDurations} from 'vira';
import {BookEntryType} from '../../../../data/book-entry/book-entry-type.js';
import {ControlsWrapper} from '../../../../data/book-entry/book-page/controls-wrapper.js';
import {BookTreeNode} from '../../../../data/book-tree/book-tree-node.js';
import {BookRouter} from '../../../../routing/book-router.js';
import {BookFullRoute, extractSearchQuery} from '../../../../routing/book-routing.js';
import {defineBookElement} from '../../define-book-element.js';
import {ElementBookSlotName} from '../../element-book-app/element-book-app-slots.js';
import {BookBreadcrumbsBar} from '../book-breadcrumbs-bar.element.js';
import {createNodeTemplates} from './create-node-templates.js';

export const BookEntryDisplay = defineBookElement<{
    controls: ControlsWrapper;
    currentNodes: ReadonlyArray<BookTreeNode>;
    currentRoute: Readonly<BookFullRoute>;
    debug: boolean;
    originalTree: Readonly<BookTreeNode<BookEntryType.Root>>;
    router: BookRouter | undefined;
    showLoading: boolean;
}>()({
    tagName: 'book-entry-display',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            position: relative;
        }

        .all-book-entries-wrapper {
            flex-grow: 1;
            padding: 32px;
        }

        .inline-entry {
            margin: 8px;
        }

        * + .block-entry {
            margin-top: 32px;
        }

        .block-entry + * {
            margin-top: 32px;
        }

        h1 {
            margin: 0;
            padding: 0;
        }

        ${BookBreadcrumbsBar} {
            position: sticky;
            top: 0;
        }

        .loading {
            flex-grow: 1;
            padding: 64px;
            position: absolute;
            background-color: white;
            animation: fade-in linear
                ${viraAnimationDurations['vira-interaction-animation-duration'].value} forwards;
            z-index: 100;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }

        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
    `,
    events: {
        loadingRender: defineElementEvent<boolean>(),
    },
    stateInitStatic: {
        lastElement: undefined as undefined | Element,
    },
    render: ({inputs, dispatch, events, state, updateState}) => {
        const currentSearch = extractSearchQuery(inputs.currentRoute.paths);

        const entryTemplates = createNodeTemplates({
            currentNodes: inputs.currentNodes,
            isTopLevel: true,
            router: inputs.router,
            isSearching: !!currentSearch,
            controls: inputs.controls,
            originalTree: inputs.originalTree,
        });

        return html`
            <${BookBreadcrumbsBar.assign({
                currentSearch,
                currentRoute: inputs.currentRoute,
                router: inputs.router,
            })}></${BookBreadcrumbsBar}>

            ${renderIf(
                inputs.showLoading,
                html`
                    <div
                        ${onDomCreated(() => {
                            dispatch(new events.loadingRender(true));
                        })}
                        class="loading"
                    >
                        <${ViraIcon.assign({icon: LoaderAnimated24Icon})}></${ViraIcon}>
                    </div>
                    ${renderIf(
                        !!state.lastElement,
                        html`
                            ${state.lastElement}
                            <slot name=${ElementBookSlotName.Footer}></slot>
                        `,
                    )}
                `,
                html`
                    <div
                        ${onDomCreated((element) => {
                            updateState({lastElement: element});
                        })}
                        class="all-book-entries-wrapper"
                    >
                        ${entryTemplates}
                    </div>
                    <slot name=${ElementBookSlotName.Footer}></slot>
                `,
            )}
        `;
    },
});
