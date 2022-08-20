import {css, defineElementNoInputs, html} from '..';

export const MyAppWithHostClasses = defineElementNoInputs({
    tagName: 'my-app-with-host-classes',
    stateInit: {
        myProp: 'hello there',
    },
    hostClasses: {
        /**
         * Setting the value to false means this host class will not ever automatically be applied.
         * It will simply be a static member on the element for manual application in consumers when desired.
         */
        styleVariationA: false,
        /**
         * This host class will be automatically applied if the given callback evaluated to true
         * after a call to renderCallback.
         */
        automaticallyAppliedVariation: ({state}) => {
            return state.myProp === 'foo';
        },
    },
    /**
     * Apply styles to the host classes by using a callback for "styles". The callback's argument
     * contains the host classes defined above in the "hostClasses" property.
     */
    styles: ({hostClass}) => css`
        ${hostClass.automaticallyAppliedVariation} {
            color: blue;
        }

        ${hostClass.styleVariationA} {
            color: red;
        }
    `,
    renderCallback: ({state}) => html`
        ${state.myProp}
    `,
});
