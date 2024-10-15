import {defineElementNoInputs, html, listen} from '../index.js';

export const MyWithUpdateState = defineElementNoInputs({
    tagName: 'my-with-update-state',
    stateInitStatic: {
        username: 'dev',
        /**
         * Use "as" to create state properties that can be types other than the initial value's
         * type. This is particularly useful when, as below, the initial value is undefined.
         */
        email: undefined as string | undefined,
    },
    render({state, updateState}) {
        return html`
            <span
                ${listen('click', () => {
                    updateState({username: 'new name!'});
                })}
            >
                Hello there ${state.username}!
            </span>
        `;
    },
});
