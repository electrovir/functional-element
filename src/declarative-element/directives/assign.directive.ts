import {noChange} from 'lit';
import {directive, Directive, DirectiveResult, PartInfo} from 'lit/directive.js';
import {assignInputs} from '../properties/assign-inputs';
import {PropertyInitMapBase} from '../properties/element-properties';
import {AllowObservablePropertySetter} from '../properties/observable-property/observable-property-handler';
import {extractElement} from './directive-helpers';

export type ElementDefinitionWithInputsType<
    InputsType extends PropertyInitMapBase = PropertyInitMapBase,
> = {inputsType: AllowObservablePropertySetter<InputsType>};

/** Assign an object matching an element's inputs to its inputs. */
export function assign<
    SpecificDeclarativeElement extends ElementDefinitionWithInputsType,
    SpecificInput extends Record<string, any>,
>(
    declarativeElement: SpecificDeclarativeElement,
    inputsObject: {} extends Required<SpecificDeclarativeElement['inputsType']>
        ? never
        : AllowObservablePropertySetter<SpecificDeclarativeElement['inputsType']>,
): DirectiveResult;
export function assign<
    SpecificDeclarativeElement extends ElementDefinitionWithInputsType,
    SpecificInput extends Record<string, any>,
>(inputsObject: SpecificInput extends typeof HTMLElement ? never : SpecificInput): DirectiveResult;
export function assign<
    SpecificDeclarativeElement extends ElementDefinitionWithInputsType,
    SpecificInput extends Record<string, any>,
>(
    declarativeElementOrInputs: SpecificDeclarativeElement | SpecificInput,
    inputsObject?: {} extends Required<SpecificDeclarativeElement['inputsType']>
        ? never
        : SpecificDeclarativeElement['inputsType'],
): DirectiveResult {
    /**
     * The directive generics (in listenDirective) are not strong enough to maintain their values.
     * Thus, the directive call is wrapped in this function.
     */
    if (inputsObject) {
        return assignDirective(
            declarativeElementOrInputs as ElementDefinitionWithInputsType,
            inputsObject,
        );
    } else {
        return assignDirective(undefined, declarativeElementOrInputs as Record<string, any>);
    }
}

const assignDirective = directive(
    class extends Directive {
        public readonly element: Element;

        constructor(partInfo: PartInfo) {
            super(partInfo);

            this.element = extractElement(partInfo, 'assign');
        }

        render(
            elementDefinition: ElementDefinitionWithInputsType | undefined,
            inputsObject: Record<PropertyKey, unknown>,
        ) {
            assignInputsObject(elementDefinition, this.element, inputsObject);
            return noChange;
        }
    },
);

export function assignInputsObject<
    DeclarativeElementDefinitionGeneric extends ElementDefinitionWithInputsType,
>(
    expectedElementConstructor: DeclarativeElementDefinitionGeneric | undefined,
    element: Element,
    assignmentObject: DeclarativeElementDefinitionGeneric['inputsType'],
) {
    assignInputs(element, assignmentObject);
}
