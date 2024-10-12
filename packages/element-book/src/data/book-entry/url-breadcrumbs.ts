import {collapseWhiteSpace} from '@augment-vir/common';
import {BookEntry} from './book-entry.js';

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

export function titleToUrlBreadcrumb(title: string): string {
    return collapseWhiteSpace(title).toLowerCase().replaceAll(/\s/g, '-');
}

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
