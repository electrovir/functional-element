import {assert, expect, fixture, waitUntil} from '@open-wc/testing';
import {sendMouse} from '@web/test-runner-commands';
import {RequiredAndNotNullBy} from 'augment-vir';
import {html} from '../..';
import {assertInstanceOf} from '../../augments/testing';
import {AppElement} from './app.element';
import {TestChildElement} from './child.element';

function assertDefined<T>(value: T, message?: string): asserts value is NonNullable<T> {
    assert.isDefined(value, message);
    assert.isNotNull(value, message);
}

/** Accounts for shadow DOM */
function queryTree(
    context: Element | undefined,
    // at least one string is required or this function makes no sense
    selectors: [string, ...string[]],
): Element | undefined {
    /**
     * The callback is split out here to appears the Type Gods. Without it, finalElement will be the
     * type of the internal currentContext (which is incorrect).
     */
    const reduceCallback = (
        currentContext: Element | undefined | ShadowRoot,
        selector: string,
    ): Element | undefined => {
        if (!currentContext) {
            return undefined;
        }
        if ('shadowRoot' in currentContext && currentContext.shadowRoot) {
            currentContext = currentContext.shadowRoot;
        }
        return currentContext.querySelector(selector) ?? undefined;
    };

    const finalElement = selectors.reduce(reduceCallback, context);

    return finalElement;
}

function assertHasShadowRoot<T extends Element>(
    element: T,
    message?: string,
): asserts element is T & RequiredAndNotNullBy<Element, 'shadowRoot'> {
    assert.isEmpty(element.innerHTML, message);
    assertDefined(element.shadowRoot, message);
}

function getCenterOfElement(element: Element): [number, number] {
    const rect = element.getBoundingClientRect();
    return [
        Math.floor((rect.left + rect.right) / 2),
        Math.floor((rect.bottom + rect.top) / 2),
    ];
}

describe(AppElement.tagName, () => {
    it('should change input numbers', async () => {
        function getDisplayedInputNumber(appElement: HTMLElement): number {
            const inputNumberSpan = queryTree(appElement, [
                TestChildElement.tagName,
                'span:nth-of-type(3)',
            ]);
            assertInstanceOf(inputNumberSpan, HTMLSpanElement);
            expect(inputNumberSpan.innerText).to.contain('input number');
            assert.strictEqual(inputNumberSpan.childNodes.length, 3);
            const lastNode = inputNumberSpan.childNodes[2];
            assertInstanceOf(lastNode, Text);
            const inputNumber = Number(lastNode.nodeValue);
            assert.isNotNaN(inputNumber);
            return inputNumber;
        }

        async function clickAssignNewNumberButton(context: HTMLElement) {
            const assignNewNumberButton = queryTree(context, ['button']);
            assertInstanceOf(assignNewNumberButton, HTMLButtonElement);
            expect(assignNewNumberButton.innerText).to.contain('assign NEW number to child');
            await sendMouse({
                position: getCenterOfElement(assignNewNumberButton),
                type: 'click',
            });
        }

        function getAppElement() {
            const appElement = document.body.querySelector(AppElement.tagName);
            assertInstanceOf(appElement, AppElement);
            assertHasShadowRoot(appElement);
            return appElement;
        }

        await fixture(html`<${AppElement}></${AppElement}>`);

        const appElement = getAppElement();

        const firstInputNumber = getDisplayedInputNumber(appElement);

        await clickAssignNewNumberButton(appElement);

        await waitUntil(() => {
            const secondInputNumber = getDisplayedInputNumber(appElement);
            return firstInputNumber !== secondInputNumber;
        }, 'the child input number did not change');
    });
});