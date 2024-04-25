import {BookPageControlTypeEnum, defineBookPage, definePageControl} from 'element-book';
import {CSSResult, HTMLTemplateResult, html} from 'element-vir';
import {ViraDropdownItem} from 'vira';
import {dropdownPage} from './vira-dropdown.book';

const examples: ReadonlyArray<{
    title: string;
    inputs?: typeof ViraDropdownItem.inputsType;
    customStyle?: CSSResult;
    customTemplate?: HTMLTemplateResult;
}> = [
    {
        title: 'unselected',
        inputs: {
            label: 'my label',
            selected: false,
        },
    },
    {
        title: 'selected',
        inputs: {
            label: 'my label',
            selected: true,
        },
    },
    {
        title: 'with custom child',
        inputs: {
            label: 'custom child',
            selected: true,
        },
        customTemplate: html`
            <b>This is custom</b>
        `,
    },
];

export const ViraDropdownItemPage = defineBookPage({
    title: ViraDropdownItem.tagName,
    parent: dropdownPage,
    controls: {
        Selected: definePageControl({
            controlType: BookPageControlTypeEnum.Dropdown,
            initValue: '',
            options: [
                '',
                'all',
                'none',
            ],
        }),
        Label: definePageControl({
            controlType: BookPageControlTypeEnum.Text,
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
                renderCallback({controls}) {
                    const finalInputs: typeof ViraDropdownItem.inputsType = {
                        label: controls.Label || example.inputs?.label || '',
                        selected: controls.Selected
                            ? controls.Selected === 'all'
                            : !!example.inputs?.selected,
                    };

                    if (example.customTemplate) {
                        return html`
                            <${ViraDropdownItem.assign(finalInputs)}>
                                ${example.customTemplate}
                            </${ViraDropdownItem}>
                        `;
                    } else {
                        return html`
                            <${ViraDropdownItem.assign(finalInputs)}></${ViraDropdownItem}>
                        `;
                    }
                },
            });
        });
    },
});
