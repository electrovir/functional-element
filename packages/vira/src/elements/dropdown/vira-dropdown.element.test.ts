import {queryThroughShadow, waitForAnimationFrame} from '@augment-vir/browser';
import {clickElement, extractText} from '@augment-vir/browser-testing';
import {mapObjectValues, randomString, waitUntilTruthy} from '@augment-vir/common';
import {assert, fixture, waitUntil} from '@open-wc/testing';
import {html, listen, testIdBy} from 'element-vir';
import {assertDefined, assertInstanceOf} from 'run-time-assertions';
import {Element24Icon} from '../../icons/index';
import {mockOptions} from './dropdown.mock';
import {viraDropdownOptionsTestIds} from './vira-dropdown-options.element';
import {ViraDropdown, viraDropdownTestIds} from './vira-dropdown.element';

async function setupDropdownTest(inputs?: Partial<(typeof ViraDropdown)['inputsType']>) {
    const events: {
        [EventKey in keyof typeof ViraDropdown.events]: InstanceType<
            (typeof ViraDropdown.events)[EventKey]
        >['detail'][];
    } = mapObjectValues(ViraDropdown.events, () => []);
    const instance = await fixture(html`
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

    assertInstanceOf(instance, ViraDropdown);

    const triggerElement = instance.shadowRoot.querySelector(testIdBy(viraDropdownTestIds.trigger));
    assertInstanceOf(triggerElement, HTMLElement);

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
        async toggle() {
            const optionsExisted: boolean = !!instance.shadowRoot.querySelector(
                testIdBy(viraDropdownTestIds.options),
            );

            await clickElement(triggerElement);

            await waitUntilTruthy(
                async () => {
                    const optionsExistNow = !!instance.shadowRoot.querySelector(
                        testIdBy(viraDropdownTestIds.options),
                    );

                    return optionsExisted !== optionsExistNow;
                },
                'the options never popped up',
                {timeout: {milliseconds: 1000}},
            );
        },
    };
}

describe(ViraDropdown.tagName, () => {
    it('opens on a click', async () => {
        const {toggle, events} = await setupDropdownTest();

        await toggle();
        assert.deepStrictEqual(events.openChange, [true]);
    });

    it('closes on a click', async () => {
        const {toggle, events, queryByTestId} = await setupDropdownTest();

        await toggle();
        assert.deepStrictEqual(events.openChange, [true]);
        await toggle();
        assert.deepStrictEqual(events.openChange, [
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
        const options = queryThroughShadow({
            element: instance,
            query: testIdBy(viraDropdownOptionsTestIds.option),
            all: true,
        });

        assert.lengthOf(options, mockOptions.length);
        assertDefined(options[1]);
        await clickElement(options[1]);

        await waitUntil(() => {
            return !queryByTestId.options();
        });
        assert.deepStrictEqual(events.openChange, [
            true,
            false,
        ]);
        assert.deepStrictEqual(events.selectedChange, [
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
        const prefixElement = await waitUntilTruthy(
            () => {
                return queryByTestId.prefix();
            },
            'prefix element never showed up',
            {timeout: {milliseconds: 1000}},
        );

        assert.strictEqual(extractText(prefixElement), prefix);
    });

    it('renders an icon', async () => {
        const {queryByTestId} = await setupDropdownTest({
            icon: Element24Icon,
        });
        await waitUntilTruthy(
            () => {
                return queryByTestId.icon();
            },
            'icon element never showed up',
            {timeout: {milliseconds: 1000}},
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

        assert.strictEqual(extractText(triggerElement), placeholder);
    });
});
