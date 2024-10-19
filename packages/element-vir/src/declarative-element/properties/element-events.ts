import {
    DefinedTypedEvent,
    DefineEvent,
    defineTypedEvent,
    TypedEvent,
} from '../../typed-event/typed-event.js';
import {NonEmptyString} from '../../util/type.js';
import {CustomElementTagName} from '../custom-tag-name.js';

/**
 * Base type for defining element events inside of an element definition.
 *
 * @category Internal
 */
export type EventsInitMap = Record<string, DefineEvent<any>>;

/**
 * Used to define element events, with a type.
 *
 * @category Element Definition
 * @example
 *
 * ```ts
 * import {html, defineElementNoInputs, defineElementEvent, listen} from 'element-vir';
 *
 * const MyElement = defineElementNoInputs({
 *     tagName: 'my-element',
 *     events: {
 *         myOutput: defineElementEvent<number>(),
 *     },
 *     render({events, dispatch}) {
 *         return html`
 *             <div
 *                 ${listen('click', () => {
 *                     dispatch(new events.myOutput(1));
 *                 })}
 *             >
 *                 Some div
 *             </div>
 *         `;
 *     },
 * });
 * ```
 */
export function defineElementEvent<EventDetailGeneric>(): DefineEvent<EventDetailGeneric> {
    return defineTypedEvent<EventDetailGeneric>();
}

/**
 * Extracts the detail type of the given event name from the given event init map.
 *
 * @category Internal
 */
export type EventInitMapEventDetailExtractor<
    EventTypeNameGeneric extends keyof EventsInitGeneric,
    EventsInitGeneric extends EventsInitMap,
> = EventsInitGeneric[EventTypeNameGeneric] extends DefineEvent<infer Detail> ? Detail : never;

/**
 * Maps the given element tag name and map of event names to their run-time event type strings.
 *
 * @category Internal
 */
export type EventDescriptorMap<
    TagName extends CustomElementTagName,
    EventsInitGeneric extends EventsInitMap,
> = {
    [CurrentEventTypeName in keyof EventsInitGeneric]: DefinedTypedEvent<
        CurrentEventTypeName extends string ? `${TagName}-${CurrentEventTypeName}` : never,
        EventInitMapEventDetailExtractor<CurrentEventTypeName, EventsInitGeneric>
    >;
};

/**
 * Extract the event detail type from a {@link TypedEvent}, {@link DefinedTypedEvent}, or
 * `CustomEvent.
 *
 * @category Internal
 */
export type EventDetail<
    ElementEvent extends TypedEvent<any, any> | DefinedTypedEvent<any, any> | CustomEvent,
> =
    ElementEvent extends TypedEvent<string, infer Detail>
        ? Detail
        : ElementEvent extends DefinedTypedEvent<any, infer Detail>
          ? Detail
          : ElementEvent extends CustomEvent<infer Detail>
            ? Detail
            : 'TYPE ERROR: failed to extract event detail type';

/**
 * Maps an element definition initialization's tag name and event map to a map of ready-to-construct
 * event classes. This also verifies that the input event init map has valid keys.
 *
 * @category Internal
 */
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
    return (
        Object.keys(eventsInit)
            /** Verify event keys. */
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
                    } else if (currentElementEventKey === '') {
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
            )
    );
}
