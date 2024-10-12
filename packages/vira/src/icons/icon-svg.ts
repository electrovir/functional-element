import {getObjectTypedKeys} from '@augment-vir/common';
import {TemplateResult, html} from 'element-vir';
import {getAssertedValidColor} from '../styles/color.js';
import {viraIconCssVars} from './icon-css-vars.js';

export type ViraIconSvg = {
    name: string;
    svgTemplate: TemplateResult;
};

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
