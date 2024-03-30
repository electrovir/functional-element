import {
    createDeferredPromiseWrapper,
    DeferredPromiseWrapper,
    ensureError,
    JsonCompatibleObject,
    MaybePromise,
} from '@augment-vir/common';
import {isLooseJsonEqual, isPromise} from 'run-time-assertions';
import {ElementVirStateSetup} from '../properties/element-vir-state-setup';
import {SetterObservableProp} from '../properties/observable-prop/setter-observable-prop';

export type AsyncPropValue<ValueType> = Error | MaybePromise<Awaited<ValueType>>;

/** Used to distinguish unset values from `undefined` when `undefined` is a valid value. */
const notSetSymbol = Symbol('not set');

export type AsyncPropTriggerInputBase = JsonCompatibleObject;

export type AsyncPropUpdateCallback<
    TriggerInput extends AsyncPropTriggerInputBase,
    UpdaterInput,
    ReturnType,
> =
    Exclude<TriggerInput, undefined> extends never
        ? () => ReturnType
        : Exclude<UpdaterInput, undefined> extends never
          ? (trigger: TriggerInput) => ReturnType
          : (trigger: TriggerInput, inputs: UpdaterInput) => ReturnType;

export type AsyncPropInit<
    ValueType,
    TriggerInput extends AsyncPropTriggerInputBase,
    UpdaterInput,
> =
    | {
          /** Starting value */
          defaultValue: MaybePromise<Awaited<ValueType>>;
      }
    | {
          /**
           * When a trigger changes (according to deep equality checking through JSON stringify),
           * the updateCallback callback will be called and the element's state will be updated
           * again. Otherwise, the updateCallback callback will only be called the first time.
           *
           * Set this to undefined to disabled automatic updating. Meaning, updateCallback will only
           * be called the first time.
           */
          updateCallback: AsyncPropUpdateCallback<
              TriggerInput,
              UpdaterInput,
              Promise<Awaited<ValueType>>
          >;
      };

export class AsyncObservableProp<
    ValueType,
    TriggerInput extends AsyncPropTriggerInputBase,
    UpdaterInput,
> extends SetterObservableProp<AsyncPropValue<ValueType>> {
    protected lastTrigger: TriggerInput | typeof notSetSymbol = notSetSymbol;
    protected promiseUpdater:
        | undefined
        | AsyncPropUpdateCallback<TriggerInput, UpdaterInput, Promise<Awaited<ValueType>>>;
    protected waitingForValueDeferredPromise: DeferredPromiseWrapper<Awaited<ValueType>>;
    protected lastSetPromise: Promise<Awaited<ValueType>> | undefined;
    /**
     * The last value that was resolved. This will be undefined if there has never, so far, been a
     * resolved value.
     */
    public latestResolvedValue: ValueType extends Promise<any>
        ? Awaited<ValueType> | undefined
        : ValueType = undefined as typeof this.latestResolvedValue;

    constructor(protected init?: AsyncPropInit<ValueType, TriggerInput, UpdaterInput> | undefined) {
        const waitingForFirstValue = createDeferredPromiseWrapper<Awaited<ValueType>>();
        super(waitingForFirstValue.promise);
        this.waitingForValueDeferredPromise = waitingForFirstValue;

        if (!init) {
            return;
        }

        if ('defaultValue' in init) {
            if (isPromise(init.defaultValue)) {
                this.setPromise(init.defaultValue);
            } else {
                this.resolveValue(init.defaultValue);
            }
        } else if ('updateCallback' in init) {
            this.promiseUpdater = init.updateCallback;
        }
    }

    protected resetWaitingForValue(): void {
        this.waitingForValueDeferredPromise = createDeferredPromiseWrapper();
        this.setValue(this.waitingForValueDeferredPromise.promise);
    }

    protected resolveValue(value: Awaited<ValueType>) {
        this.waitingForValueDeferredPromise.resolve(value);
        this.setValue(value);

        this.latestResolvedValue = value as typeof this.latestResolvedValue;
    }

    protected rejectValue(error: Error) {
        this.waitingForValueDeferredPromise.reject(error);
        this.setValue(error);
    }

    protected setPromise(newPromise: Promise<Awaited<ValueType>>) {
        if (newPromise === this.lastSetPromise) {
            /** Abort setting the promise if we already have set this promise. */
            return;
        }

        this.lastSetPromise = newPromise;

        if (this.waitingForValueDeferredPromise.isSettled()) {
            this.resetWaitingForValue();
        }

        newPromise
            .then((value) => {
                /** Make sure we're still actually waiting for this promise. */
                if (this.lastSetPromise === newPromise) {
                    this.resolveValue(value);
                }
            })
            .catch((reason: unknown) => {
                /** Make sure we're still actually waiting for this promise. */
                if (this.lastSetPromise === newPromise) {
                    this.waitingForValueDeferredPromise.promise.catch(() => {
                        /**
                         * Don't actually do anything, we just want to make sure the error is
                         * handled so it doesn't throw errors in the browser.
                         */
                    });

                    const error = ensureError(reason);
                    console.error(error);

                    this.rejectValue(error);
                }
            });
    }

    setNewPromise(newPromise: Promise<Awaited<ValueType>>): void {
        this.setPromise(newPromise);
    }

    public updateTrigger = ((triggerInput: TriggerInput, updaterInput: UpdaterInput) => {
        if (!this.promiseUpdater) {
            console.error(this.init);
            throw new Error(
                `asyncProp.updateTrigger was called but no updateCallback was defined.`,
            );
        }
        /**
         * This will expand proxies so that `inputs` or `state` can be used directly as a
         * serializableTrigger without issues.
         */
        const expandedTrigger: TriggerInput = {
            ...triggerInput,
        } as TriggerInput;
        const expandedInputs: UpdaterInput = {...updaterInput} as UpdaterInput;

        if (
            this.lastTrigger === notSetSymbol ||
            !isLooseJsonEqual(expandedTrigger as any, this.lastTrigger as any)
        ) {
            this.lastTrigger = expandedTrigger;

            const newValue = this.promiseUpdater(this.lastTrigger, expandedInputs);

            this.setPromise(newValue);
        }
    }) as AsyncPropUpdateCallback<TriggerInput, UpdaterInput, void>;

    public setResolvedValue(resolvedValue: Awaited<ValueType>): void {
        if (resolvedValue !== this.value) {
            if (this.waitingForValueDeferredPromise.isSettled()) {
                this.resetWaitingForValue();
            }
            this.resolveValue(resolvedValue);
        }
    }
    /**
     * Forces the updater callback to re-run with the last given trigger and updaterInput. If this
     * asyncProp has no updater callback defined, this will result in an error.
     */
    public forceUpdate = ((triggerInput: TriggerInput, updaterInput: UpdaterInput) => {
        this.lastTrigger = notSetSymbol;
        this.updateTrigger(triggerInput, updaterInput);
    }) as AsyncPropUpdateCallback<TriggerInput, UpdaterInput, void>;
}

export function asyncProp<
    ValueType,
    TriggerInput extends AsyncPropTriggerInputBase = {},
    UpdaterInput = undefined,
>(
    ...args: [AsyncPropInit<ValueType, TriggerInput, UpdaterInput>] | []
): ElementVirStateSetup<AsyncObservableProp<ValueType, TriggerInput, UpdaterInput>> {
    return {
        _elementVirStateSetup() {
            return new AsyncObservableProp(...args);
        },
    };
}
