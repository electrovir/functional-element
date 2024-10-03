import {describe, it} from '@augment-vir/test';
import {ElementBookConfig} from './element-book-config';

describe('ElementBookConfig', () => {
    function acceptsElementBookConfig(input: ElementBookConfig) {}

    it('prevents router config and paths in the same config', () => {
        // it's fine with elementBookRoutePaths and everything else
        acceptsElementBookConfig({
            entries: [],
            elementBookRoutePaths: [],
            themeColor: 'blue',
        });
        // it's fine with elementBookRoutePaths and everything else
        acceptsElementBookConfig({
            entries: [],
            internalRouterConfig: {
                useInternalRouter: true,
            },
            themeColor: 'blue',
        });
        // if they're combined we get a TS error
        acceptsElementBookConfig(
            // @ts-expect-error
            {
                entries: [],
                internalRouterConfig: {
                    useInternalRouter: true,
                },
                elementBookRoutePaths: [],
                themeColor: 'blue',
            },
        );
    });
});
