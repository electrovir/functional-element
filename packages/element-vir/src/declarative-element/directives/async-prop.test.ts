import {clickElement} from '@augment-vir/browser-testing';
import {
    DeferredPromiseWrapper,
    createDeferredPromiseWrapper,
    randomString,
    typedMap,
    wait,
    waitUntilTruthy,
} from '@augment-vir/common';
import {assert, fixture as renderFixture, waitUntil} from '@open-wc/testing';
import {isObservableBase} from 'observavir';
import {assertDefined, assertInstanceOf, assertThrows, assertTypeOf} from 'run-time-assertions';
import {html} from '../../template-transforms/vir-html/vir-html';
import {defineElement} from '../define-element';
import {defineElementNoInputs} from '../define-element-no-inputs';
import {defineElementEvent} from '../properties/element-events';
import {StaticElementPropertyDescriptor} from '../properties/element-properties';
import {ElementVirStateSetup, stateSetupKey} from '../properties/element-vir-state-setup';
import {AsyncProp, AsyncValue, asyncProp} from './async-prop';
import {isError, isResolved} from './is-resolved.directive';
import {listen} from './listen.directive';
import {renderAsync} from './render-async.directive';

describe(asyncProp.name, () => {
    it('should have proper types', () => {
        type Dimensions = {width: number; length: number};
        type TriggerType = {
            imageUrl: string;
            max?: Dimensions | undefined;
            min?: Dimensions | undefined;
            originalImageSize?: Dimensions | undefined;
        };
        type SomethingObject = {something: number};

        asyncProp({
            async updateCallback(trigger: {callback: number}) {
                return 'five';
            },
        });

        asyncProp({
            async updateCallback(trigger: {callback: () => number}) {
                return 'five';
            },
        });

        const elementWithAsyncProp = defineElementNoInputs({
            tagName: `element-with-async-prop-${randomString()}`,
            stateInitStatic: {
                myAsyncProp: asyncProp({
                    updateCallback(trigger: TriggerType) {
                        return Promise.resolve({something: 4});
                    },
                }),
                myAsyncPropAgain: asyncProp({
                    updateCallback(trigger: TriggerType & {hello: string; goodbye: number}) {
                        return Promise.resolve({something: 4});
                    },
                }),
                syncProp: {value: 'hi'},
            },
            renderCallback({state, updateState}) {
                updateState({
                    myAsyncProp: asyncProp({
                        updateCallback(trigger: TriggerType) {
                            return Promise.resolve({something: 4});
                        },
                    }),
                });
                const exampleTrigger = {} as TriggerType;

                state.myAsyncProp.update(exampleTrigger);
                state.myAsyncPropAgain.update({...exampleTrigger, goodbye: 4, hello: 'hi'});

                updateState({
                    syncProp: {
                        value: 'yo',
                        // @ts-expect-error
                        hello: 'yo',
                    },
                });

                state.myAsyncProp.update({
                    ...exampleTrigger,
                    // @ts-expect-error
                    hello: 'yo',
                });
                state.myAsyncPropAgain.update({...exampleTrigger, goodbye: 4, hello: 'hi'});

                updateState({
                    syncProp: {
                        value: 'yo',
                    },
                });

                state.myAsyncPropAgain.setValue(Promise.resolve({} as any));

                assertTypeOf(state.myAsyncProp.value).toEqualTypeOf<AsyncValue<SomethingObject>>();
                return html``;
            },
        });

        assertTypeOf(elementWithAsyncProp.stateInitStatic.myAsyncProp).toEqualTypeOf<
            StaticElementPropertyDescriptor<
                string,
                ElementVirStateSetup<AsyncProp<SomethingObject, TriggerType>>
            >
        >();

        assertTypeOf<
            (typeof elementWithAsyncProp)['stateType']['myAsyncProp']['value']
        >().toEqualTypeOf<AsyncValue<SomethingObject>>();

        assertTypeOf<
            (typeof elementWithAsyncProp)['instanceType']['instanceState']['myAsyncProp']['value']
        >().toEqualTypeOf<AsyncValue<SomethingObject>>();
    });

    it('passes isObservableBase', () => {
        const instance = asyncProp()[stateSetupKey]();
        assert.isTrue(isObservableBase(instance));
    });

    it('updates and resolves async prop createPromise and update', async () => {
        const startingNumber = 123;

        // render the element
        const deferredPromiseWrappers: DeferredPromiseWrapper<number>[] = [];
        let renderCount: number = 0;
        const circularReference = {derp: '' as any};
        circularReference.derp = circularReference;

        const ElementWithAsyncProp = defineElement<{
            promiseUpdateTrigger: number | undefined;
        }>()({
            tagName: `element-with-async-prop-${randomString()}`,
            stateInitStatic: {
                myAsyncProp: asyncProp({
                    updateCallback({newNumber}: {newNumber: number; circularReference: any}) {
                        const newDeferredPromise = createDeferredPromiseWrapper<typeof newNumber>();
                        deferredPromiseWrappers.push(newDeferredPromise);
                        return newDeferredPromise.promise;
                    },
                }),
            },
            renderCallback({inputs, state}) {
                state.myAsyncProp.update({
                    newNumber: inputs.promiseUpdateTrigger ?? startingNumber,
                    circularReference,
                });

                if (isResolved(state.myAsyncProp.value) && !isError(state.myAsyncProp.value)) {
                    assertTypeOf(state.myAsyncProp.value).toEqualTypeOf<number>();
                }

                renderCount++;

                return html`
                    <button
                        id="new-promise"
                        ${listen('click', () => {
                            const newDeferredPromise = createDeferredPromiseWrapper<number>();

                            state.myAsyncProp.setValue(newDeferredPromise.promise);

                            deferredPromiseWrappers.push(newDeferredPromise);
                        })}
                    >
                        New Promise
                    </button>
                    <button
                        id="force-update"
                        ${listen('click', () => {
                            state.myAsyncProp.forceUpdate({
                                newNumber: inputs.promiseUpdateTrigger ?? startingNumber,
                                circularReference,
                            });
                        })}
                    >
                        Force Update
                    </button>
                    <button
                        id="assign-resolved-value"
                        ${listen('click', () => {
                            state.myAsyncProp.setValue(1 + Math.random());
                        })}
                    >
                        Assign Resolved Value
                    </button>
                `;
            },
        });

        const instance = await renderFixture(html`
            <${ElementWithAsyncProp.assign({
                promiseUpdateTrigger: startingNumber,
            })}></${ElementWithAsyncProp}>
        `);

        // get elements
        assertInstanceOf(instance, ElementWithAsyncProp);
        const newPromiseButton = instance.shadowRoot.querySelector('#new-promise');
        const forceUpdateButton = instance.shadowRoot.querySelector('#force-update');
        const assignResolvedButton = instance.shadowRoot.querySelector('#assign-resolved-value');

        assert.isUndefined(instance.instanceState.myAsyncProp.lastResolvedValue);
        const initialPromise = instance.instanceState.myAsyncProp.value;

        assertDefined(newPromiseButton);
        assertDefined(forceUpdateButton);
        assertDefined(assignResolvedButton);

        // initial render
        assertDefined(deferredPromiseWrappers[0]);
        assert.lengthOf(deferredPromiseWrappers, 1);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);
        assert.strictEqual(renderCount, 1);

        // assign the same number to the input; the element should not re-render
        instance.assignInputs({
            promiseUpdateTrigger: startingNumber,
        });
        await assertThrows(
            async () => await waitUntil(() => renderCount === 2),
            undefined,
            'should not have rendered again',
        );

        assert.lengthOf(deferredPromiseWrappers, 1);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // assign a new number; the element should re-render
        instance.assignInputs({
            promiseUpdateTrigger: 2,
        });
        await waitUntil(() => renderCount === 2, 'Render count failed to reach 2');

        assert.lengthOf(deferredPromiseWrappers, 2);
        assertDefined(deferredPromiseWrappers[1]);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // resolve the promise; the element should re-render and the state should update
        const resolutionValue = 3;
        deferredPromiseWrappers[1].resolve(resolutionValue);

        await waitUntil(() => renderCount === 3, 'Render count failed to reach 3');
        const initialPromiseResult = await initialPromise;

        assert.lengthOf(deferredPromiseWrappers, 2);
        assert.strictEqual(instance.instanceState.myAsyncProp.value, resolutionValue);
        assert.strictEqual(initialPromiseResult, resolutionValue);
        assert.strictEqual(instance.instanceState.myAsyncProp.lastResolvedValue, resolutionValue);

        // assign a new input; element should re-render and create a new promise
        instance.assignInputs({
            promiseUpdateTrigger: 4,
        });
        await waitUntil(() => renderCount === 4, 'Render count failed to reach 4');

        assert.lengthOf(deferredPromiseWrappers, 3);
        assertDefined(deferredPromiseWrappers[2]);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // reject the error; element should re-render and update state
        const rejectionError = new Error('fake error');
        deferredPromiseWrappers[2].reject(rejectionError);

        await waitUntil(() => renderCount === 5, 'Render count failed to reach 5');

        assert.lengthOf(deferredPromiseWrappers, 3);
        assert.strictEqual(instance.instanceState.myAsyncProp.value, rejectionError);

        // force an update; element should re-render and update state
        await clickElement(forceUpdateButton);

        await waitUntil(() => renderCount === 6, 'Render count failed to reach 6');

        assert.lengthOf(deferredPromiseWrappers, 4);
        assertDefined(deferredPromiseWrappers[3]);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // assign a new promise; element should not re-render (because the last promise never finished settling) and update state
        await clickElement(newPromiseButton);

        assert.lengthOf(deferredPromiseWrappers, 5);
        assertDefined(deferredPromiseWrappers[4]);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // it shouldn't render after resolution of a previous promise
        deferredPromiseWrappers[3].resolve(5);

        await assertThrows(() => waitUntil(() => renderCount === 7));
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // should render after resolving the current promise
        const finalResolutionValue = 6;
        deferredPromiseWrappers[4].resolve(finalResolutionValue);

        await waitUntil(() => renderCount === 7, 'Render count failed to reach 7');
        assert.strictEqual(instance.instanceState.myAsyncProp.value, finalResolutionValue);

        // assign an already resolved value; element should update once and immediately use the resolved value
        await clickElement(assignResolvedButton);

        assert.lengthOf(
            deferredPromiseWrappers,
            5,
            'no new deferred promises should have been created',
        );
        assert.typeOf(instance.instanceState.myAsyncProp.value, 'number');
    });

    it('resolves to an error if one is thrown', async () => {
        const errorMessage = [
            'intentional error:',
            randomString(),
        ].join(' ');

        const ElementWithAsyncPropError = defineElementNoInputs({
            tagName: `element-with-async-prop-error-${randomString()}`,
            stateInitStatic: {
                myAsyncProp: asyncProp({
                    async updateCallback() {
                        await wait(1000);
                        throw new Error(errorMessage);
                    },
                }),
            },
            renderCallback({state}) {
                state.myAsyncProp.update();
                return 'hello';
            },
        });

        const instance = await renderFixture(html`
            <${ElementWithAsyncPropError}></${ElementWithAsyncPropError}>
        `);

        // get elements
        assertInstanceOf(instance, ElementWithAsyncPropError);
        await waitUntilTruthy(() => {
            return (
                instance.instanceState.myAsyncProp.value instanceof Error &&
                instance.instanceState.myAsyncProp.value.message === errorMessage
            );
        });
    });

    it('does not clash with other instances', async () => {
        const ElementWithAsyncProp = defineElement<{
            promiseUpdateTrigger: number | undefined;
        }>()({
            tagName: `element-with-async-prop-${randomString()}`,
            stateInitStatic: {
                myRandomNumber: asyncProp({
                    async updateCallback({newNumber}: {newNumber: number | undefined}) {
                        return randomString();
                    },
                }),
            },
            renderCallback({inputs, state}) {
                state.myRandomNumber.update({
                    newNumber: inputs.promiseUpdateTrigger,
                });

                return html`
                    <span class="value-span">
                        ${renderAsync(state.myRandomNumber, 'loading', (resolved) => resolved)}
                    </span>
                `;
            },
        });

        const rendered = await renderFixture(html`
            <div>
                <${ElementWithAsyncProp.assign({
                    promiseUpdateTrigger: undefined,
                })}></${ElementWithAsyncProp}>
                <${ElementWithAsyncProp.assign({
                    promiseUpdateTrigger: undefined,
                })}></${ElementWithAsyncProp}>
            </div>
        `);

        // get elements
        const [
            instance1,
            instance2,
        ] = Array.from(rendered.querySelectorAll(ElementWithAsyncProp.tagName));

        assertInstanceOf(instance1, ElementWithAsyncProp);
        assertInstanceOf(instance2, ElementWithAsyncProp);

        const [
            span1,
            span2,
        ] = [
            instance1.shadowRoot.querySelector('.value-span'),
            instance2.shadowRoot.querySelector('.value-span'),
        ];
        assertInstanceOf(span1, HTMLSpanElement);
        assertInstanceOf(span2, HTMLSpanElement);

        const spans = [
            span1,
            span2,
        ] as const;

        function getSpanTexts() {
            return typedMap(spans, (span) => span.innerText);
        }

        const beforeTexts = getSpanTexts();

        assert.notStrictEqual(beforeTexts[0], beforeTexts[1]);

        instance1.instanceInputs.promiseUpdateTrigger = Math.random();

        await waitUntil(() => {
            return beforeTexts[0] !== span1.innerText;
        });

        const afterTexts = getSpanTexts();

        assert.notStrictEqual(afterTexts[0], afterTexts[1]);
        assert.notStrictEqual(beforeTexts[0], afterTexts[0]);
        assert.strictEqual(beforeTexts[1], afterTexts[1]);
    });

    it('works even if the value is undefined', async () => {
        const ElementWithUndefinedAsyncProp = defineElementNoInputs({
            tagName: `element-with-undefined-async-prop-${randomString()}`,
            stateInitStatic: {
                myAsyncProp: asyncProp({defaultValue: undefined as number | undefined}),
            },
            events: {
                wasRendered: defineElementEvent<void>(),
            },
            renderCallback({dispatch, events, state}) {
                if (isResolved(state.myAsyncProp.value) && !isError(state.myAsyncProp.value)) {
                    assertTypeOf(state.myAsyncProp.value).toEqualTypeOf<number | undefined>();
                }

                dispatch(new events.wasRendered());

                return html`
                    <button
                        id="new-promise"
                        ${listen('click', () => {
                            const newPromiseWrapper = createDeferredPromiseWrapper<
                                number | undefined
                            >();

                            state.myAsyncProp.setValue(newPromiseWrapper.promise);
                        })}
                    >
                        New Promise
                    </button>
                    <button
                        id="force-update"
                        ${listen('click', () => {
                            try {
                                state.myAsyncProp.forceUpdate();
                            } catch (error) {
                                state.myAsyncProp.setValue(error as any);
                            }
                        })}
                    >
                        Force Update
                    </button>
                    <button
                        id="assign-resolved-value"
                        ${listen('click', () => {
                            state.myAsyncProp.setValue(Math.random());
                        })}
                    >
                        Assign Resolved Value
                    </button>
                `;
            },
        });

        // render the element
        let renderCount: number = 0;

        const instance = await renderFixture(html`
            <${ElementWithUndefinedAsyncProp}
                ${listen(ElementWithUndefinedAsyncProp.events.wasRendered, () => {
                    renderCount++;
                })}
            ></${ElementWithUndefinedAsyncProp}>
        `);

        // get elements
        assertInstanceOf(instance, ElementWithUndefinedAsyncProp);
        const newPromiseButton = instance.shadowRoot.querySelector('#new-promise');
        const forceUpdateButton = instance.shadowRoot.querySelector('#force-update');
        const assignResolvedButton = instance.shadowRoot.querySelector('#assign-resolved-value');

        assertDefined(newPromiseButton);
        assertDefined(forceUpdateButton);
        assertDefined(assignResolvedButton);

        // initial render
        assert.isUndefined(instance.instanceState.myAsyncProp.value);
        assert.strictEqual(renderCount, 1);

        // assign a new promise
        await clickElement(newPromiseButton);

        await waitUntil(() => renderCount === 2);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // force an update (but we have no create promise so it will error out)
        await clickElement(forceUpdateButton);

        await waitUntil(() => renderCount === 3);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Error);

        // assign a new resolved value
        await clickElement(assignResolvedButton);

        await waitUntil(() => renderCount === 4);
        assert.isNumber(instance.instanceState.myAsyncProp.value);
    });

    it('has a simplified interface', () => {
        const instance = asyncProp()[stateSetupKey]();

        instance.destroy;
        instance.forceUpdate;
        instance.lastParams;
        instance.lastResolvedValue;
        instance.setParams;
        instance.setValue;
        instance.update;
        instance.value;

        /**
         * These properties are set to `protected` to hide them so the `AsyncProp` interface is
         * simpler.
         */
        // @ts-expect-error
        instance.dispatch;
        // @ts-expect-error
        instance.equalityCheck;
        // @ts-expect-error
        instance.getListenerCount;
        // @ts-expect-error
        instance.updateCallback;
        // @ts-expect-error
        instance.removeListener;
        // @ts-expect-error
        instance.removeAllListeners;
        // @ts-expect-error
        instance.listenToEvent;
        // @ts-expect-error
        instance.listen;
    });
});
