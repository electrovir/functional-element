import {check} from '@augment-vir/assert';
import {filterMap} from '@augment-vir/common';
import {hasTagName, isMinimalDefinitionWithInputs} from './minimal-element-definition.js';
import {TemplateTransform} from './template-transform-type.js';

type WeakMapElementKey = {
    tagName: string;
};

type TemplateAndNested = {
    template: TemplateTransform | undefined;
    nested: NestedTemplatesWeakMap | undefined;
};
type NestedTemplatesWeakMap = WeakMap<WeakMapElementKey, TemplateAndNested>;
type TemplatesWeakMap = WeakMap<TemplateStringsArray, TemplateAndNested>;

function extractElementKeys(values: unknown[]): WeakMapElementKey[] {
    return filterMap(
        values,
        (value): WeakMapElementKey | undefined => {
            if (isMinimalDefinitionWithInputs(value)) {
                return value.definition;
            }
            if (hasTagName(value)) {
                return value.tagInterpolationKey || value;
            }

            return undefined;
        },
        check.isTruthy,
    );
}

/**
 * The transformed templates are written to a map so that we can preserve reference equality between
 * calls. Without maintaining reference equality between html`` calls, lit-element reconstructs all
 * of its children on every render.
 *
 * This is a WeakMap because we only care about the transformed array value as long as the original
 * template array key exists.
 */
const transformedTemplateStrings: TemplatesWeakMap = new WeakMap();

export function getAlreadyMappedTemplate<PossibleValues>(
    templateStringsKey: TemplateStringsArray,
    values: PossibleValues[],
) {
    const elementKeys = extractElementKeys(values);
    const nestedValue = getNestedValues(transformedTemplateStrings, [
        templateStringsKey,
        ...elementKeys,
    ]);
    return nestedValue.value?.template;
}

export function setMappedTemplate<PossibleValues>(
    templateStringsKey: TemplateStringsArray,
    values: PossibleValues[],
    valueToSet: TemplateTransform,
) {
    const elementKeys = extractElementKeys(values);
    return setNestedValues(
        transformedTemplateStrings,
        [
            templateStringsKey,
            ...elementKeys,
        ],
        valueToSet,
    );
}

function getNestedValues(
    map: TemplatesWeakMap | NestedTemplatesWeakMap,
    keys: (TemplateStringsArray | WeakMapElementKey)[],
    index = 0,
): {value: undefined | TemplateAndNested; reason: string} {
    const {currentTemplateAndNested, reason} = getCurrentKeyAndValue(map, keys, index);
    if (!currentTemplateAndNested) {
        return {value: currentTemplateAndNested, reason};
    }

    if (index === keys.length - 1) {
        return {value: currentTemplateAndNested, reason: `reached end of keys array`};
    }

    if (!currentTemplateAndNested.nested) {
        return {value: undefined, reason: `map at key index ${index} did not have nested maps`};
    }

    return getNestedValues(currentTemplateAndNested.nested, keys, index + 1);
}

function getCurrentKeyAndValue(
    map: TemplatesWeakMap | NestedTemplatesWeakMap,
    keys: (TemplateStringsArray | WeakMapElementKey)[],
    index: number,
): {
    currentKey: TemplateStringsArray | WeakMapElementKey | undefined;
    currentTemplateAndNested: TemplateAndNested | undefined;
    reason: string;
} {
    const currentKey = keys[index];
    if (currentKey == undefined) {
        return {
            currentKey: undefined,
            currentTemplateAndNested: undefined,
            reason: `key at index ${index} not found`,
        };
    }
    if (!map.has(currentKey as any)) {
        return {
            currentKey,
            currentTemplateAndNested: undefined,
            reason: `key at index ${index} was not in the map`,
        };
    }
    const currentTemplateAndNested = map.get(currentKey as any);
    if (currentTemplateAndNested == undefined) {
        return {
            currentKey,
            currentTemplateAndNested: undefined,
            reason: `value at key at index ${index} was undefined`,
        };
    }

    return {currentKey, currentTemplateAndNested, reason: `key and value exists`};
}

function setNestedValues(
    map: TemplatesWeakMap | NestedTemplatesWeakMap,
    keys: (TemplateStringsArray | WeakMapElementKey)[],
    valueToSet: TemplateTransform,
    index = 0,
): {result: boolean; reason: string} {
    const {currentTemplateAndNested, currentKey, reason} = getCurrentKeyAndValue(map, keys, index);
    if (!currentKey) {
        return {result: false, reason};
    }

    const nestedAndTemplate = currentTemplateAndNested ?? {nested: undefined, template: undefined};
    if (!currentTemplateAndNested) {
        map.set(currentKey as any, nestedAndTemplate);
    }

    if (index === keys.length - 1) {
        nestedAndTemplate.template = valueToSet;
        return {result: true, reason: `set value at end of keys array`};
    }

    const nestedWeakMap = nestedAndTemplate.nested ?? new WeakMap();

    if (!nestedAndTemplate.nested) {
        nestedAndTemplate.nested = nestedWeakMap;
    }

    return setNestedValues(nestedWeakMap, keys, valueToSet, index + 1);
}
