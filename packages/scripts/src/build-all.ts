import {log} from '@augment-vir/common';
import {runShellCommand} from '@augment-vir/node';
import {cp, mkdir, rm, writeFile} from 'fs/promises';
import {join} from 'path';
import {packagesDir, rootDistDir} from './repo-paths';

type BuildPackageInfo = {
    /** Relative to the packages dir. */
    packagePath: string;
    /** Relative to the packagePath. */
    copyFrom: string;
    /** Relative to the top level dist dir. */
    copyTo: string;
};

const buildPackageInfos: ReadonlyArray<Readonly<BuildPackageInfo>> = [
    {
        packagePath: 'element-book',
        copyFrom: 'dist-docs',
        copyTo: 'element-book',
    },
    {
        packagePath: 'element-vir',
        copyFrom: 'dist-docs',
        copyTo: 'element-vir',
    },
    {
        packagePath: 'vira-book',
        copyFrom: 'dist-book',
        copyTo: 'vira',
    },
];

async function buildPackagePage(buildInfo: Readonly<BuildPackageInfo>): Promise<void> {
    const packagePath = join(packagesDir, buildInfo.packagePath);
    try {
        log.info(`Building ${packagePath}...`);
        await runShellCommand('npm run build:pages', {
            cwd: packagePath,
        });

        const copyFromDir = join(packagePath, buildInfo.copyFrom);
        const copyToDir = join(rootDistDir, buildInfo.copyTo);

        await rm(copyToDir, {recursive: true, force: true});
        await mkdir(copyToDir, {recursive: true});

        await cp(copyFromDir, copyToDir, {recursive: true});
        log.success(`Done building ${packagePath}`);
    } catch (error) {
        log.error(`Failed building ${packagePath}`);
        throw error;
    }
}

function buildTopLevelIndexFile() {
    return /* HTML */ `
        <!doctype html>
        <html>
            <head>
                <title>Element-Vir Packages</title>
                <style>
                    body {
                        font-family: sans-serif;
                    }
                </style>
            </head>
            <body>
                <ul>
                    ${buildPackageInfos
                        .map((buildInfo) => {
                            return /* HTML */ `
                                <li><a href="./${buildInfo.copyTo}">${buildInfo.copyTo}</a></li>
                            `;
                        })
                        .join('')}
                </ul>
            </body>
        </html>
    `;
}

async function buildPages() {
    await Promise.all(
        buildPackageInfos.map(async (buildInfo) => {
            await buildPackagePage(buildInfo);
        }),
    );
    await writeFile(join(rootDistDir, 'index.html'), buildTopLevelIndexFile());
}

buildPages();
