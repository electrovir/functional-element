import {css, html, listen} from 'element-vir';
import {shouldClickEventTriggerRouteChange} from 'spa-router-vir';
import {BookRouter} from '../../../routing/book-router';
import {BookFullRoute} from '../../../routing/book-routing';
import {ChangeRouteEvent} from '../../events/change-route.event';
import {defineBookElement} from '../define-book-element';

export const BookRouteLink = defineBookElement<{
    route: Partial<BookFullRoute>;
    router: Readonly<BookRouter> | undefined;
}>()({
    tagName: 'book-route-link',
    cssVars: {
        'book-route-link-anchor-padding': '',
    },
    styles: ({cssVars}) => css`
        a {
            box-sizing: border-box;
            display: block;
            padding: ${cssVars['book-route-link-anchor-padding'].value};
            text-decoration: inherit;
            color: inherit;
            height: 100%;
            width: 100%;
        }
    `,
    renderCallback: ({inputs, dispatch}) => {
        const linkUrl: string =
            inputs.router?.createRouteUrl({
                ...inputs.route,
            }) ?? '#';

        return html`
            <a
                href=${linkUrl}
                ${listen('click', (clickEvent) => {
                    if (!inputs.router || shouldClickEventTriggerRouteChange(clickEvent)) {
                        clickEvent.preventDefault();
                        window.scrollTo(0, 0);
                        dispatch(new ChangeRouteEvent(inputs.route));
                    }
                })}
            >
                <slot></slot>
            </a>
        `;
    },
});
