/**
 * Defines a nested type.
 *
 * @category Internal
 */
export type NestedType<SubType> = {[prop: PropertyKey]: SubType | NestedType<SubType>};

/**
 * The TypeScript compiler is hard-coded to prevent recursion deeper than 50, so this helps us make
 * sure we stay below that limit.
 *
 * @category Internal
 */
export type InfiniteRecursionLimiter = [
    30,
    29,
    28,
    27,
    26,
    25,
    24,
    23,
    22,
    21,
    20,
    19,
    18,
    17,
    16,
    15,
    14,
    13,
    12,
    11,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1,
    0,
];
