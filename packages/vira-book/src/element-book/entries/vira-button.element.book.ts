import {BookPageControlType, defineBookPage} from 'element-book';
import {CSSResult, css, html, unsafeCSS} from 'element-vir';
import {Options24Icon, ViraButton, ViraButtonStyle} from 'vira';
import {elementsBookPage} from '../elements.book.js';

export const viraButtonBookPage = defineBookPage({
    parent: elementsBookPage,
    title: ViraButton.tagName,
    descriptionParagraphs: [
        'Standard button element. All colors are customizable with CSS vars. Size is flexible. Press tab to see focus outlines!',
    ],
    controls: {
        'Primary color': {
            controlType: BookPageControlType.Color,
            initValue: ViraButton.cssVars['vira-button-primary-color'].default,
        },
        'Secondary color': {
            controlType: BookPageControlType.Color,
            initValue: ViraButton.cssVars['vira-button-secondary-color'].default,
        },
        'Hover color': {
            controlType: BookPageControlType.Color,
            initValue: ViraButton.cssVars['vira-button-primary-hover-color'].default,
        },
        'Active color': {
            controlType: BookPageControlType.Color,
            initValue: ViraButton.cssVars['vira-button-primary-active-color'].default,
        },
    },
    defineExamples({defineExample}) {
        function defineViraButtonExample({
            title,
            styles: inputStyles,
            inputs,
        }: {
            title: string;
            styles?: CSSResult;
            inputs?: Omit<(typeof ViraButton)['inputsType'], 'text'>;
        }) {
            const styles = inputStyles ?? css``;

            defineExample({
                title,
                styles,
                render({controls}) {
                    const styles = css`
                        ${ViraButton.cssVars['vira-button-primary-color'].name}: ${unsafeCSS(
                            controls['Primary color'] || 'inherit',
                        )};
                        ${ViraButton.cssVars['vira-button-secondary-color'].name}: ${unsafeCSS(
                            controls['Secondary color'] || 'inherit',
                        )};
                        ${ViraButton.cssVars['vira-button-primary-hover-color'].name}: ${unsafeCSS(
                            controls['Hover color'] || 'inherit',
                        )};
                        ${ViraButton.cssVars['vira-button-primary-active-color'].name}: ${unsafeCSS(
                            controls['Active color'] || 'inherit',
                        )};
                    `;

                    return html`
                        <${ViraButton.assign({
                            text: 'hello',
                            ...inputs,
                        })}
                            style=${styles}
                        ></${ViraButton}>
                    `;
                },
            });
        }

        defineViraButtonExample({title: 'basic'});
        defineViraButtonExample({title: 'with icon', inputs: {icon: Options24Icon}});
        defineViraButtonExample({
            title: 'outline',
            inputs: {
                buttonStyle: ViraButtonStyle.Outline,
            },
        });
        defineViraButtonExample({
            title: 'disabled',
            inputs: {
                disabled: true,
            },
        });
        defineViraButtonExample({
            title: 'custom width',
            styles: css`
                ${ViraButton} {
                    width: 100px;
                }
            `,
        });
        defineViraButtonExample({
            title: 'custom height',
            styles: css`
                ${ViraButton} {
                    height: 75px;
                }
            `,
        });

        defineExample({
            title: 'customized colors',
            styles: css`
                :host {
                    ${ViraButton.cssVars['vira-button-primary-color'].name}: pink;
                    ${ViraButton.cssVars['vira-button-secondary-color'].name}: purple;
                    ${ViraButton.cssVars['vira-button-primary-hover-color'].name}: orange;
                    ${ViraButton.cssVars['vira-button-primary-active-color'].name}: yellow;
                }
            `,
            render() {
                return html`
                    <${ViraButton.assign({
                        text: 'hello',
                    })}></${ViraButton}>
                `;
            },
        });
    },
});
