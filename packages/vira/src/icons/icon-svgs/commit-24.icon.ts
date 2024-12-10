import {html} from 'element-vir';
import {viraIconCssVars} from '../icon-css-vars.js';
import {defineIcon} from '../icon-svg.js';

/**
 * An icon that represents a single commit in git.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/element-vir/vira/book/icons/commit24icon
 */
export const Commit24Icon = defineIcon({
    name: 'Commit24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xml:space="preserve"
            width="24"
            height="24"
            style="fill-rule:evenodd;clip-rule:evenodd;stroke-miterlimit:1.5"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                fill=${viraIconCssVars['vira-icon-fill-color'].value}
            />
            <path
                d="M12 2v6m0 8v6"
                stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                fill="none"
            />
        </svg>
    `,
});
