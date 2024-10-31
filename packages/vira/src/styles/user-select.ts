import {css} from 'element-vir';

/**
 * A chunk of CSS that disables user selection.
 *
 * @category Styles
 */
export const noUserSelect = css`
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
`;
