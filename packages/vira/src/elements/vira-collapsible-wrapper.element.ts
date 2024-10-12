import {css, defineElementEvent, html, listen, onResize} from 'element-vir';
import {noNativeFormStyles, viraAnimationDurations} from '../styles/index.js';
import {defineViraElement} from './define-vira-element.js';

export const ViraCollapsibleWrapper = defineViraElement<{expanded: boolean}>()({
    tagName: 'vira-collapsible-wrapper',
    hostClasses: {
        'vira-collapsible-wrapper-expanded': ({inputs}) => inputs.expanded,
    },
    slotNames: ['header'],
    styles: ({hostClasses}) => css`
        :host {
            display: flex;
            flex-direction: column;
        }

        .header-wrapper {
            ${noNativeFormStyles};
            cursor: pointer;
        }

        .content-wrapper,
        .collapsing-element {
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        }

        .collapsing-element {
            transition: height ${viraAnimationDurations['vira-pretty-animation-duration'].value};
            overflow: hidden;
        }
        ${hostClasses['vira-collapsible-wrapper-expanded'].name} .collapsing-element {
            pointer-events: none;
        }
    `,
    events: {
        expandChange: defineElementEvent<boolean>(),
    },
    stateInitStatic: {
        contentHeight: 0,
    },
    renderCallback({state, slotNames, updateState, dispatch, events, inputs}) {
        const collapsingStyles = inputs.expanded
            ? css`
                  height: ${state.contentHeight}px;
              `
            : css`
                  height: 0;
              `;

        return html`
            <button
                class="header-wrapper"
                ${listen('click', () => {
                    dispatch(new events.expandChange(!inputs.expanded));
                })}
            >
                <slot name=${slotNames.header}>Header</slot>
            </button>
            <div class="collapsing-element" style=${collapsingStyles} disabled="disabled">
                <div
                    ${onResize(({contentRect}) => {
                        updateState({contentHeight: contentRect.height});
                    })}
                    class="content-wrapper"
                >
                    <slot></slot>
                </div>
            </div>
        `;
    },
});
