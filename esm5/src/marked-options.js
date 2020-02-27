/**
 * @fileoverview added by tsickle
 * Generated from: src/marked-options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MarkedOptions = /** @class */ (function () {
    function MarkedOptions() {
    }
    return MarkedOptions;
}());
export { MarkedOptions };
if (false) {
    /**
     * A prefix URL for any relative link.
     * @type {?}
     */
    MarkedOptions.prototype.baseUrl;
    /**
     * Enable GFM line breaks. This option requires the gfm option to be true.
     * @type {?}
     */
    MarkedOptions.prototype.breaks;
    /**
     * Enable GitHub flavored markdown.
     * @type {?}
     */
    MarkedOptions.prototype.gfm;
    /**
     * Include an id attribute when emitting headings.
     * @type {?}
     */
    MarkedOptions.prototype.headerIds;
    /**
     * Set the prefix for header tag ids.
     * @type {?}
     */
    MarkedOptions.prototype.headerPrefix;
    /**
     * Set the prefix for code block classes.
     * @type {?}
     */
    MarkedOptions.prototype.langPrefix;
    /**
     * Mangle autolinks (<email\@domain.com>).
     * @type {?}
     */
    MarkedOptions.prototype.mangle;
    /**
     * Conform to obscure parts of markdown.pl as much as possible. Don't fix any of the original markdown bugs or poor behavior.
     * @type {?}
     */
    MarkedOptions.prototype.pedantic;
    /**
     * Type: object Default: new Renderer()
     *
     * An object containing functions to render tokens to HTML.
     * @type {?}
     */
    MarkedOptions.prototype.renderer;
    /**
     * Sanitize the output. Ignore any HTML that has been input.
     * @type {?}
     */
    MarkedOptions.prototype.sanitize;
    /**
     * Shows an HTML error message when rendering fails.
     * @type {?}
     */
    MarkedOptions.prototype.silent;
    /**
     * Use smarter list behavior than the original markdown. May eventually be default with the old behavior moved into pedantic.
     * @type {?}
     */
    MarkedOptions.prototype.smartLists;
    /**
     * Use "smart" typograhic punctuation for things like quotes and dashes.
     * @type {?}
     */
    MarkedOptions.prototype.smartypants;
    /**
     * Enable GFM tables. This option requires the gfm option to be true.
     * @type {?}
     */
    MarkedOptions.prototype.tables;
    /**
     * Generate closing slash for self-closing tags (<br/> instead of <br>)
     * @type {?}
     */
    MarkedOptions.prototype.xhtml;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VkLW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWFya2Rvd24vIiwic291cmNlcyI6WyJzcmMvbWFya2VkLW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtJQUFBO0lBdUZBLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUMsQUF2RkQsSUF1RkM7Ozs7Ozs7SUFuRkMsZ0NBQWlCOzs7OztJQUtqQiwrQkFBaUI7Ozs7O0lBS2pCLDRCQUFjOzs7OztJQUtkLGtDQUFvQjs7Ozs7SUFLcEIscUNBQXNCOzs7OztJQUt0QixtQ0FBb0I7Ozs7O0lBS3BCLCtCQUFpQjs7Ozs7SUFLakIsaUNBQW1COzs7Ozs7O0lBT25CLGlDQUEwQjs7Ozs7SUFLMUIsaUNBQW1COzs7OztJQUtuQiwrQkFBaUI7Ozs7O0lBS2pCLG1DQUFxQjs7Ozs7SUFLckIsb0NBQXNCOzs7OztJQUt0QiwrQkFBaUI7Ozs7O0lBS2pCLDhCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcmtlZFJlbmRlcmVyIH0gZnJvbSAnLi9tYXJrZWQtcmVuZGVyZXInO1xuXG5leHBvcnQgY2xhc3MgTWFya2VkT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBBIHByZWZpeCBVUkwgZm9yIGFueSByZWxhdGl2ZSBsaW5rLlxuICAgKi9cbiAgYmFzZVVybD86IHN0cmluZztcblxuICAvKipcbiAgICogRW5hYmxlIEdGTSBsaW5lIGJyZWFrcy4gVGhpcyBvcHRpb24gcmVxdWlyZXMgdGhlIGdmbSBvcHRpb24gdG8gYmUgdHJ1ZS5cbiAgICovXG4gIGJyZWFrcz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEVuYWJsZSBHaXRIdWIgZmxhdm9yZWQgbWFya2Rvd24uXG4gICAqL1xuICBnZm0/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBJbmNsdWRlIGFuIGlkIGF0dHJpYnV0ZSB3aGVuIGVtaXR0aW5nIGhlYWRpbmdzLlxuICAgKi9cbiAgaGVhZGVySWRzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHRoZSBwcmVmaXggZm9yIGhlYWRlciB0YWcgaWRzLlxuICAgKi9cbiAgaGVhZGVyUHJlZml4Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHByZWZpeCBmb3IgY29kZSBibG9jayBjbGFzc2VzLlxuICAgKi9cbiAgbGFuZ1ByZWZpeD86IHN0cmluZztcblxuICAvKipcbiAgICogTWFuZ2xlIGF1dG9saW5rcyAoPGVtYWlsQGRvbWFpbi5jb20+KS5cbiAgICovXG4gIG1hbmdsZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIENvbmZvcm0gdG8gb2JzY3VyZSBwYXJ0cyBvZiBtYXJrZG93bi5wbCBhcyBtdWNoIGFzIHBvc3NpYmxlLiBEb24ndCBmaXggYW55IG9mIHRoZSBvcmlnaW5hbCBtYXJrZG93biBidWdzIG9yIHBvb3IgYmVoYXZpb3IuXG4gICAqL1xuICBwZWRhbnRpYz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFR5cGU6IG9iamVjdCBEZWZhdWx0OiBuZXcgUmVuZGVyZXIoKVxuICAgKlxuICAgKiBBbiBvYmplY3QgY29udGFpbmluZyBmdW5jdGlvbnMgdG8gcmVuZGVyIHRva2VucyB0byBIVE1MLlxuICAgKi9cbiAgcmVuZGVyZXI/OiBNYXJrZWRSZW5kZXJlcjtcblxuICAvKipcbiAgICogU2FuaXRpemUgdGhlIG91dHB1dC4gSWdub3JlIGFueSBIVE1MIHRoYXQgaGFzIGJlZW4gaW5wdXQuXG4gICAqL1xuICBzYW5pdGl6ZT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFNob3dzIGFuIEhUTUwgZXJyb3IgbWVzc2FnZSB3aGVuIHJlbmRlcmluZyBmYWlscy5cbiAgICovXG4gIHNpbGVudD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFVzZSBzbWFydGVyIGxpc3QgYmVoYXZpb3IgdGhhbiB0aGUgb3JpZ2luYWwgbWFya2Rvd24uIE1heSBldmVudHVhbGx5IGJlIGRlZmF1bHQgd2l0aCB0aGUgb2xkIGJlaGF2aW9yIG1vdmVkIGludG8gcGVkYW50aWMuXG4gICAqL1xuICBzbWFydExpc3RzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVXNlIFwic21hcnRcIiB0eXBvZ3JhaGljIHB1bmN0dWF0aW9uIGZvciB0aGluZ3MgbGlrZSBxdW90ZXMgYW5kIGRhc2hlcy5cbiAgICovXG4gIHNtYXJ0eXBhbnRzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW5hYmxlIEdGTSB0YWJsZXMuIFRoaXMgb3B0aW9uIHJlcXVpcmVzIHRoZSBnZm0gb3B0aW9uIHRvIGJlIHRydWUuXG4gICAqL1xuICB0YWJsZXM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBjbG9zaW5nIHNsYXNoIGZvciBzZWxmLWNsb3NpbmcgdGFncyAoPGJyLz4gaW5zdGVhZCBvZiA8YnI+KVxuICAgKi9cbiAgeGh0bWw/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIGZ1bmN0aW9uIHRvIGhpZ2hsaWdodCBjb2RlIGJsb2Nrcy4gVGhlIGZ1bmN0aW9uIHRha2VzIHRocmVlIGFyZ3VtZW50czogY29kZSwgbGFuZywgYW5kIGNhbGxiYWNrLlxuICAgKi9cbiAgaGlnaGxpZ2h0Pyhjb2RlOiBzdHJpbmcsIGxhbmc6IHN0cmluZywgY2FsbGJhY2s/OiAoZXJyb3I6IGFueSB8IHVuZGVmaW5lZCwgY29kZTogc3RyaW5nKSA9PiB2b2lkKTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPcHRpb25hbGx5IHNhbml0aXplIGZvdW5kIEhUTUwgd2l0aCBhIHNhbml0aXplciBmdW5jdGlvbi5cbiAgICovXG4gIHNhbml0aXplcj8oaHRtbDogc3RyaW5nKTogc3RyaW5nO1xufVxuIl19