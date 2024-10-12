import {doBreadcrumbsStartWith} from '../../../data/book-entry/url-breadcrumbs.js';
import {BookTreeNode} from '../../../data/book-tree/book-tree-node.js';
import {
    BookFullRoute,
    ValidBookPaths,
    defaultBookFullRoute,
} from '../../../routing/book-routing.js';

export function getCurrentNodes(
    flattenedNodes: ReadonlyArray<Readonly<BookTreeNode>>,
    currentPaths: Readonly<ValidBookPaths>,
    updateRoutes: (newRoute: Partial<BookFullRoute>) => void,
): BookTreeNode[] {
    const filteredNodes = filterNodes(flattenedNodes, currentPaths);

    if (filteredNodes.length) {
        return filteredNodes;
    } else {
        updateRoutes(defaultBookFullRoute);
    }

    return filterNodes(flattenedNodes, defaultBookFullRoute.paths);
}

function filterNodes(
    flattenedNodes: ReadonlyArray<Readonly<BookTreeNode>>,
    paths: ReadonlyArray<string>,
): BookTreeNode[] {
    return flattenedNodes.filter((node) =>
        doBreadcrumbsStartWith({
            searchFor: paths.slice(1),
            searchIn: node.fullUrlBreadcrumbs,
        }),
    );
}
