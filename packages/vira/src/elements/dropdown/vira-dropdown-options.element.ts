import {nav, navSelector} from 'device-navigation';
import {
    classMap,
    css,
    defineElementEvent,
    html,
    ifDefined,
    listen,
    nothing,
    testId,
} from 'element-vir';
import {viraBorders} from '../../styles/border.js';
import {viraFormCssVars} from '../../styles/form-themes.js';
import {viraDisabledStyles} from '../../styles/index.js';
import {viraShadows} from '../../styles/shadows.js';
import {defineViraElement} from '../define-vira-element.js';
import {ViraDropdownItem, ViraDropdownOption} from './vira-dropdown-item.element.js';

export const viraDropdownOptionsTestIds = {
    option: 'dropdown-option',
};

export const ViraDropdownOptions = defineViraElement<
    Readonly<{
        /** All dropdown options to show to the user. */
        options: ReadonlyArray<Readonly<ViraDropdownOption>>;
        /**
         * The currently selected dropdown options. Note that this must be a reference subset of the
         * options input. Meaning, entries in this array must be the exact same objects (by
         * reference) as entries in the `options` input array for them to be marked as selected.
         */
        selectedOptions: ReadonlyArray<Readonly<ViraDropdownOption>>;
    }>
>()({
    tagName: 'vira-dropdown-options',
    events: {
        selectionChange: defineElementEvent<Readonly<ViraDropdownOption>>(),
    },
    styles: css`
        :host {
            display: flex;
            flex-direction: column;

            pointer-events: auto;
            width: 100%;
            max-height: 100%;
            overflow-y: auto;
            z-index: 99;
            border-radius: ${viraBorders['vira-form-input-radius'].value};
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            background-color: ${viraFormCssVars['vira-form-background-color'].value};
            border: 1px solid ${viraFormCssVars['vira-form-border-color'].value};
            color: ${viraFormCssVars['vira-form-foreground-color'].value};
            ${viraShadows.menuShadow}
        }

        .dropdown-item {
            background-color: white;
            outline: none;
        }

        ${navSelector.css.selected('.dropdown-item:not(.disabled)')} {
            background-color: ${viraFormCssVars['vira-form-selection-hover-background-color']
                .value};
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
    render({inputs, dispatch, events}) {
        const optionTemplates = inputs.options.map((option) => {
            const innerTemplate =
                option.template ||
                html`
                    <${ViraDropdownItem.assign({
                        label: option.label,
                        selected: inputs.selectedOptions.includes(option),
                    })}></${ViraDropdownItem}>
                `;

            return html`
                <div
                    class="dropdown-item ${classMap({
                        disabled: !!option.disabled,
                    })}"
                    ${testId(viraDropdownOptionsTestIds.option)}
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
                            dispatch(new events.selectionChange(option));
                        }
                    })}
                >
                    ${innerTemplate}
                </div>
            `;
        });

        return html`
            <slot>${optionTemplates}</slot>
        `;
    },
});
