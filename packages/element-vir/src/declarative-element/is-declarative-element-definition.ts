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

/**
 * Asserts that the given input is a declarative element definition.
 *
 * @category Util
 * @see
 * - {@link isDeclarativeElementDefinition}
 */
export function assertDeclarativeElementDefinition(
    input: unknown,
    failMessage?: string | undefined,
): asserts input is DeclarativeElementDefinition {
    if (!check.isFunction(input)) {
        throw new AssertionError('Input is not a declarative element constructor', failMessage);
    }
    expectedStaticProperties.forEach((expectedProperty) => {
        if (!check.hasKey(input, expectedProperty)) {
            throw new AssertionError(`missing prop '${expectedProperty}'`, failMessage);
        }
    });
}

/**
 * Checks that the given input is a declarative element definition.
 *
 * @category Util
 * @see
 * - {@link assertDeclarativeElementDefinition}
 */
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
