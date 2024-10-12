import {ElementBookApp, ElementBookSlotName} from 'element-book';
import {css, defineElementNoInputs, html, listen} from 'element-vir';
import {entries} from '../../element-book-example/example.book.js';

export const VirApp = defineElementNoInputs({
    tagName: 'vir-app',
    styles: css`
        :host {
            display: flex;
            flex-direction: column;
            gap: 24px;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
        }

        ${ElementBookApp} {
            flex-grow: 1;
            overflow: hidden;
            max-width: 100%;
            box-sizing: border-box;
        }

        h1 {
            padding-left: 16px;
            margin: 0;
            margin-bottom: 16px;
        }
    `,
    stateInitStatic: {
        themeColor: undefined as string | undefined,
        paths: ['book'] as ReadonlyArray<string>,
    },
    renderCallback: ({state, updateState}) => {
        return html`
            <label>
                Theme color
                <input
                    ${listen('input', (event) => {
                        const element = event.currentTarget;
                        if (!(element instanceof HTMLInputElement)) {
                            throw new TypeError('input element not found for input event');
                        }
                        updateState({themeColor: element.value});
                    })}
                    type="color"
                />
            </label>
            <${ElementBookApp.assign({
                entries,
                themeColor: state.themeColor,
                internalRouterConfig: {
                    useInternalRouter: true,
                    basePath: 'element-book',
                },
                _debug: true,

                globalValues: {
                    testGlobalControl: 'it worked!',
                },
            })}
                ${listen(ElementBookApp.events.pathUpdate, (event) => {
                    updateState({paths: event.detail});
                })}
            >
                <h1 slot=${ElementBookSlotName.NavHeader}>My Title</h1>
                <footer slot=${ElementBookSlotName.Footer}>Example Footer</footer>
            </${ElementBookApp}>
        `;
    },
});
