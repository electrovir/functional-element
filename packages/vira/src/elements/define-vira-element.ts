import {wrapDefineElement} from 'element-vir';

/**
 * Required prefix for all vira elements.
 *
 * @category Internal
 */
export const ViraTagNamePrefix = `vira-`;
/**
 * Required tag name for all vira elements. This includes {@link ViraTagNamePrefix} in it.
 *
 * @category Internal
 */
export type ViraTagName = `${typeof ViraTagNamePrefix}${string}`;

const {defineElement, defineElementNoInputs} = wrapDefineElement<ViraTagName>({
    assertInputs: (inputs) => {
        if (!inputs.tagName.startsWith(ViraTagNamePrefix)) {
            throw new Error(
                `Tag name should start with '${ViraTagNamePrefix}' but got '${inputs.tagName}'`,
            );
        }
    },
});

/**
 * Define a vira element with custom requirements (like the `vira-` element tag prefix).
 *
 * @category Internal
 */
export const defineViraElement = defineElement;
/**
 * Define a vira element with custom requirements (like the `vira-` element tag prefix).
 *
 * @category Internal
 */
export const defineViraElementNoInputs = defineElementNoInputs;
