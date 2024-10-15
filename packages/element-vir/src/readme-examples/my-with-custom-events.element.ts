import {randomInteger} from '@augment-vir/common';
import {defineElementNoInputs, html, listen} from '../index.js';
import {MyCustomActionEvent} from './my-custom-action.event.js';

export const MyWithCustomEvents = defineElementNoInputs({
    tagName: 'my-with-custom-events',
    render({dispatch}) {
        return html`
            <div
                ${listen(MyCustomActionEvent, (event) => {
                    console.info(`Got a number! ${event.detail}`);
                })}
            >
                <div
                    ${listen('click', () => {
                        dispatch(new MyCustomActionEvent(randomInteger({min: 0, max: 1_000_000})));
                    })}
                ></div>
            </div>
        `;
    },
});
