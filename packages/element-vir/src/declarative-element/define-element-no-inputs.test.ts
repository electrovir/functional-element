import {AnyFunction, randomString, waitUntilTruthy} from '@augment-vir/common';
import {assert, fixture} from '@open-wc/testing';
import {IntervalObservable} from 'observavir';
import {assertInstanceOf, assertThrows, assertTypeOf} from 'run-time-assertions';
import {html} from '../template-transforms/vir-html/vir-html';
import {defineElementNoInputs} from './define-element-no-inputs';

describe(defineElementNoInputs.name, () => {
    it('blocks render callbacks without a return type', () => {
        defineElementNoInputs({
            tagName: `some-tag-${randomString()}`,
            // render callback must return something
            // @ts-expect-error
            renderCallback() {},
        });
        defineElementNoInputs({
            tagName: `some-tag-2-${randomString()}`,
            // returning undefined is cool
            renderCallback() {
                return undefined;
            },
        });
    });

    it('does not infer render output type from init callback', () => {
        defineElementNoInputs({
            tagName: `some-tag-${randomString()}`,
            // render callback must return something
            initCallback() {
                return undefined;
            },
            // @ts-expect-error
            renderCallback() {},
        });
    });

    it('persists slot names', () => {
        const myTestElement = defineElementNoInputs({
            tagName: 'test-element-no-inputs-with-slot-names',
            slotNames: [
                'my slot',
            ],
            renderCallback() {
                return 'hi';
            },
        });

        assertTypeOf(myTestElement.slotNames['my slot']).toEqualTypeOf<'my slot'>();
        assertTypeOf(myTestElement.slotNames['my slot']).toMatchTypeOf<string>();
        assert.strictEqual(myTestElement.slotNames['my slot'], 'my slot');
    });

    it('does not allow updating state properties that do not exist in the state', () => {
        defineElementNoInputs({
            tagName: `some-tag-${randomString()}`,
            stateInitStatic: {
                selectedFeeIndex: undefined as number | undefined,
                errors: undefined as
                    | undefined
                    | Partial<{
                          amount: boolean;
                          fee: boolean;
                      }>,
                userInputConvertAmount: '',
                generalError: '',
                prepareConvertResult: undefined as undefined | Awaited<ReturnType<AnyFunction>>,
                step2ConfirmationAccepted: false,
                confirmedTxUrl: '',
                showLoader: false,
                isMax: false,
            },
            renderCallback({state, updateState}) {
                updateState({
                    // @ts-expect-error
                    thingie: 'yo',
                    generalError: 'hi',
                });
                return '';
            },
        });
    });

    it('allows host to be assigned to instance type', () => {
        const MyElement = defineElementNoInputs({
            tagName: `some-tag-${randomString()}`,
            // render callback must return something
            initCallback({host}) {
                acceptHost(host);
                return undefined;
            },
            renderCallback({host}) {
                acceptHost(host);

                return '';
            },
        });

        function acceptHost(host: (typeof MyElement)['instanceType']) {
            return {};
        }
    });

    it('destroys all state props', async () => {
        let count = 0;

        const MyElement = defineElementNoInputs({
            tagName: `some-tag-${randomString()}`,
            stateInitStatic: {
                intervalObservable: new IntervalObservable({
                    defaultParams: undefined,
                    intervalDuration: {
                        milliseconds: 100,
                    },
                    updateCallback() {
                        count++;
                        return 'hi';
                    },
                }),
            },
            renderCallback() {
                return '';
            },
        });

        const rendered = await fixture(html`
            <${MyElement}></${MyElement}>
        `);

        assertInstanceOf(rendered, MyElement);
        await waitUntilTruthy(() => count > 10);

        rendered.destroy();
        const countAfterDestroy = count;

        await assertThrows(() =>
            waitUntilTruthy(() => count > countAfterDestroy + 10, undefined, {
                timeout: {milliseconds: 3_000},
            }),
        );
    });
});
