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
    excludePrivate: true,
    excludeInternal: true,
    excludeExternals: true,
    intentionallyNotExported: [
        '_AsyncPropClass',
        '__class',
    ],
    defaultCategory: 'MISSING CATEGORY',
    categoryOrder: [
        'Main',
        'Internal',
    ],
};
