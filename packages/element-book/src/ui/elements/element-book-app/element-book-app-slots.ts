/**
 * Slots to be used on an element-book app instance for inserting custom HTML into the app.
 *
 * @category Main
 */
export enum ElementBookSlotName {
    /**
     * Used to specify a footer for the main element example viewer. It always appears at the bottom
     * of the viewer's scroll area.
     */
    Footer = 'book-footer',
    /**
     * Used to specify a header above the navigation sidebar. This is a particularly good place for
     * branding.
     */
    NavHeader = 'book-nav-header',
}
