import {css, defineElementNoInputs, html} from '../index.js';

export const MyWithCssVars = defineElementNoInputs({
    tagName: 'my-with-css-vars',
    cssVars: {
        /** The value assigned here ('blue') becomes the fallback value for this CSS var. */
        'my-with-css-vars-my-var': 'blue',
    },
    styles: ({cssVars}) => css`
        :host {
            /*
                Set CSS vars (or reference the name directly) via the ".name" property
            */
            ${cssVars['my-with-css-vars-my-var'].name}: yellow;
            /*
                Use CSS vars with the ".value" property. This includes a "var" wrapper and the
                assigned fallback value (which in this case is 'blue').
            */
            color: ${cssVars['my-with-css-vars-my-var'].value};
        }
    `,
    renderCallback() {
        return html``;
    },
});
