import {assert} from '@augment-vir/assert';
import {describe, it} from '@augment-vir/test';
import {defineTypedEvent} from '../../index.js';
import {listen} from './listen.directive.js';

describe(listen.name, () => {
    it('has proper types', () => {
        const MyCustomEvent = defineTypedEvent<number>()('my-custom-event');
        listen(MyCustomEvent, (event) => {
            assert.tsType(event.detail).equals<number>();
            assert.tsType(event.detail).notMatches<string>();
        });

        listen('click', (event) => {
            assert.tsType(event).equals<MouseEvent>();
        });

        (({addEventListener() {}}) as unknown as HTMLInputElement).addEventListener(
            'click',
            (event) => {
                assert.tsType(event).equals<MouseEvent>();
            },
        );
    });
});
