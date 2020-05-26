import { __decorate, __param } from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional, PLATFORM_ID } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as marked from 'marked';
import { map } from 'rxjs/operators';
import { MarkedOptions } from './marked-options';
import { MarkedRenderer } from './marked-renderer';
// tslint:disable:max-line-length
export const errorJoyPixelsNotLoaded = '[ngx-markdown] When using the `emoji` attribute you *have to* include Emoji-Toolkit files to `angular.json` or use imports. See README for more information';
export const errorKatexNotLoaded = '[ngx-markdown] When using the `katex` attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information';
export const errorSrcWithoutHttpClient = '[ngx-markdown] When using the `src` attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information';
// tslint:enable:max-line-length
export const SECURITY_CONTEXT = new InjectionToken('SECURITY_CONTEXT');
let MarkdownService = class MarkdownService {
    constructor(platform, securityContext, http, options, sanitizer) {
        this.platform = platform;
        this.securityContext = securityContext;
        this.http = http;
        this.sanitizer = sanitizer;
        this.initialMarkedOptions = {
            renderer: new MarkedRenderer(),
        };
        this.options = options;
    }
    get options() { return this._options; }
    set options(value) {
        this._options = Object.assign(Object.assign({}, this.initialMarkedOptions), value);
    }
    get renderer() { return this.options.renderer; }
    set renderer(value) {
        this.options.renderer = value;
    }
    compile(markdown, decodeHtml = false, emojify = false, markedOptions = this.options) {
        const trimmed = this.trimIndentation(markdown);
        const decoded = decodeHtml ? this.decodeHtml(trimmed) : trimmed;
        const emojified = emojify ? this.renderEmoji(decoded) : decoded;
        const compiled = marked.parse(emojified, markedOptions);
        return this.sanitizer.sanitize(this.securityContext, compiled);
    }
    getSource(src) {
        if (!this.http) {
            throw new Error(errorSrcWithoutHttpClient);
        }
        return this.http
            .get(src, { responseType: 'text' })
            .pipe(map(markdown => this.handleExtension(src, markdown)));
    }
    highlight(element) {
        if (isPlatformBrowser(this.platform) && typeof Prism !== 'undefined') {
            if (!element) {
                element = document;
            }
            const noLanguageElements = element.querySelectorAll('pre code:not([class*="language-"])');
            Array.prototype.forEach.call(noLanguageElements, (x) => x.classList.add('language-none'));
            Prism.highlightAllUnder(element);
        }
    }
    renderKatex(html, options) {
        if (typeof katex === 'undefined' || typeof katex.renderToString === 'undefined') {
            throw new Error(errorKatexNotLoaded);
        }
        return html.replace(/\$([^\s][^$]*?)\$/gm, (_, tex) => katex.renderToString(tex, options));
    }
    decodeHtml(html) {
        if (isPlatformBrowser(this.platform)) {
            const textarea = document.createElement('textarea');
            textarea.innerHTML = html;
            return textarea.value;
        }
        return html;
    }
    handleExtension(src, markdown) {
        const extension = src
            ? src.split('?')[0].split('.').splice(-1).join()
            : null;
        return extension !== 'md'
            ? '```' + extension + '\n' + markdown + '\n```'
            : markdown;
    }
    renderEmoji(html) {
        if (typeof joypixels === 'undefined' || typeof joypixels.shortnameToUnicode === 'undefined') {
            throw new Error(errorJoyPixelsNotLoaded);
        }
        return joypixels.shortnameToUnicode(html);
    }
    trimIndentation(markdown) {
        if (!markdown) {
            return '';
        }
        let indentStart;
        return markdown
            .split('\n')
            .map(line => {
            let lineIdentStart = indentStart;
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
    }
};
MarkdownService.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [SECURITY_CONTEXT,] }] },
    { type: HttpClient, decorators: [{ type: Optional }] },
    { type: MarkedOptions, decorators: [{ type: Optional }] },
    { type: DomSanitizer }
];
MarkdownService = __decorate([
    Injectable(),
    __param(0, Inject(PLATFORM_ID)),
    __param(1, Inject(SECURITY_CONTEXT)),
    __param(2, Optional()),
    __param(3, Optional())
], MarkdownService);
export { MarkdownService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXJrZG93bi8iLCJzb3VyY2VzIjpbInNyYy9tYXJrZG93bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQW1CLE1BQU0sZUFBZSxDQUFDO0FBQzNHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUVqQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHckMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQWNuRCxpQ0FBaUM7QUFDakMsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQUcsNkpBQTZKLENBQUM7QUFDck0sTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcscUpBQXFKLENBQUM7QUFDekwsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQUcsMkpBQTJKLENBQUM7QUFDck0sZ0NBQWdDO0FBRWhDLE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUFHLElBQUksY0FBYyxDQUFrQixrQkFBa0IsQ0FBQyxDQUFDO0FBR3hGLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFrQjFCLFlBQytCLFFBQWdCLEVBQ1gsZUFBZ0MsRUFDOUMsSUFBZ0IsRUFDeEIsT0FBc0IsRUFDMUIsU0FBdUI7UUFKRixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQ1gsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQzlDLFNB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QUFBLFFBQVEsRUFBRSxDQUFBO0dBdEJGLGVBQWUsQ0E4RzNCO1NBOUdZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiwgT3B0aW9uYWwsIFBMQVRGT1JNX0lELCBTZWN1cml0eUNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0ICogYXMgbWFya2VkIGZyb20gJ21hcmtlZCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEthdGV4T3B0aW9ucyB9IGZyb20gJy4va2F0ZXgtb3B0aW9ucyc7XG5pbXBvcnQgeyBNYXJrZWRPcHRpb25zIH0gZnJvbSAnLi9tYXJrZWQtb3B0aW9ucyc7XG5pbXBvcnQgeyBNYXJrZWRSZW5kZXJlciB9IGZyb20gJy4vbWFya2VkLXJlbmRlcmVyJztcblxuZGVjbGFyZSB2YXIgam95cGl4ZWxzOiB7XG4gIHNob3J0bmFtZVRvVW5pY29kZShpbnB1dDogc3RyaW5nKTogc3RyaW5nO1xufTtcblxuZGVjbGFyZSB2YXIga2F0ZXg6IHtcbiAgcmVuZGVyVG9TdHJpbmcodGV4OiBzdHJpbmcsIG9wdGlvbnM/OiBLYXRleE9wdGlvbnMpOiBzdHJpbmc7XG59O1xuXG5kZWNsYXJlIHZhciBQcmlzbToge1xuICBoaWdobGlnaHRBbGxVbmRlcjogKGVsZW1lbnQ6IEVsZW1lbnQgfCBEb2N1bWVudCkgPT4gdm9pZDtcbn07XG5cbi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxuZXhwb3J0IGNvbnN0IGVycm9ySm95UGl4ZWxzTm90TG9hZGVkID0gJ1tuZ3gtbWFya2Rvd25dIFdoZW4gdXNpbmcgdGhlIGBlbW9qaWAgYXR0cmlidXRlIHlvdSAqaGF2ZSB0byogaW5jbHVkZSBFbW9qaS1Ub29sa2l0IGZpbGVzIHRvIGBhbmd1bGFyLmpzb25gIG9yIHVzZSBpbXBvcnRzLiBTZWUgUkVBRE1FIGZvciBtb3JlIGluZm9ybWF0aW9uJztcbmV4cG9ydCBjb25zdCBlcnJvckthdGV4Tm90TG9hZGVkID0gJ1tuZ3gtbWFya2Rvd25dIFdoZW4gdXNpbmcgdGhlIGBrYXRleGAgYXR0cmlidXRlIHlvdSAqaGF2ZSB0byogaW5jbHVkZSBLYVRlWCBmaWxlcyB0byBgYW5ndWxhci5qc29uYCBvciB1c2UgaW1wb3J0cy4gU2VlIFJFQURNRSBmb3IgbW9yZSBpbmZvcm1hdGlvbic7XG5leHBvcnQgY29uc3QgZXJyb3JTcmNXaXRob3V0SHR0cENsaWVudCA9ICdbbmd4LW1hcmtkb3duXSBXaGVuIHVzaW5nIHRoZSBgc3JjYCBhdHRyaWJ1dGUgeW91ICpoYXZlIHRvKiBwYXNzIHRoZSBgSHR0cENsaWVudGAgYXMgYSBwYXJhbWV0ZXIgb2YgdGhlIGBmb3JSb290YCBtZXRob2QuIFNlZSBSRUFETUUgZm9yIG1vcmUgaW5mb3JtYXRpb24nO1xuLy8gdHNsaW50OmVuYWJsZTptYXgtbGluZS1sZW5ndGhcblxuZXhwb3J0IGNvbnN0IFNFQ1VSSVRZX0NPTlRFWFQgPSBuZXcgSW5qZWN0aW9uVG9rZW48U2VjdXJpdHlDb250ZXh0PignU0VDVVJJVFlfQ09OVEVYVCcpO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWFya2Rvd25TZXJ2aWNlIHtcblxuICBwcml2YXRlIHJlYWRvbmx5IGluaXRpYWxNYXJrZWRPcHRpb25zOiBNYXJrZWRPcHRpb25zID0ge1xuICAgIHJlbmRlcmVyOiBuZXcgTWFya2VkUmVuZGVyZXIoKSxcbiAgfTtcblxuICBwcml2YXRlIF9vcHRpb25zOiBNYXJrZWRPcHRpb25zO1xuXG4gIGdldCBvcHRpb25zKCk6IE1hcmtlZE9wdGlvbnMgeyByZXR1cm4gdGhpcy5fb3B0aW9uczsgfVxuICBzZXQgb3B0aW9ucyh2YWx1ZTogTWFya2VkT3B0aW9ucykge1xuICAgIHRoaXMuX29wdGlvbnMgPSB7IC4uLnRoaXMuaW5pdGlhbE1hcmtlZE9wdGlvbnMsIC4uLnZhbHVlIH07XG4gIH1cblxuICBnZXQgcmVuZGVyZXIoKTogTWFya2VkUmVuZGVyZXIgeyByZXR1cm4gdGhpcy5vcHRpb25zLnJlbmRlcmVyOyB9XG4gIHNldCByZW5kZXJlcih2YWx1ZTogTWFya2VkUmVuZGVyZXIpIHtcbiAgICB0aGlzLm9wdGlvbnMucmVuZGVyZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm06IE9iamVjdCxcbiAgICBASW5qZWN0KFNFQ1VSSVRZX0NPTlRFWFQpIHByaXZhdGUgc2VjdXJpdHlDb250ZXh0OiBTZWN1cml0eUNvbnRleHQsXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIEBPcHRpb25hbCgpIG9wdGlvbnM6IE1hcmtlZE9wdGlvbnMsXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgKSB7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgfVxuXG4gIGNvbXBpbGUobWFya2Rvd246IHN0cmluZywgZGVjb2RlSHRtbCA9IGZhbHNlLCBlbW9qaWZ5ID0gZmFsc2UsICBtYXJrZWRPcHRpb25zID0gdGhpcy5vcHRpb25zKTogc3RyaW5nIHtcbiAgICBjb25zdCB0cmltbWVkID0gdGhpcy50cmltSW5kZW50YXRpb24obWFya2Rvd24pO1xuICAgIGNvbnN0IGRlY29kZWQgPSBkZWNvZGVIdG1sID8gdGhpcy5kZWNvZGVIdG1sKHRyaW1tZWQpIDogdHJpbW1lZDtcbiAgICBjb25zdCBlbW9qaWZpZWQgPSBlbW9qaWZ5ID8gdGhpcy5yZW5kZXJFbW9qaShkZWNvZGVkKSA6IGRlY29kZWQ7XG4gICAgY29uc3QgY29tcGlsZWQgPSBtYXJrZWQucGFyc2UoZW1vamlmaWVkLCBtYXJrZWRPcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuc2FuaXRpemUodGhpcy5zZWN1cml0eUNvbnRleHQsIGNvbXBpbGVkKTtcbiAgfVxuXG4gIGdldFNvdXJjZShzcmM6IHN0cmluZyk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgaWYgKCF0aGlzLmh0dHApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvclNyY1dpdGhvdXRIdHRwQ2xpZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldChzcmMsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcbiAgICAgIC5waXBlKG1hcChtYXJrZG93biA9PiB0aGlzLmhhbmRsZUV4dGVuc2lvbihzcmMsIG1hcmtkb3duKSkpO1xuICB9XG5cbiAgaGlnaGxpZ2h0KGVsZW1lbnQ/OiBFbGVtZW50IHwgRG9jdW1lbnQpIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkgJiYgdHlwZW9mIFByaXNtICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5vTGFuZ3VhZ2VFbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgncHJlIGNvZGU6bm90KFtjbGFzcyo9XCJsYW5ndWFnZS1cIl0pJyk7XG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKG5vTGFuZ3VhZ2VFbGVtZW50cywgKHg6IEVsZW1lbnQpID0+IHguY2xhc3NMaXN0LmFkZCgnbGFuZ3VhZ2Utbm9uZScpKTtcbiAgICAgIFByaXNtLmhpZ2hsaWdodEFsbFVuZGVyKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckthdGV4KGh0bWw6IHN0cmluZywgb3B0aW9ucz86IEthdGV4T3B0aW9ucyk6IHN0cmluZyB7XG4gICAgaWYgKHR5cGVvZiBrYXRleCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGthdGV4LnJlbmRlclRvU3RyaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yS2F0ZXhOb3RMb2FkZWQpO1xuICAgIH1cbiAgICByZXR1cm4gaHRtbC5yZXBsYWNlKC9cXCQoW15cXHNdW14kXSo/KVxcJC9nbSwgKF8sIHRleCkgPT4ga2F0ZXgucmVuZGVyVG9TdHJpbmcodGV4LCBvcHRpb25zKSk7XG4gIH1cblxuICBwcml2YXRlIGRlY29kZUh0bWwoaHRtbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcbiAgICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIHRleHRhcmVhLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICByZXR1cm4gdGV4dGFyZWEudmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFeHRlbnNpb24oc3JjOiBzdHJpbmcsIG1hcmtkb3duOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGV4dGVuc2lvbiA9IHNyY1xuICAgICAgPyBzcmMuc3BsaXQoJz8nKVswXS5zcGxpdCgnLicpLnNwbGljZSgtMSkuam9pbigpXG4gICAgICA6IG51bGw7XG4gICAgcmV0dXJuIGV4dGVuc2lvbiAhPT0gJ21kJ1xuICAgICAgPyAnYGBgJyArIGV4dGVuc2lvbiArICdcXG4nICsgbWFya2Rvd24gKyAnXFxuYGBgJ1xuICAgICAgOiBtYXJrZG93bjtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyRW1vamkoaHRtbDogc3RyaW5nKSB7XG4gICAgaWYgKHR5cGVvZiBqb3lwaXhlbHMgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBqb3lwaXhlbHMuc2hvcnRuYW1lVG9Vbmljb2RlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9ySm95UGl4ZWxzTm90TG9hZGVkKTtcbiAgICB9XG4gICAgcmV0dXJuIGpveXBpeGVscy5zaG9ydG5hbWVUb1VuaWNvZGUoaHRtbCk7XG4gIH1cblxuICBwcml2YXRlIHRyaW1JbmRlbnRhdGlvbihtYXJrZG93bjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAoIW1hcmtkb3duKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGxldCBpbmRlbnRTdGFydDogbnVtYmVyO1xuICAgIHJldHVybiBtYXJrZG93blxuICAgICAgLnNwbGl0KCdcXG4nKVxuICAgICAgLm1hcChsaW5lID0+IHtcbiAgICAgICAgbGV0IGxpbmVJZGVudFN0YXJ0ID0gaW5kZW50U3RhcnQ7XG4gICAgICAgIGlmIChsaW5lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBsaW5lSWRlbnRTdGFydCA9IGlzTmFOKGxpbmVJZGVudFN0YXJ0KVxuICAgICAgICAgICAgPyBsaW5lLnNlYXJjaCgvXFxTfCQvKVxuICAgICAgICAgICAgOiBNYXRoLm1pbihsaW5lLnNlYXJjaCgvXFxTfCQvKSwgbGluZUlkZW50U3RhcnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc05hTihpbmRlbnRTdGFydCkpIHtcbiAgICAgICAgICBpbmRlbnRTdGFydCA9IGxpbmVJZGVudFN0YXJ0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhIWxpbmVJZGVudFN0YXJ0XG4gICAgICAgICAgPyBsaW5lLnN1YnN0cmluZyhsaW5lSWRlbnRTdGFydClcbiAgICAgICAgICA6IGxpbmU7XG4gICAgICB9KS5qb2luKCdcXG4nKTtcbiAgfVxufVxuIl19