import {randomBoolean, randomString} from '@augment-vir/common';
import {assertTypeOf} from 'run-time-assertions';
import {defineElement} from './define-element';

describe(defineElement.name, () => {
    it('does not allow HTMLElement properties in state or inputs', () => {
        defineElement<{
            style: string;
            inputKey: string;
        }>()(
            // @ts-expect-error style is a default HTMLElement key
            {
                tagName: 'blah-blah-blah-1',
                renderCallback() {
                    return 'hi';
                },
            },
        );
        defineElement<{}>()(
            // @ts-expect-error classList is a default HTMLElement key
            {
                tagName: 'blah-blah-blah-2',
                stateInitStatic: {
                    classList: ['hi'],
                },
                renderCallback() {
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
                renderCallback() {
                    return 'hi';
                },
            },
        );
    });

    it('blocks render callbacks without a return type', () => {
        defineElement<{}>()({
            tagName: `some-tag-${randomString()}`,
            cleanupCallback({host}) {},
            // render callback must return something
            // @ts-expect-error
            renderCallback() {},
        });
        defineElement<{}>()({
            tagName: `some-tag-2-${randomString()}`,
            // returning undefined is cool
            renderCallback() {
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
            // render callback must return something
            // @ts-expect-error
            renderCallback() {},
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
        defineElement<{}>()({
            tagName: `some-tag-${randomString()}`,
            // renderCallback cannot be async
            // @ts-expect-error
            async renderCallback() {
                return 'hello';
            },
        });
        defineElement<{}>()({
            tagName: `some-tag-2-${randomString()}`,
            renderCallback() {
                return 'hello';
            },
        });
    });

    it('blocks init callbacks that are async', () => {
        defineElement<{}>()({
            tagName: `some-tag-${randomString()}`,
            // init callback does not need to return something
            async initCallback({host}) {
                return undefined;
            },
            renderCallback() {
                return 'hello';
            },
        });
        defineElement<{}>()({
            tagName: `some-tag-2-${randomString()}`,
            initCallback({host}) {
                return undefined;
            },
            renderCallback() {
                return 'hello';
            },
        });
    });

    it('allows host to be assigned to instance type', () => {
        const MyElement = defineElement<{}>()({
            tagName: `some-tag-${randomString()}`,
            // init callback does not need to return something
            initCallback({host}) {
                acceptHost(host);
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

    it('preserves slot names', () => {
        const MyElement = defineElement<{}>()({
            tagName: 'just-some-element-with-slot-names',
            slotNames: ['yo'],
            renderCallback() {
                return 'hi';
            },
        });
        assertTypeOf(MyElement.slotNames.yo).toEqualTypeOf<'yo'>();
    });
});
