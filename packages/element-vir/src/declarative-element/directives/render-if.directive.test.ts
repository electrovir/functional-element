import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {renderIf} from './render-if.directive';

describe(renderIf.name, () => {
    it('has correct types', () => {
        assert.tsType(renderIf(true, 'hello', 4)).equals<string | number>();
        assert.tsType(renderIf(true, 'hello')).equals<string | undefined>();
    });

    it('returns the appropriate input', () => {
        function renderIfWrapper(input: boolean) {
            return renderIf(input, 1, 2);
        }
        assert.strictEquals(renderIfWrapper(true), 1);
        assert.strictEquals(renderIfWrapper(false), 2);
    });
});
