import {
    areJsonEqual,
    createDeferredPromiseWrapper,
    DeferredPromiseWrapper,
    ensureError,
    isLengthAtLeast,
    isPromiseLike,
    JsonCompatibleValue,
    UnPromise,
} from '@augment-vir/common';
import {PickAndBlockOthers} from '../../augments/type';
import {PropertyInitMapBase} from './element-properties';

export type AsyncState<ValueGeneric> =
    | Error
    | UnPromise<ValueGeneric>
    | Promise<UnPromise<ValueGeneric>>;

const asyncMarkerSymbol = Symbol('element-vir-async-state-marker');
const notSetSymbol = Symbol('not set');

export function isRenderReady<T>(asyncStateInput: AsyncState<T>): asyncStateInput is UnPromise<T> {
    if (asyncStateInput instanceof Error) {
        return false;
    } else if (isPromiseLike(asyncStateInput)) {
        return false;
    } else {
        return true;
    }
}

type AllSetValueProperties<ValueGeneric> = {
    /** Set a new value directly without using any promises. */
    resolvedValue: UnPromise<ValueGeneric>;
    createPromise: () => Promise<UnPromise<ValueGeneric>>;
    /**
     * When trigger changes (according to deep equality checking through JSON stringify), the
     * createPromise callback will be called and the element's state will be updated again.
     * Otherwise, the createPromise callback will only be called the first time.
     *
     * Set this to undefined to disabled automatic updating. Meaning, createPromise will only be
     * called the first time.
     */
    trigger: JsonCompatibleValue;
    newPromise: Promise<UnPromise<ValueGeneric>>;
    /** Clear the current value and trigger createPromise to get called again on the next render. */
    forceUpdate: true;
};

export type AsyncStateSetValue<ValueGeneric> =
    | PickAndBlockOthers<AllSetValueProperties<ValueGeneric>, 'createPromise' | 'trigger'>
    | PickAndBlockOthers<AllSetValueProperties<ValueGeneric>, 'newPromise'>
    | PickAndBlockOthers<AllSetValueProperties<ValueGeneric>, 'forceUpdate'>
    | PickAndBlockOthers<AllSetValueProperties<ValueGeneric>, 'resolvedValue'>;

export type MaybeAsyncStateToSync<PropertyMapInit extends PropertyInitMapBase> = {
    [Prop in keyof PropertyMapInit]: PropertyMapInit[Prop] extends
        | AsyncStateHandler<infer ValueGeneric>
        | AsyncStateInit<infer ValueGeneric>
        ? AsyncState<ValueGeneric>
        : PropertyMapInit[Prop];
};

export type AsyncStateInputs<PropertyMapInit extends PropertyInitMapBase> = {
    [Prop in keyof PropertyMapInit]: PropertyMapInit[Prop] extends
        | AsyncStateHandler<infer ValueGeneric>
        | AsyncStateInit<infer ValueGeneric>
        ? AsyncStateSetValue<ValueGeneric>
        : PropertyMapInit[Prop];
};

export type AsyncStateHandlerMap<OriginalObjectGeneric extends PropertyInitMapBase> = Partial<
    Record<keyof OriginalObjectGeneric, AsyncStateHandler<any>>
>;

export type AsyncStateHandlerListener<ValueGeneric> = (
    handler: AsyncStateHandler<ValueGeneric>,
) => void;

export class AsyncStateHandler<ValueGeneric> {
    #lastTrigger:
        | Extract<AsyncStateSetValue<unknown>, {trigger: unknown}>['trigger']
        | typeof notSetSymbol
        | undefined = notSetSymbol;
    #resolutionValue: UnPromise<ValueGeneric> | typeof notSetSymbol = notSetSymbol;
    #rejectionError: Error | typeof notSetSymbol = notSetSymbol;
    #listeners: AsyncStateHandlerListener<ValueGeneric>[] = [];
    #lastSetPromise: Promise<UnPromise<ValueGeneric>> | undefined;

    #waitingForValuePromise: DeferredPromiseWrapper<UnPromise<ValueGeneric>> =
        createDeferredPromiseWrapper();

    public readonly asyncMarkerSymbol = asyncMarkerSymbol;

    constructor(
        initialValue:
            | Promise<UnPromise<ValueGeneric>>
            | UnPromise<ValueGeneric>
            | ValueGeneric
            | typeof notSetSymbol
            | AsyncStateInit<ValueGeneric>,
        listener: AsyncStateHandlerListener<ValueGeneric>,
    ) {
        this.addSettleListener(listener);
        this.resetValue(initialValue);
    }

    public resetValue(
        rawValue:
            | Promise<UnPromise<ValueGeneric>>
            | UnPromise<ValueGeneric>
            | ValueGeneric
            | typeof notSetSymbol
            | AsyncStateInit<ValueGeneric>,
    ) {
        if (rawValue instanceof AsyncStateInit) {
            rawValue = rawValue.initialValue;
        }

        this.#resetWaitingForValuePromise();
        if (rawValue !== notSetSymbol) {
            if (rawValue instanceof Promise) {
                this.setValue({newPromise: rawValue});
            } else {
                this.setValue({resolvedValue: rawValue as UnPromise<ValueGeneric>});
            }
        }
    }

    #fireListeners() {
        this.#listeners.forEach((listener) => {
            listener(this);
        });
    }

    #setPromise(newPromise: Promise<UnPromise<ValueGeneric>>) {
        if (newPromise === this.#lastSetPromise) {
            // abort setting the promise if we already have set this promise
            return;
        }
        this.#resolutionValue = notSetSymbol;
        this.#rejectionError = notSetSymbol;
        this.#lastSetPromise = newPromise;

        if (this.#waitingForValuePromise.isSettled()) {
            this.#resetWaitingForValuePromise();
        }

        newPromise
            .then((value) => {
                // make sure we're still actually waiting for this promise
                if (this.#lastSetPromise === newPromise) {
                    this.#resolveValue(value);
                }
            })
            .catch((reason) => {
                // make sure we're still actually waiting for this promise
                if (this.#lastSetPromise === newPromise) {
                    this.#rejectionError = ensureError(reason);
                    this.#waitingForValuePromise.promise.catch(() => {
                        /**
                         * Don't actually do anything, we just want to make sure the error is
                         * handled so it doesn't throw errors in the browser.
                         */
                    });

                    this.#waitingForValuePromise.reject(reason);
                    this.#fireListeners();
                }
            });
    }

    #resolveValue(value: UnPromise<ValueGeneric>) {
        if (value !== this.#resolutionValue) {
            this.#rejectionError = notSetSymbol;
            this.#resolutionValue = value;
            if (this.#waitingForValuePromise.isSettled()) {
                this.#resetWaitingForValuePromise();
            }
            this.#waitingForValuePromise.resolve(value);
            this.#fireListeners();
        }
    }

    #resetWaitingForValuePromise(): void {
        this.#waitingForValuePromise = createDeferredPromiseWrapper();
    }

    public setValue(setInputs: AsyncStateSetValue<ValueGeneric>) {
        if ('createPromise' in setInputs) {
            if (
                this.#lastTrigger === notSetSymbol ||
                !areJsonEqual(setInputs.trigger, this.#lastTrigger)
            ) {
                this.#lastTrigger = setInputs.trigger;
                const newValue = setInputs.createPromise();

                this.#setPromise(newValue);
            }
        } else if ('newPromise' in setInputs) {
            this.#lastTrigger === notSetSymbol;
            this.#setPromise(setInputs.newPromise);
            // force a re-render
            this.#fireListeners();
        } else if ('resolvedValue' in setInputs) {
            this.#resolveValue(setInputs.resolvedValue);
        } else if ('forceUpdate' in setInputs) {
            this.#lastTrigger = notSetSymbol;
            this.#resolutionValue = notSetSymbol;
            if (!this.#waitingForValuePromise.isSettled()) {
                this.#waitingForValuePromise.reject('Canceled by force update');
            }
            this.#resetWaitingForValuePromise();
            // force a re-render
            this.#fireListeners();
        } else {
            this.resetValue(setInputs);
        }
    }

    public getValue(): AsyncState<ValueGeneric> {
        if (this.#waitingForValuePromise.isSettled()) {
            if (this.#rejectionError !== notSetSymbol) {
                return this.#rejectionError;
            } else if (this.#resolutionValue === notSetSymbol) {
                throw new Error('Promise says it has settled but resolution value was not set!');
            } else {
                return this.#resolutionValue;
            }
        } else {
            return this.#waitingForValuePromise.promise;
        }
    }

    public addSettleListener(callback: AsyncStateHandlerListener<ValueGeneric>) {
        this.#listeners.push(callback);
    }
    public removeSettleListener(callback: AsyncStateHandlerListener<ValueGeneric>) {
        this.#listeners = this.#listeners.filter((listener) => listener !== callback);
    }
}

export class AsyncStateInit<ValueGeneric> {
    constructor(
        public readonly initialValue:
            | Promise<UnPromise<ValueGeneric>>
            | UnPromise<ValueGeneric>
            | ValueGeneric
            | typeof notSetSymbol,
    ) {}
    public readonly asyncMarkerSymbol = asyncMarkerSymbol;
}

export function asyncState<ValueGeneric>(
    ...args: [Promise<UnPromise<ValueGeneric>> | UnPromise<ValueGeneric> | ValueGeneric] | []
) {
    const initValue = isLengthAtLeast(args, 1) ? args[0] : notSetSymbol;

    return new AsyncStateInit<ValueGeneric>(initValue);
}