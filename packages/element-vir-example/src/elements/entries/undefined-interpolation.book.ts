import {defineBookPage} from 'element-book';
import {html} from 'element-vir';

export const undefinedInterpolationBookPage = defineBookPage({
    title: 'undefined interpolation',
    parent: undefined,
    defineExamples({defineExample}) {
        defineExample({
            title: 'undefined',
            render() {
                return html`
                    here: ${undefined}
                `;
            },
        });
        defineExample({
            title: 'empty string',
            render() {
                return html`
                    here: ${''}
                `;
            },
        });
        defineExample({
            title: 'null',
            render() {
                return html`
                    here: ${null}
                `;
            },
        });
    },
});
