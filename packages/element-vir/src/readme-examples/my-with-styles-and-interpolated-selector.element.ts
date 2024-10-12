import {css, defineElementNoInputs, html} from '../index.js';
import {MySimple} from './my-simple.element.js';

export const MyWithStylesAndInterpolatedSelector = defineElementNoInputs({
    tagName: 'my-with-styles-and-interpolated-selector',
    styles: css`
        ${MySimple} {
            background-color: blue;
        }
    `,
    renderCallback() {
        return html`
            <${MySimple}></${MySimple}>
        `;
    },
});
