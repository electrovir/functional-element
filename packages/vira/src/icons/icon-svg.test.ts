import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import Color from 'colorjs.io';
import {html} from 'element-vir';
import {rgbCssColorFormat} from '../styles/color.js';
import {ColorType, extractIconColor} from './icon-color.test-helper.js';
import {createColoredIcon} from './icon-svg.js';
import {Element24Icon} from './icon-svgs/element-24.icon.js';

describe(createColoredIcon.name, () => {
    it('fails if a given color is invalid', () => {
        assert.throws(() =>
            createColoredIcon(Element24Icon, {'vira-icon-fill-color': '" onclick="doThing()"'}),
        );
    });

    it('renders as a colored SVG', async () => {
        const testColor = new Color('purple');
        const coloredIcon = createColoredIcon(Element24Icon, {
            'vira-icon-stroke-color': testColor.toString({format: rgbCssColorFormat}),
        });
        const rendered = await testWeb.render(html`
            ${coloredIcon.svgTemplate}
        `);
        const pathElement = rendered.querySelector('path');
        assert.instanceOf(pathElement, SVGPathElement);

        const appliedColor = extractIconColor(pathElement, ColorType.Stroke);

        assert.strictEquals(appliedColor, testColor.toString({format: rgbCssColorFormat}));
    });
});
