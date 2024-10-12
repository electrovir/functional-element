import {css, defineElementNoInputs, html} from '../index.js';

export const MyWithStyles = defineElementNoInputs({
    tagName: 'my-with-styles',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            font-family: sans-serif;
        }

        span + span {
            margin-top: 16px;
        }
    `,
    renderCallback() {
        return html`
            <span>Hello there!</span>
            <span>How are you doing?</span>
        `;
    },
});
