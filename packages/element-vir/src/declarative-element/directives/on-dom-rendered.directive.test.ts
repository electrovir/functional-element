import {assert, waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {extractElementText, waitForAnimationFrame} from '@augment-vir/web';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElement} from '../define-element.js';
import {defineElementEvent} from '../properties/element-events.js';
import {listen} from './listen.directive.js';
import {onDomRendered} from './on-dom-rendered.directive.js';

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
        const rendered = await testWeb.render(html`
            <${TestOnDomRenderedElement.assign({trigger: 1})}
                ${listen(TestOnDomRenderedElement.events.renderTrigger, (event) => {
                    elements.push(event.detail);
                })}
            ></${TestOnDomRenderedElement}>
        `);

        assert.instanceOf(rendered, TestOnDomRenderedElement);
        const instance = rendered;

        await waitForAnimationFrame(100);

        assert.isLengthExactly(elements, 1);
        assert.strictEquals(extractElementText(instance), '1');

        async function updateTrigger(triggerValue: number) {
            instance.assignInputs({
                trigger: triggerValue,
            });

            await waitUntil.isTruthy(() => {
                return extractElementText(instance) === String(triggerValue);
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

        assert.isLengthExactly(elements, 5);
        assert.strictEquals(extractElementText(instance), '60');
    });

    it('does not trigger when an input does not change', async () => {
        const {elements, instance, updateTrigger} = await setupTest();

        await updateTrigger(1);
        await updateTrigger(1);
        await updateTrigger(1);
        await updateTrigger(1);

        await waitForAnimationFrame(100);

        assert.isLengthExactly(elements, 1);
        assert.strictEquals(extractElementText(instance), '1');
    });
});
