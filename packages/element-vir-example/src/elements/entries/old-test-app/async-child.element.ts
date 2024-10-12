import {randomInteger, wait, waitValue} from '@augment-vir/common';
import {asyncProp, defineElement, html, listen, renderAsync} from 'element-vir';

const sameNumberPromise = waitValue(1500, 86);

const circularReference = {derp: '' as any};
circularReference.derp = circularReference;

export const AsyncChild = defineElement<{
    trigger: number;
}>()({
    tagName: 'async-child',
    stateInitStatic: {
        loadThing: asyncProp({
            async updateCallback({trigger}: {trigger: number; circularReference: any}) {
                await wait(1500);
                return Math.pow(trigger, 2);
            },
        }),
    },
    renderCallback({state, inputs}) {
        console.info('rendering async child');
        state.loadThing.update({
            ...inputs,
            circularReference,
        });

        return html`
            <p>${renderAsync(state.loadThing, 'Loading...')}</p>
            <button
                ${listen('click', () => {
                    state.loadThing.forceUpdate({
                        ...inputs,
                        circularReference,
                    });
                })}
            >
                Force update
            </button>
            <button
                ${listen('click', () => {
                    state.loadThing.setValue(waitValue(1500, 42));
                })}
            >
                New Number Promise
            </button>
            <button
                ${listen('click', () => {
                    state.loadThing.setValue(sameNumberPromise);
                })}
            >
                Same Number Promise
            </button>
            <button
                ${listen('click', () => {
                    state.loadThing.setValue(randomInteger({min: 0, max: 10}));
                })}
            >
                New Resolved Value
            </button>
        `;
    },
});
