import {getObjectTypedKeys, mapObjectValues} from '@augment-vir/common';
import {CSSResult, unsafeCSS} from '../../lit-exports/all-lit-exports.js';
import {CustomElementTagName} from '../custom-tag-name.js';
import {BaseCssPropertyName} from './css-properties.js';
import {CssVars} from './css-vars.js';
import {PropertyInitMapBase} from './element-properties.js';
import {FlattenElementVirStateSetup} from './element-vir-state-setup.js';
import {HostClassNamesMap, HostClassesInitMap} from './host-classes.js';

export type HostClass = {
    selector: CSSResult;
    name: CSSResult;
};

export type StylesCallbackInput<
    TagName extends CustomElementTagName,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    CssVarKeys extends BaseCssPropertyName<TagName>,
> = {
    hostClasses: Record<HostClassKeys, HostClass>;
    cssVars: Readonly<CssVars<TagName, CssVarKeys>>;
};

export type StylesCallback<
    TagName extends CustomElementTagName,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    CssVarKeys extends BaseCssPropertyName<TagName>,
> = (input: StylesCallbackInput<TagName, HostClassKeys, CssVarKeys>) => CSSResult;

export function hostClassNamesToStylesInput<
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
