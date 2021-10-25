import {ElementPartInfo, PartInfo, PartType} from 'lit/directive.js';
import {PropertyInitMapBase} from '../element-properties';
import {FunctionalElementBaseClass, FunctionalElementInstance} from '../functional-element';

/** For some reason these aren't defined in lit's types already. */
export type ExtraPartInfoProperties = {
    element: Element;
    options: {
        host: Element;
        renderBefore: Element;
        isConnected: boolean;
    };
};

export function extractFunctionalElement<PropertyInitGeneric extends PropertyInitMapBase>(
    partInfo: PartInfo,
    directiveName: string,
): FunctionalElementInstance<PropertyInitGeneric> {
    assertsIsElementPartInfo(partInfo, directiveName);
    const element = (partInfo as ElementPartInfo & ExtraPartInfoProperties).element;
    if (!(element instanceof FunctionalElementBaseClass)) {
        throw new Error(
            `${directiveName} directive only works when attached to functional elements`,
        );
    }
    return element as FunctionalElementInstance<PropertyInitGeneric>;
}

export function assertsIsElementPartInfo(
    partInfo: PartInfo,
    directiveName: string,
): asserts partInfo is ElementPartInfo & ExtraPartInfoProperties {
    if (partInfo.type !== PartType.ELEMENT) {
        throw new Error(`${directiveName} directive can only be attached directly to an element.`);
    }
    if (!(partInfo as ElementPartInfo & ExtraPartInfoProperties).element) {
        throw new Error(`${directiveName} directive found no element`);
    }
}