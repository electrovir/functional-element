import {baseTypedocConfig} from '@virmator/docs/configs/typedoc.config.base';
import {join, resolve} from 'node:path';
import type {TypeDocOptions} from 'typedoc';

const repoRoot = resolve(import.meta.dirname, '..');
const indexTsFile = join(repoRoot, 'src', 'index.ts');

export const typeDocConfig: Partial<TypeDocOptions> = {
    ...baseTypedocConfig,
    out: join(repoRoot, 'dist-docs'),
    entryPoints: [
        indexTsFile,
    ],
    excludeInternal: true,
    excludeReferences: true,

    blockTags: [
        /** Default tags in use. */
        '@category',
        '@default',
        '@example',
        '@param',
        '@returns',
        '@throws',
        '@see',

        /** Used by lit, and despite my attempts to exclude lit, this is still needed. */
        // cspell:ignore nocollapse
        '@nocollapse',
    ],
    exclude: [
        '**/node_modules/**',
        '**/packages/**/node_modules/**',
    ],
    externalPattern: [
        '**/node_modules/**',
        './src/lit-exports/*',
    ],
    logLevel: 'Verbose',
    intentionallyNotExported: [
        'InternalAsyncPropClass',
        '__class',
    ],
    defaultCategory: 'MISSING CATEGORY',
    categoryOrder: [
        'Element Definition',
        'Directives',
        'Async',
        'Test',
        'Util',
        'Internal',
    ],
};
