import {CallbackObservable, CallbackObservableInit} from 'observavir';
import {Constructor} from 'type-fest';
import {ElementVirStateSetup, stateSetupKey} from '../properties/element-vir-state-setup';

export type {AsyncValue} from 'observavir';

/** Class for constructing async props. Should not be referenced directly, use `AsyncProp` instead. */
class _AsyncPropClass<Value, Params> extends CallbackObservable<Value, Params> {}

export type AsyncProp<Value, Params> = Omit<
    _AsyncPropClass<Value, Params>,
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

export const AsyncProp: Constructor<
    AsyncProp<unknown, unknown>,
    ConstructorParameters<typeof _AsyncPropClass<unknown, unknown>>
> = _AsyncPropClass;

export function asyncProp<Value, Params = void>(
    init?: CallbackObservableInit<Value, Params>,
): ElementVirStateSetup<AsyncProp<Value, Params>> {
    return {
        [stateSetupKey]() {
            return new _AsyncPropClass(init);
        },
    };
}
