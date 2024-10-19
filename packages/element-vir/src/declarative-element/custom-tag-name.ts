/**
 * The spec-required type for all custom tag names (they must contain a hyphen).
 *
 * @category Internal
 * @see https://developer.mozilla.org/docs/Web/API/Web_components/Using_custom_elements#name
 */
export type CustomElementTagName = `${string}-${string}`;
