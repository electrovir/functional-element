import {
    DefinedTypedEvent,
    DefinedTypedEventNameDefinition,
    defineTypedEvent,
    TypedEvent,
} from '../../typed-event/typed-event.js';
import {NonEmptyString} from '../../util/type.js';
import {CustomElementTagName} from '../custom-tag-name.js';

export type EventsInitMap = Record<string, DefinedTypedEventNameDefinition<any>>;

export function defineElementEvent<
    EventDetailGeneric,
>(): DefinedTypedEventNameDefinition<EventDetailGeneric> {
    return defineTypedEvent<EventDetailGeneric>();
}

export type EventInitMapEventDetailExtractor<
    EventTypeNameGeneric extends keyof EventsInitGeneric,
    EventsInitGeneric extends EventsInitMap,
> =
    EventsInitGeneric[EventTypeNameGeneric] extends DefinedTypedEventNameDefinition<infer R>
        ? R
        : never;

export type EventDescriptorMap<
    TagName extends CustomElementTagName,
    EventsInitGeneric extends EventsInitMap,
> = {
    [CurrentEventTypeName in keyof EventsInitGeneric]: DefinedTypedEvent<
        CurrentEventTypeName extends string ? `${TagName}-${CurrentEventTypeName}` : never,
        EventInitMapEventDetailExtractor<CurrentEventTypeName, EventsInitGeneric>
    >;
};

export type EventObjectEventDetailExtractor<
    EventObjectGeneric extends DefinedTypedEvent<any, any>,
> = EventObjectGeneric extends DefinedTypedEvent<string, infer R> ? R : never;

export type ElementEventDetailExtractor<ElementEventGeneric extends TypedEvent<any, any>> =
    ElementEventGeneric extends TypedEvent<string, infer R> ? R : never;

export function createEventDescriptorMap<
    TagName extends CustomElementTagName,
    EventsInitGeneric extends EventsInitMap,
>(
    tagName: CustomElementTagName,
    eventsInit: EventsInitGeneric | undefined,
): EventDescriptorMap<TagName, EventsInitGeneric> {
    if (!eventsInit) {
        return {} as EventDescriptorMap<TagName, EventsInitGeneric>;
    }
    return Object.keys(eventsInit)
        .filter(
            (
                currentElementEventKey: keyof EventsInitGeneric,
            ): currentElementEventKey is NonEmptyString<keyof EventsInitGeneric> => {
                if (typeof currentElementEventKey !== 'string') {
                    throw new TypeError(
                        `Expected event key of type string but got type '${typeof currentElementEventKey}' for key ${String(
                            currentElementEventKey,
                        )}`,
                    );
                }
                if (currentElementEventKey === '') {
                    throw new Error(`Got empty string for events key.`);
                }
                return true;
            },
        )
        .reduce(
            (
                accum: EventDescriptorMap<TagName, EventsInitGeneric>,
                currentElementEventKey: keyof EventsInitGeneric,
            ): EventDescriptorMap<TagName, EventsInitGeneric> => {
                const eventObject: DefinedTypedEvent<
                    typeof currentElementEventKey extends string
                        ? typeof currentElementEventKey
                        : never,
                    EventInitMapEventDetailExtractor<
                        typeof currentElementEventKey,
                        EventsInitGeneric
                    >
                > = defineTypedEvent<
                    EventInitMapEventDetailExtractor<
                        typeof currentElementEventKey,
                        EventsInitGeneric
                    >
                >()<
                    typeof currentElementEventKey extends string
                        ? typeof currentElementEventKey
                        : never
                >(
                    [
                        tagName,
                        currentElementEventKey,
                    ].join('-') as any,
                );

                accum[currentElementEventKey] = eventObject as any;
                return accum;
            },
            {} as EventDescriptorMap<TagName, EventsInitGeneric>,
        );
}
