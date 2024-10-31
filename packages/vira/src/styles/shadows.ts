import {CSSResult, css} from 'element-vir';

const shadowColor = css`#e2e2e2`;

/**
 * CSS chunks for default Vira shadow styles.
 *
 * @category Styles
 */
export const viraShadows = {
    menuShadow: css`
        filter: drop-shadow(0px 5px 5px ${shadowColor});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,
    menuShadowReversed: css`
        filter: drop-shadow(0px -5px 5px ${shadowColor});
        /*
           This helps force the drop shadow to re-render when the element moves or the page changes.
       */
        will-change: filter;
    `,
} as const satisfies Record<string, CSSResult>;
