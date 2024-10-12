import {ChildPart, ElementPartInfo, PartInfo, PartType} from '../../lit-exports/all-lit-exports.js';

/** For some reason these aren't defined in lit's types already. */
export type ExtraPartInfoProperties = {
    element: Element;
    options: {
        host: Element;
        renderBefore: Element;
        isConnected: boolean;
    };
};

export function extractElement(partInfo: PartInfo, directiveName: string): Element {
    assertIsElementPartInfo(partInfo, directiveName);
    const element = partInfo.element;
    return element;
}

function getPartHostTagName(partInfo: PartInfo): string | undefined {
    try {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const tagName = ((partInfo as ChildPart).options!.host as Element).tagName.toLowerCase();

        return tagName;
    } catch {
        return undefined;
    }
}

export function assertIsElementPartInfo(
    partInfo: PartInfo,
    directiveName: string,
): asserts partInfo is ElementPartInfo & ExtraPartInfoProperties {
    const hostTagName = getPartHostTagName(partInfo);
    const hostTagMessage = hostTagName ? `: in ${hostTagName}` : '';

    if (partInfo.type !== PartType.ELEMENT) {
        throw new Error(
            `${directiveName} directive can only be attached directly to an element${hostTagMessage}.`,
        );
    }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!(partInfo as ElementPartInfo & ExtraPartInfoProperties).element) {
        throw new Error(`${directiveName} directive found no element${hostTagMessage}.`);
    }
}
