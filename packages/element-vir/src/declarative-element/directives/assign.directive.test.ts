/* eslint-disable @typescript-eslint/no-deprecated */
/* eslint-disable sonarjs/deprecation */

import {describe, it} from '@augment-vir/test';
import {defineElement} from '../define-element.js';
import {assign} from './assign.directive.js';

describe(assign.name, () => {
    const SampleElementDefinition = defineElement<{stuff: string}>()({
        tagName: 'sample-element',
        renderCallback() {
            return '';
        },
    });

    it('has proper types for element definitions', () => {
        assign(SampleElementDefinition, {
            stuff: 'hi',
        });
        assign(SampleElementDefinition, {
            // @ts-expect-error: blocks invalid property value types
            stuff: 5,
        });
        assign(
            SampleElementDefinition,
            // @ts-expect-error: blocks invalid inputs
            42,
        );
    });

    it('has proper types for bare assigns', () => {
        assign({
            hi: 'there',
        });
        // @ts-expect-error: blocks invalid inputs
        assign(57);
    });

    it('has typescript error if a bare HTMLElement input', () => {
        // @ts-expect-error: cannot a bare html input
        assign(SampleElementDefinition);
    });
});
