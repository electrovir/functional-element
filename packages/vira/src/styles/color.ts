import {stringify} from '@augment-vir/common';
import {Format} from 'colorjs.io/types/src/space';
import {Color, ColorTypes} from '../re-exports/colorjs-io.js';

/**
 * Asserts that the given color type is valid.
 *
 * @category Internal
 */
export function getAssertedValidColor(input: ColorTypes | undefined) {
    try {
        if (!input) {
            throw new Error('invalid empty color');
        }
        return new Color(input);
    } catch {
        throw new Error(`Invalid color: ${stringify(input)}`);
    }
}

/**
 * The colorjs format for CSS RGB colors.
 *
 * @category Internal
 */
export const rgbCssColorFormat: Format = {
    name: 'rgb',
    coords: [
        '<number>[0, 255]',
        '<number>[0, 255]',
        '<number>[0, 255]',
    ],
    commas: true,
};
