import {mapObject} from 'augment-vir';
import {CSSResult, unsafeCSS} from 'lit';
import {toHtmlSafeWithTagName} from './tag-name';

export type CssVarsInitMap<CssVarKeys extends string> = Record<CssVarKeys, string>;

export type CssVarName<TagName extends string> = `--${TagName}-string`;

export type CssVarNameOrValueMap<CssVarKeys extends string> = Record<CssVarKeys, CSSResult>;

export function createCssVarNamesMap<TagName extends string, CssVarKeys extends string>(
    tagName: TagName,
    cssVarsInit: CssVarsInitMap<CssVarKeys> | undefined,
): CssVarNameOrValueMap<CssVarKeys> {
    if (cssVarsInit) {
        return mapObject(cssVarsInit, (key) => {
            return unsafeCSS(`--${toHtmlSafeWithTagName(tagName, String(key))}`);
        }) as CssVarNameOrValueMap<CssVarKeys>;
    } else {
        return {} as CssVarNameOrValueMap<CssVarKeys>;
    }
}

export function createCssVarValuesMap<CssVarKeys extends string>(
    cssVarInitMap: CssVarsInitMap<CssVarKeys> | undefined,
    cssVarNamesMap: CssVarNameOrValueMap<CssVarKeys>,
): CssVarNameOrValueMap<CssVarKeys> {
    if (!cssVarInitMap) {
        return {} as CssVarNameOrValueMap<CssVarKeys>;
    }

    return mapObject(cssVarInitMap, (key, fallbackValue) => {
        const name = cssVarNamesMap[key];
        return unsafeCSS(`var(${name}, ${fallbackValue})`);
    });
}