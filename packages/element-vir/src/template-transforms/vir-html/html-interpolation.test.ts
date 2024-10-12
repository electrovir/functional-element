/* eslint-disable @typescript-eslint/no-empty-object-type */

import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {renderIf} from '../../declarative-element/directives/render-if.directive.js';
import {RenderCallback} from '../../declarative-element/render-callback.js';
import {classMap, ifDefined} from '../../lit-exports/all-lit-exports.js';
import {DirectiveOutput, HtmlInterpolation} from './html-interpolation.js';
import {html} from './vir-html.js';

describe('HtmlInterpolation', () => {
    it('blocks raw objects', () => {
        assert.tsType<{something: string}>().notMatches<HtmlInterpolation>();
        html`
            hello there
            ${
                // @ts-expect-error raw objects are not allowed
                {something: 'hi'}
            }
        `;
        assert.tsType<{something: string}>().notMatches<DirectiveOutput>();
    });

    it('blocks symbols', () => {
        assert.tsType(Symbol('hello')).notMatches<HtmlInterpolation>();
    });

    it('allows the ifDefined directive', () => {
        html`
            <div title=${ifDefined(Math.random() > 0.5 ? undefined : 'hello')}></div>
        `;
    });

    /** In order to support directive results, this must also be the case. */
    it('allows empty objects sadly', () => {
        assert.tsType({} as const).matches<HtmlInterpolation>();
    });

    it('allows directives', () => {
        assert.tsType(renderIf(true, 'hi')).matches<HtmlInterpolation>();
        assert
            .tsType(
                classMap({
                    disabled: true,
                }),
            )
            .matches<HtmlInterpolation>();
        html`
            hello there ${classMap({disabled: true})}
        `;
        assert.tsType(classMap({disabled: true})).matches<DirectiveOutput>();
    });

    it('allows function interpolation', () => {
        html`
            <div
                @click=${() => {
                    console.info('you clicked me!');
                }}
            ></div>
        `;
    });

    it('allows vira icon definitions', () => {
        assert
            .tsType<
                RenderCallback<
                    'vira-icon',
                    {
                        fitContainer?: boolean | undefined;
                    },
                    {},
                    {},
                    'vira-icon-fit-container',
                    `vira-icon-${string}`,
                    string[]
                >
            >()
            .matches<RenderCallback>();
    });
});
