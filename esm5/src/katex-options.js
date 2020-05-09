/**
 * @fileoverview added by tsickle
 * Generated from: src/katex-options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable: no-redundant-jsdoc
var 
// tslint:disable: no-redundant-jsdoc
KatexOptions = /** @class */ (function () {
    function KatexOptions() {
    }
    return KatexOptions;
}());
// tslint:disable: no-redundant-jsdoc
export { KatexOptions };
if (false) {
    /**
     * If `true`, math will be rendered in display mode
     * (math in display style and center math on page)
     *
     * If `false`, math will be rendered in inline mode
     * \@default false
     * @type {?}
     */
    KatexOptions.prototype.displayMode;
    /**
     * If `true`, KaTeX will throw a `ParseError` when
     * it encounters an unsupported command or invalid LaTex
     *
     * If `false`, KaTeX will render unsupported commands as
     * text, and render invalid LaTeX as its source code with
     * hover text giving the error, in color given by errorColor
     * \@default true
     * @type {?}
     */
    KatexOptions.prototype.throwOnError;
    /**
     * A Color string given in format `#XXX` or `#XXXXXX`
     * @type {?}
     */
    KatexOptions.prototype.errorColor;
    /**
     * A collection of custom macros.
     *
     * See `src/macros.js` for its usage
     * @type {?}
     */
    KatexOptions.prototype.macros;
    /**
     * If `true`, `\color` will work like LaTeX's `\textcolor`
     * and takes 2 arguments
     *
     * If `false`, `\color` will work like LaTeX's `\color`
     * and takes 1 argument
     *
     * In both cases, `\textcolor` works as in LaTeX
     *
     * \@default false
     * @type {?}
     */
    KatexOptions.prototype.colorIsTextColor;
    /**
     * All user-specified sizes will be caped to `maxSize` ems
     *
     * If set to Infinity, users can make elements and space
     * arbitrarily large
     *
     * \@default Infinity
     * @type {?}
     */
    KatexOptions.prototype.maxSize;
    /**
     * Limit the number of macro expansions to specified number
     *
     * If set to `Infinity`, marco expander will try to fully expand
     * as in LaTex
     *
     * \@default 1000
     * @type {?}
     */
    KatexOptions.prototype.maxExpand;
    /**
     * Allowed protocols in `\href`
     *
     * Use `_relative` to allow relative urls
     *
     * Use `*` to allow all protocols
     * @type {?}
     */
    KatexOptions.prototype.allowedProtocols;
    /**
     * If `false` or `"ignore"`, allow features that make
     * writing in LaTex convenient but not supported by LaTex
     *
     * If `true` or `"error"`, throw an error for such transgressions
     *
     * If `"warn"`, warn about behavior via `console.warn`
     *
     * \@default "warn"
     * @type {?}
     */
    KatexOptions.prototype.strict;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2F0ZXgtb3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXJrZG93bi8iLCJzb3VyY2VzIjpbInNyYy9rYXRleC1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7SUFBQTtJQThFQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBOUVELElBOEVDOzs7Ozs7Ozs7Ozs7SUF0RUcsbUNBQXNCOzs7Ozs7Ozs7OztJQVV0QixvQ0FBdUI7Ozs7O0lBSXZCLGtDQUFvQjs7Ozs7OztJQU1wQiw4QkFBYTs7Ozs7Ozs7Ozs7OztJQVliLHdDQUEyQjs7Ozs7Ozs7OztJQVMzQiwrQkFBaUI7Ozs7Ozs7Ozs7SUFTakIsaUNBQW1COzs7Ozs7Ozs7SUFRbkIsd0NBQTRCOzs7Ozs7Ozs7Ozs7SUFXNUIsOEJBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6IG5vLXJlZHVuZGFudC1qc2RvY1xuZXhwb3J0IGNsYXNzIEthdGV4T3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCBtYXRoIHdpbGwgYmUgcmVuZGVyZWQgaW4gZGlzcGxheSBtb2RlXG4gICAgICogKG1hdGggaW4gZGlzcGxheSBzdHlsZSBhbmQgY2VudGVyIG1hdGggb24gcGFnZSlcbiAgICAgKlxuICAgICAqIElmIGBmYWxzZWAsIG1hdGggd2lsbCBiZSByZW5kZXJlZCBpbiBpbmxpbmUgbW9kZVxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZGlzcGxheU1vZGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgS2FUZVggd2lsbCB0aHJvdyBhIGBQYXJzZUVycm9yYCB3aGVuXG4gICAgICogaXQgZW5jb3VudGVycyBhbiB1bnN1cHBvcnRlZCBjb21tYW5kIG9yIGludmFsaWQgTGFUZXhcbiAgICAgKlxuICAgICAqIElmIGBmYWxzZWAsIEthVGVYIHdpbGwgcmVuZGVyIHVuc3VwcG9ydGVkIGNvbW1hbmRzIGFzXG4gICAgICogdGV4dCwgYW5kIHJlbmRlciBpbnZhbGlkIExhVGVYIGFzIGl0cyBzb3VyY2UgY29kZSB3aXRoXG4gICAgICogaG92ZXIgdGV4dCBnaXZpbmcgdGhlIGVycm9yLCBpbiBjb2xvciBnaXZlbiBieSBlcnJvckNvbG9yXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuICAgIHRocm93T25FcnJvcj86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQSBDb2xvciBzdHJpbmcgZ2l2ZW4gaW4gZm9ybWF0IGAjWFhYYCBvciBgI1hYWFhYWGBcbiAgICAgKi9cbiAgICBlcnJvckNvbG9yPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEEgY29sbGVjdGlvbiBvZiBjdXN0b20gbWFjcm9zLlxuICAgICAqXG4gICAgICogU2VlIGBzcmMvbWFjcm9zLmpzYCBmb3IgaXRzIHVzYWdlXG4gICAgICovXG4gICAgbWFjcm9zPzogYW55O1xuICAgIC8qKlxuICAgICAqIElmIGB0cnVlYCwgYFxcY29sb3JgIHdpbGwgd29yayBsaWtlIExhVGVYJ3MgYFxcdGV4dGNvbG9yYFxuICAgICAqIGFuZCB0YWtlcyAyIGFyZ3VtZW50c1xuICAgICAqXG4gICAgICogSWYgYGZhbHNlYCwgYFxcY29sb3JgIHdpbGwgd29yayBsaWtlIExhVGVYJ3MgYFxcY29sb3JgXG4gICAgICogYW5kIHRha2VzIDEgYXJndW1lbnRcbiAgICAgKlxuICAgICAqIEluIGJvdGggY2FzZXMsIGBcXHRleHRjb2xvcmAgd29ya3MgYXMgaW4gTGFUZVhcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgY29sb3JJc1RleHRDb2xvcj86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQWxsIHVzZXItc3BlY2lmaWVkIHNpemVzIHdpbGwgYmUgY2FwZWQgdG8gYG1heFNpemVgIGVtc1xuICAgICAqXG4gICAgICogSWYgc2V0IHRvIEluZmluaXR5LCB1c2VycyBjYW4gbWFrZSBlbGVtZW50cyBhbmQgc3BhY2VcbiAgICAgKiBhcmJpdHJhcmlseSBsYXJnZVxuICAgICAqXG4gICAgICogQGRlZmF1bHQgSW5maW5pdHlcbiAgICAgKi9cbiAgICBtYXhTaXplPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIExpbWl0IHRoZSBudW1iZXIgb2YgbWFjcm8gZXhwYW5zaW9ucyB0byBzcGVjaWZpZWQgbnVtYmVyXG4gICAgICpcbiAgICAgKiBJZiBzZXQgdG8gYEluZmluaXR5YCwgbWFyY28gZXhwYW5kZXIgd2lsbCB0cnkgdG8gZnVsbHkgZXhwYW5kXG4gICAgICogYXMgaW4gTGFUZXhcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IDEwMDBcbiAgICAgKi9cbiAgICBtYXhFeHBhbmQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQWxsb3dlZCBwcm90b2NvbHMgaW4gYFxcaHJlZmBcbiAgICAgKlxuICAgICAqIFVzZSBgX3JlbGF0aXZlYCB0byBhbGxvdyByZWxhdGl2ZSB1cmxzXG4gICAgICpcbiAgICAgKiBVc2UgYCpgIHRvIGFsbG93IGFsbCBwcm90b2NvbHNcbiAgICAgKi9cbiAgICBhbGxvd2VkUHJvdG9jb2xzPzogc3RyaW5nW107XG4gICAgLyoqXG4gICAgICogSWYgYGZhbHNlYCBvciBgXCJpZ25vcmVcImAsIGFsbG93IGZlYXR1cmVzIHRoYXQgbWFrZVxuICAgICAqIHdyaXRpbmcgaW4gTGFUZXggY29udmVuaWVudCBidXQgbm90IHN1cHBvcnRlZCBieSBMYVRleFxuICAgICAqXG4gICAgICogSWYgYHRydWVgIG9yIGBcImVycm9yXCJgLCB0aHJvdyBhbiBlcnJvciBmb3Igc3VjaCB0cmFuc2dyZXNzaW9uc1xuICAgICAqXG4gICAgICogSWYgYFwid2FyblwiYCwgd2FybiBhYm91dCBiZWhhdmlvciB2aWEgYGNvbnNvbGUud2FybmBcbiAgICAgKlxuICAgICAqIEBkZWZhdWx0IFwid2FyblwiXG4gICAgICovXG4gICAgc3RyaWN0PzogYm9vbGVhbiB8IHN0cmluZyB8IEZ1bmN0aW9uO1xufVxuIl19