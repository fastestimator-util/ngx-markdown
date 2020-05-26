import { __decorate, __assign, __param, __spread } from 'tslib';
import { Pipe, InjectionToken, Inject, PLATFORM_ID, Optional, Injectable, EventEmitter, ElementRef, Input, Output, Component, NgZone, SecurityContext, NgModule } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Renderer, parse } from 'marked';
export { Renderer as MarkedRenderer } from 'marked';
import { map, first } from 'rxjs/operators';

// tslint:disable: no-redundant-jsdoc
var KatexOptions = /** @class */ (function () {
    function KatexOptions() {
    }
    return KatexOptions;
}());

var LanguagePipe = /** @class */ (function () {
    function LanguagePipe() {
    }
    LanguagePipe.prototype.transform = function (value, language) {
        if (typeof value !== 'string') {
            console.error("LanguagePipe has been invoked with an invalid value type [" + value + "]");
            return value;
        }
        if (typeof language !== 'string') {
            console.error("LanguagePipe has been invoked with an invalid parameter [" + language + "]");
            return value;
        }
        return '```' + language + '\n' + value + '\n```';
    };
    LanguagePipe = __decorate([
        Pipe({
            name: 'language',
        })
    ], LanguagePipe);
    return LanguagePipe;
}());

var MarkedOptions = /** @class */ (function () {
    function MarkedOptions() {
    }
    return MarkedOptions;
}());

// tslint:disable:max-line-length
var errorJoyPixelsNotLoaded = '[ngx-markdown] When using the `emoji` attribute you *have to* include Emoji-Toolkit files to `angular.json` or use imports. See README for more information';
var errorKatexNotLoaded = '[ngx-markdown] When using the `katex` attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information';
var errorSrcWithoutHttpClient = '[ngx-markdown] When using the `src` attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information';
// tslint:enable:max-line-length
var SECURITY_CONTEXT = new InjectionToken('SECURITY_CONTEXT');
var MarkdownService = /** @class */ (function () {
    function MarkdownService(platform, securityContext, http, options, sanitizer) {
        this.platform = platform;
        this.securityContext = securityContext;
        this.http = http;
        this.sanitizer = sanitizer;
        this.initialMarkedOptions = {
            renderer: new Renderer(),
        };
        this.options = options;
    }
    Object.defineProperty(MarkdownService.prototype, "options", {
        get: function () { return this._options; },
        set: function (value) {
            this._options = __assign(__assign({}, this.initialMarkedOptions), value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownService.prototype, "renderer", {
        get: function () { return this.options.renderer; },
        set: function (value) {
            this.options.renderer = value;
        },
        enumerable: true,
        configurable: true
    });
    MarkdownService.prototype.compile = function (markdown, decodeHtml, emojify, markedOptions) {
        if (decodeHtml === void 0) { decodeHtml = false; }
        if (emojify === void 0) { emojify = false; }
        if (markedOptions === void 0) { markedOptions = this.options; }
        var trimmed = this.trimIndentation(markdown);
        var decoded = decodeHtml ? this.decodeHtml(trimmed) : trimmed;
        var emojified = emojify ? this.renderEmoji(decoded) : decoded;
        var compiled = parse(emojified, markedOptions);
        return this.sanitizer.sanitize(this.securityContext, compiled);
    };
    MarkdownService.prototype.getSource = function (src) {
        var _this = this;
        if (!this.http) {
            throw new Error(errorSrcWithoutHttpClient);
        }
        return this.http
            .get(src, { responseType: 'text' })
            .pipe(map(function (markdown) { return _this.handleExtension(src, markdown); }));
    };
    MarkdownService.prototype.highlight = function (element) {
        if (isPlatformBrowser(this.platform) && typeof Prism !== 'undefined') {
            if (!element) {
                element = document;
            }
            var noLanguageElements = element.querySelectorAll('pre code:not([class*="language-"])');
            Array.prototype.forEach.call(noLanguageElements, function (x) { return x.classList.add('language-none'); });
            Prism.highlightAllUnder(element);
        }
    };
    MarkdownService.prototype.renderKatex = function (html, options) {
        if (typeof katex === 'undefined' || typeof katex.renderToString === 'undefined') {
            throw new Error(errorKatexNotLoaded);
        }
        return html.replace(/\$([^\s][^$]*?)\$/gm, function (_, tex) { return katex.renderToString(tex, options); });
    };
    MarkdownService.prototype.decodeHtml = function (html) {
        if (isPlatformBrowser(this.platform)) {
            var textarea = document.createElement('textarea');
            textarea.innerHTML = html;
            return textarea.value;
        }
        return html;
    };
    MarkdownService.prototype.handleExtension = function (src, markdown) {
        var extension = src
            ? src.split('?')[0].split('.').splice(-1).join()
            : null;
        return extension !== 'md'
            ? '```' + extension + '\n' + markdown + '\n```'
            : markdown;
    };
    MarkdownService.prototype.renderEmoji = function (html) {
        if (typeof joypixels === 'undefined' || typeof joypixels.shortnameToUnicode === 'undefined') {
            throw new Error(errorJoyPixelsNotLoaded);
        }
        return joypixels.shortnameToUnicode(html);
    };
    MarkdownService.prototype.trimIndentation = function (markdown) {
        if (!markdown) {
            return '';
        }
        var indentStart;
        return markdown
            .split('\n')
            .map(function (line) {
            var lineIdentStart = indentStart;
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
    };
    MarkdownService.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [SECURITY_CONTEXT,] }] },
        { type: HttpClient, decorators: [{ type: Optional }] },
        { type: MarkedOptions, decorators: [{ type: Optional }] },
        { type: DomSanitizer }
    ]; };
    MarkdownService = __decorate([
        Injectable(),
        __param(0, Inject(PLATFORM_ID)),
        __param(1, Inject(SECURITY_CONTEXT)),
        __param(2, Optional()),
        __param(3, Optional())
    ], MarkdownService);
    return MarkdownService;
}());

var PrismPlugin;
(function (PrismPlugin) {
    PrismPlugin["LineHighlight"] = "line-highlight";
    PrismPlugin["LineNumbers"] = "line-numbers";
})(PrismPlugin || (PrismPlugin = {}));

var MarkdownComponent = /** @class */ (function () {
    function MarkdownComponent(element, markdownService) {
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
    Object.defineProperty(MarkdownComponent.prototype, "emoji", {
        // Plugin - emoji
        get: function () { return this._emoji; },
        set: function (value) { this._emoji = this.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownComponent.prototype, "katex", {
        // Plugin - katex
        get: function () { return this._katex; },
        set: function (value) { this._katex = this.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownComponent.prototype, "lineHighlight", {
        // Plugin - lineHighlight
        get: function () { return this._lineHighlight; },
        set: function (value) { this._lineHighlight = this.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownComponent.prototype, "lineNumbers", {
        // Plugin - lineNumbers
        get: function () { return this._lineNumbers; },
        set: function (value) { this._lineNumbers = this.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    MarkdownComponent.prototype.ngOnChanges = function () {
        if (this.data != null) {
            this.handleData();
            return;
        }
        if (this.src != null) {
            this.handleSrc();
            return;
        }
    };
    MarkdownComponent.prototype.ngAfterViewInit = function () {
        if (!this.data && !this.src) {
            this.handleTransclusion();
        }
    };
    MarkdownComponent.prototype.render = function (markdown, decodeHtml) {
        if (decodeHtml === void 0) { decodeHtml = false; }
        var compiled = this.markdownService.compile(markdown, decodeHtml, this.emoji);
        compiled = this.katex ? this.markdownService.renderKatex(compiled, this.katexOptions) : compiled;
        this.element.nativeElement.innerHTML = compiled;
        this.handlePlugins();
        this.markdownService.highlight(this.element.nativeElement);
        this.ready.emit();
    };
    MarkdownComponent.prototype.coerceBooleanProperty = function (value) {
        return value != null && "" + value !== 'false';
    };
    MarkdownComponent.prototype.handleData = function () {
        this.render(this.data);
    };
    MarkdownComponent.prototype.handleSrc = function () {
        var _this = this;
        this.markdownService
            .getSource(this.src)
            .subscribe(function (markdown) {
            _this.render(markdown);
            _this.load.emit(markdown);
        }, function (error) { return _this.error.emit(error); });
    };
    MarkdownComponent.prototype.handleTransclusion = function () {
        this.render(this.element.nativeElement.innerHTML, true);
    };
    MarkdownComponent.prototype.handlePlugins = function () {
        if (this.lineHighlight) {
            this.setPluginClass(this.element.nativeElement, PrismPlugin.LineHighlight);
            this.setPluginOptions(this.element.nativeElement, { dataLine: this.line, dataLineOffset: this.lineOffset });
        }
        if (this.lineNumbers) {
            this.setPluginClass(this.element.nativeElement, PrismPlugin.LineNumbers);
            this.setPluginOptions(this.element.nativeElement, { dataStart: this.start });
        }
    };
    MarkdownComponent.prototype.setPluginClass = function (element, plugin) {
        var _a;
        var preElements = element.querySelectorAll('pre');
        for (var i = 0; i < preElements.length; i++) {
            var classes = plugin instanceof Array ? plugin : [plugin];
            (_a = preElements.item(i).classList).add.apply(_a, __spread(classes));
        }
    };
    MarkdownComponent.prototype.setPluginOptions = function (element, options) {
        var _this = this;
        var preElements = element.querySelectorAll('pre');
        var _loop_1 = function (i) {
            Object.keys(options).forEach(function (option) {
                var attributeValue = options[option];
                if (!!attributeValue) {
                    var attributeName = _this.toLispCase(option);
                    preElements.item(i).setAttribute(attributeName, attributeValue.toString());
                }
            });
        };
        for (var i = 0; i < preElements.length; i++) {
            _loop_1(i);
        }
    };
    MarkdownComponent.prototype.toLispCase = function (value) {
        var upperChars = value.match(/([A-Z])/g);
        if (!upperChars) {
            return value;
        }
        var str = value.toString();
        for (var i = 0, n = upperChars.length; i < n; i++) {
            str = str.replace(new RegExp(upperChars[i]), '-' + upperChars[i].toLowerCase());
        }
        if (str.slice(0, 1) === '-') {
            str = str.slice(1);
        }
        return str;
    };
    MarkdownComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: MarkdownService }
    ]; };
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
    return MarkdownComponent;
}());

var MarkdownPipe = /** @class */ (function () {
    function MarkdownPipe(elementRef, markdownService, zone) {
        this.elementRef = elementRef;
        this.markdownService = markdownService;
        this.zone = zone;
    }
    MarkdownPipe.prototype.transform = function (value) {
        var _this = this;
        if (value == null) {
            return '';
        }
        if (typeof value !== 'string') {
            console.error("MarkdownPipe has been invoked with an invalid value type [" + value + "]");
            return value;
        }
        var markdown = this.markdownService.compile(value);
        this.zone.onStable
            .pipe(first())
            .subscribe(function () { return _this.markdownService.highlight(_this.elementRef.nativeElement); });
        return markdown;
    };
    MarkdownPipe.ctorParameters = function () { return [
        { type: ElementRef },
        { type: MarkdownService },
        { type: NgZone }
    ]; };
    MarkdownPipe = __decorate([
        Pipe({
            name: 'markdown',
        })
    ], MarkdownPipe);
    return MarkdownPipe;
}());

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

/**
 * Generated bundle index. Do not edit.
 */

export { KatexOptions, LanguagePipe, MarkdownComponent, MarkdownModule, MarkdownPipe, MarkdownService, MarkedOptions, PrismPlugin, SECURITY_CONTEXT, errorJoyPixelsNotLoaded, errorKatexNotLoaded, errorSrcWithoutHttpClient };
//# sourceMappingURL=ngx-markdown.js.map
