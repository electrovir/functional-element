/* eslint-disable @typescript-eslint/no-empty-object-type */

import {check} from '@augment-vir/assert';
import {SetOptionalAndNullable, Values} from '@augment-vir/common';
import {PropertyInitMapBase} from 'element-vir';
import type {EmptyObject} from 'type-fest';
import {GlobalValues} from '../../../ui/elements/element-book-app/global-values.js';
import {InfiniteRecursionLimiter} from '../../../util/type.js';
import {BookEntryType} from '../book-entry-type.js';
import {titleToUrlBreadcrumb} from '../url-breadcrumbs.js';
import {BookPageControlsInitBase} from './book-page-controls.js';
import {BookElementExample, BookElementExampleInit, BookPage} from './book-page.js';

/**
 * The callback type for a book page definition's `defineExample` callback.
 *
 * @category Internal
 */
export type DefineExampleCallback<
    GlobalValuesType extends GlobalValues = {},
    ControlsInit extends BookPageControlsInitBase = BookPageControlsInitBase,
> = <StateInit extends PropertyInitMapBase>(
    exampleInit: BookElementExampleInit<GlobalValuesType, ControlsInit, StateInit>,
) => void;

/**
 * Used for `defineExamples` in a book page's init.
 *
 * @category Internal
 */
export type ElementExamplesDefiner<
    GlobalValuesType extends GlobalValues = {},
    ControlsInit extends BookPageControlsInitBase = BookPageControlsInitBase,
> = (params: {defineExample: DefineExampleCallback<GlobalValuesType, ControlsInit>}) => void;

/**
 * Collapses all element-book control inits into a single flag object.
 *
 * @category Internal
 */
export type CollapseControlsInit<
    ParentPage extends BookPage | undefined,
    CurrentControlsInit extends BookPageControlsInitBase,
    /** Prevent infinite recursion TypeScript errors. */
    RecursionDepth = InfiniteRecursionLimiter,
> = CurrentControlsInit &
    (RecursionDepth extends [any, ...infer RemainingDepth]
        ? ParentPage extends BookPage<
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              infer GlobalValuesType,
              infer GrandParentPage,
              infer ParentControls
          >
            ? CollapseControlsInit<GrandParentPage, ParentControls, RemainingDepth>
            : EmptyObject
        : EmptyObject);

/**
 * Collapses all element-book global values into a single flag object.
 *
 * @category Internal
 */
export type CollapseGlobalValuesType<
    ParentPage extends BookPage | undefined,
    GlobalValuesType extends GlobalValues,
    /** Prevent infinite recursion TypeScript errors. */
    RecursionDepth = InfiniteRecursionLimiter,
> = GlobalValuesType &
    (RecursionDepth extends [any, ...infer RemainingDepth]
        ? ParentPage extends BookPage<
              infer GlobalValuesType,
              infer GrandParentPage,
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              infer ParentControls
          >
            ? CollapseGlobalValuesType<GrandParentPage, GlobalValuesType, RemainingDepth>
            : EmptyObject
        : EmptyObject);

/**
 * The parameters for initializing a new element-book page.
 *
 * @category Type
 */
export type BookPageInit<
    GlobalValuesType extends GlobalValues,
    ParentPage extends BookPage | undefined,
    CurrentControlsInit extends BookPageControlsInitBase,
> = SetOptionalAndNullable<
    Omit<
        BookPage<any, ParentPage, CurrentControlsInit>,
        'entryType' | 'elementExamples' | 'errors'
    >,
    'controls' | 'descriptionParagraphs'
> & {
    defineExamples?:
        | ElementExamplesDefiner<
              CollapseGlobalValuesType<ParentPage, GlobalValuesType>,
              CollapseControlsInit<ParentPage, CurrentControlsInit>
          >
        | undefined;
};

/**
 * A variant of {@link defineBookPage} that allows you specify what the expected global element-book
 * values are for the page that you are defining.
 *
 * @category Main
 */
export function defineBookPageWithGlobals<const GlobalValuesType extends GlobalValues = {}>() {
    return <
        const ParentPage extends BookPage | undefined = undefined,
        const ControlsInit extends BookPageControlsInitBase = {},
    >(
        pageInit: BookPageInit<GlobalValuesType, ParentPage, ControlsInit>,
    ): BookPage<GlobalValuesType, ParentPage, ControlsInit> => {
        return defineBookPage(pageInit);
    };
}

/**
 * Define an element-book page. This is how you create new entries for your element-book instance.
 *
 * @category Main
 */
export function defineBookPage<
    const GlobalValuesType extends GlobalValues = {},
    const ParentPage extends BookPage | undefined = undefined,
    const ControlsInit extends BookPageControlsInitBase = {},
>(
    pageInit: BookPageInit<GlobalValuesType, ParentPage, ControlsInit>,
): BookPage<GlobalValuesType, ParentPage, ControlsInit> {
    const page: BookPage<GlobalValuesType, ParentPage, ControlsInit> = {
        ...pageInit,
        entryType: BookEntryType.Page,
        elementExamples: {},
        descriptionParagraphs: pageInit.descriptionParagraphs ?? [],
        controls: pageInit.controls ?? ({} as ControlsInit),
        errors: [],
    };

    const alreadyTakenElementExampleNames = new Set<string>();

    if (pageInit.defineExamples) {
        pageInit.defineExamples({
            defineExample(elementExampleInit) {
                const newExample: BookElementExample<any, any, any> = {
                    ...elementExampleInit,
                    entryType: BookEntryType.ElementExample,
                    parent: page,
                    descriptionParagraphs: elementExampleInit.descriptionParagraphs ?? [],
                    errors: [
                        alreadyTakenElementExampleNames.has(elementExampleInit.title) &&
                            new Error(
                                `Example title '${elementExampleInit.title}' in page '${pageInit.title}' is already taken.`,
                            ),
                    ].filter(check.isTruthy),
                };
                alreadyTakenElementExampleNames.add(elementExampleInit.title);

                page.elementExamples[titleToUrlBreadcrumb(newExample.title)] = newExample as Values<
                    (typeof page)['elementExamples']
                >;
            },
        });
    }

    return page;
}
