/* eslint-disable sonarjs/constructor-for-side-effects */
import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {SingleCssVarDefinition} from 'lit-css-vars';
import {
    AsyncProp,
    Observable,
    RenderCallback,
    TypedEvent,
    asyncProp,
    createEventDescriptorMap,
    createRenderParams,
    defineElementEvent,
    defineElementNoInputs,
    html,
} from '../index.js';
import {MaybeElementVirStateSetup} from './properties/element-vir-state-setup.js';

describe('RenderParams', () => {
    it('should produce proper types', () => {
        type MyAsyncPropTriggerType = {input: string | undefined};

        defineElementNoInputs({
            tagName: 'test-element',
            stateInitStatic: {
                myAsyncProp: asyncProp({
                    // eslint-disable-next-line @typescript-eslint/require-await
                    async updateCallback({input}: MyAsyncPropTriggerType) {
                        return 5;
                    },
                }),
                myAsyncProp2: asyncProp({defaultValue: Promise.resolve(3)}),
                myAsyncProp3: asyncProp({defaultValue: 3}),
                myNumber: undefined as undefined | Observable<number>,
            },
            cssVars: {
                'test-element-my-thing': '4px',
            },
            events: {
                testEventName: defineElementEvent<number>(),
                testEventName2: defineElementEvent<number>(),
            },
            render({events, state, updateState, cssVars}) {
                if (state.myNumber == undefined) {
                    updateState({myNumber: new Observable({defaultValue: 6})});
                }

                assert.tsType(cssVars['test-element-my-thing']).equals<SingleCssVarDefinition>();

                const testEventThing = events.testEventName;

                assert.tsType(state.myAsyncProp.value).equals<Promise<number> | number | Error>();
                assert.tsType(state.myAsyncProp2.value).equals<Promise<number> | number | Error>();
                assert.tsType(state.myAsyncProp3.value).equals<Promise<number> | number | Error>();

                updateState({
                    myAsyncProp: asyncProp(),
                });

                assert
                    .tsType<NonNullable<Parameters<typeof updateState>[0]['myAsyncProp']>>()
                    .equals<MaybeElementVirStateSetup<AsyncProp<number, MyAsyncPropTriggerType>>>();

                state.myAsyncProp.update({input: 'hi'});

                updateState({
                    myAsyncProp: asyncProp({defaultValue: 5}),
                });

                state.myAsyncProp.update({input: undefined});

                new testEventThing(4);
                // @ts-expect-error: requires a number input
                new testEventThing(undefined);
                // @ts-expect-error: requires a number input
                new testEventThing('not a number input');

                return html``;
            },
        });
    });

    it('should have proper types for an empty element', () => {
        function doNotExecuteThis() {
            const renderParams = createRenderParams({
                element: {} as any,
                eventsMap: createEventDescriptorMap('my-element', {
                    testEventName: defineElementEvent<number>(),
                }),
                cssVars: {},
                slotNamesMap: {},
            });

            const myEvent = renderParams.events.testEventName;
            const myEventInstance = new myEvent(4);
            // @ts-expect-error: requires a number input
            new myEvent('no number here');

            assert.strictEquals(myEventInstance.type, 'my-element-testEventName');

            renderParams.dispatch(myEventInstance);
            renderParams.dispatch(new TypedEvent(renderParams.events.testEventName, 2));
            renderParams.dispatch(new Event('generic event type'));
            // there are no async props in this element
            assert.isEmpty(Object.keys(renderParams.state));
        }
    });
});

describe('UpdateStateCallback', () => {
    it("can be used for an element's updateState method", () => {
        const stateInit = {
            doThing: asyncProp({defaultValue: 'string input'}),
        };

        const customElement = defineElementNoInputs({
            tagName: 'custom-element-for-testing-update-state-callback-type',
            stateInitStatic: stateInit,
            render({state}) {
                acceptStateFromElementDefinition(state);

                return 'hi';
            },
        });

        function acceptStateFromElementDefinition(state: (typeof customElement)['stateType']) {
            state.doThing.setValue('yo');
        }
    });
});

describe('RenderCallback', () => {
    it('requires a return of something', () => {
        const renderSomething: RenderCallback = () => {
            return undefined;
        };
        // @ts-expect-error this should return something
        const renderSomething2: RenderCallback = () => {
            return;
        };
    });
});
