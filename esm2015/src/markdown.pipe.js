import { __decorate } from "tslib";
import { ElementRef, NgZone, Pipe, PipeTransform } from '@angular/core';
import { first } from 'rxjs/operators';
import { MarkdownService } from './markdown.service';
let MarkdownPipe = class MarkdownPipe {
    constructor(elementRef, markdownService, zone) {
        this.elementRef = elementRef;
        this.markdownService = markdownService;
        this.zone = zone;
    }
    transform(value) {
        if (value == null) {
            return '';
        }
        if (typeof value !== 'string') {
            console.error(`MarkdownPipe has been invoked with an invalid value type [${value}]`);
            return value;
        }
        const markdown = this.markdownService.compile(value);
        this.zone.onStable
            .pipe(first())
            .subscribe(() => this.markdownService.highlight(this.elementRef.nativeElement));
        return markdown;
    }
};
MarkdownPipe.ctorParameters = () => [
    { type: ElementRef },
    { type: MarkdownService },
    { type: NgZone }
];
MarkdownPipe = __decorate([
    Pipe({
        name: 'markdown',
    })
], MarkdownPipe);
export { MarkdownPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24ucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXJrZG93bi8iLCJzb3VyY2VzIjpbInNyYy9tYXJrZG93bi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFLckQsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUV2QixZQUNVLFVBQW1DLEVBQ25DLGVBQWdDLEVBQ2hDLElBQVk7UUFGWixlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUNsQixDQUFDO0lBRUwsU0FBUyxDQUFDLEtBQWE7UUFDckIsSUFBSSxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2pCLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixPQUFPLENBQUMsS0FBSyxDQUFDLDZEQUE2RCxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBQ3JGLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVyRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7YUFDZixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDYixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBRWxGLE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FDRixDQUFBOztZQXZCdUIsVUFBVTtZQUNMLGVBQWU7WUFDMUIsTUFBTTs7QUFMWCxZQUFZO0lBSHhCLElBQUksQ0FBQztRQUNKLElBQUksRUFBRSxVQUFVO0tBQ2pCLENBQUM7R0FDVyxZQUFZLENBMEJ4QjtTQTFCWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgTmdab25lLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTWFya2Rvd25TZXJ2aWNlIH0gZnJvbSAnLi9tYXJrZG93bi5zZXJ2aWNlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbWFya2Rvd24nLFxufSlcbmV4cG9ydCBjbGFzcyBNYXJrZG93blBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+LFxuICAgIHByaXZhdGUgbWFya2Rvd25TZXJ2aWNlOiBNYXJrZG93blNlcnZpY2UsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICkgeyB9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYE1hcmtkb3duUGlwZSBoYXMgYmVlbiBpbnZva2VkIHdpdGggYW4gaW52YWxpZCB2YWx1ZSB0eXBlIFske3ZhbHVlfV1gKTtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXJrZG93biA9IHRoaXMubWFya2Rvd25TZXJ2aWNlLmNvbXBpbGUodmFsdWUpO1xuXG4gICAgdGhpcy56b25lLm9uU3RhYmxlXG4gICAgICAucGlwZShmaXJzdCgpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLm1hcmtkb3duU2VydmljZS5oaWdobGlnaHQodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpKTtcblxuICAgIHJldHVybiBtYXJrZG93bjtcbiAgfVxufVxuIl19