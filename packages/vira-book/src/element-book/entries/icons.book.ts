import {addPx} from '@augment-vir/common';
import {BookPageControlType, defineBookPage, definePageControl} from 'element-book';
import {css, html, unsafeCSS} from 'element-vir';
import {ViraIcon, allIconsByName, viraBorders, viraIconCssVars} from 'vira';

export const iconsBookPage = defineBookPage({
    title: 'Icons',
    parent: undefined,
    controls: {
        'Stroke Color': definePageControl({
            controlType: BookPageControlType.Color,
            initValue: '',
        }),
        'Fill Color': definePageControl({
            controlType: BookPageControlType.Color,
            initValue: '',
        }),
        'Stroke Width': definePageControl({
            controlType: BookPageControlType.Number,
            initValue: 1,
        }),
    },
    defineExamples({defineExample}) {
        Object.values(allIconsByName).forEach((icon) => {
            defineExample({
                title: icon.name,
                styles: css`
                    :host(:hover) ${ViraIcon} {
                        background-color: #f2f2f2;
                    }

                    ${ViraIcon} {
                        padding: 8px;
                        border-radius: ${viraBorders['vira-form-input-radius'].value};
                    }
                `,
                render({controls}) {
                    const styles = css`
                        ${viraIconCssVars['vira-icon-fill-color'].name}: ${unsafeCSS(
                            controls['Fill Color'] || 'inherit',
                        )};
                        ${viraIconCssVars['vira-icon-stroke-color'].name}: ${unsafeCSS(
                            controls['Stroke Color'] || 'inherit',
                        )};
                        ${viraIconCssVars['vira-icon-stroke-width'].name}: ${unsafeCSS(
                            controls['Stroke Width'] ? addPx(controls['Stroke Width']) : 'inherit',
                        )};
                    `;

                    return html`
                        <${ViraIcon.assign({icon})} style=${styles}></${ViraIcon}>
                    `;
                },
            });
        });
    },
});
