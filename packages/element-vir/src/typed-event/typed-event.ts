import {NonEmptyString} from '../util/type.js';

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

export type DefinedTypedEventNameDefinition<EventDetailGeneric> = <
    EventTypeNameGeneric extends string,
>(
    eventType: NonEmptyString<EventTypeNameGeneric>,
) => DefinedTypedEvent<EventTypeNameGeneric, EventDetailGeneric>;

export type DefinedTypedEvent<EventTypeNameGeneric extends string, EventDetailGeneric> = (new (
    eventValue: EventDetailGeneric,
) => TypedEvent<EventTypeNameGeneric, EventDetailGeneric>) & {
    type: EventTypeNameGeneric;
};

/**
 * Defined a typed event. Make sure to use currying and call this function twice! Typescript's
 * generic restrictions require this setup to get the types right without excessive verbosity.
 *
 * Example: const myCustomEvent = defineTypedEvent<number>()('my-custom-event')
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
