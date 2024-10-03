import {assert} from '@augment-vir/assert';
import {randomString} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {html} from '../../template-transforms/vir-html/vir-html';
import {testId, testIdAttributeName} from './test-id.directive';

describe(testId.name, () => {
    it('attaches a the given test id', async () => {
        const testIdValue = randomString();

        const fixture = await testWeb.render(html`
            <div ${testId(testIdValue)}>text</div>
        `);

        assert.instanceOf(fixture, HTMLDivElement);

        assert.strictEquals(fixture.getAttribute(testIdAttributeName), testIdValue);
    });
});
