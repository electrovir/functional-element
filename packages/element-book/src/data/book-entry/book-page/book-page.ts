/* eslint-disable @typescript-eslint/no-empty-object-type */

import {Overwrite, SetOptionalAndNullable} from '@augment-vir/common';
import {
    CSSResult,
    HtmlInterpolation,
    PropertyInitMapBase,
    RenderParams,
    TypedEvent,
} from 'element-vir';
import {GlobalValues} from '../../../ui/elements/element-book-app/global-values.js';
import {BaseBookEntry} from '../base-book-entry.js';
import {BookEntryType} from '../book-entry-type.js';
import {BookPageControlsInitBase, ControlsToValues} from './book-page-controls.js';

/**
 * An individual element-book page.
 *
 * @category Type
 */
export type BookPage<
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    GlobalValuesType extends GlobalValues = {},
    ParentPage extends BookPage | undefined = any,
    ControlsInit extends BookPageControlsInitBase = BookPageControlsInitBase,
> = Overwrite<
    BaseBookEntry,
    {
        /**
         * The parent page of this page. If this page is meant to be at the top-level, set this to
         * `undefined`.
         */
        parent: ParentPage;
        entryType: BookEntryType.Page;
    }
> & {
    controls: ControlsInit;
    elementExamples: Record<string, BookElementExample>;
};

/**
 * All parameters required for rendering an element-book page.
 *
 * @category Internal
 */
export type BookPageExampleRenderParams<
    GlobalValuesType extends GlobalValues,
    ControlsInit extends BookPageControlsInitBase,
    StateInit extends PropertyInitMapBase,
> = Pick<RenderParams<any, any, StateInit, any, any, any, any>, 'state' | 'updateState'> & {
    controls: ControlsToValues<ControlsInit> & GlobalValuesType;
};

/**
 * An individual element example for an element-book page.
 *
 * @category Internal
 */
export type BookElementExample<
    GlobalValuesType extends GlobalValues = {},
    ControlsInit extends BookPageControlsInitBase = {},
    StateInit extends PropertyInitMapBase = {},
> = Overwrite<
    BaseBookEntry,
    {
        parent: BookPage | undefined;
        entryType: BookEntryType.ElementExample;
    } & {
        /** Initialize the state for this example. */
        stateInitStatic?: StateInit | undefined;
        /** Specify which events this example should intercept (so the user can see them). */
        showEvents?: ReadonlyArray<string | TypedEvent> | undefined;
        /**
         * Style the element example. You can even use the :host selector to style this specific
         * example's wrapper element!
         */
        styles?: CSSResult | undefined;
        /** Render the example. */
        render: (
            renderParams: BookPageExampleRenderParams<GlobalValuesType, ControlsInit, StateInit>,
        ) => HtmlInterpolation;
    }
>;

/**
 * The properties that are necessary to initialize an element example. Missing properties will be
 * filled in by the parent.
 *
 * @category Internal
 */
export type BookElementExampleInit<
    GlobalValuesType extends GlobalValues,
    Controls extends BookPageControlsInitBase,
    StateInit extends PropertyInitMapBase,
> = SetOptionalAndNullable<
    Omit<
        BookElementExample<GlobalValuesType, Controls, StateInit>,
        'entryType' | 'parent' | 'errors'
    >,
    'descriptionParagraphs'
>;
