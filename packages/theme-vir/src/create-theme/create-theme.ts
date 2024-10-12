import {mergeDeep} from '@augment-vir/common';
import {defineThemeElements} from './define-theme-elements.js';
import {Theme} from './theme.js';
import {AllThemeOptions, ThemeOptions, createDefaultThemeOptions} from './theme-options.js';

export function createTheme<TagPrefix extends string>(
    options: ThemeOptions<TagPrefix>,
): Theme<TagPrefix> {
    const fullOptions = mergeDeep<AllThemeOptions<TagPrefix>>(createDefaultThemeOptions(), options);

    return {
        elements: defineThemeElements(fullOptions),
    };
}
