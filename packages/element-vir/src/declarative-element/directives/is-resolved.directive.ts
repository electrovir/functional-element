import {isPromiseLike} from '@augment-vir/common';
import {AsyncValue} from './async-prop';

export function isResolved<Value extends AsyncValue<any>>(
    asyncPropInput: Value,
): asyncPropInput is Exclude<Value, Promise<any>> {
    return !isPromiseLike(asyncPropInput);
}

export function isError(asyncPropInput: unknown): asyncPropInput is Error {
    return asyncPropInput instanceof Error;
}

export function resolvedOrUndefined<Value extends AsyncValue<any>>(
    asyncPropInput: Value,
): Exclude<Value, Promise<any>> | undefined {
    if (isResolved(asyncPropInput)) {
        return asyncPropInput;
    } else {
        return undefined;
    }
}
