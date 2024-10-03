import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {listen} from '../declarative-element/directives/listen.directive';
import {defineTypedEvent} from './typed-event';

describe(defineTypedEvent.name, () => {
    it('should create the correct types', () => {
        const eventTypeName = 'my-custom-typed-event';

        const myCustomTypedEvent = defineTypedEvent<number>()(eventTypeName);
        // @ts-expect-error
        const newEventWrongType = new myCustomTypedEvent('not a number');
        // @ts-expect-error
        const typeNotAccepted = new myCustomTypedEvent(eventTypeName);

        const newValidEvent = new myCustomTypedEvent(5);

        assert.strictEquals(newValidEvent.detail, 5);

        assert.strictEquals(myCustomTypedEvent.type, eventTypeName);
        assert.strictEquals(newValidEvent.type, eventTypeName);
    });

    it('has proper types', () => {
        // this shouldn't actually be run, it's just used to check types
        function main() {
            // @ts-expect-error
            const invalidTypeInput = defineTypedEvent<Record<string, string>>()('');

            const validCustomEvent = defineTypedEvent<Record<string, string>>()(
                'my-valid-custom-typed-event',
            );

            listen(validCustomEvent, (event) => {
                // event.detail should retain its type information
                const value: Record<string, string> = event.detail;
            });

            // @ts-expect-error
            const invalidConstructorParameterInput = new validCustomEvent(4);
            // @ts-expect-error
            const invalidUndefinedInput = new validCustomEvent(undefined);

            const validCustomEventInstance = new validCustomEvent({propName: 'valueName'});
        }
    });
});
