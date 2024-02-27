import {referenceEqualityCheck} from '../../../util/equality';
import {ObservableProp, ObservablePropValueUpdateEvent} from './observable-prop';

/**
 * A quick and easy ObservableProp implementation with a setValue method with equality checking for
 * easily emitting changes.
 */
export class SetterObservableProp<ValueType> extends ObservableProp<ValueType> {
    constructor(
        public override value: ValueType,
        /**
         * The function used to determine if a set value is actually new. Defaults to simple
         * reference equality.
         */
        protected equalityCallback = referenceEqualityCheck,
    ) {
        super(value);
    }

    public setValue(newValue: ValueType) {
        if (!this.equalityCallback(this.value, newValue)) {
            this.value = newValue;
            this.dispatch(new ObservablePropValueUpdateEvent({detail: newValue}));
        }
    }
}
