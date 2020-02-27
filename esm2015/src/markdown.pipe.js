/**
 * @fileoverview added by tsickle
 * Generated from: src/markdown.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, NgZone, Pipe } from '@angular/core';
import { first } from 'rxjs/operators';
import { MarkdownService } from './markdown.service';
export class MarkdownPipe {
    /**
     * @param {?} elementRef
     * @param {?} markdownService
     * @param {?} zone
     */
    constructor(elementRef, markdownService, zone) {
        this.elementRef = elementRef;
        this.markdownService = markdownService;
        this.zone = zone;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        if (value == null) {
            return '';
        }
        if (typeof value !== 'string') {
            console.error(`MarkdownPipe has been invoked with an invalid value type [${value}]`);
            return value;
        }
        /** @type {?} */
        const markdown = this.markdownService.compile(value);
        this.zone.onStable
            .pipe(first())
            .subscribe((/**
         * @return {?}
         */
        () => this.markdownService.highlight(this.elementRef.nativeElement)));
        return markdown;
    }
}
MarkdownPipe.decorators = [
    { type: Pipe, args: [{
                name: 'markdown',
            },] }
];
/** @nocollapse */
MarkdownPipe.ctorParameters = () => [
    { type: ElementRef },
    { type: MarkdownService },
    { type: NgZone }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXJrZG93bi8iLCJzb3VyY2VzIjpbInNyYy9tYXJrZG93bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS3JELE1BQU0sT0FBTyxZQUFZOzs7Ozs7SUFFdkIsWUFDVSxVQUFtQyxFQUNuQyxlQUFnQyxFQUNoQyxJQUFZO1FBRlosZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFNBQUksR0FBSixJQUFJLENBQVE7SUFDbEIsQ0FBQzs7Ozs7SUFFTCxTQUFTLENBQUMsS0FBYTtRQUNyQixJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDakIsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkRBQTZELEtBQUssR0FBRyxDQUFDLENBQUM7WUFDckYsT0FBTyxLQUFLLENBQUM7U0FDZDs7Y0FFSyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBRXBELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTthQUNmLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNiLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUMsQ0FBQztRQUVsRixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDOzs7WUE1QkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxVQUFVO2FBQ2pCOzs7O1lBUFEsVUFBVTtZQUdWLGVBQWU7WUFISCxNQUFNOzs7Ozs7O0lBV3ZCLGtDQUEyQzs7Ozs7SUFDM0MsdUNBQXdDOzs7OztJQUN4Qyw0QkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBOZ1pvbmUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZpcnN0IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBNYXJrZG93blNlcnZpY2UgfSBmcm9tICcuL21hcmtkb3duLnNlcnZpY2UnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdtYXJrZG93bicsXG59KVxuZXhwb3J0IGNsYXNzIE1hcmtkb3duUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJpdmF0ZSBtYXJrZG93blNlcnZpY2U6IE1hcmtkb3duU2VydmljZSxcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgKSB7IH1cblxuICB0cmFuc2Zvcm0odmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgY29uc29sZS5lcnJvcihgTWFya2Rvd25QaXBlIGhhcyBiZWVuIGludm9rZWQgd2l0aCBhbiBpbnZhbGlkIHZhbHVlIHR5cGUgWyR7dmFsdWV9XWApO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IG1hcmtkb3duID0gdGhpcy5tYXJrZG93blNlcnZpY2UuY29tcGlsZSh2YWx1ZSk7XG5cbiAgICB0aGlzLnpvbmUub25TdGFibGVcbiAgICAgIC5waXBlKGZpcnN0KCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMubWFya2Rvd25TZXJ2aWNlLmhpZ2hsaWdodCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkpO1xuXG4gICAgcmV0dXJuIG1hcmtkb3duO1xuICB9XG59XG4iXX0=