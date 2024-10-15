import {check} from '@augment-vir/assert';
import {css, html} from 'element-vir';
import {defineBookElement} from '../define-book-element.js';

export const BookError = defineBookElement<{message: string | ReadonlyArray<string>}>()({
    tagName: 'book-error',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            color: red;
            font-weight: bold;
        }

        p {
            margin: 0;
            padding: 0;
        }
    `,
    render({inputs}) {
        const paragraphs = check.isArray(inputs.message) ? inputs.message : [inputs.message];

        return paragraphs.map(
            (paragraph) => html`
                <p>${paragraph}</p>
            `,
        );
    },
});
