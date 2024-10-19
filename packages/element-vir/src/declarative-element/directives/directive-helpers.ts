import {ChildPart, ElementPartInfo, PartInfo, PartType} from '../../lit-exports/all-lit-exports.js';

/**
 * The full type for `ElementPartInfo` because `lit`'s built-in type leaves out of most of its
 * interface.
 *
 * @category Internal
 */
export type FullElementPartInfo =
    ElementPartInfo /** For some reason these aren't defined in lit's types already, even though they _do_ exist. */ & {
        element: Element;
        options: {
            host: Element;
            renderBefore: Element;
            isConnected: boolean;
        };
    };

/**
 * Extracts the element from the given part info. Used in lit directives.
 *
 * @category Internal
 */
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

/**
 * Asserts that the given part info is an instance of {@link FullElementPartInfo}.
 *
 * @category Internal
 */
export function assertIsElementPartInfo(
    partInfo: PartInfo,
    directiveName: string,
): asserts partInfo is FullElementPartInfo {
    const hostTagName = getPartHostTagName(partInfo);
    const hostTagMessage = hostTagName ? `: in ${hostTagName}` : '';

    if (partInfo.type !== PartType.ELEMENT) {
        throw new Error(
            `${directiveName} directive can only be attached directly to an element${hostTagMessage}.`,
        );
    }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!(partInfo as FullElementPartInfo).element) {
        throw new Error(`${directiveName} directive found no element${hostTagMessage}.`);
    }
}
