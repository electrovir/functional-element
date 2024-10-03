import {check} from '@augment-vir/assert';
import {CSSResult} from 'element-vir';
import {SingleCssVarDefinition, defineCssVars, setCssVarValue} from 'lit-css-vars';
import {NestedType} from '../../util/type';

export type ColorPair = {background: CSSResult; foreground: CSSResult};

export type ColorTheme = {
    nav: {
        hover: ColorPair;
        active: ColorPair;
        selected: ColorPair;
    };
    accent: {
        icon: CSSResult;
    };
    page: ColorPair & {
        backgroundFaint1: CSSResult;
        backgroundFaint2: CSSResult;
        foregroundFaint1: CSSResult;
        foregroundFaint2: CSSResult;
    };
};

type CssResultToCssVar<StartingPoint> = {
    [PropName in keyof StartingPoint]: StartingPoint[PropName] extends CSSResult
        ? SingleCssVarDefinition
        : CssResultToCssVar<StartingPoint[PropName]>;
};

type ColorThemeCssVars = CssResultToCssVar<ColorTheme>;

export const colorThemeCssVars = defineCssVars({
    'element-book-nav-hover-background-color': 'magenta',
    'element-book-nav-hover-foreground-color': 'magenta',
    'element-book-nav-active-background-color': 'magenta',
    'element-book-nav-active-foreground-color': 'magenta',
    'element-book-nav-selected-background-color': 'magenta',
    'element-book-nav-selected-foreground-color': 'magenta',
    'element-book-accent-icon-color': 'magenta',
    'element-book-page-background-color': 'magenta',
    'element-book-page-background-faint-level-1-color': 'magenta',
    'element-book-page-background-faint-level-2-color': 'magenta',
    'element-book-page-foreground-color': 'magenta',
    'element-book-page-foreground-faint-level-1-color': 'magenta',
    'element-book-page-foreground-faint-level-2-color': 'magenta',
});

const colorThemeCssVarMapping: ColorThemeCssVars = {
    nav: {
        hover: {
            background: colorThemeCssVars['element-book-nav-hover-background-color'],
            foreground: colorThemeCssVars['element-book-nav-hover-foreground-color'],
        },
        active: {
            background: colorThemeCssVars['element-book-nav-active-background-color'],
            foreground: colorThemeCssVars['element-book-nav-active-foreground-color'],
        },
        selected: {
            background: colorThemeCssVars['element-book-nav-selected-background-color'],
            foreground: colorThemeCssVars['element-book-nav-selected-foreground-color'],
        },
    },
    accent: {
        icon: colorThemeCssVars['element-book-accent-icon-color'],
    },
    page: {
        background: colorThemeCssVars['element-book-page-background-color'],
        backgroundFaint1: colorThemeCssVars['element-book-page-background-faint-level-1-color'],
        backgroundFaint2: colorThemeCssVars['element-book-page-background-faint-level-2-color'],
        foreground: colorThemeCssVars['element-book-page-foreground-color'],
        foregroundFaint1: colorThemeCssVars['element-book-page-foreground-faint-level-1-color'],
        foregroundFaint2: colorThemeCssVars['element-book-page-foreground-faint-level-2-color'],
    },
};

export function setThemeCssVars(element: HTMLElement, theme: ColorTheme) {
    recursiveSetThemeCssVars(element, theme, colorThemeCssVarMapping);
}

function isCssResult(input: unknown): input is CSSResult {
    return check.hasKey(input, '_$cssResult$');
}

function isCssVarDefinition(input: unknown): input is SingleCssVarDefinition {
    return (
        check.hasKeys(input, [
            'name',
            'value',
            'default',
        ]) &&
        check.isString(input.default) &&
        isCssResult(input.name) &&
        isCssResult(input.value)
    );
}

function recursiveSetThemeCssVars(
    element: HTMLElement,
    nestedCssResult: NestedType<CSSResult>,
    nestedCssVars: NestedType<SingleCssVarDefinition>,
) {
    Object.entries(nestedCssResult).forEach(
        ([
            key,
            value,
        ]) => {
            const nestedCssVar = nestedCssVars[key];

            if (!nestedCssVar) {
                throw new Error(`no nestedCssVar at key '${key}'`);
            }

            if (isCssResult(value)) {
                if (!isCssVarDefinition(nestedCssVar)) {
                    throw new Error(`got a CSS result at '${key}' but no CSS var`);
                }

                setCssVarValue({
                    forCssVar: nestedCssVar,
                    onElement: element,
                    toValue: String(value),
                });
            } else {
                if (isCssVarDefinition(nestedCssVar)) {
                    throw new Error(`got no CSS result at '${key}' but did find a CSS var`);
                }
                recursiveSetThemeCssVars(element, value, nestedCssVar);
            }
        },
    );
}
