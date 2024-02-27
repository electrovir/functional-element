import {defineShape, isValidShape, unknownShape} from 'object-shape-tester';
import {
    ListenTarget,
    RemoveListenerCallback,
    TypedEventListenerWithRemoval,
    defineTypedCustomEvent,
} from 'typed-event-target';
import {PropertyInitMapBase} from '../element-properties';

export type ObservablePropListener<T> = (value: T) => void;

export type ObservablePropListenerMap<OriginalPropertyMap extends PropertyInitMapBase> = Partial<
    Record<keyof OriginalPropertyMap, ObservablePropListener<any> | undefined>
>;

export class ObservablePropValueUpdateEvent extends defineTypedCustomEvent<unknown>()(
    'observable-prop-value-update',
) {}

export abstract class ObservableProp<
    ValueType,
> extends ListenTarget<ObservablePropValueUpdateEvent> {
    constructor(public value: ValueType) {
        super();
    }

    protected listenerMap = new WeakMap<
        ObservablePropListener<ValueType>,
        TypedEventListenerWithRemoval<ObservablePropValueUpdateEvent>
    >();

    public override listen(callback: ObservablePropListener<ValueType>): RemoveListenerCallback {
        const innerCallback: TypedEventListenerWithRemoval<ObservablePropValueUpdateEvent> = (
            event,
        ) => {
            return callback(event.detail as ValueType);
        };
        this.listenerMap.set(callback, innerCallback);
        return super.listen(ObservablePropValueUpdateEvent, innerCallback);
    }

    public override removeListener(callback: ObservablePropListener<ValueType>): boolean {
        const innerCallback = this.listenerMap.get(callback);
        this.listenerMap.delete(callback);

        if (!innerCallback) {
            return false;
        }
        return this.listeners[ObservablePropValueUpdateEvent.type]?.delete(innerCallback) || false;
    }
}

const baseObservablePropShape = defineShape<Partial<ObservableProp<any>>>({
    listen() {
        return () => false;
    },
    destroy() {},
    removeListener(): boolean {
        return false;
    },
    value: unknownShape(),
});
export type BaseObservableProp = typeof baseObservablePropShape.runTimeType;

export function isObservableProp<ValueType = unknown>(
    input: unknown,
): input is ObservableProp<ValueType> {
    return isValidShape(input, baseObservablePropShape, {allowExtraKeys: true});
}
