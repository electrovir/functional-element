import {NpmWorkspace, queryNpmWorkspace, readPackageJson} from '@augment-vir/node';
import {readFile, writeFile} from 'node:fs/promises';
import {join} from 'node:path';
import {monoRepoRootDir} from './repo-paths.js';

type FilteredNpmPackage = NpmWorkspace & {name: string};
type MonoRepoPackages = {
    private: Record<string, FilteredNpmPackage>;
    public: Record<string, FilteredNpmPackage>;
};

async function updateInternalDeps() {
    const rootVersion = (await readPackageJson(monoRepoRootDir)).version;
    if (!rootVersion) {
        throw new Error(`Found no root package version.`);
    }

    const workspaces = await queryNpmWorkspace(monoRepoRootDir);
    const npmPackages = workspaces.reduce(
        (accum, workspacePackage) => {
            if (!workspacePackage.name) {
                throw new Error(`Workspace has no name field.`);
            }

            if (workspacePackage.private) {
                accum.private[workspacePackage.name] = workspacePackage as FilteredNpmPackage;
            } else {
                accum.public[workspacePackage.name] = workspacePackage as FilteredNpmPackage;
            }
            return accum;
        },
        {public: {}, private: {}} as MonoRepoPackages,
    );

    await Promise.all(
        Object.values(npmPackages.public).map(async (publicPackage) => {
            if (!publicPackage.dependencies) {
                return;
            }

            const internalDepNames = Object.keys(publicPackage.dependencies).filter((depName) => {
                if (depName in npmPackages.private) {
                    throw new Error(
                        `Public package '${publicPackage.name}' cannot depend on private package '${depName}'.`,
                    );
                }

                return depName in npmPackages.public;
            });

            const packageJsonPath = join(publicPackage.path, 'package.json');

            const currentPackageJsonString = (await readFile(packageJsonPath)).toString();

            const finalPackageJsonString = internalDepNames.reduce(
                (jsonReplacement, internalDepName) => {
                    return jsonReplacement.replace(
                        new RegExp(`  "${internalDepName}": "[^"]+"(,)?`),
                        `  "${internalDepName}": "${rootVersion}"$1`,
                    );
                },
                currentPackageJsonString,
            );

            await writeFile(packageJsonPath, finalPackageJsonString);
        }),
    );
}

await updateInternalDeps();
