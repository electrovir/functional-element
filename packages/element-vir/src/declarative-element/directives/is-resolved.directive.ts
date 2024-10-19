import {AsyncProp, AsyncValue} from './async-prop.js';

/**
 * Checks and type guards that the given async value is resolved, meaning that it is no longer a
 * promise. It may be an error though. This must be passed an {@link AsyncProp}'s `.value` property,
 * not the async prop itself.
 *
 * @category Async
 * @example
 *
 * ```ts
 * import {waitValue, extractErrorMessage} from '@augment-vir/common';
 * import {isResolved, html, defineElementNoInputs, asyncProp} from 'element-vir';
 *
 * const MyElement = defineElementNoInputs({
 *     tagName: 'my-element',
 *     stateInitStatic: {
 *         myProp: asyncProp({defaultValue: waitValue({seconds: 10}, 'value')}),
 *     },
 *     render({state}) {
 *         if (isAsyncError(state.myProp.value)) {
 *             return html`
 *                 Error: ${extractErrorMessage(state.myProp.value)}
 *             `;
 *         } else if (isResolved(state.myProp.value)) {
 *             return html`
 *                 Done!
 *             `;
 *         } else {
 *             return html`
 *                 Still waiting...
 *             `;
 *         }
 *     },
 * });
 * ```
 */
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

/**
 * Checks and type guards that the given async value is an error, meaning that the async prop's
 * promise was rejected. This must be passed an {@link AsyncProp}'s `.value` property, not the async
 * prop itself.
 *
 * @category Async
 * @example
 *
 * ```ts
 * import {waitValue, extractErrorMessage} from '@augment-vir/common';
 * import {isResolved, html, defineElementNoInputs, asyncProp} from 'element-vir';
 *
 * const MyElement = defineElementNoInputs({
 *     tagName: 'my-element',
 *     stateInitStatic: {
 *         myProp: asyncProp({defaultValue: waitValue({seconds: 10}, 'value')}),
 *     },
 *     render({state}) {
 *         if (isAsyncError(state.myProp.value)) {
 *             return html`
 *                 Error: ${extractErrorMessage(state.myProp.value)}
 *             `;
 *         } else if (isResolved(state.myProp.value)) {
 *             return html`
 *                 Done!
 *             `;
 *         } else {
 *             return html`
 *                 Still waiting...
 *             `;
 *         }
 *     },
 * });
 * ```
 */
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

/**
 * Same as {@link isResolved} but instead of a returning a boolean, it returns either the resolved
 * value or `undefined`.
 *
 * @category Async
 * @example
 *
 * ```ts
 * import {waitValue, extractErrorMessage} from '@augment-vir/common';
 * import {isResolved, html, defineElementNoInputs, asyncProp} from 'element-vir';
 *
 * const MyElement = defineElementNoInputs({
 *     tagName: 'my-element',
 *     stateInitStatic: {
 *         myProp: asyncProp({defaultValue: waitValue({seconds: 10}, 'value')}),
 *     },
 *     render({state}) {
 *         const resolvedValue = resolvedOrUndefined(state.myProp.value);
 *
 *         if (!resolvedValue) {
 *             return html`
 *                 Still waiting...
 *             `;
 *         } else if (isAsyncError(resolvedValue)) {
 *             return html`
 *                 Error: ${extractErrorMessage(state.myProp.value)}
 *             `;
 *         }
 *
 *         return html`
 *             Value: ${resolvedValue}
 *         `;
 *     },
 * });
 * ```
 */
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
