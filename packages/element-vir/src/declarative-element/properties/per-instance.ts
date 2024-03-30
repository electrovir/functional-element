import {ElementVirStateSetup, stateSetupKey} from './element-vir-state-setup';

/**
 * A state prop helper that sets up the given callback for each instance of the element that this
 * state is contained within.
 */
export function perInstance<T>(creationCallback: () => T): T {
    const stateSetup: ElementVirStateSetup<T> = {
        [stateSetupKey]: creationCallback,
    };

    return stateSetup as T;
}
