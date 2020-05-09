import { Pipe, SecurityContext, Injectable, Inject, PLATFORM_ID, Optional, EventEmitter, Component, ElementRef, Input, Output, NgZone, NgModule } from '@angular/core';
import { __extends, __spread } from 'tslib';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { Renderer, parse } from 'marked';
import { map, first } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * Generated from: src/katex-options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable: no-redundant-jsdoc
var  
// tslint:disable: no-redundant-jsdoc
KatexOptions = /** @class */ (function () {
    function KatexOptions() {
    }
    return KatexOptions;
}());
if (false) {
    /**
     * If `true`, math will be rendered in display mode
     * (math in display style and center math on page)
     *
     * If `false`, math will be rendered in inline mode
     * \@default false
     * @type {?}
     */
    KatexOptions.prototype.displayMode;
    /**
     * If `true`, KaTeX will throw a `ParseError` when
     * it encounters an unsupported command or invalid LaTex
     *
     * If `false`, KaTeX will render unsupported commands as
     * text, and render invalid LaTeX as its source code with
     * hover text giving the error, in color given by errorColor
     * \@default true
     * @type {?}
     */
    KatexOptions.prototype.throwOnError;
    /**
     * A Color string given in format `#XXX` or `#XXXXXX`
     * @type {?}
     */
    KatexOptions.prototype.errorColor;
    /**
     * A collection of custom macros.
     *
     * See `src/macros.js` for its usage
     * @type {?}
     */
    KatexOptions.prototype.macros;
    /**
     * If `true`, `\color` will work like LaTeX's `\textcolor`
     * and takes 2 arguments
     *
     * If `false`, `\color` will work like LaTeX's `\color`
     * and takes 1 argument
     *
     * In both cases, `\textcolor` works as in LaTeX
     *
     * \@default false
     * @type {?}
     */
    KatexOptions.prototype.colorIsTextColor;
    /**
     * All user-specified sizes will be caped to `maxSize` ems
     *
     * If set to Infinity, users can make elements and space
     * arbitrarily large
     *
     * \@default Infinity
     * @type {?}
     */
    KatexOptions.prototype.maxSize;
    /**
     * Limit the number of macro expansions to specified number
     *
     * If set to `Infinity`, marco expander will try to fully expand
     * as in LaTex
     *
     * \@default 1000
     * @type {?}
     */
    KatexOptions.prototype.maxExpand;
    /**
     * Allowed protocols in `\href`
     *
     * Use `_relative` to allow relative urls
     *
     * Use `*` to allow all protocols
     * @type {?}
     */
    KatexOptions.prototype.allowedProtocols;
    /**
     * If `false` or `"ignore"`, allow features that make
     * writing in LaTex convenient but not supported by LaTex
     *
     * If `true` or `"error"`, throw an error for such transgressions
     *
     * If `"warn"`, warn about behavior via `console.warn`
     *
     * \@default "warn"
     * @type {?}
     */
    KatexOptions.prototype.strict;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/language.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var LanguagePipe = /** @class */ (function () {
    function LanguagePipe() {
    }
    /**
     * @param {?} value
     * @param {?} language
     * @return {?}
     */
    LanguagePipe.prototype.transform = /**
     * @param {?} value
     * @param {?} language
     * @return {?}
     */
    function (value, language) {
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
    LanguagePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'language',
                },] }
    ];
    return LanguagePipe;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: src/marked-options.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MarkedOptions = /** @class */ (function () {
    function MarkedOptions() {
    }
    return MarkedOptions;
}());
if (false) {
    /**
     * A prefix URL for any relative link.
     * @type {?}
     */
    MarkedOptions.prototype.baseUrl;
    /**
     * Enable GFM line breaks. This option requires the gfm option to be true.
     * @type {?}
     */
    MarkedOptions.prototype.breaks;
    /**
     * Enable GitHub flavored markdown.
     * @type {?}
     */
    MarkedOptions.prototype.gfm;
    /**
     * Include an id attribute when emitting headings.
     * @type {?}
     */
    MarkedOptions.prototype.headerIds;
    /**
     * Set the prefix for header tag ids.
     * @type {?}
     */
    MarkedOptions.prototype.headerPrefix;
    /**
     * Set the prefix for code block classes.
     * @type {?}
     */
    MarkedOptions.prototype.langPrefix;
    /**
     * Mangle autolinks (<email\@domain.com>).
     * @type {?}
     */
    MarkedOptions.prototype.mangle;
    /**
     * Conform to obscure parts of markdown.pl as much as possible. Don't fix any of the original markdown bugs or poor behavior.
     * @type {?}
     */
    MarkedOptions.prototype.pedantic;
    /**
     * Type: object Default: new Renderer()
     *
     * An object containing functions to render tokens to HTML.
     * @type {?}
     */
    MarkedOptions.prototype.renderer;
    /**
     * Sanitize the output. Ignore any HTML that has been input.
     * @type {?}
     */
    MarkedOptions.prototype.sanitize;
    /**
     * Shows an HTML error message when rendering fails.
     * @type {?}
     */
    MarkedOptions.prototype.silent;
    /**
     * Use smarter list behavior than the original markdown. May eventually be default with the old behavior moved into pedantic.
     * @type {?}
     */
    MarkedOptions.prototype.smartLists;
    /**
     * Use "smart" typograhic punctuation for things like quotes and dashes.
     * @type {?}
     */
    MarkedOptions.prototype.smartypants;
    /**
     * Enable GFM tables. This option requires the gfm option to be true.
     * @type {?}
     */
    MarkedOptions.prototype.tables;
    /**
     * Generate closing slash for self-closing tags (<br/> instead of <br>)
     * @type {?}
     */
    MarkedOptions.prototype.xhtml;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/marked-renderer.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MarkedRenderer = /** @class */ (function (_super) {
    __extends(MarkedRenderer, _super);
    function MarkedRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MarkedRenderer;
}(Renderer));

/**
 * @fileoverview added by tsickle
 * Generated from: src/markdown.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// tslint:disable:max-line-length
/** @type {?} */
var errorKatexNotLoaded = '[ngx-markdown When using the [katex] attribute you *have to* include KaTeX files to `angular.json` or use imports. See README for more information';
/** @type {?} */
var errorSrcWithoutHttpClient = '[ngx-markdown] When using the [src] attribute you *have to* pass the `HttpClient` as a parameter of the `forRoot` method. See README for more information';
// tslint:enable:max-line-length
var MarkdownService = /** @class */ (function () {
    function MarkdownService(platform, http, domSanitizer, options) {
        this.platform = platform;
        this.http = http;
        this.domSanitizer = domSanitizer;
        this.options = options;
    }
    Object.defineProperty(MarkdownService.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () { return this._options; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._options = Object.assign({}, { renderer: new MarkedRenderer() }, this._options, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownService.prototype, "renderer", {
        get: /**
         * @return {?}
         */
        function () { return this.options.renderer; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.options.renderer = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} markdown
     * @param {?=} decodeHtml
     * @param {?=} markedOptions
     * @return {?}
     */
    MarkdownService.prototype.compile = /**
     * @param {?} markdown
     * @param {?=} decodeHtml
     * @param {?=} markedOptions
     * @return {?}
     */
    function (markdown, decodeHtml, markedOptions) {
        if (decodeHtml === void 0) { decodeHtml = false; }
        if (markedOptions === void 0) { markedOptions = this.options; }
        /** @type {?} */
        var precompiled = this.trimIndentation(markdown);
        precompiled = decodeHtml ? this.decodeHtml(precompiled) : precompiled;
        /** @type {?} */
        var compiled = parse(precompiled, markedOptions);
        return markedOptions.sanitize && !markedOptions.sanitizer
            ? this.domSanitizer.sanitize(SecurityContext.HTML, compiled)
            : compiled;
    };
    /**
     * @param {?} src
     * @return {?}
     */
    MarkdownService.prototype.getSource = /**
     * @param {?} src
     * @return {?}
     */
    function (src) {
        var _this = this;
        if (!this.http) {
            throw new Error(errorSrcWithoutHttpClient);
        }
        return this.http
            .get(src, { responseType: 'text' })
            .pipe(map((/**
         * @param {?} markdown
         * @return {?}
         */
        function (markdown) { return _this.handleExtension(src, markdown); })));
    };
    /**
     * @param {?=} element
     * @return {?}
     */
    MarkdownService.prototype.highlight = /**
     * @param {?=} element
     * @return {?}
     */
    function (element) {
        if (isPlatformBrowser(this.platform) && typeof Prism !== 'undefined') {
            if (!element) {
                element = document;
            }
            /** @type {?} */
            var noLanguageElements = element.querySelectorAll('pre code:not([class*="language-"])');
            Array.prototype.forEach.call(noLanguageElements, (/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.classList.add('language-none'); }));
            Prism.highlightAllUnder(element);
        }
    };
    /**
     * @param {?} html
     * @param {?=} options
     * @return {?}
     */
    MarkdownService.prototype.renderKatex = /**
     * @param {?} html
     * @param {?=} options
     * @return {?}
     */
    function (html, options) {
        if (typeof katex === 'undefined' || typeof katex.renderToString === 'undefined') {
            throw new Error(errorKatexNotLoaded);
        }
        return html.replace(/\$([^\s\n][^$]*?)\$/gm, (/**
         * @param {?} _
         * @param {?} tex
         * @return {?}
         */
        function (_, tex) { return katex.renderToString(tex, options); }));
    };
    /**
     * @private
     * @param {?} html
     * @return {?}
     */
    MarkdownService.prototype.decodeHtml = /**
     * @private
     * @param {?} html
     * @return {?}
     */
    function (html) {
        if (isPlatformBrowser(this.platform)) {
            /** @type {?} */
            var textarea = document.createElement('textarea');
            textarea.innerHTML = html;
            return textarea.value;
        }
        return html;
    };
    /**
     * @private
     * @param {?} src
     * @param {?} markdown
     * @return {?}
     */
    MarkdownService.prototype.handleExtension = /**
     * @private
     * @param {?} src
     * @param {?} markdown
     * @return {?}
     */
    function (src, markdown) {
        /** @type {?} */
        var extension = src
            ? src.split('?')[0].split('.').splice(-1).join()
            : null;
        return extension !== 'md'
            ? '```' + extension + '\n' + markdown + '\n```'
            : markdown;
    };
    /**
     * @private
     * @param {?} markdown
     * @return {?}
     */
    MarkdownService.prototype.trimIndentation = /**
     * @private
     * @param {?} markdown
     * @return {?}
     */
    function (markdown) {
        if (!markdown) {
            return '';
        }
        /** @type {?} */
        var indentStart;
        return markdown
            .split('\n')
            .map((/**
         * @param {?} line
         * @return {?}
         */
        function (line) {
            /** @type {?} */
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
        })).join('\n');
    };
    MarkdownService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    MarkdownService.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: HttpClient, decorators: [{ type: Optional }] },
        { type: DomSanitizer },
        { type: MarkedOptions }
    ]; };
    return MarkdownService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    MarkdownService.prototype._options;
    /**
     * @type {?}
     * @private
     */
    MarkdownService.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    MarkdownService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    MarkdownService.prototype.domSanitizer;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/prism-plugin.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {string} */
var PrismPlugin = {
    LineHighlight: "line-highlight",
    LineNumbers: "line-numbers",
};

/**
 * @fileoverview added by tsickle
 * Generated from: src/markdown.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MarkdownComponent = /** @class */ (function () {
    function MarkdownComponent(element, markdownService) {
        this.element = element;
        this.markdownService = markdownService;
        this.error = new EventEmitter();
        this.load = new EventEmitter();
        this.ready = new EventEmitter();
        this._katex = false;
        this._lineHighlight = false;
        this._lineNumbers = false;
    }
    Object.defineProperty(MarkdownComponent.prototype, "katex", {
        // Plugin - katex
        get: 
        // Plugin - katex
        /**
         * @return {?}
         */
        function () { return this._katex; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._katex = this.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownComponent.prototype, "lineNumbers", {
        // Plugin - lineNumbers
        get: 
        // Plugin - lineNumbers
        /**
         * @return {?}
         */
        function () { return this._lineNumbers; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._lineNumbers = this.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MarkdownComponent.prototype, "lineHighlight", {
        // Plugin - lineHighlight
        get: 
        // Plugin - lineHighlight
        /**
         * @return {?}
         */
        function () { return this._lineHighlight; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._lineHighlight = this.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MarkdownComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.data != null) {
            this.handleData();
            return;
        }
        if (this.src != null) {
            this.handleSrc();
            return;
        }
    };
    /**
     * @return {?}
     */
    MarkdownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (!this.data && !this.src) {
            this.handleTransclusion();
        }
    };
    /**
     * @param {?} markdown
     * @param {?=} decodeHtml
     * @return {?}
     */
    MarkdownComponent.prototype.render = /**
     * @param {?} markdown
     * @param {?=} decodeHtml
     * @return {?}
     */
    function (markdown, decodeHtml) {
        if (decodeHtml === void 0) { decodeHtml = false; }
        /** @type {?} */
        var compiled = this.markdownService.compile(markdown, decodeHtml);
        compiled = this.katex ? this.markdownService.renderKatex(compiled, this.katexOptions) : compiled;
        this.element.nativeElement.innerHTML = compiled;
        this.handlePlugins();
        this.markdownService.highlight(this.element.nativeElement);
        this.ready.emit();
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MarkdownComponent.prototype.coerceBooleanProperty = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return value != null && "" + value !== 'false';
    };
    /**
     * @private
     * @return {?}
     */
    MarkdownComponent.prototype.handleData = /**
     * @private
     * @return {?}
     */
    function () {
        this.render(this.data);
    };
    /**
     * @private
     * @return {?}
     */
    MarkdownComponent.prototype.handleSrc = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.markdownService
            .getSource(this.src)
            .subscribe((/**
         * @param {?} markdown
         * @return {?}
         */
        function (markdown) {
            _this.render(markdown);
            _this.load.emit(markdown);
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return _this.error.emit(error); }));
    };
    /**
     * @private
     * @return {?}
     */
    MarkdownComponent.prototype.handleTransclusion = /**
     * @private
     * @return {?}
     */
    function () {
        this.render(this.element.nativeElement.innerHTML, true);
    };
    /**
     * @private
     * @return {?}
     */
    MarkdownComponent.prototype.handlePlugins = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.lineHighlight) {
            this.setPluginClass(this.element.nativeElement, PrismPlugin.LineHighlight);
            this.setPluginOptions(this.element.nativeElement, { dataLine: this.line, dataLineOffset: this.lineOffset });
        }
        if (this.lineNumbers) {
            this.setPluginClass(this.element.nativeElement, PrismPlugin.LineNumbers);
            this.setPluginOptions(this.element.nativeElement, { dataStart: this.start });
        }
    };
    /**
     * @private
     * @param {?} element
     * @param {?} plugin
     * @return {?}
     */
    MarkdownComponent.prototype.setPluginClass = /**
     * @private
     * @param {?} element
     * @param {?} plugin
     * @return {?}
     */
    function (element, plugin) {
        var _a;
        /** @type {?} */
        var preElements = element.querySelectorAll('pre');
        for (var i = 0; i < preElements.length; i++) {
            /** @type {?} */
            var classes = plugin instanceof Array ? plugin : [plugin];
            (_a = preElements.item(i).classList).add.apply(_a, __spread(classes));
        }
    };
    /**
     * @private
     * @param {?} element
     * @param {?} options
     * @return {?}
     */
    MarkdownComponent.prototype.setPluginOptions = /**
     * @private
     * @param {?} element
     * @param {?} options
     * @return {?}
     */
    function (element, options) {
        var _this = this;
        /** @type {?} */
        var preElements = element.querySelectorAll('pre');
        var _loop_1 = function (i) {
            Object.keys(options).forEach((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                /** @type {?} */
                var attributeValue = options[option];
                if (!!attributeValue) {
                    /** @type {?} */
                    var attributeName = _this.toLispCase(option);
                    preElements.item(i).setAttribute(attributeName, attributeValue.toString());
                }
            }));
        };
        for (var i = 0; i < preElements.length; i++) {
            _loop_1(i);
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    MarkdownComponent.prototype.toLispCase = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var upperChars = value.match(/([A-Z])/g);
        if (!upperChars) {
            return value;
        }
        /** @type {?} */
        var str = value.toString();
        for (var i = 0, n = upperChars.length; i < n; i++) {
            str = str.replace(new RegExp(upperChars[i]), '-' + upperChars[i].toLowerCase());
        }
        if (str.slice(0, 1) === '-') {
            str = str.slice(1);
        }
        return str;
    };
    MarkdownComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'markdown, [markdown]',
                    template: '<ng-content></ng-content>'
                }] }
    ];
    /** @nocollapse */
    MarkdownComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: MarkdownService }
    ]; };
    MarkdownComponent.propDecorators = {
        data: [{ type: Input }],
        src: [{ type: Input }],
        katex: [{ type: Input }],
        katexOptions: [{ type: Input }],
        lineNumbers: [{ type: Input }],
        start: [{ type: Input }],
        lineHighlight: [{ type: Input }],
        line: [{ type: Input }],
        lineOffset: [{ type: Input }],
        error: [{ type: Output }],
        load: [{ type: Output }],
        ready: [{ type: Output }]
    };
    return MarkdownComponent;
}());
if (false) {
    /** @type {?} */
    MarkdownComponent.prototype.data;
    /** @type {?} */
    MarkdownComponent.prototype.src;
    /** @type {?} */
    MarkdownComponent.prototype.katexOptions;
    /** @type {?} */
    MarkdownComponent.prototype.start;
    /** @type {?} */
    MarkdownComponent.prototype.line;
    /** @type {?} */
    MarkdownComponent.prototype.lineOffset;
    /** @type {?} */
    MarkdownComponent.prototype.error;
    /** @type {?} */
    MarkdownComponent.prototype.load;
    /** @type {?} */
    MarkdownComponent.prototype.ready;
    /**
     * @type {?}
     * @private
     */
    MarkdownComponent.prototype._katex;
    /**
     * @type {?}
     * @private
     */
    MarkdownComponent.prototype._lineHighlight;
    /**
     * @type {?}
     * @private
     */
    MarkdownComponent.prototype._lineNumbers;
    /** @type {?} */
    MarkdownComponent.prototype.element;
    /** @type {?} */
    MarkdownComponent.prototype.markdownService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: src/markdown.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MarkdownPipe = /** @class */ (function () {
    function MarkdownPipe(elementRef, markdownService, zone) {
        this.elementRef = elementRef;
        this.markdownService = markdownService;
        this.zone = zone;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    MarkdownPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (value == null) {
            return '';
        }
        if (typeof value !== 'string') {
            console.error("MarkdownPipe has been invoked with an invalid value type [" + value + "]");
            return value;
        }
        /** @type {?} */
        var markdown = this.markdownService.compile(value);
        this.zone.onStable
            .pipe(first())
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.markdownService.highlight(_this.elementRef.nativeElement); }));
        return markdown;
    };
    MarkdownPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'markdown',
                },] }
    ];
    /** @nocollapse */
    MarkdownPipe.ctorParameters = function () { return [
        { type: ElementRef },
        { type: MarkdownService },
        { type: NgZone }
    ]; };
    return MarkdownPipe;
}());
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

/**
 * @fileoverview added by tsickle
 * Generated from: src/markdown.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MarkdownModuleConfig() { }
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
var initialMarkedOptions = {
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

/**
 * @fileoverview added by tsickle
 * Generated from: src/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-markdown.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { KatexOptions, LanguagePipe, MarkdownComponent, MarkdownModule, MarkdownPipe, MarkdownService, MarkedOptions, MarkedRenderer, PrismPlugin, errorKatexNotLoaded, errorSrcWithoutHttpClient, initialMarkedOptions };
//# sourceMappingURL=ngx-markdown.js.map
