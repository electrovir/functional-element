import {ArrayInsertion} from '../util/array.js';

export type AllValueTransforms = {
    valueIndexDeletions: number[];
    valueInsertions: ArrayInsertion<unknown>[];
};

export type TemplateTransform = {
    templateStrings: TemplateStringsArray;
    valuesTransform(values: unknown[]): AllValueTransforms;
};
