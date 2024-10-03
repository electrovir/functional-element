import {check} from '@augment-vir/assert';
import {PropertyInitMapBase} from './element-properties';

export const stateSetupKey = Symbol('element-vir-state-setup');

export type ElementVirStateSetup<InnerValue> = {
    [key in typeof stateSetupKey]: () => InnerValue;
};

export function isElementVirStateSetup<T = unknown>(
    input: unknown,
): input is ElementVirStateSetup<T> {
    if (!check.isObject(input)) {
        return false;
    }

    return stateSetupKey in input;
}

export type UnwrapElementVirStateSetup<T> = T extends ElementVirStateSetup<infer U> ? U : T;
export type MaybeElementVirStateSetup<T> =
    | UnwrapElementVirStateSetup<T>
    | ElementVirStateSetup<UnwrapElementVirStateSetup<T>>;

export type FlattenElementVirStateSetup<OriginalObject extends PropertyInitMapBase> = {
    [Prop in keyof OriginalObject]: Extract<
        OriginalObject[Prop],
        ElementVirStateSetup<any>
    > extends never
        ? OriginalObject[Prop]
        : Extract<OriginalObject[Prop], ElementVirStateSetup<any>> extends ElementVirStateSetup<
                infer InnerValue
            >
          ? InnerValue | Exclude<OriginalObject[Prop], ElementVirStateSetup<any>>
          : OriginalObject[Prop];
};

export type AllowElementVirStateSetup<OriginalObject extends PropertyInitMapBase> = {
    [Prop in keyof OriginalObject]: MaybeElementVirStateSetup<OriginalObject[Prop]>;
};
