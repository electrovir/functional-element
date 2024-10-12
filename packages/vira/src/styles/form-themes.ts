import {defineCssVars} from 'lit-css-vars';
import {viraFocusCssVars} from './focus.js';

export const viraFormCssVars = defineCssVars({
    'vira-form-border-color': '#cccccc',
    'vira-form-background-color': 'white',
    'vira-form-foreground-color': 'black',
    'vira-form-focus-color': viraFocusCssVars['vira-focus-outline-color'].value,

    'vira-form-selection-hover-background-color': '#d2eaff',
    'vira-form-selection-hover-foreground-color': 'black',
});
