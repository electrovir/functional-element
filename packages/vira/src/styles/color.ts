import {wrapInTry} from '@augment-vir/common';
import {Format} from 'colorjs.io/types/src/space';
import {Color, ColorTypes} from '../re-exports/colorjs-io.js';

export function getAssertedValidColor(input: ColorTypes | undefined) {
    try {
        if (!input) {
            throw new Error('invalid empty color');
        }
        return new Color(input);
    } catch {
        const stringInput = String(input);
        const inputForMessage: string = stringInput.toLowerCase().match(/\[\s*object\s+object\s*\]/)
            ? wrapInTry(() => JSON.stringify(input), {fallbackValue: stringInput})
            : stringInput;
        throw new Error(`Invalid color: ${inputForMessage}`);
    }
}

export const rgbCssColorFormat: Format = {
    name: 'rgb',
    coords: [
        '<number>[0, 255]',
        '<number>[0, 255]',
        '<number>[0, 255]',
    ],
    commas: true,
};
