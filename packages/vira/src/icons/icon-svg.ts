import {getObjectTypedKeys} from '@augment-vir/common';
import {TemplateResult, html} from 'element-vir';
import {getAssertedValidColor} from '../styles/color.js';
import {viraIconCssVars} from './icon-css-vars.js';

/**
 * An individual Vira icon SVG definition.
 *
 * @category Icon
 */
export type ViraIconSvg = {
    name: string;
    svgTemplate: TemplateResult;
};

/**
 * A function used to define an individual Vira icon SVG.
 *
 * @category Icon
 */
export function defineIcon({
    name,
    svgTemplate,
}: {
    name: string;
    svgTemplate: TemplateResult;
}): ViraIconSvg {
    const iconSvg: ViraIconSvg = {
        name,
        svgTemplate,
    };

    return iconSvg;
}

/**
 * Wraps an existing icon with a specific color and outputs another icon that can be used anywhere
 * the original icon can be used.
 *
 * @category Icon
 */
export function createColoredIcon(
    icon: ViraIconSvg,
    colors: Partial<Record<keyof typeof viraIconCssVars, string>>,
): ViraIconSvg {
    const colorStyles = getObjectTypedKeys(colors)
        .map((cssVarName) => {
            const colorValue = colors[cssVarName];
            const color = getAssertedValidColor(colorValue);
            return `${viraIconCssVars[cssVarName].name}: ${color.toString()};`;
        })
        .join(' ');

    return defineIcon({
        name: icon.name,
        svgTemplate: html`
            <div style=${colorStyles}>${icon.svgTemplate}</div>
        `,
    });
}
