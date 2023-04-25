import {RequiredAndNotNullBy, RequiredBy} from '@augment-vir/common';
import {CSSResult, LitElement} from 'lit';
import {CustomElementTagName, DeclarativeElementInit} from './declarative-element-init';
import {AsyncStateHandlerMap, MaybeAsyncStateToSync} from './properties/async-state';
import {CssVarNameOrValueMap} from './properties/css-vars';
import {EventDescriptorMap, EventsInitMap} from './properties/element-events';
import {ElementPropertyDescriptorMap, PropertyInitMapBase} from './properties/element-properties';
import {HostClassNamesMap} from './properties/host-classes';
import {RenderCallback, RenderParams} from './render-callback';

export type HostInstanceType<
    TagNameGeneric extends CustomElementTagName,
    InputsGeneric extends PropertyInitMapBase,
    StateInitMaybeAsyncGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
> = RequiredAndNotNullBy<
    DeclarativeElement<
        TagNameGeneric,
        InputsGeneric,
        StateInitMaybeAsyncGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        any
    >,
    'shadowRoot'
>;

export type DeclarativeElementDefinition<
    TagNameGeneric extends CustomElementTagName = any,
    InputsGeneric extends PropertyInitMapBase = any,
    StateInitMaybeAsyncGeneric extends PropertyInitMapBase = any,
    EventsInitGeneric extends EventsInitMap = any,
    HostClassKeys extends string = string,
    CssVarKeys extends string = string,
    RenderOutputGeneric = any,
> = (new () => HostInstanceType<
    TagNameGeneric,
    InputsGeneric,
    StateInitMaybeAsyncGeneric,
    EventsInitGeneric,
    HostClassKeys,
    CssVarKeys
>) &
    StaticDeclarativeElementProperties<
        TagNameGeneric,
        InputsGeneric,
        StateInitMaybeAsyncGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        RenderOutputGeneric
    > & {
        instanceType: HostInstanceType<
            TagNameGeneric,
            InputsGeneric,
            StateInitMaybeAsyncGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys
        >;
    };

function staticImplements<T>() {
    function ensureIncludesStaticProperties<U extends T>(classValue: U, context: any) {
        return classValue;
    }

    return ensureIncludesStaticProperties;
}

@staticImplements<
    StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown
    >
>()
export abstract class DeclarativeElement<
    TagNameGeneric extends CustomElementTagName = any,
    InputsGeneric extends PropertyInitMapBase = any,
    StateInitMaybeAsyncGeneric extends PropertyInitMapBase = any,
    EventsInitGeneric extends EventsInitMap = any,
    HostClassKeys extends string = string,
    CssVarKeys extends string = string,
    RenderOutputGeneric = any,
> extends LitElement {
    public static readonly tagName: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown
    >['tagName'];
    public static override readonly styles: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown
    >['styles'];
    public static readonly isStrictInstance: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown
    >['isStrictInstance'];
    public static readonly renderCallback: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown
    >['renderCallback'];
    public static readonly inputsType: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown
    >['inputsType'];
    public static readonly stateType: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown
    >['stateType'];
    public static readonly events: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown
    >['events'];
    public static readonly stateInit: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown
    >['stateInit'];
    public static readonly init: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown
    >['init'];
    public static readonly hostClasses: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown
    >['hostClasses'];
    public static readonly cssVarNames: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown
    >['cssVarNames'];
    public static readonly cssVarValues: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        string,
        string,
        unknown
    >['cssVarValues'];

    public abstract lastRenderedProps: Pick<
        RenderParams<any, InputsGeneric, StateInitMaybeAsyncGeneric, any, any, any>,
        'inputs' | 'state'
    >;
    public abstract override render(): unknown;
    public abstract readonly instanceState: MaybeAsyncStateToSync<StateInitMaybeAsyncGeneric>;
    public abstract readonly asyncStateHandlerMap: AsyncStateHandlerMap<StateInitMaybeAsyncGeneric>;
    public abstract readonly instanceInputs: InputsGeneric;
    public abstract assignInputs(
        inputs: {} extends Required<InputsGeneric> ? never : InputsGeneric,
    ): void;
    public abstract haveInputsBeenSet: boolean;
    public abstract markInputsAsHavingBeenSet(): void;
    public abstract readonly definition: DeclarativeElementDefinition<
        TagNameGeneric,
        InputsGeneric,
        StateInitMaybeAsyncGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        RenderOutputGeneric
    >;
}

export interface StaticDeclarativeElementProperties<
    TagNameGeneric extends CustomElementTagName,
    InputsGeneric extends PropertyInitMapBase,
    StateInitMaybeAsyncGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
    RenderOutputGeneric,
> {
    /** Pass through the render callback for direct unit testability */
    readonly renderCallback: RenderCallback<
        TagNameGeneric,
        InputsGeneric,
        StateInitMaybeAsyncGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        RenderOutputGeneric
    >;
    events: EventDescriptorMap<EventsInitGeneric>;
    stateInit: ElementPropertyDescriptorMap<StateInitMaybeAsyncGeneric>;
    init: RequiredBy<
        DeclarativeElementInit<
            TagNameGeneric,
            InputsGeneric,
            StateInitMaybeAsyncGeneric,
            EventsInitGeneric,
            HostClassKeys,
            CssVarKeys,
            RenderOutputGeneric
        >,
        'stateInit' | 'events'
    >;
    inputsType: InputsGeneric;
    stateType: MaybeAsyncStateToSync<StateInitMaybeAsyncGeneric>;
    isStrictInstance: (
        element: unknown,
    ) => element is DeclarativeElement<
        TagNameGeneric,
        InputsGeneric,
        StateInitMaybeAsyncGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys,
        RenderOutputGeneric
    >;
    hostClasses: HostClassNamesMap<string, HostClassKeys>;
    cssVarNames: CssVarNameOrValueMap<CssVarKeys>;
    cssVarValues: CssVarNameOrValueMap<CssVarKeys>;

    tagName: string;
    styles: CSSResult;
}
