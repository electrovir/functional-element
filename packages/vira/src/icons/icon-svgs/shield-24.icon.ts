import {html} from 'element-vir';
import {viraIconCssVars} from '../icon-css-vars.js';
import {defineIcon} from '../icon-svg.js';

/**
 * A shield icon.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/element-vir/vira/book/icons/shield24icon
 */
export const Shield24Icon = defineIcon({
    name: 'Shield24Icon',
    svgTemplate: html`
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24" height="24">
            <path
                d="M12 21s-8-3.5-8-10V6s4.8-.1 8-3c3.2 2.9 8 3 8 3v5c0 6.5-8 10-8 10Z"
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                fill=${viraIconCssVars['vira-icon-fill-color'].value}
            />
        </svg>
    `,
});
