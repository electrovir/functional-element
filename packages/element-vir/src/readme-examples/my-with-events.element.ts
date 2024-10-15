import {randomInteger} from '@augment-vir/common';
import {defineElementEvent, defineElementNoInputs, html, listen} from '../index.js';

export const MyWithEvents = defineElementNoInputs({
    tagName: 'my-with-events',
    events: {
        logoutClick: defineElementEvent<void>(),
        randomNumber: defineElementEvent<number>(),
    },
    render({dispatch, events}) {
        return html`
            <button ${listen('click', () => dispatch(new events.logoutClick()))}>log out</button>
            <button
                ${listen('click', () =>
                    dispatch(new events.randomNumber(randomInteger({min: 0, max: 1_000_000}))),
                )}
            >
                generate random number
            </button>
        `;
    },
});
