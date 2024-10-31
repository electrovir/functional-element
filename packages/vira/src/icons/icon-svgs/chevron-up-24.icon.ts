import {html} from 'element-vir';
import {viraIconCssVars} from '../icon-css-vars.js';
import {defineIcon} from '../icon-svg.js';

/**
 * A chevron that points upwards. For an icon that points downwards, rotate this icon.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/element-vir/vira/book/icons/chevronup24icon
 */
export const ChevronUp24Icon = defineIcon({
    name: 'ChevronUp24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                d="M6 15 L12 9 18 15"
            />
        </svg>
    `,
});
