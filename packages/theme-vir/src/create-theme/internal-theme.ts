import {ThemeOptions} from './theme-options.js';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export type InternalTheme = {};

export function createInternalTheme<TagPrefix extends string>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    options: ThemeOptions<TagPrefix>,
): InternalTheme {
    return {};
}
