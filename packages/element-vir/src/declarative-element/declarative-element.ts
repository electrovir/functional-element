import {type SetRequiredAndNotNull} from '@augment-vir/common';
import {type EmptyObject, type IsAny, type IsEmptyObject} from 'type-fest';
import {LitElement, type CSSResult} from '../lit-exports/base-lit-exports.js';
import {type MinimalDefinitionWithInputs} from '../template-transforms/minimal-element-definition.js';
import {type CustomElementTagName} from './custom-tag-name.js';
import {type DeclarativeElementInit} from './declarative-element-init.js';
import {type DeclarativeElementDefinitionOptions} from './definition-options.js';
import {type BaseCssPropertyName} from './properties/css-properties.js';
import {type CssVars} from './properties/css-vars.js';
import {type EventDescriptorMap, type EventsInitMap} from './properties/element-events.js';
import {
    type ElementPropertyDescriptorMap,
    type PropertyInitMapBase,
} from './properties/element-properties.js';
import {type FlattenElementVirStateSetup} from './properties/element-vir-state-setup.js';
import {type HostClassNamesMap} from './properties/host-classes.js';
import {type ObservableListenerMap} from './properties/property-proxy.js';
import {
    type RenderCallback,
    type RenderParams,
    type UpdateStateCallback,
} from './render-callback.js';
import {type SlotNameMap} from './slot-names.js';

/**
 * The `host` type for a declarative element. This references a declarative element instance's
 * top-level HTML element and always contains a shadow root (wherein the element is rendered).
 *
 * @category Internal
 */
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

/**
 * The full definition for a declarative element.
 *
 * @category Internal
 */
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

/**
 * Abstract class base for all declarative elements.
 *
 * @category Internal
 */
export abstract class DeclarativeElement<
    TagName extends CustomElementTagName = any,
    Inputs extends PropertyInitMapBase = any,
    StateInit extends PropertyInitMapBase = any,
    EventsInit extends EventsInitMap = any,
    HostClassKeys extends BaseCssPropertyName<TagName> = any,
    CssVarKeys extends BaseCssPropertyName<TagName> = any,
    SlotNames extends ReadonlyArray<string> = any,
> extends LitElement {
    /**
     * Assign inputs to an element instantiation. Use only on the opening tag.
     *
     * @example
     *
     * ```ts
     * import {html} from 'element-vir';
     *
     * const myTemplate = html`
     *     <${MyElement.assign({input1: 'a', input2: 'b'})}></${MyElement}>
     * `;
     * ```
     */
    public static readonly assign: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        ReadonlyArray<string>
    >['assign'];
    public static readonly assignedInputs: PropertyInitMapBase | undefined;
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
    public static readonly render: StaticDeclarativeElementProperties<
        CustomElementTagName,
        PropertyInitMapBase,
        PropertyInitMapBase,
        EventsInitMap,
        BaseCssPropertyName<CustomElementTagName>,
        BaseCssPropertyName<CustomElementTagName>,
        ReadonlyArray<string>
    >['render'];
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
    /**
     * Calls all destroy methods on all state properties, if they exist. This is automatically
     * called whenever the element is detached.
     */
    public abstract destroy(): void;
    public abstract override render(): unknown;
    public abstract readonly instanceState: FlattenElementVirStateSetup<StateInit>;
    public abstract readonly observablePropertyListenerMap: ObservableListenerMap<
        StateInit & Inputs
    >;
    public abstract readonly instanceInputs: Inputs;
    /**
     * Used to assign inputs to the given element. This can be externally called as an API for
     * setting inputs on an element reference, though this is discouraged. Inputs should typically
     * be called using the `.assign()` method on an element definition inside of an HTML template.
     */
    public abstract assignInputs(
        inputs: EmptyObject extends Required<Inputs> ? never : Partial<Inputs>,
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

/**
 * The assign inputs method of a declarative element.
 *
 * @category Internal
 */
export type AssignMethod<Inputs extends PropertyInitMapBase> =
    IsAny<Inputs> extends true
        ? any
        : IsEmptyObject<Required<Inputs>> extends true
          ? (inputsObject: never) => never
          : (
                inputsObject: IsEmptyObject<Required<Inputs>> extends true ? never : Inputs,
            ) => MinimalDefinitionWithInputs;

/**
 * All static properties on a declarative element. These all come from the element's definition.
 *
 * @category Internal
 */
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
    readonly render: RenderCallback<
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
    readonly hostClasses: HostClassNamesMap<string, HostClassKeys>;
    readonly cssVars: CssVars<TagName, CssVarKeys>;

    readonly tagName: string;
    readonly styles: CSSResult;
};
