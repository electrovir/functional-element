import {extractErrorMessage, isPromiseLike} from '@augment-vir/common';
import {AsyncProp} from './async-prop';

// overload for when resolutionRender and errorRender are both provided
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
// overload for when resolutionRender is provided but errorRender is not
export function renderAsync<
    T,
    FallbackResult,
    ResolutionRenderResult = never,
    ErrorRenderResult = never,
>(
    asyncProp: Pick<AsyncProp<T, any>, 'value'>,
    fallback: FallbackResult,
    resolutionRender: (resolved: Awaited<T>) => ResolutionRenderResult,
    errorRender?: undefined,
): FallbackResult | ResolutionRenderResult | string;
// overload for when resolutionRender is not provided but errorRender is
export function renderAsync<
    T,
    FallbackResult,
    ResolutionRenderResult = never,
    ErrorRenderResult = never,
>(
    asyncProp: Pick<AsyncProp<T, any>, 'value'>,
    fallback: FallbackResult,
    resolutionRender: undefined,
    errorRender: (error: Error) => ErrorRenderResult,
): FallbackResult | Awaited<T> | ErrorRenderResult;
// overload for when neither resolutionRender or errorRender are provided
export function renderAsync<
    T,
    FallbackResult,
    ResolutionRenderResult = never,
    ErrorRenderResult = never,
>(
    asyncProp: Pick<AsyncProp<T, any>, 'value'>,
    fallback: FallbackResult,
    resolutionRender?: undefined,
    errorRender?: undefined,
): FallbackResult | Awaited<T> | string;
// full function type
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
    } else if (isPromiseLike(asyncPropValue)) {
        const fallbackResult: FallbackResult = fallback;
        return fallbackResult as any;
    } else {
        const resolutionResult: ResolutionRenderResult | Awaited<T> = resolutionRender
            ? resolutionRender(asyncPropValue)
            : asyncPropValue;
        return resolutionResult as any;
    }
}
