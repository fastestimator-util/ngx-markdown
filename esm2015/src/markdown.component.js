import { __decorate } from "tslib";
import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { MarkdownService } from './markdown.service';
import { PrismPlugin } from './prism-plugin';
let MarkdownComponent = class MarkdownComponent {
    constructor(element, markdownService) {
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
    // Plugin - emoji
    get emoji() { return this._emoji; }
    set emoji(value) { this._emoji = this.coerceBooleanProperty(value); }
    // Plugin - katex
    get katex() { return this._katex; }
    set katex(value) { this._katex = this.coerceBooleanProperty(value); }
    // Plugin - lineHighlight
    get lineHighlight() { return this._lineHighlight; }
    set lineHighlight(value) { this._lineHighlight = this.coerceBooleanProperty(value); }
    // Plugin - lineNumbers
    get lineNumbers() { return this._lineNumbers; }
    set lineNumbers(value) { this._lineNumbers = this.coerceBooleanProperty(value); }
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
    ngAfterViewInit() {
        if (!this.data && !this.src) {
            this.handleTransclusion();
        }
    }
    render(markdown, decodeHtml = false) {
        let compiled = this.markdownService.compile(markdown, decodeHtml, this.emoji);
        compiled = this.katex ? this.markdownService.renderKatex(compiled, this.katexOptions) : compiled;
        this.element.nativeElement.innerHTML = compiled;
        this.handlePlugins();
        this.markdownService.highlight(this.element.nativeElement);
        this.ready.emit();
    }
    coerceBooleanProperty(value) {
        return value != null && `${value}` !== 'false';
    }
    handleData() {
        this.render(this.data);
    }
    handleSrc() {
        this.markdownService
            .getSource(this.src)
            .subscribe(markdown => {
            this.render(markdown);
            this.load.emit(markdown);
        }, error => this.error.emit(error));
    }
    handleTransclusion() {
        this.render(this.element.nativeElement.innerHTML, true);
    }
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
    setPluginClass(element, plugin) {
        const preElements = element.querySelectorAll('pre');
        for (let i = 0; i < preElements.length; i++) {
            const classes = plugin instanceof Array ? plugin : [plugin];
            preElements.item(i).classList.add(...classes);
        }
    }
    setPluginOptions(element, options) {
        const preElements = element.querySelectorAll('pre');
        for (let i = 0; i < preElements.length; i++) {
            Object.keys(options).forEach(option => {
                const attributeValue = options[option];
                if (!!attributeValue) {
                    const attributeName = this.toLispCase(option);
                    preElements.item(i).setAttribute(attributeName, attributeValue.toString());
                }
            });
        }
    }
    toLispCase(value) {
        const upperChars = value.match(/([A-Z])/g);
        if (!upperChars) {
            return value;
        }
        let str = value.toString();
        for (let i = 0, n = upperChars.length; i < n; i++) {
            str = str.replace(new RegExp(upperChars[i]), '-' + upperChars[i].toLowerCase());
        }
        if (str.slice(0, 1) === '-') {
            str = str.slice(1);
        }
        return str;
    }
};
MarkdownComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: MarkdownService }
];
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
export { MarkdownComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hcmtkb3duLyIsInNvdXJjZXMiOlsic3JjL21hcmtkb3duLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUc3RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzdDLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBNEM1QixZQUNTLE9BQWdDLEVBQ2hDLGVBQWdDO1FBRGhDLFlBQU8sR0FBUCxPQUFPLENBQXlCO1FBQ2hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVp6QyxpQkFBaUI7UUFDUCxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNuQyxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNsQyxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztRQUVuQyxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2YsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBS3pCLENBQUM7SUFyQ0wsaUJBQWlCO0lBRWpCLElBQUksS0FBSyxLQUFjLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDNUMsSUFBSSxLQUFLLENBQUMsS0FBYyxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU5RSxpQkFBaUI7SUFFakIsSUFBSSxLQUFLLEtBQWMsT0FBTyxJQUFJLENBQUMs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QUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUU7WUFDM0IsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEI7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRixDQUFBOztZQXBHbUIsVUFBVTtZQUNGLGVBQWU7O0FBdkNoQztJQUFSLEtBQUssRUFBRTsrQ0FBYztBQUNiO0lBQVIsS0FBSyxFQUFFOzhDQUFhO0FBSXJCO0lBREMsS0FBSyxFQUFFOzhDQUNvQztBQUs1QztJQURDLEtBQUssRUFBRTs4Q0FDb0M7QUFFbkM7SUFBUixLQUFLLEVBQUU7dURBQTRCO0FBSXBDO0lBREMsS0FBSyxFQUFFO3NEQUNvRDtBQUVuRDtJQUFSLEtBQUssRUFBRTsrQ0FBeUI7QUFDeEI7SUFBUixLQUFLLEVBQUU7cURBQW9CO0FBSTVCO0lBREMsS0FBSyxFQUFFO29EQUNnRDtBQUUvQztJQUFSLEtBQUssRUFBRTtnREFBZTtBQUdiO0lBQVQsTUFBTSxFQUFFO2dEQUFvQztBQUNuQztJQUFULE1BQU0sRUFBRTsrQ0FBbUM7QUFDbEM7SUFBVCxNQUFNLEVBQUU7Z0RBQWtDO0FBckNoQyxpQkFBaUI7SUFMN0IsU0FBUyxDQUFDO1FBQ1QsOENBQThDO1FBQzlDLFFBQVEsRUFBRSxzQkFBc0I7UUFDaEMsUUFBUSxFQUFFLDJCQUEyQjtLQUN0QyxDQUFDO0dBQ1csaUJBQWlCLENBaUo3QjtTQWpKWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEthdGV4T3B0aW9ucyB9IGZyb20gJy4va2F0ZXgtb3B0aW9ucyc7XG5pbXBvcnQgeyBNYXJrZG93blNlcnZpY2UgfSBmcm9tICcuL21hcmtkb3duLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJpc21QbHVnaW4gfSBmcm9tICcuL3ByaXNtLXBsdWdpbic7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yOiAnbWFya2Rvd24sIFttYXJrZG93bl0nLFxuICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nLFxufSlcbmV4cG9ydCBjbGFzcyBNYXJrZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHJvdGVjdGVkIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9lbW9qaTogYm9vbGVhbiB8ICcnO1xuICBwcm90ZWN0ZWQgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2thdGV4OiBib29sZWFuIHwgJyc7XG4gIHByb3RlY3RlZCBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfbGluZUhpZ2hsaWdodDogYm9vbGVhbiB8ICcnO1xuICBwcm90ZWN0ZWQgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xpbmVOdW1iZXJzOiBib29sZWFuIHwgJyc7XG5cbiAgQElucHV0KCkgZGF0YTogc3RyaW5nO1xuICBASW5wdXQoKSBzcmM6IHN0cmluZztcblxuICAvLyBQbHVnaW4gLSBlbW9qaVxuICBASW5wdXQoKVxuICBnZXQgZW1vamkoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9lbW9qaTsgfVxuICBzZXQgZW1vamkodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fZW1vamkgPSB0aGlzLmNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cblxuICAvLyBQbHVnaW4gLSBrYXRleFxuICBASW5wdXQoKVxuICBnZXQga2F0ZXgoKTogYm9vbGVhbiB7IHJldHVybiB0aGlzLl9rYXRleDsgfVxuICBzZXQga2F0ZXgodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fa2F0ZXggPSB0aGlzLmNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7IH1cbiAgQElucHV0KCkga2F0ZXhPcHRpb25zOiBLYXRleE9wdGlvbnM7XG5cbiAgLy8gUGx1Z2luIC0gbGluZUhpZ2hsaWdodFxuICBASW5wdXQoKVxuICBnZXQgbGluZUhpZ2hsaWdodCgpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2xpbmVIaWdobGlnaHQ7IH1cbiAgc2V0IGxpbmVIaWdobGlnaHQodmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5fbGluZUhpZ2hsaWdodCA9IHRoaXMuY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuICBASW5wdXQoKSBsaW5lOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgQElucHV0KCkgbGluZU9mZnNldDogbnVtYmVyO1xuXG4gIC8vIFBsdWdpbiAtIGxpbmVOdW1iZXJzXG4gIEBJbnB1dCgpXG4gIGdldCBsaW5lTnVtYmVycygpOiBib29sZWFuIHsgcmV0dXJuIHRoaXMuX2xpbmVOdW1iZXJzOyB9XG4gIHNldCBsaW5lTnVtYmVycyh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLl9saW5lTnVtYmVycyA9IHRoaXMuY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuICBASW5wdXQoKSBzdGFydDogbnVtYmVyO1xuXG4gIC8vIEV2ZW50IGVtaXR0ZXJzXG4gIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgcHJpdmF0ZSBfZW1vamkgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfa2F0ZXggPSBmYWxzZTtcbiAgcHJpdmF0ZSBfbGluZUhpZ2hsaWdodCA9IGZhbHNlO1xuICBwcml2YXRlIF9saW5lTnVtYmVycyA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50OiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwdWJsaWMgbWFya2Rvd25TZXJ2aWNlOiBNYXJrZG93blNlcnZpY2UsXG4gICkgeyB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMuZGF0YSAhPSBudWxsKSB7XG4gICAgICB0aGlzLmhhbmRsZURhdGEoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3JjICE9IG51bGwpIHtcbiAgICAgIHRoaXMuaGFuZGxlU3JjKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICghdGhpcy5kYXRhICYmICF0aGlzLnNyYykge1xuICAgICAgdGhpcy5oYW5kbGVUcmFuc2NsdXNpb24oKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIobWFya2Rvd246IHN0cmluZywgZGVjb2RlSHRtbCA9IGZhbHNlKSB7XG4gICAgbGV0IGNvbXBpbGVkID0gdGhpcy5tYXJrZG93blNlcnZpY2UuY29tcGlsZShtYXJrZG93biwgZGVjb2RlSHRtbCwgdGhpcy5lbW9qaSk7XG4gICAgY29tcGlsZWQgPSB0aGlzLmthdGV4ID8gdGhpcy5tYXJrZG93blNlcnZpY2UucmVuZGVyS2F0ZXgoY29tcGlsZWQsIHRoaXMua2F0ZXhPcHRpb25zKSA6IGNvbXBpbGVkO1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IGNvbXBpbGVkO1xuICAgIHRoaXMuaGFuZGxlUGx1Z2lucygpO1xuICAgIHRoaXMubWFya2Rvd25TZXJ2aWNlLmhpZ2hsaWdodCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5yZWFkeS5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZTogYm9vbGVhbiB8ICcnKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgYCR7dmFsdWV9YCAhPT0gJ2ZhbHNlJztcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlRGF0YSgpIHtcbiAgICB0aGlzLnJlbmRlcih0aGlzLmRhdGEpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTcmMoKSB7XG4gICAgdGhpcy5tYXJrZG93blNlcnZpY2VcbiAgICAgIC5nZXRTb3VyY2UodGhpcy5zcmMpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICBtYXJrZG93biA9PiB7XG4gICAgICAgICAgdGhpcy5yZW5kZXIobWFya2Rvd24pO1xuICAgICAgICAgIHRoaXMubG9hZC5lbWl0KG1hcmtkb3duKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvci5lbWl0KGVycm9yKSxcbiAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVRyYW5zY2x1c2lvbigpIHtcbiAgICB0aGlzLnJlbmRlcih0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUwsIHRydWUpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVQbHVnaW5zKCkge1xuICAgIGlmICh0aGlzLmxpbmVIaWdobGlnaHQpIHtcbiAgICAgIHRoaXMuc2V0UGx1Z2luQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIFByaXNtUGx1Z2luLkxpbmVIaWdobGlnaHQpO1xuICAgICAgdGhpcy5zZXRQbHVnaW5PcHRpb25zKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB7IGRhdGFMaW5lOiB0aGlzLmxpbmUsIGRhdGFMaW5lT2Zmc2V0OiB0aGlzLmxpbmVPZmZzZXQgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxpbmVOdW1iZXJzKSB7XG4gICAgICB0aGlzLnNldFBsdWdpbkNsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBQcmlzbVBsdWdpbi5MaW5lTnVtYmVycyk7XG4gICAgICB0aGlzLnNldFBsdWdpbk9wdGlvbnModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHsgZGF0YVN0YXJ0OiB0aGlzLnN0YXJ0IH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0UGx1Z2luQ2xhc3MoZWxlbWVudDogSFRNTEVsZW1lbnQsIHBsdWdpbjogc3RyaW5nIHwgc3RyaW5nW10pIHtcbiAgICBjb25zdCBwcmVFbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgncHJlJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2xhc3NlcyA9IHBsdWdpbiBpbnN0YW5jZW9mIEFycmF5ID8gcGx1Z2luIDogW3BsdWdpbl07XG4gICAgICBwcmVFbGVtZW50cy5pdGVtKGkpLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRQbHVnaW5PcHRpb25zKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBvcHRpb25zOiBvYmplY3QpIHtcbiAgICBjb25zdCBwcmVFbGVtZW50cyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgncHJlJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmVFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGVWYWx1ZSA9IG9wdGlvbnNbb3B0aW9uXTtcbiAgICAgICAgaWYgKCEhYXR0cmlidXRlVmFsdWUpIHtcbiAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVOYW1lID0gdGhpcy50b0xpc3BDYXNlKG9wdGlvbik7XG4gICAgICAgICAgcHJlRWxlbWVudHMuaXRlbShpKS5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSwgYXR0cmlidXRlVmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdG9MaXNwQ2FzZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3QgdXBwZXJDaGFycyA9IHZhbHVlLm1hdGNoKC8oW0EtWl0pL2cpO1xuICAgIGlmICghdXBwZXJDaGFycykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBsZXQgc3RyID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICBmb3IgKGxldCBpID0gMCwgbiA9IHVwcGVyQ2hhcnMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBzdHIgPSBzdHIucmVwbGFjZShuZXcgUmVnRXhwKHVwcGVyQ2hhcnNbaV0pLCAnLScgKyB1cHBlckNoYXJzW2ldLnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgICBpZiAoc3RyLnNsaWNlKDAsIDEpID09PSAnLScpIHtcbiAgICAgIHN0ciA9IHN0ci5zbGljZSgxKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxufVxuIl19