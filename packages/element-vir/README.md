# element-vir

Heroic. Reactive. Declarative. Type safe. Web components without compromise.

A wrapper for [lit-element](http://lit.dev) that adds type-safe custom element usage and I/O with declarative element definition.

No need for an extra build step,<br>
no need for side effect imports, <br>
no need for unique file extensions,<br>
no need for more static analysis tooling,<br>
no need for a dedicated, unique syntax.<br>
_**It's just JavaScript.**_<br>
<sup>Or TypeScript, if you're into that!</sup>

Uses the power of _native_ JavaScript custom web elements, _native_ JavaScript template literals, _native_ JavaScript functions, _native_ HTML, and [lit-element](http://lit.dev).

[Works in every major web browser except Internet Explorer.](https://caniuse.com/mdn-api_window_customelements)

Try it out on CodePen! https://codepen.io/electrovir/pen/qBwQYxq

# Install

[Published on npm:](https://www.npmjs.com/package/element-vir)

```bash
npm i element-vir
```

Make sure to install this as a normal dependency (not just a dev dependency) because it needs to exist at run time.

# Usage

Most usage of this package is done through the `defineElement` or `defineElementNoInputs` functions. See the [`DeclarativeElementInit`](https://github.com/electrovir/element-vir/blob/dev/packages/src/declarative-element/declarative-element-init.ts) type for that function's full inputs. The inputs are also described below with examples.

All of [`lit`](https://lit.dev)'s syntax and functionality is available for use if you wish.

## Simple element definition

Use `defineElementNoInputs` to define your element if it's not going to accept any inputs (or if you're just getting started). It's only input is an object with at least `tagName` and `render` properties (the types enforce this). Here is a bare-minimum example custom element:

<!-- example-link: src/readme-examples/my-simple.element.ts -->

```TypeScript
import {defineElementNoInputs, html} from 'element-vir';

export const MySimple = defineElementNoInputs({
    tagName: 'my-simple',
    render() {
        return html`
            <span>Hello there!</span>
        `;
    },
});
```

Make sure to export your element definition if you need to use it in other files.

## Using in other elements

To use already defined elements (like the example above), they must be interpolated into HTML templates like so:

<!-- example-link: src/readme-examples/my-app.element.ts -->

```TypeScript
import {defineElementNoInputs, html} from 'element-vir';
import {MySimple} from './my-simple.element.js';

export const MyApp = defineElementNoInputs({
    tagName: 'my-app',
    render() {
        return html`
            <h1>My App</h1>
            <${MySimple}></${MySimple}>
        `;
    },
});
```

This requirement ensures that the element is properly imported and registered with the browser. (Compare to pure [lit](http://lit.dev) where you must remember to import each element file as a side effect, or without actually referencing any of its exports in your code.)

## Adding styles

Styles are added through the `styles` property when defining a declarative element (similar to [how they are defined in `lit`](https://lit.dev/docs/components/styles/)):

<!-- example-link: src/readme-examples/my-with-styles.element.ts -->

```TypeScript
import {css, defineElementNoInputs, html} from 'element-vir';

export const MyWithStyles = defineElementNoInputs({
    tagName: 'my-with-styles',
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
    render() {
        return html`
            <span>Hello there!</span>
            <span>How are you doing?</span>
        `;
    },
});
```

### Interpolated CSS tag selectors

Declarative element definitions can be used in the `css` tagged template just like in the `html` tagged template. This will be replaced by the element's tag name:

<!-- example-link: src/readme-examples/my-with-styles-and-interpolated-selector.element.ts -->

```TypeScript
import {css, defineElementNoInputs, html} from 'element-vir';
import {MySimple} from './my-simple.element.js';

export const MyWithStylesAndInterpolatedSelector = defineElementNoInputs({
    tagName: 'my-with-styles-and-interpolated-selector',
    styles: css`
        ${MySimple} {
            background-color: blue;
        }
    `,
    render() {
        return html`
            <${MySimple}></${MySimple}>
        `;
    },
});
```

## Defining and using Inputs

Define element inputs by using `defineElement` to define a declarative element. Pass your input type as a generic to the `defineElement` call. Then call _that_ with the normal definition input (like when using `defineElementNoInputs`).

To use an element's inputs for use in its template, grab `inputs` from `render`'s parameters and interpolate it into your HTML template:

<!-- example-link: src/readme-examples/my-with-inputs.element.ts -->

```TypeScript
import {defineElement, html} from 'element-vir';

export const MyWithInputs = defineElement<{
    username: string;
    email: string;
}>()({
    tagName: 'my-with-inputs',
    render({inputs}) {
        return html`
            <span>Hello there ${inputs.username}!</span>
        `;
    },
});
```

## Defining internal state

Define initial internal state values and types with the `stateInit` property when defining an element. Grab it with `state` in `render` to use state. Grab `updateState` in `render` to update state:

<!-- example-link: src/readme-examples/my-with-update-state.element.ts -->

```TypeScript
import {defineElementNoInputs, html, listen} from 'element-vir';

export const MyWithUpdateState = defineElementNoInputs({
    tagName: 'my-with-update-state',
    stateInitStatic: {
        username: 'dev',
        /**
         * Use "as" to create state properties that can be types other than the initial value's
         * type. This is particularly useful when, as below, the initial value is undefined.
         */
        email: undefined as string | undefined,
    },
    render({state, updateState}) {
        return html`
            <span
                ${listen('click', () => {
                    updateState({username: 'new name!'});
                })}
            >
                Hello there ${state.username}!
            </span>
        `;
    },
});
```

### Assigning inputs

Use the `assign` directive to assign values to child custom elements inputs:

<!-- example-link: src/readme-examples/my-with-assignment.element.ts -->

```TypeScript
import {defineElementNoInputs, html} from 'element-vir';
import {MyWithInputs} from './my-with-inputs.element.js';

export const MyWithAssignment = defineElementNoInputs({
    tagName: 'my-with-assignment',
    render() {
        return html`
            <h1>My App</h1>
            <${MyWithInputs.assign({
                email: 'user@example.com',
                username: 'user',
            })}></${MyWithInputs}>
        `;
    },
});
```

## Other callbacks

There are two other callbacks you can define that are sort of similar to lifecycle callbacks. They are much simpler than lifecycle callbacks however.

-   `init`: called right before the first render and has all state and inputs setup. (This is similar to `connectedCallback` in standard HTMLElement classes but is fired much later, after inputs are assigned, to avoid race conditions.)
-   `cleanup`: called when an element is removed from the DOM. (This is the same as the `disconnectedCallback` in standard HTMLElement classes.)

<!-- example-link: src/readme-examples/my-with-cleanup-callback.element.ts -->

```TypeScript
import {defineElementNoInputs, html} from 'element-vir';

export const MyWithAssignmentCleanupCallback = defineElementNoInputs({
    tagName: 'my-with-cleanup-callback',
    stateInitStatic: {
        intervalId: undefined as undefined | number,
    },
    init: ({updateState}) => {
        updateState({
            intervalId: window.setInterval(() => console.info('hi'), 1000),
        });
    },
    render() {
        return html`
            <h1>My App</h1>
        `;
    },
    cleanup: ({state, updateState}) => {
        window.clearInterval(state.intervalId);
        updateState({
            intervalId: undefined,
        });
    },
});
```

## Element events (outputs)

When defining a declarative element, use `events` to setup event names and types. Each event must be initialized with `defineElementEvent` and a type parameter but no run-time inputs.

To dispatch an event, grab `dispatch` and `events` from `render`'s parameters.

<!-- example-link: src/readme-examples/my-with-events.element.ts -->

```TypeScript
import {randomInteger} from '@augment-vir/common';
import {defineElementEvent, defineElementNoInputs, html, listen} from 'element-vir';

export const MyWithEvents = defineElementNoInputs({
    tagName: 'my-with-events',
    events: {
        logoutClick: defineElementEvent<void>(),
        randomNumber: defineElementEvent<number>(),
    },
    render({dispatch, events}) {
        return html`
            <button ${listen('click', () => dispatch(new events.logoutClick()))}>log out</button>
            <button
                ${listen('click', () =>
                    dispatch(new events.randomNumber(randomInteger({min: 0, max: 1_000_000}))),
                )}
            >
                generate random number
            </button>
        `;
    },
});
```

### Listening to element events (outputs)

Use the `listen` directive to listen to events emitted by your custom elements:

<!-- example-link: src/readme-examples/my-with-event-listening.element.ts -->

```TypeScript
import {defineElementNoInputs, html, listen} from 'element-vir';
import {MyWithEvents} from './my-with-events.element.js';

export const MyWithEventListening = defineElementNoInputs({
    tagName: 'my-with-event-listening',
    stateInitStatic: {
        myNumber: -1,
    },
    render({state, updateState}) {
        return html`
            <h1>My App</h1>
            <${MyWithEvents}
                ${listen(MyWithEvents.events.logoutClick, () => {
                    console.info('logout triggered');
                })}
                ${listen(MyWithEvents.events.randomNumber, (event) => {
                    updateState({myNumber: event.detail});
                })}
            ></${MyWithEvents}>
            <span>${state.myNumber}</span>
        `;
    },
});
```

`listen` can also be used to listen to native DOM events (like `click`) and the proper event type will be provided for the listener callback.

## Typed events without an element

Create a custom event type with `defineTypedEvent`. Make sure to include the type parameter and call it twice, the second time with the event type name string to ensure type safety when using your event. Note that event type names should be unique, or they will clash with each other.

<!-- example-link: src/readme-examples/my-custom-action.event.ts -->

```TypeScript
import {defineTypedEvent} from 'element-vir';

export const MyCustomActionEvent = defineTypedEvent<number>()('my-custom-action');
```

### Using a typed event

Dispatching a custom event and listening to a custom event is the same as doing so for element events:

<!-- example-link: src/readme-examples/my-with-custom-events.element.ts -->

```TypeScript
import {randomInteger} from '@augment-vir/common';
import {defineElementNoInputs, html, listen} from 'element-vir';
import {MyCustomActionEvent} from './my-custom-action.event.js';

export const MyWithCustomEvents = defineElementNoInputs({
    tagName: 'my-with-custom-events',
    render({dispatch}) {
        return html`
            <div
                ${listen(MyCustomActionEvent, (event) => {
                    console.info(`Got a number! ${event.detail}`);
                })}
            >
                <div
                    ${listen('click', () => {
                        dispatch(new MyCustomActionEvent(randomInteger({min: 0, max: 1_000_000})));
                    })}
                ></div>
            </div>
        `;
    },
});
```

## Host classes

### Defining host classes

Host classes can be defined and used with type safety. Host classes are used to provide alternative styles for custom elements. They are purely driven by CSS and are thus applied to the the `class` HTML attribute.

Host classes are defined by passing an object to `hostClasses` at element definition time. Each property name in the `hostClasses` object creates a host class name (note that host class names must start with the element's tag name). Each value in the `hostClasses` object defines behavior for the host class:

-   if the value is a callback, that host class will automatically be applied if the callback returns true after a render is executed.
-   if the value is `false`, the host class is never automatically applied, it must be manually applied by consumers.

Apply host classes in the element's stylesheet by using a callback for the styles property:

<!-- example-link: src/readme-examples/my-with-host-class-definition.element.ts -->

```TypeScript
import {css, defineElementNoInputs, html} from 'element-vir';

export const MyWithHostClassDefinition = defineElementNoInputs({
    tagName: 'my-with-host-class-definition',
    stateInitStatic: {
        myProp: 'hello there',
    },
    hostClasses: {
        /**
         * Setting the value to false means this host class will never be automatically applied. It
         * will simply be a static member on the element for manual application in consumers.
         */
        'my-with-host-class-definition-a': false,
        /**
         * This host class will be automatically applied if the given callback is evaluated to true
         * after a call to render.
         */
        'my-with-host-class-definition-automatic': ({state}) => {
            return state.myProp === 'foo';
        },
    },
    /**
     * Apply styles to the host classes by using a callback for "styles". The callback's argument
     * contains the host classes defined above in the "hostClasses" property.
     */
    styles: ({hostClasses}) => css`
        ${hostClasses['my-with-host-class-definition-automatic'].selector} {
            color: blue;
        }

        ${hostClasses['my-with-host-class-definition-a'].selector} {
            color: red;
        }
    `,
    render({state}) {
        return html`
            ${state.myProp}
        `;
    },
});
```

### Applying host classes

To apply a host class in a consumer, access the child element's `.hostClasses` property:

<!-- example-link: src/readme-examples/my-with-host-class-usage.element.ts -->

```TypeScript
import {defineElementNoInputs, html} from 'element-vir';
import {MyWithHostClassDefinition} from './my-with-host-class-definition.element.js';

export const MyWithHostClassUsage = defineElementNoInputs({
    tagName: 'my-with-host-class-usage',
    render() {
        return html`
            <${MyWithHostClassDefinition}
                class=${MyWithHostClassDefinition.hostClasses['my-with-host-class-definition-a']}
            ></${MyWithHostClassDefinition}>
        `;
    },
});
```

## CSS Vars

Typed CSS variables are created in a similar manner to host classes:

<!-- example-link: src/readme-examples/my-with-css-vars.element.ts -->

```TypeScript
import {css, defineElementNoInputs, html} from 'element-vir';

export const MyWithCssVars = defineElementNoInputs({
    tagName: 'my-with-css-vars',
    cssVars: {
        /** The value assigned here ('blue') becomes the fallback value for this CSS var. */
        'my-with-css-vars-my-var': 'blue',
    },
    styles: ({cssVars}) => css`
        :host {
            /*
                Set CSS vars (or reference the name directly) via the ".name" property
            */
            ${cssVars['my-with-css-vars-my-var'].name}: yellow;
            /*
                Use CSS vars with the ".value" property. This includes a "var" wrapper and the
                assigned fallback value (which in this case is 'blue').
            */
            color: ${cssVars['my-with-css-vars-my-var'].value};
        }
    `,
    render() {
        return html``;
    },
});
```

## Custom Type Requirements

Use `wrapDefineElement` to compose `defineElement` and `defineElementNoInputs`. This is particularly useful to adding restrictions on the element `tagName`, but it can be used for restricting any of the type parameters:

<!-- example-link: src/readme-examples/my-custom-define.ts -->

```TypeScript
import {wrapDefineElement} from 'element-vir';

export type VirTagName = `vir-${string}`;

export const {defineElement: defineVirElement, defineElementNoInputs: defineVirElementNoInputs} =
    wrapDefineElement<VirTagName>();

// add an optional assert callback
export const {
    defineElement: defineVerifiedVirElement,
    defineElementNoInputs: defineVerifiedVirElementNoInputs,
} = wrapDefineElement<VirTagName>({
    assertInputs: (inputs) => {
        if (!inputs.tagName.startsWith('vir-')) {
            throw new Error(`all custom elements must start with "vir-"`);
        }
    },
});

// add an optional transform callback
export const {
    defineElement: defineTransformedVirElement,
    defineElementNoInputs: defineTransformedVirElementNoInputs,
} = wrapDefineElement<VirTagName>({
    transformInputs: (inputs) => {
        return {
            ...inputs,
            tagName: inputs.tagName.startsWith('vir-') ? `vir-${inputs.tagName}` : inputs.tagName,
        };
    },
});
```

## Directives

The following custom [`lit` directives](https://lit.dev/docs/templates/custom-directives/) are contained within this package.

All [built-in `lit` directives](https://lit.dev/docs/templates/directives/) are also exported by `element-vir`.

### `onDomCreated`

This triggers only once when the element it's attached to has actually been created in the DOM. If the attached element changes, the callback will be triggered again.

<!-- example-link: src/readme-examples/my-with-on-dom-created.element.ts -->

```TypeScript
import {defineElementNoInputs, html, onDomCreated} from 'element-vir';

export const MyWithOnDomCreated = defineElementNoInputs({
    tagName: 'my-with-on-dom-created',
    render() {
        return html`
            <span
                ${onDomCreated((element) => {
                    // logs a span element
                    console.info(element);
                })}
            >
                Hello there!
            </span>
        `;
    },
});
```

### `onResize`

This directive fires its callback whenever the element it's attached to resizes. The callback is passed an object with a portion of the [`ResizeObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry) properties.

<!-- example-link: src/readme-examples/my-with-on-resize.element.ts -->

```TypeScript
import {defineElementNoInputs, html, onResize} from 'element-vir';

export const MyWithOnResize = defineElementNoInputs({
    tagName: 'my-with-on-resize',
    render() {
        return html`
            <span
                ${onResize((entry) => {
                    // this will track resizing of this span
                    // the entry parameter contains target and contentRect properties
                    console.info(entry);
                })}
            >
                Hello there!
            </span>
        `;
    },
});
```

### `listen`

Listen to a specific event. This is explained in the **Listening to element events (outputs)** section earlier.

### `renderIf`

Use the `renderIf` directive to easily render a template if a given condition is true.

<!-- example-link: src/readme-examples/my-with-render-if.element.ts -->

```TypeScript
import {defineElement, html, renderIf} from 'element-vir';

export const MyWithRenderIf = defineElement<{shouldRender: boolean}>()({
    tagName: 'my-with-render-if',
    render({inputs}) {
        return html`
            ${renderIf(
                inputs.shouldRender,
                html`
                    I'm conditionally rendered!
                `,
            )}
        `;
    },
});
```

### `asyncProp`

Use `renderAsync` or `isResolved` in conjunction with `asyncProp` to seamlessly render and update element state based on async values:

<!-- example-link: src/readme-examples/my-with-async-prop.element.ts -->

```TypeScript
import {asyncProp, defineElement, html, listen, renderAsync} from 'element-vir';

type EndpointData = number[];

async function loadSomething(endpoint: string): Promise<EndpointData> {
    // load something from the network
    const data = await (
        await fetch(
            [
                '',
                'api',
                endpoint,
            ].join('/'),
        )
    ).json();
    return data;
}

export const MyWithAsyncProp = defineElement<{endpoint: string}>()({
    tagName: 'my-with-async-prop',
    stateInitStatic: {
        data: asyncProp({
            async updateCallback({endpoint}: {endpoint: string}) {
                return loadSomething(endpoint);
            },
        }),
    },
    render({inputs, state}) {
        /**
         * This causes the a promise which automatically updates the state.data prop once the
         * promise resolves. It only creates a new promise if the first input, the trigger, value
         * changes from previous calls.
         */
        state.data.update(inputs);
        return html`
            Here's the data:
            <br />
            ${renderAsync(state.data, 'Loading...', (loadedData) => {
                return html`
                    Got the data: ${loadedData}
                `;
            })}
            <br />
            <button
                ${listen('click', () => {
                    /** You can force asyncProp to update by calling forceUpdate. */
                    state.data.forceUpdate(inputs);
                })}
            >
                Refresh
            </button>
        `;
    },
});
```

## Require all child custom elements to be declarative elements

To require all child elements to be declarative elements defined by this package, call `requireAllCustomElementsToBeDeclarativeElements` anywhere in your app. This is a global setting so do not enable it unless you want it to be true _everywhere_ in your current run-time. This should not be used if you're using custom elements from other libraries (unless they happen to also use this package to define their custom elements).

<!-- example-link: src/readme-examples/require-declarative-element.ts -->

```TypeScript
import {requireAllCustomElementsToBeDeclarativeElements} from 'element-vir';

requireAllCustomElementsToBeDeclarativeElements();
```

# Dev

## markdown out of date

If you see this: `Code in Markdown file(s) is out of date. Run without --check to update. code-in-markdown failed.`, run `npm run docs:update` to fix it.

## Testing source map errors

If you see

```
Error while reading source maps for ...
```

While running `npm test`, don't worry about it. Those only happen when tests fail and are not indicative of any problem beyond the test failure reasons.
