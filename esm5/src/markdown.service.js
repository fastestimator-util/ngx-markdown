import { __assign, __decorate, __param } from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional, PLATFORM_ID } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as marked from 'marked';
import { map } from 'rxjs/operators';
import { MarkedOptions } from './marked-options';
import { MarkedRenderer } from './marked-renderer';
// tslint:disable:max-line-length
export var errorJoyPixelsNotLoaded = '[ngx-markdown] When using the `emoji` attribute you *have to* include Emoji-Toolkit files to `angular.json` or use imports. See README for more information';
export var errorKatexNotLoaded = '[ngx-markdown] When using the `katex` attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information';
export var errorSrcWithoutHttpClient = '[ngx-markdown] When using the `src` attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information';
// tslint:enable:max-line-length
export var SECURITY_CONTEXT = new InjectionToken('SECURITY_CONTEXT');
var MarkdownService = /** @class */ (function () {
    function MarkdownService(platform, securityContext, http, options, sanitizer) {
        this.platform = platform;
        this.securityContext = securityContext;
        this.http = http;
        this.sanitizer = sanitizer;
        this.initialMarkedOptions = {
            renderer: new MarkedRenderer(),
        };
        this.options = options;
    }
    Object.defineProperty(MarkdownService.prototype, "options", {
        get: function () { return this._options; },
        set: function (value) {
            this._options = __assign(__assign({}, this.initialMarkedOptions), value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownService.prototype, "renderer", {
        get: function () { return this.options.renderer; },
        set: function (value) {
            this.options.renderer = value;
        },
        enumerable: true,
        configurable: true
    });
    MarkdownService.prototype.compile = function (markdown, decodeHtml, emojify, markedOptions) {
        if (decodeHtml === void 0) { decodeHtml = false; }
        if (emojify === void 0) { emojify = false; }
        if (markedOptions === void 0) { markedOptions = this.options; }
        var trimmed = this.trimIndentation(markdown);
        var decoded = decodeHtml ? this.decodeHtml(trimmed) : trimmed;
        var emojified = emojify ? this.renderEmoji(decoded) : decoded;
        var compiled = marked.parse(emojified, markedOptions);
        return this.sanitizer.sanitize(this.securityContext, compiled);
    };
    MarkdownService.prototype.getSource = function (src) {
        var _this = this;
        if (!this.http) {
            throw new Error(errorSrcWithoutHttpClient);
        }
        return this.http
            .get(src, { responseType: 'text' })
            .pipe(map(function (markdown) { return _this.handleExtension(src, markdown); }));
    };
    MarkdownService.prototype.highlight = function (element) {
        if (isPlatformBrowser(this.platform) && typeof Prism !== 'undefined') {
            if (!element) {
                element = document;
            }
            var noLanguageElements = element.querySelectorAll('pre code:not([class*="language-"])');
            Array.prototype.forEach.call(noLanguageElements, function (x) { return x.classList.add('language-none'); });
            Prism.highlightAllUnder(element);
        }
    };
    MarkdownService.prototype.renderKatex = function (html, options) {
        if (typeof katex === 'undefined' || typeof katex.renderToString === 'undefined') {
            throw new Error(errorKatexNotLoaded);
        }
        return html.replace(/\$([^\s][^$]*?)\$/gm, function (_, tex) { return katex.renderToString(tex, options); });
    };
    MarkdownService.prototype.decodeHtml = function (html) {
        if (isPlatformBrowser(this.platform)) {
            var textarea = document.createElement('textarea');
            textarea.innerHTML = html;
            return textarea.value;
        }
        return html;
    };
    MarkdownService.prototype.handleExtension = function (src, markdown) {
        var extension = src
            ? src.split('?')[0].split('.').splice(-1).join()
            : null;
        return extension !== 'md'
            ? '```' + extension + '\n' + markdown + '\n```'
            : markdown;
    };
    MarkdownService.prototype.renderEmoji = function (html) {
        if (typeof joypixels === 'undefined' || typeof joypixels.shortnameToUnicode === 'undefined') {
            throw new Error(errorJoyPixelsNotLoaded);
        }
        return joypixels.shortnameToUnicode(html);
    };
    MarkdownService.prototype.trimIndentation = function (markdown) {
        if (!markdown) {
            return '';
        }
        var indentStart;
        return markdown
            .split('\n')
            .map(function (line) {
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
        }).join('\n');
    };
    MarkdownService.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [SECURITY_CONTEXT,] }] },
        { type: HttpClient, decorators: [{ type: Optional }] },
        { type: MarkedOptions, decorators: [{ type: Optional }] },
        { type: DomSanitizer }
    ]; };
    MarkdownService = __decorate([
        Injectable(),
        __param(0, Inject(PLATFORM_ID)),
        __param(1, Inject(SECURITY_CONTEXT)),
        __param(2, Optional()),
        __param(3, Optional())
    ], MarkdownService);
    return MarkdownService;
}());
export { MarkdownService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXJrZG93bi8iLCJzb3VyY2VzIjpbInNyYy9tYXJrZG93bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUVqQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQWNuRCxpQ0FBaUM7QUFDakMsTUFBTSxDQUFDLElBQU0sdUJBQXVCLEdBQUcsNkpBQTZKLENBQUM7QUFDck0sTUFBTSxDQUFDLElBQU0sbUJBQW1CLEdBQUcscUpBQXFKLENBQUM7QUFDekwsTUFBTSxDQUFDLElBQU0seUJBQXlCLEdBQUcsMkpBQTJKLENBQUM7QUFDck0sZ0NBQWdDO0FBRWhDLE1BQU0sQ0FBQyxJQUFNLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUFrQixrQkFBa0IsQ0FBQyxDQUFDO0FBR3hGO0lBa0JFLHlCQUMrQixRQUFnQixFQUNYLGVBQWdDLEVBQzlDLElBQWdCLEVBQ3hCLE9BQXNCLEVBQzFCLFNBQXVCO1FBSkYsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNYLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUM5QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBRTVCLGNB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VSxFQUFFO1FBb0JSLFdBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ25CLFdBQUEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDeEIsV0FBQSxRQUFRLEVBQUUsQ0FBQTtRQUNWLFdBQUEsUUFBUSxFQUFFLENBQUE7T0F0QkYsZUFBZSxDQThHM0I7SUFBRCxzQkFBQztDQUFBLEFBOUdELElBOEdDO1NBOUdZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIFBMQVRGT1JNX0lELCBTZWN1cml0eUNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0ICogYXMgbWFya2VkIGZyb20gJ21hcmtlZCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEthdGV4T3B0aW9ucyB9IGZyb20gJy4va2F0ZXgtb3B0aW9ucyc7XG5pbXBvcnQgeyBNYXJrZWRPcHRpb25zIH0gZnJvbSAnLi9tYXJrZWQtb3B0aW9ucyc7XG5pbXBvcnQgeyBNYXJrZWRSZW5kZXJlciB9IGZyb20gJy4vbWFya2VkLXJlbmRlcmVyJztcblxuZGVjbGFyZSB2YXIgam95cGl4ZWxzOiB7XG4gIHNob3J0bmFtZVRvVW5pY29kZShpbnB1dDogc3RyaW5nKTogc3RyaW5nO1xufTtcblxuZGVjbGFyZSB2YXIga2F0ZXg6IHtcbiAgcmVuZGVyVG9TdHJpbmcodGV4OiBzdHJpbmcsIG9wdGlvbnM/OiBLYXRleE9wdGlvbnMpOiBzdHJpbmc7XG59O1xuXG5kZWNsYXJlIHZhciBQcmlzbToge1xuICBoaWdobGlnaHRBbGxVbmRlcjogKGVsZW1lbnQ6IEVsZW1lbnQgfCBEb2N1bWVudCkgPT4gdm9pZDtcbn07XG5cbi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxuZXhwb3J0IGNvbnN0IGVycm9ySm95UGl4ZWxzTm90TG9hZGVkID0gJ1tuZ3gtbWFya2Rvd25dIFdoZW4gdXNpbmcgdGhlIGBlbW9qaWAgYXR0cmlidXRlIHlvdSAqaGF2ZSB0byogaW5jbHVkZSBFbW9qaS1Ub29sa2l0IGZpbGVzIHRvIGBhbmd1bGFyLmpzb25gIG9yIHVzZSBpbXBvcnRzLiBTZWUgUkVBRE1FIGZvciBtb3JlIGluZm9ybWF0aW9uJztcbmV4cG9ydCBjb25zdCBlcnJvckthdGV4Tm90TG9hZGVkID0gJ1tuZ3gtbWFya2Rvd25dIFdoZW4gdXNpbmcgdGhlIGBrYXRleGAgYXR0cmlidXRlIHlvdSAqaGF2ZSB0byogaW5jbHVkZSBLYVRlWCBmaWxlcyB0byBgYW5ndWxhci5qc29uYCBvciB1c2UgaW1wb3J0cy4gU2VlIFJFQURNRSBmb3IgbW9yZSBpbmZvcm1hdGlvbic7XG5leHBvcnQgY29uc3QgZXJyb3JTcmNXaXRob3V0SHR0cENsaWVudCA9ICdbbmd4LW1hcmtkb3duXSBXaGVuIHVzaW5nIHRoZSBgc3JjYCBhdHRyaWJ1dGUgeW91ICpoYXZlIHRvKiBwYXNzIHRoZSBgSHR0cENsaWVudGAgYXMgYSBwYXJhbWV0ZXIgb2YgdGhlIGBmb3JSb290YCBtZXRob2QuIFNlZSBSRUFETUUgZm9yIG1vcmUgaW5mb3JtYXRpb24nO1xuLy8gdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGhcblxuZXhwb3J0IGNvbnN0IFNFQ1VSSVRZX0NPTlRFWFQgPSBuZXcgSW5qZWN0aW9uVG9rZW48U2VjdXJpdHlDb250ZXh0PignU0VDVVJJVFlfQ09OVEVYVCcpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWFya2Rvd25TZXJ2aWNlIHtcblxuICBwcml2YXRlIHJlYWRvbmx5IGluaXRpYWxNYXJrZWRPcHRpb25zOiBNYXJrZWRPcHRpb25zID0ge1xuICAgIHJlbmRlcmVyOiBuZXcgTWFya2VkUmVuZGVyZXIoKSxcbiAgfTtcblxuICBwcml2YXRlIF9vcHRpb25zOiBNYXJrZWRPcHRpb25zO1xuXG4gIGdldCBvcHRpb25zKCk6IE1hcmtlZE9wdGlvbnMgeyByZXR1cm4gdGhpcy5fb3B0aW9uczsgfVxuICBzZXQgb3B0aW9ucyh2YWx1ZTogTWFya2VkT3B0aW9ucykge1xuICAgIHRoaXMuX29wdGlvbnMgPSB7IC4uLnRoaXMuaW5pdGlhbE1hcmtlZE9wdGlvbnMsIC4uLnZhbHVlIH07XG4gIH1cblxuICBnZXQgcmVuZGVyZXIoKTogTWFya2VkUmVuZGVyZXIgeyByZXR1cm4gdGhpcy5vcHRpb25zLnJlbmRlcmVyOyB9XG4gIHNldCByZW5kZXJlcih2YWx1ZTogTWFya2VkUmVuZGVyZXIpIHtcbiAgICB0aGlzLm9wdGlvbnMucmVuZGVyZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm06IE9iamVjdCxcbiAgICBASW5qZWN0KFNFQ1VSSVRZX0NPTlRFWFQpIHByaXZhdGUgc2VjdXJpdHlDb250ZXh0OiBTZWN1cml0eUNvbnRleHQsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIEBPcHRpb25hbCgpIG9wdGlvbnM6IE1hcmtlZE9wdGlvbnMsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGNvbXBpbGUobWFya2Rvd246IHN0cmluZywgZGVjb2RlSHRtbCA9IGZhbHNlLCBlbW9qaWZ5ID0gZmFsc2UsICBtYXJrZWRPcHRpb25zID0gdGhpcy5vcHRpb25zKTogc3RyaW5nIHtcbiAgICBjb25zdCB0cmltbWVkID0gdGhpcy50cmltSW5kZW50YXRpb24obWFya2Rvd24pO1xuICAgIGNvbnN0IGRlY29kZWQgPSBkZWNvZGVIdG1sID8gdGhpcy5kZWNvZGVIdG1sKHRyaW1tZWQpIDogdHJpbW1lZDtcbiAgICBjb25zdCBlbW9qaWZpZWQgPSBlbW9qaWZ5ID8gdGhpcy5yZW5kZXJFbW9qaShkZWNvZGVkKSA6IGRlY29kZWQ7XG4gICAgY29uc3QgY29tcGlsZWQgPSBtYXJrZWQucGFyc2UoZW1vamlmaWVkLCBtYXJrZWRPcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuc2FuaXRpemUodGhpcy5zZWN1cml0eUNvbnRleHQsIGNvbXBpbGVkKTtcbiAgfVxuXG4gIGdldFNvdXJjZShzcmM6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgaWYgKCF0aGlzLmh0dHApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvclNyY1dpdGhvdXRIdHRwQ2xpZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldChzcmMsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcbiAgICAgIC5waXBlKG1hcChtYXJrZG93biA9PiB0aGlzLmhhbmRsZUV4dGVuc2lvbihzcmMsIG1hcmtkb3duKSkpO1xuICB9XG5cbiAgaGlnaGxpZ2h0KGVsZW1lbnQ/OiBFbGVtZW50IHwgRG9jdW1lbnQpIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkgJiYgdHlwZW9mIFByaXNtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5vTGFuZ3VhZ2VFbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgncHJlIGNvZGU6bm90KFtjbGFzcyo9XCJsYW5ndWFnZS1cIl0pJyk7XG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vTGFuZ3VhZ2VFbGVtZW50cywgKHg6IEVsZW1lbnQpID0+IHguY2xhc3NMaXN0LmFkZCgnbGFuZ3VhZ2Utbm9uZScpKTtcbiAgICAgIFByaXNtLmhpZ2hsaWdodEFsbFVuZGVyKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckthdGV4KGh0bWw6IHN0cmluZywgb3B0aW9ucz86IEthdGV4T3B0aW9ucyk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBrYXRleCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGthdGV4LnJlbmRlclRvU3RyaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yS2F0ZXhOb3RMb2FkZWQpO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbC5yZXBsYWNlKC9cXCQoW15cXHNdW14kXSo/KVxcJC9nbSwgKF8sIHRleCkgPT4ga2F0ZXgucmVuZGVyVG9TdHJpbmcodGV4LCBvcHRpb25zKSk7XG4gIH1cblxuICBwcml2YXRlIGRlY29kZUh0bWwoaHRtbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcbiAgICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICByZXR1cm4gdGV4dGFyZWEudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFeHRlbnNpb24oc3JjOiBzdHJpbmcsIG1hcmtkb3duOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGV4dGVuc2lvbiA9IHNyY1xuICAgICAgPyBzcmMuc3BsaXQoJz8nKVswXS5zcGxpdCgnLicpLnNwbGljZSgtMSkuam9pbigpXG4gICAgICA6IG51bGw7XG4gICAgcmV0dXJuIGV4dGVuc2lvbiAhPT0gJ21kJ1xuICAgICAgPyAnYGBgJyArIGV4dGVuc2lvbiArICdcXG4nICsgbWFya2Rvd24gKyAnXFxuYGBgJ1xuICAgICAgOiBtYXJrZG93bjtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyRW1vamkoaHRtbDogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBqb3lwaXhlbHMgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBqb3lwaXhlbHMuc2hvcnRuYW1lVG9Vbmljb2RlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9ySm95UGl4ZWxzTm90TG9hZGVkKTtcbiAgICB9XG4gICAgcmV0dXJuIGpveXBpeGVscy5zaG9ydG5hbWVUb1VuaWNvZGUoaHRtbCk7XG4gIH1cblxuICBwcml2YXRlIHRyaW1JbmRlbnRhdGlvbihtYXJrZG93bjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIW1hcmtkb3duKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGxldCBpbmRlbnRTdGFydDogbnVtYmVyO1xuICAgIHJldHVybiBtYXJrZG93blxuICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgLm1hcChsaW5lID0+IHtcbiAgICAgICAgbGV0IGxpbmVJZGVudFN0YXJ0ID0gaW5kZW50U3RhcnQ7XG4gICAgICAgIGlmIChsaW5lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsaW5lSWRlbnRTdGFydCA9IGlzTmFOKGxpbmVJZGVudFN0YXJ0KVxuICAgICAgICAgICAgPyBsaW5lLnNlYXJjaCgvXFxTfCQvKVxuICAgICAgICAgICAgOiBNYXRoLm1pbihsaW5lLnNlYXJjaCgvXFxTfCQvKSwgbGluZUlkZW50U3RhcnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05hTihpbmRlbnRTdGFydCkpIHtcbiAgICAgICAgICBpbmRlbnRTdGFydCA9IGxpbmVJZGVudFN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhIWxpbmVJZGVudFN0YXJ0XG4gICAgICAgICAgPyBsaW5lLnN1YnN0cmluZyhsaW5lSWRlbnRTdGFydClcbiAgICAgICAgICA6IGxpbmU7XG4gICAgICB9KS5qb2luKCdcXG4nKTtcbiAgfVxufVxuIl19