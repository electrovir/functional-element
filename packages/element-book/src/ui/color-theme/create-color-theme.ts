import {PartialWithUndefined, mapObjectValues} from '@augment-vir/common';
import Color from 'colorjs.io';
import {CSSResult, unsafeCSS} from 'element-vir';
import {RequireExactlyOne} from 'type-fest';
import {NestedType} from '../../util/type.js';
import {ColorTheme} from './color-theme.js';

// as cast because colorjs.io's types for itself are wrong
type FixedColor = Color & {
    set: (input: Record<string, number>) => Color;
};

type NestedColors = NestedType<Color>;

type NestedColorsToCssResult<Colors extends Readonly<NestedColors>> = {
    [PropName in keyof Colors]: Colors[PropName] extends Color
        ? CSSResult
        : NestedColorsToCssResult<Exclude<Colors[PropName], Color>>;
};

function colorsObjectToCssResult<const Colors extends NestedColors>(
    colors: Colors,
): NestedColorsToCssResult<Colors> {
    return mapObjectValues(colors, (key, value) => {
        if (value instanceof Color) {
            return unsafeCSS(value.toString({format: 'hex'}));
        } else {
            return colorsObjectToCssResult(value);
        }
    }) as NestedColorsToCssResult<Colors>;
}

export const defaultThemeStartColor = 'dodgerblue';

type BackForeGroundColor = 'black' | 'white';

function calculateTextColorString(color: Color): BackForeGroundColor {
    const onWhite = Math.abs(color.contrast('white', 'APCA'));
    const onBlack = Math.abs(color.contrast('black', 'APCA'));
    const textColorString = onWhite > onBlack ? 'white' : 'black';
    return textColorString;
}

function createColorPair({
    background,
    foreground,
}: RequireExactlyOne<{background: Color; foreground: Color}>) {
    return {
        background: background ?? new Color(calculateTextColorString(foreground)),
        foreground: foreground ?? new Color(calculateTextColorString(background)),
    };
}

export enum ThemeStyle {
    Dark = 'dark',
    Light = 'light',
}

export type ThemeConfig = PartialWithUndefined<{
    themeColor: string;
    themeStyle: ThemeStyle;
}>;

function flipBackForeground(input: BackForeGroundColor): BackForeGroundColor {
    return input === 'black' ? 'white' : 'black';
}

const faintForegroundColors = {
    black: {
        foregroundFaint1: new Color('#ccc'),
        foregroundFaint2: new Color('#eee'),
    },
    white: {
        foregroundFaint1: new Color('#ccc'),
        foregroundFaint2: new Color('#eee'),
    },
} as const;

const faintBackgroundColors = {
    black: {
        backgroundFaint1: new Color('#666'),
        backgroundFaint2: new Color('#444'),
    },
    white: {
        backgroundFaint1: new Color('#ccc'),
        backgroundFaint2: new Color('#fafafa'),
    },
} as const;

export function createTheme({
    themeColor: inputThemeColor = defaultThemeStartColor,
    themeStyle = ThemeStyle.Light,
}: ThemeConfig = {}): ColorTheme {
    const themeColor = new Color(inputThemeColor) as FixedColor;
    const backgroundColor = new Color(themeStyle === ThemeStyle.Dark ? 'black' : 'white');
    const foregroundColorString = calculateTextColorString(backgroundColor);
    const foregroundColor = new Color(foregroundColorString);

    const colors = {
        nav: {
            hover: createColorPair({background: themeColor.clone().set({'hsl.l': 93})}),
            active: createColorPair({background: themeColor.clone().set({'hsl.l': 90})}),
            selected: createColorPair({background: themeColor.clone().set({'hsl.l': 85})}),
        },
        accent: {
            icon: themeColor.clone().set({'hsl.l': 40}),
        },
        page: {
            background: backgroundColor,
            ...faintBackgroundColors[flipBackForeground(foregroundColorString)],
            foreground: foregroundColor,
            ...faintForegroundColors[foregroundColorString],
        },
    } as const;

    const convertedToCssResults = colorsObjectToCssResult(colors);

    return convertedToCssResults;
}
