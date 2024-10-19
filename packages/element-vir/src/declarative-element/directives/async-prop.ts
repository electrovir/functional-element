import {CallbackObservable, CallbackObservableInit} from 'observavir';
import {Constructor} from 'type-fest';
import {ElementVirStateSetup, stateSetupKey} from '../properties/element-vir-state-setup.js';

export type {AsyncValue} from 'observavir';

/** Class for constructing async props. Should not be referenced directly, use `AsyncProp` instead. */
class InternalAsyncPropClass<Value, Params> extends CallbackObservable<Value, Params> {}

/**
 * An async property created by {@link asyncProp} for use within declarative elements.
 *
 * @category Internal
 */
export type AsyncProp<Value, Params> = Omit<
    InternalAsyncPropClass<Value, Params>,
    /** Hide these properties to make the `AsyncProp` interface much simpler. */
    | 'dispatch'
    | 'equalityCheck'
    | 'getListenerCount'
    | 'updateCallback'
    | 'removeListener'
    | 'removeAllListeners'
    | 'listenToEvent'
    | 'listen'
>;

/**
 * An async property created by {@link asyncProp} for use within declarative elements.
 *
 * @category Internal
 */
// eslint-disable-next-line sonarjs/no-redeclare
export const AsyncProp: Constructor<
    AsyncProp<unknown, unknown>,
    ConstructorParameters<typeof InternalAsyncPropClass<unknown, unknown>>
> = InternalAsyncPropClass;

/**
 * Create an async prop for a declarative element's state.
 *
 * @category Async
 */
export function asyncProp<Value, Params = void>(
    init?: CallbackObservableInit<Value, Params>,
): ElementVirStateSetup<AsyncProp<Value, Params>> {
    return {
        [stateSetupKey]() {
            return new InternalAsyncPropClass(init);
        },
    };
}
