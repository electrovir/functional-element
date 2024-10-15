import {describe, it} from '@augment-vir/test';
import {BookPageControlType, definePageControl} from './book-page-controls.js';

describe(definePageControl.name, () => {
    it('requires the initValue to match the control type expected value type', () => {
        definePageControl({
            // @ts-expect-error: this should be boolean
            initValue: 'hello',
            controlType: BookPageControlType.Checkbox,
        });
        definePageControl({
            initValue: true,
            controlType: BookPageControlType.Checkbox,
        });
    });
});
