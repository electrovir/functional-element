/* eslint-disable @typescript-eslint/no-unused-vars */

import {CSSResultGroup} from '../../lit-exports/all-lit-exports.js';
import {MinimalElementDefinition, hasTagName} from '../minimal-element-definition.js';
import {TemplateTransform} from '../template-transform-type.js';
import {ValueTransformCallback, transformTemplate} from '../transform-template.js';

function transformCss(
    ...[
        lastNewString,
        currentLitString,
        currentValue,
    ]: Parameters<ValueTransformCallback>
): ReturnType<ValueTransformCallback> {
    if (!hasTagName(currentValue)) {
        return undefined;
    }

    return {
        replacement: currentValue.tagName,
        getExtraValues: undefined,
    };
}

export function transformCssTemplate(
    inputTemplateStrings: TemplateStringsArray,
    inputValues: (number | CSSResultGroup | MinimalElementDefinition)[],
): TemplateTransform {
    return transformTemplate(inputTemplateStrings, inputValues, transformCss);
}
