import {findOverflowParent} from '@augment-vir/browser';
import {MaybePromise, mapObjectValues} from '@augment-vir/common';
import {Coords, NavController, NavDirection} from 'device-navigation';
import {listenToPageActivation} from 'page-active';
import {assertInstanceOf} from 'run-time-assertions';
import {
    ExtractEventByType,
    ExtractEventTypes,
    ListenOptions,
    ListenTarget,
    RemoveListenerCallback,
    defineTypedCustomEvent,
    defineTypedEvent,
    listenToGlobal,
} from 'typed-event-target';

export type PositionRect = {
    top: number;
    left: number;
    right: number;
    bottom: number;
};

export const emptyPositionRect: PositionRect = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
};

export type PopUpManagerOptions = {
    /**
     * The minimum number of pixels for allowing the pop-up to go downwards. If the downward
     * available space is less than this, and if the upwards available space is
     * `verticalDiffThreshold` more than the downwards space, the pop-up will be directed upwards.
     *
     * Equation:
     *
     *     const directUpwards =
     *         downwardsSpace < minDownSpace &&
     *         upwardsSpace > DownwardsSpace + verticalDiffThreshold;
     *
     * @default 200
     */
    minDownSpace: number;
    /**
     * The number of pixels required for the upwards available space to be bigger than the downwards
     * available space before directing the pop-up upwards.
     *
     * Equation:
     *
     *     const directUpwards =
     *         downwardsSpace < minDownSpace &&
     *         upwardsSpace > DownwardsSpace + verticalDiffThreshold;
     *
     * @default 20
     */
    verticalDiffThreshold: number;
    /**
     * Supports navigation of the pop up via the `device-navigation` package.
     *
     * @default true
     */
    supportNavigation: boolean;
};

export type ShowPopUpResult = {
    /**
     * Indicates if the "pop up" should pop in the downwards direction or not. If not, it should pop
     * in the upwards direction. This is determined by how much space is available on either side of
     * the root element.
     */
    popDown: boolean;
    positions: Record<'root' | 'container' | 'diff', PositionRect>;
};

export class HidePopUpEvent extends defineTypedEvent('hide-pop-up') {}
export class NavSelectEvent extends defineTypedCustomEvent<Coords>()('nav-select') {}

export type PopUpManagerEvents = HidePopUpEvent | NavSelectEvent;

export class PopUpManager {
    private listenTarget = new ListenTarget<PopUpManagerEvents>();
    private options: PopUpManagerOptions = {
        minDownSpace: 200,
        verticalDiffThreshold: 20,
        supportNavigation: true,
    };
    private cleanupCallbacks: (() => void)[] = [];
    private lastRootElement: HTMLElement | undefined;

    constructor(options?: Partial<PopUpManagerOptions> | undefined) {
        this.options = {...this.options, ...options};
    }

    private attachGlobalListeners(rootElement: HTMLElement) {
        const navController = new NavController(rootElement);

        this.cleanupCallbacks = [
            listenToPageActivation(false, (isPageActive) => {
                if (!isPageActive) {
                    this.removePopUp();
                }
            }),
            listenToGlobal(
                'mousedown',
                (event) => {
                    if (
                        this.lastRootElement &&
                        event.composedPath().includes(this.lastRootElement)
                    ) {
                        /** Ignore clicks that came from the pop up host itself. */
                        return;
                    }
                    this.removePopUp();
                },
                {passive: true},
            ),
            listenToGlobal('keydown', (event) => {
                const keyCode = event.code;

                if (keyCode === 'Escape') {
                    this.removePopUp();
                } else if (this.options.supportNavigation) {
                    if (keyCode === 'ArrowDown') {
                        event.stopImmediatePropagation();
                        event.preventDefault();

                        navController.navigate({
                            direction: NavDirection.Down,
                            allowWrapping: false,
                        });
                    } else if (keyCode === 'ArrowUp') {
                        event.stopImmediatePropagation();
                        event.preventDefault();

                        navController.navigate({
                            direction: NavDirection.Up,
                            allowWrapping: false,
                        });
                    } else if (keyCode === 'ArrowLeft') {
                        event.stopImmediatePropagation();
                        event.preventDefault();

                        navController.navigate({
                            direction: NavDirection.Left,
                            allowWrapping: false,
                        });
                    } else if (keyCode === 'ArrowRight') {
                        event.stopImmediatePropagation();
                        event.preventDefault();

                        navController.navigate({
                            direction: NavDirection.Right,
                            allowWrapping: false,
                        });
                    } else if (keyCode === 'Enter' || keyCode === 'Return') {
                        const currentlyFocused = navController.getCurrentlyFocused();
                        if (currentlyFocused) {
                            navController.enterInto();
                            this.listenTarget.dispatch(
                                new NavSelectEvent({detail: currentlyFocused.coords}),
                            );
                            event.stopImmediatePropagation();
                            event.preventDefault();
                        }
                    }
                }
            }),
        ];
    }

    public listen<
        const EventDefinition extends Readonly<{
            type: ExtractEventTypes<PopUpManagerEvents>;
        }>,
    >(
        event: EventDefinition,
        listener: (
            event: ExtractEventByType<PopUpManagerEvents, EventDefinition['type']>,
        ) => MaybePromise<void>,
        options?: ListenOptions | undefined,
    ): RemoveListenerCallback {
        return this.listenTarget.listen(event, listener, options);
    }

    public removePopUp() {
        this.cleanupCallbacks.forEach((callback) => callback());
        this.listenTarget.dispatch(new HidePopUpEvent());
    }

    public showPopUp(
        rootElement: HTMLElement,
        options?: Partial<PopUpManagerOptions> | undefined,
    ): ShowPopUpResult {
        this.lastRootElement = rootElement;
        const currentOptions = {...this.options, ...options};
        const container = findOverflowParent(rootElement);
        assertInstanceOf(container, HTMLElement);

        const rootRect = rootElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const containerScrollbarWidth = container.offsetWidth - container.clientWidth;
        const containerScrollbarHeight = container.offsetHeight - container.clientHeight;

        const containerPosition: PositionRect =
            container === document.body
                ? {
                      top: 0,
                      left: 0,
                      right: globalThis.innerWidth,
                      bottom: globalThis.innerHeight,
                  }
                : {
                      top: containerRect.top,
                      left: containerRect.left,
                      right: containerRect.right - containerScrollbarWidth,
                      bottom: containerRect.bottom - containerScrollbarHeight,
                  };
        const rootPosition: PositionRect = mapObjectValues(emptyPositionRect, (key) => {
            return rootRect[key];
        });
        const diff: PositionRect = mapObjectValues(emptyPositionRect, (key) => {
            const containerDimension = containerPosition[key];
            const hostDimension = rootPosition[key];

            return Math.abs(containerDimension - hostDimension);
        });

        const useUp =
            diff.top > diff.bottom + currentOptions.verticalDiffThreshold &&
            diff.bottom < currentOptions.minDownSpace;

        this.attachGlobalListeners(rootElement);

        return {
            popDown: !useUp,
            positions: {
                container: containerPosition,
                root: rootPosition,
                diff,
            },
        };
    }

    public destroy() {
        this.removePopUp();
        this.listenTarget.destroy();
    }
}
