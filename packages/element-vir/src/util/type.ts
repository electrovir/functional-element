/**
 * Blocks empty string literal types.
 *
 * @category Internal
 */
export type NonEmptyString<T> = T extends '' ? never : T;
