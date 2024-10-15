import {assert} from '@augment-vir/assert';
import {PartialWithUndefined} from '@augment-vir/common';
import {NavController} from 'device-navigation';
import {
    classMap,
    css,
    defineElementEvent,
    html,
    ifDefined,
    listen,
    perInstance,
    renderIf,
    testId,
} from 'element-vir';
import {ViraIconSvg} from '../../icons/icon-svg.js';
import {ChevronUp24Icon} from '../../icons/index.js';
import {viraBorders} from '../../styles/border.js';
import {createFocusStyles, viraFocusCssVars} from '../../styles/focus.js';
import {viraFormCssVars} from '../../styles/form-themes.js';
import {
    noNativeFormStyles,
    noUserSelect,
    viraAnimationDurations,
    viraDisabledStyles,
} from '../../styles/index.js';
import {viraShadows} from '../../styles/shadows.js';
import {
    HidePopUpEvent,
    NavSelectEvent,
    PopUpManager,
    ShowPopUpResult,
} from '../../util/pop-up-manager.js';
import {defineViraElement} from '../define-vira-element.js';
import {ViraIcon} from '../vira-icon.element.js';
import {
    assertUniqueIdProps,
    createNewSelection,
    filterToSelectedOptions,
    triggerPopUpState,
} from './dropdown-helpers.js';
import {ViraDropdownOption} from './vira-dropdown-item.element.js';
import {ViraDropdownOptions} from './vira-dropdown-options.element.js';

export const viraDropdownTestIds = {
    trigger: 'dropdown-trigger',
    icon: 'dropdown-icon',
    prefix: 'dropdown-prefix',
    options: 'dropdown-options',
};

export const ViraDropdown = defineViraElement<
    {
        options: ReadonlyArray<Readonly<ViraDropdownOption>>;
        /** The selected id from the given options. */
        selected: ReadonlyArray<PropertyKey>;
    } & PartialWithUndefined<{
        /** Text to show if nothing is selected. */
        placeholder: string;
        /**
         * If false, this will behave like a single select dropdown, otherwise you can select
         * multiple.
         */
        isMultiSelect: boolean;
        icon: ViraIconSvg;
        selectionPrefix: string;
        isDisabled: boolean;
        /** For debugging purposes only. Very bad for actual production code use. */
        z_debug_forceOpenState: boolean;
    }>
>()({
    tagName: 'vira-dropdown',
    hostClasses: {
        'vira-dropdown-disabled': ({inputs}) => !!inputs.isDisabled,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${viraFocusCssVars['vira-focus-outline-color'].name}: ${viraFormCssVars[
                'vira-form-focus-color'
            ].value};
            position: relative;
            max-width: 100%;
        }

        .dropdown-wrapper {
            ${noNativeFormStyles};
            max-width: 100%;
            align-self: stretch;
            flex-grow: 1;
            position: relative;
            border-radius: ${viraBorders['vira-form-input-radius'].value};
            transition: border-radius
                ${viraAnimationDurations['vira-interaction-animation-duration'].value};
            outline: none;
        }

        ${createFocusStyles({
            selector: '.dropdown-wrapper:focus',
            elementBorderSize: 1,
        })}

        .selection-display {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .trigger-icon {
            transform: rotate(0);
            transition: ${viraAnimationDurations['vira-interaction-animation-duration'].value}
                linear transform;
            align-self: flex-start;
        }

        .trigger-icon-wrapper {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
        }

        .dropdown-wrapper.open .trigger-icon {
            transform: rotate(180deg);
        }

        .dropdown-wrapper.open:not(.open-upwards) {
            border-bottom-left-radius: 0;
        }

        .open-upwards.dropdown-wrapper.open {
            border-top-left-radius: 0;
        }

        .dropdown-trigger {
            border: 1px solid ${viraFormCssVars['vira-form-border-color'].value};
            height: 100%;
            width: 100%;
            transition: inherit;
            box-sizing: border-box;
            display: flex;
            gap: 8px;
            text-align: left;
            align-items: center;
            padding: 3px;
            padding-left: 10px;
            ${noUserSelect};
            border-radius: inherit;
            background-color: ${viraFormCssVars['vira-form-background-color'].value};
            color: ${viraFormCssVars['vira-form-foreground-color'].value};
        }

        .open-upwards ${ViraDropdownOptions} {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            ${viraShadows.menuShadowReversed}
        }

        ${hostClasses['vira-dropdown-disabled'].selector} {
            ${viraDisabledStyles}
            pointer-events: auto;
        }

        ${hostClasses['vira-dropdown-disabled'].selector} .dropdown-wrapper {
            pointer-events: none;
        }

        .pop-up-positioner {
            position: absolute;
            pointer-events: none;
            display: flex;
            flex-direction: column;

            /* highest possible z-index */
            z-index: 2147483647;
            /* space for the caret icon */
            right: 28px;
            /* minus the border width */
            top: calc(100% - 1px);
        }

        .using-placeholder {
            opacity: 0.4;
        }

        .open-upwards .pop-up-positioner {
            flex-direction: column-reverse;
            /* minus the border width */
            bottom: calc(100% - 1px);
        }
    `,
    events: {
        selectedChange: defineElementEvent<PropertyKey[]>(),
        openChange: defineElementEvent<boolean>(),
    },
    stateInitStatic: {
        /** `undefined` means the pop up is not currently showing. */
        showPopUpResult: undefined as ShowPopUpResult | undefined,
        popUpManager: perInstance(() => new PopUpManager()),
        navController: undefined as NavController | undefined,
    },
    cleanupCallback({state, updateState}) {
        updateState({showPopUpResult: undefined});
        state.popUpManager.destroy();
    },
    init({state, updateState, host, inputs, dispatch, events}) {
        state.popUpManager.listen(HidePopUpEvent, () => {
            updateState({showPopUpResult: undefined});
            if (!inputs.isDisabled) {
                const dropdownWrapper = host.shadowRoot.querySelector('.dropdown-wrapper');

                assert.instanceOf(
                    dropdownWrapper,
                    HTMLButtonElement,
                    'failed to find dropdown wrapper child',
                );

                dropdownWrapper.focus();
            }
        });
        state.popUpManager.listen(NavSelectEvent, (event) => {
            const optionIndex = event.detail.x;
            const option = inputs.options[optionIndex];
            if (!option) {
                throw new Error(`Found no dropdown option at index '${optionIndex}'`);
            }
            /** Only close upon option selection if the dropdown is not multi select. */
            if (!inputs.isMultiSelect) {
                triggerPopUpState(
                    {emitEvent: true, open: false},
                    {
                        dispatch: (openState) => {
                            dispatch(new events.openChange(openState));
                        },
                        host,
                        popUpManager: state.popUpManager,
                        updateState,
                    },
                );
            }

            dispatch(
                new events.selectedChange(
                    createNewSelection(option.id, inputs.selected, !!inputs.isMultiSelect),
                ),
            );
        });
        updateState({navController: new NavController(host)});
    },
    render({dispatch, events, state, inputs, updateState, host}) {
        assertUniqueIdProps(inputs.options);

        function triggerPopUp(param: Parameters<typeof triggerPopUpState>[0]) {
            triggerPopUpState(param, {
                dispatch: (openState) => {
                    dispatch(new events.openChange(openState));
                },
                host,
                popUpManager: state.popUpManager,
                updateState,
            });
        }

        if (inputs.isDisabled) {
            triggerPopUp({open: false, emitEvent: false});
        } else if (inputs.z_debug_forceOpenState != undefined) {
            if (!inputs.z_debug_forceOpenState && state.showPopUpResult) {
                triggerPopUp({emitEvent: false, open: false});
            } else if (inputs.z_debug_forceOpenState && !state.showPopUpResult) {
                triggerPopUp({emitEvent: false, open: true});
            }
        }

        const selectedOptions: ReadonlyArray<Readonly<ViraDropdownOption>> =
            filterToSelectedOptions(inputs);

        const leadingIconTemplate = inputs.icon
            ? html`
                  <${ViraIcon.assign({
                      icon: inputs.icon,
                  })}
                      ${testId(viraDropdownTestIds.icon)}
                  ></${ViraIcon}>
              `
            : '';

        const positionerStyles = state.showPopUpResult
            ? state.showPopUpResult.popDown
                ? /** Dropdown going down position. */
                  css`
                      bottom: -${state.showPopUpResult.positions.diff.bottom}px;
                  `
                : /** Dropdown going up position. */
                  css`
                      top: -${state.showPopUpResult.positions.diff.top}px;
                  `
            : undefined;

        function respondToClick() {
            triggerPopUp({emitEvent: true, open: !state.showPopUpResult});
        }

        const shouldUsePlaceholder: boolean = !selectedOptions.length;

        const prefixTemplate =
            inputs.selectionPrefix && !shouldUsePlaceholder
                ? html`
                      <span class="selected-label-prefix" ${testId(viraDropdownTestIds.prefix)}>
                          ${inputs.selectionPrefix}
                      </span>
                  `
                : '';

        const selectionDisplay: string = shouldUsePlaceholder
            ? inputs.placeholder || ''
            : selectedOptions.map((item) => item.label).join(', ');

        return html`
            <button
                ?disabled=${!!inputs.isDisabled}
                class="dropdown-wrapper ${classMap({
                    open: !!state.showPopUpResult,
                    'open-upwards': !state.showPopUpResult?.popDown,
                })}"
                ${testId(viraDropdownTestIds.trigger)}
                role="listbox"
                aria-expanded=${!!state.showPopUpResult}
                ${listen('keydown', (event) => {
                    if (!state.showPopUpResult && event.code.startsWith('Arrow')) {
                        triggerPopUp({emitEvent: true, open: true});
                    }
                })}
                ${listen('click', (event) => {
                    /** Detail is 0 if it was a keyboard key (like Enter) that triggered this click. */
                    if (event.detail === 0) {
                        respondToClick();
                    }
                })}
                ${listen('mousedown', (event) => {
                    /** Ignore any clicks that aren't the main button. */
                    if (event.button === 0) {
                        respondToClick();
                    }
                })}
            >
                <div class="dropdown-trigger">
                    ${leadingIconTemplate}
                    <span
                        class="selection-display ${classMap({
                            'using-placeholder': shouldUsePlaceholder,
                        })}"
                        title=${ifDefined(shouldUsePlaceholder ? selectionDisplay : undefined)}
                    >
                        ${prefixTemplate} ${selectionDisplay}
                    </span>
                    <span class="trigger-icon-wrapper">
                        <${ViraIcon.assign({icon: ChevronUp24Icon})}
                            class="trigger-icon"
                        ></${ViraIcon}>
                    </span>
                </div>
                <div class="pop-up-positioner" style=${positionerStyles}>
                    ${renderIf(
                        !!state.showPopUpResult,
                        html`
                            <${ViraDropdownOptions.assign({
                                options: inputs.options,
                                selectedOptions,
                            })}
                                ${listen(ViraDropdownOptions.events.selectionChange, (event) => {
                                    /**
                                     * Only close upon option selection if the dropdown is not multi
                                     * select.
                                     */
                                    if (!inputs.isMultiSelect) {
                                        triggerPopUp({emitEvent: true, open: false});
                                    }
                                    dispatch(
                                        new events.selectedChange(
                                            createNewSelection(
                                                event.detail.id,
                                                inputs.selected,
                                                !!inputs.isMultiSelect,
                                            ),
                                        ),
                                    );
                                })}
                                ${testId(viraDropdownTestIds.options)}
                            ></${ViraDropdownOptions}>
                        `,
                    )}
                </div>
            </button>
        `;
    },
});
