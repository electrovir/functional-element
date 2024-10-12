import {css} from 'element-vir';
import {ViraIconSvg} from '../icons/icon-svg.js';
import {defineViraElement} from './define-vira-element.js';

export const ViraIcon = defineViraElement<{
    icon: Pick<ViraIconSvg, 'svgTemplate'> | undefined;
    /** Ignores the given icon's embedded size and causes the <svg> element to fill its parent. */
    fitContainer?: boolean | undefined;
}>()({
    tagName: 'vira-icon',
    hostClasses: {
        /** Ignores the given icon's embedded size and causes the <svg> element to fill its parent. */
        'vira-icon-fit-container': ({inputs}) => !!inputs.fitContainer,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: inline-block;
        }

        svg {
            /*
                svg is set to inline by default which causes weird padding under the image.
                See: https://stackoverflow.com/a/34952703
            */
            display: block;
        }

        ${hostClasses['vira-icon-fit-container'].selector} svg {
            height: 100%;
            width: 100%;
        }
    `,
    renderCallback({inputs}) {
        if (!inputs.icon) {
            return '';
        }

        return inputs.icon.svgTemplate;
    },
});
