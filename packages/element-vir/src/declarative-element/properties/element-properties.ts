export type PropertyInitMapBase = Record<PropertyKey, unknown>;

export type ElementProperty<KeyGeneric extends string | number | symbol, ValueGeneric> = {
    name: KeyGeneric;
    setProp(value: ValueGeneric): void;
    getProp(): ValueGeneric;
};

export type StaticElementPropertyDescriptor<PropName extends string, PropValue> = {
    propName: PropName;
    initValue: PropValue;
};

export type ElementPropertyDescriptorMap<PropertyInitGeneric extends PropertyInitMapBase> = {
    [Property in keyof PropertyInitGeneric]: StaticElementPropertyDescriptor<
        string,
        PropertyInitGeneric[Property]
    >;
};

export function createPropertyDescriptorMap<PropertyInitGeneric extends PropertyInitMapBase>(
    propertyInit: PropertyInitGeneric | undefined,
): ElementPropertyDescriptorMap<PropertyInitGeneric> {
    if (!propertyInit) {
        return {} as ElementPropertyDescriptorMap<PropertyInitGeneric>;
    }
    return Object.keys(propertyInit)
        .filter((key): key is string => {
            if (typeof key === 'string') {
                return true;
            } else {
                throw new TypeError(`Property init cannot have non string keys: '${String(key)}'`);
            }
        })
        .reduce(
            (
                accum: ElementPropertyDescriptorMap<PropertyInitGeneric>,
                currentKey: keyof PropertyInitGeneric,
            ): ElementPropertyDescriptorMap<PropertyInitGeneric> => {
                accum[currentKey] = {
                    propName: currentKey as keyof PropertyInitGeneric extends string
                        ? keyof PropertyInitGeneric
                        : never,
                    initValue: propertyInit[currentKey],
                };
                return accum;
            },
            {} as ElementPropertyDescriptorMap<PropertyInitGeneric>,
        );
}
