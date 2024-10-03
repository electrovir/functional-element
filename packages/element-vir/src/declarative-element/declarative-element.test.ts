import {assert} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {
    BaseCssPropertyName,
    CustomElementTagName,
    DeclarativeElement,
    EventsInitMap,
    PropertyInitMapBase,
    StaticDeclarativeElementProperties,
    defineElementEvent,
    defineElementNoInputs,
    html,
} from '../index';

describe('StaticDeclarativeElementProperties', () => {
    it('excludes observables in inputsType', () => {
        assert
            .tsType<
                StaticDeclarativeElementProperties<
                    any,
                    {hi: number},
                    any,
                    any,
                    any,
                    any,
                    any
                >['inputsType']
            >()
            .equals<{hi: number}>();
    });
});

describe(DeclarativeElement.name, () => {
    it('includes all needed declarative element properties', () => {
        assert
            .tsType<typeof DeclarativeElement>()
            .matches<
                StaticDeclarativeElementProperties<
                    CustomElementTagName,
                    PropertyInitMapBase,
                    PropertyInitMapBase,
                    EventsInitMap,
                    BaseCssPropertyName<CustomElementTagName>,
                    BaseCssPropertyName<CustomElementTagName>,
                    ReadonlyArray<string>
                >
            >();
    });

    it('has proper types', async () => {
        const definedDeclarativeElementWithEvents = defineElementNoInputs({
            renderCallback() {
                return html``;
            },
            stateInitStatic: {
                thing: '',
            },
            events: {
                stuff: defineElementEvent<boolean>(),
            },
            tagName: 'defined-declarative-element-123',
        });

        const definedDeclarativeElementWithoutEvents = defineElementNoInputs({
            renderCallback() {
                return html``;
            },
            stateInitStatic: {
                thing: 5,
            },
            tagName: 'defined-declarative-element-98765',
        });

        const instanceWithEvents = await testWeb.render(html`
            <${definedDeclarativeElementWithEvents}></${definedDeclarativeElementWithEvents}>
        `);

        assert.instanceOf(instanceWithEvents, definedDeclarativeElementWithEvents);

        // @ts-expect-error: while thing will exist on an instance, it shouldn't be accessible this way from the types
        assert.strictEquals(instanceWithEvents.thing, '');
        assert.strictEquals(instanceWithEvents.instanceState.thing, '');
        // @ts-expect-error: events should not exist on an instance
        assert.isUndefined(instanceWithEvents.events);
        assert.isDefined(instanceWithEvents.definition.events);

        const instanceWithoutEvents = await testWeb.render(html`
            <${definedDeclarativeElementWithoutEvents}></${definedDeclarativeElementWithoutEvents}>
        `);

        assert.instanceOf(instanceWithoutEvents, definedDeclarativeElementWithoutEvents);

        assert.strictEquals(instanceWithoutEvents.instanceState.thing, 5);
        // @ts-expect-error: events does not exist on an instance
        assert.isUndefined(instanceWithoutEvents.events);
        assert.deepEquals(instanceWithoutEvents.definition.events, {});
    });
});
