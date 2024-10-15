/**
 * All possible types for element-book entries.
 *
 * @category Internal
 */
export enum BookEntryType {
    /** A single element example. */
    ElementExample = 'element-example',
    /** An individual book page with element examples and/or sub-pages. */
    Page = 'page',
    /** Tree root. Not for external use. */
    Root = 'root',
}

/**
 * A union of all possible element-book entry types.
 *
 * @category Internal
 */
export type AnyBookEntryType =
    | BookEntryType.ElementExample
    | BookEntryType.Page
    | BookEntryType.Root;
