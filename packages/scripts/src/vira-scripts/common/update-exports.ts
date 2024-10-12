import {log, logColors} from '@augment-vir/common';
import {existsSync} from 'node:fs';
import {readFile, writeFile} from 'node:fs/promises';
import {basename, relative} from 'node:path';
import {monoRepoRootDir} from '../../repo-paths.js';
import {generateAutomaticallyUpdatedByComment} from './automatically-updated.js';
import {formatCode} from './format.js';

export class NotUpToDateError extends Error {
    public override readonly name = 'NotUpToDateError';
}

export function parseUpdateExportsArgs() {
    const dryRun = process.argv.includes('--dry-run');
    const checkOnly = process.argv.includes('--check');

    return {
        dryRun,
        checkOnly,
    };
}

export type UpdateExportsArgs = {
    /**
     * Indicates that no file should be written, and logs the code to the console. This option takes
     * precedence over checkOnly.
     */
    dryRun?: boolean | undefined;
    /**
     * Checks if the current file contents matches the contents that would've been written. Use in
     * test pipelines.
     */
    checkOnly?: boolean | undefined;
};

export type UpdateExportsConfig = {
    executor: (inputs: UpdateExportsArgs) => Promise<void>;
};

export async function writeOrCheckGeneratedFile(
    fileToWriteTo: string,
    codeToWrite: string,
    args: UpdateExportsArgs,
    scriptName: string,
): Promise<void> {
    const codeWithComment =
        generateAutomaticallyUpdatedByComment(basename(scriptName)) + '\n\n' + codeToWrite;

    const formattedCode = await formatCode(codeWithComment, fileToWriteTo);
    const relativeWriteToFile = relative(monoRepoRootDir, fileToWriteTo);
    const currentOutputContents: string = existsSync(fileToWriteTo)
        ? (await readFile(fileToWriteTo)).toString()
        : '';
    const qualifier = args.checkOnly ? '' : ' already';
    if (formattedCode === currentOutputContents) {
        console.info(
            `${logColors.success}Up to date${qualifier}: '${relativeWriteToFile}'.${logColors.reset}`,
        );
        return;
    }

    if (args.dryRun) {
        console.info(
            `Would've written the following to '${relativeWriteToFile}':\n'${formattedCode}'`,
        );
    } else if (args.checkOnly) {
        throw new NotUpToDateError(
            `${logColors.error}${
                logColors.bold
            }'${relativeWriteToFile}' needs to be updated: run '${logColors.reset}${
                logColors.info
            }npx ts-node ${relative(monoRepoRootDir, scriptName)}${logColors.error}${
                logColors.bold
            }'${logColors.reset}`,
        );
    } else {
        await writeFile(fileToWriteTo, formattedCode);
        log.mutate(`Wrote to '${relativeWriteToFile}'.`);
    }
}

export async function updateExportsMain(updateExportsConfig: UpdateExportsConfig): Promise<void> {
    await updateExportsConfig.executor(parseUpdateExportsArgs());
}
