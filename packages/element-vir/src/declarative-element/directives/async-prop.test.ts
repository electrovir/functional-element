import {assert, waitUntil} from '@augment-vir/assert';
import {DeferredPromise, randomString, typedMap, wait, waitValue} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {isObservableBase, noUpdate} from 'observavir';
import {nothing} from '../../lit-exports/all-lit-exports.js';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElementNoInputs} from '../define-element-no-inputs.js';
import {defineElement} from '../define-element.js';
import {defineElementEvent} from '../properties/element-events.js';
import {StaticElementPropertyDescriptor} from '../properties/element-properties.js';
import {ElementVirStateSetup, stateSetupKey} from '../properties/element-vir-state-setup.js';
import {AsyncProp, AsyncValue, asyncProp} from './async-prop.js';
import {isAsyncError, isResolved} from './is-resolved.directive.js';
import {listen} from './listen.directive.js';
import {renderAsync} from './render-async.directive.js';

/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */

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
                await wait({milliseconds: 0});
                return 'five';
            },
        });

        asyncProp({
            async updateCallback(trigger: {callback: () => number}) {
                await wait({milliseconds: 0});
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
                myProp: asyncProp({defaultValue: waitValue({seconds: 10}, 'value')}),
                syncProp: {value: 'hi'},
            },
            render({state, updateState}) {
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
                        // @ts-expect-error: invalid extra property
                        hello: 'yo',
                    },
                });

                state.myAsyncProp.update({
                    ...exampleTrigger,
                    // @ts-expect-error: invalid extra property
                    hello: 'yo',
                });
                state.myAsyncPropAgain.update({...exampleTrigger, goodbye: 4, hello: 'hi'});

                updateState({
                    syncProp: {
                        value: 'yo',
                    },
                });

                state.myAsyncPropAgain.setValue(Promise.resolve({} as any));

                assert.tsType(state.myAsyncProp.value).equals<AsyncValue<SomethingObject>>();
                return html``;
            },
        });

        assert
            .tsType(elementWithAsyncProp.stateInitStatic.myAsyncProp)
            .equals<
                StaticElementPropertyDescriptor<
                    string,
                    ElementVirStateSetup<AsyncProp<SomethingObject, TriggerType>>
                >
            >();

        assert
            .tsType<(typeof elementWithAsyncProp)['stateType']['myAsyncProp']['value']>()
            .equals<AsyncValue<SomethingObject>>();

        assert
            .tsType<
                (typeof elementWithAsyncProp)['instanceType']['instanceState']['myAsyncProp']['value']
            >()
            .equals<AsyncValue<SomethingObject>>();
    });

    it('passes isObservableBase', () => {
        const instance = asyncProp()[stateSetupKey]();
        assert.isTrue(isObservableBase(instance));
    });

    it('updates and resolves async prop createPromise and update', async () => {
        const startingNumber = 123;

        // render the element
        const deferredPromiseWrappers: DeferredPromise<number>[] = [];
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
                        const newDeferredPromise = new DeferredPromise<typeof newNumber>();
                        deferredPromiseWrappers.push(newDeferredPromise);
                        return newDeferredPromise.promise;
                    },
                }),
            },
            render({inputs, state}) {
                state.myAsyncProp.update({
                    newNumber: inputs.promiseUpdateTrigger ?? startingNumber,
                    circularReference,
                });

                if (isResolved(state.myAsyncProp.value) && !isAsyncError(state.myAsyncProp.value)) {
                    assert.tsType(state.myAsyncProp.value).equals<number>();
                }

                renderCount++;

                return html`
                    <button
                        id="new-promise"
                        ${listen('click', () => {
                            const newDeferredPromise = new DeferredPromise<number>();

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

        const instance = await testWeb.render(html`
            <${ElementWithAsyncProp.assign({
                promiseUpdateTrigger: startingNumber,
            })}></${ElementWithAsyncProp}>
        `);

        // get elements
        assert.instanceOf(instance, ElementWithAsyncProp);
        const newPromiseButton = instance.shadowRoot.querySelector('#new-promise');
        const forceUpdateButton = instance.shadowRoot.querySelector('#force-update');
        const assignResolvedButton = instance.shadowRoot.querySelector('#assign-resolved-value');

        assert.isUndefined(instance.instanceState.myAsyncProp.lastResolvedValue);
        const initialPromise = instance.instanceState.myAsyncProp.value;

        assert.isDefined(newPromiseButton);
        assert.isDefined(forceUpdateButton);
        assert.isDefined(assignResolvedButton);

        // initial render
        assert.isDefined(deferredPromiseWrappers[0]);
        assert.isLengthExactly(deferredPromiseWrappers as DeferredPromise<number>[], 1);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);
        assert.strictEquals(renderCount, 1);

        // assign the same number to the input; the element should not re-render
        instance.assignInputs({
            promiseUpdateTrigger: startingNumber,
        });
        await assert.throws(
            async () => await waitUntil(() => renderCount === 2),
            undefined,
            'should not have rendered again',
        );

        assert.isLengthExactly(deferredPromiseWrappers as DeferredPromise<number>[], 1);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // assign a new number; the element should re-render
        instance.assignInputs({
            promiseUpdateTrigger: 2,
        });
        await waitUntil(() => renderCount === 2, undefined, 'Render count failed to reach 2');

        assert.isLengthExactly(deferredPromiseWrappers as DeferredPromise<number>[], 2);
        assert.isDefined(deferredPromiseWrappers[1]);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // resolve the promise; the element should re-render and the state should update
        const resolutionValue = 3;
        deferredPromiseWrappers[1].resolve(resolutionValue);

        await waitUntil(() => renderCount === 3, undefined, 'Render count failed to reach 3');
        const initialPromiseResult = await initialPromise;

        assert.isLengthExactly(deferredPromiseWrappers as DeferredPromise<number>[], 2);
        assert.strictEquals(instance.instanceState.myAsyncProp.value as unknown, resolutionValue);
        assert.strictEquals(initialPromiseResult, resolutionValue);
        assert.strictEquals(
            instance.instanceState.myAsyncProp.lastResolvedValue as unknown,
            resolutionValue,
        );

        // assign a new input; element should re-render and create a new promise
        instance.assignInputs({
            promiseUpdateTrigger: 4,
        });
        await waitUntil(() => renderCount === 4, undefined, 'Render count failed to reach 4');

        assert.isLengthExactly(deferredPromiseWrappers as DeferredPromise<number>[], 3);
        assert.isDefined(deferredPromiseWrappers[2]);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // reject the error; element should re-render and update state
        const rejectionError = new Error('fake error');
        deferredPromiseWrappers[2].reject(rejectionError);

        await waitUntil(() => renderCount === 5, undefined, 'Render count failed to reach 5');

        assert.isLengthExactly(deferredPromiseWrappers as DeferredPromise<number>[], 3);
        assert.strictEquals(instance.instanceState.myAsyncProp.value as unknown, rejectionError);

        // force an update; element should re-render and update state
        await testWeb.click(forceUpdateButton);

        await waitUntil(() => renderCount === 6, undefined, 'Render count failed to reach 6');

        assert.isLengthExactly(deferredPromiseWrappers as DeferredPromise<number>[], 4);
        assert.isDefined(deferredPromiseWrappers[3]);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // assign a new promise; element should not re-render (because the last promise never finished settling) and update state
        await testWeb.click(newPromiseButton);

        assert.isLengthExactly(deferredPromiseWrappers as DeferredPromise<number>[], 5);
        assert.isDefined(deferredPromiseWrappers[4]);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // it shouldn't render after resolution of a previous promise
        deferredPromiseWrappers[3].resolve(5);

        await assert.throws(() => waitUntil(() => renderCount === 7));
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // should render after resolving the current promise
        const finalResolutionValue = 6;
        deferredPromiseWrappers[4].resolve(finalResolutionValue);

        await waitUntil(() => renderCount === 7, undefined, 'Render count failed to reach 7');
        assert.strictEquals(
            instance.instanceState.myAsyncProp.value as unknown,
            finalResolutionValue,
        );

        // assign an already resolved value; element should update once and immediately use the resolved value
        await testWeb.click(assignResolvedButton);

        assert.isLengthExactly(
            deferredPromiseWrappers,
            5,
            'no new deferred promises should have been created',
        );
        assert.isNumber(instance.instanceState.myAsyncProp.value);
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
                        await wait({seconds: 1});
                        throw new Error(errorMessage);
                    },
                }),
            },
            render({state}) {
                state.myAsyncProp.update();
                return 'hello';
            },
        });

        const instance = await testWeb.render(html`
            <${ElementWithAsyncPropError}></${ElementWithAsyncPropError}>
        `);

        // get elements
        assert.instanceOf(instance, ElementWithAsyncPropError);
        await waitUntil.isTruthy(() => {
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
                        await wait({milliseconds: 0});
                        return randomString();
                    },
                }),
            },
            render({inputs, state, host}) {
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

        const rendered = await testWeb.render(html`
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

        assert.instanceOf(instance1, ElementWithAsyncProp);
        assert.instanceOf(instance2, ElementWithAsyncProp);

        const [
            span1,
            span2,
        ] = [
            instance1.shadowRoot.querySelector('.value-span'),
            instance2.shadowRoot.querySelector('.value-span'),
        ];
        assert.instanceOf(span1, HTMLSpanElement);
        assert.instanceOf(span2, HTMLSpanElement);

        const spans = [
            span1,
            span2,
        ] as const;

        function getSpanTexts() {
            return typedMap(spans, (span) => span.innerText);
        }

        await waitUntil(() => {
            return span1.innerText !== 'loading' && span2.innerText !== 'loading';
        });

        const beforeTexts = getSpanTexts();

        assert.notStrictEquals(beforeTexts[0], beforeTexts[1]);

        instance1.instanceInputs.promiseUpdateTrigger = Math.random();

        await waitUntil(() => {
            return beforeTexts[0] !== span1.innerText;
        });

        const afterTexts = getSpanTexts();

        assert.notStrictEquals(afterTexts[0], afterTexts[1]);
        assert.notStrictEquals(beforeTexts[0], afterTexts[0]);
        assert.strictEquals(beforeTexts[1], afterTexts[1]);
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
            render({dispatch, events, state}) {
                if (isResolved(state.myAsyncProp.value) && !isAsyncError(state.myAsyncProp.value)) {
                    assert.tsType(state.myAsyncProp.value).equals<number | undefined>();
                }

                dispatch(new events.wasRendered());

                return html`
                    <button
                        id="new-promise"
                        ${listen('click', () => {
                            const newPromiseWrapper = new DeferredPromise<number | undefined>();

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

        const instance = await testWeb.render(html`
            <${ElementWithUndefinedAsyncProp}
                ${listen(ElementWithUndefinedAsyncProp.events.wasRendered, () => {
                    renderCount++;
                })}
            ></${ElementWithUndefinedAsyncProp}>
        `);

        // get elements
        assert.instanceOf(instance, ElementWithUndefinedAsyncProp);
        const newPromiseButton = instance.shadowRoot.querySelector('#new-promise');
        const forceUpdateButton = instance.shadowRoot.querySelector('#force-update');
        const assignResolvedButton = instance.shadowRoot.querySelector('#assign-resolved-value');

        assert.isDefined(newPromiseButton);
        assert.isDefined(forceUpdateButton);
        assert.isDefined(assignResolvedButton);

        // initial render
        assert.isUndefined(instance.instanceState.myAsyncProp.value);
        assert.strictEquals(renderCount, 1);

        // assign a new promise
        await testWeb.click(newPromiseButton);

        await waitUntil(() => renderCount === 2);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Promise);

        // force an update (but we have no create promise so it will error out)
        await testWeb.click(forceUpdateButton);

        await waitUntil(() => renderCount === 3);
        assert.instanceOf(instance.instanceState.myAsyncProp.value, Error);

        // assign a new resolved value
        await testWeb.click(assignResolvedButton);

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
        // @ts-expect-error: should not exist publicly
        instance.dispatch;
        // @ts-expect-error: should not exist publicly
        instance.equalityCheck;
        // @ts-expect-error: should not exist publicly
        instance.getListenerCount;
        // @ts-expect-error: should not exist publicly
        instance.updateCallback;
        // @ts-expect-error: should not exist publicly
        instance.removeListener;
        // @ts-expect-error: should not exist publicly
        instance.removeAllListeners;
        // @ts-expect-error: should not exist publicly
        instance.listenToEvent;
        // @ts-expect-error: should not exist publicly
        instance.listen;
    });

    it('does not trigger updates with a function input changing', () => {
        let callCount = 0;
        const instance = asyncProp({
            updateCallback(inputs: {prop1: string; callback: () => any}) {
                return callCount++;
            },
        })[stateSetupKey]();

        instance.update({prop1: 'hi', callback: () => {}});
        instance.update({prop1: 'hi', callback: () => {}});
        instance.update({prop1: 'hi', callback: () => {}});
        instance.update({prop1: 'hi', callback: () => {}});
        instance.update({prop1: 'bye', callback: () => {}});

        assert.strictEquals(callCount, 2);
    });

    it('does not automatically read new proxy values', async () => {
        let callCount = 0;

        const ElementWithProxyAsyncPropInput = defineElement<{inputValue: string}>()({
            tagName: 'vir-element-with-proxy-async-prop-input',
            stateInitStatic: {
                myProp: asyncProp({
                    updateCallback(inputsProxy: {inputValue: string}) {
                        callCount++;
                        return inputsProxy.inputValue;
                    },
                }),
            },
            init({state, inputs}) {
                state.myProp.update(inputs);
            },
            render({state}) {
                if (!isResolved(state.myProp.value)) {
                    return 'loading';
                } else if (isAsyncError(state.myProp.value)) {
                    return 'error';
                } else {
                    return state.myProp.value;
                }
            },
        });

        const rendered = await testWeb.render(html`
            <${ElementWithProxyAsyncPropInput.assign({
                inputValue: 'hello there',
            })}></${ElementWithProxyAsyncPropInput}>
        `);

        assert.instanceOf(rendered, ElementWithProxyAsyncPropInput);

        assert.strictEquals(rendered.shadowRoot.textContent, 'hello there');
        rendered.assignInputs({inputValue: 'new value'});
        assert.strictEquals(rendered.shadowRoot.textContent, 'hello there');
        rendered.instanceState.myProp.forceUpdate();
        assert.strictEquals(rendered.shadowRoot.textContent, 'hello there');
        assert.strictEquals(callCount, 2);
    });

    it('ignores ongoing promises if setValue is called', async () => {
        let resolved = false;
        const updateDuration = {milliseconds: 500};

        const RaceConditionElement = defineElementNoInputs({
            tagName: 'vir-element-race-condition-between-set-value-and-promise-resolution',
            stateInitStatic: {
                myProp: asyncProp({
                    async updateCallback() {
                        await wait(updateDuration);
                        setTimeout(() => {
                            resolved = true;
                        });
                        return 5;
                    },
                }),
            },
            render({state}) {
                state.myProp.update();
                return nothing;
            },
        });

        const rendered = await testWeb.render(html`
            <${RaceConditionElement}></${RaceConditionElement}>
        `);

        assert.instanceOf(rendered, RaceConditionElement);
        assert.instanceOf(rendered.instanceState.myProp.value, Promise);

        rendered.instanceState.myProp.setValue(42);

        assert.isFalse(resolved);
        await waitUntil.isTruthy(() => resolved);
        await wait({milliseconds: updateDuration.milliseconds * 2});
        assert.strictEquals(rendered.instanceState.myProp.value as unknown, 42);
    });

    it('allows noUpdate', async () => {
        const VirAsyncPropWithNoUpdate = defineElementNoInputs({
            tagName: 'vir-async-prop-with-update',
            stateInitStatic: {
                asyncValues: asyncProp({
                    updateCallback({
                        shouldBypass,
                        value,
                    }: {
                        value: string;
                        shouldBypass: boolean;
                    }): ReadonlyArray<string> | typeof noUpdate {
                        if (shouldBypass) {
                            return noUpdate;
                        }

                        return new Array(10).fill(0).map(() => value);
                    },
                }),
            },
            render: ({state}) => {
                state.asyncValues.update({value: 'hello there', shouldBypass: true});
                return 'hi';
            },
        });

        const rendered = await testWeb.render(html`
            <${VirAsyncPropWithNoUpdate}></${VirAsyncPropWithNoUpdate}>
        `);

        assert.instanceOf(rendered, VirAsyncPropWithNoUpdate);
        await waitUntil.isTruthy(() => rendered._internalRenderCount > 0);
        assert.instanceOf(rendered.instanceState.asyncValues.value, Promise);
    });
});
