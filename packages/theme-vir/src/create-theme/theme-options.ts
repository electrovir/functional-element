export enum HeadingLevel {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
}

export type FontSize = {pixels: number} | {ratio: number};

export type FontStyle = {
    weight: number;
    family: string;
    lineHeight: FontSize;
    size: FontSize;
};

export type RequiredThemeOptions<TagPrefix extends string> = {
    elementTagPrefix: TagPrefix;
};

export type OptionalThemeOptions = {
    font?: {
        default: FontStyle;
        bold: FontStyle;
        monospace: FontStyle;
        headings: Record<HeadingLevel, FontStyle>;
    };
    colors?: {
        error: string;
    };
};

export type ThemeOptions<TagPrefix extends string> = Required<RequiredThemeOptions<TagPrefix>> &
    Partial<OptionalThemeOptions>;

export type AllThemeOptions<TagPrefix extends string> = Required<RequiredThemeOptions<TagPrefix>> &
    Required<OptionalThemeOptions>;

export function createDefaultThemeOptions(): AllThemeOptions<any> {
    const defaultFont: FontStyle = {
        family: 'sans-serif',
        lineHeight: {ratio: 1.1},
        size: {pixels: 14},
        weight: 400,
    };

    const bold: FontStyle = {
        ...defaultFont,
        weight: 700,
    };

    const allThemeOptions: AllThemeOptions<string> = {
        elementTagPrefix: 'vir',
        colors: {
            error: 'red',
        },
        font: {
            default: defaultFont,
            bold,
            monospace: {
                ...defaultFont,
                family: 'monospace',
                size: {ratio: 1.2},
            },
            headings: {
                h1: {
                    ...bold,
                    size: {ratio: 2},
                },
                h2: {
                    ...bold,
                    size: {ratio: 1.5},
                },
                h3: {
                    ...bold,
                    size: {ratio: 1.17},
                },
                h4: {
                    ...bold,
                },
                h5: {
                    ...bold,
                    size: {ratio: 0.83},
                },
                h6: {
                    ...bold,
                    size: {ratio: 0.67},
                },
            },
        },
    };

    return allThemeOptions;
}
