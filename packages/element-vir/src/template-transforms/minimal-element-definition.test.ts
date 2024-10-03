import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {MinimalElementDefinition, defineElementNoInputs} from '../index';

describe('MinimalElementDefinition', () => {
    it('matches an actual definition', () => {
        const TestElementDefinition = defineElementNoInputs({
            tagName: 'something-something-test-fad-time',
            renderCallback() {
                return 'hi';
            },
        });

        assert.tsType(TestElementDefinition).matches<MinimalElementDefinition>();
    });
});
