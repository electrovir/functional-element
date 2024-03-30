import {getObjectTypedKeys, isObject, isTruthy, wrapInTry} from '@augment-vir/common';
import {AssertionError, hasProperty} from 'run-time-assertions';
import {
    DeclarativeElementDefinition,
    StaticDeclarativeElementProperties,
} from './declarative-element';

const expectedStaticProperties = getObjectTypedKeys({
    assign: '',
    assignedInputs: '',
    cssVars: '',
    elementOptions: '',
    events: '',
    hostClasses: '',
    init: '',
    inputsType: '',
    isStrictInstance: '',
    renderCallback: '',
    slotNames: '',
    stateInitStatic: '',
    stateType: '',
    styles: '',
    tagName: '',
    updateStateType: '',
} satisfies Readonly<
    Record<keyof StaticDeclarativeElementProperties<any, any, any, any, any, any, any>, ''>
>);

export function assertDeclarativeElementDefinition(
    input: unknown,
    failMessage?: string | undefined,
): asserts input is DeclarativeElementDefinition {
    if (!isObject(input)) {
        throw new AssertionError(
            [
                'input is not an object',
                failMessage,
            ]
                .filter(isTruthy)
                .join(': '),
        );
    }
    expectedStaticProperties.forEach((expectedProperty) => {
        if (!hasProperty(input, expectedProperty)) {
            throw new AssertionError(
                [
                    `missing prop '${expectedProperty}'`,
                    failMessage,
                ]
                    .filter(isTruthy)
                    .join(': '),
            );
        }
    });
}
export function isDeclarativeElementDefinition(
    input: unknown,
): input is DeclarativeElementDefinition {
    return wrapInTry(
        () => {
            assertDeclarativeElementDefinition(input);
            return true;
        },
        {
            fallbackValue: false,
        },
    );
}
