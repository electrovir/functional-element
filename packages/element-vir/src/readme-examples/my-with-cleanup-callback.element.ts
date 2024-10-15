import {defineElementNoInputs, html} from '../index.js';

export const MyWithAssignmentCleanupCallback = defineElementNoInputs({
    tagName: 'my-with-cleanup-callback',
    stateInitStatic: {
        intervalId: undefined as undefined | number,
    },
    init: ({updateState}) => {
        updateState({
            intervalId: window.setInterval(() => console.info('hi'), 1000),
        });
    },
    render() {
        return html`
            <h1>My App</h1>
        `;
    },
    cleanup: ({state, updateState}) => {
        window.clearInterval(state.intervalId);
        updateState({
            intervalId: undefined,
        });
    },
});
