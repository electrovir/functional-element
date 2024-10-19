import {ElementVirStateSetup, stateSetupKey} from './element-vir-state-setup.js';

/**
 * For use within `stateInitStatic`: use this as the value of a state prop to call the given
 * callback on each element's creation rather than creating a static state init value.
 *
 * @category Directives
 * @example
 *
 * ```ts
 * import {waitValue, extractErrorMessage} from '@augment-vir/common';
 * import {isResolved, html, defineElementNoInputs, perInstance} from 'element-vir';
 *
 * const MyElement = defineElementNoInputs({
 *     tagName: 'my-element',
 *     stateInitStatic: {
 *         // each instance of `MyElement` will have a different `randomValue`
 *         randomValue: perInstance(() => Math.random()),
 *     },
 *     render({state}) {
 *         return html`
 *             Value: ${state.randomValue}
 *         `;
 *     },
 * });
 * ```
 */
export function perInstance<T>(creationCallback: () => T): T {
    const stateSetup: ElementVirStateSetup<T> = {
        [stateSetupKey]: creationCallback,
    };

    return stateSetup as T;
}
