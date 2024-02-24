import {
    getEnumTypedValues,
    getObjectTypedValues,
    typedObjectFromEntries,
} from '@augment-vir/common';
import {css, defineElement, defineElementNoInputs, html, unsafeCSS} from 'element-vir';
import {createFontStyleCss} from './font-css';
import {Theme} from './theme';
import {AllThemeOptions, HeadingLevel} from './theme-options';

export function defineThemeElements<TagPrefix extends string>(
    options: Pick<AllThemeOptions<TagPrefix>, 'elementTagPrefix' | 'font'>,
): Theme<TagPrefix>['elements'] {
    const themeElements: Theme<TagPrefix>['elements'] = {
        bold: defineElementNoInputs({
            tagName: `${options.elementTagPrefix}-b`,
            styles: css`
                :host {
                    display: inline;
                    ${createFontStyleCss(options.font.bold)}
                }

                b {
                    all: inherit;
                }
            `,
            renderCallback() {
                return html`
                    <b><slot></slot></b>
                `;
            },
        }),
        monospace: defineElementNoInputs({
            tagName: `${options.elementTagPrefix}-monospace`,
            styles: css`
                :host {
                    display: inline;
                    ${createFontStyleCss(options.font.monospace)}
                }
            `,
            renderCallback() {
                return html`
                    <slot></slot>
                `;
            },
        }),
        code: defineElementNoInputs({
            tagName: `${options.elementTagPrefix}-code`,
            styles: css`
                :host {
                    display: inline;
                    ${createFontStyleCss(options.font.monospace)}
                }
            `,
            renderCallback() {
                return html`
                    <code><slot></slot></code>
                `;
            },
        }),
        paragraph: defineElementNoInputs({
            tagName: `${options.elementTagPrefix}-p`,
            styles: css`
                :host {
                    display: block;
                    ${createFontStyleCss(options.font.bold)}
                }

                p {
                    all: inherit;
                }
            `,
            renderCallback() {
                return html`
                    <p><slot></slot></p>
                `;
            },
        }),
        heading: defineHeadingElement(options),
    };

    return themeElements;
}

function defineHeadingElement<TagPrefix extends string>(
    options: Pick<AllThemeOptions<TagPrefix>, 'elementTagPrefix' | 'font'>,
) {
    const headingTag = `${options.elementTagPrefix}-heading` as const;

    const headingSelectors = unsafeCSS(getEnumTypedValues(HeadingLevel).join(', '));
    return defineElement<{headingLevel: HeadingLevel}>()({
        tagName: headingTag,
        hostClasses: typedObjectFromEntries(
            getEnumTypedValues(HeadingLevel).map(
                (
                    headingLevel,
                ): [
                    `${TagPrefix}-heading-${string}`,
                    (params: {inputs: {headingLevel: HeadingLevel}}) => boolean,
                ] => {
                    return [
                        `${headingTag}-${headingLevel}`,
                        ({inputs}) => inputs.headingLevel === headingLevel,
                    ];
                },
            ),
        ),
        styles: ({hostClasses}) => css`
            :host {
                display: block;
            }

            ${unsafeCSS(
                getObjectTypedValues(hostClasses)
                    .map((hostClass) => {
                        const headingLevel = String(hostClass.name)
                            .split('-')
                            .slice(-1)[0]! as HeadingLevel;
                        return css`
                            ${hostClass.selector} {
                                ${createFontStyleCss(options.font.headings[headingLevel])}
                            }
                        `;
                    })
                    .join('\n'),
            )}

            ${headingSelectors} {
                all: inherit;
            }
        `,
        renderCallback({inputs}) {
            const headingTag = inputs.headingLevel;

            return html`
                <${headingTag}><slot></slot></${headingTag}>
            `;
        },
    });
}
