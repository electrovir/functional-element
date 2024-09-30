import {defineConfig} from '@virmator/frontend/configs/vite.config.base.ts';
import {join, resolve} from 'node:path';

export default defineConfig(
    {
        forGitHubPages: false,
        packageDirPath: resolve(import.meta.dirname, '..'),
    },
    (baseConfig, basePaths) => {
        return {
            ...baseConfig,
            base: '/element-vir/vira',
            build: {
                outDir: join(basePaths.cwd, 'dist-book'),
            },
            resolve: {
                alias: {
                    'element-vir': resolve('../element-vir/src/index.ts'),
                    'element-book': resolve('../element-book/src/index.ts'),
                    vira: resolve('../vira/src/index.ts'),
                },
            },
        };
    },
);
