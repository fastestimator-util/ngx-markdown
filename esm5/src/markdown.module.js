import { __decorate } from "tslib";
import { NgModule, SecurityContext } from '@angular/core';
import { LanguagePipe } from './language.pipe';
import { MarkdownComponent } from './markdown.component';
import { MarkdownPipe } from './markdown.pipe';
import { MarkdownService, SECURITY_CONTEXT } from './markdown.service';
var sharedDeclarations = [
    LanguagePipe,
    MarkdownComponent,
    MarkdownPipe,
];
var MarkdownModule = /** @class */ (function () {
    function MarkdownModule() {
    }
    MarkdownModule_1 = MarkdownModule;
    MarkdownModule.forRoot = function (markdownModuleConfig) {
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
    };
    MarkdownModule.forChild = function () {
        return {
            ngModule: MarkdownModule_1,
        };
    };
    var MarkdownModule_1;
    MarkdownModule = MarkdownModule_1 = __decorate([
        NgModule({
            exports: sharedDeclarations,
            declarations: sharedDeclarations,
        })
    ], MarkdownModule);
    return MarkdownModule;
}());
export { MarkdownModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFya2Rvd24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LW1hcmtkb3duLyIsInNvdXJjZXMiOlsic3JjL21hcmtkb3duLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQVksZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBWXZFLElBQU0sa0JBQWtCLEdBQUc7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0NBQ2IsQ0FBQztBQU1GO0lBQUE7SUF1QkEsQ0FBQzt1QkF2QlksY0FBYztJQUNsQixzQkFBTyxHQUFkLFVBQWUsb0JBQTJDO1FBQ3hELE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULGVBQWU7Z0JBQ2Ysb0JBQW9CLElBQUksb0JBQW9CLENBQUMsTUFBTSxJQUFJLEVBQUU7Z0JBQ3pELG9CQUFvQixJQUFJLG9CQUFvQixDQUFDLGFBQWEsSUFBSSxFQUFFO2dCQUNoRTtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixRQUFRLEVBQUUsb0JBQW9CLElBQUksb0JBQW9CLENBQUMsUUFBUSxJQUFJLElBQUk7d0JBQ3JFLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRO3dCQUMvQixDQUFDLENBQUMsZUFBZSxDQUFDLElBQUk7aUJBQ3pCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUVNLHVCQUFRLEdBQWY7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFjO1NBQ3pCLENBQUM7SUFDSixDQUFDOztJQXRCVSxjQUFjO1FBSjFCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxrQkFBa0I7WUFDM0IsWUFBWSxFQUFFLGtCQUFrQjtTQUNqQyxDQUFDO09BQ1csY0FBYyxDQXVCMUI7SUFBRCxxQkFBQztDQUFBLEFBdkJELElBdUJDO1NBdkJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgUHJvdmlkZXIsIFNlY3VyaXR5Q29udGV4dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMYW5ndWFnZVBpcGUgfSBmcm9tICcuL2xhbmd1YWdlLnBpcGUnO1xuaW1wb3J0IHsgTWFya2Rvd25Db21wb25lbnQgfSBmcm9tICcuL21hcmtkb3duLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBNYXJrZG93blBpcGUgfSBmcm9tICcuL21hcmtkb3duLnBpcGUnO1xuaW1wb3J0IHsgTWFya2Rvd25TZXJ2aWNlLCBTRUNVUklUWV9DT05URVhUIH0gZnJvbSAnLi9tYXJrZG93bi5zZXJ2aWNlJztcblxuLy8gaGF2aW5nIGEgZGVwZW5kZW5jeSBvbiBgSHR0cENsaWVudE1vZHVsZWAgd2l0aGluIGEgbGlicmFyeVxuLy8gYnJlYWtzIGFsbCB0aGUgaW50ZXJjZXB0b3JzIGZyb20gdGhlIGFwcCBjb25zdW1pbmcgdGhlIGxpYnJhcnlcbi8vIGhlcmUsIHdlIGV4cGxpY2l0ZWx5IGFzayB0aGUgdXNlciB0byBwYXNzIGEgcHJvdmlkZXIgd2l0aFxuLy8gdGhlaXIgb3duIGluc3RhbmNlIG9mIGBIdHRwQ2xpZW50TW9kdWxlYFxuZXhwb3J0IGludGVyZmFjZSBNYXJrZG93bk1vZHVsZUNvbmZpZyB7XG4gIGxvYWRlcj86IFByb3ZpZGVyO1xuICBtYXJrZWRPcHRpb25zPzogUHJvdmlkZXI7XG4gIHNhbml0aXplPzogU2VjdXJpdHlDb250ZXh0O1xufVxuXG5jb25zdCBzaGFyZWREZWNsYXJhdGlvbnMgPSBbXG4gIExhbmd1YWdlUGlwZSxcbiAgTWFya2Rvd25Db21wb25lbnQsXG4gIE1hcmtkb3duUGlwZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGV4cG9ydHM6IHNoYXJlZERlY2xhcmF0aW9ucyxcbiAgZGVjbGFyYXRpb25zOiBzaGFyZWREZWNsYXJhdGlvbnMsXG59KVxuZXhwb3J0IGNsYXNzIE1hcmtkb3duTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QobWFya2Rvd25Nb2R1bGVDb25maWc/OiBNYXJrZG93bk1vZHVsZUNvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWFya2Rvd25Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgTWFya2Rvd25TZXJ2aWNlLFxuICAgICAgICBtYXJrZG93bk1vZHVsZUNvbmZpZyAmJiBtYXJrZG93bk1vZHVsZUNvbmZpZy5sb2FkZXIgfHwgW10sXG4gICAgICAgIG1hcmtkb3duTW9kdWxlQ29uZmlnICYmIG1hcmtkb3duTW9kdWxlQ29uZmlnLm1hcmtlZE9wdGlvbnMgfHwgW10sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBTRUNVUklUWV9DT05URVhULFxuICAgICAgICAgIHVzZVZhbHVlOiBtYXJrZG93bk1vZHVsZUNvbmZpZyAmJiBtYXJrZG93bk1vZHVsZUNvbmZpZy5zYW5pdGl6ZSAhPSBudWxsXG4gICAgICAgICAgICA/IG1hcmtkb3duTW9kdWxlQ29uZmlnLnNhbml0aXplXG4gICAgICAgICAgICA6IFNlY3VyaXR5Q29udGV4dC5IVE1MLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZvckNoaWxkKCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogTWFya2Rvd25Nb2R1bGUsXG4gICAgfTtcbiAgfVxufVxuIl19