import {defineFunctionalElement, html} from '../..';

export const VirWithProps = defineFunctionalElement({
    tagName: 'vir-with-props',
    props: {
        first: 1,
        second: 'two',
    },
    renderCallback: ({props}) => {
        return html`
            <span data-test-id="first">${props.first}</span>
            <span data-test-id="second">${props.second}</span>
        `;
    },
});