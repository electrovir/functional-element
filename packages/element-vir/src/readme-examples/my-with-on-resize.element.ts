import {defineElementNoInputs, html, onResize} from '../index.js';

export const MyWithOnResize = defineElementNoInputs({
    tagName: 'my-with-on-resize',
    render() {
        return html`
            <span
                ${onResize((entry) => {
                    // this will track resizing of this span
                    // the entry parameter contains target and contentRect properties
                    console.info(entry);
                })}
            >
                Hello there!
            </span>
        `;
    },
});
