import {css} from 'element-vir';

/**
 * A chunk of CSS that succinctly removes all padding and margin from an element.
 *
 * @category Styles
 */
export const noNativeSpacing = css`
    padding: 0;
    margin: 0;
`;

/**
 * A chunk of CSS that succinctly removes all default built-in form element styles. This is
 * particularly useful for `<button>` elements.
 *
 * @category Styles
 */
export const noNativeFormStyles = css`
    ${noNativeSpacing};
    cursor: unset;
    background: none;
    border: none;
    font: inherit;
    color: inherit;
    text-transform: inherit;
    text-decoration: inherit;
    -webkit-tap-highlight-color: transparent;
`;
