/**
 * Used to create objects for each interpolated tag name string (tag names that aren't wrapped in a
 * `DeclarativeElementDefinition`) so that we can use them as keys for the mapped template weakmap.
 */
export const tagNameKeys: Record<string, {tagName: string}> = {};
