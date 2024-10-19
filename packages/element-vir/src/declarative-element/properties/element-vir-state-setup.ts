import {check} from '@augment-vir/assert';
import {PropertyInitMapBase} from './element-properties.js';

/**
 * Use this key with a function value on any object set in `stateInitStatic` to, rather than using
 * the object itself, call the function during each element's initialization and use the output of
 * that function rather than the object itself.
 *
 * See `perInstance` for an example usage.
 *
 * @category Util
 */
export const stateSetupKey = Symbol('element-vir-state-setup');

/**
 * The type for an object that uses {@link stateSetupKey}.
 *
 * @category Internal
 */
export type ElementVirStateSetup<InnerValue> = {
    [key in typeof stateSetupKey]: () => InnerValue;
};

/**
 * Check if the given value is a value {@link ElementVirStateSetup} implementation.
 *
 * @category Internal
 */
export function isElementVirStateSetup<T = unknown>(
    input: unknown,
): input is ElementVirStateSetup<T> {
    if (!check.isObject(input)) {
        return false;
    }

    return stateSetupKey in input && check.isFunction(input[stateSetupKey]);
}

/**
 * If the type parameter is an instance of {@link ElementVirStateSetup}, this unwraps that instance
 * to its type parameter. Otherwise, the original type parameter is used.
 *
 * @category Internal
 */
export type UnwrapElementVirStateSetup<T> = T extends ElementVirStateSetup<infer U> ? U : T;
/**
 * Allow wrapped state setup objects.
 *
 * @category Internal
 */
export type MaybeElementVirStateSetup<T> =
    | UnwrapElementVirStateSetup<T>
    | ElementVirStateSetup<UnwrapElementVirStateSetup<T>>;

/**
 * Unwraps all {@link ElementVirStateSetup} properties in the given state init object type parameter.
 *
 * @category Internal
 */
export type FlattenElementVirStateSetup<StateInit extends PropertyInitMapBase> = {
    [Prop in keyof StateInit]: Extract<StateInit[Prop], ElementVirStateSetup<any>> extends never
        ? StateInit[Prop]
        : Extract<StateInit[Prop], ElementVirStateSetup<any>> extends ElementVirStateSetup<
                infer InnerValue
            >
          ? InnerValue | Exclude<StateInit[Prop], ElementVirStateSetup<any>>
          : StateInit[Prop];
};

/**
 * Allows setting stat with {@link ElementVirStateSetup} properties.
 *
 * @category Internal
 */
export type AllowElementVirStateSetup<OriginalObject extends PropertyInitMapBase> = {
    [Prop in keyof OriginalObject]: MaybeElementVirStateSetup<OriginalObject[Prop]>;
};
