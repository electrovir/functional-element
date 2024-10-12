import {AsyncProp, AsyncValue} from './async-prop.js';

export function isResolved<Value extends AsyncValue<any>>(
    asyncValue: Value extends AsyncProp<any, any>
        ? 'Error: pass AsyncProp.value, not AsyncProp itself.'
        : Value,
): asyncValue is Exclude<typeof asyncValue, Promise<any>> {
    if (asyncValue instanceof AsyncProp) {
        throw new TypeError('Pass AsyncProp.value, not AsyncProp itself.');
    }

    return !(asyncValue instanceof Promise);
}

export function isAsyncError<Value extends AsyncValue<any>>(
    asyncValue: Value extends AsyncProp<any, any>
        ? 'Error: pass AsyncProp.value, not AsyncProp itself.'
        : Value,
): asyncValue is Extract<typeof asyncValue, Error> {
    if (asyncValue instanceof AsyncProp) {
        throw new TypeError('Pass AsyncProp.value, not AsyncProp itself.');
    }
    return asyncValue instanceof Error;
}

export function resolvedOrUndefined<Value extends AsyncValue<any>>(
    asyncValue: Value extends AsyncProp<any, any>
        ? 'Error: pass AsyncProp.value, not AsyncProp itself.'
        : Value,
): Exclude<typeof asyncValue, Promise<any>> | undefined {
    if (isResolved(asyncValue)) {
        return asyncValue;
    } else {
        return undefined;
    }
}
