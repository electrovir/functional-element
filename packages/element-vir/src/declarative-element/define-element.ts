import {check} from '@augment-vir/assert';
import {CustomElementTagName} from './custom-tag-name';
import {DeclarativeElementDefinition} from './declarative-element';
import {DeclarativeElementInit} from './declarative-element-init';
import {defineElementNoInputs, VerifiedElementNoInputsInit} from './define-element-no-inputs';
import {BaseCssPropertyName} from './properties/css-properties';
import {EventsInitMap} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';

export type VerifiedElementInit<
    TagName extends CustomElementTagName,
    Inputs extends PropertyInitMapBase,
    StateInit extends PropertyInitMapBase,
    EventsInit extends EventsInitMap,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    CssVarKeys extends BaseCssPropertyName<TagName>,
    SlotNames extends ReadonlyArray<string>,
> =
    Extract<keyof StateInit, keyof Inputs> extends never
        ? Extract<keyof Inputs, keyof HTMLElement> extends never
            ? VerifiedElementNoInputsInit<
                  TagName,
                  Inputs,
                  StateInit,
                  EventsInit,
                  HostClassKeys,
                  CssVarKeys,
                  SlotNames
              >
            : 'ERROR: Cannot define an element input property that clashes with native HTMLElement properties.'
        : "ERROR: Cannot define an element state property that clashes with the element's input properties.";

export function defineElement<Inputs extends PropertyInitMapBase = {}>() {
    return <
        const TagName extends CustomElementTagName,
        StateInit extends PropertyInitMapBase = {},
        EventsInit extends EventsInitMap = {},
        const HostClassKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
        const CssVarKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
        const SlotNames extends ReadonlyArray<string> = Readonly<[]>,
    >(
        initInput: VerifiedElementInit<
            TagName,
            Inputs,
            StateInit,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames
        >,
    ): DeclarativeElementDefinition<
        TagName,
        Inputs,
        StateInit,
        EventsInit,
        HostClassKeys,
        CssVarKeys,
        SlotNames
    > => {
        const init:
            | string
            | DeclarativeElementInit<
                  TagName,
                  Inputs,
                  StateInit,
                  EventsInit,
                  HostClassKeys,
                  CssVarKeys,
                  SlotNames
              > = initInput;

        if (!check.isObject(init)) {
            throw new Error('Cannot define element with non-object init: ${init}');
        }

        return defineElementNoInputs({
            ...init,
            options: {
                ignoreUnsetInputs: false,
                ...init.options,
            },
        } as VerifiedElementNoInputsInit<
            TagName,
            Inputs,
            StateInit,
            EventsInit,
            HostClassKeys,
            CssVarKeys,
            SlotNames
        >);
    };
}
