import {html} from 'element-vir';
import {viraIconCssVars} from '../icon-css-vars.js';
import {defineIcon} from '../icon-svg.js';

/**
 * An open eye icon.
 *
 * @category Icon
 * @category SVG
 * @see https://electrovir.github.io/element-vir/vira/book/icons/eyeopen24icon
 */
export const EyeOpen24Icon = defineIcon({
    name: 'EyeOpen24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill=${viraIconCssVars['vira-icon-fill-color'].value}
            stroke=${viraIconCssVars['vira-icon-stroke-color'].value}
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                stroke-width=${viraIconCssVars['vira-icon-stroke-width'].value}
                d="M12 5c5 0 9 7 9 7s-4 7-9 7-9-7-9-7 4-7 9-7Zm0 4a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
            />
        </svg>
    `,
});
