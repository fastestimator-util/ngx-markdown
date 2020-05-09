import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { KatexOptions } from './katex-options';
import { MarkedOptions } from './marked-options';
import { MarkedRenderer } from './marked-renderer';
export declare const errorKatexNotLoaded = "[ngx-markdown When using the [katex] attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information";
export declare const errorSrcWithoutHttpClient = "[ngx-markdown] When using the [src] attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information";
export declare class MarkdownService {
    private platform;
    private http;
    private domSanitizer;
    private _options;
    options: MarkedOptions;
    renderer: MarkedRenderer;
    constructor(platform: Object, http: HttpClient, domSanitizer: DomSanitizer, options: MarkedOptions);
    compile(markdown: string, decodeHtml?: boolean, markedOptions?: MarkedOptions): string;
    getSource(src: string): Observable<string>;
    highlight(element?: Element | Document): void;
    renderKatex(html: string, options?: KatexOptions): string;
    private decodeHtml;
    private handleExtension;
    private trimIndentation;
}
