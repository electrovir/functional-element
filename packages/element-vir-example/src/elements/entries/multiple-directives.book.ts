import {defineBookPage} from 'element-book';
import {html, listen, testId} from 'element-vir';

export const multipleDirectivesBookPage = defineBookPage({
    title: 'multiple directives',
    parent: undefined,
    defineExamples({defineExample}) {
        defineExample({
            title: 'with array (does not work)',
            stateInitStatic: {value: 0},
            render({state, updateState}) {
                return html`
                    <div
                        ${[
                            listen('click', () => {
                                updateState({value: state.value + 1});
                            }),
                            testId('derp'),
                        ]}
                    >
                        <button>click me</button>
                        <br />
                        value: ${state.value}
                    </div>
                `;
            },
        });
        defineExample({
            title: 'with extra template',
            stateInitStatic: {value: 0},
            render({state, updateState}) {
                const directives = html`
                    ${listen('click', () => {
                        updateState({value: state.value + 1});
                    })}
                    ${testId('derp')}
                `;
                return html`
                    <div ${directives}>
                        <button>click me</button>
                        <br />
                        value: ${state.value}
                    </div>
                `;
            },
        });
    },
});
