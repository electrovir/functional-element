import {describe, it} from '@augment-vir/test';
import {NonEmptyString} from './type.js';

describe('nonEmptyString', () => {
    it('should ensure type safety', () => {
        const emptyString = '';
        // @ts-expect-error: blocks an empty string
        const nonEmptyString: NonEmptyString<'something'> = emptyString;
        const nonEmptyString2: NonEmptyString<'something'> = nonEmptyString;

        // @ts-expect-error: blocks a string mismatch
        const nonSomethingString: NonEmptyString<'something'> = 'derp';
        const somethingString: NonEmptyString<'something'> = 'something';
    });
});
