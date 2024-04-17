import {FullRoute} from 'spa-router-vir';

export enum BookMainRoute {
    Search = 'search',
    Book = 'book',
}

export type ValidBookPaths = [BookMainRoute.Search, string] | [BookMainRoute.Book, ...string[]];

export type BookFullRoute = Required<Readonly<FullRoute<ValidBookPaths, undefined, undefined>>>;

export function extractSearchQuery(paths: Readonly<ValidBookPaths>) {
    if (paths[0] === BookMainRoute.Book) {
        return '';
    } else {
        return paths[1] ? decodeURIComponent(paths[1]) : '';
    }
}

export const defaultBookFullRoute: Readonly<BookFullRoute> = {
    hash: undefined,
    paths: [BookMainRoute.Book],
    search: undefined,
} as const;
