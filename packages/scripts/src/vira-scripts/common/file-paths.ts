import {readDirRecursive, toPosixPath} from '@augment-vir/node';
import {existsSync} from 'node:fs';
import {stat} from 'node:fs/promises';
import {join, relative} from 'node:path';

export function generateExportsFromFilePaths({
    filePaths,
    relativeDir,
}: {
    filePaths: ReadonlyArray<string>;
    relativeDir: string;
}): string {
    const exportLines = filePaths.map((filePath) => {
        const relativePath = relative(relativeDir, filePath).replace(/\.ts?$/, '');
        const posixPath = toPosixPath(relativePath);
        const exportPath = posixPath.startsWith('.') ? posixPath : `./${posixPath}`;

        return `export * from '${exportPath}';`;
    });

    return exportLines.join('\n');
}

const ignoredFileNameEndings = [
    '.test.ts',
    '.book.ts',
    '.test-helper.ts',
];

export async function getExportableTsFilePaths(dirPath: string): Promise<string[]> {
    const allFilePaths = (await readDirRecursive(dirPath)).map((relativePath) =>
        join(dirPath, relativePath),
    );

    const allNonIndexFilePaths = allFilePaths.filter((filePath) => {
        const isTsFile = filePath.endsWith('.ts');
        const hasEndingToIgnore = ignoredFileNameEndings.some((ignoredEnding) =>
            filePath.endsWith(ignoredEnding),
        );
        return isTsFile && !hasEndingToIgnore;
    });
    await verifyTsFilePaths(allNonIndexFilePaths);
    return allNonIndexFilePaths;
}

async function verifyTsFilePaths(filePaths: ReadonlyArray<string>): Promise<void> {
    await Promise.all(
        filePaths.map(async (filePath) => {
            if (!existsSync(filePath)) {
                throw new Error(`TS file '${filePath}' does not exist.`);
            }
            if (!(await stat(filePath)).isFile()) {
                throw new Error(`TS file '${filePath}' is not a file.`);
            }
        }),
    );
}
