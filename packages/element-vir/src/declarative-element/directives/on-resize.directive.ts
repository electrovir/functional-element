import type {MaybePromise} from '@augment-vir/common';
import {directive, Directive, PartInfo} from '../../lit-exports/all-lit-exports.js';
import {assertIsElementPartInfo} from './directive-helpers.js';

/**
 * Callback called by the {@link onResize} directive.
 *
 * @category Internal
 */
export type OnResizeCallback = (
    size: Readonly<
        Pick<
            ResizeObserverEntry,
            /** Only these two properties are supported in all major modern browsers */
            'target' | 'contentRect'
        >
    >,
    element: Element,
) => MaybePromise<void>;

const directiveName = 'onResize';

/**
 * A directive that fires its listener any time the element that it's attached to is resized. This
 * uses the [built-in `ResizeObserver`
 * API](https://developer.mozilla.org/docs/Web/API/ResizeObserver), so it is very efficient.
 *
 * @category Directives
 * @example
 *
 * ```ts
 * import {html, defineElementNoInputs, onResize} from 'element-vir';
 *
 * const MyElement = defineElementNoInputs({
 *     tagName: 'my-element',
 *     render() {
 *         return html`
 *             <div
 *                 ${onResize((size, element) => {
 *                     console.log('resized!', element, size);
 *                 })}
 *             >
 *                 Some div
 *             </div>
 *         `;
 *     },
 * });
 * ```
 */
export const onResize = directive(
    class extends Directive {
        element: Element | undefined;
        readonly resizeObserver = new ResizeObserver((entries) => this.fireCallback(entries));
        callback: OnResizeCallback | undefined;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            assertIsElementPartInfo(partInfo, directiveName);
        }

        fireCallback(entries: ResizeObserverEntry[]) {
            const resizeEntry = entries[0];
            if (!resizeEntry) {
                console.error(entries);
                throw new Error(
                    `${directiveName} observation triggered but the first entry was empty.`,
                );
            }
            void this.callback?.(
                {target: resizeEntry.target, contentRect: resizeEntry.contentRect},
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                this.element!,
            );
        }

        override update(partInfo: PartInfo, [callback]: [OnResizeCallback]) {
            assertIsElementPartInfo(partInfo, directiveName);
            this.callback = callback;
            const newElement = partInfo.element;
            const oldElement = this.element;
            // if the element changes we need to observe the new one
            if (newElement !== oldElement) {
                this.element = newElement;
                if (oldElement) {
                    this.resizeObserver.unobserve(oldElement);
                }
                this.resizeObserver.observe(newElement);
            }
            return this.render(callback);
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render(callback: OnResizeCallback) {
            return undefined;
        }
    },
);
