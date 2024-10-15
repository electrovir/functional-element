import {check} from '@augment-vir/assert';
import {getEnumValues, getObjectTypedEntries} from '@augment-vir/common';
import {defineBookPage, type BookPage} from 'element-book';
import {html} from 'element-vir';
import {HeadingLevel} from '../create-theme/theme-options.js';
import {Theme} from '../create-theme/theme.js';

export function createThemeBookPages<TagName extends string>(
    theme: Readonly<Theme<TagName>>,
): ReadonlyArray<Readonly<BookPage>> {
    const elementsBookPage = defineBookPage({
        title: 'elements',
        parent: undefined,
    });

    const fontEntries = getObjectTypedEntries(theme.elements)
        .map(
            ([
                elementName,
                themeElement,
            ]) => {
                if (themeElement.tagName === theme.elements.heading.tagName) {
                    return undefined;
                }

                return defineBookPage({
                    title: themeElement.tagName,
                    parent: elementsBookPage,
                    defineExamples({defineExample}) {
                        defineExample({
                            title: 'bold',
                            render() {
                                return html`
                                    <${themeElement}>This is ${elementName}</${themeElement}>
                                `;
                            },
                        });
                    },
                });
            },
        )
        .filter(check.isTruthy);

    return [
        defineBookPage({
            title: theme.elements.heading.tagName,
            parent: elementsBookPage,
            defineExamples({defineExample}) {
                getEnumValues(HeadingLevel).forEach((headingLevel) => {
                    defineExample({
                        title: headingLevel,
                        render() {
                            return html`
                                <${theme.elements.heading.assign({
                                    headingLevel,
                                })}>
                                    This is heading ${headingLevel}
                                </${theme.elements.heading}>
                            `;
                        },
                    });
                });
            },
        }),
        ...fontEntries,
    ].sort((a, b) => a.title.localeCompare(b.title));
}
