import {defineTypedEvent} from '../index.js';

export const MyCustomActionEvent = defineTypedEvent<number>()('my-custom-action');
