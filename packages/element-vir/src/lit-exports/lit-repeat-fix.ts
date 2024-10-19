export type {KeyFn} from 'lit/directives/repeat.js';
export type {RepeatDirective};

import {type Directive, type PartInfo} from 'lit-html/directive.js';
import {type KeyFn} from 'lit-html/directives/repeat.js';
import {type ChildPart, type noChange} from 'lit-html/lit-html.js';
import {repeat as repeatImport} from 'lit/directives/repeat.js';
import {type HtmlInterpolation} from '../template-transforms/vir-html/html-interpolation.js';

/**
 * A modified class type for the built-in lit `repeat` directive which works for element-vir
 * declarative elements.
 *
 * @category Internal
 */
declare class RepeatDirective extends Directive {
    private _itemKeys?;
    constructor(partInfo: PartInfo);
    private _getValuesAndKeys;
    /** Renders the repeated templates. */
    render<T>(items: Iterable<T>, template: ItemTemplate<T>): Array<HtmlInterpolation>;
    /** Renders the repeated templates. */
    render<T>(
        items: Iterable<T>,
        keyFn: KeyFn<T> | ItemTemplate<T>,
        template: ItemTemplate<T>,
    ): Array<HtmlInterpolation>;

    /** Updates the repeated templates. */
    update<T>(
        containerPart: ChildPart,
        [
            items,
            keyFnOrTemplate,
            template,
        ]: [
            Iterable<T>,
            (
                | KeyFn<T>
                | ItemTemplate<T>
            ),
            ItemTemplate<T>,
        ],
    ): HtmlInterpolation[] | typeof noChange;
}

/**
 * A modified `ItemTemplate` type for the built-in lit `repeat` directive which works for
 * element-vir declarative elements.
 *
 * @category Internal
 */
export type ItemTemplate<T> = (item: T, index: number) => HtmlInterpolation;

/**
 * A modified `RepeatDirectiveFn` type for the built-in lit `repeat` directive which works for
 * element-vir declarative elements.
 *
 * @category Internal
 */
export interface RepeatDirectiveFn {
    <T>(
        items: Iterable<T>,
        keyFnOrTemplate: KeyFn<T> | ItemTemplate<T>,
        template?: ItemTemplate<T>,
    ): HtmlInterpolation[];
    <T>(items: Iterable<T>, template: ItemTemplate<T>): HtmlInterpolation[];
    <T>(
        items: Iterable<T>,
        keyFn: KeyFn<T> | ItemTemplate<T>,
        template: ItemTemplate<T>,
    ): HtmlInterpolation[];
}

/**
 * A directive that repeats a series of values (usually `TemplateResults`) generated from an
 * iterable, and updates those items efficiently when the iterable changes based on user-provided
 * `keys` associated with each item.
 *
 * Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained, meaning previous DOM
 * for a given key is moved into the new position if needed, and DOM will never be reused with
 * values for different keys (new DOM will always be created for new keys). This is generally the
 * most efficient way to use `repeat` since it performs minimum unnecessary work for insertions and
 * removals.
 *
 * The `keyFn` takes two parameters, the item and its index, and returns a unique key value.
 *
 * ```js
 * html`
 *     <ol>
 *         ${repeat(
 *             this.items,
 *             (item) => item.id,
 *             (item, index) => {
 *                 return html`
 *                     <li>${index}: ${item.name}</li>
 *                 `;
 *             },
 *         )}
 *     </ol>
 * `;
 * ```
 *
 * **Important**: If providing a `keyFn`, keys _must_ be unique for all items in a given call to
 * `repeat`. The behavior when two or more items have the same key is undefined.
 *
 * If no `keyFn` is provided, this directive will perform similar to mapping items to values, and
 * DOM will be reused against potentially different items.
 */
export const repeat = repeatImport as RepeatDirectiveFn;
