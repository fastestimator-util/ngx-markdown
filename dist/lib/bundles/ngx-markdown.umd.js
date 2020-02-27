(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/common/http'), require('@angular/platform-browser'), require('marked'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('ngx-markdown', ['exports', '@angular/core', '@angular/common', '@angular/common/http', '@angular/platform-browser', 'marked', 'rxjs/operators'], factory) :
    (global = global || self, factory(global['ngx-markdown'] = {}, global.ng.core, global.ng.common, global.ng.common.http, global.ng.platformBrowser, global.marked, global.rxjs.operators));
}(this, (function (exports, core, common, http, platformBrowser, marked, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

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
            { type: core.Pipe, args: [{
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
    }(marked.Renderer));

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
            var compiled = marked.parse(precompiled, markedOptions);
            return markedOptions.sanitize && !markedOptions.sanitizer
                ? this.domSanitizer.sanitize(core.SecurityContext.HTML, compiled)
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
                .pipe(operators.map((/**
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
            if (common.isPlatformBrowser(this.platform) && typeof Prism !== 'undefined') {
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
            return html.replace(/\$([^$]+?)\$/gm, (/**
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
            if (common.isPlatformBrowser(this.platform)) {
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
            { type: core.Injectable }
        ];
        /** @nocollapse */
        MarkdownService.ctorParameters = function () { return [
            { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
            { type: http.HttpClient, decorators: [{ type: core.Optional }] },
            { type: platformBrowser.DomSanitizer },
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
            this.error = new core.EventEmitter();
            this.load = new core.EventEmitter();
            this.ready = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'markdown, [markdown]',
                        template: '<ng-content></ng-content>'
                    }] }
        ];
        /** @nocollapse */
        MarkdownComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: MarkdownService }
        ]; };
        MarkdownComponent.propDecorators = {
            data: [{ type: core.Input }],
            src: [{ type: core.Input }],
            katex: [{ type: core.Input }],
            katexOptions: [{ type: core.Input }],
            lineNumbers: [{ type: core.Input }],
            start: [{ type: core.Input }],
            lineHighlight: [{ type: core.Input }],
            line: [{ type: core.Input }],
            lineOffset: [{ type: core.Input }],
            error: [{ type: core.Output }],
            load: [{ type: core.Output }],
            ready: [{ type: core.Output }]
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
                .pipe(operators.first())
                .subscribe((/**
             * @return {?}
             */
            function () { return _this.markdownService.highlight(_this.elementRef.nativeElement); }));
            return markdown;
        };
        MarkdownPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'markdown',
                    },] }
        ];
        /** @nocollapse */
        MarkdownPipe.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: MarkdownService },
            { type: core.NgZone }
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
            { type: core.NgModule, args: [{
                        exports: sharedDeclarations,
                        declarations: sharedDeclarations,
                    },] }
        ];
        return MarkdownModule;
    }());

    exports.KatexOptions = KatexOptions;
    exports.LanguagePipe = LanguagePipe;
    exports.MarkdownComponent = MarkdownComponent;
    exports.MarkdownModule = MarkdownModule;
    exports.MarkdownPipe = MarkdownPipe;
    exports.MarkdownService = MarkdownService;
    exports.MarkedOptions = MarkedOptions;
    exports.MarkedRenderer = MarkedRenderer;
    exports.PrismPlugin = PrismPlugin;
    exports.errorKatexNotLoaded = errorKatexNotLoaded;
    exports.errorSrcWithoutHttpClient = errorSrcWithoutHttpClient;
    exports.initialMarkedOptions = initialMarkedOptions;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-markdown.umd.js.map
