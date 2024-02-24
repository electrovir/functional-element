import {collapseWhiteSpace, getOrSet, isTruthy, safeMatch} from '@augment-vir/common';
import {isRunTimeType} from 'run-time-assertions';
import {assign} from '../../declarative-element/directives/assign.directive';
import {HTMLTemplateResult} from '../../lit-exports/all-lit-exports';
import {declarativeElementRequired} from '../../require-declarative-element';
import {
    MinimalElementDefinition,
    hasTagName,
    isMinimalDefinitionWithInputs,
} from '../minimal-element-definition';
import {TemplateTransform} from '../template-transform-type';
import {ValueTransformCallback, transformTemplate} from '../transform-template';
import {HtmlInterpolation} from './html-interpolation';
import {tagNameKeys} from './tag-name-keys';

export function mapHtmlValues(
    inputTemplateStrings: TemplateStringsArray,
    inputValues: HtmlInterpolation[],
): HtmlInterpolation[] {
    return inputValues.map((currentValue, currentValueIndex): HtmlInterpolation => {
        const lastString = inputTemplateStrings[currentValueIndex];
        const nextString = inputTemplateStrings[currentValueIndex + 1];

        if (lastString && nextString) {
            const {shouldHaveTagNameHere} = classifyValue(lastString, nextString);

            if (shouldHaveTagNameHere && isRunTimeType(currentValue, 'string')) {
                const replacement: MinimalElementDefinition = {
                    tagName: currentValue,
                    tagInterpolationKey: getOrSet(tagNameKeys, currentValue, () => {
                        return {tagName: currentValue};
                    }),
                };

                return replacement;
            }
        }

        return currentValue;
    });
}

function classifyValue(lastNewString: string, currentTemplateString: string) {
    const isOpeningTag =
        lastNewString.trim().endsWith('<') && !!currentTemplateString.match(/^[\s\n>]/);
    const isClosingTag =
        lastNewString?.trim().endsWith('</') && currentTemplateString.trim().startsWith('>');
    const shouldHaveTagNameHere: boolean = isOpeningTag || isClosingTag;

    return {
        isOpeningTag,
        shouldHaveTagNameHere,
    };
}

function transformHtml(
    ...[
        lastNewString,
        currentTemplateString,
        rawCurrentValue,
    ]: Parameters<ValueTransformCallback>
): ReturnType<ValueTransformCallback> {
    const currentValue = isMinimalDefinitionWithInputs(rawCurrentValue)
        ? rawCurrentValue.definition
        : rawCurrentValue;

    const {isOpeningTag, shouldHaveTagNameHere} = classifyValue(
        lastNewString,
        currentTemplateString,
    );
    const isTagNameWrapper = hasTagName(currentValue);

    if (isTagNameWrapper && shouldHaveTagNameHere && currentValue.tagInterpolationKey) {
        return {
            replacement: currentValue.tagName,
            getExtraValues: undefined,
        };
    }

    if (shouldHaveTagNameHere && !isTagNameWrapper) {
        console.error({
            lastNewString,
            currentTemplateString,
            currentValue,
        });
        throw new Error(
            `Got interpolated tag name but found no tag name on the given value: '${
                (currentValue as any)?.tagName ||
                (currentValue as any)?.prototype?.constructor?.name ||
                (currentValue as any)?.constructor?.name
            }'`,
        );
    }

    if (!shouldHaveTagNameHere || !isTagNameWrapper) {
        return undefined;
    }

    if (
        isOpeningTag &&
        currentValue.elementOptions &&
        !currentValue.elementOptions.ignoreUnsetInputs &&
        !isMinimalDefinitionWithInputs(rawCurrentValue)
    ) {
        throw new Error(`Missing inputs for '${currentValue.tagName}'`);
    }

    const replacement = currentValue.tagName;

    return {
        replacement,
        getExtraValues(extraValueCurrentValue) {
            const assignedInputs = isMinimalDefinitionWithInputs(extraValueCurrentValue)
                ? extraValueCurrentValue.inputs
                : undefined;

            return [
                isOpeningTag && assignedInputs ? assign(assignedInputs) : undefined,
            ].filter(isTruthy);
        },
    };
}

function extractCustomElementTags(input: string): string[] {
    const tagNameMatches = safeMatch(input, /<\/[\s\n]*[^\s\n><]+[\s\n]*>/g);
    return tagNameMatches.reduce((accum: string[], match) => {
        const tagName = collapseWhiteSpace(match.replace(/\n/g, ' ')).replace(/<\/|>/g, '');
        // custom elements always have a dash in them
        if (tagName.includes('-')) {
            return accum.concat(tagName);
        }
        return accum;
    }, []);
}

function stringValidator(input: string): void {
    if (declarativeElementRequired) {
        const customElementTagNames = extractCustomElementTags(input);
        if (customElementTagNames.length) {
            console.error(
                `Custom element tags must be interpolated from declarative elements: ${customElementTagNames.join(
                    ', ',
                )}`,
            );
        }
    }
}

export function transformHtmlTemplate(litTemplate: HTMLTemplateResult): TemplateTransform {
    return transformTemplate(
        litTemplate.strings,
        litTemplate.values,
        transformHtml,
        stringValidator,
    );
}
