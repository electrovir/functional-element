import type {EmptyObject} from 'type-fest';

/**
 * Adds a control to an element-book page.
 *
 * @category Internal
 */
export type BookPageControl<ControlType extends BookPageControlType = BookPageControlType> = {
    controlType: ControlType;
    initValue: BookPageControlValueType[ControlType];
    /** The name and label for the control. */
    controlName: string;
} & (ControlType extends BookPageControlType.Dropdown
    ? {
          options: string[];
      }
    : EmptyObject);

/**
 * Initialization options for an element-book page control.
 *
 * @category Internal
 */
export type BookPageControlInit<ControlType extends BookPageControlType> = Omit<
    BookPageControl<ControlType>,
    // 'controlName' will be inserted later by the page
    'controlName'
>;

/**
 * Checks and type guards that the input page control init is of the given type.
 *
 * @internal
 */
export function isControlInitType<const SpecificControlType extends BookPageControlType>(
    controlInit: BookPageControlInit<any>,
    specificType: SpecificControlType,
): controlInit is BookPageControlInit<SpecificControlType> {
    return controlInit.controlType === specificType;
}

/**
 * Define a page control. This doesn't do anything fancy (in fact it only returns the input) but it
 * helps immensely with type inference.
 *
 * @category Main
 */
export function definePageControl<const ControlType extends BookPageControlType>(
    controlInit: BookPageControlInit<ControlType>,
) {
    return controlInit;
}

/**
 * Maps an object of user-defined controls to their initial values.
 *
 * @category Internal
 */
export type ControlsToValues<ControlsInit extends BookPageControlsInitBase> = {
    [ControlName in keyof ControlsInit]: ControlsInit[ControlName]['initValue'];
};

/**
 * Base type for a arbitrary, user-defined object of page controls.
 *
 * @category Internal
 */
export type BookPageControlsInitBase = Record<string, BookPageControlInit<BookPageControlType>>;

/**
 * Base type for a arbitrary, user-defined object of page control values.
 *
 * @category Internal
 */
export type BookPageControlsValues = ControlsToValues<BookPageControlsInitBase>;

/**
 * All the supported page control types. One of these must be chosen when defining a page control.
 *
 * @category Main
 */
export enum BookPageControlType {
    Checkbox = 'checkbox',
    Color = 'color',
    Dropdown = 'dropdown',
    /** Hidden controls allow any values but they aren't displayed to the user for editing. */
    Hidden = 'hidden',
    Number = 'number',
    Text = 'text',
}

const anySymbol = Symbol('any-type');

/**
 * Specifies the default value for each page control type, as well as its type.
 *
 * @category Internal
 */
export const controlValueTypes = {
    [BookPageControlType.Checkbox]: false,
    [BookPageControlType.Color]: '',
    [BookPageControlType.Dropdown]: '',
    [BookPageControlType.Hidden]: anySymbol as any,
    [BookPageControlType.Number]: 0,
    [BookPageControlType.Text]: '',
} satisfies Readonly<Record<BookPageControlType, any>>;

/**
 * Each page control type mapped to the type of their value.
 *
 * @category Internal
 */
export type BookPageControlValueType = typeof controlValueTypes;

/**
 * Checks that the given control init object is valid.
 *
 * @internal
 */
export function checkControls(
    controlsInit: BookPageControlsInitBase | undefined,
    pageName: string,
): Error[] {
    if (!controlsInit) {
        return [];
    }

    const errors: Error[] = [];

    Object.entries(controlsInit).forEach(
        ([
            controlName,
            controlEntry,
        ]) => {
            const expectedInitDefault = controlValueTypes[controlEntry.controlType];

            if (expectedInitDefault === anySymbol) {
                return;
            }

            if (typeof expectedInitDefault !== typeof controlEntry.initValue) {
                errors.push(
                    new Error(
                        `Control '${controlName}' in page '${pageName}' has invalid initValue '${
                            controlEntry.initValue
                        }': expected initValue of type ${typeof expectedInitDefault} because the control is of type ${
                            controlEntry.controlType
                        }.`,
                    ),
                );
            }
            if (!controlName) {
                errors.push(new Error(`'${pageName}' cannot have an empty control name.`));
            }
        },
    );

    return errors;
}
