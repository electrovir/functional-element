import {defineBookPage} from '../data/book-entry/book-page/define-book-page.js';

export const myPage = defineBookPage({
    /** Use `undefined` if your page is at the top level. */
    parent: undefined,
    title: 'My Page',
});
