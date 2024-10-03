import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {
    css,
    defineElement,
    defineElementEvent,
    defineElementNoInputs,
    html,
    listen,
    wrapDefineElement,
} from '../index.js';

describe(wrapDefineElement.name, () => {
    type MySpecificTagName = `my-${string}`;
    type MySpecificInputs = {noInputsActually: string};
    const {defineElement: myDefineElement, defineElementNoInputs: myDefineElementNoInputs} =
        wrapDefineElement<MySpecificTagName>();

    it('should match original define element types', () => {
        assert
            .tsType(
                myDefineElement<MySpecificInputs>()({
                    tagName: 'my-tag-abc0' as 'my-tag-abc',
                    renderCallback() {
                        return '';
                    },
                }),
            )
            .equals(
                defineElement<MySpecificInputs>()({
                    tagName: 'my-tag-abc1' as 'my-tag-abc',
                    renderCallback() {
                        return '';
                    },
                }),
            );

        myDefineElement<MySpecificInputs>()({
            // @ts-expect-error
            tagName: 'bad-tag-1',
            renderCallback() {
                return '';
            },
        });

        assert
            .tsType(
                myDefineElementNoInputs({
                    tagName: 'my-tag-abc2' as 'my-tag-abc',
                    renderCallback() {
                        return '';
                    },
                }),
            )
            .equals(
                defineElementNoInputs({
                    tagName: 'my-tag-abc3' as 'my-tag-abc',
                    renderCallback() {
                        return '';
                    },
                }),
            );

        assert
            .tsType(
                myDefineElementNoInputs({
                    tagName: 'my-tag-abc4',
                    hostClasses: {
                        'my-tag-abc4-do-thing': false,
                    },
                    cssVars: {
                        'my-tag-abc4-var': 'blue',
                    },
                    styles: ({cssVars, hostClasses}) => css`
                        ${hostClasses['my-tag-abc4-do-thing'].selector} {
                            color: ${cssVars['my-tag-abc4-var'].value};
                        }

                        :host(${hostClasses['my-tag-abc4-do-thing'].name}) {
                            ${cssVars['my-tag-abc4-var'].name}: green;
                        }
                    `,
                    events: {
                        outputOne: defineElementEvent<string>(),
                    },
                    renderCallback() {
                        return '';
                    },
                }),
            )
            .matches(
                defineElementNoInputs({
                    tagName: 'my-tag-abc5' as 'my-tag-abc4',
                    hostClasses: {
                        ['my-tag-abc5-do-thing' as 'my-tag-abc4-do-thing']: false,
                    },
                    cssVars: {
                        ['my-tag-abc5-var' as 'my-tag-abc4-var']: 'blue',
                    },
                    events: {
                        outputOne: defineElementEvent<string>(),
                    },
                    renderCallback() {
                        return '';
                    },
                }),
            );

        myDefineElementNoInputs({
            // @ts-expect-error
            tagName: 'bad-tag-2',
            renderCallback() {
                return '';
            },
        });
    });

    it('requires non-void returning renderCallback', () => {
        myDefineElementNoInputs({
            tagName: 'my-thing-abc6',
            // renderCallback missing a return is not allowed
            // @ts-expect-error
            renderCallback() {},
        });
        myDefineElementNoInputs({
            tagName: 'my-thing-abc7',
            // returning undefined is chill
            renderCallback() {
                return undefined;
            },
        });
    });

    it('should still create a valid element', async () => {
        const MySpecificElement = myDefineElement<MySpecificInputs>()({
            tagName: 'my-tag-abc8',
            events: {
                myOutput: defineElementEvent<number>(),
            },
            renderCallback() {
                return '';
            },
        });

        const assignedInput = 'hello';

        const elementInstance = await testWeb.render(html`
            <${MySpecificElement.assign({noInputsActually: assignedInput})}
                ${listen(MySpecificElement.events.myOutput, (event) => {
                    assert.tsType(event.detail).equals<number>();
                })}
            ></${MySpecificElement}>
        `);

        assert.instanceOf(elementInstance, MySpecificElement);

        assert.strictEquals(elementInstance.instanceInputs.noInputsActually, assignedInput);
    });
});
