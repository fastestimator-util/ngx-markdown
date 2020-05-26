import { __decorate, __param } from 'tslib';
import { Pipe, InjectionToken, Inject, PLATFORM_ID, Optional, Injectable, EventEmitter, ElementRef, Input, Output, Component, NgZone, SecurityContext, NgModule } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Renderer, parse } from 'marked';
export { Renderer as MarkedRenderer } from 'marked';
import { map, first } from 'rxjs/operators';

// tslint:disable: no-redundant-jsdoc
class KatexOptions {
}

let LanguagePipe = class LanguagePipe {
    transform(value, language) {
        if (typeof value !== 'string') {
            console.error(`LanguagePipe has been invoked with an invalid value type [${value}]`);
            return value;
        }
        if (typeof language !== 'string') {
            console.error(`LanguagePipe has been invoked with an invalid parameter [${language}]`);
            return value;
        }
        return '```' + language + '\n' + value + '\n```';
    }
};
LanguagePipe = __decorate([
    Pipe({
        name: 'language',
    })
], LanguagePipe);

class MarkedOptions {
}

// tslint:disable:max-line-length
const errorJoyPixelsNotLoaded = '[ngx-markdown] When using the `emoji` attribute you *have to* include Emoji-Toolkit files to `angular.json` or use imports. See README for more information';
const errorKatexNotLoaded = '[ngx-markdown] When using the `katex` attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information';
const errorSrcWithoutHttpClient = '[ngx-markdown] When using the `src` attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information';
// tslint:enable:max-line-length
const SECURITY_CONTEXT = new InjectionToken('SECURITY_CONTEXT');
let MarkdownService = class MarkdownService {
    constructor(platform, securityContext, http, options, sanitizer) {
        this.platform = platform;
        this.securityContext = securityContext;
        this.http = http;
        this.sanitizer = sanitizer;
        this.initialMarkedOptions = {
            renderer: new Renderer(),
        };
        this.options = options;
    }
    get options() { return this._options; }
    set options(value) {
        this._options = Object.assign(Object.assign({}, this.initialMarkedOptions), value);
    }
    get renderer() { return this.options.renderer; }
    set renderer(value) {
        this.options.renderer = value;
    }
    compile(markdown, decodeHtml = false, emojify = false, markedOptions = this.options) {
        const trimmed = this.trimIndentation(markdown);
        const decoded = decodeHtml ? this.decodeHtml(trimmed) : trimmed;
        const emojified = emojify ? this.renderEmoji(decoded) : decoded;
        const compiled = parse(emojified, markedOptions);
        return this.sanitizer.sanitize(this.securityContext, compiled);
    }
    getSource(src) {
        if (!this.http) {
            throw new Error(errorSrcWithoutHttpClient);
        }
        return this.http
            .get(src, { responseType: 'text' })
            .pipe(map(markdown => this.handleExtension(src, markdown)));
    }
    highlight(element) {
        if (isPlatformBrowser(this.platform) && typeof Prism !== 'undefined') {
            if (!element) {
                element = document;
            }
            const noLanguageElements = element.querySelectorAll('pre code:not([class*="language-"])');
            Array.prototype.forEach.call(noLanguageElements, (x) => x.classList.add('language-none'));
            Prism.highlightAllUnder(element);
        }
    }
    renderKatex(html, options) {
        if (typeof katex === 'undefined' || typeof katex.renderToString === 'undefined') {
            throw new Error(errorKatexNotLoaded);
        }
        return html.replace(/\$([^\s][^$]*?)\$/gm, (_, tex) => katex.renderToString(tex, options));
    }
    decodeHtml(html) {
        if (isPlatformBrowser(this.platform)) {
            const textarea = document.createElement('textarea');
            textarea.innerHTML = html;
            return textarea.value;
        }
        return html;
    }
    handleExtension(src, markdown) {
        const extension = src
            ? src.split('?')[0].split('.').splice(-1).join()
            : null;
        return extension !== 'md'
            ? '```' + extension + '\n' + markdown + '\n```'
            : markdown;
    }
    renderEmoji(html) {
        if (typeof joypixels === 'undefined' || typeof joypixels.shortnameToUnicode === 'undefined') {
            throw new Error(errorJoyPixelsNotLoaded);
        }
        return joypixels.shortnameToUnicode(html);
    }
    trimIndentation(markdown) {
        if (!markdown) {
            return '';
        }
        let indentStart;
        return markdown
            .split('\n')
            .map(line => {
            let lineIdentStart = indentStart;
            if (line.length > 0) {
                lineIdentStart = isNaN(lineIdentStart)
                    ? line.search(/\S|$/)
                    : Math.min(line.search(/\S|$/), lineIdentStart);
            }
            if (isNaN(indentStart)) {
                indentStart = lineIdentStart;
            }
            return !!lineIdentStart
                ? line.substring(lineIdentStart)
                : line;
        }).join('\n');
    }
};
MarkdownService.ctorParameters = () => [
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [SECURITY_CONTEXT,] }] },
    { type: HttpClient, decorators: [{ type: Optional }] },
    { type: MarkedOptions, decorators: [{ type: Optional }] },
    { type: DomSanitizer }
];
MarkdownService = __decorate([
    Injectable(),
    __param(0, Inject(PLATFORM_ID)),
    __param(1, Inject(SECURITY_CONTEXT)),
    __param(2, Optional()),
    __param(3, Optional())
], MarkdownService);

var PrismPlugin;
(function (PrismPlugin) {
    PrismPlugin["LineHighlight"] = "line-highlight";
    PrismPlugin["LineNumbers"] = "line-numbers";
})(PrismPlugin || (PrismPlugin = {}));

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

var MarkdownModule_1;
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

/**
 * Generated bundle index. Do not edit.
 */

export { KatexOptions, LanguagePipe, MarkdownComponent, MarkdownModule, MarkdownPipe, MarkdownService, MarkedOptions, PrismPlugin, SECURITY_CONTEXT, errorJoyPixelsNotLoaded, errorKatexNotLoaded, errorSrcWithoutHttpClient };
//# sourceMappingURL=ngx-markdown.js.map
