import {describe, it} from '@augment-vir/test';
import {ElementBookConfig} from './element-book-config.js';

describe('ElementBookConfig', () => {
    function acceptsElementBookConfig(input: ElementBookConfig) {}

    it('prevents router config and paths in the same config', () => {
        // it's fine with elementBookRoutePaths and everything else
        acceptsElementBookConfig({
            pages: [],
            elementBookRoutePaths: [],
            themeColor: 'blue',
        });
        // it's fine with elementBookRoutePaths and everything else
        acceptsElementBookConfig({
            pages: [],
            internalRouterConfig: {
                useInternalRouter: true,
            },
            themeColor: 'blue',
        });
        acceptsElementBookConfig(
            // @ts-expect-error: if they're combined we get a TS error
            {
                pages: [],
                internalRouterConfig: {
                    useInternalRouter: true,
                },
                elementBookRoutePaths: [],
                themeColor: 'blue',
            },
        );
    });
});
