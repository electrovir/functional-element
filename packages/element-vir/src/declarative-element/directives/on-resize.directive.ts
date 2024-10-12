import {directive, Directive, PartInfo} from '../../lit-exports/all-lit-exports.js';
import {assertIsElementPartInfo} from './directive-helpers.js';

export type OnResizeCallback = (
    /** Only these two properties are supported in all major modern browsers */
    size: Readonly<Pick<ResizeObserverEntry, 'target' | 'contentRect'>>,
    element: Element,
) => void;

const directiveName = 'onResize';

export const onResize = directive(
    /** @internal */
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
            this.callback?.(
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
