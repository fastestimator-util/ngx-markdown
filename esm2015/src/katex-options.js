/**
 * @fileoverview added by tsickle
 * Generated from: src/katex-options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable: no-redundant-jsdoc
export class KatexOptions {
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2F0ZXgtb3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXJrZG93bi8iLCJzb3VyY2VzIjpbInNyYy9rYXRleC1vcHRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE1BQU0sT0FBTyxZQUFZO0NBOEV4Qjs7Ozs7Ozs7OztJQXRFRyxtQ0FBc0I7Ozs7Ozs7Ozs7O0lBVXRCLG9DQUF1Qjs7Ozs7SUFJdkIsa0NBQW9COzs7Ozs7O0lBTXBCLDhCQUFhOzs7Ozs7Ozs7Ozs7O0lBWWIsd0NBQTJCOzs7Ozs7Ozs7O0lBUzNCLCtCQUFpQjs7Ozs7Ozs7OztJQVNqQixpQ0FBbUI7Ozs7Ozs7OztJQVFuQix3Q0FBNEI7Ozs7Ozs7Ozs7OztJQVc1Qiw4QkFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tcmVkdW5kYW50LWpzZG9jXG5leHBvcnQgY2xhc3MgS2F0ZXhPcHRpb25zIHtcbiAgICAvKipcbiAgICAgKiBJZiBgdHJ1ZWAsIG1hdGggd2lsbCBiZSByZW5kZXJlZCBpbiBkaXNwbGF5IG1vZGVcbiAgICAgKiAobWF0aCBpbiBkaXNwbGF5IHN0eWxlIGFuZCBjZW50ZXIgbWF0aCBvbiBwYWdlKVxuICAgICAqXG4gICAgICogSWYgYGZhbHNlYCwgbWF0aCB3aWxsIGJlIHJlbmRlcmVkIGluIGlubGluZSBtb2RlXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBkaXNwbGF5TW9kZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCBLYVRlWCB3aWxsIHRocm93IGEgYFBhcnNlRXJyb3JgIHdoZW5cbiAgICAgKiBpdCBlbmNvdW50ZXJzIGFuIHVuc3VwcG9ydGVkIGNvbW1hbmQgb3IgaW52YWxpZCBMYVRleFxuICAgICAqXG4gICAgICogSWYgYGZhbHNlYCwgS2FUZVggd2lsbCByZW5kZXIgdW5zdXBwb3J0ZWQgY29tbWFuZHMgYXNcbiAgICAgKiB0ZXh0LCBhbmQgcmVuZGVyIGludmFsaWQgTGFUZVggYXMgaXRzIHNvdXJjZSBjb2RlIHdpdGhcbiAgICAgKiBob3ZlciB0ZXh0IGdpdmluZyB0aGUgZXJyb3IsIGluIGNvbG9yIGdpdmVuIGJ5IGVycm9yQ29sb3JcbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG4gICAgdGhyb3dPbkVycm9yPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBBIENvbG9yIHN0cmluZyBnaXZlbiBpbiBmb3JtYXQgYCNYWFhgIG9yIGAjWFhYWFhYYFxuICAgICAqL1xuICAgIGVycm9yQ29sb3I/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQSBjb2xsZWN0aW9uIG9mIGN1c3RvbSBtYWNyb3MuXG4gICAgICpcbiAgICAgKiBTZWUgYHNyYy9tYWNyb3MuanNgIGZvciBpdHMgdXNhZ2VcbiAgICAgKi9cbiAgICBtYWNyb3M/OiBhbnk7XG4gICAgLyoqXG4gICAgICogSWYgYHRydWVgLCBgXFxjb2xvcmAgd2lsbCB3b3JrIGxpa2UgTGFUZVgncyBgXFx0ZXh0Y29sb3JgXG4gICAgICogYW5kIHRha2VzIDIgYXJndW1lbnRzXG4gICAgICpcbiAgICAgKiBJZiBgZmFsc2VgLCBgXFxjb2xvcmAgd2lsbCB3b3JrIGxpa2UgTGFUZVgncyBgXFxjb2xvcmBcbiAgICAgKiBhbmQgdGFrZXMgMSBhcmd1bWVudFxuICAgICAqXG4gICAgICogSW4gYm90aCBjYXNlcywgYFxcdGV4dGNvbG9yYCB3b3JrcyBhcyBpbiBMYVRlWFxuICAgICAqXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cbiAgICBjb2xvcklzVGV4dENvbG9yPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBBbGwgdXNlci1zcGVjaWZpZWQgc2l6ZXMgd2lsbCBiZSBjYXBlZCB0byBgbWF4U2l6ZWAgZW1zXG4gICAgICpcbiAgICAgKiBJZiBzZXQgdG8gSW5maW5pdHksIHVzZXJzIGNhbiBtYWtlIGVsZW1lbnRzIGFuZCBzcGFjZVxuICAgICAqIGFyYml0cmFyaWx5IGxhcmdlXG4gICAgICpcbiAgICAgKiBAZGVmYXVsdCBJbmZpbml0eVxuICAgICAqL1xuICAgIG1heFNpemU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogTGltaXQgdGhlIG51bWJlciBvZiBtYWNybyBleHBhbnNpb25zIHRvIHNwZWNpZmllZCBudW1iZXJcbiAgICAgKlxuICAgICAqIElmIHNldCB0byBgSW5maW5pdHlgLCBtYXJjbyBleHBhbmRlciB3aWxsIHRyeSB0byBmdWxseSBleHBhbmRcbiAgICAgKiBhcyBpbiBMYVRleFxuICAgICAqXG4gICAgICogQGRlZmF1bHQgMTAwMFxuICAgICAqL1xuICAgIG1heEV4cGFuZD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBBbGxvd2VkIHByb3RvY29scyBpbiBgXFxocmVmYFxuICAgICAqXG4gICAgICogVXNlIGBfcmVsYXRpdmVgIHRvIGFsbG93IHJlbGF0aXZlIHVybHNcbiAgICAgKlxuICAgICAqIFVzZSBgKmAgdG8gYWxsb3cgYWxsIHByb3RvY29sc1xuICAgICAqL1xuICAgIGFsbG93ZWRQcm90b2NvbHM/OiBzdHJpbmdbXTtcbiAgICAvKipcbiAgICAgKiBJZiBgZmFsc2VgIG9yIGBcImlnbm9yZVwiYCwgYWxsb3cgZmVhdHVyZXMgdGhhdCBtYWtlXG4gICAgICogd3JpdGluZyBpbiBMYVRleCBjb252ZW5pZW50IGJ1dCBub3Qgc3VwcG9ydGVkIGJ5IExhVGV4XG4gICAgICpcbiAgICAgKiBJZiBgdHJ1ZWAgb3IgYFwiZXJyb3JcImAsIHRocm93IGFuIGVycm9yIGZvciBzdWNoIHRyYW5zZ3Jlc3Npb25zXG4gICAgICpcbiAgICAgKiBJZiBgXCJ3YXJuXCJgLCB3YXJuIGFib3V0IGJlaGF2aW9yIHZpYSBgY29uc29sZS53YXJuYFxuICAgICAqXG4gICAgICogQGRlZmF1bHQgXCJ3YXJuXCJcbiAgICAgKi9cbiAgICBzdHJpY3Q/OiBib29sZWFuIHwgc3RyaW5nIHwgRnVuY3Rpb247XG59XG4iXX0=