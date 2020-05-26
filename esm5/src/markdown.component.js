import { __decorate, __read, __spread } from "tslib";
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { MarkdownService } from './markdown.service';
import { PrismPlugin } from './prism-plugin';
var MarkdownComponent = /** @class */ (function () {
    function MarkdownComponent(element, markdownService) {
        this.element = element;
        this.markdownService = markdownService;
        // Event emitters
        this.error = new EventEmitter();
        this.load = new EventEmitter();
        this.ready = new EventEmitter();
        this._emoji = false;
        this._katex = false;
        this._lineHighlight = false;
        this._lineNumbers = false;
    }
    Object.defineProperty(MarkdownComponent.prototype, "emoji", {
        // Plugin - emoji
        get: function () { return this._emoji; },
        set: function (value) { this._emoji = this.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownComponent.prototype, "katex", {
        // Plugin - katex
        get: function () { return this._katex; },
        set: function (value) { this._katex = this.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownComponent.prototype, "lineHighlight", {
        // Plugin - lineHighlight
        get: function () { return this._lineHighlight; },
        set: function (value) { this._lineHighlight = this.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownComponent.prototype, "lineNumbers", {
        // Plugin - lineNumbers
        get: function () { return this._lineNumbers; },
        set: function (value) { this._lineNumbers = this.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    MarkdownComponent.prototype.ngOnChanges = function () {
        if (this.data != null) {
            this.handleData();
            return;
        }
        if (this.src != null) {
            this.handleSrc();
            return;
        }
    };
    MarkdownComponent.prototype.ngAfterViewInit = function () {
        if (!this.data && !this.src) {
            this.handleTransclusion();
        }
    };
    MarkdownComponent.prototype.render = function (markdown, decodeHtml) {
        if (decodeHtml === void 0) { decodeHtml = false; }
        var compiled = this.markdownService.compile(markdown, decodeHtml, this.emoji);
        compiled = this.katex ? this.markdownService.renderKatex(compiled, this.katexOptions) : compiled;
        this.element.nativeElement.innerHTML = compiled;
        this.handlePlugins();
        this.markdownService.highlight(this.element.nativeElement);
        this.ready.emit();
    };
    MarkdownComponent.prototype.coerceBooleanProperty = function (value) {
        return value != null && "" + value !== 'false';
    };
    MarkdownComponent.prototype.handleData = function () {
        this.render(this.data);
    };
    MarkdownComponent.prototype.handleSrc = function () {
        var _this = this;
        this.markdownService
            .getSource(this.src)
            .subscribe(function (markdown) {
            _this.render(markdown);
            _this.load.emit(markdown);
        }, function (error) { return _this.error.emit(error); });
    };
    MarkdownComponent.prototype.handleTransclusion = function () {
        this.render(this.element.nativeElement.innerHTML, true);
    };
    MarkdownComponent.prototype.handlePlugins = function () {
        if (this.lineHighlight) {
            this.setPluginClass(this.element.nativeElement, PrismPlugin.LineHighlight);
            this.setPluginOptions(this.element.nativeElement, { dataLine: this.line, dataLineOffset: this.lineOffset });
        }
        if (this.lineNumbers) {
            this.setPluginClass(this.element.nativeElement, PrismPlugin.LineNumbers);
            this.setPluginOptions(this.element.nativeElement, { dataStart: this.start });
        }
    };
    MarkdownComponent.prototype.setPluginClass = function (element, plugin) {
        var _a;
        var preElements = element.querySelectorAll('pre');
        for (var i = 0; i < preElements.length; i++) {
            var classes = plugin instanceof Array ? plugin : [plugin];
            (_a = preElements.item(i).classList).add.apply(_a, __spread(classes));
        }
    };
    MarkdownComponent.prototype.setPluginOptions = function (element, options) {
        var _this = this;
        var preElements = element.querySelectorAll('pre');
        var _loop_1 = function (i) {
            Object.keys(options).forEach(function (option) {
                var attributeValue = options[option];
                if (!!attributeValue) {
                    var attributeName = _this.toLispCase(option);
                    preElements.item(i).setAttribute(attributeName, attributeValue.toString());
                }
            });
        };
        for (var i = 0; i < preElements.length; i++) {
            _loop_1(i);
        }
    };
    MarkdownComponent.prototype.toLispCase = function (value) {
        var upperChars = value.match(/([A-Z])/g);
        if (!upperChars) {
            return value;
        }
        var str = value.toString();
        for (var i = 0, n = upperChars.length; i < n; i++) {
            str = str.replace(new RegExp(upperChars[i]), '-' + upperChars[i].toLowerCase());
        }
        if (str.slice(0, 1) === '-') {
            str = str.slice(1);
        }
        return str;
    };
    MarkdownComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: MarkdownService }
    ]; };
    __decorate([
        Input()
    ], MarkdownComponent.prototype, "data", void 0);
    __decorate([
        Input()
    ], MarkdownComponent.prototype, "src", void 0);
    __decorate([
        Input()
    ], MarkdownComponent.prototype, "emoji", null);
    __decorate([
        Input()
    ], MarkdownComponent.prototype, "katex", null);
    __decorate([
        Input()
    ], MarkdownComponent.prototype, "katexOptions", void 0);
    __decorate([
        Input()
    ], MarkdownComponent.prototype, "lineHighlight", null);
    __decorate([
        Input()
    ], MarkdownComponent.prototype, "line", void 0);
    __decorate([
        Input()
    ], MarkdownComponent.prototype, "lineOffset", void 0);
    __decorate([
        Input()
    ], MarkdownComponent.prototype, "lineNumbers", null);
    __decorate([
        Input()
    ], MarkdownComponent.prototype, "start", void 0);
    __decorate([
        Output()
    ], MarkdownComponent.prototype, "error", void 0);
    __decorate([
        Output()
    ], MarkdownComponent.prototype, "load", void 0);
    __decorate([
        Output()
    ], MarkdownComponent.prototype, "ready", void 0);
    MarkdownComponent = __decorate([
        Component({
            // tslint:disable-next-line:component-selector
            selector: 'markdown, [markdown]',
            template: '<ng-content></ng-content>'
        })
    ], MarkdownComponent);
    return MarkdownComponent;
}());
export { MarkdownComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hcmtkb3duLyIsInNvdXJjZXMiOlsic3JjL21hcmtkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzdDO0lBNENFLDJCQUNTLE9BQWdDLEVBQ2hDLGVBQWdDO1FBRGhDLFlBQU8sR0FBUCxPQUFPLENBQXlCO1FBQ2hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVp6QyxpQkFBaUI7UUFDUCxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNuQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNsQyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUVuQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBS3pCLENBQUM7SUFuQ0wsc0JBQUksb0NBQUs7UUFGVCxpQkFBaUI7YUFFakIsY0FBdUIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzthQUM1QyxVQUFVLEtBQWMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7OztPQURsQztJQUs1QyxzQkFBSSxvQ0FBSztRQUZULGlCQUFpQjthQUVqQixjQUF1QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxD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LE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDakY7UUFDRCxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtZQUMzQixHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7Z0JBbkdpQixVQUFVO2dCQUNGLGVBQWU7O0lBdkNoQztRQUFSLEtBQUssRUFBRTttREFBYztJQUNiO1FBQVIsS0FBSyxFQUFFO2tEQUFhO0lBSXJCO1FBREMsS0FBSyxFQUFFO2tEQUNvQztJQUs1QztRQURDLEtBQUssRUFBRTtrREFDb0M7SUFFbkM7UUFBUixLQUFLLEVBQUU7MkRBQTRCO0lBSXBDO1FBREMsS0FBSyxFQUFFOzBEQUNvRDtJQUVuRDtRQUFSLEtBQUssRUFBRTttREFBeUI7SUFDeEI7UUFBUixLQUFLLEVBQUU7eURBQW9CO0lBSTVCO1FBREMsS0FBSyxFQUFFO3dEQUNnRDtJQUUvQztRQUFSLEtBQUssRUFBRTtvREFBZTtJQUdiO1FBQVQsTUFBTSxFQUFFO29EQUFvQztJQUNuQztRQUFULE1BQU0sRUFBRTttREFBbUM7SUFDbEM7UUFBVCxNQUFNLEVBQUU7b0RBQWtDO0lBckNoQyxpQkFBaUI7UUFMN0IsU0FBUyxDQUFDO1lBQ1QsOENBQThDO1lBQzlDLFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsUUFBUSxFQUFFLDJCQUEyQjtTQUN0QyxDQUFDO09BQ1csaUJBQWlCLENBaUo3QjtJQUFELHdCQUFDO0NBQUEsQUFqSkQsSUFpSkM7U0FqSlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBLYXRleE9wdGlvbnMgfSBmcm9tICcuL2thdGV4LW9wdGlvbnMnO1xuaW1wb3J0IHsgTWFya2Rvd25TZXJ2aWNlIH0gZnJvbSAnLi9tYXJrZG93bi5zZXJ2aWNlJztcbmltcG9ydCB7IFByaXNtUGx1Z2luIH0gZnJvbSAnLi9wcmlzbS1wbHVnaW4nO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ21hcmtkb3duLCBbbWFya2Rvd25dJyxcbiAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+Jyxcbn0pXG5leHBvcnQgY2xhc3MgTWFya2Rvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xuXG4gIHByb3RlY3RlZCBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZW1vamk6IGJvb2xlYW4gfCAnJztcbiAgcHJvdGVjdGVkIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9rYXRleDogYm9vbGVhbiB8ICcnO1xuICBwcm90ZWN0ZWQgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xpbmVIaWdobGlnaHQ6IGJvb2xlYW4gfCAnJztcbiAgcHJvdGVjdGVkIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9saW5lTnVtYmVyczogYm9vbGVhbiB8ICcnO1xuXG4gIEBJbnB1dCgpIGRhdGE6IHN0cmluZztcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG5cbiAgLy8gUGx1Z2luIC0gZW1vamlcbiAgQElucHV0KClcbiAgZ2V0IGVtb2ppKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fZW1vamk7IH1cbiAgc2V0IGVtb2ppKHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX2Vtb2ppID0gdGhpcy5jb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpOyB9XG5cbiAgLy8gUGx1Z2luIC0ga2F0ZXhcbiAgQElucHV0KClcbiAgZ2V0IGthdGV4KCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5fa2F0ZXg7IH1cbiAgc2V0IGthdGV4KHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX2thdGV4ID0gdGhpcy5jb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpOyB9XG4gIEBJbnB1dCgpIGthdGV4T3B0aW9uczogS2F0ZXhPcHRpb25zO1xuXG4gIC8vIFBsdWdpbiAtIGxpbmVIaWdobGlnaHRcbiAgQElucHV0KClcbiAgZ2V0IGxpbmVIaWdobGlnaHQoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9saW5lSGlnaGxpZ2h0OyB9XG4gIHNldCBsaW5lSGlnaGxpZ2h0KHZhbHVlOiBib29sZWFuKSB7IHRoaXMuX2xpbmVIaWdobGlnaHQgPSB0aGlzLmNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cbiAgQElucHV0KCkgbGluZTogc3RyaW5nIHwgc3RyaW5nW107XG4gIEBJbnB1dCgpIGxpbmVPZmZzZXQ6IG51bWJlcjtcblxuICAvLyBQbHVnaW4gLSBsaW5lTnVtYmVyc1xuICBASW5wdXQoKVxuICBnZXQgbGluZU51bWJlcnMoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9saW5lTnVtYmVyczsgfVxuICBzZXQgbGluZU51bWJlcnModmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fbGluZU51bWJlcnMgPSB0aGlzLmNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cbiAgQElucHV0KCkgc3RhcnQ6IG51bWJlcjtcblxuICAvLyBFdmVudCBlbWl0dGVyc1xuICBAT3V0cHV0KCkgZXJyb3IgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIHByaXZhdGUgX2Vtb2ppID0gZmFsc2U7XG4gIHByaXZhdGUgX2thdGV4ID0gZmFsc2U7XG4gIHByaXZhdGUgX2xpbmVIaWdobGlnaHQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbGluZU51bWJlcnMgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHVibGljIG1hcmtkb3duU2VydmljZTogTWFya2Rvd25TZXJ2aWNlLFxuICApIHsgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmRhdGEgIT0gbnVsbCkge1xuICAgICAgdGhpcy5oYW5kbGVEYXRhKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnNyYyAhPSBudWxsKSB7XG4gICAgICB0aGlzLmhhbmRsZVNyYygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YSAmJiAhdGhpcy5zcmMpIHtcbiAgICAgIHRoaXMuaGFuZGxlVHJhbnNjbHVzaW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKG1hcmtkb3duOiBzdHJpbmcsIGRlY29kZUh0bWwgPSBmYWxzZSkge1xuICAgIGxldCBjb21waWxlZCA9IHRoaXMubWFya2Rvd25TZXJ2aWNlLmNvbXBpbGUobWFya2Rvd24sIGRlY29kZUh0bWwsIHRoaXMuZW1vamkpO1xuICAgIGNvbXBpbGVkID0gdGhpcy5rYXRleCA/IHRoaXMubWFya2Rvd25TZXJ2aWNlLnJlbmRlckthdGV4KGNvbXBpbGVkLCB0aGlzLmthdGV4T3B0aW9ucykgOiBjb21waWxlZDtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSBjb21waWxlZDtcbiAgICB0aGlzLmhhbmRsZVBsdWdpbnMoKTtcbiAgICB0aGlzLm1hcmtkb3duU2VydmljZS5oaWdobGlnaHQodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMucmVhZHkuZW1pdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWU6IGJvb2xlYW4gfCAnJyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZURhdGEoKSB7XG4gICAgdGhpcy5yZW5kZXIodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU3JjKCkge1xuICAgIHRoaXMubWFya2Rvd25TZXJ2aWNlXG4gICAgICAuZ2V0U291cmNlKHRoaXMuc3JjKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgbWFya2Rvd24gPT4ge1xuICAgICAgICAgIHRoaXMucmVuZGVyKG1hcmtkb3duKTtcbiAgICAgICAgICB0aGlzLmxvYWQuZW1pdChtYXJrZG93bik7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yID0+IHRoaXMuZXJyb3IuZW1pdChlcnJvciksXG4gICAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVUcmFuc2NsdXNpb24oKSB7XG4gICAgdGhpcy5yZW5kZXIodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MLCB0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlUGx1Z2lucygpIHtcbiAgICBpZiAodGhpcy5saW5lSGlnaGxpZ2h0KSB7XG4gICAgICB0aGlzLnNldFBsdWdpbkNsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBQcmlzbVBsdWdpbi5MaW5lSGlnaGxpZ2h0KTtcbiAgICAgIHRoaXMuc2V0UGx1Z2luT3B0aW9ucyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgeyBkYXRhTGluZTogdGhpcy5saW5lLCBkYXRhTGluZU9mZnNldDogdGhpcy5saW5lT2Zmc2V0IH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5saW5lTnVtYmVycykge1xuICAgICAgdGhpcy5zZXRQbHVnaW5DbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgUHJpc21QbHVnaW4uTGluZU51bWJlcnMpO1xuICAgICAgdGhpcy5zZXRQbHVnaW5PcHRpb25zKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB7IGRhdGFTdGFydDogdGhpcy5zdGFydCB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFBsdWdpbkNsYXNzKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwbHVnaW46IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgcHJlRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGNsYXNzZXMgPSBwbHVnaW4gaW5zdGFuY2VvZiBBcnJheSA/IHBsdWdpbiA6IFtwbHVnaW5dO1xuICAgICAgcHJlRWxlbWVudHMuaXRlbShpKS5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0UGx1Z2luT3B0aW9ucyhlbGVtZW50OiBIVE1MRWxlbWVudCwgb3B0aW9uczogb2JqZWN0KSB7XG4gICAgY29uc3QgcHJlRWxlbWVudHMgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3ByZScpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJlRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBvcHRpb25zW29wdGlvbl07XG4gICAgICAgIGlmICghIWF0dHJpYnV0ZVZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgYXR0cmlidXRlTmFtZSA9IHRoaXMudG9MaXNwQ2FzZShvcHRpb24pO1xuICAgICAgICAgIHByZUVsZW1lbnRzLml0ZW0oaSkuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUsIGF0dHJpYnV0ZVZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRvTGlzcENhc2UodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IHVwcGVyQ2hhcnMgPSB2YWx1ZS5tYXRjaCgvKFtBLVpdKS9nKTtcbiAgICBpZiAoIXVwcGVyQ2hhcnMpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgbGV0IHN0ciA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgZm9yIChsZXQgaSA9IDAsIG4gPSB1cHBlckNoYXJzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UobmV3IFJlZ0V4cCh1cHBlckNoYXJzW2ldKSwgJy0nICsgdXBwZXJDaGFyc1tpXS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG4gICAgaWYgKHN0ci5zbGljZSgwLCAxKSA9PT0gJy0nKSB7XG4gICAgICBzdHIgPSBzdHIuc2xpY2UoMSk7XG4gICAgfVxuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cbiJdfQ==