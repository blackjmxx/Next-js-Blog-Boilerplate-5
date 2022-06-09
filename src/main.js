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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Template */ \"./src/components/Template.js\");\n\n\n\nvar App = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"forwardRef\"])(function (_ref, ref) {var _ref$urls = _ref.urls,urls = _ref$urls === void 0 ? [] : _ref$urls,_ref$color = _ref.color,color = _ref$color === void 0 ? \"\" : _ref$color,_ref$text = _ref.text,text = _ref$text === void 0 ? \"\" : _ref$text;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Template__WEBPACK_IMPORTED_MODULE_1__[\"default\"], { urls: urls, color: color, text: text, ref: ref });\n});\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/Template.js":
/*!************************************!*\
  !*** ./src/components/Template.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar SVGComponent = function SVGComponent(_ref) {var _ref$urls = _ref.urls,urls = _ref$urls === void 0 ? [] : _ref$urls,_ref$color = _ref.color,color = _ref$color === void 0 ? \"\" : _ref$color,_ref$text = _ref.text,text = _ref$text === void 0 ? \"\" : _ref$text;\n  return /*#__PURE__*/(\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", { style: { width: \"100%\", height: \"100%\" } }, /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"svg\", {\n      id: \"Calque_1\",\n      \"data-name\": \"Calque 1\",\n      xmlns: \"http://www.w3.org/2000/svg\",\n      xmlnsXlink: \"http://www.w3.org/1999/xlink\",\n      viewBox: \"0 0 1500 500\" }, /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"defs\", null, /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"linearGradient\", {\n      id: \"D\\\\xE9grad\\\\xE9_sans_nom_3\",\n      x1: 871.96,\n      y1: -375.5,\n      x2: 875.43,\n      y2: -254.08,\n      gradientTransform: \"translate(0 457.89)\",\n      gradientUnits: \"userSpaceOnUse\" }, /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"stop\", { offset: 0, stopColor: \"#4b4b4b\" }), /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"stop\", { offset: 1, stopColor: \"#523e35\", stopOpacity: 0 })), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"radialGradient\", {\n      id: \"D\\\\xE9grad\\\\xE9_sans_nom_10\",\n      cx: 1169.32,\n      cy: -397.19,\n      r: 0.57,\n      gradientTransform: \"matrix(-236.05, -9.66, 5.6, -136.92, 279195.92, -42829.1)\",\n      gradientUnits: \"userSpaceOnUse\" }, /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"stop\", { offset: 0, stopColor: \"#fff\" }), /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"stop\", { offset: 1, stopColor: \"#fff\", stopOpacity: 0 })), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"linearGradient\", {\n      id: \"D\\\\xE9grad\\\\xE9_sans_nom_3-2\",\n      x1: 428.06,\n      y1: -370.41,\n      x2: 430.19,\n      y2: -295.93,\n      xlinkHref: \"#D\\\\xE9grad\\\\xE9_sans_nom_3\" }), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"radialGradient\", {\n      id: \"D\\\\xE9grad\\\\xE9_sans_nom_10-2\",\n      cx: 1170.84,\n      cy: -396.5,\n      r: 0.57,\n      gradientTransform: \"matrix(-144.77, -5.93, 3.44, -83.98, 171341.11, -26158.26)\",\n      xlinkHref: \"#D\\\\xE9grad\\\\xE9_sans_nom_10\" }), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"linearGradient\", {\n      id: \"D\\\\xE9grad\\\\xE9_sans_nom_9\",\n      x1: 488.02,\n      y1: -279.97,\n      x2: 488.02,\n      y2: -28.85,\n      gradientTransform: \"translate(335.29 -206.78) rotate(90)\",\n      gradientUnits: \"userSpaceOnUse\" }, /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"stop\", { offset: 0, stopColor: \"#292929\" }), /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"stop\", { offset: 1, stopColor: \"#523e35\", stopOpacity: 0 })), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"radialGradient\", {\n      id: \"D\\\\xE9grad\\\\xE9_sans_nom_10-3\",\n      cx: 1171.02,\n      cy: -403.28,\n      r: 0.57,\n      gradientTransform: \"matrix(84.22, -119.39, 73.37, 51.75, -68638.9, 161014.44)\",\n      xlinkHref: \"#D\\\\xE9grad\\\\xE9_sans_nom_10\" }), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"clipPath\", { id: \"clip-path\", transform: \"translate(0 0.1)\" }, /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n      x: 401.25,\n      y: 168.76,\n      width: 172.78,\n      height: 172.78,\n      rx: 22.07,\n      transform: \"translate(221.41 736.83) rotate(-88.69)\",\n      style: {\n        fill: \"none\" } })), /*#__PURE__*/\n\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"linearGradient\", {\n      id: \"D\\\\xE9grad\\\\xE9_sans_nom_9-2\",\n      x1: 764.41,\n      y1: -651.63,\n      x2: 764.41,\n      y2: -336.92,\n      gradientTransform: \"translate(-56.96 728.19)\",\n      xlinkHref: \"#D\\\\xE9grad\\\\xE9_sans_nom_9\" }), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"radialGradient\", {\n      id: \"D\\\\xE9grad\\\\xE9_sans_nom_10-4\",\n      cx: 1170.44,\n      cy: -399.73,\n      r: 0.57,\n      gradientTransform: \"matrix(-158.16, -105.54, 63.57, -95.27, 211308.24, 85797.75)\",\n      xlinkHref: \"#D\\\\xE9grad\\\\xE9_sans_nom_10\" }), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"clipPath\", { id: \"clip-path-2\", transform: \"translate(0 0.1)\" }, /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n      x: 578.82,\n      y: 85.62,\n      width: 241.68,\n      height: 241.68,\n      rx: 22.07,\n      transform: \"translate(-29.77 197.67) rotate(-15.75)\",\n      style: {\n        fill: \"none\" } })), /*#__PURE__*/\n\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"linearGradient\", {\n      id: \"D\\\\xE9grad\\\\xE9_sans_nom_9-3\",\n      x1: 1035.46,\n      y1: -60.43,\n      x2: 1035.46,\n      y2: 217.21,\n      gradientTransform: \"translate(1098.39 -748.86) rotate(90)\",\n      xlinkHref: \"#D\\\\xE9grad\\\\xE9_sans_nom_9\" }), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"radialGradient\", {\n      id: \"D\\\\xE9grad\\\\xE9_sans_nom_10-5\",\n      cx: 1171.51,\n      cy: -407.24,\n      r: 0.57,\n      gradientTransform: \"matrix(93.11, -133.57, 81.75, 56.98, -74869.84, 180032.51)\",\n      xlinkHref: \"#D\\\\xE9grad\\\\xE9_sans_nom_10\" }), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"clipPath\", { id: \"clip-path-3\", transform: \"translate(0 0.1)\" }, /*#__PURE__*/\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n      x: 924.18,\n      y: 160.26,\n      width: 200.28,\n      height: 200.28,\n      rx: 22.07,\n      transform: \"translate(584.29 1221.35) rotate(-79.66)\",\n      style: {\n        fill: \"none\" } }))), /*#__PURE__*/\n\n\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n      id: \"background\",\n      width: 1500,\n      height: 500,\n      style: {\n        fill: color } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M900.71,31.93a25.67,25.67,0,0,0-36,4.42c-.45.57-.86,1.15-1.26,1.75l-117.16,179a25.66,25.66,0,0,0,5.67,34.27L848.77,327a25.65,25.65,0,0,0,36-4.42c.44-.57.86-1.15,1.25-1.75l117.16-179a25.66,25.66,0,0,0-5.67-34.28Z\",\n      transform: \"translate(0 0.1)\",\n      style: {\n        fill: \"#0f0f0f\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M900.71,31.93a25.67,25.67,0,0,0-36,4.42c-.45.57-.86,1.15-1.26,1.75l-117.16,179a25.66,25.66,0,0,0,5.67,34.27L848.77,327a25.65,25.65,0,0,0,36-4.42c.44-.57.86-1.15,1.25-1.75l117.16-179a25.66,25.66,0,0,0-5.67-34.28Z\",\n      transform: \"translate(0 0.1)\",\n      style: {\n        fill: \"none\",\n        strokeWidth: \"1.1035855521712572px\",\n        stroke: \"url(#D\\xE9grad\\xE9_sans_nom_3)\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M900.71,31.93a25.67,25.67,0,0,0-36,4.42c-.45.57-.86,1.15-1.26,1.75l-117.16,179a25.66,25.66,0,0,0,5.67,34.27L848.77,327a25.65,25.65,0,0,0,36-4.42c.44-.57.86-1.15,1.25-1.75l117.16-179a25.66,25.66,0,0,0-5.67-34.28Z\",\n      transform: \"translate(0 0.1)\",\n      style: {\n        fill: \"none\",\n        strokeWidth: \"1.1035855521712572px\",\n        stroke: \"url(#D\\xE9grad\\xE9_sans_nom_10)\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M867.59,42.52a20.62,20.62,0,0,1,28.56-5.89c.46.31.91.63,1.34,1l95.73,74.79a20.63,20.63,0,0,1,4.54,27.54L881.88,316.41a20.63,20.63,0,0,1-28.57,5.89c-.45-.3-.9-.62-1.33-1l-95.73-74.79A20.59,20.59,0,0,1,751.71,219Z\",\n      transform: \"translate(0 0.1)\",\n      style: {\n        fill: \"none\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M867.59,42.52a20.62,20.62,0,0,1,28.56-5.89c.46.31.91.63,1.34,1l95.73,74.79a20.63,20.63,0,0,1,4.54,27.54L881.88,316.41a20.63,20.63,0,0,1-28.57,5.89c-.45-.3-.9-.62-1.33-1l-95.73-74.79A20.59,20.59,0,0,1,751.71,219Z\",\n      transform: \"translate(0 0.1)\" }), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M889.76,159.93c-6.57,11.22-3.61,26.79,6.63,34.8-10.24-8-23.88-5.39-30.47,5.81,6.58-11.22,3.61-26.79-6.63-34.8C869.54,173.73,883.18,171.13,889.76,159.93Z\",\n      transform: \"translate(0 0.1)\",\n      style: {\n        fill: \"#adadad\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M454.15,62.87a25.65,25.65,0,0,0-36,4.42c-.45.57-.86,1.15-1.26,1.75L355.69,162.5a25.68,25.68,0,0,0,5.67,34.28l44,34.37a25.65,25.65,0,0,0,36-4.41c.44-.57.86-1.15,1.25-1.76l61.19-93.43a25.67,25.67,0,0,0-5.68-34.29Z\",\n      transform: \"translate(0 0.1)\",\n      style: {\n        fill: \"#0f0f0f\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M454.15,62.87a25.65,25.65,0,0,0-36,4.42c-.45.57-.86,1.15-1.26,1.75L355.69,162.5a25.68,25.68,0,0,0,5.67,34.28l44,34.37a25.65,25.65,0,0,0,36-4.41c.44-.57.86-1.15,1.25-1.76l61.19-93.43a25.67,25.67,0,0,0-5.68-34.29Z\",\n      transform: \"translate(0 0.1)\",\n      style: {\n        fill: \"none\",\n        strokeWidth: \"1.1035855521712572px\",\n        stroke: \"url(#D\\xE9grad\\xE9_sans_nom_3-2)\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M454.15,62.87a25.65,25.65,0,0,0-36,4.42c-.45.57-.86,1.15-1.26,1.75L355.69,162.5a25.68,25.68,0,0,0,5.67,34.28l44,34.37a25.65,25.65,0,0,0,36-4.41c.44-.57.86-1.15,1.25-1.76l61.19-93.43a25.67,25.67,0,0,0-5.68-34.29Z\",\n      transform: \"translate(0 0.1)\",\n      style: {\n        fill: \"none\",\n        strokeWidth: \"1.1035855521712572px\",\n        stroke: \"url(#D\\xE9grad\\xE9_sans_nom_10-2)\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M420.64,70.26a20.62,20.62,0,0,1,28.57-5.88c.45.3.9.62,1.33,1l46.11,36a20.6,20.6,0,0,1,4.54,27.54L438.9,223.78a20.64,20.64,0,0,1-28.57,5.89c-.46-.31-.91-.63-1.34-1l-46.11-36a20.62,20.62,0,0,1-4.54-27.54Z\",\n      transform: \"translate(0 0.1)\",\n      style: {\n        fill: \"none\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M420.64,70.26a20.62,20.62,0,0,1,28.57-5.88c.45.3.9.62,1.33,1l46.11,36a20.6,20.6,0,0,1,4.54,27.54L438.9,223.78a20.64,20.64,0,0,1-28.57,5.89c-.46-.31-.91-.63-1.34-1l-46.11-36a20.62,20.62,0,0,1-4.54-27.54Z\",\n      transform: \"translate(0 0.1)\" }), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"path\", {\n      d: \"M439,135a17,17,0,0,0,4.07,21.34A12.31,12.31,0,0,0,424.36,160a17,17,0,0,0-4.07-21.35A12.32,12.32,0,0,0,439,135Z\",\n      transform: \"translate(0 0.1)\",\n      style: {\n        fill: \"#adadad\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n      x: 363.6,\n      y: 182.8,\n      width: 252.23,\n      height: 196.88,\n      rx: 29.98,\n      transform: \"translate(197.35 764.49) rotate(-88.69)\",\n      style: {\n        fill: \"#0f0f0f\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n      x: 363.6,\n      y: 182.8,\n      width: 252.23,\n      height: 196.88,\n      rx: 29.98,\n      transform: \"translate(197.35 764.49) rotate(-88.69)\",\n      style: {\n        fill: \"none\",\n        strokeWidth: \"1.1035855502425627px\",\n        stroke: \"url(#D\\xE9grad\\xE9_sans_nom_9)\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n      x: 363.6,\n      y: 182.8,\n      width: 252.23,\n      height: 196.88,\n      rx: 29.98,\n      transform: \"translate(197.35 764.49) rotate(-88.69)\",\n      style: {\n        fill: \"none\",\n        strokeWidth: \"1.1035855502425627px\",\n        stroke: \"url(#D\\xE9grad\\xE9_sans_nom_10-3)\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"g\", {\n      style: {\n        clipPath: \"url(#clip-path)\" } }, /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"image\", {\n      id: \"image1\",\n      width: 631,\n      height: 631,\n      transform: \"matrix(0.27, 0, 0, 0.27, 401.77, 167.4)\",\n      xlinkHref: urls[0],\n      style: {\n        isolation: \"isolate\" } })), /*#__PURE__*/\n\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n      x: 577.23,\n      y: 76.18,\n      width: 260.45,\n      height: 315.81,\n      rx: 29.98,\n      transform: \"matrix(0.96, -0.27, 0.27, 0.96, -36.98, 200.92)\",\n      style: {\n        fill: \"#0f0f0f\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n      x: 577.23,\n      y: 76.18,\n      width: 260.45,\n      height: 315.81,\n      rx: 29.98,\n      transform: \"matrix(0.96, -0.27, 0.27, 0.96, -36.98, 200.92)\",\n      style: {\n        fill: \"none\",\n        strokeWidth: \"1.1035855262892473px\",\n        stroke: \"url(#D\\xE9grad\\xE9_sans_nom_9-2)\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n      x: 577.23,\n      y: 76.18,\n      width: 260.45,\n      height: 315.81,\n      rx: 29.98,\n      transform: \"matrix(0.96, -0.27, 0.27, 0.96, -36.98, 200.92)\",\n      style: {\n        fill: \"none\",\n        strokeWidth: \"1.1035855262892473px\",\n        stroke: \"url(#D\\xE9grad\\xE9_sans_nom_10-4)\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"g\", {\n      style: {\n        clipPath: \"url(#clip-path-2)\" } }, /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"image\", {\n      id: \"image2\",\n      width: 631,\n      height: 631,\n      transform: \"translate(546.69 124.72) rotate(-16.84) scale(0.39)\",\n      xlinkHref: urls[1],\n      style: {\n        isolation: \"isolate\" } })), /*#__PURE__*/\n\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n      x: 880.72,\n      y: 176.53,\n      width: 278.74,\n      height: 220.13,\n      rx: 29.98,\n      transform: \"translate(555.05 1238.78) rotate(-79.66)\",\n      style: {\n        fill: \"#0f0f0f\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n      x: 880.72,\n      y: 176.53,\n      width: 278.74,\n      height: 220.13,\n      rx: 29.98,\n      transform: \"translate(555.05 1238.78) rotate(-79.66)\",\n      style: {\n        fill: \"none\",\n        strokeWidth: \"1.1035855701219175px\",\n        stroke: \"url(#D\\xE9grad\\xE9_sans_nom_9-3)\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"rect\", {\n      x: 880.72,\n      y: 176.53,\n      width: 278.74,\n      height: 220.13,\n      rx: 29.98,\n      transform: \"translate(555.05 1238.78) rotate(-79.66)\",\n      style: {\n        fill: \"none\",\n        strokeWidth: \"1.1035855701219175px\",\n        stroke: \"url(#D\\xE9grad\\xE9_sans_nom_10-5)\" } }), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"g\", {\n      style: {\n        clipPath: \"url(#clip-path-3)\" } }, /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"image\", {\n      id: \"image3\",\n      width: 631,\n      height: 631,\n      transform: \"translate(942.39 141.03) rotate(10.56) scale(0.33)\",\n      xlinkHref: urls[2],\n      style: {\n        isolation: \"isolate\" } })), /*#__PURE__*/\n\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"text\", {\n      id: \"title2\",\n      transform: \"matrix(0.52, -0.16, 0.29, 0.96, 636.68, 399.49)\",\n      style: {\n        isolation: \"isolate\",\n        fontSize: \"17.18749237060547px\",\n        fill: \"#fff\",\n        fontFamily: \"HelveticaNeue-Medium, Helvetica Neue\",\n        fontWeight: 500,\n        letterSpacing: \"-0.10695500955643594em\" } },\n\n\n    \"2title2\"), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"text\", {\n      id: \"tokenId2\",\n      transform: \"matrix(0.51, -0.16, 0.29, 0.96, 823.43, 343.1)\",\n      style: {\n        isolation: \"isolate\",\n        fontSize: \"17.236392974853516px\",\n        fill: \"#fff\",\n        fontFamily: \"HelveticaNeue-Medium, Helvetica Neue\",\n        fontWeight: 500,\n        letterSpacing: \"0.004996092602440488em\" } },\n\n\n    \"#2desc2\"), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"text\", {\n      id: \"tokenId1\",\n      transform: \"matrix(0.54, 0.01, -0.01, 1, 399.8, 385.34)\",\n      style: {\n        isolation: \"isolate\",\n        fontSize: \"10.312487602233887px\",\n        fill: \"#fff\",\n        fontFamily: \"HelveticaNeue-Bold, Helvetica Neue\",\n        fontWeight: 700,\n        letterSpacing: \"0.012887757111649873em\" } },\n\n\n    \"1title1\"), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"text\", {\n      id: \"tokenId1-2\",\n      transform: \"matrix(0.54, 0.01, -0.01, 1, 541.05, 386.14)\",\n      style: {\n        isolation: \"isolate\",\n        fontSize: \"10.8541898727417px\",\n        fill: \"#fff\",\n        fontFamily: \"HelveticaNeue-Medium, Helvetica Neue\",\n        fontWeight: 500,\n        letterSpacing: \"0.0049977817084392185em\" } },\n\n\n    \"#1desc1\"), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"g\", {\n      id: \"frameTitle\",\n      style: {\n        isolation: \"isolate\" } }, /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"text\", {\n      transform: \"matrix(0.91, 0.01, -0.01, 1, 651.15, 470.2)\",\n      style: {\n        isolation: \"isolate\",\n        fontSize: \"18.367326736450195px\",\n        fill: \"#fff\",\n        fontFamily: \"HelveticaNeue-Medium, Helvetica Neue\",\n        fontWeight: 500,\n        letterSpacing: \"0.004002199256334971em\" } },\n\n\n    text + \" x Fraam3\")), /*#__PURE__*/\n\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"text\", {\n      id: \"title3\",\n      transform: \"matrix(0.38, 0.07, -0.18, 0.98, 895.09, 381)\",\n      style: {\n        isolation: \"isolate\",\n        fontSize: \"19.870784759521484px\",\n        fill: \"#fff\",\n        fontFamily: \"HelveticaNeue-Medium, Helvetica Neue\",\n        fontWeight: 500,\n        letterSpacing: \"-0.10594785430094227em\" } },\n\n\n    \"3title3\"), /*#__PURE__*/\n\n    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"text\", {\n      id: \"tokenId3\",\n      transform: \"matrix(0.53, 0.1, -0.18, 0.98, 1060.96, 412.08)\",\n      style: {\n        isolation: \"isolate\",\n        fontSize: \"17.12550163269043px\",\n        fill: \"#fff\",\n        fontFamily: \"HelveticaNeue-Medium, Helvetica Neue\",\n        fontWeight: 500,\n        letterSpacing: \"0.004951235787119236em\" } },\n\n\n    \"#3desc3\"))));\n\n\n\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SVGComponent);\n\n//# sourceURL=webpack:///./src/components/Template.js?");

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