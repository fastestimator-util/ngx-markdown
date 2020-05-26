var MarkdownModule_1;
import { __decorate } from "tslib";
import { NgModule, SecurityContext } from '@angular/core';
import { LanguagePipe } from './language.pipe';
import { MarkdownComponent } from './markdown.component';
import { MarkdownPipe } from './markdown.pipe';
import { MarkdownService, SECURITY_CONTEXT } from './markdown.service';
const sharedDeclarations = [
    LanguagePipe,
    MarkdownComponent,
    MarkdownPipe,
];
let MarkdownModule = MarkdownModule_1 = class MarkdownModule {
    static forRoot(markdownModuleConfig) {
        return {
            ngModule: MarkdownModule_1,
            providers: [
                MarkdownService,
                markdownModuleConfig && markdownModuleConfig.loader || [],
                markdownModuleConfig && markdownModuleConfig.markedOptions || [],
                {
                    provide: SECURITY_CONTEXT,
                    useValue: markdownModuleConfig && markdownModuleConfig.sanitize != null
                        ? markdownModuleConfig.sanitize
                        : SecurityContext.HTML,
                },
            ],
        };
    }
    static forChild() {
        return {
            ngModule: MarkdownModule_1,
        };
    }
};
MarkdownModule = MarkdownModule_1 = __decorate([
    NgModule({
        exports: sharedDeclarations,
        declarations: sharedDeclarations,
    })
], MarkdownModule);
export { MarkdownModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hcmtkb3duLyIsInNvdXJjZXMiOlsic3JjL21hcmtkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFZLGVBQWUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVl2RSxNQUFNLGtCQUFrQixHQUFHO0lBQ3pCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtDQUNiLENBQUM7QUFNRixJQUFhLGNBQWMsc0JBQTNCLE1BQWEsY0FBYztJQUN6QixNQUFNLENBQUMsT0FBTyxDQUFDLG9CQUEyQztRQUN4RCxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxlQUFlO2dCQUNmLG9CQUFvQixJQUFJLG9CQUFvQixDQUFDLE1BQU0sSUFBSSxFQUFFO2dCQUN6RCxvQkFBb0IsSUFBSSxvQkFBb0IsQ0FBQyxhQUFhLElBQUksRUFBRTtnQkFDaEU7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsUUFBUSxFQUFFLG9CQUFvQixJQUFJLG9CQUFvQixDQUFDLFFBQVEsSUFBSSxJQUFJO3dCQUNyRSxDQUFDLENBQUMsb0JBQW9CLENBQUMsUUFBUTt3QkFDL0IsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxJQUFJO2lCQUN6QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxNQUFNLENBQUMsUUFBUTtRQUNiLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWM7U0FDekIsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBdkJZLGNBQWM7SUFKMUIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLGtCQUFrQjtRQUMzQixZQUFZLEVBQUUsa0JBQWtCO0tBQ2pDLENBQUM7R0FDVyxjQUFjLENBdUIxQjtTQXZCWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIFByb3ZpZGVyLCBTZWN1cml0eUNvbnRleHQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGFuZ3VhZ2VQaXBlIH0gZnJvbSAnLi9sYW5ndWFnZS5waXBlJztcbmltcG9ydCB7IE1hcmtkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9tYXJrZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWFya2Rvd25QaXBlIH0gZnJvbSAnLi9tYXJrZG93bi5waXBlJztcbmltcG9ydCB7IE1hcmtkb3duU2VydmljZSwgU0VDVVJJVFlfQ09OVEVYVCB9IGZyb20gJy4vbWFya2Rvd24uc2VydmljZSc7XG5cbi8vIGhhdmluZyBhIGRlcGVuZGVuY3kgb24gYEh0dHBDbGllbnRNb2R1bGVgIHdpdGhpbiBhIGxpYnJhcnlcbi8vIGJyZWFrcyBhbGwgdGhlIGludGVyY2VwdG9ycyBmcm9tIHRoZSBhcHAgY29uc3VtaW5nIHRoZSBsaWJyYXJ5XG4vLyBoZXJlLCB3ZSBleHBsaWNpdGVseSBhc2sgdGhlIHVzZXIgdG8gcGFzcyBhIHByb3ZpZGVyIHdpdGhcbi8vIHRoZWlyIG93biBpbnN0YW5jZSBvZiBgSHR0cENsaWVudE1vZHVsZWBcbmV4cG9ydCBpbnRlcmZhY2UgTWFya2Rvd25Nb2R1bGVDb25maWcge1xuICBsb2FkZXI/OiBQcm92aWRlcjtcbiAgbWFya2VkT3B0aW9ucz86IFByb3ZpZGVyO1xuICBzYW5pdGl6ZT86IFNlY3VyaXR5Q29udGV4dDtcbn1cblxuY29uc3Qgc2hhcmVkRGVjbGFyYXRpb25zID0gW1xuICBMYW5ndWFnZVBpcGUsXG4gIE1hcmtkb3duQ29tcG9uZW50LFxuICBNYXJrZG93blBpcGUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBleHBvcnRzOiBzaGFyZWREZWNsYXJhdGlvbnMsXG4gIGRlY2xhcmF0aW9uczogc2hhcmVkRGVjbGFyYXRpb25zLFxufSlcbmV4cG9ydCBjbGFzcyBNYXJrZG93bk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KG1hcmtkb3duTW9kdWxlQ29uZmlnPzogTWFya2Rvd25Nb2R1bGVDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1hcmtkb3duTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIE1hcmtkb3duU2VydmljZSxcbiAgICAgICAgbWFya2Rvd25Nb2R1bGVDb25maWcgJiYgbWFya2Rvd25Nb2R1bGVDb25maWcubG9hZGVyIHx8IFtdLFxuICAgICAgICBtYXJrZG93bk1vZHVsZUNvbmZpZyAmJiBtYXJrZG93bk1vZHVsZUNvbmZpZy5tYXJrZWRPcHRpb25zIHx8IFtdLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogU0VDVVJJVFlfQ09OVEVYVCxcbiAgICAgICAgICB1c2VWYWx1ZTogbWFya2Rvd25Nb2R1bGVDb25maWcgJiYgbWFya2Rvd25Nb2R1bGVDb25maWcuc2FuaXRpemUgIT0gbnVsbFxuICAgICAgICAgICAgPyBtYXJrZG93bk1vZHVsZUNvbmZpZy5zYW5pdGl6ZVxuICAgICAgICAgICAgOiBTZWN1cml0eUNvbnRleHQuSFRNTCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1hcmtkb3duTW9kdWxlLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==