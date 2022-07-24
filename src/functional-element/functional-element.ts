import {RequiredBy} from 'augment-vir';
import {CSSResult, LitElement, TemplateResult} from 'lit';
import {CssVarNameOrValueMap, CssVarsInitMap} from './css-vars';
import {EventDescriptorMap, EventsInitMap} from './element-events';
import {ElementPropertyDescriptorMap, PropertyInitMapBase} from './element-properties';
import {HostClassesInitMap, HostClassNamesMap} from './host-classes';
import {InitCallback, RenderCallback} from './render-callback';
import {StylesCallback} from './styles';

export type CustomElementTagName = `${string}-${string}`;

export type FunctionalElementInit<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
> = {
    /**
     * HTML tag name. This should not be used directly, as interpolating it with the html tagged
     * template from this package is preferred.
     */
    tagName: CustomElementTagName;
    /** Static styles. These should not and cannot change. */
    styles?: CSSResult | StylesCallback<HostClassKeys, CssVarKeys>;
    /** Element properties. (These can be thought of as "inputs".) */
    props?: PropertyInitGeneric;
    /** Events that the element can dispatch. (These can be thought of as "outputs".) */
    events?: EventsInitGeneric;
    /**
     * CSS host classes. Values can be callbacks to determine when a host class should be defined,
     * based on current instance props, or just undefined to indicate that the host class will only
     * be manually set.
     */
    hostClasses?: HostClassesInitMap<HostClassKeys, PropertyInitGeneric>;
    cssVars?: CssVarsInitMap<CssVarKeys>;
    /** Called as part of the first renderCallback call, before the first renderCallback call. */
    initCallback?: InitCallback<PropertyInitGeneric, EventsInitGeneric>;

    renderCallback: RenderCallback<PropertyInitGeneric, EventsInitGeneric>;
};

export abstract class FunctionalElementBaseClass<
    PropertyInitGeneric extends PropertyInitMapBase,
> extends LitElement {
    public static readonly tagName: string;
    public static override readonly styles: CSSResult;

    public abstract override render(): TemplateResult | Promise<TemplateResult>;
    public abstract readonly instanceProps: PropertyInitGeneric;
    public abstract readonly haveInputsBeenSet: boolean;
    public abstract markInputsAsHavingBeenSet(): void;
}

export type FunctionalElementInstanceFromInit<
    PropertyInitGeneric extends PropertyInitMapBase = {},
> = FunctionalElementBaseClass<NonNullable<Required<PropertyInitGeneric>>> & PropertyInitGeneric;

export type FunctionalElementInstance<FunctionalElementGeneric extends FunctionalElement> =
    FunctionalElementInstanceFromInit<FunctionalElementGeneric['init']['props']>;

export type FunctionalElement<
    PropertyInitGeneric extends PropertyInitMapBase = any,
    EventsInitGeneric extends EventsInitMap = any,
    HostClassKeys extends string = string,
    CssVarKeys extends string = string,
> = (new () => FunctionalElementInstanceFromInit<PropertyInitGeneric>) &
    ExtraStaticFunctionalElementProperties<
        PropertyInitGeneric,
        EventsInitGeneric,
        HostClassKeys,
        CssVarKeys
    >;

export type ExtraStaticFunctionalElementProperties<
    PropertyInitGeneric extends PropertyInitMapBase,
    EventsInitGeneric extends EventsInitMap,
    HostClassKeys extends string,
    CssVarKeys extends string,
> = Readonly<{
    /** Pass through the render callback for direct unit testability */
    renderCallback: RenderCallback<PropertyInitGeneric, EventsInitGeneric>;
    events: EventDescriptorMap<EventsInitGeneric>;
    props: ElementPropertyDescriptorMap<PropertyInitGeneric>;
    init: RequiredBy<
        FunctionalElementInit<PropertyInitGeneric, EventsInitGeneric, HostClassKeys, CssVarKeys>,
        'props' | 'events'
    >;
    hostClasses: HostClassNamesMap<string, HostClassKeys>;
    cssVarNames: CssVarNameOrValueMap<CssVarKeys>;
    cssVarValues: CssVarNameOrValueMap<CssVarKeys>;

    /**
     * Static properties have to be copied here cause they get nuked in the "new () =>
     * FunctionalElementInstance<PropertyInitGeneric>" type.
     */
    tagName: string;
    styles: CSSResult;
}>;
