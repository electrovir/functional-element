// cspell:disable
/**
 * Code adapted from
 * https://github.com/bevacqua/fuzzysearch/blob/9873ea0546a47f5d96e037ff02b78b871c809d62/index.js
 *
 * That code has the following license:
 */

/**
 * The MIT License (MIT)
 *
 * Copyright © 2015 Nicolas Bevacqua
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and
 * associated documentation files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or
 * substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
 * NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
// cspell:enable

export function fuzzySearch({
    /** What you want to search for; the user search input. */
    searchQuery,
    /** What we're searching in. See if the searchQuery is found within this. */
    searchIn,
}: {
    searchQuery: string;
    searchIn: string;
}): boolean {
    const searchInLength = searchIn.length;
    const searchQueryLength = searchQuery.length;
    if (searchQueryLength > searchInLength) {
        return false;
    }
    if (searchQueryLength === searchInLength) {
        return searchQuery === searchIn;
    }

    const lowercaseSearchIn = searchIn.toLowerCase();
    const lowercaseSearchQuery = searchQuery.toLowerCase();

    // eslint-disable-next-line sonarjs/no-labels
    outer: for (let i = 0, j = 0; i < searchQueryLength; i++) {
        const charCode = lowercaseSearchQuery.codePointAt(i);
        while (j < searchInLength) {
            if (lowercaseSearchIn.codePointAt(j++) === charCode) {
                continue outer;
            }
        }
        return false;
    }
    return true;
}
