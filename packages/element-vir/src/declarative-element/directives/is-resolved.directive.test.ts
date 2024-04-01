import {itCases} from '@augment-vir/browser-testing';
import {assert} from '@open-wc/testing';
import {assertThrows, assertTypeOf} from 'run-time-assertions';
import {stateSetupKey} from '../properties/element-vir-state-setup';
import {AsyncValue, asyncProp} from './async-prop';
import {isAsyncError, isResolved, resolvedOrUndefined} from './is-resolved.directive';

describe(isResolved.name, () => {
    itCases(isResolved, [
        {
            it: 'rejects promises',
            input: new Promise(() => {}),
            expect: false,
        },
        {
            it: 'accepts errors',
            input: new Error() as AsyncValue<any>,
            expect: true,
        },
        {
            it: 'accepts plain values',
            input: {
                stuff: 'hello',
            } as AsyncValue<any>,
            expect: true,
        },
    ]);

    it('properly type guards', () => {
        const exampleAsyncProp = asyncProp({defaultValue: Promise.resolve('hi')})[stateSetupKey]();

        if (isResolved(exampleAsyncProp.value)) {
            assertTypeOf(exampleAsyncProp.value).toEqualTypeOf<string | Error>();
        }
    });

    it("can't accidentally be passed AsyncProp instead of AsyncValue", () => {
        const exampleAsyncProp = asyncProp({defaultValue: Promise.resolve('hi')})[stateSetupKey]();

        assertThrows(
            () => {
                // @ts-expect-error: AsyncProp cannot be passed into `isResolved`
                isResolved(exampleAsyncProp);
            },
            {
                matchMessage: 'Pass AsyncProp.value',
            },
        );
    });
});

describe(isAsyncError.name, () => {
    it('does not block isResolved', () => {
        const myValue = {} as AsyncValue<{something: 'crazy'}>;

        if (isAsyncError(myValue)) {
            assertTypeOf(myValue).toEqualTypeOf<Error>();
            throw myValue;
        } else if (isResolved(myValue)) {
            assert.isObject(myValue);
        }
    });

    it('fails if passed an AsyncProp', () => {
        const exampleAsyncProp = asyncProp({defaultValue: Promise.resolve('hi')})[stateSetupKey]();

        assertThrows(
            () => {
                // @ts-expect-error: AsyncProp cannot be passed into `isAsyncError`
                isAsyncError(exampleAsyncProp);
            },
            {
                matchMessage: 'Pass AsyncProp.value',
            },
        );
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
