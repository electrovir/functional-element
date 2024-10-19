import {mapObjectValues} from '@augment-vir/common';
import {CustomElementTagName} from '../custom-tag-name.js';
import {BaseCssPropertyName} from './css-properties.js';
import {PropertyInitMapBase} from './element-properties.js';
import {FlattenElementVirStateSetup} from './element-vir-state-setup.js';
import {WithTagName} from './tag-name.js';

/**
 * Base init map for defining host classes in an element definition.
 *
 * @category Internal
 */
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
    | ((inputs: {
          state: Readonly<FlattenElementVirStateSetup<StateInit>>;
          inputs: Readonly<Inputs>;
      }) => boolean)
    | false
>;

/**
 * Creates a mapping of host class keys (as defined in an element definition) to their runtime host
 * class names.
 *
 * @category Internal
 */
export type HostClassNamesMap<TagName extends string, HostClassKeys extends string> = Record<
    HostClassKeys,
    WithTagName<TagName, string>
>;

/**
 * Maps element definition host class definitions to their runtime host class name equivalents.
 *
 * @category Internal
 */
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
