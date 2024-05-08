import {ViraDropdownOption} from './vira-dropdown-item.element';

export const mockOptions = [
    {
        label: 'Option 0',
        id: 0,
    },
    {
        label: 'Option 1',
        id: 1,
    },
    {
        label: 'Option 2',
        id: 2,
    },
    {
        label: 'Option 3',
        id: 3,
    },
] as const satisfies ReadonlyArray<Readonly<ViraDropdownOption>>;
