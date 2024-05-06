import {PartialAndUndefined, joinWithFinalConjunction} from '@augment-vir/common';
import {NavController, nav, navSelector} from 'device-navigation';
import {
    classMap,
    css,
    defineElementEvent,
    html,
    ifDefined,
    listen,
    nothing,
    perInstance,
    renderIf,
    testId,
} from 'element-vir';
import {assertInstanceOf} from 'run-time-assertions';
import {ViraIconSvg} from '../icons/icon-svg';
import {ChevronUp24Icon} from '../icons/index';
import {
    noNativeFormStyles,
    noUserSelect,
    viraAnimationDurations,
    viraDisabledStyles,
} from '../styles';
import {viraBorders} from '../styles/border';
import {createFocusStyles, viraFocusCssVars} from '../styles/focus';
import {viraShadows} from '../styles/shadows';
import {
    HidePopUpEvent,
    NavSelectEvent,
    PopUpManager,
    ShowPopUpResult,
} from '../util/pop-up-manager';
import {defineViraElement} from './define-vira-element';
import {ViraDropdownItem, ViraDropdownOption} from './vira-dropdown-item.element';
import {ViraIcon} from './vira-icon.element';

function assertUniqueIdProps(options: ReadonlyArray<Readonly<{id: PropertyKey}>>) {
    const usedIds: Record<PropertyKey, boolean> = {};
    const duplicateIds: PropertyKey[] = [];
    options.forEach((option) => {
        if (usedIds[option.id]) {
            duplicateIds.push(option.id);
        } else {
            usedIds[option.id] = true;
        }
    });

    if (duplicateIds.length) {
        throw new Error(
            `Duplicate option ids were given to ViraDropdown: ${joinWithFinalConjunction(duplicateIds)}`,
        );
    }
}

function createNewSelection(
    id: PropertyKey,
    currentSelection: ReadonlyArray<PropertyKey>,
    isMultiSelect: boolean,
): PropertyKey[] {
    if (isMultiSelect) {
        return currentSelection.includes(id)
            ? currentSelection.filter((entry) => entry !== id)
            : [
                  ...currentSelection,
                  id,
              ];
    } else {
        return [id];
    }
}

function triggerPopUpState(
    {open, emitEvent}: {open: boolean; emitEvent: boolean},
    {
        updateState,
        popUpManager,
        dispatch,
        host,
    }: {
        updateState: (params: {showPopUpResult: ShowPopUpResult | undefined}) => void;
        popUpManager: PopUpManager;
        dispatch: (open: boolean) => void;
        host: HTMLElement;
    },
) {
    if (open) {
        updateState({showPopUpResult: popUpManager.showPopUp(host)});
    } else {
        popUpManager.removePopUp();
    }

    if (emitEvent) {
        dispatch(open);
    }
}

export const viraDropdownTestIds = {
    trigger: 'dropdown-trigger',
    icon: 'dropdown-icon',
    prefix: 'dropdown-prefix',
    options: 'dropdown-options',
    option: 'individual-option',
};

export const ViraDropdown = defineViraElement<
    {
        options: ReadonlyArray<Readonly<ViraDropdownOption>>;
        /** The selected id from the given options. */
        selected: ReadonlyArray<PropertyKey>;
    } & PartialAndUndefined<{
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
    /** Default colors meet APCA contrast for small body text: https://www.myndex.com/APCA/ */
    cssVars: {
        'vira-dropdown-trigger-background-color': 'white',
        'vira-dropdown-trigger-border-color': '#cccccc',

        'vira-dropdown-text-color': '#000000',
        'vira-dropdown-background-color': 'white',
        'vira-dropdown-focus-border-color': viraFocusCssVars['vira-focus-outline-color'].default,
        'vira-dropdown-border-color': '#cccccc',
        'vira-dropdown-item-hover-background-color': '#d2eaff',
        'vira-dropdown-item-hover-text-color': '#000000',
    },
    styles: ({hostClasses, cssVars}) => css`
        :host {
            display: inline-flex;
            vertical-align: middle;
            width: 256px;
            ${viraFocusCssVars['vira-focus-outline-color'].name}: ${cssVars[
                'vira-dropdown-focus-border-color'
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

        .dropdown-wrapper.open .options-wrapper {
            display: flex;
            flex-direction: column;
        }

        .dropdown-wrapper.open:not(.open-upwards) {
            border-bottom-left-radius: 0;
        }

        .open-upwards.dropdown-wrapper.open {
            border-top-left-radius: 0;
        }

        .dropdown-trigger {
            border: 1px solid ${cssVars['vira-dropdown-trigger-border-color'].value};
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
            background-color: ${cssVars['vira-dropdown-trigger-background-color'].value};
            color: ${cssVars['vira-dropdown-text-color'].value};
        }

        .options-wrapper {
            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            display: none;
            z-index: 99;
            border-radius: ${viraBorders['vira-form-input-radius'].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${cssVars['vira-dropdown-background-color'].value};
            border: 1px solid ${cssVars['vira-dropdown-border-color'].value};
            color: ${cssVars['vira-dropdown-text-color'].value};
            ${viraShadows.menuShadow}
        }

        .open-upwards .options-wrapper {
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

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${navSelector.css.selected('.dropdown-item:not(.disabled)')} {
            background-color: ${cssVars['vira-dropdown-item-hover-background-color'].value};
            outline: none;
        }

        ${ViraDropdownItem} {
            pointer-events: none;
        }

        .dropdown-item.disabled {
            ${viraDisabledStyles};
            pointer-events: auto;
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
    initCallback({state, updateState, host, inputs, dispatch, events}) {
        state.popUpManager.listen(HidePopUpEvent, () => {
            updateState({showPopUpResult: undefined});
            if (!inputs.isDisabled) {
                const dropdownWrapper = host.shadowRoot.querySelector('.dropdown-wrapper');

                assertInstanceOf(
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
    renderCallback({dispatch, events, state, inputs, updateState, host}) {
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

        const optionTemplates = inputs.options.map((option) => {
            const innerTemplate =
                option.template ||
                html`
                    <${ViraDropdownItem.assign({
                        label: option.label,
                        selected: selectedOptions.includes(option),
                    })}></${ViraDropdownItem}>
                `;

            return html`
                <div
                    class="dropdown-item ${classMap({
                        disabled: !!option.disabled,
                    })}"
                    ${testId(viraDropdownTestIds.option)}
                    title=${ifDefined(option.hoverText || undefined)}
                    role="option"
                    ${option.disabled ? nothing : nav()}
                    ${listen('mousedown', (event) => {
                        /**
                         * Prevent this mousedown event from propagating to the window, which would
                         * then trigger the dropdown to close.
                         */
                        event.stopPropagation();
                    })}
                    ${listen('mouseup', (event) => {
                        /**
                         * Prevent this event from propagating to the window, which would then
                         * trigger the dropdown to close.
                         */
                        event.stopPropagation();

                        if (!option.disabled) {
                            /** Only close upon option selection if the dropdown is not multi select. */
                            if (!inputs.isMultiSelect) {
                                triggerPopUp({emitEvent: true, open: false});
                            }
                            dispatch(
                                new events.selectedChange(
                                    createNewSelection(
                                        option.id,
                                        inputs.selected,
                                        !!inputs.isMultiSelect,
                                    ),
                                ),
                            );
                        }
                    })}
                >
                    ${innerTemplate}
                </div>
            `;
        });

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
                            <div class="options-wrapper" ${testId(viraDropdownTestIds.options)}>
                                <slot>${optionTemplates}</slot>
                            </div>
                        `,
                    )}
                </div>
            </button>
        `;
    },
});

export function filterToSelectedOptions({
    selected,
    options,
    isMultiSelect,
}: Readonly<{
    selected: ReadonlyArray<PropertyKey>;
    isMultiSelect?: boolean | undefined;
    options: ReadonlyArray<Readonly<ViraDropdownOption>>;
}>): ViraDropdownOption[] {
    if (selected.length && options.length) {
        const selectedOptions = options.filter((option) => selected.includes(option.id));

        if (selectedOptions.length > 1 && !isMultiSelect) {
            console.error(
                `${ViraDropdown.tagName} has multiple selections but \`isMultiSelect\` is not \`true\`. Truncating to the first selection.`,
            );
            return selectedOptions.slice(0, 1);
        } else {
            return selectedOptions;
        }
    } else {
        return [];
    }
}
