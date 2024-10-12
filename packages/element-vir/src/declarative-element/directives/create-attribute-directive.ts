import {directive, Directive, noChange, PartInfo} from '../../lit-exports/all-lit-exports.js';
import {extractElement} from './directive-helpers.js';

export function createAttributeDirective(attributeName: string) {
    const newDirective = directive(
        /** @internal */
        class extends Directive {
            public readonly element: Element;

            constructor(partInfo: PartInfo) {
                super(partInfo);

                this.element = extractElement(partInfo, attributeName);
            }

            render(attributeValue: string) {
                this.element.setAttribute(attributeName, attributeValue);
                return noChange;
            }
        },
    );

    return {
        attributeSelector(this: void, attributeValue: string) {
            return `[${attributeName}="${attributeValue}"]`;
        },
        attributeDirective(this: void, attributeValue: string) {
            return newDirective(attributeValue);
        },
        attributeName,
    };
}
