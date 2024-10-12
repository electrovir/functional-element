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

export type DefineExampleCallback<
    GlobalValuesType extends GlobalValues = {},
    ControlsInit extends BookPageControlsInitBase = BookPageControlsInitBase,
> = <StateInit extends PropertyInitMapBase>(
    exampleInit: BookElementExampleInit<GlobalValuesType, ControlsInit, StateInit>,
) => void;

export type ElementExamplesDefiner<
    GlobalValuesType extends GlobalValues = {},
    ControlsInit extends BookPageControlsInitBase = BookPageControlsInitBase,
> = (params: {defineExample: DefineExampleCallback<GlobalValuesType, ControlsInit>}) => void;

type CollapseControlsInit<
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

type CollapseGlobalValuesType<
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
    elementExamplesCallback?:
        | ElementExamplesDefiner<
              CollapseGlobalValuesType<ParentPage, GlobalValuesType>,
              CollapseControlsInit<ParentPage, CurrentControlsInit>
          >
        | undefined;
};

/**
 * Allows insertion of the global values type to a page. This is not necessary if you aren't using
 * global values in your element-book instance.
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

    if (pageInit.elementExamplesCallback) {
        pageInit.elementExamplesCallback({
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
