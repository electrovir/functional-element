/*
    This script will automatically populate the file at "iconIndexPath" (defined below) with imports
    for, exports from, and a big object containing all the icon files located in "svgsDir" defined
    below.
*/
import {kebabCaseToCamelCase} from '@augment-vir/common';
import {readDirRecursive, toPosixPath} from '@augment-vir/node';
import {basename, dirname, join, relative} from 'node:path';
import {viraSrcDir} from '../repo-paths.js';
import {
    UpdateExportsArgs,
    UpdateExportsConfig,
    updateExportsMain,
    writeOrCheckGeneratedFile,
} from './common/update-exports.js';

const iconsDir = join(viraSrcDir, 'icons', 'icon-svgs');
const iconIndexPath = join(viraSrcDir, 'icons', 'index.ts');

function generateIconNameFromFilePath(filePath: string): string {
    return `${kebabCaseToCamelCase(basename(filePath.replace(/\.icon\.ts$/, '')), {
        capitalizeFirstLetter: true,
    })}Icon`;
}

function generateTsImport(iconFilePath: string, iconName: string): string {
    const relativePath = relative(dirname(iconIndexPath), iconFilePath).replace(/\.ts$/, '');
    return `import {${iconName}} from './${toPosixPath(relativePath)}';`;
}

function generateIconImportsAndExports(iconPaths: ReadonlyArray<string>): string {
    type IconInfo = {
        iconName: string;
        importString: string;
    };
    const iconInfos: ReadonlyArray<IconInfo> = iconPaths
        .map((iconPath): IconInfo => {
            const iconName = generateIconNameFromFilePath(iconPath);

            return {
                iconName: iconName,
                importString: generateTsImport(iconPath, iconName),
            };
        })
        .sort();

    const {importsSet, iconNamesSet} = iconInfos.reduce(
        (accum, iconInfo) => {
            if (accum.importsSet.has(iconInfo.importString)) {
                throw new Error(`Duplicate icon import: '${iconInfo.importString}'`);
            }
            if (accum.iconNamesSet.has(iconInfo.iconName)) {
                throw new Error(`Duplicate icon name: '${iconInfo.iconName}'`);
            }

            accum.importsSet.add(iconInfo.importString);
            accum.iconNamesSet.add(iconInfo.iconName);

            return accum;
        },
        {
            importsSet: new Set<string>(),
            iconNamesSet: new Set<string>(),
        },
    );
    const imports = Array.from(importsSet);
    const iconNames = Array.from(iconNamesSet);

    const exports = imports.map((importLine) => {
        return importLine.replace(/^import .+ from '(.+)';$/, "export * from '$1';");
    });

    return `${imports.join('\n')}
        ${exports.join('\n')}
        export * from './icon-css-vars';
        export * from './icon-svg';
    
        export const allIconsByName = {
            ${iconNames.join(',\n')}
        } as const;`;
}

export const updateIconExports: UpdateExportsConfig = {
    executor: async (inputs: UpdateExportsArgs): Promise<void> => {
        const allIconPaths: string[] = (await readDirRecursive(iconsDir))
            .filter((relativePath) => relativePath.endsWith('.icon.ts'))
            .map((relativePath) => join(iconsDir, relativePath));

        await writeOrCheckGeneratedFile(
            iconIndexPath,
            generateIconImportsAndExports(allIconPaths),
            inputs,
            import.meta,
        );
    },
};

if (process.argv.slice(-1)[0]?.endsWith(basename(import.meta.filename))) {
    updateExportsMain(updateIconExports).catch((error: unknown) => {
        console.error(error);
        process.exit(1);
    });
}
