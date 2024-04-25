import {PartialAndUndefined} from '@augment-vir/common';
import {css, html, HTMLTemplateResult} from 'element-vir';
import {Check24Icon} from '../icons/icon-svgs/check-24.icon';
import {noUserSelect, viraAnimationDurations} from '../styles';
import {viraBorders} from '../styles/border';
import {defineViraElement} from './define-vira-element';
import {ViraIcon} from './vira-icon.element';

export type ViraDropdownOption = {
    /** Each `id` must be unique across all options. */
    id: PropertyKey;
    label: string;
} & PartialAndUndefined<{
    disabled?: boolean | undefined;
    hoverText?: string | undefined;
    /** An optional custom template for this option. */
    template?: HTMLTemplateResult | undefined;
}>;

export const ViraDropdownItem = defineViraElement<{
    label: string;
    selected: boolean;
}>()({
    tagName: 'vira-dropdown-item',
    hostClasses: {
        'vira-dropdown-item-selected': ({inputs}) => inputs.selected,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: flex;
            ${noUserSelect};
        }

        .option {
            pointer-events: none;
            min-height: 24px;
            display: flex;
            align-items: center;
            padding: 8px;
            padding-left: 0;
            text-align: left;
        }

        ${hostClasses['vira-dropdown-item-selected'].selector} ${ViraIcon} {
            opacity: 1;
        }

        /*
            The check icon looks centered when it has a border.
            However, it does not have a border here.
        */
        ${ViraIcon} {
            transition: opacity
                ${viraAnimationDurations['vira-interaction-animation-duration'].value};
            opacity: 0;
            margin-top: -4px;
            margin-right: -2px;
            margin-left: 2px;
        }

        .dropdown-wrapper:not(.reverse-direction) .option:last-of-type {
            border-radius: 0 0 ${viraBorders['vira-form-input-radius'].value}
                ${viraBorders['vira-form-input-radius'].value};
        }

        .dropdown-wrapper.reverse-direction .option:first-of-type {
            border-radius: ${viraBorders['vira-form-input-radius'].value}
                ${viraBorders['vira-form-input-radius'].value} 0 0;
        }
    `,
    renderCallback({inputs}) {
        return html`
            <div class="option">
                <${ViraIcon.assign({icon: Check24Icon})}></${ViraIcon}>
                <slot>${inputs.label}</slot>
            </div>
        `;
    },
});
