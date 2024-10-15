import {defineElement, html, renderIf} from '../index.js';

export const MyWithRenderIf = defineElement<{shouldRender: boolean}>()({
    tagName: 'my-with-render-if',
    render({inputs}) {
        return html`
            ${renderIf(
                inputs.shouldRender,
                html`
                    I'm conditionally rendered!
                `,
            )}
        `;
    },
});
