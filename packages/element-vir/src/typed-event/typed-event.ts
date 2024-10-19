import {NonEmptyString} from '../util/type.js';

/**
 * A custom event with strict types for details and the event's `type` property.
 *
 * @category Internal
 */
export class TypedEvent<
    EventTypeNameGeneric extends string = '',
    EventDetailGeneric = undefined,
> extends CustomEvent<EventDetailGeneric> {
    public readonly _type: EventTypeNameGeneric = '' as EventTypeNameGeneric;
    public override get type(): EventTypeNameGeneric {
        return this._type;
    }

    constructor(
        type: EventTypeNameGeneric | {type: EventTypeNameGeneric},
        value: EventDetailGeneric,
    ) {
        super(typeof type === 'string' ? type : type.type, {
            detail: value,
            bubbles: true,
            composed: true,
        });
    }
}

/**
 * A function that defines a typed event, used for defining element events in an element's
 * definition.
 *
 * @category Internal
 */
export type DefineEvent<EventDetailGeneric> = <EventTypeNameGeneric extends string>(
    eventType: NonEmptyString<EventTypeNameGeneric>,
) => DefinedTypedEvent<EventTypeNameGeneric, EventDetailGeneric>;

/**
 * A concrete typed event definition.
 *
 * @category Internal
 */
export type DefinedTypedEvent<EventTypeNameGeneric extends string, EventDetailGeneric> = (new (
    eventValue: EventDetailGeneric,
) => TypedEvent<EventTypeNameGeneric, EventDetailGeneric>) & {
    type: EventTypeNameGeneric;
};

/**
 * Define a stand-alone typed event that can be emitted and listened to inside of HTML templates.
 *
 * Make sure to use currying and call this function twice! (This is required by TypeScript's type
 * parameter inference system.)
 *
 * @category Element Definition
 * @example
 *
 * ```ts
 * import {defineTypedEvent} from 'element-vir';
 *
 * const myCustomEvent = defineTypedEvent<number>()('my-custom-event');
 *
 * const myCustomEvent2 = defineTypedEvent<// the event's `.detail` type
 * number>()(
 *     // the event's `.type` string
 *     'my-custom-event2',
 * );
 * ```
 */
export function defineTypedEvent<EventDetailGeneric>() {
    return <
        /**
         * EventTypeNameGeneric is used for the event type property but not for the event value
         * type... so it's named "name" instead of "type" cause type is overloaded here.
         */
        EventTypeNameGeneric extends string,
    >(
        eventType: NonEmptyString<EventTypeNameGeneric>,
    ): DefinedTypedEvent<EventTypeNameGeneric, EventDetailGeneric> => {
        return class extends TypedEvent<EventTypeNameGeneric, EventDetailGeneric> {
            public static readonly type = eventType;
            public override readonly _type = eventType;

            constructor(value: EventDetailGeneric) {
                super(eventType, value);
            }
        };
    };
}
