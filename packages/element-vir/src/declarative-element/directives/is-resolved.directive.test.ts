import {itCases} from '@augment-vir/browser-testing';
import {assert} from '@open-wc/testing';
import {AsyncValue} from './async-prop';
import {isError, isResolved, resolvedOrUndefined} from './is-resolved.directive';

describe(isResolved.name, () => {
    itCases(isResolved, [
        {
            it: 'rejects promises',
            input: new Promise(() => {}),
            expect: false,
        },
        {
            it: 'accepts errors',
            input: new Error(),
            expect: true,
        },
        {
            it: 'accepts plain values',
            input: {
                stuff: 'hello',
            },
            expect: true,
        },
    ]);
});

describe(isError.name, () => {
    it('does not block isResolved', () => {
        const myValue = {} as AsyncValue<{something: 'crazy'}>;

        if (isError(myValue)) {
            throw myValue;
        } else if (isResolved(myValue)) {
            assert.isObject(myValue);
        }
    });
});

describe(resolvedOrUndefined.name, () => {
    const errorInstance = new Error();

    itCases(resolvedOrUndefined, [
        {
            it: 'rejects promises',
            input: new Promise(() => {}),
            expect: undefined,
        },
        {
            it: 'passes errors',
            input: errorInstance,
            expect: errorInstance,
        },
        {
            it: 'accepts plain values',
            input: {
                stuff: 'hello',
            },
            expect: {
                stuff: 'hello',
            },
        },
    ]);
});
