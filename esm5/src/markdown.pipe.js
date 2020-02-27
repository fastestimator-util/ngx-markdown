/**
 * @fileoverview added by tsickle
 * Generated from: src/markdown.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, NgZone, Pipe } from '@angular/core';
import { first } from 'rxjs/operators';
import { MarkdownService } from './markdown.service';
var MarkdownPipe = /** @class */ (function () {
    function MarkdownPipe(elementRef, markdownService, zone) {
        this.elementRef = elementRef;
        this.markdownService = markdownService;
        this.zone = zone;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    MarkdownPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (value == null) {
            return '';
        }
        if (typeof value !== 'string') {
            console.error("MarkdownPipe has been invoked with an invalid value type [" + value + "]");
            return value;
        }
        /** @type {?} */
        var markdown = this.markdownService.compile(value);
        this.zone.onStable
            .pipe(first())
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.markdownService.highlight(_this.elementRef.nativeElement); }));
        return markdown;
    };
    MarkdownPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'markdown',
                },] }
    ];
    /** @nocollapse */
    MarkdownPipe.ctorParameters = function () { return [
        { type: ElementRef },
        { type: MarkdownService },
        { type: NgZone }
    ]; };
    return MarkdownPipe;
}());
export { MarkdownPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    MarkdownPipe.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    MarkdownPipe.prototype.markdownService;
    /**
     * @type {?}
     * @private
     */
    MarkdownPipe.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXJrZG93bi8iLCJzb3VyY2VzIjpbInNyYy9tYXJrZG93bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJEO0lBS0Usc0JBQ1UsVUFBbUMsRUFDbkMsZUFBZ0MsRUFDaEMsSUFBWTtRQUZaLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxTQUFJLEdBQUosSUFBSSxDQUFRO0lBQ2xCLENBQUM7Ozs7O0lBRUwsZ0NBQVM7Ozs7SUFBVCxVQUFVLEtBQWE7UUFBdkIsaUJBaUJDO1FBaEJDLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNqQixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxDQUFDLEtBQUssQ0FBQywrREFBNkQsS0FBSyxNQUFHLENBQUMsQ0FBQztZQUNyRixPQUFPLEtBQUssQ0FBQztTQUNkOztZQUVLLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFFcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO2FBQ2YsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ2IsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQTdELENBQTZELEVBQUMsQ0FBQztRQUVsRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOztnQkE1QkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxVQUFVO2lCQUNqQjs7OztnQkFQUSxVQUFVO2dCQUdWLGVBQWU7Z0JBSEgsTUFBTTs7SUFrQzNCLG1CQUFDO0NBQUEsQUE3QkQsSUE2QkM7U0ExQlksWUFBWTs7Ozs7O0lBR3JCLGtDQUEyQzs7Ozs7SUFDM0MsdUNBQXdDOzs7OztJQUN4Qyw0QkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBOZ1pvbmUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBNYXJrZG93blNlcnZpY2UgfSBmcm9tICcuL21hcmtkb3duLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdtYXJrZG93bicsXG59KVxuZXhwb3J0IGNsYXNzIE1hcmtkb3duUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBtYXJrZG93blNlcnZpY2U6IE1hcmtkb3duU2VydmljZSxcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgKSB7IH1cblxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgY29uc29sZS5lcnJvcihgTWFya2Rvd25QaXBlIGhhcyBiZWVuIGludm9rZWQgd2l0aCBhbiBpbnZhbGlkIHZhbHVlIHR5cGUgWyR7dmFsdWV9XWApO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5tYXJrZG93blNlcnZpY2UuY29tcGlsZSh2YWx1ZSk7XG5cbiAgICB0aGlzLnpvbmUub25TdGFibGVcbiAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMubWFya2Rvd25TZXJ2aWNlLmhpZ2hsaWdodCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duO1xuICB9XG59XG4iXX0=