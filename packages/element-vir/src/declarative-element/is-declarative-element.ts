import {check} from '@augment-vir/assert';
import {DeclarativeElement} from './declarative-element.js';

/**
 * Checks if the input is an instance of a DeclarativeElement, the super class of all custom
 * elements defined with element-vir.
 */
export function isDeclarativeElement(input: unknown): input is DeclarativeElement {
    const markerProperties: ReadonlyArray<keyof DeclarativeElement> = [
        'instanceInputs',
        'instanceState',
        'definition',
    ];
    return check.hasKeys(input, markerProperties);
}
/**
 * Checks if the input is an instance of a DeclarativeElement, the super class of all custom
 * elements defined with element-vir.
 */
export function assertIsDeclarativeElement(input: unknown): asserts input is DeclarativeElement {
    if (!isDeclarativeElement(input)) {
        console.error('this is not a declarative element:', input);
        throw new Error(
            `${String(
                check.hasKey(input, 'tagName') ? input.tagName : input,
            )} is not a declarative element.`,
        );
    }
}
