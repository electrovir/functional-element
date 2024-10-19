import {ArrayElement} from '@augment-vir/common';

/**
 * Type safe mapping of slot names to themselves.
 *
 * @category Internal
 */
export type SlotNameMap<SlotNames extends ReadonlyArray<string>> = Readonly<{
    [SlotName in ArrayElement<SlotNames>]: SlotName;
}>;

/**
 * Converts an array of slot names into a `SlotNameMap`.
 *
 * @category Internal
 */
export function createSlotNamesMap<SlotNames extends ReadonlyArray<string>>(
    slotNames: SlotNames | undefined,
): SlotNameMap<SlotNames> {
    if (!slotNames) {
        return {} as SlotNameMap<SlotNames>;
    }
    const slotNameMap: Record<string, string> = slotNames.reduce(
        (accum, slotName) => {
            accum[slotName] = slotName;
            return accum;
        },
        {} as Record<string, string>,
    );

    return slotNameMap as SlotNameMap<SlotNames>;
}
