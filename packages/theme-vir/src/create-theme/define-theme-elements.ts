import {getEnumValues, getObjectTypedValues, typedObjectFromEntries} from '@augment-vir/common';
import {
    css,
    defineElement,
    defineElementNoInputs,
    html,
    unsafeCSS,
    type HostClass,
} from 'element-vir';
import {createFontStyleCss} from './font-css.js';
import {AllThemeOptions, HeadingLevel} from './theme-options.js';
import {Theme} from './theme.js';

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
            render() {
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
            render() {
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
            render() {
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
            render() {
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

    const headingSelectors = unsafeCSS(getEnumValues(HeadingLevel).join(', '));
    return defineElement<{headingLevel: HeadingLevel}>()({
        tagName: headingTag,
        hostClasses: typedObjectFromEntries(
            getEnumValues(HeadingLevel).map(
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
        styles: ({hostClasses}) => {
            const hostClassValues = getObjectTypedValues(hostClasses) as HostClass[];

            return css`
                :host {
                    display: block;
                }

                ${unsafeCSS(
                    hostClassValues
                        .map((hostClass) => {
                            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
            `;
        },
        render({inputs}) {
            const headingTag = inputs.headingLevel;

            return html`
                <${headingTag}><slot></slot></${headingTag}>
            `;
        },
    });
}
