import {check} from '@augment-vir/assert';
import {randomString} from '@augment-vir/common';
import {fuzzySearch} from '../../util/fuzzy-search';
import {BookTreeNode} from './book-tree-node';

const searchJoin = randomString(32);

function createBreadcrumbsSearchKey(breadcrumbs: ReadonlyArray<string>): string {
    return breadcrumbs.join(searchJoin);
}

type SearchInclusions = Record<string, boolean>;

function getFullTreeKeysToInclude(breadcrumbs: ReadonlyArray<string>): string[] {
    if (!breadcrumbs.length) {
        return [];
    }

    const currentKey = createBreadcrumbsSearchKey(breadcrumbs);

    const ancestorKeys = getFullTreeKeysToInclude(breadcrumbs.slice(0, -1));

    return [
        currentKey,
        ...ancestorKeys,
    ];
}

const errorQueries = [
    'error',
    'errors',
];
function isSearchingForErrors(searchQuery: string): boolean {
    return errorQueries.includes(searchQuery);
}

export function searchFlattenedNodes({
    flattenedNodes,
    searchQuery,
}: {
    flattenedNodes: ReadonlyArray<BookTreeNode>;
    searchQuery: string;
}): ReadonlyArray<BookTreeNode> {
    const includeInSearchResults: SearchInclusions = {};

    function addChildren(treeNode: BookTreeNode) {
        const childrenKeys = Object.values(treeNode.children).map((child) => {
            addChildren(child);
            return createBreadcrumbsSearchKey(child.fullUrlBreadcrumbs);
        });

        childrenKeys.forEach((keyToInclude) => (includeInSearchResults[keyToInclude] = true));
    }

    flattenedNodes.forEach((treeNode) => {
        const matchesErrors = treeNode.entry.errors.length && isSearchingForErrors(searchQuery);
        const currentNodeSearchKey = createBreadcrumbsSearchKey(treeNode.fullUrlBreadcrumbs);
        const shouldInclude =
            fuzzySearch({
                searchIn: [
                    treeNode.entry.title,
                    ...treeNode.entry.descriptionParagraphs,
                ]
                    .join(' ')
                    .toLowerCase(),
                searchQuery: searchQuery.toLowerCase(),
            }) ||
            matchesErrors ||
            includeInSearchResults[currentNodeSearchKey];

        if (shouldInclude) {
            const keysToInclude = getFullTreeKeysToInclude(treeNode.fullUrlBreadcrumbs);

            addChildren(treeNode);

            keysToInclude.forEach((keyToInclude) => (includeInSearchResults[keyToInclude] = true));
        } else {
            includeInSearchResults[currentNodeSearchKey] = false;
        }
    });

    return flattenedNodes.filter((treeNode): boolean => {
        const inSearchResultsKey = createBreadcrumbsSearchKey(treeNode.fullUrlBreadcrumbs);

        const shouldInclude = includeInSearchResults[inSearchResultsKey];

        if (!check.isBoolean(shouldInclude)) {
            throw new Error(
                `Failed to find '${treeNode.fullUrlBreadcrumbs.join(
                    ' > ',
                )}' in includeInSearchResults.`,
            );
        }

        return shouldInclude;
    });
}
