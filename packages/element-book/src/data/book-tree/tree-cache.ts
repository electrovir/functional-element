import {getOrSetFromMap} from '@augment-vir/common';
import {BookEntry} from '../book-entry/book-entry.js';
import {BookTree} from './book-tree-node.js';

const treeCache = new Map<ReadonlyArray<BookEntry>, BookTree>();

export function getTreeFromCache(entries: ReadonlyArray<BookEntry>): BookTree | undefined {
    return treeCache.get(entries);
}

export function addTreeToCache(entries: ReadonlyArray<BookEntry>, tree: BookTree): void {
    getOrSetFromMap(treeCache, entries, () => tree);
}
