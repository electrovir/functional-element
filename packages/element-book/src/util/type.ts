/**
 * Defines a nested type.
 *
 * @category Internal
 */
export type NestedType<SubType> = {[prop: PropertyKey]: SubType | NestedType<SubType>};
