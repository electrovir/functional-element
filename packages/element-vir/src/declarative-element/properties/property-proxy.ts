import {type ObservableListener, isObservableBase} from 'observavir';
import {property} from '../../lit-exports/base-lit-exports.js';
import {type DeclarativeElement} from '../declarative-element.js';
import {type PropertyInitMapBase} from './element-properties.js';
import {isElementVirStateSetup, stateSetupKey} from './element-vir-state-setup.js';

/**
 * Used for a map of all observables registered to an element instance.
 *
 * @category Internal
 */
export type ObservableListenerMap<OriginalPropertyMap extends PropertyInitMapBase> = Partial<
    Record<keyof OriginalPropertyMap, ObservableListener<any> | undefined>
>;

/**
 * Binds the given property key as a reactive property on the given element.
 *
 * @category Internal
 */
export function bindReactiveProperty(element: HTMLElement, propertyKey: PropertyKey) {
    if (!(propertyKey in element)) {
        property()(element, propertyKey);
    }
}

function assertValidPropertyName<PropertyInitGeneric extends PropertyInitMapBase>(
    propKey: any,
    element: DeclarativeElement,
    elementTagName: string,
): asserts propKey is keyof PropertyInitGeneric {
    if (typeof propKey !== 'string' && typeof propKey !== 'number' && typeof propKey !== 'symbol') {
        throw new TypeError(
            `Property name must be a string, got type '${typeof propKey}' from: '${String(
                propKey,
            )}' for '${elementTagName.toLowerCase()}'`,
        );
    }
    if (!(propKey in element)) {
        throw new Error(
            `Property '${String(propKey)}' does not exist on '${elementTagName.toLowerCase()}'.`,
        );
    }
}

/**
 * Creates an internal proxy for setting inputs and state properties and then updating them on the
 * element itself so they will trigger lit's change detection.
 *
 * @category Internal
 */
export function createElementPropertyProxy<PropertyInitGeneric extends PropertyInitMapBase>(
    element: DeclarativeElement,
    shouldAlreadyExist: boolean,
): PropertyInitGeneric {
    /**
     * Lit element updates state and inputs by setting them directly on the element, so we must do
     * that here. DeclarativeElement's types, however, do not expose this behavior, so we add that
     * back in here.
     */
    const elementAsProps = element as DeclarativeElement & PropertyInitGeneric;

    function verifyProperty(propertyKey: PropertyKey) {
        if (shouldAlreadyExist) {
            assertValidPropertyName(propertyKey, element, element.tagName);
        } else {
            bindReactiveProperty(element, propertyKey);
        }
    }

    function valueGetter(target: any, propertyKey: keyof PropertyInitGeneric | symbol) {
        verifyProperty(propertyKey);

        return elementAsProps[propertyKey];
    }

    const propsProxy = new Proxy({} as Record<PropertyKey, unknown>, {
        get: valueGetter,
        set(target, propertyKey: keyof PropertyInitGeneric | symbol, rawNewValue) {
            const newValue = isElementVirStateSetup(rawNewValue)
                ? rawNewValue[stateSetupKey]()
                : rawNewValue;

            verifyProperty(propertyKey);
            const oldValue = elementAsProps[propertyKey];

            function setValueOnElement(value: typeof newValue) {
                /**
                 * We need to at least set the property on target so we can detect it in "ownKeys"
                 * and "getOwnPropertyDescriptor". We don't need duplicates of the values stored in
                 * target but doing so makes console logging more effective it actually works).
                 */
                target[propertyKey] = value;
                elementAsProps[propertyKey] = value;
            }

            const existingPropertyListener: ObservableListener<any> | undefined =
                element.observablePropertyListenerMap[propertyKey];

            if (oldValue !== newValue && isObservableBase(oldValue) && existingPropertyListener) {
                /** Stop listening to the old value now that we have a new value */
                oldValue.removeListener(existingPropertyListener);
            }

            if (isObservableBase(newValue)) {
                /** If we're using an existing observable property */
                if (existingPropertyListener) {
                    newValue.listen(false, existingPropertyListener);
                } else {
                    function newListener() {
                        element.requestUpdate();
                    }
                    element.observablePropertyListenerMap[propertyKey] = newListener;
                    newValue.listen(false, newListener);
                }
            } else if (isObservableBase(oldValue)) {
                /** Clear out old listener that is no longer used. */
                element.observablePropertyListenerMap[propertyKey] = undefined;
            }

            setValueOnElement(newValue);

            return true;
        },
        ownKeys(target) {
            return Reflect.ownKeys(target);
        },
        getOwnPropertyDescriptor(target, propertyName) {
            if (propertyName in target) {
                return {
                    get value() {
                        return valueGetter(target, propertyName);
                    },
                    configurable: true,
                    enumerable: true,
                };
            }

            return undefined;
        },
        has(target, propertyName) {
            return Reflect.has(target, propertyName);
        },
    });

    return propsProxy as PropertyInitGeneric;
}
