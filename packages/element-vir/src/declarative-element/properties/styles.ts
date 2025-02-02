import {getObjectTypedKeys, mapObjectValues} from '@augment-vir/common';
import {type CSSResult, unsafeCSS} from '../../lit-exports/base-lit-exports.js';
import {type CustomElementTagName} from '../custom-tag-name.js';
import {type BaseCssPropertyName} from './css-properties.js';
import {type CssVars} from './css-vars.js';
import {type PropertyInitMapBase} from './element-properties.js';
import {type FlattenElementVirStateSetup} from './element-vir-state-setup.js';
import {type HostClassNamesMap, type HostClassesInitMap} from './host-classes.js';

/**
 * A host class instance to be referenced inside of an element definition's `styles` callback.
 *
 * @category Internal
 */
export type HostClass = {
    selector: CSSResult;
    name: CSSResult;
};

/**
 * Input type for an element definition's `styles` callback.
 *
 * @category Internal
 */
export type StylesCallbackInput<
    TagName extends CustomElementTagName,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    CssVarKeys extends BaseCssPropertyName<TagName>,
> = {
    hostClasses: Record<HostClassKeys, HostClass>;
    cssVars: Readonly<CssVars<TagName, CssVarKeys>>;
};

/**
 * The type for an element definition's `styles` callback.
 *
 * @category Internal
 */
export type StylesCallback<
    TagName extends CustomElementTagName,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    CssVarKeys extends BaseCssPropertyName<TagName>,
> = (input: StylesCallbackInput<TagName, HostClassKeys, CssVarKeys>) => CSSResult;

/**
 * Creates the input for an element definition's `styles` callback.
 *
 * @category Internal
 */
export function createStylesCallbackInput<
    TagName extends CustomElementTagName,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    CssVarKeys extends BaseCssPropertyName<TagName>,
>({
    hostClassNames,
    cssVars,
}: {
    hostClassNames: HostClassNamesMap<TagName, HostClassKeys>;
    cssVars: Readonly<CssVars<TagName, CssVarKeys>>;
}): StylesCallbackInput<TagName, HostClassKeys, CssVarKeys> {
    return {
        hostClasses: mapObjectValues(hostClassNames, (key, name): HostClass => {
            return {
                name: unsafeCSS(name),
                selector: unsafeCSS(`:host(.${name})`),
            };
        }),
        cssVars,
    };
}

/**
 * Used inside of an element instance to apply host classes on each render.
 *
 * @category Internal
 */
export function applyHostClasses<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    StateInit extends PropertyInitMapBase,
    HostClassKeys extends BaseCssPropertyName<TagName>,
>({
    host,
    hostClassesInit,
    hostClassNames,
    state,
    inputs,
}: {
    host: HTMLElement;
    hostClassesInit:
        | Readonly<HostClassesInitMap<TagName, HostClassKeys, Inputs, StateInit>>
        | undefined;
    hostClassNames: HostClassNamesMap<string, HostClassKeys>;
    state: Readonly<FlattenElementVirStateSetup<StateInit>>;
    inputs: Readonly<Inputs>;
}): void {
    if (!hostClassesInit) {
        return;
    }
    getObjectTypedKeys(hostClassesInit).forEach((hostClassKey) => {
        const maybeCallback = hostClassesInit[hostClassKey];
        const hostClassName = hostClassNames[hostClassKey];

        if (typeof maybeCallback === 'function') {
            const shouldApplyHostClass = maybeCallback({state, inputs});
            if (shouldApplyHostClass) {
                host.classList.add(hostClassName);
            } else {
                host.classList.remove(hostClassName);
            }
        }
    });
}
