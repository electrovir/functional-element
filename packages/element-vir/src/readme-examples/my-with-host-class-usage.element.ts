import {defineElementNoInputs, html} from '../index.js';
import {MyWithHostClassDefinition} from './my-with-host-class-definition.element.js';

export const MyWithHostClassUsage = defineElementNoInputs({
    tagName: 'my-with-host-class-usage',
    render() {
        return html`
            <${MyWithHostClassDefinition}
                class=${MyWithHostClassDefinition.hostClasses['my-with-host-class-definition-a']}
            ></${MyWithHostClassDefinition}>
        `;
    },
});
