/**
 * Set by {@link requireAllCustomElementsToBeDeclarativeElements} and read in the HTML tagged
 * template function.
 *
 * @category Internal
 */
export let declarativeElementRequired = false;

/**
 * Calling this requires all custom element children to be declarative elements defined by
 * element-vir.
 *
 * @category Util
 */
export function requireAllCustomElementsToBeDeclarativeElements() {
    declarativeElementRequired = true;
}
