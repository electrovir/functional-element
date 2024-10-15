import {assert, waitUntil} from '@augment-vir/assert';
import {describe, it, testWeb} from '@augment-vir/test';
import {queryThroughShadow} from '@augment-vir/web';
import {html} from 'element-vir';
import {defineBookPage} from '../../../data/book-entry/book-page/define-book-page.js';
import {BookError} from '../common/book-error.element.js';
import {ElementBookApp} from './element-book-app.element.js';
import {ElementBookConfig} from './element-book-config.js';

describe(ElementBookApp.tagName, () => {
    async function setupPagesTest(pages: ElementBookConfig['pages']) {
        const elementBookAppInstance = await testWeb.render(html`
            <${ElementBookApp.assign({
                pages,
            })}></${ElementBookApp}>
        `);

        assert.instanceOf(elementBookAppInstance, ElementBookApp);

        return elementBookAppInstance;
    }

    async function getBookErrorMessage(
        elementBookAppInstance: (typeof ElementBookApp)['instanceType'],
    ): Promise<string> {
        const errorWrapper = await waitUntil.isTruthy(
            () => {
                try {
                    const errorWrapper = queryThroughShadow(
                        elementBookAppInstance,
                        BookError.tagName,
                        {
                            all: false,
                        },
                    );
                    assert.instanceOf(errorWrapper, BookError);
                    return errorWrapper;
                } catch {
                    return undefined;
                }
            },
            {
                interval: {milliseconds: 100},
                timeout: {seconds: 10},
            },
            `Failed to find '${BookError.tagName}'`,
        );

        return await waitUntil.isTruthy(
            () => errorWrapper.shadowRoot.textContent?.trim(),
            undefined,
            'never got an error message',
        );
    }

    it('should render error message when there are duplicate page names', async () => {
        const elementBookAppInstance = await setupPagesTest([
            defineBookPage({
                parent: undefined,
                title: 'duplicate title',
            }),
            defineBookPage({
                parent: undefined,
                title: 'duplicate title',
            }),
        ]);
        assert.isIn(
            "Cannot create duplicate 'duplicate-title'",
            await getBookErrorMessage(elementBookAppInstance),
        );
    });

    it('should render error message when there are duplicate examples', async () => {
        const examplePage = defineBookPage({
            parent: undefined,
            title: 'title',
            defineExamples({defineExample}) {
                defineExample({
                    title: 'duplicate example',
                    render() {
                        return '';
                    },
                });
                defineExample({
                    title: 'duplicate example',
                    render() {
                        return '';
                    },
                });
            },
        });

        const elementBookAppInstance = await setupPagesTest([
            examplePage,
        ]);

        assert.isIn(
            "Example title 'duplicate example' in page 'title' is already taken.",
            await getBookErrorMessage(elementBookAppInstance),
        );
    });

    it('should render error message when there are empty page titles', async () => {
        const elementBookAppInstance = await setupPagesTest([
            defineBookPage({
                parent: undefined,
                title: '',
            }),
        ]);

        assert.isIn(
            'Cannot define an element-book page with an empty title.',
            await getBookErrorMessage(elementBookAppInstance),
        );
    });
});
