import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {HtmlSpecTagName, htmlSpecConstructorsByTagName} from 'html-spec-tags';
import {html} from '../template-transforms/vir-html/vir-html.js';

describe('rendering', () => {
    it('support interpolated tag name strings', async () => {
        const tagNames: ReadonlyArray<HtmlSpecTagName> = [
            'p',
            'span',
            'div',
            'ul',
            'tr',
        ];

        const topLevelDiv = await testWeb.render(html`
            <div>
                ${tagNames.map((tagName) => {
                    return html`
                        <${tagName}>hello there</${tagName}>
                    `;
                })}
            </div>
        `);

        assert.isAbove(tagNames.length, 0, 'need tag names to test');

        tagNames.forEach((tagName) => {
            const expectedConstructor = htmlSpecConstructorsByTagName[tagName];
            const element = topLevelDiv.querySelector(tagName);
            assert.instanceOf(
                element,
                expectedConstructor,
                `'${tagName}' should have produced a '${expectedConstructor.name}' element but produced '${element?.constructor.name}' element.`,
            );
        });
    });
});
