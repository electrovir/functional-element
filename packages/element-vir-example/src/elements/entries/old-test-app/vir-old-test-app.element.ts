import {randomString} from '@augment-vir/common';
import {defineBookPage} from 'element-book';
import {Observable, css, defineElementNoInputs, html, listen, onResize} from 'element-vir';
import {assign} from 'element-vir/dist/declarative-element/directives/assign.directive';
import {AsyncChild} from './async-child.element.js';
import {TestChildElement} from './child.element.js';
import {MyCustomEvent} from './customEvent.js';
import {allTestArrayElements} from './elements-array.element.js';

export const VirOldTestApp = defineElementNoInputs({
    tagName: 'vir-old-test-app',
    styles: css`
        :host {
            display: block;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            padding: 32px;
            position: relative;
            font-family: sans-serif;
            color: black;
        }
        :host > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        hr {
            align-self: stretch;
            margin: 16px 0;
            flex-shrink: 0;
        }

        ${TestChildElement} {
            background-color: #eee;
            padding: 8px;
        }

        ${TestChildElement}.darker {
            background-color: #ddd;
        }

        .normal-colors {
            ${TestChildElement.cssVars['element-vir-test-child-derp'].name}: transparent;
        }

        .weird-colors {
            ${TestChildElement.cssVars['element-vir-test-child-derp'].name}: yellow;
        }

        .duplicate-names-test {
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
    `,
    stateInitStatic: {
        funnyNumber: Math.random(),
        eventsReceived: 0,
        lastReceivedMessage: '',
        width: -1,
        showChild: true,
        derp: {hi: 'yo'} as Record<string, string>,
        myObservable: new Observable({defaultValue: 5}),
    },
    renderCallback({state, updateState}) {
        // log here to make sure it's not rendering too often
        console.info(`app rendering ${state.width}`);
        return html`
            <main
                ${onResize((entry) => {
                    updateState({width: entry.contentRect.width});
                })}
            >
                Welcome to the test app.
                <button ${listen('click', () => updateState({funnyNumber: Math.random()}))}>
                    assign NEW number to child
                </button>
                <!-- Verify that the child component does not rerender when we pass it the same value. -->
                <!-- Check the console logs to verify.-->
                <button ${listen('click', () => updateState({funnyNumber: 4}))}>
                    assign SAME number to child
                </button>
                <button ${listen('click', () => updateState({showChild: !state.showChild}))}>
                    toggle second child
                </button>

                <hr />
                <${TestChildElement.assign({
                    displayNumber: state.funnyNumber,
                    width: state.width,
                    myProp: state.myObservable.value,
                })}
                    ${listen(TestChildElement.events.speak, (event) => {
                        console.info('speak event', event);
                        updateState({
                            eventsReceived: state.eventsReceived + 1,
                            lastReceivedMessage: event.detail,
                        });
                    })}
                    ${listen(MyCustomEvent, (event) => {
                        console.debug(event.detail);
                    })}
                    ${listen('click', (event) => {
                        console.debug(
                            'event should be a mouse event:',
                            // should be true
                            event instanceof MouseEvent,
                            event,
                        );
                    })}
                ></${TestChildElement}>
                <hr />
                ${state.showChild
                    ? html`
                          <span>Child just with clean up assign (no event listeners)</span>
                          <br />
                          <!-- prettier-ignore -->
                          <!-- intentionally not interpolated to make sure we're logging errors for it -->
                          <element-vir-test-child
                              class="darker weird-colors"
                              ${assign(TestChildElement, {
                                  displayNumber: state.funnyNumber,
                                  width: -1,
                              })}
                          ></element-vir-test-child>
                          <hr />
                      `
                    : ''}
                <${AsyncChild.assign({
                    trigger: state.funnyNumber,
                })}></${AsyncChild}>
                <${AsyncChild.assign({
                    trigger: state.funnyNumber,
                })}></${AsyncChild}>
                <hr />
                <span>Speak events received: ${state.eventsReceived}</span>
                <br />
                <span>Last speak message received: ${state.lastReceivedMessage}</span>
                <br />
                <span>app width: ${state.width}</span>

                <${TestChildElement.assign({
                    displayNumber: 15,
                    width: -1,
                })}
                    class=${TestChildElement.hostClasses['element-vir-test-child-test']}
                ></${TestChildElement}>
                <section class="duplicate-names-test">
                    ${allTestArrayElements.map((element) => {
                        return html`
                            <${element.assign({value: element.tagName})}
                                data-tag-name=${element.tagName}
                            ></${element}>
                            <${element.assign({value: randomString(4)})}
                                data-tag-name=${element.tagName}
                            ></${element}>
                        `;
                    })}
                </section>
            </main>
        `;
    },
});

export const oldTestAppPage = defineBookPage({
    title: 'Old Tests',
    parent: undefined,
    elementExamplesCallback({defineExample}) {
        defineExample({
            title: VirOldTestApp.tagName,
            styles: css`
                ${VirOldTestApp} {
                    max-width: 100%;
                }
            `,
            renderCallback() {
                return html`
                    <${VirOldTestApp}></${VirOldTestApp}>
                `;
            },
        });
    },
});
