/**
 * @fileoverview added by tsickle
 * Generated from: src/markdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { KatexOptions } from './katex-options';
import { MarkdownService } from './markdown.service';
import { PrismPlugin } from './prism-plugin';
var MarkdownComponent = /** @class */ (function () {
    function MarkdownComponent(element, markdownService) {
        this.element = element;
        this.markdownService = markdownService;
        this.error = new EventEmitter();
        this.load = new EventEmitter();
        this.ready = new EventEmitter();
        this._katex = false;
        this._lineHighlight = false;
        this._lineNumbers = false;
    }
    Object.defineProperty(MarkdownComponent.prototype, "katex", {
        // Plugin - katex
        get: 
        // Plugin - katex
        /**
         * @return {?}
         */
        function () { return this._katex; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._katex = this.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownComponent.prototype, "lineNumbers", {
        // Plugin - lineNumbers
        get: 
        // Plugin - lineNumbers
        /**
         * @return {?}
         */
        function () { return this._lineNumbers; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._lineNumbers = this.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownComponent.prototype, "lineHighlight", {
        // Plugin - lineHighlight
        get: 
        // Plugin - lineHighlight
        /**
         * @return {?}
         */
        function () { return this._lineHighlight; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._lineHighlight = this.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MarkdownComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.data != null) {
            this.handleData();
            return;
        }
        if (this.src != null) {
            this.handleSrc();
            return;
        }
    };
    /**
     * @return {?}
     */
    MarkdownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (!this.data && !this.src) {
            this.handleTransclusion();
        }
    };
    /**
     * @param {?} markdown
     * @param {?=} decodeHtml
     * @return {?}
     */
    MarkdownComponent.prototype.render = /**
     * @param {?} markdown
     * @param {?=} decodeHtml
     * @return {?}
     */
    function (markdown, decodeHtml) {
        if (decodeHtml === void 0) { decodeHtml = false; }
        /** @type {?} */
        var compiled = this.markdownService.compile(markdown, decodeHtml);
        compiled = this.katex ? this.markdownService.renderKatex(compiled, this.katexOptions) : compiled;
        this.element.nativeElement.innerHTML = compiled;
        this.handlePlugins();
        this.markdownService.highlight(this.element.nativeElement);
        this.ready.emit();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MarkdownComponent.prototype.coerceBooleanProperty = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value != null && "" + value !== 'false';
    };
    /**
     * @private
     * @return {?}
     */
    MarkdownComponent.prototype.handleData = /**
     * @private
     * @return {?}
     */
    function () {
        this.render(this.data);
    };
    /**
     * @private
     * @return {?}
     */
    MarkdownComponent.prototype.handleSrc = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.markdownService
            .getSource(this.src)
            .subscribe((/**
         * @param {?} markdown
         * @return {?}
         */
        function (markdown) {
            _this.render(markdown);
            _this.load.emit(markdown);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return _this.error.emit(error); }));
    };
    /**
     * @private
     * @return {?}
     */
    MarkdownComponent.prototype.handleTransclusion = /**
     * @private
     * @return {?}
     */
    function () {
        this.render(this.element.nativeElement.innerHTML, true);
    };
    /**
     * @private
     * @return {?}
     */
    MarkdownComponent.prototype.handlePlugins = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.lineHighlight) {
            this.setPluginClass(this.element.nativeElement, PrismPlugin.LineHighlight);
            this.setPluginOptions(this.element.nativeElement, { dataLine: this.line, dataLineOffset: this.lineOffset });
        }
        if (this.lineNumbers) {
            this.setPluginClass(this.element.nativeElement, PrismPlugin.LineNumbers);
            this.setPluginOptions(this.element.nativeElement, { dataStart: this.start });
        }
    };
    /**
     * @private
     * @param {?} element
     * @param {?} plugin
     * @return {?}
     */
    MarkdownComponent.prototype.setPluginClass = /**
     * @private
     * @param {?} element
     * @param {?} plugin
     * @return {?}
     */
    function (element, plugin) {
        var _a;
        /** @type {?} */
        var preElements = element.querySelectorAll('pre');
        for (var i = 0; i < preElements.length; i++) {
            /** @type {?} */
            var classes = plugin instanceof Array ? plugin : [plugin];
            (_a = preElements.item(i).classList).add.apply(_a, tslib_1.__spread(classes));
        }
    };
    /**
     * @private
     * @param {?} element
     * @param {?} options
     * @return {?}
     */
    MarkdownComponent.prototype.setPluginOptions = /**
     * @private
     * @param {?} element
     * @param {?} options
     * @return {?}
     */
    function (element, options) {
        var _this = this;
        /** @type {?} */
        var preElements = element.querySelectorAll('pre');
        var _loop_1 = function (i) {
            Object.keys(options).forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                /** @type {?} */
                var attributeValue = options[option];
                if (!!attributeValue) {
                    /** @type {?} */
                    var attributeName = _this.toLispCase(option);
                    preElements.item(i).setAttribute(attributeName, attributeValue.toString());
                }
            }));
        };
        for (var i = 0; i < preElements.length; i++) {
            _loop_1(i);
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MarkdownComponent.prototype.toLispCase = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var upperChars = value.match(/([A-Z])/g);
        if (!upperChars) {
            return value;
        }
        /** @type {?} */
        var str = value.toString();
        for (var i = 0, n = upperChars.length; i < n; i++) {
            str = str.replace(new RegExp(upperChars[i]), '-' + upperChars[i].toLowerCase());
        }
        if (str.slice(0, 1) === '-') {
            str = str.slice(1);
        }
        return str;
    };
    MarkdownComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'markdown, [markdown]',
                    template: '<ng-content></ng-content>'
                }] }
    ];
    /** @nocollapse */
    MarkdownComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: MarkdownService }
    ]; };
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
    return MarkdownComponent;
}());
export { MarkdownComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hcmtkb3duLyIsInNvdXJjZXMiOlsic3JjL21hcmtkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0csT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0M7SUFvQ0UsMkJBQ1MsT0FBZ0MsRUFDaEMsZUFBZ0M7UUFEaEMsWUFBTyxHQUFQLE9BQU8sQ0FBeUI7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBVi9CLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ25DLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ2xDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBRW5DLFdBQU0sR0FBRyxLQUFLLENBQUM7UUFDZixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixpQkFBWSxHQUFHLEtBQUssQ0FBQztJQUt6QixDQUFDO0lBN0JMLHNCQUNJLG9DQUFLO1FBRlQsaUJBQWlCOzs7Ozs7UUFDakIsY0FDdUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs7Ozs7UUFDNUMsVUFBVSxLQUFjLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzs7T0FEbEM7SUFLNUMsc0JBQ0ksMENBQVc7UUFGZix1QkFBdUI7Ozs7OztRQUN2QixjQUM2QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMs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LEtBQUssR0FBRyxFQUFFO1lBQzNCLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOztnQkF4SUYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsMkJBQTJCO2lCQUN0Qzs7OztnQkFWa0MsVUFBVTtnQkFHcEMsZUFBZTs7O3VCQVNyQixLQUFLO3NCQUNMLEtBQUs7d0JBR0wsS0FBSzsrQkFHTCxLQUFLOzhCQUdMLEtBQUs7d0JBR0wsS0FBSztnQ0FHTCxLQUFLO3VCQUdMLEtBQUs7NkJBQ0wsS0FBSzt3QkFFTCxNQUFNO3VCQUNOLE1BQU07d0JBQ04sTUFBTTs7SUEyR1Qsd0JBQUM7Q0FBQSxBQXpJRCxJQXlJQztTQXBJWSxpQkFBaUI7OztJQUM1QixpQ0FBc0I7O0lBQ3RCLGdDQUFxQjs7SUFNckIseUNBQW9DOztJQU1wQyxrQ0FBdUI7O0lBTXZCLGlDQUFpQzs7SUFDakMsdUNBQTRCOztJQUU1QixrQ0FBNkM7O0lBQzdDLGlDQUE0Qzs7SUFDNUMsa0NBQTJDOzs7OztJQUUzQyxtQ0FBdUI7Ozs7O0lBQ3ZCLDJDQUErQjs7Ozs7SUFDL0IseUNBQTZCOztJQUczQixvQ0FBdUM7O0lBQ3ZDLDRDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgS2F0ZXhPcHRpb25zIH0gZnJvbSAnLi9rYXRleC1vcHRpb25zJztcbmltcG9ydCB7IE1hcmtkb3duU2VydmljZSB9IGZyb20gJy4vbWFya2Rvd24uc2VydmljZSc7XG5pbXBvcnQgeyBQcmlzbVBsdWdpbiB9IGZyb20gJy4vcHJpc20tcGx1Z2luJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdtYXJrZG93biwgW21hcmtkb3duXScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG59KVxuZXhwb3J0IGNsYXNzIE1hcmtkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KCkgZGF0YTogc3RyaW5nO1xuICBASW5wdXQoKSBzcmM6IHN0cmluZztcblxuICAvLyBQbHVnaW4gLSBrYXRleFxuICBASW5wdXQoKVxuICBnZXQga2F0ZXgoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9rYXRleDsgfVxuICBzZXQga2F0ZXgodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fa2F0ZXggPSB0aGlzLmNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cbiAgQElucHV0KCkga2F0ZXhPcHRpb25zOiBLYXRleE9wdGlvbnM7XG5cbiAgLy8gUGx1Z2luIC0gbGluZU51bWJlcnNcbiAgQElucHV0KClcbiAgZ2V0IGxpbmVOdW1iZXJzKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fbGluZU51bWJlcnM7IH1cbiAgc2V0IGxpbmVOdW1iZXJzKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX2xpbmVOdW1iZXJzID0gdGhpcy5jb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpOyB9XG4gIEBJbnB1dCgpIHN0YXJ0OiBudW1iZXI7XG5cbiAgLy8gUGx1Z2luIC0gbGluZUhpZ2hsaWdodFxuICBASW5wdXQoKVxuICBnZXQgbGluZUhpZ2hsaWdodCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2xpbmVIaWdobGlnaHQ7IH1cbiAgc2V0IGxpbmVIaWdobGlnaHQodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fbGluZUhpZ2hsaWdodCA9IHRoaXMuY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuICBASW5wdXQoKSBsaW5lOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgQElucHV0KCkgbGluZU9mZnNldDogbnVtYmVyO1xuXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgcHJpdmF0ZSBfa2F0ZXggPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbGluZUhpZ2hsaWdodCA9IGZhbHNlO1xuICBwcml2YXRlIF9saW5lTnVtYmVycyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwdWJsaWMgbWFya2Rvd25TZXJ2aWNlOiBNYXJrZG93blNlcnZpY2UsXG4gICkgeyB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuZGF0YSAhPSBudWxsKSB7XG4gICAgICB0aGlzLmhhbmRsZURhdGEoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3JjICE9IG51bGwpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3JjKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICghdGhpcy5kYXRhICYmICF0aGlzLnNyYykge1xuICAgICAgdGhpcy5oYW5kbGVUcmFuc2NsdXNpb24oKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIobWFya2Rvd246IHN0cmluZywgZGVjb2RlSHRtbCA9IGZhbHNlKSB7XG4gICAgbGV0IGNvbXBpbGVkID0gdGhpcy5tYXJrZG93blNlcnZpY2UuY29tcGlsZShtYXJrZG93biwgZGVjb2RlSHRtbCk7XG4gICAgY29tcGlsZWQgPSB0aGlzLmthdGV4ID8gdGhpcy5tYXJrZG93blNlcnZpY2UucmVuZGVyS2F0ZXgoY29tcGlsZWQsIHRoaXMua2F0ZXhPcHRpb25zKSA6IGNvbXBpbGVkO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IGNvbXBpbGVkO1xuICAgIHRoaXMuaGFuZGxlUGx1Z2lucygpO1xuICAgIHRoaXMubWFya2Rvd25TZXJ2aWNlLmhpZ2hsaWdodCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5yZWFkeS5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZURhdGEoKSB7XG4gICAgdGhpcy5yZW5kZXIodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU3JjKCkge1xuICAgIHRoaXMubWFya2Rvd25TZXJ2aWNlXG4gICAgICAuZ2V0U291cmNlKHRoaXMuc3JjKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgbWFya2Rvd24gPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyKG1hcmtkb3duKTtcbiAgICAgICAgICB0aGlzLmxvYWQuZW1pdChtYXJrZG93bik7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3IuZW1pdChlcnJvciksXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVUcmFuc2NsdXNpb24oKSB7XG4gICAgdGhpcy5yZW5kZXIodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MLCB0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUGx1Z2lucygpIHtcbiAgICBpZiAodGhpcy5saW5lSGlnaGxpZ2h0KSB7XG4gICAgICB0aGlzLnNldFBsdWdpbkNsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBQcmlzbVBsdWdpbi5MaW5lSGlnaGxpZ2h0KTtcbiAgICAgIHRoaXMuc2V0UGx1Z2luT3B0aW9ucyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgeyBkYXRhTGluZTogdGhpcy5saW5lLCBkYXRhTGluZU9mZnNldDogdGhpcy5saW5lT2Zmc2V0IH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5saW5lTnVtYmVycykge1xuICAgICAgdGhpcy5zZXRQbHVnaW5DbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgUHJpc21QbHVnaW4uTGluZU51bWJlcnMpO1xuICAgICAgdGhpcy5zZXRQbHVnaW5PcHRpb25zKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB7IGRhdGFTdGFydDogdGhpcy5zdGFydCB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFBsdWdpbkNsYXNzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwbHVnaW46IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcHJlRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBwbHVnaW4gaW5zdGFuY2VvZiBBcnJheSA/IHBsdWdpbiA6IFtwbHVnaW5dO1xuICAgICAgcHJlRWxlbWVudHMuaXRlbShpKS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0UGx1Z2luT3B0aW9ucyhlbGVtZW50OiBIVE1MRWxlbWVudCwgb3B0aW9uczogb2JqZWN0KSB7XG4gICAgY29uc3QgcHJlRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBvcHRpb25zW29wdGlvbl07XG4gICAgICAgIGlmICghIWF0dHJpYnV0ZVZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IHRoaXMudG9MaXNwQ2FzZShvcHRpb24pO1xuICAgICAgICAgIHByZUVsZW1lbnRzLml0ZW0oaSkuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRvTGlzcENhc2UodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IHVwcGVyQ2hhcnMgPSB2YWx1ZS5tYXRjaCgvKFtBLVpdKS9nKTtcbiAgICBpZiAoIXVwcGVyQ2hhcnMpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgbGV0IHN0ciA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB1cHBlckNoYXJzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cCh1cHBlckNoYXJzW2ldKSwgJy0nICsgdXBwZXJDaGFyc1tpXS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgaWYgKHN0ci5zbGljZSgwLCAxKSA9PT0gJy0nKSB7XG4gICAgICBzdHIgPSBzdHIuc2xpY2UoMSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cbiJdfQ==