import {when} from '../../lit-exports/all-lit-exports.js';

/**
 * A directive that, given a condition, chooses between two inputs: `ifTrue` and `ifFalse`. If
 * `ifFalse` is omitted (which is allowed), the false case defaults to `undefined`, which won't get
 * rendered at all inside of an HTML template.
 *
 * @category Directives
 * @example
 *
 * ```ts
 * import {html, defineElementNoInputs, renderIf} from 'element-vir';
 *
 * const MyElement = defineElementNoInputs({
 *     tagName: 'my-element',
 *     render() {
 *         return html`
 *             <div>
 *                 ${renderIf(
 *                     Math.random() > 0.5,
 *                     html`
 *                         True!
 *                     `,
 *                     html`
 *                         False!
 *                     `,
 *                 )}
 *             </div>
 *         `;
 *     },
 * });
 * ```
 */
export function renderIf<TrueCondition = unknown, FalseCondition = undefined>(
    condition: boolean,
    ifTrue: TrueCondition,
    ifFalse?: FalseCondition,
): TrueCondition | FalseCondition {
    return when(
        condition,
        () => ifTrue,
        () => ifFalse,
    ) as TrueCondition | FalseCondition;
}
