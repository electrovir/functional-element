import {basename, dirname, join} from 'node:path';
import {viraSrcDir} from '../repo-paths.js';
import {generateExportsFromFilePaths, getExportableTsFilePaths} from './common/file-paths.js';
import {
    UpdateExportsArgs,
    UpdateExportsConfig,
    updateExportsMain,
    writeOrCheckGeneratedFile,
} from './common/update-exports.js';

export const updateRootIndexExports: UpdateExportsConfig = {
    executor: async (args: UpdateExportsArgs): Promise<void> => {
        const rootIndexFilePath = join(viraSrcDir, 'index.ts');

        const allTsFilePaths = await getExportableTsFilePaths(viraSrcDir);
        const indexTsFilePaths = allTsFilePaths.filter((tsFilePath) => {
            if (tsFilePath === rootIndexFilePath) {
                return false;
            }

            return tsFilePath.endsWith('index.ts');
        });

        await writeOrCheckGeneratedFile(
            rootIndexFilePath,
            generateExportsFromFilePaths({
                filePaths: indexTsFilePaths.map((indexTsFile) => dirname(indexTsFile)),
                relativeDir: viraSrcDir,
            }),
            args,
            import.meta,
        );
    },
};

if (process.argv.slice(-1)[0]?.endsWith(basename(import.meta.filename))) {
    updateExportsMain(updateRootIndexExports).catch((error: unknown) => {
        console.error(error);
        process.exit(1);
    });
}
