import {CSSResultGroup} from '../../lit-exports/all-lit-exports';
import {MinimalElementDefinition, hasTagName} from '../minimal-element-definition';
import {TemplateTransform} from '../template-transform-type';
import {ValueTransformCallback, transformTemplate} from '../transform-template';

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
