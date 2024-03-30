import {asyncProp, defineElement, html, listen, renderAsync} from '../index';

type EndpointData = number[];

async function loadSomething(endpoint: string): Promise<EndpointData> {
    // load something from the network
    const data = await (
        await fetch(
            [
                '',
                'api',
                endpoint,
            ].join('/'),
        )
    ).json();
    return data;
}

export const MyWithAsyncProp = defineElement<{endpoint: string}>()({
    tagName: 'my-with-async-prop',
    stateInitStatic: {
        data: asyncProp({
            async updateCallback({endpoint}: {endpoint: string}) {
                return loadSomething(endpoint);
            },
        }),
    },
    renderCallback({inputs, state}) {
        /**
         * This causes the a promise which automatically updates the state.data prop once the
         * promise resolves. It only creates a new promise if the first input, the trigger, value
         * changes from previous calls.
         */
        state.data.update(inputs);
        return html`
            Here's the data:
            <br />
            ${renderAsync(state.data, 'Loading...', (loadedData) => {
                return html`
                    Got the data: ${loadedData}
                `;
            })}
            <br />
            <button
                ${listen('click', () => {
                    /** You can force asyncProp to update by calling forceUpdate. */
                    state.data.forceUpdate(inputs);
                })}
            >
                Refresh
            </button>
        `;
    },
});
