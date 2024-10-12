import {randomString} from '@augment-vir/common';
import {css, defineElement, defineElementEvent, html, listen, onDomCreated} from 'element-vir';
import {MyCustomEvent} from './customEvent.js';

export const TestChildElement = defineElement<{
    width: number;
    displayNumber: number;
    myProp?: number;
}>()({
    tagName: 'element-vir-test-child',
    styles: ({hostClasses, cssVars}) => {
        return css`
            :host {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
            }

            span {
                background-color: ${cssVars['element-vir-test-child-derp'].value};
            }

            ${hostClasses['element-vir-test-child-test'].selector} {
                color: blue;
            }

            :host(.${hostClasses['element-vir-test-child-test'].name}:hover) {
                color: pink;
            }

            ${hostClasses['element-vir-test-child-automatic'].selector} {
                font-weight: bold;
            }
        `;
    },
    cssVars: {
        'element-vir-test-child-derp': 'white',
    },
    hostClasses: {
        'element-vir-test-child-test': false,
        'element-vir-test-child-automatic': ({inputs}) => inputs.displayNumber === 15,
    },
    stateInitStatic: {
        button: undefined as undefined | HTMLButtonElement,
    },
    events: {
        speak: defineElementEvent<string>(),
        eat: defineElementEvent<number>(),
    },
    renderCallback({state, inputs, dispatch, updateState, events}) {
        // log here to make sure it's not rendering too often
        console.info('child rendering');
        return html`
            <span>Child ${inputs.myProp}</span>
            <span>width: ${inputs.width}</span>
            <span>input number: ${inputs.displayNumber}</span>
            <button
                ${onDomCreated((element) => {
                    if (element instanceof HTMLButtonElement) {
                        updateState({button: element});
                    } else {
                        console.error(element);
                        throw new Error(`obtained element is not a button!`);
                    }
                })}
                ${listen('click', () => {
                    dispatch(new events.speak(randomString()));
                })}
            >
                emit speak event
            </button>
            <button ${listen('click', () => dispatch(new MyCustomEvent(5)))}>
                emit custom event (logged to console)
            </button>
            <span>button handle: ${state.button?.tagName}</span>
        `;
    },
});
