import {AssertionError, check} from '@augment-vir/assert';
import {getObjectTypedKeys, wrapInTry} from '@augment-vir/common';
import {
    DeclarativeElementDefinition,
    StaticDeclarativeElementProperties,
} from './declarative-element.js';

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
    render: '',
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
    if (!check.isFunction(input)) {
        throw new AssertionError('input is not an element constructor', failMessage);
    }
    expectedStaticProperties.forEach((expectedProperty) => {
        if (!check.hasKey(input, expectedProperty)) {
            throw new AssertionError(`missing prop '${expectedProperty}'`, failMessage);
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
