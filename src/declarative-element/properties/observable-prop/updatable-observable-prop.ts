import {referenceEqualityCheck} from '../../../util/equality';
import {ObservableProp} from './observable-prop';
import {createSetterObservableProp} from './setter-observable-prop';

export type UpdaterCallback<ValueType, UpdateInputType> = Exclude<
    UpdateInputType,
    undefined
> extends never
    ? () => ValueType
    : (inputs: UpdateInputType) => ValueType;

export type UpdatableObservableProp<ValueType, UpdateInputType> = ObservableProp<
    ValueType | Awaited<ValueType>
> & {
    triggerUpdate: UpdaterCallback<ValueType, UpdateInputType>;
    /**
     * The last value that was resolved. This will be undefined if there has never, so far, been a
     * resolved value.
     */
    latestResolvedValue: ValueType extends Promise<any>
        ? Awaited<ValueType> | undefined
        : ValueType;
};

export type UpdatableObservablePropSetup<ValueType, UpdateInputType> = {
    initInput: UpdateInputType;
    updateCallback: UpdaterCallback<ValueType, UpdateInputType>;
    equalityCallback?: typeof referenceEqualityCheck | undefined;
};

export function createUpdatableObservableProp<ValueType, UpdateInputType = undefined>(
    setup: UpdatableObservablePropSetup<ValueType, UpdateInputType>,
): UpdatableObservableProp<ValueType, UpdateInputType> {
    const areEqual = setup.equalityCallback ?? referenceEqualityCheck;

    const innerSimpleObservableProp = createSetterObservableProp(undefined as ValueType, areEqual);

    function updateValue(inputs: UpdateInputType): Promise<ValueType> | ValueType {
        const newValue = setup.updateCallback(inputs);

        if (newValue instanceof Promise) {
            const wrappedPromise = new Promise<ValueType>(async (resolve, reject) => {
                try {
                    const resolvedValue = await newValue;
                    observableWithUpdater.latestResolvedValue =
                        resolvedValue as UpdatableObservableProp<
                            ValueType,
                            UpdateInputType
                        >['latestResolvedValue'];

                    innerSimpleObservableProp.setValue(resolvedValue);

                    resolve(resolvedValue);
                } catch (error) {
                    reject(error);
                }
            });

            /** Set the promise so consumers know it's loading. */
            innerSimpleObservableProp.setValue(wrappedPromise as ValueType);

            return wrappedPromise;
        } else {
            innerSimpleObservableProp.setValue(newValue);
            observableWithUpdater.latestResolvedValue = newValue as UpdatableObservableProp<
                ValueType,
                UpdateInputType
            >['latestResolvedValue'];

            return newValue;
        }
    }

    const observableWithUpdater: UpdatableObservableProp<ValueType, UpdateInputType> =
        Object.assign(innerSimpleObservableProp, {
            triggerUpdate: updateValue as UpdaterCallback<ValueType, UpdateInputType>,
            latestResolvedValue: undefined as UpdatableObservableProp<
                ValueType,
                UpdateInputType
            >['latestResolvedValue'],
        });

    updateValue(setup.initInput);

    return observableWithUpdater;
}