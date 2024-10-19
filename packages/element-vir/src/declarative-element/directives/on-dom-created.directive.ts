import type {MaybePromise} from '@augment-vir/common';
import {directive, Directive, PartInfo} from '../../lit-exports/all-lit-exports.js';
import {assertIsElementPartInfo} from './directive-helpers.js';

/**
 * The callback / listener passed to {@link onDomCreated}. The `element` parameter is a reference to
 * the DOM element that the directive was attached to.
 *
 * @category Internal
 */
export type OnDomCreatedCallback = (element: Element) => MaybePromise<void>;

const directiveName = 'onDomCreated';

/**
 * A directive that fires its listener only once, when the element that it's attached to is
 * constructed. This is particularly useful for getting references to internal elements immediately
 * after they've rendered.
 *
 * @category Directives
 * @example
 *
 * ```ts
 * import {html, defineElementNoInputs, onDomCreated} from 'element-vir';
 *
 * const MyElement = defineElementNoInputs({
 *     tagName: 'my-element',
 *     render() {
 *         return html`
 *             <div
 *                 ${onDomCreated((element) => {
 *                     console.log('created!', element);
 *                 })}
 *             >
 *                 Some div
 *             </div>
 *         `;
 *     },
 * });
 * ```
 */
export const onDomCreated = directive(
    class extends Directive {
        public element: Element | undefined;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            assertIsElementPartInfo(partInfo, directiveName);
        }

        override update(partInfo: PartInfo, [callback]: [OnDomCreatedCallback]) {
            assertIsElementPartInfo(partInfo, directiveName);
            const newElement = partInfo.element;
            if (newElement !== this.element) {
                // use requestAnimationFrame here so it can fire property changes outside of a render loop
                window.requestAnimationFrame(() => callback(newElement));
                this.element = newElement;
            }
            return this.render(callback);
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render(callback: OnDomCreatedCallback) {
            return undefined;
        }
    },
);
