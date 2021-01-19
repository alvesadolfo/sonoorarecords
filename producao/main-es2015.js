(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\n  <head>\n    <title>Sonoora Records</title>\n  </head>\n  <body>\n    <div class=\"flex\">\n      <div class=\"menu\">\n        <div class=\"w-100 logotipo text-center\">\n          <img src=\"../assets/logo-small.png\" />\n        </div>\n        <div class=\"w-100 text-center\">\n          <span class=\"item-menu\" (click)=\"navRoute('releases')\">Releases</span>\n          <span class=\"item-menu\" (click)=\"navRoute('artist')\">Artists</span>\n          <span class=\"item-menu\" (click)=\"navRoute('store')\">Store</span>\n          <span class=\"item-menu\" (click)=\"navRoute('demo')\">Demos</span>\n          <span class=\"item-menu\" (click)=\"navRoute('contact')\">Contact</span>\n          <span>\n            <app-links></app-links>\n          </span>\n        </div>\n      </div>\n      <div class=\"content w-100\">\n        <app-list-artists *ngIf=\"rota == 'artist'\"></app-list-artists>\n        <app-releases *ngIf=\"rota == 'releases'\" ></app-releases>\n        <app-store *ngIf=\"rota == 'store'\" ></app-store>\n        <app-demo *ngIf=\"rota == 'demo'\" ></app-demo>\n        <app-contact *ngIf=\"rota == 'contact'\" ></app-contact>\n      </div>\n    </div>\n  </body>\n</html>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/artist/artist.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/artist/artist.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex justify-between\" style=\"\">\n  <div class=\"perfil\">\n    <img height=\"300\" width=\"300\" src=\"{{perfilUrl}}\">\n  </div>\n  <div class=\"bio\">\n    <h2 class=\"no-margin uppercase\">{{artist.name}}</h2>\n    <h3 class=\"no-margin uppercase\">{{artist.country}}</h3>\n    <div>\n      <h5>\n        {{artist.bio}}\n      </h5>\n    </div>\n  </div>\n  <div *ngIf=\"fotos\" class=\"picture flex f-wrap justify-between\">\n    <div *ngFor=\"let foto of fotos;\">\n      <img *ngIf=\"foto.name_picture\" height=\"80\" width=\"80\" src=\"{{foto.name_picture}}\">\n    </div>\n  </div>\n</div>\n<div class=\"flex justify-between\">\n  <div style=\"width: 335px;\">\n    <app-links [instagram]=\"artist.link_instagram\" [facebook]=\"artist.link_facebook\" [youtube]=\"artist.link_youtube\" [soundcloud]=\"artist.link_soundcloud\"></app-links>\n  </div>\n  <div class=\"flex\" style=\"width: 335px;\">\n    <div style=\"margin:10px 10px 10px 0;\"><a href=\"{{artist.link_presskit}}\"><i class=\"fa fa-play\"></i> PRESS KIT</a></div>\n    <div style=\"margin:10px;\"><i class=\"fa fa-play\"></i> BOOK NOW</div>\n  </div>\n  <div style=\"width: 300px;\"></div>\n</div>\n<div class=\"soundcloud\">\n  <iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/779961007&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <h2>CONTACT</h2>\n  <div class=\"flex\" style=\"width:500px;\">\n    <div>\n      <input class=\"form-control\" type=\"text\" placeholder=\"Name\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"Phone\">\n    </div>\n    <div style=\"margin-left: 40px;\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"E-mail\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"Facebook Page\">\n    </div>\n  </div>\n  <div style=\"width:500px;\">\n    <textarea class=\"form-control\" rows=\"4\" cols=\"50\" placeholder=\"Message\"></textarea>\n    <a class=\"pull-right\">SEND</a>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/demo.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/demo/demo.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <h2>SUBMIT YOUR DEMO</h2>\n  <div class=\"flex\">\n    <div>\n      <input class=\"form-control\" type=\"text\" placeholder=\"Name\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"Country\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"Soundcloud Demo (Private Link)\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"Instagram\">\n      <textarea class=\"form-control\" rows=\"4\" cols=\"50\" placeholder=\"About You\"></textarea>\n    </div>\n    <div style=\"margin-left: 40px;\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"E-mail\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"Years of music production\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"Youtube Channel\">\n      <input class=\"form-control\" type=\"text\" placeholder=\"Facebook Page\">\n      <textarea class=\"form-control\" rows=\"4\" cols=\"50\" placeholder=\"Something Special\"></textarea>\n      <a class=\"pull-right\">SEND</a>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/links/links.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/links/links.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex justify-between\" style=\"width: 100px;margin: 10px 5px;\">\n  <div *ngIf=\"instagram\">\n    <a href=\"{{instagram}}\"><i class=\"pointer fa fa-instagram\"></i></a>\n  </div>\n  <div *ngIf=\"facebook\">\n    <a href=\"{{facebook}}\"><i class=\"pointer fa fa-facebook-square\"></i></a>\n  </div>\n  <div *ngIf=\"youtube\">\n    <a href=\"{{youtube}}\"><i class=\"pointer fa fa-youtube\"></i></a>\n  </div>\n  <div *ngIf=\"soundcloud\">\n    <a href=\"{{soundcloud}}\"><i class=\"pointer fa fa-soundcloud\"></i></a>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-artists/list-artists.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/list-artists/list-artists.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"!artist\" class=\"flex justify-between f-wrap\">\n  <div class=\"text-center\" *ngFor=\"let artist of artistList;\" (click)=\"getArtist(artist)\">\n    <div><img height=\"250\" width=\"250\" src=\"{{artist.name_picture}}\"></div>\n    <span class=\"uppercase\">{{artist.name}}</span>\n  </div>\n</div>\n\n<app-artist *ngIf=\"artist\" [artist]=\"artist\"></app-artist>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/releases/releases.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/releases/releases.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex\">\n  <div>\n    <img height=\"300\" src=\"https://picsum.photos/300/300\">\n  </div>\n  <div class=\"bio\">\n    <h2 class=\"no-margin\">ANDROID DREAMS</h2>\n    <h3 class=\"no-margin\">MENTAL BROADCAST</h3>\n    <div style=\"padding-top: 20px;\">\n      PSYCOLOGICAL is a psychedelic trance project, computer geek and sound designer from México, now part of the international label Blacklite Records. Groovy Psytrance with a touch of madness and full of real psychedelia is part of his signature sound, with more than 80 releases with some of the best labels and several collaborations with the best artists of the genre. Endeavour wants to bring all the listeners a \n    </div>\n  </div>\n</div>\n<div>\n  <app-links></app-links>\n</div>\n<div class=\"soundcloud\">\n  <iframe width=\"100%\" height=\"166\" scrolling=\"no\" frameborder=\"no\" allow=\"autoplay\" src=\"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/778530754&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true\"></iframe>\n</div>\n<div>\n  beatport\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/store/store.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/store/store.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3>\n  Is coming!\n</h3>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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
    }
    return __assign.apply(this, arguments);
}

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


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu {\n  width: 300px;\n  background-color: black;\n  background-image: url('bg-menu.png');\n  height: 100vh;\n}\n\n.content {\n  background-color: #000000;\n}\n\n.logotipo {\n  margin: 30px 0;\n}\n\n.item-menu {\n  text-transform: uppercase;\n  color: #fff;\n  cursor: pointer;\n  display: block;\n  margin: 5px 0;\n  font-size: 22px;\n}\n\n.item-menu:hover {\n  color: #65c5e9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG9sZm9hbHZlcy9EZXNlbnZvbHZpbWVudG8vc29ub29yYXJlY29yZHMvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7QUNDSjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51e1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2Fzc2V0cy9iZy1tZW51LnBuZycpO1xuICAgIGhlaWdodDogMTAwdmg7XG59XG5cbi5jb250ZW50e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5cbi5sb2dvdGlwb3tcbiAgICBtYXJnaW46IDMwcHggMDtcbn1cblxuXG4uaXRlbS1tZW51e1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogNXB4IDA7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uaXRlbS1tZW51OmhvdmVye1xuICAgIGNvbG9yOiAjNjVjNWU5O1xufSIsIi5tZW51IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vYXNzZXRzL2JnLW1lbnUucG5nXCIpO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5cbi5sb2dvdGlwbyB7XG4gIG1hcmdpbjogMzBweCAwO1xufVxuXG4uaXRlbS1tZW51IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLml0ZW0tbWVudTpob3ZlciB7XG4gIGNvbG9yOiAjNjVjNWU5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'sonoorarecords';
        this.rota = "releases";
    }
    navRoute(route) {
        this.rota = route;
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _artist_artist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./artist/artist.component */ "./src/app/artist/artist.component.ts");
/* harmony import */ var _releases_releases_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./releases/releases.component */ "./src/app/releases/releases.component.ts");
/* harmony import */ var _store_store_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/store.component */ "./src/app/store/store.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _links_links_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./links/links.component */ "./src/app/links/links.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _core_connect_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/connect.service */ "./src/app/core/connect.service.ts");
/* harmony import */ var _list_artists_list_artists_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./list-artists/list-artists.component */ "./src/app/list-artists/list-artists.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _artist_artist_component__WEBPACK_IMPORTED_MODULE_5__["ArtistComponent"],
            _releases_releases_component__WEBPACK_IMPORTED_MODULE_6__["ReleasesComponent"],
            _store_store_component__WEBPACK_IMPORTED_MODULE_7__["StoreComponent"],
            _demo_demo_component__WEBPACK_IMPORTED_MODULE_8__["DemoComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
            _links_links_component__WEBPACK_IMPORTED_MODULE_10__["LinksComponent"],
            _list_artists_list_artists_component__WEBPACK_IMPORTED_MODULE_13__["ListArtistsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
        ],
        providers: [
            _core_connect_service__WEBPACK_IMPORTED_MODULE_12__["ConnectService"]
        ],
        bootstrap: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/artist/artist.component.scss":
/*!**********************************************!*\
  !*** ./src/app/artist/artist.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".perfil {\n  height: 300px;\n  width: 335px;\n}\n\n.bio {\n  height: 300px;\n  width: 335px;\n}\n\n.picture {\n  height: 300px;\n  width: 300px;\n}\n\n.soundcloud {\n  width: 705px;\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG9sZm9hbHZlcy9EZXNlbnZvbHZpbWVudG8vc29ub29yYXJlY29yZHMvc3JjL2FwcC9hcnRpc3QvYXJ0aXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcnRpc3QvYXJ0aXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hcnRpc3QvYXJ0aXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucGVyZmlse1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDMzNXB4O1xufVxuXG4uYmlve1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgd2lkdGg6IDMzNXB4O1xufVxuXG4ucGljdHVyZXtcbiAgICBoZWlnaHQ6IDMwMHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbn1cblxuLnNvdW5kY2xvdWR7XG4gICAgd2lkdGg6IDcwNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59IiwiLnBlcmZpbCB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAzMzVweDtcbn1cblxuLmJpbyB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAzMzVweDtcbn1cblxuLnBpY3R1cmUge1xuICBoZWlnaHQ6IDMwMHB4O1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi5zb3VuZGNsb3VkIHtcbiAgd2lkdGg6IDcwNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/artist/artist.component.ts":
/*!********************************************!*\
  !*** ./src/app/artist/artist.component.ts ***!
  \********************************************/
/*! exports provided: ArtistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistComponent", function() { return ArtistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/connect.service */ "./src/app/core/connect.service.ts");



let ArtistComponent = class ArtistComponent {
    constructor(connectService) {
        this.connectService = connectService;
        this.baseURL = "http://sonoorarecords.com.br/api/";
        this.fotos = [];
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.connectService.getPerfilPicture(this.artist.codigo).subscribe(res => {
                this.perfilUrl = this.baseURL + res[0].name_picture;
            });
            yield this.connectService.getArtistPicture(this.artist.codigo).subscribe(res => {
                res = res.map(item => {
                    item.name_picture = this.baseURL + item.name_picture;
                    this.fotos.push(item);
                });
            });
        });
    }
};
ArtistComponent.ctorParameters = () => [
    { type: _core_connect_service__WEBPACK_IMPORTED_MODULE_2__["ConnectService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ArtistComponent.prototype, "artist", void 0);
ArtistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-artist',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./artist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/artist/artist.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./artist.component.scss */ "./src/app/artist/artist.component.scss")).default]
    })
], ArtistComponent);



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control {\n  display: block;\n  padding: 10px;\n  border-radius: 15px;\n  border: none;\n  margin: 5px;\n  width: 95%;\n}\n\ntextarea:focus, input:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG9sZm9hbHZlcy9EZXNlbnZvbHZpbWVudG8vc29ub29yYXJlY29yZHMvc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2x7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDVweDtcbiAgICB3aWR0aDogOTUlO1xufVxuXG50ZXh0YXJlYTpmb2N1cywgaW5wdXQ6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbn0iLCIuZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA5NSU7XG59XG5cbnRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/core/connect.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/connect.service.ts ***!
  \*****************************************/
/*! exports provided: ConnectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectService", function() { return ConnectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ConnectService = class ConnectService {
    constructor(http) {
        this.http = http;
        this.baseurl = 'http://sonoorarecords.com.br/api/rest.php';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
        };
    }
    getAllReleases() {
        return this.http.post(this.baseurl, { acao: 'get-all-releases' }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    getReleaseById() {
        return this.http.post(this.baseurl, { acao: 'get-release' }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    getAllArtists() {
        return this.http.post(this.baseurl, { acao: 'get-all-artists' }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    getArtist(id) {
        return this.http.post(this.baseurl, { acao: 'get-artist', id: id }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    getPerfilPicture(id) {
        return this.http.post(this.baseurl, { acao: 'get-perfil-picture', id: id }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    getPerfilPictureByList(list) {
        return this.http.post(this.baseurl, { acao: 'get-perfil-picture-by-list', list: list }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    getArtistPicture(id) {
        return this.http.post(this.baseurl, { acao: 'get-artist-picture', id: id }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    getAllProducts() {
        return this.http.post(this.baseurl, { acao: 'get-all-products' }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    getProduct() {
        return this.http.post(this.baseurl, { acao: 'get-product' }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    errorHandl(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
ConnectService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ConnectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ConnectService);



/***/ }),

/***/ "./src/app/demo/demo.component.scss":
/*!******************************************!*\
  !*** ./src/app/demo/demo.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control {\n  display: block;\n  padding: 10px;\n  border-radius: 15px;\n  border: none;\n  margin: 5px;\n  width: 95%;\n}\n\ntextarea:focus, input:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG9sZm9hbHZlcy9EZXNlbnZvbHZpbWVudG8vc29ub29yYXJlY29yZHMvc3JjL2FwcC9kZW1vL2RlbW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2RlbW8vZGVtby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2RlbW8vZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2x7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDVweDtcbiAgICB3aWR0aDogOTUlO1xufVxuXG50ZXh0YXJlYTpmb2N1cywgaW5wdXQ6Zm9jdXN7XG4gICAgb3V0bGluZTogbm9uZTtcbn0iLCIuZm9ybS1jb250cm9sIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiA5NSU7XG59XG5cbnRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/demo/demo.component.ts":
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DemoComponent = class DemoComponent {
    constructor() { }
    ngOnInit() {
    }
};
DemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-demo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./demo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/demo/demo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./demo.component.scss */ "./src/app/demo/demo.component.scss")).default]
    })
], DemoComponent);



/***/ }),

/***/ "./src/app/links/links.component.scss":
/*!********************************************!*\
  !*** ./src/app/links/links.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpbmtzL2xpbmtzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/links/links.component.ts":
/*!******************************************!*\
  !*** ./src/app/links/links.component.ts ***!
  \******************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LinksComponent = class LinksComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LinksComponent.prototype, "instagram", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LinksComponent.prototype, "facebook", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LinksComponent.prototype, "youtube", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LinksComponent.prototype, "soundcloud", void 0);
LinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-links',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./links.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/links/links.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./links.component.scss */ "./src/app/links/links.component.scss")).default]
    })
], LinksComponent);



/***/ }),

/***/ "./src/app/list-artists/list-artists.component.css":
/*!*********************************************************!*\
  !*** ./src/app/list-artists/list-artists.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpc3QtYXJ0aXN0cy9saXN0LWFydGlzdHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/list-artists/list-artists.component.ts":
/*!********************************************************!*\
  !*** ./src/app/list-artists/list-artists.component.ts ***!
  \********************************************************/
/*! exports provided: ListArtistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListArtistsComponent", function() { return ListArtistsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_connect_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/connect.service */ "./src/app/core/connect.service.ts");



let ListArtistsComponent = class ListArtistsComponent {
    constructor(connectService) {
        this.connectService = connectService;
        this.artistList = [];
        this.baseURL = "http://sonoorarecords.com.br/api/";
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let idsList = [];
            yield this.connectService.getAllArtists().subscribe(res => {
                this.artistList = res;
                res.map(item => {
                    idsList.push(item.codigo);
                });
                if (res && idsList) {
                    this.connectService.getPerfilPictureByList(idsList).subscribe(result => {
                        result.map(item => {
                            this.artistList.map(sub => {
                                if (item.cod_artist == sub.codigo) {
                                    sub.name_picture = this.baseURL + item.name_picture;
                                }
                            });
                        });
                    });
                }
            });
        });
    }
    getArtist(obj) {
        this.artist = obj;
    }
};
ListArtistsComponent.ctorParameters = () => [
    { type: _core_connect_service__WEBPACK_IMPORTED_MODULE_2__["ConnectService"] }
];
ListArtistsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-artists',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-artists.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/list-artists/list-artists.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-artists.component.css */ "./src/app/list-artists/list-artists.component.css")).default]
    })
], ListArtistsComponent);



/***/ }),

/***/ "./src/app/releases/releases.component.scss":
/*!**************************************************!*\
  !*** ./src/app/releases/releases.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bio {\n  width: 400px;\n  margin-left: 20px;\n}\n\n.soundcloud {\n  width: 800px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG9sZm9hbHZlcy9EZXNlbnZvbHZpbWVudG8vc29ub29yYXJlY29yZHMvc3JjL2FwcC9yZWxlYXNlcy9yZWxlYXNlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcmVsZWFzZXMvcmVsZWFzZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3JlbGVhc2VzL3JlbGVhc2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJpb3tcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7IFxufVxuXG4uc291bmRjbG91ZHtcbiAgICB3aWR0aDogODAwcHg7XG59IiwiLmJpbyB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbi5zb3VuZGNsb3VkIHtcbiAgd2lkdGg6IDgwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/releases/releases.component.ts":
/*!************************************************!*\
  !*** ./src/app/releases/releases.component.ts ***!
  \************************************************/
/*! exports provided: ReleasesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReleasesComponent", function() { return ReleasesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReleasesComponent = class ReleasesComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReleasesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-releases',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./releases.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/releases/releases.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./releases.component.scss */ "./src/app/releases/releases.component.scss")).default]
    })
], ReleasesComponent);



/***/ }),

/***/ "./src/app/store/store.component.css":
/*!*******************************************!*\
  !*** ./src/app/store/store.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0b3JlL3N0b3JlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/store/store.component.ts":
/*!******************************************!*\
  !*** ./src/app/store/store.component.ts ***!
  \******************************************/
/*! exports provided: StoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreComponent", function() { return StoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StoreComponent = class StoreComponent {
    constructor() { }
    ngOnInit() {
    }
};
StoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-store',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./store.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/store/store.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./store.component.css */ "./src/app/store/store.component.css")).default]
    })
], StoreComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/adolfoalves/Desenvolvimento/sonoorarecords/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map