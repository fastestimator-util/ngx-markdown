/**
 * @fileoverview added by tsickle
 * Generated from: src/marked-options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class MarkedOptions {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2VkLW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWFya2Rvd24vIiwic291cmNlcyI6WyJzcmMvbWFya2VkLW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLE9BQU8sYUFBYTtDQXVGekI7Ozs7OztJQW5GQyxnQ0FBaUI7Ozs7O0lBS2pCLCtCQUFpQjs7Ozs7SUFLakIsNEJBQWM7Ozs7O0lBS2Qsa0NBQW9COzs7OztJQUtwQixxQ0FBc0I7Ozs7O0lBS3RCLG1DQUFvQjs7Ozs7SUFLcEIsK0JBQWlCOzs7OztJQUtqQixpQ0FBbUI7Ozs7Ozs7SUFPbkIsaUNBQTBCOzs7OztJQUsxQixpQ0FBbUI7Ozs7O0lBS25CLCtCQUFpQjs7Ozs7SUFLakIsbUNBQXFCOzs7OztJQUtyQixvQ0FBc0I7Ozs7O0lBS3RCLCtCQUFpQjs7Ozs7SUFLakIsOEJBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFya2VkUmVuZGVyZXIgfSBmcm9tICcuL21hcmtlZC1yZW5kZXJlcic7XG5cbmV4cG9ydCBjbGFzcyBNYXJrZWRPcHRpb25zIHtcbiAgLyoqXG4gICAqIEEgcHJlZml4IFVSTCBmb3IgYW55IHJlbGF0aXZlIGxpbmsuXG4gICAqL1xuICBiYXNlVXJsPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFbmFibGUgR0ZNIGxpbmUgYnJlYWtzLiBUaGlzIG9wdGlvbiByZXF1aXJlcyB0aGUgZ2ZtIG9wdGlvbiB0byBiZSB0cnVlLlxuICAgKi9cbiAgYnJlYWtzPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogRW5hYmxlIEdpdEh1YiBmbGF2b3JlZCBtYXJrZG93bi5cbiAgICovXG4gIGdmbT86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEluY2x1ZGUgYW4gaWQgYXR0cmlidXRlIHdoZW4gZW1pdHRpbmcgaGVhZGluZ3MuXG4gICAqL1xuICBoZWFkZXJJZHM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBTZXQgdGhlIHByZWZpeCBmb3IgaGVhZGVyIHRhZyBpZHMuXG4gICAqL1xuICBoZWFkZXJQcmVmaXg/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgcHJlZml4IGZvciBjb2RlIGJsb2NrIGNsYXNzZXMuXG4gICAqL1xuICBsYW5nUHJlZml4Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBNYW5nbGUgYXV0b2xpbmtzICg8ZW1haWxAZG9tYWluLmNvbT4pLlxuICAgKi9cbiAgbWFuZ2xlPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQ29uZm9ybSB0byBvYnNjdXJlIHBhcnRzIG9mIG1hcmtkb3duLnBsIGFzIG11Y2ggYXMgcG9zc2libGUuIERvbid0IGZpeCBhbnkgb2YgdGhlIG9yaWdpbmFsIG1hcmtkb3duIGJ1Z3Mgb3IgcG9vciBiZWhhdmlvci5cbiAgICovXG4gIHBlZGFudGljPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVHlwZTogb2JqZWN0IERlZmF1bHQ6IG5ldyBSZW5kZXJlcigpXG4gICAqXG4gICAqIEFuIG9iamVjdCBjb250YWluaW5nIGZ1bmN0aW9ucyB0byByZW5kZXIgdG9rZW5zIHRvIEhUTUwuXG4gICAqL1xuICByZW5kZXJlcj86IE1hcmtlZFJlbmRlcmVyO1xuXG4gIC8qKlxuICAgKiBTYW5pdGl6ZSB0aGUgb3V0cHV0LiBJZ25vcmUgYW55IEhUTUwgdGhhdCBoYXMgYmVlbiBpbnB1dC5cbiAgICovXG4gIHNhbml0aXplPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2hvd3MgYW4gSFRNTCBlcnJvciBtZXNzYWdlIHdoZW4gcmVuZGVyaW5nIGZhaWxzLlxuICAgKi9cbiAgc2lsZW50PzogYm9vbGVhbjtcblxuICAvKipcbiAgICogVXNlIHNtYXJ0ZXIgbGlzdCBiZWhhdmlvciB0aGFuIHRoZSBvcmlnaW5hbCBtYXJrZG93bi4gTWF5IGV2ZW50dWFsbHkgYmUgZGVmYXVsdCB3aXRoIHRoZSBvbGQgYmVoYXZpb3IgbW92ZWQgaW50byBwZWRhbnRpYy5cbiAgICovXG4gIHNtYXJ0TGlzdHM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBVc2UgXCJzbWFydFwiIHR5cG9ncmFoaWMgcHVuY3R1YXRpb24gZm9yIHRoaW5ncyBsaWtlIHF1b3RlcyBhbmQgZGFzaGVzLlxuICAgKi9cbiAgc21hcnR5cGFudHM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBFbmFibGUgR0ZNIHRhYmxlcy4gVGhpcyBvcHRpb24gcmVxdWlyZXMgdGhlIGdmbSBvcHRpb24gdG8gYmUgdHJ1ZS5cbiAgICovXG4gIHRhYmxlcz86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlIGNsb3Npbmcgc2xhc2ggZm9yIHNlbGYtY2xvc2luZyB0YWdzICg8YnIvPiBpbnN0ZWFkIG9mIDxicj4pXG4gICAqL1xuICB4aHRtbD86IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEEgZnVuY3Rpb24gdG8gaGlnaGxpZ2h0IGNvZGUgYmxvY2tzLiBUaGUgZnVuY3Rpb24gdGFrZXMgdGhyZWUgYXJndW1lbnRzOiBjb2RlLCBsYW5nLCBhbmQgY2FsbGJhY2suXG4gICAqL1xuICBoaWdobGlnaHQ/KGNvZGU6IHN0cmluZywgbGFuZzogc3RyaW5nLCBjYWxsYmFjaz86IChlcnJvcjogYW55IHwgdW5kZWZpbmVkLCBjb2RlOiBzdHJpbmcpID0+IHZvaWQpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9wdGlvbmFsbHkgc2FuaXRpemUgZm91bmQgSFRNTCB3aXRoIGEgc2FuaXRpemVyIGZ1bmN0aW9uLlxuICAgKi9cbiAgc2FuaXRpemVyPyhodG1sOiBzdHJpbmcpOiBzdHJpbmc7XG59XG4iXX0=