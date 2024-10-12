import {CSSResult} from '../lit-exports/all-lit-exports.js';
import {CustomElementTagName} from './custom-tag-name.js';
import {DeclarativeElementDefinitionOptions} from './definition-options.js';
import {BaseCssPropertyName} from './properties/css-properties.js';
import {CssVarsInitMap} from './properties/css-vars.js';
import {EventsInitMap} from './properties/element-events.js';
import {PropertyInitMapBase} from './properties/element-properties.js';
import {HostClassesInitMap} from './properties/host-classes.js';
import {StylesCallback} from './properties/styles.js';
import {InitCallback, RenderCallback} from './render-callback.js';

export type DeclarativeElementInit<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    StateInit extends PropertyInitMapBase,
    EventsInit extends EventsInitMap,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    CssVarKeys extends BaseCssPropertyName<TagName>,
    SlotNames extends ReadonlyArray<string>,
> = {
    /**
     * HTML tag name. This should not be used directly, as interpolating it with the html tagged
     * template from this package is preferred.
     */
    tagName: TagName;
    /** Static styles. These should not and cannot change. */
    styles?: CSSResult | StylesCallback<TagName, HostClassKeys, CssVarKeys>;
    /**
     * The definition of and initial values for the element's internal state. Note that this is
     * defined statically: the init value will be the same for all instances of this element because
     * it is only defined once.
     */
    stateInitStatic?: StateInit;
    /** Events that the element can dispatch. (These can be thought of as "outputs".) */
    events?: EventsInit;
    slotNames?: SlotNames;
    /**
     * HTML host classes. Values can be callbacks to determine when a host class should be defined,
     * based on current instance state or inputs, or just false to indicate that the host class will
     * only be manually set.
     */
    hostClasses?: HostClassesInitMap<TagName, HostClassKeys, Inputs, StateInit>;
    /**
     * CSS Vars for the component. Keys of this object should be kebab-case and start with the
     * element's tag name.
     *
     * Values of this object represent the default fallback value for the given CSS var. These are
     * then passed to the styles property, which must be a callback to take advantage of these.
     */
    cssVars?: CssVarsInitMap<TagName, CssVarKeys>;
    /** Called as part of the first renderCallback call, before the first renderCallback call. */
    initCallback?: InitCallback<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >;
    renderCallback: RenderCallback<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >;
    cleanupCallback?: InitCallback<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    >;
    options?: Partial<DeclarativeElementDefinitionOptions> | undefined;
};
