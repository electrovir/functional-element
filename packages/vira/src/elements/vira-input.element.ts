import {
    TemplateResult,
    css,
    defineElementEvent,
    html,
    listen,
    onResize,
    renderIf,
} from 'element-vir';
import {EyeClosed24Icon, EyeOpen24Icon, ViraIconSvg} from '../icons';
import {CloseX24Icon} from '../icons/icon-svgs/close-x-24.icon';
import {noUserSelect, viraAnimationDurations, viraDisabledStyles} from '../styles';
import {createFocusStyles, viraFocusCssVars} from '../styles/focus';
import {noNativeFormStyles} from '../styles/native-styles';
import {viraCssVars} from '../styles/vira-css-vars';
import {defineViraElement} from './define-vira-element';
import {
    SharedTextInputElementInputs,
    filterTextInputValue,
    textInputListener,
} from './shared-text-input-logic';
import {ViraIcon} from './vira-icon.element';

export * from './shared-text-input-logic';

export enum ViraInputType {
    Default = 'text',
    Password = 'password',
    Email = 'email',
}

export const ViraInput = defineViraElement<
    {
        icon?: undefined | Pick<ViraIconSvg, 'svgTemplate'>;
        /** A suffix that, if provided, is shown following the user input field. */
        suffix?: string | undefined;
        showClearButton?: boolean | undefined;
        type?: ViraInputType;
    } & SharedTextInputElementInputs
>()({
    tagName: 'vira-input',
    hostClasses: {
        'vira-input-disabled': ({inputs}) => !!inputs.disabled,
        'vira-input-fit-text': ({inputs}) => !!inputs.fitText,
        'vira-input-clear-button-shown': ({inputs}) => !!inputs.showClearButton,
    },
    cssVars: {
        'vira-input-background-color': 'white',
        'vira-input-placeholder-color': '#cccccc',
        'vira-input-text-color': '#000000',
        'vira-input-border-color': '#cccccc',
        'vira-input-focus-border-color': '#59b1ff',
        'vira-input-text-selection-color': '#cfe9ff',

        'vira-input-action-button-color': '#aaaaaa',

        'vira-input-clear-button-hover-color': '#ff0000',
        'vira-input-clear-button-active-color': '#b30000',

        'vira-input-show-password-button-hover-color': '#0a89ff',
        'vira-input-show-password-button-active-color': '#0261ba',

        'vira-input-padding-horizontal': '10px',
        'vira-input-padding-vertical': '6px',
    },
    events: {
        /**
         * Fires whenever a user input created a new value. Does not fire if all input letters are
         * filtered out due to input restrictions.
         */
        valueChange: defineElementEvent<string>(),
        /**
         * Fires when inputs are blocked. Useful for showing warnings or error messages to inform
         * the user why their input did not propagate if it was blocked. This does not fire for text
         * that was blocked out of programmatic "value" property assignments.
         */
        inputBlocked: defineElementEvent<string>(),
    },
    styles: ({hostClasses, cssVars}) => {
        return css`
            :host {
                position: relative;
                display: inline-flex;
                width: 224px;
                box-sizing: border-box;
                ${viraFocusCssVars['vira-focus-outline-color'].name}: ${cssVars[
                    'vira-input-focus-border-color'
                ].value};
                color: ${cssVars['vira-input-text-color'].value};
            }

            ${hostClasses['vira-input-disabled'].selector} {
                ${viraDisabledStyles};
            }

            ${hostClasses['vira-input-fit-text'].selector} {
                width: unset;
            }
            ${hostClasses['vira-input-fit-text'].selector} input {
                flex-grow: 0;
            }
            ${hostClasses['vira-input-fit-text'].selector} input.has-value {
                /*
                    Account for weird Safari <input> behavior with text alignment and size. so we
                    don't lose a pixel on the left side.
                    Only apply this when <input> has a value, otherwise externally-set width and a
                    placeholder input will cause the text selector bar to initially be in the center
                    of the element.
                */
                text-align: center;
            }
            ${hostClasses['vira-input-fit-text'].selector} .size-span {
                ${noNativeFormStyles};
                font-family: inherit;
                display: inline-block;
                font-size: inherit;
                line-height: inherit;
                box-sizing: border-box;
                position: absolute;
                opacity: 0;
                visibility: hidden;
                pointer-events: none;
                z-index: -1;
                width: min-content;
                ${noUserSelect};
                vertical-align: middle;
                max-height: 100%;
            }

            ${hostClasses['vira-input-clear-button-shown'].selector} label {
                padding-right: 4px;
            }

            pre {
                ${noNativeFormStyles};
                font: inherit;
                /*
                    Leave at least a few pixels for the cursor bar when there is no text at all.
                    This also accounts for a weird Safari <input> behavior where the text moves
                    around if it's not given a tiny bit of padding.
                */
                padding-left: 2px;
                display: block;
            }

            .border-style {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border-radius: ${viraCssVars['vira-form-input-border-radius'].value};
                z-index: 0;
                pointer-events: none;
            }

            .label-border {
                top: -1px;
                left: -1px;
                border: 1px solid ${cssVars['vira-input-border-color'].value};
                transition: border
                    ${viraAnimationDurations['vira-interaction-animation-duration'].value};
            }

            label {
                ${noNativeFormStyles};
                max-width: 100%;
                flex-grow: 1;
                display: inline-flex;
                box-sizing: border-box;
                align-items: center;
                position: relative;
                padding: 0 ${cssVars['vira-input-padding-horizontal'].value};
                border-radius: ${viraCssVars['vira-form-input-border-radius'].value};
                background-color: ${cssVars['vira-input-background-color'].value};
                /*
                    Border colors are actually applied via the .label-border class. However, we must
                    apply a border here still so that it takes up space.
                */
                border: 1px solid transparent;
                gap: 4px;
                cursor: text;
            }

            ${createFocusStyles({
                mainSelector:
                    'input:focus:focus-visible:not(:active):not([disabled]) ~ .focus-border',
                elementBorderSize: 0,
            })}

            .left-side-icon {
                margin-right: calc(${cssVars['vira-input-padding-horizontal'].value} - 4px);
            }

            input {
                ${noNativeFormStyles};
                cursor: text;
                margin: ${cssVars['vira-input-padding-vertical'].value} 0;
                flex-grow: 1;
                max-width: 100%;
                /* fix input element not shrinking by default */
                width: 0;
                text-overflow: ellipsis;
                box-sizing: border-box;
                overflow: hidden;
            }

            ::selection {
                background: ${cssVars['vira-input-text-selection-color']
                    .value}; /* WebKit/Blink Browsers */
            }
            ::-moz-selection {
                background: ${cssVars['vira-input-text-selection-color']
                    .value}; /* Gecko Browsers */
            }

            input:placeholder-shown {
                text-overflow: ellipsis;
                overflow: hidden;
            }

            input:focus {
                outline: none;
            }

            input::placeholder {
                color: ${cssVars['vira-input-placeholder-color'].value};
            }

            .suffix {
                font-weight: bold;
                ${noUserSelect};
            }

            button {
                ${noNativeFormStyles};
                cursor: pointer;
                display: flex;
                transition: color
                    ${viraAnimationDurations['vira-interaction-animation-duration'].value};
            }

            .clear-x-button,
            .show-password-button {
                color: ${cssVars['vira-input-action-button-color'].value};
            }

            .clear-x-button:hover {
                color: ${cssVars['vira-input-clear-button-hover-color'].value};
            }

            .clear-x-button:active {
                color: ${cssVars['vira-input-clear-button-active-color'].value};
            }

            .show-password-button:hover {
                color: ${cssVars['vira-input-show-password-button-hover-color'].value};
            }

            .show-password-button:active {
                color: ${cssVars['vira-input-show-password-button-active-color'].value};
            }
        `;
    },
    stateInitStatic: {
        forcedInputWidth: 0,
        showPassword: false,
    },
    renderCallback: ({inputs, dispatch, state, updateState, events}) => {
        const {filtered: filteredValue} = filterTextInputValue({
            value: inputs.value ?? '',
            allowed: inputs.allowedInputs,
            blocked: inputs.blockedInputs,
        });

        const iconTemplate: TemplateResult | string = inputs.icon
            ? html`
                  <${ViraIcon.assign({icon: inputs.icon})} class="left-side-icon"></${ViraIcon}>
              `
            : '';

        const forcedInputWidthStyles = inputs.fitText
            ? css`
                  width: ${state.forcedInputWidth}px;
              `
            : '';

        return html`
            <label>
                ${iconTemplate}
                ${renderIf(
                    !!inputs.fitText,
                    html`
                        <span
                            class="size-span"
                            ${onResize(({contentRect}) => {
                                updateState({forcedInputWidth: contentRect.width});
                            })}
                        >
                            <pre>${filteredValue || inputs.placeholder || ''}</pre>
                        </span>
                    `,
                )}
                <input
                    type=${calculateEffectiveInputType(inputs.type, state.showPassword)}
                    style=${forcedInputWidthStyles}
                    autocomplete=${inputs.disableBrowserHelps ? 'off' : ''}
                    autocorrect=${inputs.disableBrowserHelps ? 'off' : ''}
                    autocapitalize=${inputs.disableBrowserHelps ? 'off' : ''}
                    spellcheck=${inputs.disableBrowserHelps ? 'false' : ''}
                    ?disabled=${inputs.disabled}
                    .value=${filteredValue}
                    ${listen('input', (event) => {
                        textInputListener({
                            inputs,
                            filteredValue,
                            event,
                            inputBlockedCallback(blockedInput) {
                                dispatch(new events.inputBlocked(blockedInput));
                            },
                            newValueCallback(newValue) {
                                dispatch(new events.valueChange(newValue));
                            },
                        });
                    })}
                    placeholder=${inputs.placeholder}
                />
                ${renderIf(
                    !!(inputs.showClearButton && inputs.value),
                    html`
                        <button
                            class="clear-x-button"
                            title="clear"
                            ${listen('click', (event) => {
                                /** Prevent focus of the input. */
                                event.stopImmediatePropagation();
                                event.preventDefault();

                                dispatch(new events.valueChange(''));
                            })}
                        >
                            <${ViraIcon.assign({icon: CloseX24Icon})}></${ViraIcon}>
                        </button>
                    `,
                )}
                ${renderIf(
                    !!(inputs.type === ViraInputType.Password),
                    html`
                        <button
                            class="show-password-button"
                            title="show password"
                            ${listen('click', (event) => {
                                /** Prevent focus of the input. */
                                event.stopImmediatePropagation();
                                event.preventDefault();

                                updateState({showPassword: !state.showPassword});
                            })}
                        >
                            <${ViraIcon.assign({
                                icon: state.showPassword ? EyeOpen24Icon : EyeClosed24Icon,
                            })}></${ViraIcon}>
                        </button>
                    `,
                )}
                ${renderIf(
                    !!inputs.suffix,
                    html`
                        <div class="suffix">${inputs.suffix}</div>
                    `,
                )}
                <!--
                    These separate style elements are necessary so that we can select them as
                    siblings of the focused <input> element.
                -->
                <div class="border-style focus-border"></div>
                <div class="border-style label-border"></div>
            </label>
        `;
    },
});

function calculateEffectiveInputType(
    type: ViraInputType | undefined,
    showPassword: boolean,
): ViraInputType {
    if (type === ViraInputType.Password && showPassword) {
        return ViraInputType.Default;
    }

    return type || ViraInputType.Default;
}
