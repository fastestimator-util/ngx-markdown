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
var ɵ0 = {
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
};
/** @type {?} */
export var initialMarkedOptions = {
    provide: MarkedOptions,
    useValue: ɵ0,
};
/** @type {?} */
var sharedDeclarations = [
    LanguagePipe,
    MarkdownComponent,
    MarkdownPipe,
];
var MarkdownModule = /** @class */ (function () {
    function MarkdownModule() {
    }
    /**
     * @param {?=} markdownModuleConfig
     * @return {?}
     */
    MarkdownModule.forRoot = /**
     * @param {?=} markdownModuleConfig
     * @return {?}
     */
    function (markdownModuleConfig) {
        return {
            ngModule: MarkdownModule,
            providers: [
                MarkdownService,
                markdownModuleConfig && markdownModuleConfig.loader || [],
                markdownModuleConfig && markdownModuleConfig.markedOptions || initialMarkedOptions,
            ],
        };
    };
    /**
     * @return {?}
     */
    MarkdownModule.forChild = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: MarkdownModule,
        };
    };
    MarkdownModule.decorators = [
        { type: NgModule, args: [{
                    exports: sharedDeclarations,
                    declarations: sharedDeclarations,
                },] }
    ];
    return MarkdownModule;
}());
export { MarkdownModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hcmtkb3duLyIsInNvdXJjZXMiOlsic3JjL21hcmtkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBRXhFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQU1qRCwwQ0FHQzs7O0lBRkMsc0NBQWtCOztJQUNsQiw2Q0FBeUI7O1NBS2Y7SUFDUixHQUFHLEVBQUUsSUFBSTtJQUNULE1BQU0sRUFBRSxJQUFJO0lBQ1osTUFBTSxFQUFFLEtBQUs7SUFDYixRQUFRLEVBQUUsS0FBSztJQUNmLFFBQVEsRUFBRSxLQUFLO0lBQ2YsVUFBVSxFQUFFLElBQUk7SUFDaEIsV0FBVyxFQUFFLEtBQUs7Q0FDbkI7O0FBVkgsTUFBTSxLQUFPLG9CQUFvQixHQUFhO0lBQzVDLE9BQU8sRUFBRSxhQUFhO0lBQ3RCLFFBQVEsSUFRUDtDQUNGOztJQUVLLGtCQUFrQixHQUFHO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtDQUNiO0FBRUQ7SUFBQTtJQXFCQSxDQUFDOzs7OztJQWhCUSxzQkFBTzs7OztJQUFkLFVBQWUsb0JBQTJDO1FBQ3hELE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsZUFBZTtnQkFDZixvQkFBb0IsSUFBSSxvQkFBb0IsQ0FBQyxNQUFNLElBQUksRUFBRTtnQkFDekQsb0JBQW9CLElBQUksb0JBQW9CLENBQUMsYUFBYSxJQUFJLG9CQUFvQjthQUNuRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRU0sdUJBQVE7OztJQUFmO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1NBQ3pCLENBQUM7SUFDSixDQUFDOztnQkFwQkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLFlBQVksRUFBRSxrQkFBa0I7aUJBQ2pDOztJQWtCRCxxQkFBQztDQUFBLEFBckJELElBcUJDO1NBakJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGFuZ3VhZ2VQaXBlIH0gZnJvbSAnLi9sYW5ndWFnZS5waXBlJztcbmltcG9ydCB7IE1hcmtkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9tYXJrZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFya2Rvd25QaXBlIH0gZnJvbSAnLi9tYXJrZG93bi5waXBlJztcbmltcG9ydCB7IE1hcmtkb3duU2VydmljZSB9IGZyb20gJy4vbWFya2Rvd24uc2VydmljZSc7XG5pbXBvcnQgeyBNYXJrZWRPcHRpb25zIH0gZnJvbSAnLi9tYXJrZWQtb3B0aW9ucyc7XG5cbi8vIGhhdmluZyBhIGRlcGVuZGVuY3kgb24gYEh0dHBDbGllbnRNb2R1bGVgIHdpdGhpbiBhIGxpYnJhcnlcbi8vIGJyZWFrcyBhbGwgdGhlIGludGVyY2VwdG9ycyBmcm9tIHRoZSBhcHAgY29uc3VtaW5nIHRoZSBsaWJyYXJ5XG4vLyBoZXJlLCB3ZSBleHBsaWNpdGVseSBhc2sgdGhlIHVzZXIgdG8gcGFzcyBhIHByb3ZpZGVyIHdpdGhcbi8vIHRoZWlyIG93biBpbnN0YW5jZSBvZiBgSHR0cENsaWVudE1vZHVsZWBcbmV4cG9ydCBpbnRlcmZhY2UgTWFya2Rvd25Nb2R1bGVDb25maWcge1xuICBsb2FkZXI/OiBQcm92aWRlcjtcbiAgbWFya2VkT3B0aW9ucz86IFByb3ZpZGVyO1xufVxuXG5leHBvcnQgY29uc3QgaW5pdGlhbE1hcmtlZE9wdGlvbnM6IFByb3ZpZGVyID0ge1xuICBwcm92aWRlOiBNYXJrZWRPcHRpb25zLFxuICB1c2VWYWx1ZToge1xuICAgIGdmbTogdHJ1ZSxcbiAgICB0YWJsZXM6IHRydWUsXG4gICAgYnJlYWtzOiBmYWxzZSxcbiAgICBwZWRhbnRpYzogZmFsc2UsXG4gICAgc2FuaXRpemU6IGZhbHNlLFxuICAgIHNtYXJ0TGlzdHM6IHRydWUsXG4gICAgc21hcnR5cGFudHM6IGZhbHNlLFxuICB9LFxufTtcblxuY29uc3Qgc2hhcmVkRGVjbGFyYXRpb25zID0gW1xuICBMYW5ndWFnZVBpcGUsXG4gIE1hcmtkb3duQ29tcG9uZW50LFxuICBNYXJrZG93blBpcGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBzaGFyZWREZWNsYXJhdGlvbnMsXG4gIGRlY2xhcmF0aW9uczogc2hhcmVkRGVjbGFyYXRpb25zLFxufSlcbmV4cG9ydCBjbGFzcyBNYXJrZG93bk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KG1hcmtkb3duTW9kdWxlQ29uZmlnPzogTWFya2Rvd25Nb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1hcmtkb3duTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE1hcmtkb3duU2VydmljZSxcbiAgICAgICAgbWFya2Rvd25Nb2R1bGVDb25maWcgJiYgbWFya2Rvd25Nb2R1bGVDb25maWcubG9hZGVyIHx8IFtdLFxuICAgICAgICBtYXJrZG93bk1vZHVsZUNvbmZpZyAmJiBtYXJrZG93bk1vZHVsZUNvbmZpZy5tYXJrZWRPcHRpb25zIHx8IGluaXRpYWxNYXJrZWRPcHRpb25zLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWFya2Rvd25Nb2R1bGUsXG4gICAgfTtcbiAgfVxufVxuIl19