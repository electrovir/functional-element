import {waitForAnimationFrame} from '@augment-vir/browser';
import {extractText} from '@augment-vir/browser-testing';
import {waitUntilTruthy} from '@augment-vir/common';
import {assert, fixture} from '@open-wc/testing';
import {assertInstanceOf} from 'run-time-assertions';
import {html} from '../../template-transforms/vir-html/vir-html';
import {defineElement} from '../define-element';
import {defineElementEvent} from '../properties/element-events';
import {listen} from './listen.directive';
import {onDomRendered} from './on-dom-rendered.directive';

describe('onDomRendered', () => {
    const TestOnDomRenderedElement = defineElement<{trigger: number}>()({
        tagName: 'test-on-dom-rendered-element',
        events: {
            renderTrigger: defineElementEvent<Element>(),
        },
        renderCallback({inputs, events, dispatch}) {
            return html`
                <div
                    ${onDomRendered((element) => {
                        dispatch(new events.renderTrigger(element));
                    })}
                >
                    ${inputs.trigger}
                </div>
            `;
        },
    });

    async function setupTest() {
        const elements: Element[] = [];
        const rendered = await fixture(html`
            <${TestOnDomRenderedElement.assign({trigger: 1})}
                ${listen(TestOnDomRenderedElement.events.renderTrigger, (event) => {
                    elements.push(event.detail);
                })}
            ></${TestOnDomRenderedElement}>
        `);

        assertInstanceOf(rendered, TestOnDomRenderedElement);
        const instance = rendered;

        await waitForAnimationFrame(100);

        assert.lengthOf(elements, 1);
        assert.strictEqual(extractText(instance), '1');

        async function updateTrigger(triggerValue: number) {
            instance.assignInputs({
                trigger: triggerValue,
            });

            await waitUntilTruthy(() => {
                return extractText(instance) === String(triggerValue);
            });
        }

        return {instance, elements, updateTrigger};
    }

    it('calls each time a render occurs', async () => {
        const {elements, instance, updateTrigger} = await setupTest();

        await updateTrigger(32);
        await updateTrigger(96);
        await updateTrigger(43);
        await updateTrigger(60);

        await waitForAnimationFrame(100);

        assert.lengthOf(elements, 5);
        assert.strictEqual(extractText(instance), '60');
    });

    it('does not trigger when an input does not change', async () => {
        const {elements, instance, updateTrigger} = await setupTest();

        await updateTrigger(1);
        await updateTrigger(1);
        await updateTrigger(1);
        await updateTrigger(1);

        await waitForAnimationFrame(100);

        assert.lengthOf(elements, 1);
        assert.strictEqual(extractText(instance), '1');
    });
});
