import {check} from '@augment-vir/assert';
import {mapObjectValues} from '@augment-vir/common';
import {HTMLTemplateResult, HtmlInterpolation, html, nothing, repeat} from 'element-vir';
import {BookEntryType} from '../../../../data/book-entry/book-entry-type.js';
import {
    BookPageControlsInitBase,
    BookPageControlsValues,
} from '../../../../data/book-entry/book-page/book-page-controls.js';
import {
    ControlsWrapper,
    traverseControls,
} from '../../../../data/book-entry/book-page/controls-wrapper.js';
import {BookTreeNode} from '../../../../data/book-tree/book-tree-node.js';
import {isBookTreeNode, traverseToImmediateParent} from '../../../../data/book-tree/book-tree.js';
import {BookRouter} from '../../../../routing/book-router.js';
import {BookError} from '../../common/book-error.element.js';
import {BookPageControls} from '../book-page/book-page-controls.element.js';
import {BookPageWrapper} from '../book-page/book-page-wrapper.element.js';
import {BookElementExampleWrapper} from '../element-example/book-element-example-wrapper.element.js';

type FlattenedControls = {
    config: BookPageControlsInitBase;
    current: BookPageControlsValues;
    breadcrumbs: Record<string, ReadonlyArray<string>>;
};

function getFlattenedControlsFromHiddenParents(
    currentNodes: ReadonlyArray<BookTreeNode>,
    currentControls: ControlsWrapper,
    currentNode: BookTreeNode,
    originalTree: Readonly<BookTreeNode<BookEntryType.Root>>,
): FlattenedControls | undefined {
    const parent = traverseToImmediateParent(currentNode, originalTree);
    const allControls: FlattenedControls[] = [];

    if (parent) {
        const parentControls = getFlattenedControlsFromHiddenParents(
            currentNodes,
            currentControls,
            parent,
            originalTree,
        );
        if (parentControls) {
            allControls.push(parentControls);
        }
    }
    if (isBookTreeNode(currentNode, BookEntryType.Page) && !currentNodes.includes(currentNode)) {
        const currentEntryControls = traverseControls(
            currentControls,
            currentNode.fullUrlBreadcrumbs,
        );
        allControls.push({
            config: currentNode.entry.controls,
            current: currentEntryControls,
            breadcrumbs: mapObjectValues(currentEntryControls, () => {
                return currentNode.fullUrlBreadcrumbs;
            }),
        });
    }
    return allControls.reduce(
        (accum, currentControls) => {
            return {
                config: {
                    ...accum.config,
                    ...currentControls.config,
                },
                current: {
                    ...accum.current,
                    ...currentControls.current,
                },
                breadcrumbs: {
                    ...accum.breadcrumbs,
                    ...currentControls.breadcrumbs,
                },
            };
        },
        {config: {}, current: {}, breadcrumbs: {}},
    );
}

export function createNodeTemplates({
    currentNodes,
    isTopLevel,
    router,
    isSearching,
    controls,
    originalTree,
}: {
    currentNodes: ReadonlyArray<BookTreeNode>;
    isTopLevel: boolean;
    router: BookRouter | undefined;
    isSearching: boolean;
    controls: ControlsWrapper;
    originalTree: Readonly<BookTreeNode<BookEntryType.Root>>;
}): HtmlInterpolation[] {
    if (!currentNodes.length && isSearching) {
        return [
            html`
                No results
            `,
        ];
    }

    const hiddenAncestorControls = check.isLengthAtLeast(currentNodes, 1)
        ? getFlattenedControlsFromHiddenParents(
              currentNodes,
              controls,
              currentNodes[0],
              originalTree,
          )
        : undefined;

    const hiddenAncestorControlsTemplate =
        hiddenAncestorControls &&
        Object.values(hiddenAncestorControls.config).length &&
        check.isLengthAtLeast(currentNodes, 1)
            ? html`
                  <${BookPageControls.assign({
                      config: hiddenAncestorControls.config,
                      currentValues: hiddenAncestorControls.current,
                      fullUrlBreadcrumbs: hiddenAncestorControls.breadcrumbs,
                  })}></${BookPageControls}>
              `
            : nothing;

    const templates = repeat(
        currentNodes,
        (node) => node.fullUrlBreadcrumbs.join('>'),
        (currentNode): HTMLTemplateResult | typeof nothing => {
            if (isBookTreeNode(currentNode, BookEntryType.Page)) {
                return html`
                    <${BookPageWrapper.assign({
                        isTopLevel,
                        pageNode: currentNode,
                        controls: controls,
                        router,
                    })}
                        class="block-entry"
                    ></${BookPageWrapper}>
                `;
            } else if (isBookTreeNode(currentNode, BookEntryType.ElementExample)) {
                const controlsForElementExample = traverseControls(
                    controls,
                    currentNode.fullUrlBreadcrumbs.slice(0, -1),
                );

                return html`
                    <${BookElementExampleWrapper.assign({
                        elementExampleNode: currentNode,
                        currentPageControls: controlsForElementExample,
                        router,
                    })}
                        class="inline-entry"
                    ></${BookElementExampleWrapper}>
                `;
            } else if (isBookTreeNode(currentNode, BookEntryType.Root)) {
                return nothing;
            } else {
                return html`
                    <${BookError.assign({
                        message: `Unknown entry type for rendering: '${currentNode.entry.entryType}'`,
                    })}
                        class="block-entry"
                    ></${BookError}>
                `;
            }
        },
    );

    return [
        hiddenAncestorControlsTemplate,
        templates,
    ];
}
