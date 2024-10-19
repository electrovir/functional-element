/**
 * Prefixes any given `Suffix` with a element's `TagName`.
 *
 * @category Internal
 */
export type WithTagName<TagName extends string, Suffix extends string> = `${TagName}-${Suffix}`;
