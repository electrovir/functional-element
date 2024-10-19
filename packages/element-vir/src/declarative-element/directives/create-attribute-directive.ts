import {directive, Directive, noChange, PartInfo} from '../../lit-exports/all-lit-exports.js';
import {extractElement} from './directive-helpers.js';

/**
 * Creates a lit directive that used simply for setting attributes on its parent element.
 *
 * @category Internal
 */
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
        /**
         * Creates a string for use with the
         * [`querySelector`](https://developer.mozilla.org/docs/Web/API/Document/querySelector) API
         * that selects this directive's attribute set to the given `attributeValue`.
         */
        attributeSelector(this: void, attributeValue: string) {
            return `[${attributeName}="${attributeValue}"]`;
        },
        /**
         * Instantiates the attribute directive. This must be used on an element inside of an HTML
         * template.
         */
        attributeDirective(this: void, attributeValue: string) {
            return newDirective(attributeValue);
        },
        /** The name of the attribute used in the directive. */
        attributeName,
    };
}
