import {isEnumValue} from '@augment-vir/common';
import {SpaRouter} from 'spa-router-vir';
import {BookMainRoute, defaultBookFullRoute, ValidBookPaths} from './book-routing';

export function createBookRouter(basePath: string | undefined) {
    return new SpaRouter<ValidBookPaths, undefined, undefined>({
        basePath: basePath,
        sanitizeRoute(rawRoute) {
            const sanitizedPaths = sanitizePaths(rawRoute.paths);

            return {
                paths: sanitizedPaths,
                hash: undefined,
                search: undefined,
            };
        },
    });
}

export type BookRouter = ReturnType<typeof createBookRouter>;

function sanitizePaths(paths: ReadonlyArray<string>): ValidBookPaths {
    const firstPath = paths[0];

    if (!isEnumValue(firstPath, BookMainRoute)) {
        return defaultBookFullRoute.paths;
    } else if (firstPath === BookMainRoute.Book) {
        return [
            BookMainRoute.Book,
            ...paths.slice(1),
        ];
    } else if (firstPath === BookMainRoute.Search) {
        if (!paths[1]) {
            return [
                BookMainRoute.Book,
                ...paths.slice(1),
            ];
        }

        return [
            firstPath,
            paths[1],
        ];
    } else {
        throw new Error(`Route path not handled for sanitization: ${paths.join('/')}`);
    }
}
