import {RequiredAndNotNullBy} from '@augment-vir/common';
import {assert, expect, fixture, waitUntil} from '@open-wc/testing';
import {assertInstanceOf, assertTypeOf} from 'run-time-assertions';
import {html} from '../../../../index';
import {clickElement} from '../../../../util/testing.test-helper';
import {TestChildElement} from './child.element';
import {VirOldTestApp} from './vir-old-test-app.element';

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

describe(VirOldTestApp.tagName, () => {
    async function renderApp() {
        return await fixture(html`
            <${VirOldTestApp}></${VirOldTestApp}>
        `);
    }

    function getAppElement(context: Element) {
        if (VirOldTestApp.isStrictInstance(context)) {
            return context;
        }
        const appElement = context.querySelector(VirOldTestApp.tagName);
        assertInstanceOf(appElement, VirOldTestApp);
        assertHasShadowRoot(appElement);
        return appElement;
    }

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

            await clickElement(assignNewNumberButton);
        }
        const rendered = await renderApp();

        const appElement = getAppElement(rendered);

        assertTypeOf(appElement.instanceState.derp).toEqualTypeOf<Record<string, string>>();

        const firstInputNumber = getDisplayedInputNumber(appElement);

        await clickAssignNewNumberButton(appElement);

        await waitUntil(() => {
            const secondInputNumber = getDisplayedInputNumber(appElement);
            return firstInputNumber !== secondInputNumber;
        }, 'the child input number did not change');
    });

    it('inputs should be spreadable', async () => {
        const rendered = await renderApp();
        const childElement = queryTree(rendered, [
            TestChildElement.tagName,
        ]);

        assertInstanceOf(childElement, TestChildElement);
        assert('speak' in childElement.definition.events);
        const currentInputs = {...childElement.instanceInputs};
        assert.deepStrictEqual(currentInputs, {
            displayNumber: childElement.instanceInputs.displayNumber,
            myProp: 5,
            width: childElement.instanceInputs.width,
        });
    });

    it('should render unique elements with identical strings', async () => {
        const rendered = await renderApp();

        const appElement = getAppElement(rendered);
        const childrenWithDataAttribute = Array.from(appElement.children).filter((child) =>
            child.hasAttribute('data-tag-name'),
        );

        const tagNames = new Set(childrenWithDataAttribute.map((child) => child.tagName));

        assert.strictEqual(
            tagNames.size,
            childrenWithDataAttribute.length,
            'tag names were not unique between data children',
        );
    });
});
