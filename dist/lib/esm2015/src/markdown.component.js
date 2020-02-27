/**
 * @fileoverview added by tsickle
 * Generated from: src/markdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { KatexOptions } from './katex-options';
import { MarkdownService } from './markdown.service';
import { PrismPlugin } from './prism-plugin';
export class MarkdownComponent {
    /**
     * @param {?} element
     * @param {?} markdownService
     */
    constructor(element, markdownService) {
        this.element = element;
        this.markdownService = markdownService;
        this.error = new EventEmitter();
        this.load = new EventEmitter();
        this.ready = new EventEmitter();
        this._katex = false;
        this._lineHighlight = false;
        this._lineNumbers = false;
    }
    // Plugin - katex
    /**
     * @return {?}
     */
    get katex() { return this._katex; }
    /**
     * @param {?} value
     * @return {?}
     */
    set katex(value) { this._katex = this.coerceBooleanProperty(value); }
    // Plugin - lineNumbers
    /**
     * @return {?}
     */
    get lineNumbers() { return this._lineNumbers; }
    /**
     * @param {?} value
     * @return {?}
     */
    set lineNumbers(value) { this._lineNumbers = this.coerceBooleanProperty(value); }
    // Plugin - lineHighlight
    /**
     * @return {?}
     */
    get lineHighlight() { return this._lineHighlight; }
    /**
     * @param {?} value
     * @return {?}
     */
    set lineHighlight(value) { this._lineHighlight = this.coerceBooleanProperty(value); }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.data != null) {
            this.handleData();
            return;
        }
        if (this.src != null) {
            this.handleSrc();
            return;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (!this.data && !this.src) {
            this.handleTransclusion();
        }
    }
    /**
     * @param {?} markdown
     * @param {?=} decodeHtml
     * @return {?}
     */
    render(markdown, decodeHtml = false) {
        /** @type {?} */
        let compiled = this.markdownService.compile(markdown, decodeHtml);
        compiled = this.katex ? this.markdownService.renderKatex(compiled, this.katexOptions) : compiled;
        this.element.nativeElement.innerHTML = compiled;
        this.handlePlugins();
        this.markdownService.highlight(this.element.nativeElement);
        this.ready.emit();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    coerceBooleanProperty(value) {
        return value != null && `${value}` !== 'false';
    }
    /**
     * @private
     * @return {?}
     */
    handleData() {
        this.render(this.data);
    }
    /**
     * @private
     * @return {?}
     */
    handleSrc() {
        this.markdownService
            .getSource(this.src)
            .subscribe((/**
         * @param {?} markdown
         * @return {?}
         */
        markdown => {
            this.render(markdown);
            this.load.emit(markdown);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => this.error.emit(error)));
    }
    /**
     * @private
     * @return {?}
     */
    handleTransclusion() {
        this.render(this.element.nativeElement.innerHTML, true);
    }
    /**
     * @private
     * @return {?}
     */
    handlePlugins() {
        if (this.lineHighlight) {
            this.setPluginClass(this.element.nativeElement, PrismPlugin.LineHighlight);
            this.setPluginOptions(this.element.nativeElement, { dataLine: this.line, dataLineOffset: this.lineOffset });
        }
        if (this.lineNumbers) {
            this.setPluginClass(this.element.nativeElement, PrismPlugin.LineNumbers);
            this.setPluginOptions(this.element.nativeElement, { dataStart: this.start });
        }
    }
    /**
     * @private
     * @param {?} element
     * @param {?} plugin
     * @return {?}
     */
    setPluginClass(element, plugin) {
        /** @type {?} */
        const preElements = element.querySelectorAll('pre');
        for (let i = 0; i < preElements.length; i++) {
            /** @type {?} */
            const classes = plugin instanceof Array ? plugin : [plugin];
            preElements.item(i).classList.add(...classes);
        }
    }
    /**
     * @private
     * @param {?} element
     * @param {?} options
     * @return {?}
     */
    setPluginOptions(element, options) {
        /** @type {?} */
        const preElements = element.querySelectorAll('pre');
        for (let i = 0; i < preElements.length; i++) {
            Object.keys(options).forEach((/**
             * @param {?} option
             * @return {?}
             */
            option => {
                /** @type {?} */
                const attributeValue = options[option];
                if (!!attributeValue) {
                    /** @type {?} */
                    const attributeName = this.toLispCase(option);
                    preElements.item(i).setAttribute(attributeName, attributeValue.toString());
                }
            }));
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    toLispCase(value) {
        /** @type {?} */
        const upperChars = value.match(/([A-Z])/g);
        if (!upperChars) {
            return value;
        }
        /** @type {?} */
        let str = value.toString();
        for (let i = 0, n = upperChars.length; i < n; i++) {
            str = str.replace(new RegExp(upperChars[i]), '-' + upperChars[i].toLowerCase());
        }
        if (str.slice(0, 1) === '-') {
            str = str.slice(1);
        }
        return str;
    }
}
MarkdownComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'markdown, [markdown]',
                template: '<ng-content></ng-content>'
            }] }
];
/** @nocollapse */
MarkdownComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: MarkdownService }
];
MarkdownComponent.propDecorators = {
    data: [{ type: Input }],
    src: [{ type: Input }],
    katex: [{ type: Input }],
    katexOptions: [{ type: Input }],
    lineNumbers: [{ type: Input }],
    start: [{ type: Input }],
    lineHighlight: [{ type: Input }],
    line: [{ type: Input }],
    lineOffset: [{ type: Input }],
    error: [{ type: Output }],
    load: [{ type: Output }],
    ready: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MarkdownComponent.prototype.data;
    /** @type {?} */
    MarkdownComponent.prototype.src;
    /** @type {?} */
    MarkdownComponent.prototype.katexOptions;
    /** @type {?} */
    MarkdownComponent.prototype.start;
    /** @type {?} */
    MarkdownComponent.prototype.line;
    /** @type {?} */
    MarkdownComponent.prototype.lineOffset;
    /** @type {?} */
    MarkdownComponent.prototype.error;
    /** @type {?} */
    MarkdownComponent.prototype.load;
    /** @type {?} */
    MarkdownComponent.prototype.ready;
    /**
     * @type {?}
     * @private
     */
    MarkdownComponent.prototype._katex;
    /**
     * @type {?}
     * @private
     */
    MarkdownComponent.prototype._lineHighlight;
    /**
     * @type {?}
     * @private
     */
    MarkdownComponent.prototype._lineNumbers;
    /** @type {?} */
    MarkdownComponent.prototype.element;
    /** @type {?} */
    MarkdownComponent.prototype.markdownService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hcmtkb3duLyIsInNvdXJjZXMiOlsic3JjL21hcmtkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFhLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU3RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU83QyxNQUFNLE9BQU8saUJBQWlCOzs7OztJQStCNUIsWUFDUyxPQUFnQyxFQUNoQyxlQUFnQztRQURoQyxZQUFPLEdBQVAsT0FBTyxDQUF5QjtRQUNoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFWL0IsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDbkMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFDbEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFFbkMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBS3pCLENBQUM7Ozs7O0lBN0JMLElBQ0ksS0FBSyxLQUFjLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQzVDLElBQUksS0FBSyxDQUFDLEtBQWMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Ozs7O0lBSTlFLElBQ0ksV0FBVyxLQUFjLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Ozs7O0lBQ3hELElB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SztrQkFDTCxLQUFLO29CQUdMLEtBQUs7MkJBR0wsS0FBSzswQkFHTCxLQUFLO29CQUdMLEtBQUs7NEJBR0wsS0FBSzttQkFHTCxLQUFLO3lCQUNMLEtBQUs7b0JBRUwsTUFBTTttQkFDTixNQUFNO29CQUNOLE1BQU07Ozs7SUF4QlAsaUNBQXNCOztJQUN0QixnQ0FBcUI7O0lBTXJCLHlDQUFvQzs7SUFNcEMsa0NBQXVCOztJQU12QixpQ0FBaUM7O0lBQ2pDLHVDQUE0Qjs7SUFFNUIsa0NBQTZDOztJQUM3QyxpQ0FBNEM7O0lBQzVDLGtDQUEyQzs7Ozs7SUFFM0MsbUNBQXVCOzs7OztJQUN2QiwyQ0FBK0I7Ozs7O0lBQy9CLHlDQUE2Qjs7SUFHM0Isb0NBQXVDOztJQUN2Qyw0Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEthdGV4T3B0aW9ucyB9IGZyb20gJy4va2F0ZXgtb3B0aW9ucyc7XG5pbXBvcnQgeyBNYXJrZG93blNlcnZpY2UgfSBmcm9tICcuL21hcmtkb3duLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJpc21QbHVnaW4gfSBmcm9tICcuL3ByaXNtLXBsdWdpbic7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbWFya2Rvd24sIFttYXJrZG93bl0nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBNYXJrZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGRhdGE6IHN0cmluZztcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG5cbiAgLy8gUGx1Z2luIC0ga2F0ZXhcbiAgQElucHV0KClcbiAgZ2V0IGthdGV4KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fa2F0ZXg7IH1cbiAgc2V0IGthdGV4KHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX2thdGV4ID0gdGhpcy5jb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpOyB9XG4gIEBJbnB1dCgpIGthdGV4T3B0aW9uczogS2F0ZXhPcHRpb25zO1xuXG4gIC8vIFBsdWdpbiAtIGxpbmVOdW1iZXJzXG4gIEBJbnB1dCgpXG4gIGdldCBsaW5lTnVtYmVycygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2xpbmVOdW1iZXJzOyB9XG4gIHNldCBsaW5lTnVtYmVycyh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9saW5lTnVtYmVycyA9IHRoaXMuY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuICBASW5wdXQoKSBzdGFydDogbnVtYmVyO1xuXG4gIC8vIFBsdWdpbiAtIGxpbmVIaWdobGlnaHRcbiAgQElucHV0KClcbiAgZ2V0IGxpbmVIaWdobGlnaHQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9saW5lSGlnaGxpZ2h0OyB9XG4gIHNldCBsaW5lSGlnaGxpZ2h0KHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX2xpbmVIaWdobGlnaHQgPSB0aGlzLmNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cbiAgQElucHV0KCkgbGluZTogc3RyaW5nIHwgc3RyaW5nW107XG4gIEBJbnB1dCgpIGxpbmVPZmZzZXQ6IG51bWJlcjtcblxuICBAT3V0cHV0KCkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIHByaXZhdGUgX2thdGV4ID0gZmFsc2U7XG4gIHByaXZhdGUgX2xpbmVIaWdobGlnaHQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbGluZU51bWJlcnMgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHVibGljIG1hcmtkb3duU2VydmljZTogTWFya2Rvd25TZXJ2aWNlLFxuICApIHsgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmRhdGEgIT0gbnVsbCkge1xuICAgICAgdGhpcy5oYW5kbGVEYXRhKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnNyYyAhPSBudWxsKSB7XG4gICAgICB0aGlzLmhhbmRsZVNyYygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSAmJiAhdGhpcy5zcmMpIHtcbiAgICAgIHRoaXMuaGFuZGxlVHJhbnNjbHVzaW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKG1hcmtkb3duOiBzdHJpbmcsIGRlY29kZUh0bWwgPSBmYWxzZSkge1xuICAgIGxldCBjb21waWxlZCA9IHRoaXMubWFya2Rvd25TZXJ2aWNlLmNvbXBpbGUobWFya2Rvd24sIGRlY29kZUh0bWwpO1xuICAgIGNvbXBpbGVkID0gdGhpcy5rYXRleCA/IHRoaXMubWFya2Rvd25TZXJ2aWNlLnJlbmRlckthdGV4KGNvbXBpbGVkLCB0aGlzLmthdGV4T3B0aW9ucykgOiBjb21waWxlZDtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSBjb21waWxlZDtcbiAgICB0aGlzLmhhbmRsZVBsdWdpbnMoKTtcbiAgICB0aGlzLm1hcmtkb3duU2VydmljZS5oaWdobGlnaHQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMucmVhZHkuZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWU6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVEYXRhKCkge1xuICAgIHRoaXMucmVuZGVyKHRoaXMuZGF0YSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNyYygpIHtcbiAgICB0aGlzLm1hcmtkb3duU2VydmljZVxuICAgICAgLmdldFNvdXJjZSh0aGlzLnNyYylcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIG1hcmtkb3duID0+IHtcbiAgICAgICAgICB0aGlzLnJlbmRlcihtYXJrZG93bik7XG4gICAgICAgICAgdGhpcy5sb2FkLmVtaXQobWFya2Rvd24pO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvciA9PiB0aGlzLmVycm9yLmVtaXQoZXJyb3IpLFxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlVHJhbnNjbHVzaW9uKCkge1xuICAgIHRoaXMucmVuZGVyKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCwgdHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVBsdWdpbnMoKSB7XG4gICAgaWYgKHRoaXMubGluZUhpZ2hsaWdodCkge1xuICAgICAgdGhpcy5zZXRQbHVnaW5DbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgUHJpc21QbHVnaW4uTGluZUhpZ2hsaWdodCk7XG4gICAgICB0aGlzLnNldFBsdWdpbk9wdGlvbnModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHsgZGF0YUxpbmU6IHRoaXMubGluZSwgZGF0YUxpbmVPZmZzZXQ6IHRoaXMubGluZU9mZnNldCB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGluZU51bWJlcnMpIHtcbiAgICAgIHRoaXMuc2V0UGx1Z2luQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFByaXNtUGx1Z2luLkxpbmVOdW1iZXJzKTtcbiAgICAgIHRoaXMuc2V0UGx1Z2luT3B0aW9ucyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgeyBkYXRhU3RhcnQ6IHRoaXMuc3RhcnQgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRQbHVnaW5DbGFzcyhlbGVtZW50OiBIVE1MRWxlbWVudCwgcGx1Z2luOiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIGNvbnN0IHByZUVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBjbGFzc2VzID0gcGx1Z2luIGluc3RhbmNlb2YgQXJyYXkgPyBwbHVnaW4gOiBbcGx1Z2luXTtcbiAgICAgIHByZUVsZW1lbnRzLml0ZW0oaSkuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFBsdWdpbk9wdGlvbnMoZWxlbWVudDogSFRNTEVsZW1lbnQsIG9wdGlvbnM6IG9iamVjdCkge1xuICAgIGNvbnN0IHByZUVsZW1lbnRzID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdwcmUnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gb3B0aW9uc1tvcHRpb25dO1xuICAgICAgICBpZiAoISFhdHRyaWJ1dGVWYWx1ZSkge1xuICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZU5hbWUgPSB0aGlzLnRvTGlzcENhc2Uob3B0aW9uKTtcbiAgICAgICAgICBwcmVFbGVtZW50cy5pdGVtKGkpLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lLCBhdHRyaWJ1dGVWYWx1ZS50b1N0cmluZygpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0b0xpc3BDYXNlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCB1cHBlckNoYXJzID0gdmFsdWUubWF0Y2goLyhbQS1aXSkvZyk7XG4gICAgaWYgKCF1cHBlckNoYXJzKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuICAgIGxldCBzdHIgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgIGZvciAobGV0IGkgPSAwLCBuID0gdXBwZXJDaGFycy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAodXBwZXJDaGFyc1tpXSksICctJyArIHVwcGVyQ2hhcnNbaV0udG9Mb3dlckNhc2UoKSk7XG4gICAgfVxuICAgIGlmIChzdHIuc2xpY2UoMCwgMSkgPT09ICctJykge1xuICAgICAgc3RyID0gc3RyLnNsaWNlKDEpO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG4iXX0=