import {PartialWithUndefined, mapObjectValues} from '@augment-vir/common';
import {BookTreeNode} from '../../book-tree/book-tree-node.js';
import {isBookTreeNode} from '../../book-tree/book-tree.js';
import {BookEntryType} from '../book-entry-type.js';
import {BookPageControlsValues} from './book-page-controls.js';

export type ControlsWrapper = {
    children: {
        [Breadcrumb: string]: ControlsWrapper;
    };
    controls: BookPageControlsValues;
};

export function traverseControls(
    controlsWrapper: ControlsWrapper,
    fullUrlBreadcrumbs: ReadonlyArray<string>,
): BookPageControlsValues {
    return traverseAndInsertNewControls(
        controlsWrapper,
        [
            /** Empty string represents the breadcrumb for the root node */
            '',
            ...fullUrlBreadcrumbs,
        ],
        undefined,
    );
}

function traverseAndInsertNewControls(
    controlsWrapper: ControlsWrapper,
    urlBreadcrumbs: ReadonlyArray<string>,
    newValues: BookPageControlsValues | undefined,
): BookPageControlsValues {
    const nextBreadcrumbs = urlBreadcrumbs.slice(1);
    const nextBreadcrumb = nextBreadcrumbs[0];
    /** If we're at the end of the breadcrumbs, then it's time to insert the new controls. */
    if (!nextBreadcrumb && newValues) {
        controlsWrapper.controls = newValues;
    }

    const childControlsWrapper: ControlsWrapper | undefined =
        controlsWrapper.children[nextBreadcrumb || ''];

    const childrenControls =
        childControlsWrapper &&
        traverseAndInsertNewControls(childControlsWrapper, nextBreadcrumbs, newValues);

    const allControls = {
        ...controlsWrapper.controls,
        ...childrenControls,
    };

    return allControls;
}

export function createNewControls(
    controlsWrapper: Readonly<ControlsWrapper>,
    breadcrumbsForNewValue: ReadonlyArray<string>,
    newValues: BookPageControlsValues,
): ControlsWrapper {
    const newControls = {...controlsWrapper};

    traverseAndInsertNewControls(
        newControls,
        [
            /** Empty string represents the breadcrumb for the root node */
            '',
            ...breadcrumbsForNewValue,
        ],
        newValues,
    );

    return newControls;
}

export function updateTreeControls(
    node: BookTreeNode,
    existingControls: PartialWithUndefined<ControlsWrapper> | undefined,
): ControlsWrapper {
    const controls =
        existingControls?.controls ||
        (isBookTreeNode(node, BookEntryType.Page)
            ? mapObjectValues(node.entry.controls, (name, setup) => {
                  return setup.initValue;
              })
            : {});

    const controlsWrapper: ControlsWrapper = {
        children: mapObjectValues(node.children, (childName, childTreeNode): ControlsWrapper => {
            return updateTreeControls(
                childTreeNode,
                existingControls?.children?.[childTreeNode.urlBreadcrumb],
            );
        }),
        controls,
    };

    return controlsWrapper;
}
