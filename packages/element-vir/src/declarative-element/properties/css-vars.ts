import {Values} from '@augment-vir/common';
import {CssVarDefinitions, CssVarsSetup} from 'lit-css-vars';
import {CustomElementTagName} from '../custom-tag-name.js';
import {BaseCssPropertyName} from './css-properties.js';

/**
 * Base type for a declarative element definition's CSS vars.
 *
 * @category Internal
 */
export type CssVarsInitMap<
    ElementTagName extends CustomElementTagName,
    CssVarKeys extends BaseCssPropertyName<ElementTagName>,
> = Readonly<Record<CssVarKeys, Values<CssVarsSetup>>>;

/**
 * CSS vars ready for use within a declarative element's `render` or `styles` method.
 *
 * @category Internal
 */
export type CssVars<
    ElementTagName extends CustomElementTagName,
    CssVarKeys extends BaseCssPropertyName<ElementTagName>,
> = CssVarDefinitions<CssVarsInitMap<ElementTagName, CssVarKeys>>;
