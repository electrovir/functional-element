import {combineErrorMessages, combineErrors, ensureError, check.isTruthy} from '@augment-vir/common';
import {join} from 'path';
import {viraSrcDir} from '../repo-paths';
import {generateExportsFromFilePaths, getExportableTsFilePaths} from './common/file-paths';
import {
    NotUpToDateError,
    UpdateExportsArgs,
    UpdateExportsConfig,
    updateExportsMain,
    writeOrCheckGeneratedFile,
} from './common/update-exports';

const indexDirs: ReadonlyArray<{
    dirName: string;
    filter?: {require?: string};
    extraImportLines?: ReadonlyArray<string>;
}> = [
    {
        dirName: 'elements',
        filter: {
            require: '.element.ts',
        },
        extraImportLines: ["export * from './define-vira-element';"],
    },
    {
        dirName: 're-exports',
    },
    {
        dirName: 'styles',
    },
];

export const updateIndexExports: UpdateExportsConfig = {
    executor: async (args: UpdateExportsArgs): Promise<void> => {
        const results = await Promise.allSettled(
            indexDirs.map(async (dirDetails) => {
                const dirPath = join(viraSrcDir, dirDetails.dirName);
                const indexFilePath = join(dirPath, 'index.ts');

                const allNonIndexFilePaths = (await getExportableTsFilePaths(dirPath)).filter(
                    (filePath) => {
                        return !filePath.endsWith('index.ts');
                    },
                );
                const filteredFilePaths = dirDetails.filter
                    ? allNonIndexFilePaths.filter((filePath) => {
                          if (dirDetails.filter?.require) {
                              return filePath.endsWith(dirDetails.filter?.require);
                          }

                          return true;
                      })
                    : allNonIndexFilePaths;

                const exportLines = [
                    dirDetails.extraImportLines || [],
                    generateExportsFromFilePaths({
                        filePaths: filteredFilePaths,
                        relativeDir: dirPath,
                    }),
                ]
                    .flat()
                    .filter(check.isTruthy);

                await writeOrCheckGeneratedFile(
                    indexFilePath,
                    exportLines.join('\n'),
                    args,
                    __filename,
                );
            }),
        );

        const errors = results.reduce(
            (accum, result) => {
                if (result.status !== 'rejected') {
                    // nothing to do
                    return accum;
                }

                if (result.reason instanceof NotUpToDateError) {
                    accum.notUpToDateErrors.push(result.reason);
                    return accum;
                } else {
                    accum.otherErrors.push(ensureError(result.reason));
                    return accum;
                }
            },
            {
                notUpToDateErrors: [] as NotUpToDateError[],
                otherErrors: [] as Error[],
            },
        );

        if (errors.otherErrors.length) {
            throw combineErrors(errors.otherErrors);
        }

        if (errors.notUpToDateErrors.length) {
            throw new NotUpToDateError(combineErrorMessages(errors.notUpToDateErrors));
        }
    },
};

if (require.main === module) {
    updateExportsMain(updateIndexExports).catch((error) => {
        console.error(error);
        process.exit(1);
    });
}
