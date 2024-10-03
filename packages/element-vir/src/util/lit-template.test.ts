import {describe, itCases} from '@augment-vir/test';
import {unsafeSVG} from '../lit-exports/all-lit-exports';
import {html} from '../template-transforms/vir-html/vir-html';
import {convertTemplateToString} from './lit-template';

describe(convertTemplateToString.name, () => {
    itCases(convertTemplateToString, [
        {
            it: 'should handle attributes that are not surrounded in quotes',
            input: html`
                <img src=${'what have we here!?'} />
            `,
            expect: '<img src="what have we here!?" />',
        },
        {
            it: 'should handle unsafe SVG',
            input: unsafeSVG(`<svg></svg>`),
            expect: '<svg></svg>',
        },
    ]);
});
