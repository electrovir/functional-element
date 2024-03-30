import {defineElementEvent, defineElementNoInputs, html, listen} from '../index';

export const MyWithEvents = defineElementNoInputs({
    tagName: 'my-with-events',
    events: {
        logoutClick: defineElementEvent<void>(),
        randomNumber: defineElementEvent<number>(),
    },
    renderCallback({dispatch, events}) {
        return html`
            <button ${listen('click', () => dispatch(new events.logoutClick()))}>log out</button>
            <button ${listen('click', () => dispatch(new events.randomNumber(Math.random())))}>
                generate random number
            </button>
        `;
    },
});
