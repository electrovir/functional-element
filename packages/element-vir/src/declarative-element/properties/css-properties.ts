import {CustomElementTagName} from '../custom-tag-name.js';

/**
 * Base requirement for all CSS property names (like CSS var names).
 *
 * @category Internal
 */
export type BaseCssPropertyName<ElementTagName extends CustomElementTagName> =
    `${ElementTagName}-${string}`;

/**
 * Asserts that all the given CSS properties for the given element are valid.
 *
 * @category Internal
 */
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
