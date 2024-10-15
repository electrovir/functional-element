import {assert, waitUntil} from '@augment-vir/assert';
import {randomString} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {queryThroughShadow} from '@augment-vir/web';
import {IntervalObservable} from 'observavir';
import {html} from '../template-transforms/vir-html/vir-html.js';
import {defineElementNoInputs} from './define-element-no-inputs.js';

describe(defineElementNoInputs.name, () => {
    it('blocks render callbacks without a return type', () => {
        defineElementNoInputs({
            tagName: `some-tag-${randomString()}`,
            // @ts-expect-error: render callback must return something
            render() {},
        });
        defineElementNoInputs({
            tagName: `some-tag-2-${randomString()}`,
            // returning undefined is cool
            render() {
                return undefined;
            },
        });
    });

    it('does not infer render output type from init callback', () => {
        defineElementNoInputs({
            tagName: `some-tag-${randomString()}`,
            // render callback must return something
            init() {
                return undefined;
            },
            // @ts-expect-error: render callback must return something
            render() {},
        });
    });

    it('persists slot names', () => {
        const myTestElement = defineElementNoInputs({
            tagName: 'test-element-no-inputs-with-slot-names',
            slotNames: [
                'my slot',
            ],
            render() {
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
                prepareConvertResult: undefined as unknown,
                step2ConfirmationAccepted: false,
                confirmedTxUrl: '',
                showLoader: false,
                isMax: false,
            },
            render({state, updateState}) {
                updateState({
                    // @ts-expect-error: this property does not exist
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
            init({host}) {
                acceptHost(host);
                return undefined;
            },
            render({host}) {
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
            render() {
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
                timeout: {milliseconds: 3000},
            }),
        );
    });

    it('does not reconstruct children', async () => {
        const Parent = defineElementNoInputs({
            tagName: 'parent-that-updates',
            stateInitStatic: {
                value: 1,
            },
            render({state, updateState}) {
                setTimeout(() => {
                    updateState({value: state.value + 1});
                }, 100);
                return html`
                    value:
                    <span class="parent-value">${state.value}</span>
                    <br />
                    <${Child}></${Child}>
                `;
            },
        });

        const Child = defineElementNoInputs({
            tagName: 'child-that-does-not-update',
            render() {
                return html`
                    this should not update:
                    <span class="child-value">
                        ${randomString(8)}
                        <span></span>
                    </span>
                `;
            },
        });

        const parentInstance = await testWeb.render(html`
            <${Parent}></${Parent}>
        `);

        assert.instanceOf(parentInstance, Parent);

        const parentValueSpan = queryThroughShadow(parentInstance, '.parent-value');
        assert.instanceOf(parentValueSpan, HTMLSpanElement);

        const childValueSpan = queryThroughShadow(parentInstance, '.child-value');
        assert.instanceOf(childValueSpan, HTMLSpanElement);
        const originalChildValue = childValueSpan.textContent || '';
        assert.isTruthy(originalChildValue);

        await waitUntil.strictEquals('10', () => parentValueSpan.textContent);

        assert.isString(childValueSpan.textContent);
        assert.strictEquals(originalChildValue, childValueSpan.textContent);
    });
});
