import {getObjectTypedKeys} from '@augment-vir/common';
import {DeclarativeElement} from '../declarative-element.js';

export function assignInputs(element: Element, inputs: object): void {
    const instanceState = (element as Partial<DeclarativeElement>).instanceState;

    getObjectTypedKeys(inputs).forEach((newInputKey) => {
        if (instanceState && newInputKey in instanceState) {
            throw new Error(
                `Cannot set input '${String(newInputKey)}' on '${element.tagName}'. '${element.tagName}' already has a state property with the same name.`,
            );
        }
        if ('instanceInputs' in element) {
            (element.instanceInputs as DeclarativeElement['instanceInputs'])[newInputKey] =
                inputs[newInputKey];
        } else {
            element[newInputKey] = inputs[newInputKey];
        }
    });

    /** Wipe out all inputs that weren't set to undefined (as expected) */
    if ('instanceInputs' in element) {
        getObjectTypedKeys(element.instanceInputs).forEach((existingKey) => {
            if (!(existingKey in inputs)) {
                (element.instanceInputs as DeclarativeElement['instanceInputs'])[existingKey] =
                    undefined;
            }
        });
    }

    markInputsAsHavingBeenSet(element);
}

export function markInputsAsHavingBeenSet(element: Element): void {
    if (!(element as DeclarativeElement)._haveInputsBeenSet) {
        (element as DeclarativeElement)._haveInputsBeenSet = true;
    }
}
