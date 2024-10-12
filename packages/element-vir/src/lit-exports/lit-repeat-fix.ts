export type {KeyFn} from 'lit/directives/repeat.js';
export type {RepeatDirective};

import {Directive, PartInfo} from 'lit-html/directive.js';
import {KeyFn} from 'lit-html/directives/repeat.js';
import {ChildPart, noChange} from 'lit-html/lit-html.js';
import {repeat as repeatImport} from 'lit/directives/repeat.js';
import {HtmlInterpolation} from '../template-transforms/vir-html/html-interpolation.js';

declare class RepeatDirective extends Directive {
    private _itemKeys?;
    constructor(partInfo: PartInfo);
    private _getValuesAndKeys;
    render<T>(items: Iterable<T>, template: ItemTemplate<T>): Array<HtmlInterpolation>;
    render<T>(
        items: Iterable<T>,
        keyFn: KeyFn<T> | ItemTemplate<T>,
        template: ItemTemplate<T>,
    ): Array<HtmlInterpolation>;
    update<T>(
        containerPart: ChildPart,
        [
            items,
            keyFnOrTemplate,
            template,
        ]: [
            Iterable<T>,
            (
                | KeyFn<T>
                | ItemTemplate<T>
            ),
            ItemTemplate<T>,
        ],
    ): HtmlInterpolation[] | typeof noChange;
}

export type ItemTemplate<T> = (item: T, index: number) => HtmlInterpolation;

export interface RepeatDirectiveFn {
    <T>(
        items: Iterable<T>,
        keyFnOrTemplate: KeyFn<T> | ItemTemplate<T>,
        template?: ItemTemplate<T>,
    ): HtmlInterpolation[];
    <T>(items: Iterable<T>, template: ItemTemplate<T>): HtmlInterpolation[];
    <T>(
        items: Iterable<T>,
        keyFn: KeyFn<T> | ItemTemplate<T>,
        template: ItemTemplate<T>,
    ): HtmlInterpolation[];
}
export const repeat = repeatImport as RepeatDirectiveFn;
