import {html as litHtml} from 'lit';
import {HTMLTemplateResult} from '../../lit-exports/all-lit-exports';
import {getTransformedTemplate} from '../transform-template';
import {HtmlInterpolation} from './html-interpolation';
import {mapHtmlValues, transformHtmlTemplate} from './html-transform';

/**
 * Interprets a template literal as an HTML template which is lazily rendered to the DOM.
 *
 * Wraps lit-html's html tagged template and enables interpolations of
 * `DeclarativeElementDefinition` for tag names.
 */
export function html(
    inputTemplateStrings: TemplateStringsArray,
    ...inputValues: HtmlInterpolation[]
): HTMLTemplateResult {
    const mappedValues = mapHtmlValues(inputTemplateStrings, inputValues);

    const litTemplate = litHtml(inputTemplateStrings, ...mappedValues);
    const transformedTemplate = getTransformedTemplate(inputTemplateStrings, mappedValues, () => {
        return transformHtmlTemplate(litTemplate);
    });

    const htmlTemplate: HTMLTemplateResult = {
        ...litTemplate,
        strings: transformedTemplate.strings,
        values: transformedTemplate.values,
    };
    return htmlTemplate;
}