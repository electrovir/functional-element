import {defineConfig} from '@virmator/deps/configs/dep-cruiser.config.base';
import type {IConfiguration} from 'dependency-cruiser';

const baseConfig = defineConfig({
    fileExceptions: {
        // enter file exceptions by rule name here
        'no-orphans': {
            from: [
                'src/index.ts',
            ],
        },
        'not-to-unresolvable': {
            to: [
                // this _is_ resolvable
                'page-active',
            ],
        },
    },
    omitRules: [
        // enter rule names here to omit
        'no-duplicate-dep-types',
        'no-circular',
    ],
});

const depCruiserConfig: IConfiguration = {
    ...baseConfig,
    forbidden: [
        ...baseConfig.forbidden,
        {
            name: 'no-circular',
            severity: 'error',
            comment: 'This dependency is part of a circular relationship.',
            from: {},
            to: {
                circular: true,
                // allow circular type imports
                dependencyTypesNot: [
                    'type-import',
                    'type-only',
                ],
            },
        },
    ],
};

module.exports = depCruiserConfig;
