import {css as litCss} from 'lit';
import {CSSResult, CSSResultGroup} from '../../lit-exports/all-lit-exports.js';
import {MinimalElementDefinition} from '../minimal-element-definition.js';
import {getTransformedTemplate} from '../transform-template.js';
import {transformCssTemplate} from './css-transform.js';

/**
 * A template literal tag used to define styles for element definitions. In particular, this is used
 * for the `styles` property in an element definitions init object.
 *
 * For security reasons, only literal string or number values may be interpolated inside of this
 * taggedTemplate. To incorporate non-literal values, wrap the value in a call to `unsafeCSS`.
 *
 * @category Element Definition
 */
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
