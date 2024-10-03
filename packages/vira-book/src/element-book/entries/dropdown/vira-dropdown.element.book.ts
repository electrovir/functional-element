import {BookPageControlTypeEnum, defineBookPage, definePageControl} from 'element-book';
import {CSSResult, css, html, listen} from 'element-vir';
import {Element24Icon, ViraDropdown, ViraDropdownOption, allIconsByName} from 'vira';
import {dropdownPage} from './vira-dropdown.book';

const exampleDropdownOptions: ReadonlyArray<Readonly<ViraDropdownOption>> = [
    {
        label: 'Option 1',
        id: 1,
    },
    {
        label: 'Option 2',
        id: 2,
    },
    {
        label: 'Option 3',
        id: 3,
    },
    {
        label: 'Really really super duper long option',
        id: 4,
    },
    {
        label: 'Really really super duper long option',
        id: 5,
    },
    {
        label: 'Really really super duper long option',
        id: 6,
    },
    {
        label: 'Really really super duper long option',
        id: 7,
    },
    {
        label: "Really really super duper long it just keeps going because it's so long option",
        id: 8,
    },
];

const examples: ReadonlyArray<{
    title: string;
    inputs?: Partial<typeof ViraDropdown.inputsType>;
    customStyle?: CSSResult;
}> = [
    {
        title: 'default',
    },
    {
        title: 'disabled',
        inputs: {
            isDisabled: true,
        },
    },
    {
        title: 'multi select',
        inputs: {
            isMultiSelect: true,
        },
    },
    {
        title: 'long selection',
        inputs: {
            selected: [8],
        },
    },
    {
        title: 'with custom template',
        inputs: {
            selected: [],
            options: [
                ...exampleDropdownOptions,
                {
                    id: 42,
                    label: 'custom template',
                    template: html`
                        <select>
                            <option selected>NESTED SELECT!!!</option>
                            <option>this is a terrible idea</option>
                            <option>pls don't do this</option>
                        </select>
                    `,
                },
            ],
        },
    },
    {
        title: 'with disabled item',
        inputs: {
            selected: [],
            options: [
                ...exampleDropdownOptions,
                {
                    id: 42,
                    label: 'this is disabled',
                    disabled: true,
                },
            ],
        },
    },
    {
        title: 'constrained width',
        customStyle: css`
            :host {
                max-width: 150px;
            }
        `,
    },
    {
        title: 'stretched width',
        customStyle: css`
            ${ViraDropdown} {
                width: 400px;
            }
        `,
    },
    {
        title: 'without a placeholder',
        inputs: {
            placeholder: undefined,
        },
    },
    {
        title: 'with a prefix',
        inputs: {
            selectionPrefix: 'Pre:',
            selected: [1],
        },
    },
    {
        title: 'with an icon',
        inputs: {
            icon: Element24Icon,
        },
    },
];

export const viraDropdownPage = defineBookPage({
    title: ViraDropdown.tagName,
    parent: dropdownPage,
    controls: {
        Selected: definePageControl({
            controlType: BookPageControlTypeEnum.Dropdown,
            initValue: '',
            options: [
                '',
                ...exampleDropdownOptions.map((option) => option.label),
            ],
        }),
        Prefix: definePageControl({
            controlType: BookPageControlTypeEnum.Text,
            initValue: '',
        }),
        'Force State': definePageControl({
            controlType: BookPageControlTypeEnum.Dropdown,
            options: [
                '',
                'force open',
                'force closed',
            ],
            initValue: '',
        }),
        'Multi Select': definePageControl({
            controlType: BookPageControlTypeEnum.Dropdown,
            options: [
                '',
                'all',
                'none',
            ],
            initValue: '',
        }),
        Icon: definePageControl({
            controlType: BookPageControlTypeEnum.Dropdown,
            initValue: '',
            options: [
                '',
                ...Object.keys(allIconsByName),
            ],
        }),
        Disabled: definePageControl({
            controlType: BookPageControlTypeEnum.Dropdown,
            options: [
                '',
                'all',
                'none',
            ],
            initValue: '',
        }),
        Placeholder: definePageControl({
            controlType: BookPageControlTypeEnum.Text,
            initValue: 'Select something',
        }),
    },
    elementExamplesCallback({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                stateInitStatic: {
                    selected: example.inputs?.selected || [],
                },
                styles: example.customStyle,
                renderCallback({state, updateState, controls}) {
                    const finalInputs: typeof ViraDropdown.inputsType = {
                        placeholder:
                            example.inputs && 'placeholder' in example.inputs
                                ? example.inputs.placeholder
                                : controls.Placeholder,
                        options: example.inputs?.options || exampleDropdownOptions,
                        selected: controls.Selected
                            ? [
                                  exampleDropdownOptions.find(
                                      (option) => option.label === controls.Selected,
                                  )?.id,
                              ].filter(check.isTruthy)
                            : state.selected,
                        selectionPrefix: controls.Prefix || example.inputs?.selectionPrefix,
                        isDisabled: controls.Disabled
                            ? controls.Disabled === 'all'
                            : example.inputs?.isDisabled,
                        icon: controls.Icon
                            ? allIconsByName[controls.Icon as keyof typeof allIconsByName]
                            : example.inputs?.icon,
                        isMultiSelect: controls['Multi Select']
                            ? controls['Multi Select'] === 'all'
                            : example.inputs?.isMultiSelect,
                        z_debug_forceOpenState: controls['Force State']
                            ? controls['Force State'] === 'force open'
                            : example.inputs?.z_debug_forceOpenState,
                    };

                    return html`
                        <${ViraDropdown.assign(finalInputs)}
                            ${listen(ViraDropdown.events.selectedChange, (event) => {
                                updateState({selected: event.detail});
                            })}
                        ></${ViraDropdown}>
                    `;
                },
            });
        });
    },
});
