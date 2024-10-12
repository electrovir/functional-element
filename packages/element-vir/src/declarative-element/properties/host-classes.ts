import {mapObjectValues} from '@augment-vir/common';
import {CustomElementTagName} from '../custom-tag-name.js';
import {BaseCssPropertyName} from './css-properties.js';
import {PropertyInitMapBase} from './element-properties.js';
import {FlattenElementVirStateSetup} from './element-vir-state-setup.js';
import {WithTagName} from './tag-name.js';

export type HostClassToggleCallbackInput<
    Inputs extends PropertyInitMapBase,
    StateInit extends PropertyInitMapBase,
> = {
    state: Readonly<FlattenElementVirStateSetup<StateInit>>;
    inputs: Readonly<Inputs>;
};

export type HostClassToggleCallback<
    Inputs extends PropertyInitMapBase,
    StateInit extends PropertyInitMapBase,
> = (inputs: HostClassToggleCallbackInput<Inputs, StateInit>) => boolean;

export type HostClassesInitMap<
    TagName extends CustomElementTagName,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    Inputs extends PropertyInitMapBase,
    StateInit extends PropertyInitMapBase,
> = Record<
    HostClassKeys,
    /**
     * Callback to determine when host class should be enabled (based on current inputs and state),
     * or just undefined to mark that this host class name will only be manually applied.
     */
    HostClassToggleCallback<Inputs, StateInit> | false
>;

export type HostClassName<
    TagName extends string,
    HostClassPropName extends string,
> = `${TagName}-${HostClassPropName}`;

export type HostClassNamesMap<TagName extends string, HostClassKeys extends string> = Record<
    HostClassKeys,
    WithTagName<TagName, string>
>;

export function createHostClassNamesMap<
    TagName extends CustomElementTagName,
    HostClassKeys extends BaseCssPropertyName<TagName>,
    HostClassesInit extends HostClassesInitMap<
        TagName,
        HostClassKeys,
        /**
         * We can use any here because we don't care what the state or input names are, we just care
         * what the host class names are
         */
        any,
        any
    >,
>(hostClassesInit?: HostClassesInit): HostClassNamesMap<TagName, HostClassKeys> {
    if (hostClassesInit) {
        return mapObjectValues(hostClassesInit, (key) => {
            return key;
        }) as HostClassNamesMap<TagName, HostClassKeys>;
    } else {
        return {} as HostClassNamesMap<TagName, HostClassKeys>;
    }
}
