import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {Observable} from 'element-vir';
import {BookPageControlTypeEnum, definePageControl} from './book-page-controls.js';
import {defineBookPage, defineBookPageWithGlobals} from './define-book-page.js';

describe(defineBookPage.name, () => {
    it('has proper defineExample types', () => {
        defineBookPage({
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
                    // @ts-expect-error: initValue must be a string per the given "Text" controlType
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
                    // @ts-expect-error: render has no return
                    renderCallback() {},
                });

                // propagates control types to the child
                defineExample({
                    title: 'example with controls property state',
                    renderCallback({controls}) {
                        assert.tsType(controls.exampleControl).equals<string>();
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

        assert.isLengthExactly(Object.values(badPage.elementExamples), 1);

        Object.values(badPage.elementExamples).forEach((example) =>
            assert.isLengthExactly(example.errors, 1),
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
                            assert.tsType(state.innerState).equals<string>();
                            assert.tsType(controls.derp).equals<string>();

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
                            assert.tsType(state.innerState).equals<string>();
                            assert.tsType(state).matches<{
                                innerState: string;
                            }>();
                            assert.tsType(controls.derp).equals<string>();
                            assert.tsType(controls.superParentControl).equals<string>();
                            assert.tsType(controls.globalThing).equals<string>();

                            assert.tsType(controls).matches<{
                                derp: string;
                                superParentControl: string;
                            }>();

                            // @ts-expect-error: cannot access non-existent values
                            controls.blah;
                            // @ts-expect-error: cannot access non-existent values
                            state.blah;

                            return `hello: ${controls.derp}`;
                        },
                    }),
                ];
            },
        });
    });
});
