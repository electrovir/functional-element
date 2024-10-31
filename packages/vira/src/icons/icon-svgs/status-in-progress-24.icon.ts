import {html} from 'element-vir';
import {viraIconCssVars} from '../icon-css-vars.js';
import {defineIcon} from '../icon-svg.js';

/**
 * A status icon that indicates that something is still in progress.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/element-vir/vira/book/icons/statusinprogress24icon
 */
export const StatusInProgress24Icon = defineIcon({
    name: 'StatusInProgress24Icon',
    svgTemplate: html`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <circle
                cx="12"
                cy="12"
                r="10"
                fill=${viraIconCssVars['vira-icon-fill-color'].value}
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
            />
            <circle
                cx="7"
                cy="12"
                r="1"
                fill=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width="calc(${viraIconCssVars['vira-icon-stroke-width'].value} - 1px)"
            />
            <circle
                cx="12"
                cy="12"
                r="1"
                fill=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width="calc(${viraIconCssVars['vira-icon-stroke-width'].value} - 1px)"
            />
            <circle
                cx="17"
                cy="12"
                r="1"
                fill=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width="calc(${viraIconCssVars['vira-icon-stroke-width'].value} - 1px)"
            />
        </svg>
    `,
});
