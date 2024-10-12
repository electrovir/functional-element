import {CustomElementTagName} from '../custom-tag-name.js';

export type BaseCssPropertyName<ElementTagName extends CustomElementTagName> =
    `${ElementTagName}-${string}`;

export function assertValidCssProperties(
    elementTagName: CustomElementTagName,
    cssProperties: Record<BaseCssPropertyName<CustomElementTagName>, any>,
): void {
    const requiredCssPropKeyStart = [
        elementTagName,
        '-',
    ].join('');

    Object.keys(cssProperties).forEach((cssPropName) => {
        if (!cssPropName.startsWith(requiredCssPropKeyStart)) {
            throw new Error(
                `Invalid CSS property name '${cssPropName}' in '${elementTagName}': CSS property names must begin with the element's tag name.`,
            );
        }
    });
}
