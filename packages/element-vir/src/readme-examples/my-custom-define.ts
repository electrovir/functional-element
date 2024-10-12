import {wrapDefineElement} from '../index.js';

export type VirTagName = `vir-${string}`;

export const {defineElement: defineVirElement, defineElementNoInputs: defineVirElementNoInputs} =
    wrapDefineElement<VirTagName>();

// add an optional assert callback
export const {
    defineElement: defineVerifiedVirElement,
    defineElementNoInputs: defineVerifiedVirElementNoInputs,
} = wrapDefineElement<VirTagName>({
    assertInputs: (inputs) => {
        if (!inputs.tagName.startsWith('vir-')) {
            throw new Error(`all custom elements must start with "vir-"`);
        }
    },
});

// add an optional transform callback
export const {
    defineElement: defineTransformedVirElement,
    defineElementNoInputs: defineTransformedVirElementNoInputs,
} = wrapDefineElement<VirTagName>({
    transformInputs: (inputs) => {
        return {
            ...inputs,
            tagName: inputs.tagName.startsWith('vir-') ? `vir-${inputs.tagName}` : inputs.tagName,
        };
    },
});
