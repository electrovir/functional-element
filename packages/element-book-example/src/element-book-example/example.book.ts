import {
    BookPage,
    BookPageControlTypeEnum,
    defineBookPage,
    defineBookPageWithGlobals,
    definePageControl,
} from 'element-book';
import {css, html, unsafeCSS} from 'element-vir';

const parentPage1 = defineBookPageWithGlobals<{
    testGlobalControl: 'it worked!';
}>()({
    title: 'Parent Page 1',
    parent: undefined,
    controls: {
        'Parent Control': definePageControl({
            controlType: BookPageControlTypeEnum.Color,
            initValue: '#33ccff',
        }),
        'Hidden control': definePageControl({
            controlType: BookPageControlTypeEnum.Hidden,
            initValue: new RegExp('this can be anything'),
        }),
    },
});
const parentPage2 = defineBookPage({title: 'Parent Page 2', parent: undefined});
const subPage = defineBookPage({title: 'Sub Page 1', parent: parentPage2});

function createExamplePage(index: number, parent: BookPage) {
    const newPage = defineBookPage({
        title: `test ${index}`,
        parent,
        elementExamplesCallback({defineExample}) {
            new Array(20).fill(0).forEach((value, exampleIndex) => {
                defineExample({
                    title: `example ${index} ${exampleIndex}`,
                    renderCallback() {
                        return 'element example here';
                    },
                });
            });
        },
    });

    return newPage;
}

const duplicateErrorPage = defineBookPage({
    title: 'duplicate error page',
    parent: parentPage1,
    descriptionParagraphs: [
        'This is the description. It has stuff in it.',
        'Yay stuff!',
    ],
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'example 1',
            renderCallback() {
                return 'hi';
            },
        });
        defineExample({
            title: 'example 2',
            renderCallback() {
                return 'hi';
            },
        });
    },
});
const testPage3 = defineBookPage({
    title: 'test 3',
    controls: {
        thing: definePageControl({
            initValue: 'there',
            controlType: BookPageControlTypeEnum.Text,
        }),
        thing2: definePageControl({
            initValue: false,
            controlType: BookPageControlTypeEnum.Checkbox,
        }),
        thing3: definePageControl({
            initValue: 'hello',
            controlType: BookPageControlTypeEnum.Dropdown,
            options: [
                'hello',
                'hi',
                'yo',
            ],
        }),
    },
    parent: parentPage1,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: 'example 3 1',
            renderCallback() {
                return 'hi';
            },
        });
        defineExample({
            title: 'example 3 2',
            styles: css`
                .color-control {
                    width: 20px;
                    height: 20px;);
                }
            `,
            renderCallback({controls}) {
                const colorControlStyles = css`
                    background-color: ${unsafeCSS(controls['Parent Control'])};
                `;

                return html`
                    hello ${controls.thing}, ${controls.thing2}
                    <div style=${colorControlStyles} class="color-control"></div>
                    selected: ${controls.thing3} ${controls['Hidden control']}
                    <br />
                    global: ${controls.testGlobalControl}
                `;
            },
        });
        defineExample({
            title: 'example with error',
            renderCallback() {
                return `broken`;
            },
        });
        defineExample({
            title: 'example with error',
            renderCallback() {
                return `broken`;
            },
        });
    },
});

export const entries = [
    parentPage1,
    createExamplePage(0, parentPage2),
    subPage,
    ...new Array(100).fill(0).map((_value, index) => createExamplePage(index + 1, subPage)),
    duplicateErrorPage,
    duplicateErrorPage,
    testPage3,
    parentPage2,
];

console.info({entries});
