import {PartialWithUndefined} from '@augment-vir/common';
import {RequireExactlyOne} from 'type-fest';
import type {BookPage} from '../../../data/book-entry/book-page/book-page.js';
import {GlobalValues} from './global-values.js';

/**
 * Full configuration for an element-book app.
 *
 * @category Type
 */
export type ElementBookConfig = {
    /** All element-book pages in order. */
    pages: ReadonlyArray<BookPage>;
} & PartialWithUndefined<OptionalConfig>;

type OptionalConfig = {
    /** The base theme color from which all other element-book colors will be generated from. */
    themeColor: string;
    _debug: boolean;
    globalValues: GlobalValues;
    preventWindowTitleChange: boolean;
} & RequireExactlyOne<{
    /**
     * Set this internal router config if element-book is intended to be the current website's
     * entire web app. Meaning, you're not embedded element-book within another website.
     *
     * In this case, element-book will create its own internal router for managing the URL. In other
     * cases, when element-book is embedded in another website, use the elementBookRoutePaths input
     * property instead.
     */
    internalRouterConfig: {
        useInternalRouter: true;
        /**
         * Path to this page, used for routing. For example, if this page is hosted at
         * www.example.org/my-page then this value should be `my-page`.
         */
        basePath?: string | undefined;
    };
    /**
     * Current route paths for element-book to handle. These are intended to come from a router
     * that's external to the element-book app itself.
     */
    elementBookRoutePaths: ReadonlyArray<string>;
}>;
