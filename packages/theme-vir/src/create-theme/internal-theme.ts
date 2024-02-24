import {ThemeOptions} from './theme-options';

export type InternalTheme = {};

export function createInternalTheme<TagPrefix extends string>(
    options: ThemeOptions<TagPrefix>,
): InternalTheme {
    return {};
}
