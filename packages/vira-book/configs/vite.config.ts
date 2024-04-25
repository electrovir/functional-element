import {join, resolve} from 'path';
import {defineConfig} from 'virmator/dist/compiled-base-configs/base-vite';

export default defineConfig({forGitHubPages: false}, (baseConfig, basePaths) => {
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
});
