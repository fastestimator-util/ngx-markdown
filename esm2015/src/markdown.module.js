/**
 * @fileoverview added by tsickle
 * Generated from: src/markdown.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { LanguagePipe } from './language.pipe';
import { MarkdownComponent } from './markdown.component';
import { MarkdownPipe } from './markdown.pipe';
import { MarkdownService } from './markdown.service';
import { MarkedOptions } from './marked-options';
/**
 * @record
 */
export function MarkdownModuleConfig() { }
if (false) {
    /** @type {?|undefined} */
    MarkdownModuleConfig.prototype.loader;
    /** @type {?|undefined} */
    MarkdownModuleConfig.prototype.markedOptions;
}
const ɵ0 = {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
};
/** @type {?} */
export const initialMarkedOptions = {
    provide: MarkedOptions,
    useValue: ɵ0,
};
/** @type {?} */
const sharedDeclarations = [
    LanguagePipe,
    MarkdownComponent,
    MarkdownPipe,
];
export class MarkdownModule {
    /**
     * @param {?=} markdownModuleConfig
     * @return {?}
     */
    static forRoot(markdownModuleConfig) {
        return {
            ngModule: MarkdownModule,
            providers: [
                MarkdownService,
                markdownModuleConfig && markdownModuleConfig.loader || [],
                markdownModuleConfig && markdownModuleConfig.markedOptions || initialMarkedOptions,
            ],
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: MarkdownModule,
        };
    }
}
MarkdownModule.decorators = [
    { type: NgModule, args: [{
                exports: sharedDeclarations,
                declarations: sharedDeclarations,
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hcmtkb3duLyIsInNvdXJjZXMiOlsic3JjL21hcmtkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQU1qRCwwQ0FHQzs7O0lBRkMsc0NBQWtCOztJQUNsQiw2Q0FBeUI7O1dBS2Y7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULE1BQU0sRUFBRSxJQUFJO0lBQ1osTUFBTSxFQUFFLEtBQUs7SUFDYixRQUFRLEVBQUUsS0FBSztJQUNmLFFBQVEsRUFBRSxLQUFLO0lBQ2YsVUFBVSxFQUFFLElBQUk7SUFDaEIsV0FBVyxFQUFFLEtBQUs7Q0FDbkI7O0FBVkgsTUFBTSxPQUFPLG9CQUFvQixHQUFhO0lBQzVDLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFFBQVEsSUFRUDtDQUNGOztNQUVLLGtCQUFrQixHQUFHO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtDQUNiO0FBTUQsTUFBTSxPQUFPLGNBQWM7Ozs7O0lBQ3pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsb0JBQTJDO1FBQ3hELE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsZUFBZTtnQkFDZixvQkFBb0IsSUFBSSxvQkFBb0IsQ0FBQyxNQUFNLElBQUksRUFBRTtnQkFDekQsb0JBQW9CLElBQUksb0JBQW9CLENBQUMsYUFBYSxJQUFJLG9CQUFvQjthQUNuRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsTUFBTSxDQUFDLFFBQVE7UUFDYixPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQWM7U0FDekIsQ0FBQztJQUNKLENBQUM7OztZQXBCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLGtCQUFrQjtnQkFDM0IsWUFBWSxFQUFFLGtCQUFrQjthQUNqQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMYW5ndWFnZVBpcGUgfSBmcm9tICcuL2xhbmd1YWdlLnBpcGUnO1xuaW1wb3J0IHsgTWFya2Rvd25Db21wb25lbnQgfSBmcm9tICcuL21hcmtkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXJrZG93blBpcGUgfSBmcm9tICcuL21hcmtkb3duLnBpcGUnO1xuaW1wb3J0IHsgTWFya2Rvd25TZXJ2aWNlIH0gZnJvbSAnLi9tYXJrZG93bi5zZXJ2aWNlJztcbmltcG9ydCB7IE1hcmtlZE9wdGlvbnMgfSBmcm9tICcuL21hcmtlZC1vcHRpb25zJztcblxuLy8gaGF2aW5nIGEgZGVwZW5kZW5jeSBvbiBgSHR0cENsaWVudE1vZHVsZWAgd2l0aGluIGEgbGlicmFyeVxuLy8gYnJlYWtzIGFsbCB0aGUgaW50ZXJjZXB0b3JzIGZyb20gdGhlIGFwcCBjb25zdW1pbmcgdGhlIGxpYnJhcnlcbi8vIGhlcmUsIHdlIGV4cGxpY2l0ZWx5IGFzayB0aGUgdXNlciB0byBwYXNzIGEgcHJvdmlkZXIgd2l0aFxuLy8gdGhlaXIgb3duIGluc3RhbmNlIG9mIGBIdHRwQ2xpZW50TW9kdWxlYFxuZXhwb3J0IGludGVyZmFjZSBNYXJrZG93bk1vZHVsZUNvbmZpZyB7XG4gIGxvYWRlcj86IFByb3ZpZGVyO1xuICBtYXJrZWRPcHRpb25zPzogUHJvdmlkZXI7XG59XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsTWFya2VkT3B0aW9uczogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IE1hcmtlZE9wdGlvbnMsXG4gIHVzZVZhbHVlOiB7XG4gICAgZ2ZtOiB0cnVlLFxuICAgIHRhYmxlczogdHJ1ZSxcbiAgICBicmVha3M6IGZhbHNlLFxuICAgIHBlZGFudGljOiBmYWxzZSxcbiAgICBzYW5pdGl6ZTogZmFsc2UsXG4gICAgc21hcnRMaXN0czogdHJ1ZSxcbiAgICBzbWFydHlwYW50czogZmFsc2UsXG4gIH0sXG59O1xuXG5jb25zdCBzaGFyZWREZWNsYXJhdGlvbnMgPSBbXG4gIExhbmd1YWdlUGlwZSxcbiAgTWFya2Rvd25Db21wb25lbnQsXG4gIE1hcmtkb3duUGlwZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IHNoYXJlZERlY2xhcmF0aW9ucyxcbiAgZGVjbGFyYXRpb25zOiBzaGFyZWREZWNsYXJhdGlvbnMsXG59KVxuZXhwb3J0IGNsYXNzIE1hcmtkb3duTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QobWFya2Rvd25Nb2R1bGVDb25maWc/OiBNYXJrZG93bk1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWFya2Rvd25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTWFya2Rvd25TZXJ2aWNlLFxuICAgICAgICBtYXJrZG93bk1vZHVsZUNvbmZpZyAmJiBtYXJrZG93bk1vZHVsZUNvbmZpZy5sb2FkZXIgfHwgW10sXG4gICAgICAgIG1hcmtkb3duTW9kdWxlQ29uZmlnICYmIG1hcmtkb3duTW9kdWxlQ29uZmlnLm1hcmtlZE9wdGlvbnMgfHwgaW5pdGlhbE1hcmtlZE9wdGlvbnMsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yQ2hpbGQoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBNYXJrZG93bk1vZHVsZSxcbiAgICB9O1xuICB9XG59XG4iXX0=