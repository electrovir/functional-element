import {describe, it} from '@augment-vir/test';
import {defineElement} from '../define-element';
import {assign} from './assign.directive';

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
            // blocks invalid property value types
            // @ts-expect-error
            stuff: 5,
        });
        assign(
            SampleElementDefinition,
            // blocks invalid inputs
            // @ts-expect-error
            42,
        );
    });

    it('has proper types for bare assigns', () => {
        assign({
            hi: 'there',
        });
        // blocks invalid inputs
        // @ts-expect-error
        assign(57);
    });

    it('has typescript error if a bare HTMLElement input', () => {
        // @ts-expect-error
        assign(SampleElementDefinition);
    });
});
