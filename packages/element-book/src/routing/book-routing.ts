import {FullRoute} from 'spa-router-vir';

/**
 * Top level routes supported by the element-book app.
 *
 * @category Internal
 */
export enum BookMainRoute {
    Search = 'search',
    Book = 'book',
}

/**
 * Valid route paths for the element-book app.
 *
 * @category Internal
 */
export type ValidBookPaths = [BookMainRoute.Search, string] | [BookMainRoute.Book, ...string[]];

/**
 * A full element-book app route. Only paths are supported.
 *
 * @category Internal
 */
export type BookFullRoute = Required<Readonly<FullRoute<ValidBookPaths, undefined, undefined>>>;

/**
 * Extract the current search query from the current route paths.
 *
 * @category Internal
 */
export function extractSearchQuery(paths: Readonly<ValidBookPaths>) {
    if (paths[0] === BookMainRoute.Book) {
        return '';
    } else {
        return paths[1] ? decodeURIComponent(paths[1]) : '';
    }
}

/**
 * The default element-book app route.
 *
 * @category Internal
 */
export const defaultBookFullRoute: Readonly<BookFullRoute> = {
    hash: undefined,
    paths: [BookMainRoute.Book],
    search: undefined,
} as const;
