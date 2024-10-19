import {type AnyFunction} from '@augment-vir/common';
import {type CSSResult, type TemplateResult, type nothing} from 'lit';
import {type EmptyObject} from 'type-fest';
import {type DeclarativeElementDefinition} from '../../declarative-element/declarative-element.js';
import {
    type MinimalDefinitionWithInputs,
    type MinimalElementDefinition,
} from '../minimal-element-definition.js';

/**
 * Unfortunately the type for `DirectiveResult` means it's just an empty object. So in order to
 * block actual objects, we have to narrow `DirectiveResult` further to this empty object type.
 *
 * @category Internal
 */
export type DirectiveOutput = EmptyObject;

/**
 * This is used in order to block accidental object interpolations into HTML, which get stringified
 * into `'[object Object]'`, which nobody ever wants that.
 *
 * @category Internal
 */
export type HtmlInterpolation =
    | null
    | undefined
    | string
    | number
    | boolean
    | bigint
    | CSSResult
    | Readonly<CSSResult>
    | Element
    | Readonly<Element>
    | TemplateResult
    | Readonly<TemplateResult>
    | MinimalElementDefinition
    | Readonly<MinimalElementDefinition>
    | MinimalDefinitionWithInputs
    | Readonly<MinimalDefinitionWithInputs>
    | DeclarativeElementDefinition
    | Readonly<DeclarativeElementDefinition>
    | DirectiveOutput
    | Readonly<DirectiveOutput>
    | AnyFunction
    | typeof nothing
    | HtmlInterpolation[]
    | ReadonlyArray<HtmlInterpolation>;
