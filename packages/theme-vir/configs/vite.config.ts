import {resolve} from 'path';
import {defineConfig} from 'virmator/dist/compiled-base-configs/base-vite';

export default defineConfig(
    {
        forGitHubPages: true,
        packageDirPath: resolve(__dirname, '..'),
    },
    (baseConfig) => {
        return {
            ...baseConfig,
        };
    },
);
