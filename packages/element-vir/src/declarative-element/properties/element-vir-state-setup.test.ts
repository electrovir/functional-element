import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {ElementVirStateSetup, FlattenElementVirStateSetup} from './element-vir-state-setup.js';

describe('FlattenElementVirPropSetup', () => {
    it('allows union types', () => {
        type Original = {
            input: string;
            maybeSetup: string | ElementVirStateSetup<RegExp>;
        };

        type Flattened = FlattenElementVirStateSetup<Original>;

        assert.tsType<Flattened>().equals<{
            input: string;
            maybeSetup: string | RegExp;
        }>();
    });
    it('allows non-union types', () => {
        type Original = {
            input: string;
            maybeSetup: ElementVirStateSetup<RegExp>;
        };

        type Flattened = FlattenElementVirStateSetup<Original>;

        assert.tsType<Flattened>().equals<{
            input: string;
            maybeSetup: RegExp;
        }>();
    });
});
