import {assert} from '@open-wc/testing';
import {DeclarativeElementDefinition} from '../declarative-element/declarative-element';

/**
 * Wrapper for assert.instanceOf that also works with TypeScript in setting the proper types.
 *
 * Do not use this in production code! It should only be used in testing code.
 */
export function assertInstanceOf<T>(
    value: unknown,
    constructor: new (...args: any) => T,
    message?: string,
): asserts value is T {
    assert.instanceOf(value, constructor, message);
}

export function isInstanceOf<T>(value: unknown, constructor: new (...args: any) => T): value is T {
    return value instanceof constructor;
}

export function getAssertedDeclarativeElement<
    DeclarativeElementGeneric extends DeclarativeElementDefinition,
>(
    searchFor: DeclarativeElementGeneric,
    searchIn: Element,
): DeclarativeElementGeneric['instanceType'] {
    if (searchIn.tagName.toLowerCase() === searchFor.tagName.toLowerCase()) {
        assertInstanceOf(searchIn, searchFor);
        return searchIn as DeclarativeElementGeneric['instanceType'];
    }

    const result = queryTree(searchIn, [searchFor.tagName]);
    assertInstanceOf(result, searchFor);
    assert.strictEqual(result!.tagName, searchFor.tagName);

    return result as DeclarativeElementGeneric['instanceType'];
}

export function testIdSelector(testId: string): string {
    return `[data-test-id="${testId}"]`;
}

export function getCenterOfElement(element: Element): [number, number] {
    const rect = element.getBoundingClientRect();
    return [
        Math.floor((rect.left + rect.right) / 2),
        Math.floor((rect.bottom + rect.top) / 2),
    ];
}

export function queryWithAssert<T extends Element>(
    query: string | [string, ...string[]],
    constructor: new (...args: any) => T,
    searchIn: Element | Document,
): T {
    if (!Array.isArray(query)) {
        query = [query];
    }
    const result = queryTree(searchIn, query);
    assertInstanceOf(result, constructor);

    return result;
}

/** Accounts for shadow DOM */
function queryTree(
    context: Element | Document | undefined,
    // at least one string is required or this function makes no sense
    selectors: [string, ...string[]],
): Element | Document | undefined {
    /**
     * The callback is split out here to appease the Type Gods. Without it, finalElement will be the
     * type of the internal currentContext (which is incorrect).
     */
    const reduceCallback = (
        currentContext: Element | Document | undefined | ShadowRoot,
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

export async function assertRejects(input: () => PromiseLike<any>, message?: string): Promise<void>;
export async function assertRejects(
    input: () => PromiseLike<any>,
    errType: RegExp | ErrorConstructor,
    message?: string,
): Promise<void>;
export async function assertRejects(
    input: () => PromiseLike<any>,
    errType: ErrorConstructor,
    regExp: RegExp,
): Promise<void>;
export async function assertRejects(
    input: () => PromiseLike<any>,
    messageOrRegExpOrError?: string | RegExp | ErrorConstructor,
    messageOrRegExp?: string | RegExp,
): Promise<void> {
    let thrown: unknown = undefined;
    let errorThrown = false;
    try {
        await input();
    } catch (error) {
        errorThrown = true;
        thrown = error;
    }
    assert.isTrue(errorThrown, 'No error was thrown.');

    assert.throws(
        () => {
            throw thrown;
        },
        messageOrRegExpOrError as any,
        messageOrRegExp as any,
    );
}
