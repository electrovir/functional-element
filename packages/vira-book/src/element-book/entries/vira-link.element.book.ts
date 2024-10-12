import {BookPageControlTypeEnum, defineBookPage, definePageControl} from 'element-book';
import {css, html, unsafeCSS} from 'element-vir';
import {ViraLink} from 'vira';
import {elementsBookPage} from '../elements.book.js';

export const viraLinkBookPage = defineBookPage({
    title: ViraLink.tagName,
    parent: elementsBookPage,
    descriptionParagraphs: [
        'Securely handles hyperlinks or route changes without harming right click or modifier+click functionality.',
    ],
    controls: {
        'CSS Color': definePageControl({
            controlType: BookPageControlTypeEnum.Color,
            initValue: '',
        }),
        'Hover color': definePageControl({
            controlType: BookPageControlTypeEnum.Color,
            initValue: '',
        }),
    },
    elementExamplesCallback({defineExample}) {
        function defineLinkExample({
            title,
            inputs,
        }: {
            title: string;
            inputs: (typeof ViraLink)['inputsType'];
        }) {
            defineExample({
                title,
                renderCallback({controls}) {
                    const styles = css`
                        ${ViraLink.cssVars['vira-link-hover-color'].name}: ${unsafeCSS(
                            controls['Hover color'] || 'inherit',
                        )};
                        color: ${unsafeCSS(controls['CSS Color'] || 'inherit')};
                    `;

                    return html`
                        <${ViraLink.assign(inputs)} style=${styles}>My Link</${ViraLink}>
                    `;
                },
            });
        }

        defineLinkExample({
            title: 'with URL',
            inputs: {
                link: {
                    newTab: true,
                    url: 'https://www.wikipedia.org',
                },
            },
        });
        defineLinkExample({
            title: 'with route',
            inputs: {
                route: {
                    route: {paths: []},
                    router: {
                        createRouteUrl() {
                            return window.location.href;
                        },
                        setRouteOnDirectNavigation(route, event) {
                            console.info(route, event);
                            return false;
                        },
                    },
                },
            },
        });
    },
});
