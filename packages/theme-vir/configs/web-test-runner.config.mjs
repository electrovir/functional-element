import {defineConfig} from '@virmator/test/configs/web-test-runner.config.base.mjs';
import {dirname} from 'path';
import {fileURLToPath, pathToFileURL} from 'url';

const baseConfig = defineConfig({
    coveragePercent: 0,
    packageRootDirPath: dirname(dirname(fileURLToPath(import.meta.url))),
    extraScreenshotOptions: {},
});

/** @type {import('@web/test-runner').TestRunnerConfig} */
const webTestRunnerConfig = {
    ...baseConfig,
    port: 8104,
};

export default webTestRunnerConfig;

/** Log the full config if this file file is run directly as a script, for debugging. */
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
    console.info(JSON.stringify(webTestRunnerConfig, null, 4));
}
