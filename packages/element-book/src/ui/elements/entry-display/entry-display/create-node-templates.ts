import {isLengthAtLeast, mapObjectValues} from '@augment-vir/common';
import {HTMLTemplateResult, HtmlInterpolation, html, nothing, repeat} from 'element-vir';
import {BookEntryTypeEnum} from '../../../../data/book-entry/book-entry-type';
import {
    BookPageControlsInitBase,
    BookPageControlsValues,
} from '../../../../data/book-entry/book-page/book-page-controls';
import {
    ControlsWrapper,
    traverseControls,
} from '../../../../data/book-entry/book-page/controls-wrapper';
import {isBookTreeNode, traverseToImmediateParent} from '../../../../data/book-tree/book-tree';
import {BookTreeNode} from '../../../../data/book-tree/book-tree-node';
import {BookRouter} from '../../../../routing/book-router';
import {BookError} from '../../common/book-error.element';
import {BookPageControls} from '../book-page/book-page-controls.element';
import {BookPageWrapper} from '../book-page/book-page-wrapper.element';
import {BookElementExampleWrapper} from '../element-example/book-element-example-wrapper.element';

type FlattenedControls = {
    config: BookPageControlsInitBase;
    current: BookPageControlsValues;
    breadcrumbs: Record<string, ReadonlyArray<string>>;
};

function getFlattenedControlsFromHiddenParents(
    currentNodes: ReadonlyArray<BookTreeNode>,
    currentControls: ControlsWrapper,
    currentNode: BookTreeNode,
    originalTree: Readonly<BookTreeNode<BookEntryTypeEnum.Root>>,
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
    if (
        isBookTreeNode(currentNode, BookEntryTypeEnum.Page) &&
        !currentNodes.includes(currentNode)
    ) {
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
    originalTree: Readonly<BookTreeNode<BookEntryTypeEnum.Root>>;
}): HtmlInterpolation[] {
    if (!currentNodes.length && isSearching) {
        return [
            html`
                No results
            `,
        ];
    }

    const hiddenAncestorControls = isLengthAtLeast(currentNodes, 1)
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
        isLengthAtLeast(currentNodes, 1)
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
        (currentNode, index): HTMLTemplateResult | typeof nothing => {
            if (isBookTreeNode(currentNode, BookEntryTypeEnum.Page)) {
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
            } else if (isBookTreeNode(currentNode, BookEntryTypeEnum.ElementExample)) {
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
            } else if (isBookTreeNode(currentNode, BookEntryTypeEnum.Root)) {
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
