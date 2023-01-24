import {extractErrorMessage, isPromiseLike, UnPromise} from '@augment-vir/common';
import {AsyncState} from '../properties/async-state';

// overload for when resolutionRender and errorRender are both provided
export function renderAsyncState<
    T,
    FallbackResult,
    ResolutionRenderResult = never,
    ErrorRenderResult = never,
>(
    asyncState: AsyncState<T>,
    fallback: FallbackResult,
    resolutionRender: (resolved: UnPromise<T>) => ResolutionRenderResult,
    errorRender: (error: Error) => ErrorRenderResult,
): FallbackResult | ResolutionRenderResult | ErrorRenderResult;
// overload for when resolutionRender is provided but errorRender is not
export function renderAsyncState<
    T,
    FallbackResult,
    ResolutionRenderResult = never,
    ErrorRenderResult = never,
>(
    asyncState: AsyncState<T>,
    fallback: FallbackResult,
    resolutionRender: (resolved: UnPromise<T>) => ResolutionRenderResult,
    errorRender?: undefined,
): FallbackResult | ResolutionRenderResult | string;
// overload for when resolutionRender is not provided but errorRender is
export function renderAsyncState<
    T,
    FallbackResult,
    ResolutionRenderResult = never,
    ErrorRenderResult = never,
>(
    asyncState: AsyncState<T>,
    fallback: FallbackResult,
    resolutionRender: undefined,
    errorRender: (error: Error) => ErrorRenderResult,
): FallbackResult | UnPromise<T> | ErrorRenderResult;
// overload for when neither resolutionRender or errorRender are provided
export function renderAsyncState<
    T,
    FallbackResult,
    ResolutionRenderResult = never,
    ErrorRenderResult = never,
>(
    asyncState: AsyncState<T>,
    fallback: FallbackResult,
    resolutionRender?: undefined,
    errorRender?: undefined,
): FallbackResult | UnPromise<T> | string;
// full function type
export function renderAsyncState<
    T,
    FallbackResult,
    ResolutionRenderResult = never,
    ErrorRenderResult = never,
>(
    asyncState: AsyncState<T>,
    /** This value will be rendered if the async state has not settled yet. */
    fallback: FallbackResult,
    resolutionRender?: ((resolved: UnPromise<T>) => ResolutionRenderResult) | undefined,
    errorRender?: ((error: Error) => ErrorRenderResult) | undefined,
): FallbackResult | UnPromise<T> | ResolutionRenderResult | string | ErrorRenderResult {
    if (asyncState instanceof Error) {
        const errorResult: string | ErrorRenderResult = errorRender
            ? errorRender(asyncState)
            : extractErrorMessage(asyncState);
        return errorResult as any;
    } else if (isPromiseLike(asyncState)) {
        const fallbackResult: FallbackResult = fallback;
        return fallbackResult as any;
    } else {
        const resolutionResult: ResolutionRenderResult | UnPromise<T> = resolutionRender
            ? resolutionRender(asyncState)
            : asyncState;
        return resolutionResult as any;
    }
}
