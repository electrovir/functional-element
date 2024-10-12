import {elementsBookPage} from './elements.book.js';
import {ViraDropdownItemPage} from './entries/dropdown/vira-dropdown-item.element.book.js';
import {dropdownPage} from './entries/dropdown/vira-dropdown.book.js';
import {viraDropdownPage} from './entries/dropdown/vira-dropdown.element.book.js';
import {iconsBookPage} from './entries/icons.book.js';
import {viraButtonBookPage} from './entries/vira-button.element.book.js';
import {viraCollapsibleBookPage} from './entries/vira-collapsible-wrapper.element.book.js';
import {viraIconBookPage} from './entries/vira-icon.element.book.js';
import {viraImageBookPage} from './entries/vira-image.element.book.js';
import {viraInputBookPage} from './entries/vira-input.element.book.js';
import {viraLinkBookPage} from './entries/vira-link.element.book.js';

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
