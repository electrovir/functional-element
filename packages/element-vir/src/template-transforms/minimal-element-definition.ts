import {typedHasProperty} from '@augment-vir/common';
import {DeclarativeElementDefinitionOptions} from '../declarative-element/definition-options';
import {PropertyInitMapBase} from '../declarative-element/properties/element-properties';

export type MinimalElementDefinition = {
    tagName: string;
    elementOptions?: DeclarativeElementDefinitionOptions | undefined;
    /** This is used when wrapping interpolated raw tag name strings. */
    tagInterpolationKey?: {tagName: string} | undefined;
};

export type MinimalDefinitionWithInputs = {
    _elementVirIsMinimalDefinitionWithInputs: true;
    definition: MinimalElementDefinition;
    inputs: PropertyInitMapBase;
};

export function isMinimalDefinitionWithInputs(
    value: unknown,
): value is MinimalDefinitionWithInputs {
    return (
        typedHasProperty(value, '_elementVirIsMinimalDefinitionWithInputs') &&
        !!value._elementVirIsMinimalDefinitionWithInputs
    );
}

export function hasTagName(value: unknown): value is MinimalElementDefinition {
    return (
        typedHasProperty(value, 'tagName') && !!value.tagName && typeof value.tagName === 'string'
    );
}