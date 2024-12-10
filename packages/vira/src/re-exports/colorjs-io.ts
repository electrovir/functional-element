import ColorImport from 'colorjs.io';

export type {ColorTypes} from 'colorjs.io/types/src/color';
export type {Format} from 'colorjs.io/types/src/space';

/**
 * An individual color represented as a class. This is from the
 * [colorjs.io](https://www.npmjs.com/package/colorjs.io) package.
 *
 * @category Internal
 */
export type Color = typeof ColorImport;
/**
 * An individual color represented as a class. This is from the
 * [colorjs.io](https://www.npmjs.com/package/colorjs.io) package.
 *
 * @category Internal
 */
export const Color: Color = ColorImport;
