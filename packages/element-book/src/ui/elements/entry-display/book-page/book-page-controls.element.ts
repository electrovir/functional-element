import {check} from '@augment-vir/assert';
import {Values} from '@augment-vir/common';
import {extractEventTarget} from '@augment-vir/web';
import {css, defineElementEvent, html, listen, renderIf} from 'element-vir';
import {Options24Icon, ViraIcon, ViraInput} from 'vira';
import {
    BookPageControl,
    BookPageControlInit,
    BookPageControlType,
    BookPageControlsValues,
    isControlInitType,
} from '../../../../data/book-entry/book-page/book-page-controls.js';
import {BookPage} from '../../../../data/book-entry/book-page/book-page.js';
import {colorThemeCssVars} from '../../../color-theme/color-theme.js';
import {defineBookElement} from '../../define-book-element.js';

export const BookPageControls = defineBookElement<{
    config: BookPage['controls'];
    /**
     * If an object (or Record) is given for this input, then each key of the object must correspond
     * to one of the controls from the input config and the value for each key will be the
     * breadcrumbs for that specific config.
     */
    fullUrlBreadcrumbs: ReadonlyArray<string> | Record<string, ReadonlyArray<string>>;
    currentValues: Record<string, BookPageControl['initValue']>;
}>()({
    tagName: 'book-page-controls',
    events: {
        controlValueChange: defineElementEvent<{
            fullUrlBreadcrumbs: ReadonlyArray<string>;
            newValues: BookPageControlsValues;
        }>(),
    },
    hostClasses: {
        'book-page-controls-has-controls': ({inputs}) => !!Object.keys(inputs.config).length,
    },
    styles: ({hostClasses}) => css`
        :host {
            display: flex;
            flex-wrap: wrap;
            align-items: flex-end;
            padding-left: 36px;
            align-content: flex-start;
            gap: 16px;
            row-gap: 10px;
            color: ${colorThemeCssVars['element-book-page-foreground-faint-level-1-color'].value};
        }

        ${hostClasses['book-page-controls-has-controls'].selector} {
            margin-top: 8px;
        }

        .control-wrapper {
            position: relative;
            display: flex;
            gap: 4px;
            flex-direction: column;
        }

        .error {
            font-weight: bold;
            color: red;
        }

        ${ViraInput} {
            height: 24px;
            max-width: 128px;
        }

        ${ViraIcon}.options-icon {
            position: absolute;
            left: 0;
            bottom: 0;
            margin-left: -32px;
        }
    `,
    render({inputs, dispatch, events}) {
        if (!Object.entries(inputs.config).length) {
            return '';
        }

        return Object.entries(inputs.config).map(
            (
                [
                    controlName,
                    controlInit,
                ],
                index,
            ) => {
                if (controlInit.controlType === BookPageControlType.Hidden) {
                    return '';
                }

                const controlInputTemplate = createControlInput(
                    inputs.currentValues[controlName],
                    controlInit,
                    (newValue) => {
                        const fullUrlBreadcrumbs = check.isArray(inputs.fullUrlBreadcrumbs)
                            ? inputs.fullUrlBreadcrumbs
                            : inputs.fullUrlBreadcrumbs[controlName];

                        if (!fullUrlBreadcrumbs) {
                            throw new Error(
                                `Failed to find breadcrumbs from given control name: '${controlName}'`,
                            );
                        }

                        dispatch(
                            new events.controlValueChange({
                                fullUrlBreadcrumbs,
                                newValues: {
                                    ...inputs.currentValues,
                                    [controlName]: newValue,
                                },
                            }),
                        );
                    },
                );
                return html`
                    <div class="control-wrapper">
                        ${renderIf(
                            index === 0,
                            html`
                                <${ViraIcon.assign({icon: Options24Icon})}
                                    class="options-icon"
                                ></${ViraIcon}>
                            `,
                        )}
                        <label class="control-wrapper">
                            <span>${controlName}</span>
                            ${controlInputTemplate}
                        </label>
                    </div>
                `;
            },
        );
    },
});

function createControlInput(
    value: string,
    controlInit: BookPageControlInit<any>,
    valueChange: (newValue: Values<BookPageControlsValues>) => void,
) {
    if (isControlInitType(controlInit, BookPageControlType.Hidden)) {
        return '';
    } else if (isControlInitType(controlInit, BookPageControlType.Checkbox)) {
        return html`
            <input
                type="checkbox"
                .value=${value}
                ${listen('input', (event) => {
                    const inputElement = extractEventTarget(event, HTMLInputElement);

                    valueChange(inputElement.checked);
                })}
            />
        `;
    } else if (isControlInitType(controlInit, BookPageControlType.Color)) {
        return html`
            <input
                type="color"
                .value=${value}
                ${listen('input', (event) => {
                    const inputElement = extractEventTarget(event, HTMLInputElement);

                    valueChange(inputElement.value);
                })}
            />
        `;
    } else if (isControlInitType(controlInit, BookPageControlType.Text)) {
        return html`
            <${ViraInput.assign({
                value: String(value),
                showClearButton: true,
                disableBrowserHelps: true,
            })}
                ${listen(ViraInput.events.valueChange, (event) => {
                    valueChange(event.detail);
                })}
            ></${ViraInput}>
        `;
    } else if (isControlInitType(controlInit, BookPageControlType.Number)) {
        return html`
            <input
                type="number"
                .value=${value}
                ${listen('input', (event) => {
                    const inputElement = extractEventTarget(event, HTMLInputElement);

                    valueChange(inputElement.value);
                })}
            />
        `;
    } else if (isControlInitType(controlInit, BookPageControlType.Dropdown)) {
        return html`
            <select
                .value=${value}
                ${listen('input', (event) => {
                    const selectElement = extractEventTarget(event, HTMLSelectElement);

                    valueChange(selectElement.value);
                })}
            >
                ${controlInit.options.map((optionLabel) => {
                    return html`
                        <option ?selected=${optionLabel === value} value=${optionLabel}>
                            ${optionLabel}
                        </option>
                    `;
                })}
            </select>
        `;
    } else {
        return html`
            <p class="error">${controlInit.controlType} controls are not implemented yet.</p>
        `;
    }
}
