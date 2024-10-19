import {assert, waitUntil} from '@augment-vir/assert';
import {SetRequiredAndNotNull} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from 'element-vir';
import {TestChildElement} from './child.element.js';
import {VirOldTestApp} from './vir-old-test-app.element.js';

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
): asserts element is T & SetRequiredAndNotNull<Element, 'shadowRoot'> {
    assert.isEmpty(element.innerHTML, message);
    assert.isDefined(element.shadowRoot, message);
}

describe(VirOldTestApp.tagName, () => {
    async function renderApp() {
        return await testWeb.render(html`
            <${VirOldTestApp}></${VirOldTestApp}>
        `);
    }

    function getAppElement(context: Element) {
        if (context instanceof VirOldTestApp) {
            return context;
        }
        const appElement = context.querySelector(VirOldTestApp.tagName);
        assert.instanceOf(appElement, VirOldTestApp);
        assertHasShadowRoot(appElement);
        return appElement;
    }

    it('should change input numbers', async () => {
        function getDisplayedInputNumber(appElement: HTMLElement): number {
            const inputNumberSpan = queryTree(appElement, [
                TestChildElement.tagName,
                'span:nth-of-type(3)',
            ]);
            assert.instanceOf(inputNumberSpan, HTMLSpanElement);
            assert.isIn('input number', inputNumberSpan.innerText);
            assert.strictEquals(inputNumberSpan.childNodes.length, 3);
            const lastNode = inputNumberSpan.childNodes[2];
            assert.instanceOf(lastNode, Text);
            const inputNumber = Number(lastNode.nodeValue);
            assert.isNumber(inputNumber);
            return inputNumber;
        }

        async function clickAssignNewNumberButton(context: HTMLElement) {
            const assignNewNumberButton = queryTree(context, ['button']);
            assert.instanceOf(assignNewNumberButton, HTMLButtonElement);
            assert.isIn('assign NEW number to child', assignNewNumberButton.innerText);

            await testWeb.click(assignNewNumberButton);
        }
        const rendered = await renderApp();

        const appElement = getAppElement(rendered);

        assert.tsType(appElement.instanceState.derp).equals<Record<string, string>>();

        const firstInputNumber = getDisplayedInputNumber(appElement);

        await clickAssignNewNumberButton(appElement);

        await waitUntil(
            () => {
                const secondInputNumber = getDisplayedInputNumber(appElement);
                return firstInputNumber !== secondInputNumber;
            },
            undefined,
            'the child input number did not change',
        );
    });

    it('inputs should be spreadable', async () => {
        const rendered = await renderApp();
        const childElement = queryTree(rendered, [
            TestChildElement.tagName,
        ]);

        assert.instanceOf(childElement, TestChildElement);
        assert('speak' in childElement.definition.events);
        const currentInputs = {...childElement.instanceInputs};
        assert.deepEquals(currentInputs, {
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

        assert.strictEquals(
            tagNames.size,
            childrenWithDataAttribute.length,
            'tag names were not unique between data children',
        );
    });
});
