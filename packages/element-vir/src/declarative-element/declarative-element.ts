import {SetRequiredAndNotNull} from '@augment-vir/common';
import {IsAny, IsEmptyObject} from 'type-fest';
import {CSSResult, LitElement} from '../lit-exports/all-lit-exports';
import {MinimalDefinitionWithInputs} from '../template-transforms/minimal-element-definition';
import {CustomElementTagName} from './custom-tag-name';
import {DeclarativeElementInit} from './declarative-element-init';
import {DeclarativeElementDefinitionOptions} from './definition-options';
import {BaseCssPropertyName} from './properties/css-properties';
import {CssVars} from './properties/css-vars';
import {EventDescriptorMap, EventsInitMap} from './properties/element-events';
import {ElementPropertyDescriptorMap, PropertyInitMapBase} from './properties/element-properties';
import {FlattenElementVirStateSetup} from './properties/element-vir-state-setup';
import {HostClassNamesMap} from './properties/host-classes';
import {ObservableListenerMap} from './properties/property-proxy';
import type {RenderCallback, RenderParams, UpdateStateCallback} from './render-callback';
import {SlotNameMap} from './slot-names';

export type DeclarativeElementHost<
    TagName extends CustomElementTagName = any,
    Inputs extends PropertyInitMapBase = any,
    StateInit extends PropertyInitMapBase = any,
    EventsInit extends EventsInitMap = any,
    HostClassKeys extends BaseCssPropertyName<TagName> = any,
    CssVarKeys extends BaseCssPropertyName<TagName> = any,
    SlotNames extends ReadonlyArray<string> = any,
> = SetRequiredAndNotNull<
    Omit<
        DeclarativeElement<
            TagName,
            Inputs,
            StateInit,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames
        >,
        Exclude<
            keyof StaticDeclarativeElementProperties<any, any, any, any, any, any, any>,
            keyof HTMLElement
        >
    >,
    'shadowRoot'
>;

export type DeclarativeElementDefinition<
    TagName extends CustomElementTagName = any,
    Inputs extends PropertyInitMapBase = any,
    StateInit extends PropertyInitMapBase = any,
    EventsInit extends EventsInitMap = any,
    HostClassKeys extends BaseCssPropertyName<TagName> = any,
    CssVarKeys extends BaseCssPropertyName<TagName> = any,
    SlotNames extends ReadonlyArray<string> = any,
> = (new () => DeclarativeElementHost<
    TagName,
    Inputs,
    StateInit,
    EventsInit,
    HostClassKeys,
    CssVarKeys,
    SlotNames
>) &
    StaticDeclarativeElementProperties<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    > & {
        instanceType: DeclarativeElementHost<
            TagName,
            Inputs,
            StateInit,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames
        >;
    };

export abstract class DeclarativeElement<
    TagName extends CustomElementTagName = any,
    Inputs extends PropertyInitMapBase = any,
    StateInit extends PropertyInitMapBase = any,
    EventsInit extends EventsInitMap = any,
    HostClassKeys extends BaseCssPropertyName<TagName> = any,
    CssVarKeys extends BaseCssPropertyName<TagName> = any,
    SlotNames extends ReadonlyArray<string> = any,
> extends LitElement {
    public static assign: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        ReadonlyArray<string>
    >['assign'];
    public static assignedInputs: PropertyInitMapBase | undefined;
    public static readonly tagName: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        ReadonlyArray<string>
    >['tagName'];
    public static override readonly styles: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        ReadonlyArray<string>
    >['styles'];
    public static readonly isStrictInstance: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        ReadonlyArray<string>
    >['isStrictInstance'];
    public static readonly renderCallback: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        ReadonlyArray<string>
    >['renderCallback'];
    public static readonly inputsType: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        ReadonlyArray<string>
    >['inputsType'];
    public static readonly stateType: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        ReadonlyArray<string>
    >['stateType'];
    public static readonly updateStateType: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        ReadonlyArray<string>
    >['updateStateType'];
    public static readonly events: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        ReadonlyArray<string>
    >['events'];
    public static readonly stateInitStatic: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        ReadonlyArray<string>
    >['stateInitStatic'];
    public static readonly init: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        ReadonlyArray<string>
    >['init'];
    public static readonly elementOptions: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        ReadonlyArray<string>
    >['elementOptions'];
    public static readonly hostClasses: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        ReadonlyArray<string>
    >['hostClasses'];
    public static readonly cssVars: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        ReadonlyArray<string>
    >['cssVars'];
    public static readonly slotNames: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        ReadonlyArray<string>
    >['slotNames'];

    public abstract _lastRenderError: Error | undefined;
    public abstract _internalRenderCount: number;
    public abstract _lastRenderedProps: Readonly<
        Pick<RenderParams<any, Inputs, StateInit, any, any, any, any>, 'inputs' | 'state'>
    >;
    public abstract destroy(): void;
    public abstract override render(): unknown;
    public abstract readonly instanceState: FlattenElementVirStateSetup<StateInit>;
    public abstract readonly observablePropertyListenerMap: ObservableListenerMap<
        StateInit & Inputs
    >;
    public abstract readonly instanceInputs: Inputs;
    public abstract assignInputs(
        inputs: {} extends Required<Inputs> ? never : Partial<Inputs>,
    ): void;
    public abstract _haveInputsBeenSet: boolean;
    /** The element definition for this element instance. */
    public abstract readonly definition: DeclarativeElementDefinition<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >;
}

export type AssignMethod<Inputs extends PropertyInitMapBase> =
    IsAny<Inputs> extends true
        ? any
        : IsEmptyObject<Required<Inputs>> extends true
          ? (inputsObject: never) => never
          : (
                inputsObject: IsEmptyObject<Required<Inputs>> extends true ? never : Inputs,
            ) => MinimalDefinitionWithInputs;

export type StaticDeclarativeElementProperties<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    StateInit extends PropertyInitMapBase,
    EventsInit extends EventsInitMap,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    CssVarKeys extends BaseCssPropertyName<TagName>,
    SlotNames extends ReadonlyArray<string>,
> = {
    /** Assign inputs to an element directly on its interpolated tag. */
    readonly assign: AssignMethod<Inputs>;
    assignedInputs: Inputs | undefined;

    /** Pass through the render callback for direct unit testability */
    readonly renderCallback: RenderCallback<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >;
    readonly events: EventDescriptorMap<TagName, EventsInit>;
    readonly stateInitStatic: ElementPropertyDescriptorMap<StateInit>;
    readonly slotNames: SlotNameMap<SlotNames>;
    readonly init: DeclarativeElementInit<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >;
    readonly elementOptions: DeclarativeElementDefinitionOptions;
    readonly inputsType: Inputs;
    readonly stateType: Readonly<FlattenElementVirStateSetup<StateInit>>;
    readonly updateStateType: UpdateStateCallback<StateInit>;
    readonly isStrictInstance: (
        element: unknown,
    ) => element is DeclarativeElement<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >;
    readonly hostClasses: HostClassNamesMap<string, HostClassKeys>;
    readonly cssVars: CssVars<TagName, CssVarKeys>;

    readonly tagName: string;
    readonly styles: CSSResult;
};
