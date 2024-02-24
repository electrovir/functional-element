import {waitForAnimationFrame} from '@augment-vir/browser';
import {areJsonEqual, extractErrorMessage, isTruthy} from '@augment-vir/common';
import {css, defineElement, defineElementEvent, html, listen} from 'element-vir';
import {
    ControlsWrapper,
    createNewControls,
    updateTreeControls,
} from '../../../data/book-entry/book-page/controls-wrapper';
import {createBookTreeFromEntries} from '../../../data/book-tree/book-tree';
import {searchFlattenedNodes} from '../../../data/book-tree/search-nodes';
import {
    BookFullRoute,
    BookRouter,
    defaultBookFullRoute,
    extractSearchQuery,
} from '../../../routing/book-routing';
import {createBookRouter} from '../../../routing/create-book-router';
import {ColorTheme, colorThemeCssVars, setThemeCssVars} from '../../color-theme/color-theme';
import {ThemeConfig, createTheme} from '../../color-theme/create-color-theme';
import {ChangeRouteEvent} from '../../events/change-route.event';
import {BookNav, scrollSelectedNavElementIntoView} from '../book-nav/book-nav.element';
import {BookError} from '../common/book-error.element';
import {BookPageControls} from '../entry-display/book-page/book-page-controls.element';
import {BookEntryDisplay} from '../entry-display/entry-display/book-entry-display.element';
import {ElementBookSlotName} from './element-book-app-slots';
import {ElementBookConfig} from './element-book-config';
import {getCurrentNodes} from './get-current-nodes';
import {GlobalValues} from './global-values';

type ColorThemeState = {config: ThemeConfig | undefined; theme: ColorTheme};

export const ElementBookApp = defineElement<ElementBookConfig>()({
    tagName: 'element-book-app',
    events: {
        pathUpdate: defineElementEvent<ReadonlyArray<string>>(),
    },
    stateInitStatic: {
        currentRoute: defaultBookFullRoute,
        router: undefined as undefined | BookRouter,
        loading: true,
        colors: {
            config: undefined,
            theme: createTheme(undefined),
        } as ColorThemeState,
        treeBasedControls: undefined as
            | {
                  entries: ElementBookConfig['entries'];
                  lastGlobalInputs: GlobalValues;
                  controls: ControlsWrapper;
              }
            | undefined,
        originalWindowTitle: undefined as string | undefined,
    },
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
            font-family: sans-serif;
            background-color: ${colorThemeCssVars['element-book-page-background-color'].value};
            color: ${colorThemeCssVars['element-book-page-foreground-color'].value};
        }

        .error {
            color: red;
        }

        .root {
            flex-grow: 1;
            width: 100%;
            display: flex;
            position: relative;
        }

        ${BookEntryDisplay} {
            flex-grow: 1;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
        }

        ${BookNav} {
            flex-shrink: 0;
            position: sticky;
            overflow-x: hidden;
            overflow-y: auto;
            max-height: 100%;
            top: 0;
            max-width: min(400px, 40%);
        }
    `,
    initCallback({host, state}) {
        setTimeout(() => {
            scrollNav(host, extractSearchQuery(state.currentRoute.paths), state.currentRoute);
        }, 500);
    },
    cleanupCallback({state, updateState}) {
        if (state.router) {
            state.router.removeAllRouteListeners();
            updateState({router: undefined});
        }
    },
    renderCallback: ({state, inputs, host, updateState, dispatch, events}) => {
        if (inputs._debug) {
            console.info('rendering element-book app');
        }

        function mergeRoutes(newRouteInput: Partial<BookFullRoute>) {
            return {
                ...state.currentRoute,
                ...newRouteInput,
            };
        }

        function areRoutesNew(newRouteInput: Partial<BookFullRoute>) {
            const newRoute = mergeRoutes(newRouteInput);

            return !areJsonEqual(state.currentRoute, newRoute);
        }

        function updateWindowTitle(topNodeTitle: string | undefined) {
            if (!inputs.preventWindowTitleChange) {
                if (!state.originalWindowTitle) {
                    updateState({originalWindowTitle: document.title});
                }
                document.title = [
                    state.originalWindowTitle,
                    topNodeTitle,
                ]
                    .filter(isTruthy)
                    .join(' - ');
            }
        }

        function updateRoutes(newRouteInput: Partial<BookFullRoute>) {
            if (!areRoutesNew(newRouteInput)) {
                return;
            }
            const newRoute = mergeRoutes(newRouteInput);

            if (state.router) {
                state.router.setRoutes(newRoute);
            } else {
                updateState({
                    currentRoute: {
                        ...state.currentRoute,
                        ...newRoute,
                    },
                });
            }

            if (
                inputs.elementBookRoutePaths &&
                !areJsonEqual(inputs.elementBookRoutePaths, state.currentRoute.paths)
            ) {
                dispatch(new events.pathUpdate(newRoute.paths ?? []));
            }
        }

        try {
            if (
                inputs.elementBookRoutePaths &&
                !areJsonEqual(inputs.elementBookRoutePaths, state.currentRoute.paths)
            ) {
                updateRoutes({paths: inputs.elementBookRoutePaths as any});
            }

            if (inputs.internalRouterConfig?.useInternalRouter && !state.router) {
                const router = createBookRouter(inputs.internalRouterConfig.basePath);
                updateState({router});

                router.addRouteListener(true, (fullRoute) => {
                    updateState({
                        currentRoute: fullRoute,
                    });
                });
            } else if (!inputs.internalRouterConfig?.useInternalRouter && state.router) {
                state.router.removeAllRouteListeners();
            }

            const inputThemeConfig: ThemeConfig = {
                themeColor: inputs.themeColor,
            };
            if (!areJsonEqual(inputThemeConfig, state.colors?.config)) {
                const newTheme = createTheme(inputThemeConfig);
                updateState({
                    colors: {
                        config: inputThemeConfig,
                        theme: newTheme,
                    },
                });
                setThemeCssVars(host, newTheme);
            }

            const debug: boolean = inputs._debug ?? false;

            const originalTree = createBookTreeFromEntries({
                entries: inputs.entries,
                debug,
            });

            if (
                !state.treeBasedControls ||
                state.treeBasedControls.entries !== inputs.entries ||
                state.treeBasedControls.lastGlobalInputs !== inputs.globalValues
            ) {
                if (inputs._debug) {
                    console.info('regenerating global controls');
                }
                updateState({
                    treeBasedControls: {
                        entries: inputs.entries,
                        lastGlobalInputs: inputs.globalValues ?? {},
                        controls: updateTreeControls(originalTree.tree, {
                            children: state.treeBasedControls?.controls?.children,
                            controls: inputs.globalValues,
                        }),
                    },
                });
            }

            const searchQuery = extractSearchQuery(state.currentRoute.paths);

            const searchedNodes = searchQuery
                ? searchFlattenedNodes({
                      flattenedNodes: originalTree.flattenedNodes,
                      searchQuery,
                  })
                : undefined;

            const currentNodes =
                searchedNodes ??
                getCurrentNodes(
                    originalTree.flattenedNodes,
                    state.currentRoute.paths,
                    updateRoutes,
                );

            updateWindowTitle(currentNodes[0]?.entry.title);

            const currentControls = state.treeBasedControls?.controls;

            if (!currentControls) {
                return html`
                    <${BookError.assign({
                        message: 'Failed to generate page controls.',
                    })}></${BookError}>
                `;
            }

            if (inputs._debug) {
                console.info({currentControls});
            }

            return html`
                <div
                    class="root"
                    ${listen(ChangeRouteEvent, async (event) => {
                        const newRoute = event.detail;

                        if (!areRoutesNew(newRoute)) {
                            return;
                        }

                        updateState({loading: true});

                        updateRoutes(newRoute);

                        const navElement = host.shadowRoot.querySelector(BookNav.tagName);

                        if (!(navElement instanceof BookNav)) {
                            throw new Error(`Failed to find child '${BookNav.tagName}'`);
                        }
                        scrollNav(host, searchQuery, state.currentRoute);
                    })}
                    ${listen(BookPageControls.events.controlValueChange, (event) => {
                        if (!state.treeBasedControls) {
                            return;
                        }
                        const newControls = createNewControls(
                            currentControls,
                            event.detail.fullUrlBreadcrumbs,
                            event.detail.newValues,
                        );

                        updateState({
                            treeBasedControls: {
                                ...state.treeBasedControls,
                                controls: newControls,
                            },
                        });
                    })}
                >
                    <${BookNav.assign({
                        flattenedNodes: originalTree.flattenedNodes,
                        router: state.router,
                        selectedPath: searchQuery ? undefined : state.currentRoute.paths.slice(1),
                    })}>
                        <slot
                            name=${ElementBookSlotName.NavHeader}
                            slot=${ElementBookSlotName.NavHeader}
                        ></slot>
                    </${BookNav}>
                    <${BookEntryDisplay.assign({
                        controls: currentControls,
                        currentNodes,
                        currentRoute: state.currentRoute,
                        debug,
                        originalTree: originalTree.tree,
                        router: state.router,
                        showLoading: state.loading,
                    })}
                        ${listen(BookEntryDisplay.events.loadingRender, async (event) => {
                            await waitForAnimationFrame();
                            const entryDisplay = host.shadowRoot.querySelector(
                                BookEntryDisplay.tagName,
                            );

                            if (entryDisplay) {
                                entryDisplay.scroll({top: 0, behavior: 'instant'});
                            } else {
                                console.error(
                                    `Failed to find '${BookEntryDisplay.tagName}' for scrolling.`,
                                );
                            }
                            await waitForAnimationFrame();
                            updateState({loading: !event.detail});
                        })}
                    >
                        <slot
                            name=${ElementBookSlotName.Footer}
                            slot=${ElementBookSlotName.Footer}
                        ></slot>
                    </${BookEntryDisplay}>
                </div>
            `;
        } catch (error) {
            console.error(error);
            return html`
                <p class="error">${extractErrorMessage(error)}</p>
            `;
        }
    },
});

async function scrollNav(
    host: typeof ElementBookApp.instanceType,
    searchQuery: string,
    currentRoutes: BookFullRoute,
) {
    /** If there is a search query, then there will be no selected nav to scroll to. */
    if (searchQuery) {
        return;
    }
    if (currentRoutes.paths.length <= 1) {
        return;
    }
    const navElement = host.shadowRoot.querySelector(BookNav.tagName);

    if (!(navElement instanceof BookNav)) {
        throw new Error(`Failed to find child '${BookNav.tagName}'`);
    }

    await scrollSelectedNavElementIntoView(navElement);
}
