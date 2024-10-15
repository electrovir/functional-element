import {BookPageControlType, defineBookPage, definePageControl} from 'element-book';
import {CSSResult, HTMLTemplateResult, css, html} from 'element-vir';
import {ViraDropdownItem} from 'vira';
import {dropdownPage} from './vira-dropdown.book.js';

const examples: ReadonlyArray<{
    title: string;
    inputs: typeof ViraDropdownItem.inputsType;
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
    {
        title: 'constrained width',
        customStyle: css`
            :host {
                max-width: 100px;
            }
        `,
        inputs: {
            label: 'has more text than is possible to fit',
            selected: true,
        },
    },
    {
        title: 'stretched width',
        customStyle: css`
            ${ViraDropdownItem} {
                width: 400px;
            }
        `,
        inputs: {
            label: 'wide',
            selected: true,
        },
    },
];

export const ViraDropdownItemPage = defineBookPage({
    title: ViraDropdownItem.tagName,
    parent: dropdownPage,
    controls: {
        Selected: definePageControl({
            controlType: BookPageControlType.Dropdown,
            initValue: '',
            options: [
                '',
                'all',
                'none',
            ],
        }),
        Label: definePageControl({
            controlType: BookPageControlType.Text,
            initValue: '',
        }),
    },
    defineExamples({defineExample}) {
        examples.forEach((example) => {
            defineExample({
                title: example.title,
                stateInitStatic: {
                    selected: example.inputs.selected || [],
                },
                styles: example.customStyle,
                render({controls}) {
                    const finalInputs: typeof ViraDropdownItem.inputsType = {
                        label: controls.Label || example.inputs.label,
                        selected: controls.Selected
                            ? controls.Selected === 'all'
                            : example.inputs.selected,
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
