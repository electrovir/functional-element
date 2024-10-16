import {collapseWhiteSpace} from '@augment-vir/common';
import {BookEntry} from './book-entry.js';

/**
 * Create a list of URL breadcrumbs for the given element-book entry.
 *
 * @internal
 */
export function listUrlBreadcrumbs(entry: BookEntry, includeSelf: boolean): string[] {
    const entryBreadcrumb = titleToUrlBreadcrumb(entry.title);

    if (entry.parent) {
        return [
            ...listUrlBreadcrumbs(entry.parent, false),
            titleToUrlBreadcrumb(entry.parent.title),
        ].concat(includeSelf ? [entryBreadcrumb] : []);
    } else if (includeSelf) {
        return [entryBreadcrumb];
    } else {
        return [];
    }
}

/**
 * Convert an element-book entry's title to a URL-safe breadcrumb title.
 *
 * @internal
 */
export function titleToUrlBreadcrumb(title: string): string {
    return collapseWhiteSpace(title).toLowerCase().replaceAll(/\s/g, '-');
}

/**
 * Check if a full list of URL breadcrumbs (`searchIn`) starts with the subset list of URL
 * breadcrumbs (`searchFor`).
 *
 * @internal
 */
export function doBreadcrumbsStartWith({
    searchFor,
    searchIn,
}: {
    searchIn: ReadonlyArray<string>;
    searchFor: ReadonlyArray<string>;
}): boolean {
    return searchFor.every((breadcrumb, index) => {
        return searchIn[index] === breadcrumb;
    });
}
