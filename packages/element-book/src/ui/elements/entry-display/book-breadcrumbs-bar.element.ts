import {wait} from '@augment-vir/common';
import {css, html, listen, renderIf} from 'element-vir';
import {BookRouter} from '../../../routing/book-router';
import {BookFullRoute, BookMainRoute, defaultBookFullRoute} from '../../../routing/book-routing';
import {colorThemeCssVars} from '../../color-theme/color-theme';
import {ChangeRouteEvent} from '../../events/change-route.event';
import {BookBreadcrumbs} from '../book-breadcrumbs.element';
import {defineBookElement} from '../define-book-element';

export const BookBreadcrumbsBar = defineBookElement<{
    currentSearch: string;
    currentRoute: Readonly<BookFullRoute>;
    router: Readonly<BookRouter> | undefined;
}>()({
    tagName: 'book-breadcrumbs-bar',
    styles: css`
        :host {
            border-bottom: 1px solid
                ${colorThemeCssVars['element-book-page-foreground-faint-level-2-color'].value};
            padding: 4px 8px;
            background-color: ${colorThemeCssVars['element-book-page-background-color'].value};
            z-index: 9999999999;
            display: flex;
            gap: 16px;
            justify-content: space-between;
        }
    `,
    renderCallback({inputs, dispatch}) {
        return html`
            ${renderIf(
                !!inputs.currentSearch,
                html`
                    &nbsp;
                `,
                html`
                    <${BookBreadcrumbs.assign({
                        currentRoute: inputs.currentRoute,
                        router: inputs.router,
                    })}></${BookBreadcrumbs}>
                `,
            )}
            <input
                placeholder="search"
                .value=${inputs.currentSearch}
                ${listen('input', async (event) => {
                    const inputElement = event.currentTarget;

                    if (!(inputElement instanceof HTMLInputElement)) {
                        throw new Error('Failed to find input element for search.');
                    }
                    const preThrottleValue = inputElement.value;
                    // throttle it a bit
                    await wait(200);

                    if (inputElement.value !== preThrottleValue) {
                        return;
                    }

                    if (inputElement.value) {
                        dispatch(
                            new ChangeRouteEvent({
                                paths: [
                                    BookMainRoute.Search,
                                    encodeURIComponent(inputElement.value),
                                ],
                            }),
                        );
                    } else {
                        dispatch(new ChangeRouteEvent(defaultBookFullRoute));
                    }
                })}
            />
        `;
    },
});
