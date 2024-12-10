# element-book

An [`element-vir`](https://npmjs.com/package/element-vir) drop-in element for building, testing, and demonstrating a collection of elements (or, in other words, a design system).

## Installation

```bash
npm i element-book
```

## Terminology

- **Page**: a group of pages and / or element examples. Pages can be infinitely nested.
- **Element Example**: an individual element example with independent state, styles, title, etc.

## Usage

1.  Define element-book pages with [`defineBookPage`](https://electrovir.github.io/element-vir/element-book/functions/defineBookPage.html):

    <!-- example-link: ./src/readme-examples/define-page.example.ts -->

    ```TypeScript
    import {defineBookPage} from '../data/book-entry/book-page/define-book-page.js';

    export const myPage = defineBookPage({
        /** Use `undefined` if your page is at the top level. */
        parent: undefined,
        title: 'My Page',
    });
    ```

2.  Inside of a page definition, define an element example:

    <!-- example-link: ./src/readme-examples/define-example.example.ts -->

    ```TypeScript
    import {html} from 'element-vir';
    import {defineBookPage} from '../data/book-entry/book-page/define-book-page.js';

    export const myPage = defineBookPage({
        /** Use `undefined` if your page is at the top level. */
        parent: undefined,
        title: 'My Page',
        defineExamples({defineExample}) {
            defineExample({
                title: 'My Example',
                render() {
                    return html`
                        <p>Render your element here.</p>
                    `;
                },
            });
        },
    });
    ```

3.  Instantiate an instance of the [element book app](https://electrovir.github.io/element-vir/element-book/variables/ElementBookApp.html) into your app and pass in all your pages:

    <!-- example-link: ./src/readme-examples/use-app.example.ts -->

    ```TypeScript
    import {defineElementNoInputs, html} from 'element-vir';
    import {ElementBookApp} from '../ui/elements/element-book-app/element-book-app.element.js';
    import {myPage} from './define-page.example.js';

    export const MyApp = defineElementNoInputs({
        tagName: 'my-app',
        render() {
            return html`
                <${ElementBookApp.assign({
                    pages: [
                        myPage,
                    ],
                })}></${ElementBookApp}>
            `;
        },
    });
    ```

## Why not Storybook?

Because Storybook is un-composable, impossible to debug, and full of behind-the-scenes \*magic\* that you can't backtrack without already understanding the inner workings of Storybook itself. With `element-book`, it's all just imports that you can directly follow with the TypeScript compiler.
