import {directive, Directive, PartInfo} from '../../lit-exports/all-lit-exports.js';
import {assertIsElementPartInfo} from './directive-helpers.js';

export type OnDomCreatedCallback = (element: Element) => void;

const directiveName = 'onDomCreated';

/** Only fires once, when the element has been created. */
export const onDomCreated = directive(
    /** @internal */
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
