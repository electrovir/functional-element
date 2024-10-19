import {joinWithFinalConjunction} from '@augment-vir/common';
import {PopUpManager, ShowPopUpResult} from '../../util/pop-up-manager.js';
import {ViraDropdownOption} from './vira-dropdown-item.element.js';

export function filterToSelectedOptions({
    selected,
    options,
    isMultiSelect,
}: Readonly<{
    selected: ReadonlyArray<PropertyKey>;
    isMultiSelect?: boolean | undefined;
    options: ReadonlyArray<Readonly<ViraDropdownOption>>;
}>): ViraDropdownOption[] {
    if (selected.length && options.length) {
        const selectedOptions = options.filter((option) => selected.includes(option.id));

        if (selectedOptions.length > 1 && !isMultiSelect) {
            console.error(
                `vira-dropdown has multiple selections but \`isMultiSelect\` is not \`true\`. Truncating to the first selection.`,
            );
            return selectedOptions.slice(0, 1);
        } else {
            return selectedOptions;
        }
    } else {
        return [];
    }
}

export function assertUniqueIdProps(options: ReadonlyArray<Readonly<{id: PropertyKey}>>) {
    const usedIds = new Set<PropertyKey>();
    const duplicateIds: PropertyKey[] = [];
    options.forEach((option) => {
        if (usedIds.has(option.id)) {
            duplicateIds.push(option.id);
        } else {
            usedIds.add(option.id);
        }
    });

    if (duplicateIds.length) {
        throw new Error(
            `Duplicate option ids were given to ViraDropdown: ${joinWithFinalConjunction(duplicateIds)}`,
        );
    }
}

export function createNewSelection(
    id: PropertyKey,
    currentSelection: ReadonlyArray<PropertyKey>,
    isMultiSelect: boolean,
): PropertyKey[] {
    // eslint-disable-next-line sonarjs/no-selector-parameter
    if (isMultiSelect) {
        return currentSelection.includes(id)
            ? currentSelection.filter((entry) => entry !== id)
            : [
                  ...currentSelection,
                  id,
              ];
    } else {
        return [id];
    }
}

export function triggerPopUpState(
    {open, emitEvent}: {open: boolean; emitEvent: boolean},
    {
        updateState,
        popUpManager,
        dispatch,
        host,
    }: {
        updateState: (params: {showPopUpResult: ShowPopUpResult | undefined}) => void;
        popUpManager: PopUpManager;
        dispatch: (open: boolean) => void;
        host: HTMLElement;
    },
) {
    if (open) {
        updateState({showPopUpResult: popUpManager.showPopUp(host)});
    } else {
        popUpManager.removePopUp();
    }

    if (emitEvent) {
        dispatch(open);
    }
}