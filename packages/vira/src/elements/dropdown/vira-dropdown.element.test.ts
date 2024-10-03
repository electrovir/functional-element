import {assert, waitUntil} from '@augment-vir/assert';
import {mapObjectValues, randomString} from '@augment-vir/common';
import {describe, it, testWeb} from '@augment-vir/test';
import {extractElementText, queryThroughShadow, waitForAnimationFrame} from '@augment-vir/web';
import {html, listen, testIdBy} from 'element-vir';
import {Element24Icon} from '../../icons/index.js';
import {mockOptions} from './dropdown.mock.js';
import {viraDropdownOptionsTestIds} from './vira-dropdown-options.element.js';
import {ViraDropdown, viraDropdownTestIds} from './vira-dropdown.element.js';

async function setupDropdownTest(inputs?: Partial<(typeof ViraDropdown)['inputsType']>) {
    const events: {
        [EventKey in keyof typeof ViraDropdown.events]: InstanceType<
            (typeof ViraDropdown.events)[EventKey]
        >['detail'][];
    } = mapObjectValues(ViraDropdown.events, () => []);
    const instance = await testWeb.render(html`
        <${ViraDropdown.assign({
            options: mockOptions,
            selected: [],
            ...inputs,
        })}
            ${listen(ViraDropdown.events.openChange, (event) => {
                events.openChange.push(event.detail);
            })}
            ${listen(ViraDropdown.events.selectedChange, (event) => {
                events.selectedChange.push(event.detail);
            })}
        ></${ViraDropdown}>
    `);

    assert.instanceOf(instance, ViraDropdown);

    const triggerElement = instance.shadowRoot.querySelector(testIdBy(viraDropdownTestIds.trigger));
    assert.instanceOf(triggerElement, HTMLElement);

    assert.isNull(instance.shadowRoot.querySelector(testIdBy(viraDropdownTestIds.options)));
    assert.isEmpty(events.openChange);
    assert.isEmpty(events.selectedChange);

    return {
        events,
        instance,
        triggerElement,
        queryByTestId: mapObjectValues(viraDropdownTestIds, (testIdKey, testId) => {
            return () => {
                return instance.shadowRoot.querySelector(testIdBy(testId));
            };
        }),
        async toggle(this: void) {
            const optionsExisted: boolean = !!instance.shadowRoot.querySelector(
                testIdBy(viraDropdownTestIds.options),
            );

            await testWeb.click(triggerElement);

            await waitUntil.isTruthy(
                () => {
                    const optionsExistNow = !!instance.shadowRoot.querySelector(
                        testIdBy(viraDropdownTestIds.options),
                    );

                    return optionsExisted !== optionsExistNow;
                },
                {timeout: {seconds: 1}},
                'the options never popped up',
            );
        },
    };
}

describe(ViraDropdown.tagName, () => {
    it('opens on a click', async () => {
        const {toggle, events} = await setupDropdownTest();

        await toggle();
        assert.deepEquals(events.openChange, [true]);
    });

    it('closes on a click', async () => {
        const {toggle, events, queryByTestId} = await setupDropdownTest();

        await toggle();
        assert.deepEquals(events.openChange, [true]);
        await toggle();
        assert.deepEquals(events.openChange, [
            true,
            false,
        ]);
        await waitUntil(() => {
            return !queryByTestId.options();
        });
    });

    it('selects an option on click', async () => {
        const {instance, toggle, events, queryByTestId} = await setupDropdownTest();

        await toggle();
        const options = queryThroughShadow(instance, testIdBy(viraDropdownOptionsTestIds.option), {
            all: true,
        });

        assert.isLengthExactly(options, mockOptions.length);
        assert.isDefined(options[1]);
        await testWeb.click(options[1]);

        await waitUntil(() => {
            return !queryByTestId.options();
        });
        assert.deepEquals(events.openChange, [
            true,
            false,
        ]);
        assert.deepEquals(events.selectedChange, [
            [1],
        ]);
    });

    it('does not render prefix if nothing is selected', async () => {
        const {queryByTestId} = await setupDropdownTest({
            selectionPrefix: randomString(),
        });
        await waitForAnimationFrame(5);
        assert.isNull(queryByTestId.prefix());
    });

    it('renders a prefix', async () => {
        const prefix = randomString();
        const {queryByTestId} = await setupDropdownTest({
            selectionPrefix: prefix,
            selected: [1],
        });
        const prefixElement = await waitUntil.isTruthy(
            () => {
                return queryByTestId.prefix();
            },
            {timeout: {seconds: 1}},
            'prefix element never showed up',
        );

        assert.strictEquals(extractElementText(prefixElement), prefix);
    });

    it('renders an icon', async () => {
        const {queryByTestId} = await setupDropdownTest({
            icon: Element24Icon,
        });
        await waitUntil.isTruthy(
            () => {
                return queryByTestId.icon();
            },
            {timeout: {seconds: 1}},
            'icon element never showed up',
        );
    });

    it('does not render an icon if not assigned', async () => {
        const {queryByTestId} = await setupDropdownTest();
        await waitForAnimationFrame(5);
        assert.isNull(queryByTestId.icon());
    });

    it('renders a placeholder', async () => {
        const placeholder = randomString();
        const {triggerElement} = await setupDropdownTest({
            placeholder,
        });

        assert.strictEquals(extractElementText(triggerElement), placeholder);
    });
});
