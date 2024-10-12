import {DeclarativeElement} from './declarative-element.js';

export function hasDeclarativeElementParent(input: Element): boolean {
    const rootNode = input.getRootNode();

    if (!(rootNode instanceof ShadowRoot)) {
        // declarative elements all use shadow DOM, so if a shadow root doesn't exist then we're not
        // in a declarative element.
        return false;
    }

    const host = rootNode.host;

    if (host instanceof DeclarativeElement) {
        return true;
    } else {
        return hasDeclarativeElementParent(host);
    }
}
