import {check} from '@augment-vir/assert';
import {DeclarativeElementDefinitionOptions} from '../declarative-element/definition-options.js';
import {PropertyInitMapBase} from '../declarative-element/properties/element-properties.js';

/**
 * A minimal element definition used for interpolating element definitions into HTML templates with
 * a more generic type (to prevent insane circular dependencies).
 *
 * @category Internal
 */
export type MinimalElementDefinition = {
    tagName: string;
    elementOptions?: DeclarativeElementDefinitionOptions | undefined;
    /** This is used when wrapping interpolated raw tag name strings. */
    tagInterpolationKey?: {tagName: string} | undefined;
};

/**
 * A parent definition of {@link MinimalElementDefinition} with inputs also specified with allows the
 * `.assign()` method to be used inside of HTML templates.
 *
 * @category Internal
 */
export type MinimalDefinitionWithInputs = {
    /**
     * This is what marks instance of this type as such. This does not use a symbol so it's
     * compatible with multiple `element-vir` versions being installed at once (like if a dependency
     * uses a different version).
     */
    _elementVirIsMinimalDefinitionWithInputs: true;
    definition: MinimalElementDefinition;
    inputs: PropertyInitMapBase;
};

/**
 * Checks if the input is an instance of {@link MinimalDefinitionWithInputs}.
 *
 * @category Internal
 */
export function isMinimalDefinitionWithInputs(
    value: unknown,
): value is MinimalDefinitionWithInputs {
    return (
        check.hasKey(value, '_elementVirIsMinimalDefinitionWithInputs') &&
        !!value._elementVirIsMinimalDefinitionWithInputs
    );
}

/**
 * Checks if the input is an object that has a `tagName` property. Used inside of the HTML tagged
 * template functions for checking if interpolated values should be treated as element tags.
 *
 * @category Internal
 */
export function hasTagName(value: unknown): value is MinimalElementDefinition {
    return check.hasKey(value, 'tagName') && !!value.tagName && typeof value.tagName === 'string';
}
