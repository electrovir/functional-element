import {check} from '@augment-vir/assert';
import {extractErrorMessage} from '@augment-vir/common';
import {AsyncProp} from './async-prop.js';

/**
 * Given a {@link AsyncProp} instance, call and return the output of the `resolutionRender` parameter
 * once the {@link AsyncProp} has been resolved, call and return the output of the `errorRender`
 * parameter if the {@link AsyncProp} errored out, return the `fallback` parameter in all other
 * cases.
 *
 * This is the overload for when `resolutionRender` and `errorRender` are both provided.
 *
 * @category Async
 */
export function renderAsync<
    T,
    FallbackResult,
    ResolutionRenderResult = never,
    ErrorRenderResult = never,
>(
    asyncProp: Pick<AsyncProp<T, any>, 'value'>,
    fallback: FallbackResult,
    resolutionRender: (resolved: Awaited<T>) => ResolutionRenderResult,
    errorRender: (error: Error) => ErrorRenderResult,
): FallbackResult | ResolutionRenderResult | ErrorRenderResult;
/**
 * Given a {@link AsyncProp} instance, call and return the output of the `resolutionRender` parameter
 * once the {@link AsyncProp} has been resolved, call and return the output of the `errorRender`
 * parameter if the {@link AsyncProp} errored out, return the `fallback` parameter in all other
 * cases.
 *
 * This is the overload for when `resolutionRender` is provided but `errorRender` is not.
 *
 * @category Async
 */
export function renderAsync<T, FallbackResult, ResolutionRenderResult = never>(
    asyncProp: Pick<AsyncProp<T, any>, 'value'>,
    fallback: FallbackResult,
    resolutionRender: (resolved: Awaited<T>) => ResolutionRenderResult,
    errorRender?: undefined,
): FallbackResult | ResolutionRenderResult | string;
/**
 * Given a {@link AsyncProp} instance, call and return the output of the `resolutionRender` parameter
 * once the {@link AsyncProp} has been resolved, call and return the output of the `errorRender`
 * parameter if the {@link AsyncProp} errored out, return the `fallback` parameter in all other
 * cases.
 *
 * This is the overload for when `resolutionRender` is not provided but `errorRender` is.
 *
 * @category Async
 */
export function renderAsync<T, FallbackResult, ErrorRenderResult = never>(
    asyncProp: Pick<AsyncProp<T, any>, 'value'>,
    fallback: FallbackResult,
    resolutionRender: undefined,
    errorRender: (error: Error) => ErrorRenderResult,
): FallbackResult | Awaited<T> | ErrorRenderResult;
/**
 * Given a {@link AsyncProp} instance, call and return the output of the `resolutionRender` parameter
 * once the {@link AsyncProp} has been resolved, call and return the output of the `errorRender`
 * parameter if the {@link AsyncProp} errored out, return the `fallback` parameter in all other
 * cases.
 *
 * This is the overload for when neither `resolutionRender` or `errorRender` are provided.
 *
 * @category Async
 */
export function renderAsync<T, FallbackResult>(
    asyncProp: Pick<AsyncProp<T, any>, 'value'>,
    fallback: FallbackResult,
    resolutionRender?: undefined,
    errorRender?: undefined,
): FallbackResult | Awaited<T> | string;
/**
 * Given a {@link AsyncProp} instance, call and return the output of the `resolutionRender` parameter
 * once the {@link AsyncProp} has been resolved, call and return the output of the `errorRender`
 * parameter if the {@link AsyncProp} errored out, return the `fallback` parameter in all other
 * cases.
 *
 * This is the full function definition and implementation.
 *
 * @category Async
 */
export function renderAsync<
    T,
    FallbackResult,
    ResolutionRenderResult = never,
    ErrorRenderResult = never,
>(
    asyncProp: Pick<AsyncProp<T, any>, 'value'>,
    /** This value will be rendered if the async prop has not settled yet. */
    fallback: FallbackResult,
    resolutionRender?: ((resolved: Awaited<T>) => ResolutionRenderResult) | undefined,
    errorRender?: ((error: Error) => ErrorRenderResult) | undefined,
): FallbackResult | Awaited<T> | ResolutionRenderResult | string | ErrorRenderResult {
    const asyncPropValue = asyncProp.value;
    if (asyncPropValue instanceof Error) {
        const errorResult: string | ErrorRenderResult = errorRender
            ? errorRender(asyncPropValue)
            : extractErrorMessage(asyncPropValue);
        return errorResult as any;
    } else if (check.isPromiseLike(asyncPropValue)) {
        const fallbackResult: FallbackResult = fallback;
        return fallbackResult as any;
    } else {
        const resolutionResult: ResolutionRenderResult | Awaited<T> = resolutionRender
            ? resolutionRender(asyncPropValue)
            : asyncPropValue;
        return resolutionResult as any;
    }
}
