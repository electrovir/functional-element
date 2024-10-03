import {describe, itCases} from '@augment-vir/test';
import {defineBookPage} from './book-page/define-book-page';
import {listUrlBreadcrumbs, titleToUrlBreadcrumb} from './url-breadcrumbs';

describe(listUrlBreadcrumbs.name, () => {
    const exampleTopLevelPage = defineBookPage({
        title: 'top level title',
        parent: undefined,
    });
    const examplePage = defineBookPage({
        title: 'page title 1',
        parent: exampleTopLevelPage,
    });
    const examplePageNested = defineBookPage({
        title: 'page title 2',
        parent: examplePage,
    });

    itCases(listUrlBreadcrumbs, [
        {
            it: 'finds nothing when entry has no parent',
            inputs: [
                exampleTopLevelPage,
                false,
            ],
            expect: [],
        },
        {
            it: 'finds a parent',
            inputs: [
                examplePage,
                false,
            ],
            expect: [exampleTopLevelPage.title].map(titleToUrlBreadcrumb),
        },
        {
            it: 'finds multiple ancestors',
            inputs: [
                examplePageNested,
                false,
            ],
            expect: [
                exampleTopLevelPage.title,
                examplePage.title,
            ].map(titleToUrlBreadcrumb),
        },
        {
            it: 'includes title of given entry when includeSelf is true',
            inputs: [
                examplePageNested,
                true,
            ],
            expect: [
                exampleTopLevelPage.title,
                examplePage.title,
                examplePageNested.title,
            ].map(titleToUrlBreadcrumb),
        },
    ]);
});
