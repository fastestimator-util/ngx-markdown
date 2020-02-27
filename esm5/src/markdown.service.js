/**
 * @fileoverview added by tsickle
 * Generated from: src/markdown.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional, PLATFORM_ID, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as marked from 'marked';
import { map } from 'rxjs/operators';
import { MarkedOptions } from './marked-options';
import { MarkedRenderer } from './marked-renderer';
// tslint:disable:max-line-length
/** @type {?} */
export var errorKatexNotLoaded = '[ngx-markdown When using the [katex] attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information';
/** @type {?} */
export var errorSrcWithoutHttpClient = '[ngx-markdown] When using the [src] attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information';
// tslint:enable:max-line-length
var MarkdownService = /** @class */ (function () {
    function MarkdownService(platform, http, domSanitizer, options) {
        this.platform = platform;
        this.http = http;
        this.domSanitizer = domSanitizer;
        this.options = options;
    }
    Object.defineProperty(MarkdownService.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () { return this._options; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._options = Object.assign({}, { renderer: new MarkedRenderer() }, this._options, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownService.prototype, "renderer", {
        get: /**
         * @return {?}
         */
        function () { return this.options.renderer; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.options.renderer = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} markdown
     * @param {?=} decodeHtml
     * @param {?=} markedOptions
     * @return {?}
     */
    MarkdownService.prototype.compile = /**
     * @param {?} markdown
     * @param {?=} decodeHtml
     * @param {?=} markedOptions
     * @return {?}
     */
    function (markdown, decodeHtml, markedOptions) {
        if (decodeHtml === void 0) { decodeHtml = false; }
        if (markedOptions === void 0) { markedOptions = this.options; }
        /** @type {?} */
        var precompiled = this.trimIndentation(markdown);
        precompiled = decodeHtml ? this.decodeHtml(precompiled) : precompiled;
        /** @type {?} */
        var compiled = marked.parse(precompiled, markedOptions);
        return markedOptions.sanitize && !markedOptions.sanitizer
            ? this.domSanitizer.sanitize(SecurityContext.HTML, compiled)
            : compiled;
    };
    /**
     * @param {?} src
     * @return {?}
     */
    MarkdownService.prototype.getSource = /**
     * @param {?} src
     * @return {?}
     */
    function (src) {
        var _this = this;
        if (!this.http) {
            throw new Error(errorSrcWithoutHttpClient);
        }
        return this.http
            .get(src, { responseType: 'text' })
            .pipe(map((/**
         * @param {?} markdown
         * @return {?}
         */
        function (markdown) { return _this.handleExtension(src, markdown); })));
    };
    /**
     * @param {?=} element
     * @return {?}
     */
    MarkdownService.prototype.highlight = /**
     * @param {?=} element
     * @return {?}
     */
    function (element) {
        if (isPlatformBrowser(this.platform) && typeof Prism !== 'undefined') {
            if (!element) {
                element = document;
            }
            /** @type {?} */
            var noLanguageElements = element.querySelectorAll('pre code:not([class*="language-"])');
            Array.prototype.forEach.call(noLanguageElements, (/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.classList.add('language-none'); }));
            Prism.highlightAllUnder(element);
        }
    };
    /**
     * @param {?} html
     * @param {?=} options
     * @return {?}
     */
    MarkdownService.prototype.renderKatex = /**
     * @param {?} html
     * @param {?=} options
     * @return {?}
     */
    function (html, options) {
        if (typeof katex === 'undefined' || typeof katex.renderToString === 'undefined') {
            throw new Error(errorKatexNotLoaded);
        }
        return html.replace(/\$([^$]+?)\$/gm, (/**
         * @param {?} _
         * @param {?} tex
         * @return {?}
         */
        function (_, tex) { return katex.renderToString(tex, options); }));
    };
    /**
     * @private
     * @param {?} html
     * @return {?}
     */
    MarkdownService.prototype.decodeHtml = /**
     * @private
     * @param {?} html
     * @return {?}
     */
    function (html) {
        if (isPlatformBrowser(this.platform)) {
            /** @type {?} */
            var textarea = document.createElement('textarea');
            textarea.innerHTML = html;
            return textarea.value;
        }
        return html;
    };
    /**
     * @private
     * @param {?} src
     * @param {?} markdown
     * @return {?}
     */
    MarkdownService.prototype.handleExtension = /**
     * @private
     * @param {?} src
     * @param {?} markdown
     * @return {?}
     */
    function (src, markdown) {
        /** @type {?} */
        var extension = src
            ? src.split('?')[0].split('.').splice(-1).join()
            : null;
        return extension !== 'md'
            ? '```' + extension + '\n' + markdown + '\n```'
            : markdown;
    };
    /**
     * @private
     * @param {?} markdown
     * @return {?}
     */
    MarkdownService.prototype.trimIndentation = /**
     * @private
     * @param {?} markdown
     * @return {?}
     */
    function (markdown) {
        if (!markdown) {
            return '';
        }
        /** @type {?} */
        var indentStart;
        return markdown
            .split('\n')
            .map((/**
         * @param {?} line
         * @return {?}
         */
        function (line) {
            /** @type {?} */
            var lineIdentStart = indentStart;
            if (line.length > 0) {
                lineIdentStart = isNaN(lineIdentStart)
                    ? line.search(/\S|$/)
                    : Math.min(line.search(/\S|$/), lineIdentStart);
            }
            if (isNaN(indentStart)) {
                indentStart = lineIdentStart;
            }
            return !!lineIdentStart
                ? line.substring(lineIdentStart)
                : line;
        })).join('\n');
    };
    MarkdownService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MarkdownService.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: HttpClient, decorators: [{ type: Optional }] },
        { type: DomSanitizer },
        { type: MarkedOptions }
    ]; };
    return MarkdownService;
}());
export { MarkdownService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MarkdownService.prototype._options;
    /**
     * @type {?}
     * @private
     */
    MarkdownService.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    MarkdownService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    MarkdownService.prototype.domSanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXJrZG93bi8iLCJzb3VyY2VzIjpbInNyYy9tYXJrZG93bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUVqQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBV25ELE1BQU0sS0FBTyxtQkFBbUIsR0FBRyxvSkFBb0o7O0FBQ3ZMLE1BQU0sS0FBTyx5QkFBeUIsR0FBRywySkFBMko7O0FBR3BNO0lBa0JFLHlCQUMrQixRQUFnQixFQUN6QixJQUFnQixFQUM1QixZQUEwQixFQUNsQyxPQUFzQjtRQUhPLGFBQVEsR0FBUixRQUFRLENBQVE7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUM1QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUdsQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBckJELHNCQUFJLG9DQUFPOzs7O1FBQVgsY0FBK0IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzs7Ozs7UUFDdEQsVUFBWSxLQUFvQjtZQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FB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SUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7b0JBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDbkQ7WUFDRCxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDdEIsV0FBVyxHQUFHLGNBQWMsQ0FBQzthQUM5QjtZQUNELE9BQU8sQ0FBQyxDQUFDLGNBQWM7Z0JBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztnQkFDaEMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNYLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQixDQUFDOztnQkF0R0YsVUFBVTs7OztnQkFtQmdDLE1BQU0sdUJBQTVDLE1BQU0sU0FBQyxXQUFXO2dCQTNDZCxVQUFVLHVCQTRDZCxRQUFRO2dCQTFDSixZQUFZO2dCQU1aLGFBQWE7O0lBdUh0QixzQkFBQztDQUFBLEFBdkdELElBdUdDO1NBdEdZLGVBQWU7Ozs7OztJQUUxQixtQ0FBZ0M7Ozs7O0lBZ0I5QixtQ0FBNkM7Ozs7O0lBQzdDLCtCQUFvQzs7Ozs7SUFDcEMsdUNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwsIFBMQVRGT1JNX0lELCBTZWN1cml0eUNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0ICogYXMgbWFya2VkIGZyb20gJ21hcmtlZCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEthdGV4T3B0aW9ucyB9IGZyb20gJy4va2F0ZXgtb3B0aW9ucyc7XG5pbXBvcnQgeyBNYXJrZWRPcHRpb25zIH0gZnJvbSAnLi9tYXJrZWQtb3B0aW9ucyc7XG5pbXBvcnQgeyBNYXJrZWRSZW5kZXJlciB9IGZyb20gJy4vbWFya2VkLXJlbmRlcmVyJztcblxuZGVjbGFyZSB2YXIga2F0ZXg6IHtcbiAgcmVuZGVyVG9TdHJpbmcodGV4OiBzdHJpbmcsIG9wdGlvbnM/OiBLYXRleE9wdGlvbnMpOiBzdHJpbmc7XG59O1xuXG5kZWNsYXJlIHZhciBQcmlzbToge1xuICBoaWdobGlnaHRBbGxVbmRlcjogKGVsZW1lbnQ6IEVsZW1lbnQgfCBEb2N1bWVudCkgPT4gdm9pZDtcbn07XG5cbi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxuZXhwb3J0IGNvbnN0IGVycm9yS2F0ZXhOb3RMb2FkZWQgPSAnW25neC1tYXJrZG93biBXaGVuIHVzaW5nIHRoZSBba2F0ZXhdIGF0dHJpYnV0ZSB5b3UgKmhhdmUgdG8qIGluY2x1ZGUgS2FUZVggZmlsZXMgdG8gYGFuZ3VsYXIuanNvbmAgb3IgdXNlIGltcG9ydHMuIFNlZSBSRUFETUUgZm9yIG1vcmUgaW5mb3JtYXRpb24nO1xuZXhwb3J0IGNvbnN0IGVycm9yU3JjV2l0aG91dEh0dHBDbGllbnQgPSAnW25neC1tYXJrZG93bl0gV2hlbiB1c2luZyB0aGUgW3NyY10gYXR0cmlidXRlIHlvdSAqaGF2ZSB0byogcGFzcyB0aGUgYEh0dHBDbGllbnRgIGFzIGEgcGFyYW1ldGVyIG9mIHRoZSBgZm9yUm9vdGAgbWV0aG9kLiBTZWUgUkVBRE1FIGZvciBtb3JlIGluZm9ybWF0aW9uJztcbi8vIHRzbGludDplbmFibGU6bWF4LWxpbmUtbGVuZ3RoXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNYXJrZG93blNlcnZpY2Uge1xuXG4gIHByaXZhdGUgX29wdGlvbnM6IE1hcmtlZE9wdGlvbnM7XG4gIGdldCBvcHRpb25zKCk6IE1hcmtlZE9wdGlvbnMgeyByZXR1cm4gdGhpcy5fb3B0aW9uczsgfVxuICBzZXQgb3B0aW9ucyh2YWx1ZTogTWFya2VkT3B0aW9ucykge1xuICAgIHRoaXMuX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LFxuICAgICAgeyByZW5kZXJlcjogbmV3IE1hcmtlZFJlbmRlcmVyKCkgfSxcbiAgICAgIHRoaXMuX29wdGlvbnMsXG4gICAgICB2YWx1ZSxcbiAgICApO1xuICB9XG5cbiAgZ2V0IHJlbmRlcmVyKCk6IE1hcmtlZFJlbmRlcmVyIHsgcmV0dXJuIHRoaXMub3B0aW9ucy5yZW5kZXJlcjsgfVxuICBzZXQgcmVuZGVyZXIodmFsdWU6IE1hcmtlZFJlbmRlcmVyKSB7XG4gICAgdGhpcy5vcHRpb25zLnJlbmRlcmVyID0gdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIHBsYXRmb3JtOiBPYmplY3QsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgZG9tU2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgb3B0aW9uczogTWFya2VkT3B0aW9ucyxcbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGNvbXBpbGUobWFya2Rvd246IHN0cmluZywgZGVjb2RlSHRtbCA9IGZhbHNlLCBtYXJrZWRPcHRpb25zID0gdGhpcy5vcHRpb25zKTogc3RyaW5nIHtcbiAgICBsZXQgcHJlY29tcGlsZWQgPSB0aGlzLnRyaW1JbmRlbnRhdGlvbihtYXJrZG93bik7XG4gICAgcHJlY29tcGlsZWQgPSBkZWNvZGVIdG1sID8gdGhpcy5kZWNvZGVIdG1sKHByZWNvbXBpbGVkKSA6IHByZWNvbXBpbGVkO1xuICAgIGNvbnN0IGNvbXBpbGVkID0gbWFya2VkLnBhcnNlKHByZWNvbXBpbGVkLCBtYXJrZWRPcHRpb25zKTtcbiAgICByZXR1cm4gbWFya2VkT3B0aW9ucy5zYW5pdGl6ZSAmJiAhbWFya2VkT3B0aW9ucy5zYW5pdGl6ZXJcbiAgICAgID8gdGhpcy5kb21TYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LkhUTUwsIGNvbXBpbGVkKVxuICAgICAgOiBjb21waWxlZDtcbiAgfVxuXG4gIGdldFNvdXJjZShzcmM6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgaWYgKCF0aGlzLmh0dHApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvclNyY1dpdGhvdXRIdHRwQ2xpZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldChzcmMsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcbiAgICAgIC5waXBlKG1hcChtYXJrZG93biA9PiB0aGlzLmhhbmRsZUV4dGVuc2lvbihzcmMsIG1hcmtkb3duKSkpO1xuICB9XG5cbiAgaGlnaGxpZ2h0KGVsZW1lbnQ/OiBFbGVtZW50IHwgRG9jdW1lbnQpIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkgJiYgdHlwZW9mIFByaXNtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5vTGFuZ3VhZ2VFbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgncHJlIGNvZGU6bm90KFtjbGFzcyo9XCJsYW5ndWFnZS1cIl0pJyk7XG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vTGFuZ3VhZ2VFbGVtZW50cywgKHg6IEVsZW1lbnQpID0+IHguY2xhc3NMaXN0LmFkZCgnbGFuZ3VhZ2Utbm9uZScpKTtcbiAgICAgIFByaXNtLmhpZ2hsaWdodEFsbFVuZGVyKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckthdGV4KGh0bWw6IHN0cmluZywgb3B0aW9ucz86IEthdGV4T3B0aW9ucyk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBrYXRleCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGthdGV4LnJlbmRlclRvU3RyaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yS2F0ZXhOb3RMb2FkZWQpO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbC5yZXBsYWNlKC9cXCQoW14kXSs/KVxcJC9nbSwgKF8sIHRleCkgPT4ga2F0ZXgucmVuZGVyVG9TdHJpbmcodGV4LCBvcHRpb25zKSk7XG4gIH1cblxuICBwcml2YXRlIGRlY29kZUh0bWwoaHRtbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcbiAgICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICByZXR1cm4gdGV4dGFyZWEudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFeHRlbnNpb24oc3JjOiBzdHJpbmcsIG1hcmtkb3duOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGV4dGVuc2lvbiA9IHNyY1xuICAgICAgPyBzcmMuc3BsaXQoJz8nKVswXS5zcGxpdCgnLicpLnNwbGljZSgtMSkuam9pbigpXG4gICAgICA6IG51bGw7XG4gICAgcmV0dXJuIGV4dGVuc2lvbiAhPT0gJ21kJ1xuICAgICAgPyAnYGBgJyArIGV4dGVuc2lvbiArICdcXG4nICsgbWFya2Rvd24gKyAnXFxuYGBgJ1xuICAgICAgOiBtYXJrZG93bjtcbiAgfVxuXG4gIHByaXZhdGUgdHJpbUluZGVudGF0aW9uKG1hcmtkb3duOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICghbWFya2Rvd24pIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgbGV0IGluZGVudFN0YXJ0OiBudW1iZXI7XG4gICAgcmV0dXJuIG1hcmtkb3duXG4gICAgICAuc3BsaXQoJ1xcbicpXG4gICAgICAubWFwKGxpbmUgPT4ge1xuICAgICAgICBsZXQgbGluZUlkZW50U3RhcnQgPSBpbmRlbnRTdGFydDtcbiAgICAgICAgaWYgKGxpbmUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxpbmVJZGVudFN0YXJ0ID0gaXNOYU4obGluZUlkZW50U3RhcnQpXG4gICAgICAgICAgICA/IGxpbmUuc2VhcmNoKC9cXFN8JC8pXG4gICAgICAgICAgICA6IE1hdGgubWluKGxpbmUuc2VhcmNoKC9cXFN8JC8pLCBsaW5lSWRlbnRTdGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTmFOKGluZGVudFN0YXJ0KSkge1xuICAgICAgICAgIGluZGVudFN0YXJ0ID0gbGluZUlkZW50U3RhcnQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICEhbGluZUlkZW50U3RhcnRcbiAgICAgICAgICA/IGxpbmUuc3Vic3RyaW5nKGxpbmVJZGVudFN0YXJ0KVxuICAgICAgICAgIDogbGluZTtcbiAgICAgIH0pLmpvaW4oJ1xcbicpO1xuICB9XG59XG4iXX0=