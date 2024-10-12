import {defineElementNoInputs, html, listen} from '../index.js';
import {MyWithEvents} from './my-with-events.element.js';

export const MyWithEventListening = defineElementNoInputs({
    tagName: 'my-with-event-listening',
    stateInitStatic: {
        myNumber: -1,
    },
    renderCallback({state, updateState}) {
        return html`
            <h1>My App</h1>
            <${MyWithEvents}
                ${listen(MyWithEvents.events.logoutClick, () => {
                    console.info('logout triggered');
                })}
                ${listen(MyWithEvents.events.randomNumber, (event) => {
                    updateState({myNumber: event.detail});
                })}
            ></${MyWithEvents}>
            <span>${state.myNumber}</span>
        `;
    },
});
