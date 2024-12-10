import {html} from 'element-vir';
import {viraIconCssVars} from '../icon-css-vars.js';
import {defineIcon} from '../icon-svg.js';

/**
 * An icon that represents a single document file on a computer file system.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/element-vir/vira/book/icons/document24icon
 */
export const Document24Icon = defineIcon({
    name: 'Document24Icon',
    svgTemplate: html`
        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" width="24" height="24">
            <path
                d="m19 9-6-6H5v18h14V9Z"
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                fill=${viraIconCssVars['vira-icon-fill-color'].value}
            />
            <path
                d="M13 3v6h6"
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                fill="none"
            />
        </svg>
    `,
});
