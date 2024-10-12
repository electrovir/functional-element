import {format as prettierFormat, Options as PrettierOptions} from 'prettier';
// @ts-expect-error: ignore this import cause it's not typed. We're typing it here!
// eslint-disable-next-line monorepo-cop/no-relative-import-outside-package
import * as importedRepoConfig from '../../../../../prettier.config.mjs';

const repoConfig: PrettierOptions = importedRepoConfig as PrettierOptions;

export async function formatCode(text: string, filePath: string): Promise<string> {
    return await prettierFormat(text, {
        ...repoConfig,
        filepath: filePath,
    });
}
