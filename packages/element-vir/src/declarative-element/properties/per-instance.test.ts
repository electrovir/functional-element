import {assert} from '@augment-vir/assert';
import {randomString} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from '../../template-transforms/vir-html/vir-html.js';
import {defineElementNoInputs} from '../define-element-no-inputs.js';
import {perInstance} from './per-instance.js';

describe(perInstance.name, () => {
    it('allows host to be assigned to instance type', async () => {
        const MyElement = defineElementNoInputs({
            tagName: `some-tag-${randomString()}`,
            stateInitStatic: {
                myPerInstanceProp: perInstance(() => ({stuff: 'hi'})),
            },
            renderCallback({state}) {
                assert.tsType(state.myPerInstanceProp).equals<{stuff: string}>();
                return state.myPerInstanceProp.stuff;
            },
        });

        const fixture = await testWeb.render(html`
            <div>
                <${MyElement}></${MyElement}>
                <${MyElement}></${MyElement}>
            </div>
        `);

        assert.instanceOf(fixture, HTMLDivElement);

        const elements = Array.from(fixture.querySelectorAll(MyElement.tagName));

        assert.isLengthExactly(elements, 2);

        assert.instanceOf(elements[0], MyElement);
        assert.instanceOf(elements[1], MyElement);
        assert.isFalse(
            elements[0].instanceState.myPerInstanceProp ===
                elements[1].instanceState.myPerInstanceProp,
        );
    });
});
