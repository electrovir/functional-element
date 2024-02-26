import {mapObjectValues} from '@augment-vir/common';
import {BookPageControlTypeEnum, defineBookPage} from 'element-book';
import {CSSResult, css, html, listen} from 'element-vir';
import {Element24Icon, ViraInput, ViraInputType} from 'vira';
import {elementsBookPage} from '../elements.book';

export const viraInputBookPage = defineBookPage({
    title: ViraInput.tagName,
    parent: elementsBookPage,
    descriptionParagraphs: [
        'Supports placeholders, suffixes, icons, disabling browser helps (like spellchecking), blocking/allowing specific inputs, etc.',
        'Has completely customizable sizing and coloring.',
    ],
    controls: {
        'Text color': {
            controlType: BookPageControlTypeEnum.Color,
            initValue: ViraInput.cssVars['vira-input-text-color'].default,
        },
        'Placeholder color': {
            controlType: BookPageControlTypeEnum.Color,
            initValue: ViraInput.cssVars['vira-input-placeholder-color'].default,
        },
        'Border color': {
            controlType: BookPageControlTypeEnum.Color,
            initValue: ViraInput.cssVars['vira-input-border-color'].default,
        },
        'Focus color': {
            controlType: BookPageControlTypeEnum.Color,
            initValue: ViraInput.cssVars['vira-input-focus-border-color'].default,
        },
        'Selection color': {
            controlType: BookPageControlTypeEnum.Color,
            initValue: ViraInput.cssVars['vira-input-text-selection-color'].default,
        },
    } as const satisfies NonNullable<Parameters<typeof defineBookPage>[0]['controls']>,
    elementExamplesCallback({defineExample}) {
        type Example = {
            styles?: CSSResult;
            title: string;
            inputs: (typeof ViraInput)['inputsType'];
        };

        function defineInputExample({styles, title, inputs}: Readonly<Example>) {
            defineExample({
                title,
                styles: css`
                    ${styles || css``}
                `,
                stateInitStatic: {
                    value: inputs.value,
                },
                renderCallback({state, updateState, controls}) {
                    const cssVarControlValues = {
                        [String(ViraInput.cssVars['vira-input-text-color'].name)]:
                            controls['Text color'],
                        [String(ViraInput.cssVars['vira-input-placeholder-color'].name)]:
                            controls['Placeholder color'],
                        [String(ViraInput.cssVars['vira-input-border-color'].name)]:
                            controls['Border color'],
                        [String(ViraInput.cssVars['vira-input-focus-border-color'].name)]:
                            controls['Focus color'],
                        [String(ViraInput.cssVars['vira-input-text-selection-color'].name)]:
                            controls['Selection color'],
                    };

                    const cssVarValues = mapObjectValues(
                        cssVarControlValues,
                        (varName, controlValue) => {
                            return controlValue || 'inherit';
                        },
                    );

                    const styles = Object.entries(cssVarValues)
                        .map(
                            ([
                                varName,
                                varValue,
                            ]) => {
                                return (
                                    [
                                        varName,
                                        varValue,
                                    ].join(': ') + ';'
                                );
                            },
                        )
                        .join('\n');

                    return html`
                        <${ViraInput.assign({
                            ...inputs,
                            value: state.value,
                        })}
                            style=${styles}
                            ${listen(ViraInput.events.valueChange, (event) => {
                                updateState({
                                    value: event.detail,
                                });
                            })}
                        ></${ViraInput}>
                    `;
                },
            });
        }

        const examples: ReadonlyArray<Readonly<Example>> = [
            {
                title: 'basic',
                inputs: {
                    value: 'default value',
                },
            },
            {
                title: 'with icon',
                inputs: {
                    value: '',
                    icon: Element24Icon,
                },
            },
            {
                title: 'with placeholder',
                inputs: {
                    value: '',
                    placeholder: 'placeholder here',
                },
            },
            {
                title: 'with suffix',
                inputs: {
                    value: '42',
                    suffix: 'px',
                },
            },
            {
                title: 'with clear button',
                inputs: {
                    value: 'value',
                    placeholder: 'with clear',
                    showClearButton: true,
                },
            },
            {
                title: 'disabled',
                inputs: {
                    value: 'disabled',
                    disabled: true,
                },
            },
            {
                title: 'numbers only',
                inputs: {
                    value: '',
                    allowedInputs: /\d/,
                },
            },
            {
                title: 'numbers blocked',
                inputs: {
                    value: '',
                    blockedInputs: /\d/,
                },
            },
            {
                title: 'custom width',
                styles: css`
                    ${ViraInput} {
                        width: 120px;
                    }
                `,
                inputs: {
                    value: '',
                    placeholder: 'width',
                    icon: Element24Icon,
                },
            },
            {
                title: 'taller height',
                styles: css`
                    ${ViraInput} {
                        height: 48px;
                    }
                `,
                inputs: {
                    value: '',
                    placeholder: 'taller',
                    icon: Element24Icon,
                },
            },
            {
                title: 'shorter height',
                styles: css`
                    ${ViraInput} {
                        height: 26px;
                    }
                `,
                inputs: {
                    value: '',
                    placeholder: 'shorter',
                    showClearButton: true,
                    icon: Element24Icon,
                },
            },
            {
                title: 'max width',
                styles: css`
                    ${ViraInput} {
                        max-width: 150px;
                    }
                `,
                inputs: {
                    value: 'super long value that exceeds the max width',
                    placeholder: '42',
                },
            },
            {
                title: 'fit text',
                styles: css`
                    ${ViraInput} {
                        max-width: 150px;
                    }
                `,
                inputs: {
                    value: '',
                    placeholder: '42',
                    fitText: true,
                },
            },
            {
                title: 'password',
                inputs: {
                    value: 'as password',
                    type: ViraInputType.Password,
                },
            },
        ];

        examples.forEach(defineInputExample);
    },
});
