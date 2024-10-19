/**
 * The base type for any property maps (like state or inputs).
 *
 * @category Internal
 */
export type PropertyInitMapBase = Record<PropertyKey, unknown>;

/**
 * Describes a static element property.
 *
 * @category Internal
 */
export type StaticElementPropertyDescriptor<PropName extends string, PropValue> = {
    propName: PropName;
    initValue: PropValue;
};

/**
 * Maps a property init map into static element descriptions.
 *
 * @category Internal
 */
export type ElementPropertyDescriptorMap<PropertyInitGeneric extends PropertyInitMapBase> = {
    [Property in keyof PropertyInitGeneric]: StaticElementPropertyDescriptor<
        string,
        PropertyInitGeneric[Property]
    >;
};
