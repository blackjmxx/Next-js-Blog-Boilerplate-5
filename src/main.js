(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Template */ \"./src/components/Template.js\");\n\n\n\nvar App = function App(_ref) {var _ref$urls = _ref.urls,urls = _ref$urls === void 0 ? [] : _ref$urls,_ref$color = _ref.color,color = _ref$color === void 0 ? \"\" : _ref$color,_ref$text = _ref.text,text = _ref$text === void 0 ? \"\" : _ref$text;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Template__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { urls: urls, color: color, text: text });\n};\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/Template.js":
/*!************************************!*\
  !*** ./src/components/Template.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar SVGComponent = function SVGComponent(_ref) {var _ref$urls = _ref.urls,urls = _ref$urls === void 0 ? [] : _ref$urls,_ref$color = _ref.color,color = _ref$color === void 0 ? \"\" : _ref$color,_ref$text = _ref.text,text = _ref$text === void 0 ? \"\" : _ref$text;\n  return /*#__PURE__*/(\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { style: { width: \"100%\", height: \"100%\" } }, /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n      id: \"Calque_1\",\n      \"data-name\": \"Calque 1\",\n      xmlns: \"http://www.w3.org/2000/svg\",\n      xmlnsXlink: \"http://www.w3.org/1999/xlink\",\n      viewBox: \"0 0 1500 500\" }, /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"defs\", null, /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"linearGradient\", {\n      id: \"D\\\\xE9grad\\\\xE9_sans_nom_2\",\n      x1: -125.27,\n      y1: 211.78,\n      x2: -34.67,\n      y2: 169.06,\n      gradientTransform: \"matrix(1, 0, 0, -1, 0, 502)\",\n      gradientUnits: \"userSpaceOnUse\" }, /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"stop\", { offset: 0, stopColor: \"#4b4b4b\" }), /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"stop\", { offset: 1, stopColor: \"#523e35\", stopOpacity: 0 })), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"radialGradient\", {\n      id: \"D\\\\xE9grad\\\\xE9_sans_nom_10\",\n      cx: 3.41,\n      cy: 493.54,\n      r: 1,\n      gradientTransform: \"matrix(-54.49, 97.41, 56.5, 31.61, -27665.9, -15632.71)\",\n      gradientUnits: \"userSpaceOnUse\" }, /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"stop\", { offset: 0, stopColor: \"#fff\" }), /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"stop\", { offset: 1, stopColor: \"#fff\", stopOpacity: 0 })), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"linearGradient\", {\n      id: \"D\\\\xE9grad\\\\xE9_sans_nom_2-2\",\n      x1: 494.67,\n      y1: 375.05,\n      x2: 513.9,\n      y2: 222.4,\n      xlinkHref: \"#D\\\\xE9grad\\\\xE9_sans_nom_2\" }), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"radialGradient\", {\n      id: \"D\\\\xE9grad\\\\xE9_sans_nom_10-2\",\n      cx: 4.22,\n      cy: 500.68,\n      r: 1,\n      gradientTransform: \"matrix(-171.17, 9.56, 5.55, 99.29, -1440.67, -49410.88)\",\n      xlinkHref: \"#D\\\\xE9grad\\\\xE9_sans_nom_10\" }), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"linearGradient\", {\n      id: \"D\\\\xE9grad\\\\xE9_sans_nom_24\",\n      x1: 197.56,\n      y1: 406.01,\n      x2: 197.56,\n      y2: 136.39,\n      gradientTransform: \"matrix(1, 0, 0, -1, 558.93, 502.15)\",\n      gradientUnits: \"userSpaceOnUse\" }, /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"stop\", { offset: 0, stopColor: \"#6d6d6d\" }), /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"stop\", { offset: 1, stopColor: \"#fff\", stopOpacity: 0.3 })), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"radialGradient\", {\n      id: \"D\\\\xE9grad\\\\xE9_sans_nom_10-3\",\n      cx: 5.56,\n      cy: 505.58,\n      r: 1,\n      gradientTransform: \"matrix(-92.15, -51.8, -28.87, 51.35, 15938.85, -25345.02)\",\n      xlinkHref: \"#D\\\\xE9grad\\\\xE9_sans_nom_10\" }), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"clipPath\", { id: \"clip-path\", transform: \"translate(558.93 0.15)\" }, /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n      x: 76.75,\n      y: 104.82,\n      width: 239.33,\n      height: 249.99,\n      rx: 25,\n      style: {\n        fill: \"none\" } }))), /*#__PURE__*/\n\n\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n      width: 1500,\n      height: 500,\n      style: {\n        fill: color } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M-157.5,252.44a16,16,0,0,0-7.06,22.41l93.67,162.83a16,16,0,0,0,20.61,6.5L51.83,396.3a16,16,0,0,0,7.06-22.41L-34.78,211.06a16,16,0,0,0-20.62-6.49Z\",\n      transform: \"translate(558.93 0.15)\",\n      style: {\n        fill: \"#0f0f0f\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M-157.5,252.44a16,16,0,0,0-7.06,22.41l93.67,162.83a16,16,0,0,0,20.61,6.5L51.83,396.3a16,16,0,0,0,7.06-22.41L-34.78,211.06a16,16,0,0,0-20.62-6.49Z\",\n      transform: \"translate(558.93 0.15)\",\n      style: {\n        fill: \"none\",\n        strokeWidth: \"1.926259994506836px\",\n        stroke: \"url(#D\\xE9grad\\xE9_sans_nom_2)\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M-157.5,252.44a16,16,0,0,0-7.06,22.41l93.67,162.83a16,16,0,0,0,20.61,6.5L51.83,396.3a16,16,0,0,0,7.06-22.41L-34.78,211.06a16,16,0,0,0-20.62-6.49Z\",\n      transform: \"translate(558.93 0.15)\",\n      style: {\n        fill: \"none\",\n        strokeWidth: \"1.926259994506836px\",\n        stroke: \"url(#D\\xE9grad\\xE9_sans_nom_10)\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M-158.38,274.81a13,13,0,0,1,5.75-18.23l97.95-45.93A13,13,0,0,1-37.88,216l90.59,158A13,13,0,0,1,47,392.17L-51,438.09a13,13,0,0,1-16.79-5.3Z\",\n      transform: \"translate(558.93 0.15)\",\n      style: {\n        fill: \"none\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M-158.38,274.81a13,13,0,0,1,5.75-18.23l97.95-45.93A13,13,0,0,1-37.88,216l90.59,158A13,13,0,0,1,47,392.17L-51,438.09a13,13,0,0,1-16.79-5.3Z\",\n      transform: \"translate(558.93 0.15)\" }), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M-61.6,306a22.79,22.79,0,0,0,28.06,8.1c-9.7,4.56-12.87,15.55-7.09,24.58a22.79,22.79,0,0,0-28.06-8.1C-59,326.06-55.82,315.06-61.6,306Z\",\n      transform: \"translate(558.93 0.15)\",\n      style: {\n        fill: \"#adadad\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M535.91,66.62a44.79,44.79,0,0,0-63.71,17L357.59,302.2a44.8,44.8,0,0,0,15.63,58.6l111,70.57a44.8,44.8,0,0,0,63.72-17l114.6-218.59a44.78,44.78,0,0,0-15.63-58.59Z\",\n      transform: \"translate(558.93 0.15)\",\n      style: {\n        fill: \"#0f0f0f\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M535.91,66.62a44.79,44.79,0,0,0-63.71,17L357.59,302.2a44.8,44.8,0,0,0,15.63,58.6l111,70.57a44.8,44.8,0,0,0,63.72-17l114.6-218.59a44.78,44.78,0,0,0-15.63-58.59Z\",\n      transform: \"translate(558.93 0.15)\",\n      style: {\n        fill: \"none\",\n        strokeWidth: \"1.926259994506836px\",\n        stroke: \"url(#D\\xE9grad\\xE9_sans_nom_2-2)\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M535.91,66.62a44.79,44.79,0,0,0-63.71,17L357.59,302.2a44.8,44.8,0,0,0,15.63,58.6l111,70.57a44.8,44.8,0,0,0,63.72-17l114.6-218.59a44.78,44.78,0,0,0-15.63-58.59Z\",\n      transform: \"translate(558.93 0.15)\",\n      style: {\n        fill: \"none\",\n        strokeWidth: \"1.926259994506836px\",\n        stroke: \"url(#D\\xE9grad\\xE9_sans_nom_10-2)\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M479.3,86.7a36,36,0,0,1,51.12-13.6l113.13,72a36,36,0,0,1,12.52,47.08L540.79,411.29a36,36,0,0,1-51.12,13.6l-113.13-72A36,36,0,0,1,364,305.85Z\",\n      transform: \"translate(558.93 0.15)\",\n      style: {\n        fill: \"none\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M479.3,86.7a36,36,0,0,1,51.12-13.6l113.13,72a36,36,0,0,1,12.52,47.08L540.79,411.29a36,36,0,0,1-51.12,13.6l-113.13-72A36,36,0,0,1,364,305.85Z\",\n      transform: \"translate(558.93 0.15)\" }), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M526.6,222.53c-6.92,14.94-1.27,34.21,12.62,43-13.9-8.82-30.77-3.88-37.71,11.05,6.92-14.94,1.27-34.21-12.62-43C502.79,242.4,519.66,237.46,526.6,222.53Z\",\n      transform: \"translate(558.93 0.15)\",\n      style: {\n        fill: \"#adadad\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n      x: 623.65,\n      y: 95.17,\n      width: 265.68,\n      height: 271.55,\n      rx: 31.96,\n      style: {\n        fill: \"#0f0f0f\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n      x: 623.65,\n      y: 95.17,\n      width: 265.68,\n      height: 271.55,\n      rx: 31.96,\n      style: {\n        fill: \"none\",\n        strokeWidth: \"1.926259994506836px\",\n        stroke: \"url(#D\\xE9grad\\xE9_sans_nom_24)\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n      x: 623.65,\n      y: 95.17,\n      width: 265.68,\n      height: 271.55,\n      rx: 31.96,\n      style: {\n        fill: \"none\",\n        strokeWidth: \"1.926259994506836px\",\n        stroke: \"url(#D\\xE9grad\\xE9_sans_nom_10-3)\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"g\", {\n      style: {\n        clipPath: \"url(#clip-path)\" } }, /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n      x: 635.68,\n      y: 104.97,\n      width: 230.33,\n      height: 230.99,\n      rx: 25,\n      style: {\n        fill: \"#0F0F0F\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"image\", {\n      width: 1043,\n      height: 1043,\n      transform: \"translate(630.93 105.15) scale(0.25 0.24)\",\n      xlinkHref: urls[0] })), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"text\", {\n      id: \"frameTitle\",\n      textAnchor: \"middle\",\n      transform: \"translate(750 480) scale(1.17 1)\",\n      style: {\n        fontSize: 29,\n        fill: \"#fff\",\n        fontFamily: \"PTSans-NarrowBold, PT Sans Narrow\",\n        fontWeight: 700 } }, /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tspan\", {\n      style: {\n        letterSpacing: \"-0.019000497977122714em\" } },\n\n\n    text)))));\n\n\n\n\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SVGComponent);\n\n//# sourceURL=webpack:///./src/components/Template.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/**\n * Entrypoint of the Remote Component.\n */\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_App__WEBPACK_IMPORTED_MODULE_0__[\"App\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ })

/******/ })));