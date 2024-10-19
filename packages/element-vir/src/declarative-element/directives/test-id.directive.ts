import {createAttributeDirective} from './create-attribute-directive.js';

const {attributeDirective, attributeSelector, attributeName} =
    createAttributeDirective('data-test-id');

/**
 * Assigns the given id as a test id attribute to the attached element.
 *
 * @category Test
 * @example
 *
 * ```ts
 * import {html, defineElementNoInputs, testId} from 'element-vir';
 *
 * const MyElement = defineElementNoInputs({
 *     tagName: 'my-element',
 *     render() {
 *         return html`
 *             <div ${testId('my-test')}>Some div</div>
 *         `;
 *     },
 * });
 * ```
 */
export const testId = attributeDirective;

/**
 * Construct an attribute selector for the given test id.
 *
 * @category Test
 * @example
 *
 * ```ts
 * import {html, selectTestId} from 'element-vir';
 * import {testWeb} from '@augment-vir/test';
 * import {assert} from '@augment-vir/assert';
 *
 * const instance = testWeb.render(html`
 *     <${MyElement}></${MyElement}>
 * `);
 * assert.instanceOf(instance, MyElement);
 * instance.shadowRoot.querySelector(selectTestId('my-test'));
 * ```
 */
export const testIdSelector = attributeSelector;

/**
 * The test id attribute name.
 *
 * @category Test
 */
export const testIdAttributeName = attributeName;
