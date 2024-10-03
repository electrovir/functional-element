import {describe, it} from '@augment-vir/test';
import {NonEmptyString} from './type';

describe('nonEmptyString', () => {
    it('should ensure type safety', () => {
        // NonEmptyString
        const emptyString = '';
        // @ts-expect-error
        const nonEmptyString: NonEmptyString<'something'> = emptyString;
        const nonEmptyString2: NonEmptyString<'something'> = nonEmptyString;

        // @ts-expect-error
        const nonSomethingString: NonEmptyString<'something'> = 'derp';
        const somethingString: NonEmptyString<'something'> = 'something';
    });
});
