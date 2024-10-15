import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from 'element-vir';
import {setCssVarValue} from 'lit-css-vars';
import {ColorType, extractIconColor} from '../icons/icon-color.test-helper.js';
import {viraIconCssVars} from '../icons/icon-css-vars.js';
import {StatusSuccess24Icon} from '../icons/index.js';
import {ViraIcon} from './vira-icon.element.js';

describe(ViraIcon.tagName, () => {
    async function setupFixture() {
        const fixture = await testWeb.render(html`
            <div><${ViraIcon.assign({icon: StatusSuccess24Icon})}></${ViraIcon}></div>
        `);

        assert.instanceOf(fixture, HTMLDivElement);

        const viraIconInstance = fixture.querySelector(ViraIcon.tagName);

        assert.instanceOf(viraIconInstance, ViraIcon);
        const internalSvg = viraIconInstance.shadowRoot.querySelector('circle');
        assert.instanceOf(internalSvg, SVGCircleElement);

        return {
            wrapperDiv: fixture,
            viraIconInstance,
            getColor(this: void, colorType: ColorType) {
                return extractIconColor(internalSvg, colorType);
            },
        };
    }

    describe('icon with stroke', () => {
        it('defaults to current color value', async () => {
            const {getColor} = await setupFixture();

            /** Default color (black) */
            assert.strictEquals(getColor(ColorType.Color), 'rgb(0, 0, 0)');
            assert.strictEquals(getColor(ColorType.Fill), 'none');
            assert.strictEquals(getColor(ColorType.Stroke), 'rgb(0, 0, 0)');
        });

        it("tracks its parent's color value", async () => {
            const {getColor, wrapperDiv} = await setupFixture();

            wrapperDiv.style.color = 'red';

            assert.strictEquals(getColor(ColorType.Color), 'rgb(255, 0, 0)');
            assert.strictEquals(getColor(ColorType.Fill), 'none');
            assert.strictEquals(getColor(ColorType.Stroke), 'rgb(255, 0, 0)');
        });

        it('follows stroke color CSS var', async () => {
            const {getColor, wrapperDiv} = await setupFixture();

            setCssVarValue({
                forCssVar: viraIconCssVars['vira-icon-stroke-color'],
                onElement: wrapperDiv,
                toValue: 'blue',
            });

            assert.strictEquals(getColor(ColorType.Color), 'rgb(0, 0, 0)');
            assert.strictEquals(getColor(ColorType.Fill), 'none');
            assert.strictEquals(getColor(ColorType.Stroke), 'rgb(0, 0, 255)');
        });

        it('follows fill color CSS var', async () => {
            const {getColor, wrapperDiv} = await setupFixture();

            setCssVarValue({
                forCssVar: viraIconCssVars['vira-icon-fill-color'],
                onElement: wrapperDiv,
                toValue: 'white',
            });

            assert.strictEquals(getColor(ColorType.Color), 'rgb(0, 0, 0)');
            assert.strictEquals(getColor(ColorType.Fill), 'rgb(255, 255, 255)');
            assert.strictEquals(getColor(ColorType.Stroke), 'rgb(0, 0, 0)');
        });
    });
});
