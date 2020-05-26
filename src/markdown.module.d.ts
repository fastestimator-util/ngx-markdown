import { ModuleWithProviders, Provider, SecurityContext } from '@angular/core';
export interface MarkdownModuleConfig {
    loader?: Provider;
    markedOptions?: Provider;
    sanitize?: SecurityContext;
}
export declare class MarkdownModule {
    static forRoot(markdownModuleConfig?: MarkdownModuleConfig): ModuleWithProviders;
    static forChild(): ModuleWithProviders;
}
