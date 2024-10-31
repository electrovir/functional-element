import {css, unsafeCSS} from 'element-vir';

/**
 * A function that generates CSS to hide scrollbars for the given CSS selector.
 *
 * @category Styles
 */
export function hideScrollbars(selector: string) {
    return css`
        ${unsafeCSS(selector)} {
            /* hide scrollbars in Firefox */
            scrollbar-width: none;
            /* hide scrollbars in IE 10+ */
            -ms-overflow-style: none;
        }

        /* hide scrollbars in Chrome/Safari/Webkit */
        ${unsafeCSS(selector)}::-webkit-scrollbar {
            background: transparent;
            width: 0;
            height: 0;
        }
    `;
}
