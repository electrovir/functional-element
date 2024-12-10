import {html} from 'element-vir';
import {viraIconCssVars} from '../icon-css-vars.js';
import {defineIcon} from '../icon-svg.js';

/**
 * A star icon.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/element-vir/vira/book/icons/star24icon
 */
export const Star24Icon = defineIcon({
    name: 'Star24Icon',
    svgTemplate: html`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke-miterlimit="2">
            <path
                d="m12 2 2.25 6.91h7.26l-5.88 4.27 2.25 6.91L12 15.82l-5.88 4.27 2.25-6.91-5.88-4.27h7.27L12 2Z"
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                fill=${viraIconCssVars['vira-icon-fill-color'].value}
            />
        </svg>
    `,
});
