import {MaybePromise} from '@augment-vir/common';
import {directive, Directive, PartInfo} from '../../lit-exports/all-lit-exports.js';
import {assertIsElementPartInfo} from './directive-helpers.js';

export type OnDomRenderedCallback = (element: Element) => MaybePromise<void>;

const directiveName = 'onDomRendered';

/** Fires each time the element its attached to is rendered. */
export const onDomRendered = directive(
    /** @internal */
    class extends Directive {
        constructor(partInfo: PartInfo) {
            super(partInfo);

            assertIsElementPartInfo(partInfo, directiveName);
        }

        override update(partInfo: PartInfo, [callback]: [OnDomRenderedCallback]) {
            assertIsElementPartInfo(partInfo, directiveName);
            const element = partInfo.element;
            // use `requestAnimationFrame` here so it can fire property changes outside of a render loop
            window.requestAnimationFrame(() => callback(element));
            return this.render(callback);
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render(callback: OnDomRenderedCallback) {
            return undefined;
        }
    },
);
