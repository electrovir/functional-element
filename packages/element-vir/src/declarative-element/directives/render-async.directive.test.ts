import {assert, waitUntil} from '@augment-vir/assert';
import {DeferredPromise} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {extractElementText} from '@augment-vir/web';
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

        const deferredPromise = new DeferredPromise<number>();

        const instance = await testWeb.render(html`
            <${elementWithAsyncProp.assign({setAsyncProp: deferredPromise.promise})}
                ${listen(elementWithAsyncProp.events.previousAsyncProp, (event) => {
                    allAsyncValues.push(event.detail);
                })}
            ></${elementWithAsyncProp}>
        `);
        assert.instanceOf(instance, elementWithAsyncProp);
        assert.isLengthExactly(allAsyncValues, 1);
        assert.instanceOf(allAsyncValues[0], Promise);

        // wait for the event to propagate
        await waitUntil(() => allAsyncValues.length === 1);

        assert.isLengthExactly(allAsyncValues, 1);

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
                assert.tsType(state.asyncProp.value).equals<AsyncValue<SomethingObject>>();
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

        assert.strictEquals(extractElementText(instance), 'Loading...');

        deferredPromise.resolve(randomValue);

        // wait for the event to propagate
        await waitUntil(() => allAsyncValues.length > 1);

        assert.strictEquals(extractElementText(instance), `Got ${randomValue.toFixed()}`);
    });
});
