import {createAttributeDirective} from './create-attribute-directive.js';

export const {
    attributeDirective: testId,
    attributeSelector: testIdBy,
    attributeName: testIdAttributeName,
} = createAttributeDirective('data-test-id');
