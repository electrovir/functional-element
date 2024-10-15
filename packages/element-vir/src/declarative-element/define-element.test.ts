import {assert} from '@augment-vir/assert';
import {randomBoolean, randomString} from '@augment-vir/common';
import {describe, it} from '@augment-vir/test';
import {defineElement} from './define-element.js';

describe(defineElement.name, () => {
    it('does not allow HTMLElement properties in state or inputs', () => {
        defineElement<{
            style: string;
            inputKey: string;
        }>()(
            // @ts-expect-error style is a default HTMLElement key
            {
                tagName: 'blah-blah-blah-1',
                render() {
                    return 'hi';
                },
            },
        );
        defineElement()(
            // @ts-expect-error classList is a default HTMLElement key
            {
                tagName: 'blah-blah-blah-2',
                stateInitStatic: {
                    classList: ['hi'],
                },
                render() {
                    return 'hi';
                },
            },
        );
    });

    it('does not allow keys duplicated between inputs and state', () => {
        defineElement<{
            inputKey: string;
        }>()(
            // @ts-expect-error inputKey clashes between inputs and state
            {
                tagName: 'blah-blah-blah-3',
                stateInitStatic: {
                    inputKey: 0,
                    otherKey: 'hi',
                },
                render() {
                    return 'hi';
                },
            },
        );
    });

    it('blocks render callbacks without a return type', () => {
        defineElement()({
            tagName: `some-tag-${randomString()}`,
            cleanupCallback({host}) {},
            // @ts-expect-error: render callback must return something
            render() {},
        });
        defineElement()({
            tagName: `some-tag-2-${randomString()}`,
            // returning undefined is cool
            render() {
                return undefined;
            },
        });
    });
    it('allows partial inputs', () => {
        const MyElement = defineElement<{
            maybeInput?: string;
            maybeUndefined?: string | undefined;
        }>()({
            tagName: `some-tag-${randomString()}`,
            cleanupCallback({host}) {},
            // @ts-expect-error: render callback must return something
            render() {},
        });

        MyElement.assign({
            maybeInput: '',
            maybeUndefined: undefined,
        });

        MyElement.assign({
            maybeUndefined: undefined,
        });

        type MyType = {thing: string} | {derp: number};

        type Mapped<T> = T extends any ? {[Prop in keyof T]: {value: T[Prop]}} : never;

        const derp: Mapped<MyType> = {derp: {value: 5}};

        MyElement.assign({
            maybeUndefined: '',
        });
        const myThing = randomBoolean();
        MyElement.assign(
            myThing
                ? {
                      maybeUndefined: '',
                  }
                : {
                      maybeInput: 'hi',
                  },
        );

        MyElement.assign({});
    });

    it('blocks render callbacks that are async', () => {
        defineElement()({
            tagName: `some-tag-${randomString()}`,
            // @ts-expect-error: render cannot be async
            // eslint-disable-next-line @typescript-eslint/require-await
            async render() {
                return 'hello';
            },
        });
        defineElement()({
            tagName: `some-tag-2-${randomString()}`,
            render() {
                return 'hello';
            },
        });
    });

    it('blocks init callbacks that are async', () => {
        defineElement()({
            tagName: `some-tag-${randomString()}`,
            // init callback does not need to return something
            // eslint-disable-next-line @typescript-eslint/require-await
            async init({host}) {
                return undefined;
            },
            render() {
                return 'hello';
            },
        });
        defineElement()({
            tagName: `some-tag-2-${randomString()}`,
            init({host}) {
                return undefined;
            },
            render() {
                return 'hello';
            },
        });
    });

    it('allows host to be assigned to instance type', () => {
        const MyElement = defineElement()({
            tagName: `some-tag-${randomString()}`,
            // init callback does not need to return something
            init({host}) {
                acceptHost(host);
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

    it('preserves slot names', () => {
        const MyElement = defineElement()({
            tagName: 'just-some-element-with-slot-names',
            slotNames: ['yo'],
            render() {
                return 'hi';
            },
        });
        assert.tsType(MyElement.slotNames.yo).equals<'yo'>();
    });
});
