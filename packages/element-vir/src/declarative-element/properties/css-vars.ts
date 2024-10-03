import {Values} from '@augment-vir/common';
import {CssVarDefinitions, CssVarsSetup} from 'lit-css-vars';
import {CustomElementTagName} from '../custom-tag-name';
import {BaseCssPropertyName} from './css-properties';

export type CssVarsInitMap<
    ElementTagName extends CustomElementTagName,
    CssVarKeys extends BaseCssPropertyName<ElementTagName>,
> = Readonly<Record<CssVarKeys, Values<CssVarsSetup>>>;

export type CssVars<
    ElementTagName extends CustomElementTagName,
    CssVarKeys extends BaseCssPropertyName<ElementTagName>,
> = CssVarDefinitions<CssVarsInitMap<ElementTagName, CssVarKeys>>;
