import {extractText} from '@augment-vir/browser-testing';
import {createDeferredPromiseWrapper} from '@augment-vir/common';
import {assert, fixture as render, waitUntil} from '@open-wc/testing';
import {assertInstanceOf, assertTypeOf} from 'run-time-assertions';
import {
    AsyncValue,
    asyncProp,
    defineElement,
    defineElementEvent,
    defineElementNoInputs,
    html,
    listen,
    renderAsync,
} from '../../index';

describe(asyncProp.name, () => {
    const elementWithAsyncProp = defineElement<{
        setAsyncProp: Promise<number>;
    }>()({
        tagName: 'element-with-async-prop',
        stateInitStatic: {
            myAsyncProp: asyncProp<number>(),
        },
        events: {
            previousAsyncProp: defineElementEvent<AsyncValue<number>>(),
        },
        renderCallback({state, inputs, dispatch, events}) {
            state.myAsyncProp.setValue(inputs.setAsyncProp);

            dispatch(new events.previousAsyncProp(state.myAsyncProp.value));

            return renderAsync(
                state.myAsyncProp,
                'Loading...',
                (value) => {
                    // return {what: 'hello'};
                    return html`
                        Got ${value.toFixed(0)}
                    `;
                },
                // (error) => error.message,
            );
        },
    });

    async function setupAsyncPropTest() {
        const allAsyncValues: AsyncValue<number>[] = [];

        const deferredPromise = createDeferredPromiseWrapper<number>();

        const instance = await render(html`
            <${elementWithAsyncProp.assign({setAsyncProp: deferredPromise.promise})}
                ${listen(elementWithAsyncProp.events.previousAsyncProp, (event) => {
                    allAsyncValues.push(event.detail);
                })}
            ></${elementWithAsyncProp}>
        `);
        assertInstanceOf(instance, elementWithAsyncProp);
        assert.lengthOf(allAsyncValues, 1);
        assert.instanceOf(allAsyncValues[0], Promise);

        // wait for the event to propagate
        await waitUntil(() => allAsyncValues.length === 1);

        assert.lengthOf(allAsyncValues, 1);

        return {allAsyncValues, instance, deferredPromise};
    }

    it('should have proper types', () => {
        type SomethingObject = {something: number};

        defineElementNoInputs({
            tagName: 'element-with-async-prop-again',
            stateInitStatic: {
                asyncProp: asyncProp<SomethingObject, any>(),
            },
            renderCallback({state}) {
                assertTypeOf(state.asyncProp.value).toEqualTypeOf<AsyncValue<SomethingObject>>();
                return html`
                    ${renderAsync(
                        state.asyncProp,
                        'Loading...',
                        (value: SomethingObject) => {
                            return html`
                                ${value.something}
                            `;
                        },
                        (error) => error.message,
                    )}
                `;
            },
        });
    });

    it('should render the resolution callback', async () => {
        const {instance, deferredPromise, allAsyncValues} = await setupAsyncPropTest();

        const randomValue = Math.random() * 100;

        assert.strictEqual(extractText(instance), 'Loading...');

        deferredPromise.resolve(randomValue);

        // wait for the event to propagate
        await waitUntil(() => allAsyncValues.length > 1);

        assert.strictEqual(extractText(instance), `Got ${randomValue.toFixed()}`);
    });
});
