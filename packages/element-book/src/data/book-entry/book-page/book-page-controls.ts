import type {EmptyObject} from 'type-fest';

export type BookPageControl<ControlType extends BookPageControlTypeEnum = BookPageControlTypeEnum> =
    {
        controlType: ControlType;
        initValue: BookPageControlValueType[ControlType];
        /** The name and label for the control. */
        controlName: string;
    } & (ControlType extends BookPageControlTypeEnum.Dropdown
        ? {
              options: string[];
          }
        : EmptyObject);

export type BookPageControlInit<ControlType extends BookPageControlTypeEnum> = Omit<
    BookPageControl<ControlType>,
    // 'controlName' will be inserted later by the page
    'controlName'
>;

export function isControlInitType<const SpecificControlType extends BookPageControlTypeEnum>(
    controlInit: BookPageControlInit<any>,
    specificType: SpecificControlType,
): controlInit is BookPageControlInit<SpecificControlType> {
    return controlInit.controlType === specificType;
}

/**
 * Define a page control. This doesn't do anything fancy (in fact it only returns the input) but it
 * helps immensely with type inference.
 */
export function definePageControl<const ControlType extends BookPageControlTypeEnum>(
    controlInit: BookPageControlInit<ControlType>,
) {
    return controlInit;
}

export type ControlsToValues<ControlsInit extends BookPageControlsInitBase> = {
    [ControlName in keyof ControlsInit]: ControlsInit[ControlName]['initValue'];
};

export type BookPageControlsInitBase = Record<string, BookPageControlInit<BookPageControlTypeEnum>>;
export type BookPageControlsValues = ControlsToValues<BookPageControlsInitBase>;

export enum BookPageControlTypeEnum {
    Checkbox = 'checkbox',
    Color = 'color',
    Dropdown = 'dropdown',
    /** Hidden controls allow any values but they aren't displayed to the user for editing. */
    Hidden = 'hidden',
    Number = 'number',
    Text = 'text',
}

const anySymbol = Symbol('any-type');

const controlValueTypes = {
    [BookPageControlTypeEnum.Checkbox]: false,
    [BookPageControlTypeEnum.Color]: '',
    [BookPageControlTypeEnum.Dropdown]: '',
    [BookPageControlTypeEnum.Hidden]: anySymbol as any,
    [BookPageControlTypeEnum.Number]: 0,
    [BookPageControlTypeEnum.Text]: '',
} satisfies Readonly<Record<BookPageControlTypeEnum, any>>;

export type BookPageControlValueType = typeof controlValueTypes;

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
