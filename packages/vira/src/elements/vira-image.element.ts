import {Dimensions, wait} from '@augment-vir/common';
import {Duration, DurationUnit} from 'date-vir';
import {classMap, css, defineElementEvent, html, listen, renderIf} from 'element-vir';
import {LoaderAnimated24Icon, StatusFailure24Icon} from '../icons/index.js';
import {defineViraElement} from './define-vira-element.js';
import {ViraIcon} from './vira-icon.element.js';

/**
 * An `<img>` element wrapper that handles size constraints and includes slots for loading and error
 * indicators.
 *
 * Use CSS properties to constrain the image. In particular, set `min-height` and `min-width` on
 * this to control the size of the loader and error slots.
 */
export const ViraImage = defineViraElement<{
    /** The URL of the image to load. This is passed directly to the `<img>` element. */
    imageUrl: string;
    /**
     * The dimension which should dominantly constrain the image size. Whichever dimension this is
     * set to is the dimension that the image will grow to match. This is only relevant if you apply
     * size constraints on ViraImage via CSS in its parent.
     *
     * @default 'width'
     */
    dominantDimension?: keyof Dimensions | undefined;
    /** For debugging only: artificially set a delay for the image loading so you can see the loader. */
    _debugLoadDelay?: Duration<DurationUnit.Milliseconds> | undefined;
}>()({
    tagName: 'vira-image',
    hostClasses: {
        'vira-image-height-constrained': ({inputs}) => inputs.dominantDimension === 'height',
    },
    slotNames: [
        'loading',
        'error',
    ],
    events: {
        imageLoad: defineElementEvent<void>(),
        imageError: defineElementEvent<unknown>(),
    },
    styles: ({hostClasses}) => css`
        :host {
            display: inline-flex;
            overflow: hidden;
            flex-direction: column;
            justify-content: center;
            position: relative;
            border-radius: inherit;
            min-height: 100px;
            min-width: 100px;
        }

        img {
            width: 100%;
            height: auto;
            flex-shrink: 0;
        }
        ${hostClasses['vira-image-height-constrained'].selector} {
            flex-direction: row;
        }

        ${hostClasses['vira-image-height-constrained'].selector} img {
            width: auto;
            height: 100%;
        }

        .status-wrapper {
            overflow: hidden;
            border-radius: inherit;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error {
            color: red;
        }

        .hidden {
            display: none;
        }
    `,
    stateInitStatic: {
        /**
         * To avoid race conditions between `<img>` element events and potential input changing,
         * save the loaded state of an URL's image by the image's URL.
         */
        loadedUrls: {} as Readonly<{[url: string]: true}>,
        /**
         * To avoid race conditions between `<img>` element events and potential input changing,
         * save the errored state of an URL's image by the image's URL.
         */
        erroredUrls: {} as Readonly<{[url: string]: true}>,
    },
    render({inputs, state, updateState, dispatch, events, slotNames}) {
        /**
         * Saved off for use in the image listeners. This is used to eliminate race conditions
         * between image events and the input URL changing.
         */
        const imageUrl = inputs.imageUrl;

        const statusTemplate = state.erroredUrls[imageUrl]
            ? html`
                  <slot class="status-wrapper" name=${slotNames.error}>
                      <${ViraIcon.assign({icon: StatusFailure24Icon})} class="error"></${ViraIcon}>
                  </slot>
              `
            : state.loadedUrls[imageUrl]
              ? undefined
              : html`
                    <slot class="status-wrapper" name=${slotNames.loading}>
                        <${ViraIcon.assign({icon: LoaderAnimated24Icon})}></${ViraIcon}>
                    </slot>
                `;

        return html`
            ${renderIf(!!statusTemplate, statusTemplate)}
            <img
                class=${classMap({
                    hidden: !!statusTemplate,
                })}
                ${listen('load', async () => {
                    if (inputs._debugLoadDelay) {
                        await wait(inputs._debugLoadDelay);
                    }

                    updateState({
                        loadedUrls: {
                            ...state.loadedUrls,
                            [imageUrl]: true,
                        },
                    });

                    dispatch(new events.imageLoad());
                })}
                ${listen('error', async (event) => {
                    if (inputs._debugLoadDelay) {
                        await wait(inputs._debugLoadDelay);
                    }
                    updateState({
                        erroredUrls: {
                            ...state.erroredUrls,
                            [imageUrl]: true,
                        },
                    });

                    dispatch(new events.imageError(event.error));
                })}
                src=${imageUrl}
            />
        `;
    },
});
