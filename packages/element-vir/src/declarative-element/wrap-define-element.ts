import {PartialWithNullable} from '@augment-vir/common';
import {CustomElementTagName} from './custom-tag-name';
import {DeclarativeElementInit} from './declarative-element-init';
import {defineElement, VerifiedElementInit} from './define-element';
import {defineElementNoInputs, VerifiedElementNoInputsInit} from './define-element-no-inputs';
import {BaseCssPropertyName} from './properties/css-properties';
import {EventsInitMap} from './properties/element-events';
import {PropertyInitMapBase} from './properties/element-properties';

export type WrapDefineElementOptions<
    TagNameRequirement extends CustomElementTagName = CustomElementTagName,
    InputsRequirement extends PropertyInitMapBase = {},
    StateInitRequirement extends PropertyInitMapBase = {},
    EventsInitRequirement extends EventsInitMap = {},
> = PartialWithNullable<{
    assertInputs: (
        inputInit: DeclarativeElementInit<
            TagNameRequirement,
            InputsRequirement,
            StateInitRequirement,
            EventsInitRequirement,
            BaseCssPropertyName<TagNameRequirement>,
            BaseCssPropertyName<TagNameRequirement>,
            ReadonlyArray<string>
        >,
    ) => void;
    transformInputs: (
        inputInit: DeclarativeElementInit<
            TagNameRequirement,
            InputsRequirement,
            StateInitRequirement,
            EventsInitRequirement,
            BaseCssPropertyName<TagNameRequirement>,
            BaseCssPropertyName<TagNameRequirement>,
            ReadonlyArray<string>
        >,
    ) => DeclarativeElementInit<
        TagNameRequirement,
        InputsRequirement,
        StateInitRequirement,
        EventsInitRequirement,
        BaseCssPropertyName<TagNameRequirement>,
        BaseCssPropertyName<TagNameRequirement>,
        ReadonlyArray<string>
    >;
}>;

export function wrapDefineElement<
    TagNameRequirement extends CustomElementTagName = CustomElementTagName,
    InputsRequirement extends PropertyInitMapBase = {},
    StateInitRequirement extends PropertyInitMapBase = {},
    EventsInitRequirement extends EventsInitMap = {},
>(options?: WrapDefineElementOptions | undefined) {
    const {assertInputs, transformInputs}: WrapDefineElementOptions = {
        assertInputs: options?.assertInputs ?? (() => {}),
        transformInputs: options?.transformInputs ?? ((inputs: any) => inputs),
    };

    return {
        defineElement: <Inputs extends InputsRequirement>() => {
            return <
                const TagName extends TagNameRequirement,
                StateInit extends StateInitRequirement,
                EventsInit extends EventsInitRequirement,
                const HostClassKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
                const CssVarKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
                const SlotNames extends ReadonlyArray<string> = Readonly<[]>,
            >(
                inputs: VerifiedElementInit<
                    TagName,
                    Inputs,
                    StateInit,
                    EventsInit,
                    HostClassKeys,
                    CssVarKeys,
                    SlotNames
                >,
            ) => {
                assertInputs(inputs as DeclarativeElementInit<any, any, any, any, any, any, any>);
                return defineElement<Inputs>()(
                    transformInputs(
                        inputs as DeclarativeElementInit<any, any, any, any, any, any, any>,
                    ) as unknown as VerifiedElementInit<
                        TagName,
                        Inputs,
                        StateInit,
                        EventsInit,
                        HostClassKeys,
                        CssVarKeys,
                        SlotNames
                    >,
                );
            };
        },
        defineElementNoInputs: <
            const TagName extends TagNameRequirement,
            Inputs extends InputsRequirement,
            StateInit extends StateInitRequirement,
            EventsInit extends EventsInitRequirement,
            const HostClassKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
            const CssVarKeys extends BaseCssPropertyName<TagName> = `${TagName}-`,
            const SlotNames extends ReadonlyArray<string> = Readonly<[]>,
        >(
            inputs: VerifiedElementNoInputsInit<
                TagName,
                Inputs,
                StateInit,
                EventsInit,
                HostClassKeys,
                CssVarKeys,
                SlotNames
            >,
        ) => {
            assertInputs(inputs as DeclarativeElementInit<any, any, any, any, any, any, any>);
            return defineElementNoInputs(
                transformInputs(
                    inputs as DeclarativeElementInit<any, any, any, any, any, any, any>,
                ) as unknown as VerifiedElementNoInputsInit<
                    TagName,
                    Inputs,
                    StateInit,
                    EventsInit,
                    HostClassKeys,
                    CssVarKeys,
                    SlotNames
                >,
            );
        },
    };
}
