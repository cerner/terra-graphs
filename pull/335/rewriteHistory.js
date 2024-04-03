/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@cerner/terra-dev-site/lib/browser-router-redirect/rewriteHistory.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@cerner/terra-dev-site/lib/browser-router-redirect/rewriteHistory.js ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\");\n\nvar _session = _interopRequireDefault(__webpack_require__(/*! ./session */ \"./node_modules/@cerner/terra-dev-site/lib/browser-router-redirect/session.js\"));\n\n// This file works in concert with the gh-pages 404 redirect SPA strategy.\n// This file should be included in head.\n// Read href stored by redirect.js from the 404.html page.\nif ((0, _session.default)() !== undefined) {\n  var redirect = window.sessionStorage.redirect;\n  delete sessionStorage.redirect; // If we have a href and it is not the current location...\n\n  if (redirect && redirect !== window.location.href) {\n    // Replace the current history state with the intended href location.\n    window.history.replaceState(null, null, redirect);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGNlcm5lci90ZXJyYS1kZXYtc2l0ZS9saWIvYnJvd3Nlci1yb3V0ZXItcmVkaXJlY3QvcmV3cml0ZUhpc3RvcnkuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsNkJBQTZCLG1CQUFPLENBQUMsb0hBQThDOztBQUVuRixzQ0FBc0MsbUJBQU8sQ0FBQywrRkFBVzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL25vZGVfbW9kdWxlcy9AY2VybmVyL3RlcnJhLWRldi1zaXRlL2xpYi9icm93c2VyLXJvdXRlci1yZWRpcmVjdC9yZXdyaXRlSGlzdG9yeS5qcz8zMWQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9zZXNzaW9uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9zZXNzaW9uXCIpKTtcblxuLy8gVGhpcyBmaWxlIHdvcmtzIGluIGNvbmNlcnQgd2l0aCB0aGUgZ2gtcGFnZXMgNDA0IHJlZGlyZWN0IFNQQSBzdHJhdGVneS5cbi8vIFRoaXMgZmlsZSBzaG91bGQgYmUgaW5jbHVkZWQgaW4gaGVhZC5cbi8vIFJlYWQgaHJlZiBzdG9yZWQgYnkgcmVkaXJlY3QuanMgZnJvbSB0aGUgNDA0Lmh0bWwgcGFnZS5cbmlmICgoMCwgX3Nlc3Npb24uZGVmYXVsdCkoKSAhPT0gdW5kZWZpbmVkKSB7XG4gIHZhciByZWRpcmVjdCA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5yZWRpcmVjdDtcbiAgZGVsZXRlIHNlc3Npb25TdG9yYWdlLnJlZGlyZWN0OyAvLyBJZiB3ZSBoYXZlIGEgaHJlZiBhbmQgaXQgaXMgbm90IHRoZSBjdXJyZW50IGxvY2F0aW9uLi4uXG5cbiAgaWYgKHJlZGlyZWN0ICYmIHJlZGlyZWN0ICE9PSB3aW5kb3cubG9jYXRpb24uaHJlZikge1xuICAgIC8vIFJlcGxhY2UgdGhlIGN1cnJlbnQgaGlzdG9yeSBzdGF0ZSB3aXRoIHRoZSBpbnRlbmRlZCBocmVmIGxvY2F0aW9uLlxuICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCByZWRpcmVjdCk7XG4gIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@cerner/terra-dev-site/lib/browser-router-redirect/rewriteHistory.js\n");

/***/ }),

/***/ "./node_modules/@cerner/terra-dev-site/lib/browser-router-redirect/session.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@cerner/terra-dev-site/lib/browser-router-redirect/session.js ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\n\n// Function to check if sessionStorage property is readable.\nfunction getSessionStorage() {\n  try {\n    return window.sessionStorage;\n  } catch (e) {\n    if (true) {\n      // eslint-disable-next-line no-console\n      console.error(e.message);\n    }\n\n    return undefined;\n  }\n}\n\nvar _default = getSessionStorage;\nexports[\"default\"] = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGNlcm5lci90ZXJyYS1kZXYtc2l0ZS9saWIvYnJvd3Nlci1yb3V0ZXItcmVkaXJlY3Qvc2Vzc2lvbi5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkM7QUFDN0M7QUFDQSxDQUFDLEVBQUM7QUFDRixrQkFBZTs7QUFFZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL25vZGVfbW9kdWxlcy9AY2VybmVyL3RlcnJhLWRldi1zaXRlL2xpYi9icm93c2VyLXJvdXRlci1yZWRpcmVjdC9zZXNzaW9uLmpzPzY4ODEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5cbi8vIEZ1bmN0aW9uIHRvIGNoZWNrIGlmIHNlc3Npb25TdG9yYWdlIHByb3BlcnR5IGlzIHJlYWRhYmxlLlxuZnVuY3Rpb24gZ2V0U2Vzc2lvblN0b3JhZ2UoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHdpbmRvdy5zZXNzaW9uU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS5lcnJvcihlLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cblxudmFyIF9kZWZhdWx0ID0gZ2V0U2Vzc2lvblN0b3JhZ2U7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@cerner/terra-dev-site/lib/browser-router-redirect/session.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\nmodule.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx5QkFBeUIsU0FBUyx5QkFBeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanM/OTcwYSJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCwgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWUsIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/interopRequireDefault.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./node_modules/@cerner/terra-dev-site/lib/browser-router-redirect/rewriteHistory.js");
/******/ 	
/******/ })()
;