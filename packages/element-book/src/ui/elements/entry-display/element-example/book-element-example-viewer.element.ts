import {combineErrors, extractErrorMessage} from '@augment-vir/common';
import {html, renderIf} from 'element-vir';
import {BookEntryTypeEnum} from '../../../../data/book-entry/book-entry-type';
import {BookPageControlsValues} from '../../../../data/book-entry/book-page/book-page-controls';
import {BookTreeNode} from '../../../../data/book-tree/book-tree-node';
import {unsetInternalState} from '../../../../data/unset';
import {BookError} from '../../common/book-error.element';
import {defineBookElement} from '../../define-book-element';

export const BookElementExampleViewer = defineBookElement<{
    elementExampleNode: BookTreeNode<BookEntryTypeEnum.ElementExample>;
    currentPageControls: BookPageControlsValues;
}>()({
    tagName: 'book-element-example-viewer',
    stateInitStatic: {
        isUnset: unsetInternalState,
    } as any,
    renderCallback({state, inputs, updateState}) {
        try {
            if (inputs.elementExampleNode.entry.errors.length) {
                throw combineErrors(inputs.elementExampleNode.entry.errors);
            }

            if (
                !inputs.elementExampleNode.entry.renderCallback ||
                typeof inputs.elementExampleNode.entry.renderCallback === 'string'
            ) {
                throw new Error(
                    `Failed to render example '${inputs.elementExampleNode.entry.title}': renderCallback is not a function`,
                );
            }

            if (state.isUnset === unsetInternalState) {
                updateState({
                    isUnset: undefined,
                    ...inputs.elementExampleNode.entry.stateInitStatic,
                });
            }

            const output = inputs.elementExampleNode.entry.renderCallback({
                state,
                updateState,
                controls: inputs.currentPageControls,
            });
            if (output instanceof Promise) {
                throw new Error('renderCallback output cannot be a promise');
            }

            return html`
                ${renderIf(
                    !!inputs.elementExampleNode.entry.styles,
                    html`
                        <style>
                            ${inputs.elementExampleNode.entry.styles}
                        </style>
                    `,
                )}
                ${output}
            `;
        } catch (error) {
            console.error(error);
            return html`
                <${BookError.assign({
                    message: `${
                        inputs.elementExampleNode.entry.title
                    } failed: ${extractErrorMessage(error)}`,
                })}></${BookError}>
            `;
        }
    },
    options: {
        allowPolymorphicState: true,
    },
});
