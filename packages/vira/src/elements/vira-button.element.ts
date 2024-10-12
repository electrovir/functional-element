import {css, html} from 'element-vir';
import {ViraIconSvg} from '../icons/index.js';
import {viraBorders} from '../styles/border.js';
import {viraDisabledStyles} from '../styles/disabled.js';
import {viraAnimationDurations} from '../styles/durations.js';
import {createFocusStyles, viraFocusCssVars} from '../styles/focus.js';
import {noUserSelect} from '../styles/index.js';
import {noNativeFormStyles} from '../styles/native-styles.js';
import {defineViraElement} from './define-vira-element.js';
import {ViraIcon} from './vira-icon.element.js';

export enum ViraButtonStyleEnum {
    Default = 'vira-button-default',
    Outline = 'vira-button-outline',
}

export const ViraButton = defineViraElement<{
    text?: string;
    icon?: undefined | Pick<ViraIconSvg, 'svgTemplate'>;
    disabled?: boolean | undefined;
    buttonStyle?: ViraButtonStyleEnum | undefined;
}>()({
    tagName: 'vira-button',
    hostClasses: {
        'vira-button-outline-style': ({inputs}) =>
            inputs.buttonStyle === ViraButtonStyleEnum.Outline,
        'vira-button-disabled': ({inputs}) => !!inputs.disabled,
    },
    cssVars: {
        /** On the default button style this is the background color. */
        'vira-button-primary-color': '#0a89ff',
        'vira-button-primary-hover-color': '#59b1ff',
        'vira-button-primary-active-color': '#007ff6',

        /** On the default button style this is the text color. */
        'vira-button-secondary-color': '#ffffff',

        'vira-button-padding': '5px 10px',

        'vira-button-internal-foreground-color': '',
        'vira-button-internal-background-color': '',
    },
    styles: ({hostClasses, cssVars}) => css`
        :host {
            font-weight: bold;
            display: inline-flex;
            position: relative;
            vertical-align: middle;
            align-items: center;
            box-sizing: border-box;
            ${noUserSelect};
            ${cssVars['vira-button-internal-background-color'].name}: ${cssVars[
                'vira-button-primary-color'
            ].value};
            ${cssVars['vira-button-internal-foreground-color'].name}: ${cssVars[
                'vira-button-secondary-color'
            ].value};
            ${viraFocusCssVars['vira-focus-outline-color'].name}: ${cssVars[
                'vira-button-primary-hover-color'
            ].value}
        }

        :host(:hover) button,
        button:hover {
            ${cssVars['vira-button-internal-background-color'].name}: ${cssVars[
                'vira-button-primary-hover-color'
            ].value};
        }

        :host(:active) button,
        button:active {
            ${cssVars['vira-button-internal-background-color'].name}: ${cssVars[
                'vira-button-primary-active-color'
            ].value};
        }

        ${hostClasses['vira-button-disabled'].selector} {
            ${viraDisabledStyles};
        }

        ${hostClasses['vira-button-outline-style'].selector} button {
            color: ${cssVars['vira-button-internal-background-color'].value};
            background-color: transparent;
            border-color: currentColor;
        }

        button {
            ${noNativeFormStyles};
            cursor: pointer;
            position: relative;
            width: 100%;
            height: 100%;
            outline: none;
            border: 2px solid transparent;
            box-sizing: border-box;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            border-radius: ${viraBorders['vira-form-input-radius'].value};
            background-color: ${cssVars['vira-button-internal-background-color'].value};
            color: ${cssVars['vira-button-internal-foreground-color'].value};
            padding: ${cssVars['vira-button-padding'].value};
            transition:
                color ${viraAnimationDurations['vira-interaction-animation-duration'].value},
                background-color
                    ${viraAnimationDurations['vira-interaction-animation-duration'].value},
                border-color ${viraAnimationDurations['vira-interaction-animation-duration'].value};
        }

        ${createFocusStyles({
            selector: 'button:focus:focus-visible:not(:active):not([disabled])',
            elementBorderSize: 2,
        })}

        button ${ViraIcon} + .text-template {
            margin-left: 8px;
        }
    `,
    renderCallback: ({inputs}) => {
        const iconTemplate = inputs.icon
            ? html`
                  <${ViraIcon.assign({
                      icon: inputs.icon,
                  })}></${ViraIcon}>
              `
            : '';
        const textTemplate = inputs.text
            ? html`
                  <span class="text-template">${inputs.text}</span>
              `
            : '';

        return html`
            <button ?disabled=${inputs.disabled}>${iconTemplate} ${textTemplate}</button>
        `;
    },
});
