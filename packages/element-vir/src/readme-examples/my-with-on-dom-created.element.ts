import {defineElementNoInputs, html, onDomCreated} from '../index.js';

export const MyWithOnDomCreated = defineElementNoInputs({
    tagName: 'my-with-on-dom-created',
    render() {
        return html`
            <span
                ${onDomCreated((element) => {
                    // logs a span element
                    console.info(element);
                })}
            >
                Hello there!
            </span>
        `;
    },
});
