import {getObjectTypedKeys, type SetRequiredAndNotNull} from '@augment-vir/common';
import {type HtmlInterpolation} from '../template-transforms/vir-html/html-interpolation.js';
import {type TypedEvent} from '../typed-event/typed-event.js';
import {type CustomElementTagName} from './custom-tag-name.js';
import {type DeclarativeElement, type DeclarativeElementHost} from './declarative-element.js';
import {type BaseCssPropertyName} from './properties/css-properties.js';
import {type CssVars} from './properties/css-vars.js';
import {
    type EventDescriptorMap,
    type EventInitMapEventDetailExtractor,
    type EventsInitMap,
} from './properties/element-events.js';
import {type PropertyInitMapBase} from './properties/element-properties.js';
import {
    type AllowElementVirStateSetup,
    type FlattenElementVirStateSetup,
} from './properties/element-vir-state-setup.js';
import {type SlotNameMap} from './slot-names.js';

/**
 * Type for the `render` element definition method.
 *
 * @category Internal
 */
export type RenderCallback<
    TagName extends CustomElementTagName = any,
    Inputs extends PropertyInitMapBase = any,
    StateInit extends PropertyInitMapBase = any,
    EventsInit extends EventsInitMap = any,
    HostClassKeys extends BaseCssPropertyName<TagName> = any,
    CssVarKeys extends BaseCssPropertyName<TagName> = any,
    SlotNames extends ReadonlyArray<string> = any,
> = (
    params: RenderParams<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >,
) => HtmlInterpolation;

/**
 * Type for the `init` and `cleanup` element definition methods.
 *
 * @category Internal
 */
export type InitCallback<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    StateInit extends PropertyInitMapBase,
    EventsInit extends EventsInitMap,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    CssVarKeys extends BaseCssPropertyName<TagName>,
    SlotNames extends ReadonlyArray<string>,
> = (
    params: RenderParams<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >,
) => undefined | void;

/**
 * Type for the `updateState` render parameter.
 *
 * @category Internal
 */
export type UpdateStateCallback<StateInit extends PropertyInitMapBase> = (
    newState: Partial<AllowElementVirStateSetup<StateInit>>,
) => void;

/**
 * The full parameters object passed to `render`, `init`, and `cleanup` element definition methods.
 *
 * @category Internal
 */
export type RenderParams<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    StateInit extends PropertyInitMapBase,
    EventsInit extends EventsInitMap,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    CssVarKeys extends BaseCssPropertyName<TagName>,
    SlotNames extends ReadonlyArray<string>,
> = {
    state: Readonly<FlattenElementVirStateSetup<StateInit>>;
    cssVars: Readonly<CssVars<TagName, CssVarKeys>>;
    updateState: UpdateStateCallback<StateInit>;
    events: EventDescriptorMap<TagName, EventsInit>;
    host: DeclarativeElementHost<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >;
    slotNames: SlotNameMap<SlotNames>;
    /** Dispatch an event from the current element. */
    dispatch: <EventTypeName extends keyof EventsInit>(
        event:
            | TypedEvent<
                  EventTypeName extends string ? EventTypeName : never,
                  EventInitMapEventDetailExtractor<EventTypeName, EventsInit>
              >
            | Event,
    ) => boolean;
    inputs: Readonly<Inputs>;
};

/**
 * This is used to create the parameters passed to the `render`, `init`, and `cleanup` element
 * definition methods whenever they are called.
 *
 * @category Internal
 */
export function createRenderParams<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    StateInit extends PropertyInitMapBase,
    EventsInit extends EventsInitMap,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    CssVarKeys extends BaseCssPropertyName<TagName>,
    SlotNames extends ReadonlyArray<string>,
>({
    element,
    eventsMap,
    cssVars,
    slotNamesMap,
}: {
    element: DeclarativeElement<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >;
    eventsMap: EventDescriptorMap<TagName, EventsInit>;
    cssVars: Readonly<CssVars<TagName, CssVarKeys>>;
    slotNamesMap: SlotNameMap<SlotNames>;
}): RenderParams<TagName, Inputs, StateInit, EventsInit, HostClassKeys, CssVarKeys, SlotNames> {
    function updateState(newStatePartial: Parameters<UpdateStateCallback<StateInit>>[0]) {
        getObjectTypedKeys(newStatePartial).forEach((stateKey) => {
            const newValue = newStatePartial[
                stateKey
            ] as FlattenElementVirStateSetup<StateInit>[typeof stateKey];

            element.instanceState[stateKey] = newValue;
        });
    }

    const renderParams: RenderParams<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    > = {
        cssVars,
        slotNames: slotNamesMap,
        dispatch: (event) => element.dispatchEvent(event),
        events: eventsMap,
        host: element as SetRequiredAndNotNull<typeof element, 'shadowRoot'>,
        inputs: element.instanceInputs,
        state: element.instanceState,
        updateState,
    };
    return renderParams;
}
