import {assert, waitUntil} from '@augment-vir/assert';
import {AnyFunction, randomString} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {IntervalObservable} from 'observavir';
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

        assert.tsType(myTestElement.slotNames['my slot']).equals<'my slot'>();
        assert.tsType(myTestElement.slotNames['my slot']).matches<string>();
        assert.strictEquals(myTestElement.slotNames['my slot'], 'my slot');
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

        const rendered = await testWeb.render(html`
            <${MyElement}></${MyElement}>
        `);

        assert.instanceOf(rendered, MyElement);
        await waitUntil.isTruthy(() => count > 10);

        rendered.destroy();
        const countAfterDestroy = count;

        await assert.throws(() =>
            waitUntil.isTruthy(() => count > countAfterDestroy + 10, {
                timeout: {milliseconds: 3_000},
            }),
        );
    });
});
