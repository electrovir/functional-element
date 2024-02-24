import {mergeDeep} from '@augment-vir/common';
import {defineThemeElements} from './define-theme-elements';
import {Theme} from './theme';
import {AllThemeOptions, ThemeOptions, createDefaultThemeOptions} from './theme-options';

export function createTheme<TagPrefix extends string>(
    options: ThemeOptions<TagPrefix>,
): Theme<TagPrefix> {
    const fullOptions = mergeDeep<AllThemeOptions<TagPrefix>>(createDefaultThemeOptions(), options);

    return {
        elements: defineThemeElements(fullOptions),
    };
}
