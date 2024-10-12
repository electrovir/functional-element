import ColorImport from 'colorjs.io';

export type {ColorTypes} from 'colorjs.io/types/src/color';
export type {Format} from 'colorjs.io/types/src/space';

export type Color = typeof ColorImport;
// eslint-disable-next-line sonarjs/no-redeclare
export const Color: Color = ColorImport;
