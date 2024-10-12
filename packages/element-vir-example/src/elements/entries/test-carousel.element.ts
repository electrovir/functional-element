import {
    HtmlInterpolation,
    css,
    defineElement,
    defineElementNoInputs,
    html,
    onResize,
    unsafeCSS,
} from 'element-vir';
import {ViraIcon, defineIcon, hideScrollbars} from 'vira';

const templatesContainerClassName = 'templates-container';

const ArrowRight24Icon = defineIcon({
    name: 'ArrowRight24Icon',
    svgTemplate: html`
        <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke="black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path stroke-width="2" d="M5 12h14m-6 6 6-6m-6-6 6 6" />
        </svg>
    `,
});

export const TestCarouselWrapper = defineElementNoInputs({
    tagName: 'test-carousel-wrapper',
    styles: css`
        :host {
            display: flex;
            width: 500px;
            margin: 64px;
            border: 1px solid red;
        }
    `,
    renderCallback() {
        console.info('render');
        return html`
            <${TestCarousel.assign({
                enableAutomaticCycling: true,
                cycleIntervalMs: 1000,
                templates: new Array(500).fill(0).map(() => {
                    const styles = css`
                        display: flex;
                        height: 100px;
                        width: 100px;
                        margin: 16px;
                        border: 1px solid blue;
                        justify-content: center;
                        align-items: center;
                        border-radius: 12px;
                    `;

                    return html`
                        <${ViraIcon.assign({
                            icon: ArrowRight24Icon,
                        })}
                            style=${styles}
                        ></${ViraIcon}>
                    `;
                }),
            })}></${TestCarousel}>
        `;
    },
});

export const TestCarousel = defineElement<{
    /**
     * Templates for each item in the carousel. Can be anything: strings, numbers,
     * HTMLTemplateResult (recommended), or anything that has .toString().
     *
     * This is used instead of <slot> because this element needs to wrap each individual template.
     */
    templates: ReadonlyArray<HtmlInterpolation>;
    enableAutomaticCycling?: boolean;
    /** Number of milliseconds between each automatic cycling. Defaults to 4000. */
    cycleIntervalMs?: number;
}>()({
    tagName: 'test-carousel',
    cssVars: {
        'test-carousel-arrow-margin': '40px',
    },
    styles: ({cssVars}) => css`
        :host {
            display: block;
            position: relative;
            overflow-y: hidden;
            box-sizing: border-box;
            z-index: 0;
        }

        ${hideScrollbars(`.${templatesContainerClassName}`)}

        .${unsafeCSS(templatesContainerClassName)} {
            position: relative;
            display: flex;
            gap: 24px;
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            z-index: 9;
            overflow-y: hidden;
        }

        .template-wrapper {
            scroll-snap-align: center;
            /*
                Sometimes the edges clip just by a couple pixels, so account for that with the calc.
            */
            max-width: calc(100% - 2px);
        }

        .arrow {
            --background-degrees: 90deg;
            position: absolute;
            width: 100px;
            max-width: 20%;
            opacity: 1;
            transition: 500ms;
            top: 0;
            bottom: 0;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            z-index: 200;
            background: linear-gradient(
                var(--background-degrees),
                white 0%,
                rgba(255, 255, 255, 0.6) 30%,
                rgba(255, 255, 255, 0) 100%
            );
            will-change: visibility;
        }

        .arrow.right {
            justify-content: flex-end;
            --background-degrees: -90deg;
            left: unset;
            right: 0;
        }

        .arrow ${ViraIcon} {
            cursor: pointer;
            position: relative;
            z-index: 11;
            margin: 0 ${cssVars['test-carousel-arrow-margin'].value};
            box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.12);
            display: inline-flex;
            padding: 8px;
            border-radius: 50%;
            background-color: white;
        }

        .hidden {
            /*
                Don't use "opacity: 0" here, it causes super wacky bugs where the scrolling gets reset
                but only SOMETIMES. Refreshing repeatedly seems to eventually get it stuck.
            */
            /*visibility: hidden;*/
            /*
                I'm giving opacity a shot since we've moved the arrows to being absolutely
                positioned. Maybe that will help? If the carousel starts resetting its scroll
                position randomly for no apparent reason, try going back to using visibility. Note
                that transitions won't work anymore, so remove the transition duration that was
                added above in this same commit.
            */
            opacity: 0;
            pointer-events: none;
        }
    `,
    renderCallback({inputs}) {
        return html`
            <div>
                <div ${onResize(() => {})} class=${templatesContainerClassName}>
                    ${inputs.templates.map((template) => {
                        return html`
                            <div class="template-wrapper">${template}</div>
                        `;
                    })}
                </div>
            </div>
        `;
    },
});
