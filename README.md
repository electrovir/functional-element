# element-vir

Heroic. Reactive. Functional. Type safe. Web components without compromise.

No need for an extra build step,<br>
no need for side effect imports, <br>
no need for unique file extensions,<br>
no need for extra static analysis tools,<br>
no need for a dedicated, unique syntax.<br>
_**It's just TypeScript.**_

Uses the power of _native_ JavaScript custom web elements, _native_ JavaScript template literals, _native_ JavaScript functions<sup>\*</sup>, _native_ HTML, and [lit-element](http://lit.dev).

In reality this is basically a [lit-element](http://lit.dev) wrapper that adds type-safe element tag usage and I/O with functional-programming style component definition.

[Works in every major web browser except Internet Explorer.](https://caniuse.com/mdn-api_window_customelements)

<sub>\*okay I hope it's obvious that functions are native</sub>

# Install

[Published on npm:](https://www.npmjs.com/package/element-vir)

```bash
npm i element-vir
```

Make sure to install this as a normal dependency (not just a dev dependency) because it needs to exist at run time.

# Usage

Most usage of this package is done through the [`defineFunctionalElement` function](https://github.com/electrovir/element-vir/blob/main/src/functional-element/define-functional-element.ts#L25-L30). See the [`FunctionalElementInit` type](https://github.com/electrovir/element-vir/blob/main/src/functional-element/functional-element-init.ts#L7-L20) for that function's inputs. These inputs are also described below with examples.

All of [`lit`](https://lit.dev)'s syntax and functionality is also available for use if you wish.

## Simple element definition

Use `defineFunctionalElement` to define your element. Tt must be given an object with at least `tagName` and `renderCallback` properties (the types enforce this). Here is a bare-minimum example custom element:

<!-- example-link: src/readme-examples/my-simple.element.ts -->

```TypeScript
import {defineFunctionalElement, html} from 'element-vir';

export const MySimpleElement = defineFunctionalElement({
    tagName: 'my-simple-element',
    renderCallback: () => html`
        <span>Hello there!</span>
    `,
});
```

Make sure to export your element definition if you need to use it in other files.

## Using in other elements

To use already defined functional elements (like `my-simple-element` above), they must be interpolated into HTML templates like so:

<!-- example-link: src/readme-examples/my-app.element.ts -->

```TypeScript
import {defineFunctionalElement, html} from 'element-vir';
import {MySimpleElement} from './my-simple.element';

export const MyAppElement = defineFunctionalElement({
    tagName: 'my-app-element',
    renderCallback: () => html`
        <h1>My App</h1>
        <${MySimpleElement}></${MySimpleElement}>
    `,
});
```

This requirement ensures that the element is properly imported and registered with the browser. (Compare to pure [lit](http://lit.dev) where you must remember to import each element file as a side effect, or without actually referencing any of its exports in your code.)

If you wish to bypass this interpolation, make sure to [import the `html` tagged template directly from `lit`](https://lit.dev/docs/components/overview/), `import {html} from 'lit';`, instead of version contained in `element-vir`.

## Adding styles

Styles are added through the `styles` property when defining a functional element (similar to [how they are defined in `lit`](https://lit.dev/docs/components/styles/)):

<!-- example-link: src/readme-examples/my-simple-app-with-styles.element.ts -->

```TypeScript
import {css, defineFunctionalElement, html} from 'element-vir';

export const MySimpleWithStylesElement = defineFunctionalElement({
    tagName: 'my-simple-with-styles-element',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            font-family: sans-serif;
        }

        span + span {
            margin-top: 16px;
        }
    `,
    renderCallback: () => html`
        <span>Hello there!</span>
        <span>How are you doing?</span>
    `,
});
```

### Element definition as style selector

Functional element definitions can be used in the `css` tagged template just like in the `html` tagged template. This will be replaced by the element's tag name:

<!-- example-link: src/readme-examples/my-simple-app-with-styles-and-interpolated-selector.element.ts -->

```TypeScript
import {css, defineFunctionalElement, html} from 'element-vir';
import {MySimpleElement} from './my-simple.element';

export const MySimpleWithStylesAndInterpolatedSelectorElement = defineFunctionalElement({
    tagName: 'my-simple-with-styles-and-interpolated-selector-element',
    styles: css`
        ${MySimpleElement} {
            background-color: blue;
        }
    `,
    renderCallback: () => html`
        <${MySimpleElement}></${MySimpleElement}>
    `,
});
```

## Defining and using properties (inputs)

Define element properties with `props` when making a functional element. Each property must be given a default value. If you wish to leave the property's default value as `undefined`, give it a type as well (shown below with `as string | undefined`) so you can assign a defined value of that type to it later.

To use a custom element's properties, grab `props` from `renderCallback`'s parameters and interpolate it into your HTML template:

<!-- example-link: src/readme-examples/my-simple-with-props.element.ts -->

```TypeScript
import {defineFunctionalElement, html} from 'element-vir';

export const MySimpleWithPropsElement = defineFunctionalElement({
    tagName: 'my-simple-element-with-props',
    props: {
        currentUsername: 'dev',
        currentEmail: undefined as string | undefined,
    },
    renderCallback: ({props}) => html`
        <span>Hello there ${props.currentUsername}!</span>
    `,
});
```

## Assigning to properties (inputs)

Use the `assign` directive to assign properties to child custom elements:

<!-- example-link: src/readme-examples/my-app-with-props.element.ts -->

```TypeScript
import {assign, defineFunctionalElement, html} from 'element-vir';
import {MySimpleWithPropsElement} from './my-simple-with-props.element';

export const MyAppWithPropsElement = defineFunctionalElement({
    tagName: 'my-app-with-props-element',
    renderCallback: () => html`
        <h1>My App</h1>
        <${MySimpleWithPropsElement}
            ${assign(MySimpleWithPropsElement.props.currentUsername, 'user')}
            ${assign(MySimpleWithPropsElement.props.currentEmail, 'user@example.com')}
        >
        </${MySimpleWithPropsElement}>
    `,
});
```

## Element events (outputs)

Define events with `events` when making a functional element. Each event must be initialized with `defineElementEvent` and a type parameter. `defineElementEvent` accepts no inputs as it doesn't make sense for events to have default values.

To dispatch an event, grab `dispatch` from `renderCallback`'s parameters.

<!-- example-link: src/readme-examples/my-simple-with-events.element.ts -->

```TypeScript
import {defineElementEvent, defineFunctionalElement, html, listen} from 'element-vir';

export const MySimpleWithEventsElement = defineFunctionalElement({
    tagName: 'my-simple-element-with-events',
    events: {
        logoutClick: defineElementEvent<void>(),
        randomNumber: defineElementEvent<number>(),
    },
    renderCallback: ({dispatch, events}) => html`
        <button ${listen('click', () => dispatch(new events.logoutClick(undefined)))}>
            log out
        </button>
        <button ${listen('click', () => dispatch(new events.randomNumber(Math.random())))}>
            generate random number
        </button>
    `,
});
```

## Listening to typed events (outputs)

Use the `listen` directive to listen to typed events emitted by your custom functional elements:

<!-- example-link: src/readme-examples/my-app-with-events.element.ts -->

```TypeScript
import {defineFunctionalElement, html, listen} from 'element-vir';
import {MySimpleWithEventsElement} from './my-simple-with-events.element';

export const MyAppWithEventsElement = defineFunctionalElement({
    tagName: 'my-app-with-events-element',
    props: {
        myNumber: -1,
    },
    renderCallback: ({props}) => html`
        <h1>My App</h1>
        <${MySimpleWithEventsElement}
            ${listen(MySimpleWithEventsElement.events.logoutClick, () => {
                console.info('logout triggered');
            })}
            ${listen(MySimpleWithEventsElement.events.randomNumber, (event) => {
                props.myNumber = event.detail;
            })}
        >
        </${MySimpleWithEventsElement}>
        <span>${props.myNumber}</span>
    `,
});
```

`listen` can also be used to listen to native DOM events (like `click`) and the proper event type will be provided for the listener callback.

## Typed events without an element

Create a custom event type with `defineTypedEvent`. Make sure to include the type generic (like this: `defineTypedEvent<number>`) and call it twice, the second time with the event type string, (like this: `defineTypedEvent<number>()('my-event-type-name')`) to ensure type safety when using your event. Note that event type names should probably be unique, or they may clash with each other.

### Creating a typed event

<!-- example-link: src/readme-examples/custom-event-no-element.ts -->

```TypeScript
import {defineTypedEvent} from 'element-vir';

export const MyCustomEvent = defineTypedEvent<number>()('myCustomEventName');
```

### Using a typed event

Both dispatching a custom event and listening to a custom event:

<!-- example-link: src/readme-examples/custom-event-usage.element.ts -->

```TypeScript
import {defineFunctionalElement, html, listen} from 'element-vir';
import {MyCustomEvent} from './custom-event-no-element';

export const MyElementWithCustomEvents = defineFunctionalElement({
    tagName: 'my-app-with-custom-events',
    renderCallback: ({genericDispatch}) => html`
        <div
            ${listen(MyCustomEvent, (event) => {
                console.log(`Got a number! ${event.detail}`);
            })}
        >
            <div
                ${listen('click', () => {
                    genericDispatch(new MyCustomEvent(Math.random()));
                })}
            ></div>
        </div>
    `,
});
```

## Directives

The following custom [`lit` directives](https://lit.dev/docs/templates/custom-directives/) are contained within this package.

### onDomCreated

This directive should be used instead of trying to use `querySelector` directly on the custom element.

This triggers only once when the element it's attached has actually been created in the DOM. If it's attached element changes, the callback will be triggered again.

<!-- example-link: src/readme-examples/my-simple-with-on-dom-created.element.ts -->

```TypeScript
import {defineFunctionalElement, html, onDomCreated} from 'element-vir';

export const MySimpleWithOnDomCreatedElement = defineFunctionalElement({
    tagName: 'my-simple-with-on-dom-created-element',
    renderCallback: () => html`
        <span
            ${onDomCreated((element) => {
                // logs a span element
                console.log(element);
            })}
        >
            Hello there!
        </span>
    `,
});
```

### onResize

This directive fulfills a common use case of triggering callbacks when something resizes. Instead of just tracking the _globally_ resizing window though, this allows you to track resizes of an individual element. The callback here is passed an object with a portion of the [`ResizeObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry) properties (since not all properties are supported well in browsers).

<!-- example-link: src/readme-examples/my-simple-with-on-resize.element.ts -->

```TypeScript
import {defineFunctionalElement, html, onResize} from 'element-vir';

export const MySimpleWithOnResizeElement = defineFunctionalElement({
    tagName: 'my-simple-with-on-dom-created-element',
    renderCallback: () => html`
        <span
            ${onResize((entry) => {
                // this will track resizing of this span
                // the entry parameter contains target and contentRect properties
                console.log(entry);
            })}
        >
            Hello there!
        </span>
    `,
});
```

### assign

Assign a value to one of a custom element's properties. This is explained in the **Assigning to properties (inputs)** section earlier in this README.

### listen

Listen to a specific event emitted from a custom element. This is explained in the **Listening to custom events (outputs)** section earlier in this README.

### assignWithCleanup

This directive is the same as the `assign` directive but it accepts an additional `cleanupCallback` input. Use this directive to assign values which need some kind of cleanup when they're overwritten. For example, a 3D rendering engine which uses the canvas that should free up memory when it's swapped out.

<!-- example-link: src/readme-examples/my-app-with-cleanup.element.ts -->

```TypeScript
import {assign, assignWithCleanup, defineFunctionalElement, html} from 'element-vir';
import {MySimpleWithPropsElement} from './my-simple-with-props.element';

export const MyAppWithPropsElement = defineFunctionalElement({
    tagName: 'my-app-with-cleanup',
    renderCallback: () => html`
        <h1>My App</h1>
        <${MySimpleWithPropsElement}
            ${assignWithCleanup(
                MySimpleWithPropsElement.props.currentUsername,
                'user',
                (previousValue) => {
                    // here would be the cleanup code.
                    // In this specific example the value is just a string, so no cleanup is needed.
                    previousValue.trim();
                },
            )}
            ${assign(MySimpleWithPropsElement.props.currentEmail, 'user@example.com')}
        >
        </${MySimpleWithPropsElement}>
    `,
});
```

## Require all child custom elements to be functional elements

To require all child elements to be functional elements defined by this package, call `requireAllCustomElementsToBeFunctionalElement` anywhere in your app. This is a global setting so do not enable it unless you want it to be true _everywhere_ in your current run-time. This should not be used if you're using custom elements from other libraries (unless they happen to also use this package to define their custom elements).

<!-- example-link: src/readme-examples/require-functional-element.ts -->

```TypeScript
import {requireAllCustomElementsToBeFunctionalElement} from 'element-vir';

requireAllCustomElementsToBeFunctionalElement();
```

# Dev

## markdown out of date

If you see this: `Code in Markdown file(s) is out of date. Run without --check to update. code-in-markdown failed.`, run `npm run update-docs` to fix it.
