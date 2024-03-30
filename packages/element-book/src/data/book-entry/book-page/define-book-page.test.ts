import {assert} from '@open-wc/testing';
import {Observable} from 'element-vir';
import {assertTypeOf} from 'run-time-assertions';
import {BookPageControlTypeEnum, definePageControl} from './book-page-controls';
import {defineBookPage, defineBookPageWithGlobals} from './define-book-page';

describe(defineBookPage.name, () => {
    it('has proper defineExample types', () => {
        return defineBookPage({
            parent: undefined,
            title: 'example page',
            /** Test that we can assign undefined here. */
            descriptionParagraphs: undefined,
            controls: {
                exampleControl: definePageControl({
                    initValue: 'nope',
                    controlType: BookPageControlTypeEnum.Text,
                }),
                exampleControlWrong: definePageControl({
                    // initValue must be a string per the given "Text" controlType
                    // @ts-expect-error
                    initValue: false,
                    controlType: BookPageControlTypeEnum.Text,
                }),
            },
            elementExamplesCallback({defineExample}) {
                // // does not work
                // {
                //     stateInitStatic: {value: 'hi'},
                //     renderCallback({state}) {
                //         return `yo ${state.value}`
                //     },
                // },
                defineExample({
                    title: 'example with observable property state',
                    stateInitStatic: {
                        observable: new Observable<number | undefined>({defaultValue: undefined}),
                    },
                    descriptionParagraphs: [
                        'yo',
                        'what up',
                    ],
                    renderCallback({state, updateState}) {
                        if (state.observable.value === undefined) {
                            state.observable.setValue(5);
                        }
                        return '';
                    },
                });

                // errors if there is no render return
                defineExample({
                    title: 'example with no render return',
                    // @ts-expect-error
                    renderCallback() {},
                });

                // propagates control types to the child
                defineExample({
                    title: 'example with controls property state',
                    renderCallback({controls}) {
                        assertTypeOf(controls.exampleControl).toEqualTypeOf<string>();
                        return '';
                    },
                });
            },
        });
    });

    it('errors multiple examples with the same name are used', () => {
        const badPage = defineBookPage({
            parent: undefined,
            title: 'derp',
            elementExamplesCallback({defineExample}) {
                defineExample({
                    title: 'duplicate',
                    renderCallback() {
                        return 'hi';
                    },
                });
                defineExample({
                    title: 'duplicate',
                    renderCallback() {
                        return 'hi';
                    },
                });
            },
        });

        assert.lengthOf(Object.values(badPage.elementExamples), 1);

        Object.values(badPage.elementExamples).forEach((example) =>
            assert.lengthOf(example.errors, 1),
        );
    });
});

describe('BookPageControlValues', () => {
    it('reads controls from a single parent', () => {
        defineBookPage({
            parent: undefined,
            title: 'orphan example page',
            controls: {
                derp: definePageControl({
                    controlType: BookPageControlTypeEnum.Text,
                    initValue: 'init value',
                }),
            },
            elementExamplesCallback({defineExample}) {
                return [
                    defineExample({
                        title: 'first example',
                        stateInitStatic: {
                            innerState: 'my value',
                        },
                        renderCallback({controls, state}) {
                            assertTypeOf(state.innerState).toEqualTypeOf<string>();
                            assertTypeOf(controls.derp).toEqualTypeOf<string>();

                            return `hello: ${controls.derp}`;
                        },
                    }),
                ];
            },
        });
    });

    it('reads controls from nested parents', () => {
        const superParent = defineBookPageWithGlobals<{globalThing: string}>()({
            parent: undefined,
            title: 'super parent',
            controls: {
                superParentControl: definePageControl({
                    controlType: BookPageControlTypeEnum.Text,
                    initValue: 'derp',
                }),
            },
        });

        defineBookPage({
            parent: superParent,
            title: 'child page',
            controls: {
                derp: definePageControl({
                    controlType: BookPageControlTypeEnum.Text,
                    initValue: 'init value',
                }),
            },
            elementExamplesCallback({defineExample}) {
                return [
                    defineExample({
                        title: 'first example',
                        stateInitStatic: {
                            innerState: 'my value',
                        },
                        renderCallback({controls, state}) {
                            assertTypeOf(state.innerState).toEqualTypeOf<string>();
                            assertTypeOf(state).toMatchTypeOf<{
                                innerState: string;
                            }>();
                            assertTypeOf(controls.derp).toEqualTypeOf<string>();
                            assertTypeOf(controls.superParentControl).toEqualTypeOf<string>();
                            assertTypeOf(controls.globalThing).toEqualTypeOf<string>();

                            assertTypeOf(controls).toMatchTypeOf<{
                                derp: string;
                                superParentControl: string;
                            }>();

                            // cannot access non-existent values
                            // @ts-expect-error
                            controls.blah;
                            // cannot access non-existent values
                            // @ts-expect-error
                            state.blah;

                            return `hello: ${controls.derp}`;
                        },
                    }),
                ];
            },
        });
    });
});
