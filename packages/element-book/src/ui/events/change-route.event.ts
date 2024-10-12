import {defineTypedEvent} from 'element-vir';
import {BookFullRoute} from '../../routing/book-routing.js';

export const ChangeRouteEvent = defineTypedEvent<Partial<BookFullRoute>>()(
    'element-book-change-route',
);
