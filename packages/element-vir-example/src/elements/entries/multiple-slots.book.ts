import {defineBookPage} from 'element-book';
import {HTMLTemplateResult, css, defineElement, defineElementNoInputs, html} from 'element-vir';

const VirTestMultipleSlots = defineElementNoInputs({
    tagName: 'vir-test-multiple-slots',
    styles: css`
        .main-wrapper {
            font-size: 3em;
        }

        .secondary-wrapper {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .secondary-wrapper ::slotted(*) {
            display: flex;
            background-color: pink;
            border-radius: 16px;
            height: 100px;
            width: 100px;
        }
    `,
    renderCallback() {
        return html`
            <div class="main-wrapper">
                <slot name="main-slot"></slot>
            </div>
            <div class="secondary-wrapper">
                <slot name="secondary-slot"></slot>
            </div>
        `;
    },
});

const VirTestSingleTemplateToMultipleSlots = defineElement<{
    loadingTemplate: HTMLTemplateResult;
    count: number;
}>()({
    tagName: 'vir-test-single-template-to-multiple-slots',
    renderCallback({inputs}) {
        return new Array(inputs.count).fill(0).map((zero, index) => {
            const slotName = index % 2 ? 'main-slot' : 'secondary-slot';

            return html`
                <${VirTestMultipleSlots}>
                    <span slot=${slotName}>${inputs.loadingTemplate}</span>
                </${VirTestMultipleSlots}>
            `;
        });
    },
});

export const multipleSlotsPage = defineBookPage({
    title: 'multiple slots',
    parent: undefined,
    defineExamples({defineExample}) {
        defineExample({
            title: 'multiple slotted elements',
            stateInitStatic: {value: 0},
            render() {
                return html`
                    <${VirTestMultipleSlots}>
                        <p slot="main-slot">ABCD</p>
                        <p slot="secondary-slot">abcd</p>
                        <p slot="secondary-slot">abcd</p>
                        <p slot="secondary-slot">abcd</p>
                        <p slot="secondary-slot">abcd</p>
                        <p slot="secondary-slot">abcd</p>
                        <p slot="secondary-slot">abcd</p>
                    </${VirTestMultipleSlots}>
                `;
            },
        });
        defineExample({
            title: 'single template to multiple slots',
            stateInitStatic: {value: 0},
            render() {
                return html`
                    <${VirTestSingleTemplateToMultipleSlots.assign({
                        count: 5,
                        loadingTemplate: html`
                            Loading!!
                        `,
                    })}></${VirTestSingleTemplateToMultipleSlots}>
                `;
            },
        });
    },
});
