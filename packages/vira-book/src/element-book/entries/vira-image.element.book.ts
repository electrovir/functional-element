import {randomString} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {CSSResult, TemplateResult, css, html, listen} from 'element-vir';
import {LoaderAnimated24Icon, StatusFailure24Icon, ViraIcon, ViraImage} from 'vira';
import {elementsBookPage} from '../elements.book.js';

export const viraImageBookPage = defineBookPage({
    title: ViraImage.tagName,
    parent: elementsBookPage,
    descriptionParagraphs: [
        'An `<img>` element wrapper that handles size constraints and includes slots for loading and error indicators.',
        'Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on this to control the size of the loader and error slots.',
    ],
    defineExamples({defineExample}) {
        const examples: ReadonlyArray<{
            title: string;
            inputs: typeof ViraImage.inputsType;
            loadingSlot?: TemplateResult;
            errorSlot?: TemplateResult;
            styles?: CSSResult;
            allowReload?: boolean;
        }> = [
            {
                title: 'simple image',
                inputs: {imageUrl: '/bolt.png'},
            },
            {
                title: 'infinite loading',
                inputs: {imageUrl: '/bolt.png', _debugLoadDelay: {milliseconds: Infinity}},
            },
            {
                title: 'custom loading',
                inputs: {imageUrl: '/bolt.png', _debugLoadDelay: {milliseconds: Infinity}},
                styles: css`
                    border-radius: 32px;
                `,
                loadingSlot: html`
                    <div
                        style=${css`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${ViraIcon.assign({
                            icon: LoaderAnimated24Icon,
                            fitContainer: true,
                        })}
                            style=${css`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${ViraIcon}>
                    </div>
                `,
            },
            {
                title: 'invalid',
                inputs: {imageUrl: '/invalid-image.png'},
            },
            {
                title: 'custom invalid',
                inputs: {imageUrl: '/invalid-image.png'},
                styles: css`
                    border-radius: 32px;
                `,
                errorSlot: html`
                    <div
                        style=${css`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${ViraIcon.assign({
                            icon: StatusFailure24Icon,
                            fitContainer: true,
                        })}
                            style=${css`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${ViraIcon}>
                    </div>
                `,
            },
            {
                title: 'disproportionate dimensions',
                inputs: {imageUrl: '/bolt.png'},
                styles: css`
                    width: 25px;
                    height: 200px;
                `,
            },
            {
                title: 'dominant height',
                inputs: {imageUrl: '/bolt.png', dominantDimension: 'height'},
                styles: css`
                    width: 25px;
                    height: 200px;
                `,
            },
            {
                title: 'long loading',
                inputs: {
                    imageUrl: '/bolt.png',
                    _debugLoadDelay: {milliseconds: 2000},
                },
                styles: css`
                    border-radius: 32px;
                `,
                allowReload: true,
                loadingSlot: html`
                    <div
                        style=${css`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #f0faff;
                            color: #0055ff;
                        `}
                    >
                        <${ViraIcon.assign({
                            icon: LoaderAnimated24Icon,
                            fitContainer: true,
                        })}
                            style=${css`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${ViraIcon}>
                    </div>
                `,
                errorSlot: html`
                    <div
                        style=${css`
                            height: 100%;
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #fffaf0;
                            color: #ff5500;
                        `}
                    >
                        <${ViraIcon.assign({
                            icon: StatusFailure24Icon,
                            fitContainer: true,
                        })}
                            style=${css`
                                height: 50%;
                                width: 50%;
                            `}
                        ></${ViraIcon}>
                    </div>
                `,
            },
        ];

        examples.forEach((example) => {
            defineExample({
                title: example.title,
                styles: css`
                    ${ViraImage} {
                        border: 1px solid #ccc;
                        height: 200px;
                        width: 200px;
                        ${example.styles || css``}
                    }

                    ${example.allowReload
                        ? css`
                              ${ViraImage} {
                                  cursor: pointer;
                              }

                              ${ViraImage}:hover {
                                  border-color: #0055ff;
                              }
                          `
                        : css``}

                    .slot-wrapper {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                `,
                stateInitStatic: {
                    imageUrl: example.inputs.imageUrl,
                },
                render({state, updateState}) {
                    return html`
                        <${ViraImage.assign({
                            ...example.inputs,
                            imageUrl: state.imageUrl,
                        })}
                            ${listen('click', () => {
                                if (!example.allowReload) {
                                    return;
                                }

                                updateState({
                                    imageUrl: `${example.inputs.imageUrl}?di=${randomString()}`,
                                });
                            })}
                        >
                            ${example.loadingSlot
                                ? html`
                                      <div class="slot-wrapper" slot=${ViraImage.slotNames.loading}>
                                          ${example.loadingSlot}
                                      </div>
                                  `
                                : ''}${example.errorSlot
                                ? html`
                                      <div class="slot-wrapper" slot=${ViraImage.slotNames.error}>
                                          ${example.errorSlot}
                                      </div>
                                  `
                                : ''}
                        </${ViraImage}>
                    `;
                },
            });
        });
    },
});
