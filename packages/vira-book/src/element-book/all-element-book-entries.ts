import {elementsBookPage} from './elements.book';
import {ViraDropdownItemPage} from './entries/dropdown/vira-dropdown-item.element.book';
import {dropdownPage} from './entries/dropdown/vira-dropdown.book';
import {viraDropdownPage} from './entries/dropdown/vira-dropdown.element.book';
import {iconsBookPage} from './entries/icons.book';
import {viraButtonBookPage} from './entries/vira-button.element.book';
import {viraCollapsibleBookPage} from './entries/vira-collapsible-wrapper.element.book';
import {viraIconBookPage} from './entries/vira-icon.element.book';
import {viraImageBookPage} from './entries/vira-image.element.book';
import {viraInputBookPage} from './entries/vira-input.element.book';
import {viraLinkBookPage} from './entries/vira-link.element.book';

export const allElementBookEntries = [
    elementsBookPage,
    iconsBookPage,
    dropdownPage,

    viraButtonBookPage,
    viraCollapsibleBookPage,
    ViraDropdownItemPage,
    viraDropdownPage,
    viraIconBookPage,
    viraImageBookPage,
    viraInputBookPage,
    viraLinkBookPage,
].sort((a, b) => a.title.localeCompare(b.title));
