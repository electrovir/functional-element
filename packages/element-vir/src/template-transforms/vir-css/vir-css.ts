import {css as litCss} from 'lit';
import {CSSResult, CSSResultGroup} from '../../lit-exports/all-lit-exports.js';
import {MinimalElementDefinition} from '../minimal-element-definition.js';
import {getTransformedTemplate} from '../transform-template.js';
import {transformCssTemplate} from './css-transform.js';

export function css(
    inputTemplateStrings: TemplateStringsArray,
    ...inputValues: (number | CSSResultGroup | MinimalElementDefinition | CSSResult)[]
): CSSResult {
    const transformedTemplate = getTransformedTemplate(inputTemplateStrings, inputValues, () => {
        return transformCssTemplate(inputTemplateStrings, inputValues);
    });

    const cssResult = litCss(
        transformedTemplate.strings,
        /** The filter will remove the DeclarativeElement elements */
        ...(transformedTemplate.values as (number | CSSResultGroup)[]),
    );
    return cssResult;
}
