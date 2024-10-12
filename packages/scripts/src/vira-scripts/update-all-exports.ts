import {extractErrorMessage} from '@augment-vir/common';
import {basename} from 'node:path';
import {
    NotUpToDateError,
    parseUpdateExportsArgs,
    UpdateExportsConfig,
} from './common/update-exports.js';
import {updateIconExports} from './update-icon-exports.js';
import {updateIndexExports} from './update-index-exports.js';
import {updateRootIndexExports} from './update-root-index-exports.js';

const updateExportsConfigs: UpdateExportsConfig[] = [
    updateIconExports,
    updateIndexExports,
    updateRootIndexExports,
];

async function main() {
    const args = parseUpdateExportsArgs();
    const didSucceed: boolean[] = await Promise.all(
        updateExportsConfigs.map(async (updateExportsConfig): Promise<boolean> => {
            try {
                await updateExportsConfig.executor(args);
                return true;
            } catch (caughtError) {
                if (caughtError instanceof NotUpToDateError) {
                    const errorMessage = extractErrorMessage(caughtError);
                    console.error(errorMessage);
                    return false;
                } else {
                    throw caughtError;
                }
            }
        }),
    );

    const someFailed = didSucceed.some((result) => !result);

    if (someFailed) {
        process.exit(1);
    }
}

if (process.argv.slice(-1)[0]?.endsWith(basename(import.meta.filename))) {
    main().catch((error: unknown) => {
        console.error(error);
        process.exit(1);
    });
}
