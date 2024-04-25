import {isTruthy} from '@augment-vir/common';
import {BookPageControlTypeEnum, defineBookPage, definePageControl} from 'element-book';
import {CSSResult, html, listen} from 'element-vir';
import {ViraDropdown, ViraDropdownOption, allIconsByName} from 'vira';
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
            selected: [8],
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
            selected: [8],
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
    // {
    //     title: 'forced open',
    //     inputs: {
    //         z_debug_forceOpenState: true,
    //         selected: [1],
    //     },
    // },
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
    },
    elementExamplesCallback({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                stateInitStatic: {
                    selected: example.inputs?.selected || [],
                },
                renderCallback({state, updateState, controls}) {
                    const finalInputs: typeof ViraDropdown.inputsType = {
                        options: example.inputs?.options || exampleDropdownOptions,
                        selected: controls.Selected
                            ? [
                                  exampleDropdownOptions.find(
                                      (option) => option.label === controls.Selected,
                                  )?.id,
                              ].filter(isTruthy)
                            : state.selected,
                        buttonPrefix: controls.Prefix || example.inputs?.buttonPrefix,
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
