"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkterra_graphs"] = self["webpackChunkterra_graphs"] || []).push([["packages_terra-graphs-docs_src_terra-dev-site_test_graphs_LineGraph_BasicLineGraphs_ShowOrHid-b2536f"],{

/***/ "./packages/terra-graphs-docs/src/terra-graphs-src/components/Graph.module.scss":
/*!**************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-graphs-src/components/Graph.module.scss ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL0dyYXBoLm1vZHVsZS5zY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy90ZXJyYS1ncmFwaHMtc3JjL2NvbXBvbmVudHMvR3JhcGgubW9kdWxlLnNjc3M/Mjk0YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-graphs-src/components/Graph.module.scss\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/example-datasets/dataObjects/Line/dataset1.js":
/*!**************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/dataObjects/Line/dataset1.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/popup */ \"./packages/terra-graphs-docs/src/example-datasets/popup.js\");\n/* harmony import */ var _createGraphValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createGraphValues */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/createGraphValues.js\");\n\n\n\nvar data = {\n  key: 'uid_1',\n  label: {\n    display: 'Data Label 1'\n  },\n  color: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n  onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadPopup,\n  values: (0,_createGraphValues__WEBPACK_IMPORTED_MODULE_2__.createGraphValuesWithSin)({\n    length: 20,\n    initialX: 85,\n    xModifier: 10,\n    yModifier: Math.PI\n  })\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9MaW5lL2RhdGFzZXQxLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBMkM7QUFDc0M7QUFDakI7QUFFaEUsSUFBTUcsSUFBSSxHQUFHO0VBQ1hDLEdBQUcsRUFBRSxPQUFPO0VBQ1pDLEtBQUssRUFBRTtJQUNMQyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RDLEtBQUssRUFBRVAsNkRBQU0sQ0FBQ1EsT0FBTyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7RUFDbENDLE9BQU8sRUFBRVYsMkZBQVM7RUFDbEJXLE1BQU0sRUFBRVYsNEVBQXdCLENBQUM7SUFDL0JXLE1BQU0sRUFBRSxFQUFFO0lBQUVDLFFBQVEsRUFBRSxFQUFFO0lBQUVDLFNBQVMsRUFBRSxFQUFFO0lBQUVDLFNBQVMsRUFBRUMsSUFBSSxDQUFDQztFQUMzRCxDQUFDO0FBQ0gsQ0FBQztBQUVELCtEQUFlZixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVycmEtZ3JhcGhzLy4vcGFja2FnZXMvdGVycmEtZ3JhcGhzLWRvY3Mvc3JjL2V4YW1wbGUtZGF0YXNldHMvZGF0YU9iamVjdHMvTGluZS9kYXRhc2V0MS5qcz83OWMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJib24gZnJvbSAnQGNlcm5lci9jYXJib24tZ3JhcGhzJztcbmltcG9ydCB7IGxvYWRQb3B1cCB9IGZyb20gJ0BjZXJuZXIvdGVycmEtZ3JhcGhzLWRvY3MvbGliL2V4YW1wbGUtZGF0YXNldHMvcG9wdXAnO1xuaW1wb3J0IHsgY3JlYXRlR3JhcGhWYWx1ZXNXaXRoU2luIH0gZnJvbSAnLi4vY3JlYXRlR3JhcGhWYWx1ZXMnO1xuXG5jb25zdCBkYXRhID0ge1xuICBrZXk6ICd1aWRfMScsXG4gIGxhYmVsOiB7XG4gICAgZGlzcGxheTogJ0RhdGEgTGFiZWwgMScsXG4gIH0sXG4gIGNvbG9yOiBDYXJib24uaGVscGVycy5DT0xPUlMuQkxBQ0ssXG4gIG9uQ2xpY2s6IGxvYWRQb3B1cCxcbiAgdmFsdWVzOiBjcmVhdGVHcmFwaFZhbHVlc1dpdGhTaW4oe1xuICAgIGxlbmd0aDogMjAsIGluaXRpYWxYOiA4NSwgeE1vZGlmaWVyOiAxMCwgeU1vZGlmaWVyOiBNYXRoLlBJLFxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iXSwibmFtZXMiOlsiQ2FyYm9uIiwibG9hZFBvcHVwIiwiY3JlYXRlR3JhcGhWYWx1ZXNXaXRoU2luIiwiZGF0YSIsImtleSIsImxhYmVsIiwiZGlzcGxheSIsImNvbG9yIiwiaGVscGVycyIsIkNPTE9SUyIsIkJMQUNLIiwib25DbGljayIsInZhbHVlcyIsImxlbmd0aCIsImluaXRpYWxYIiwieE1vZGlmaWVyIiwieU1vZGlmaWVyIiwiTWF0aCIsIlBJIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/dataObjects/Line/dataset1.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/example-datasets/dataObjects/Line/dataset4.js":
/*!**************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/dataObjects/Line/dataset4.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/popup */ \"./packages/terra-graphs-docs/src/example-datasets/popup.js\");\n\n\nvar data = {\n  key: 'uid_4',\n  label: {\n    display: 'Data Label 4'\n  },\n  shape: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.CROSS,\n  color: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.LIGHT_PURPLE,\n  onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadPopup,\n  values: new Array(15).fill('').map(function (_, i) {\n    return {\n      y: Math.sin(i) * Math.PI * 4,\n      x: 85 + i * 10,\n      region: {\n        start: Math.sin(i) * Math.PI * 4 - Math.PI,\n        end: Math.sin(i) * Math.PI * 4 + Math.PI\n      }\n    };\n  })\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9MaW5lL2RhdGFzZXQ0LmpzIiwibWFwcGluZ3MiOiI7OztBQUEyQztBQUNzQztBQUVqRixJQUFNRSxJQUFJLEdBQUc7RUFDWEMsR0FBRyxFQUFFLE9BQU87RUFDWkMsS0FBSyxFQUFFO0lBQ0xDLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFDREMsS0FBSyxFQUFFTiw2REFBTSxDQUFDTyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLO0VBQ3ZDQyxLQUFLLEVBQUVYLDZEQUFNLENBQUNPLE9BQU8sQ0FBQ0ssTUFBTSxDQUFDQyxZQUFZO0VBQ3pDQyxPQUFPLEVBQUViLDJGQUFTO0VBQ2xCYyxNQUFNLEVBQUUsSUFBSUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUNDLEdBQUcsQ0FBQyxVQUFDQyxDQUFDLEVBQUVDLENBQUM7SUFBQSxPQUFNO01BQzVDQyxDQUFDLEVBQUVDLElBQUksQ0FBQ0MsR0FBRyxDQUFDSCxDQUFDLENBQUMsR0FBR0UsSUFBSSxDQUFDRSxFQUFFLEdBQUcsQ0FBQztNQUM1QkMsQ0FBQyxFQUFFLEVBQUUsR0FBR0wsQ0FBQyxHQUFHLEVBQUU7TUFDZE0sTUFBTSxFQUFFO1FBQ05DLEtBQUssRUFBRUwsSUFBSSxDQUFDQyxHQUFHLENBQUNILENBQUMsQ0FBQyxHQUFHRSxJQUFJLENBQUNFLEVBQUUsR0FBRyxDQUFDLEdBQUdGLElBQUksQ0FBQ0UsRUFBRTtRQUMxQ0ksR0FBRyxFQUFFTixJQUFJLENBQUNDLEdBQUcsQ0FBQ0gsQ0FBQyxDQUFDLEdBQUdFLElBQUksQ0FBQ0UsRUFBRSxHQUFHLENBQUMsR0FBR0YsSUFBSSxDQUFDRTtNQUN4QztJQUNGLENBQUM7RUFBQSxDQUFDO0FBQ0osQ0FBQztBQUVELCtEQUFldEIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy9leGFtcGxlLWRhdGFzZXRzL2RhdGFPYmplY3RzL0xpbmUvZGF0YXNldDQuanM/MTYyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyYm9uIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocyc7XG5pbXBvcnQgeyBsb2FkUG9wdXAgfSBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL3BvcHVwJztcblxuY29uc3QgZGF0YSA9IHtcbiAga2V5OiAndWlkXzQnLFxuICBsYWJlbDoge1xuICAgIGRpc3BsYXk6ICdEYXRhIExhYmVsIDQnLFxuICB9LFxuICBzaGFwZTogQ2FyYm9uLmhlbHBlcnMuU0hBUEVTLkRBUksuQ1JPU1MsXG4gIGNvbG9yOiBDYXJib24uaGVscGVycy5DT0xPUlMuTElHSFRfUFVSUExFLFxuICBvbkNsaWNrOiBsb2FkUG9wdXAsXG4gIHZhbHVlczogbmV3IEFycmF5KDE1KS5maWxsKCcnKS5tYXAoKF8sIGkpID0+ICh7XG4gICAgeTogTWF0aC5zaW4oaSkgKiBNYXRoLlBJICogNCxcbiAgICB4OiA4NSArIGkgKiAxMCxcbiAgICByZWdpb246IHtcbiAgICAgIHN0YXJ0OiBNYXRoLnNpbihpKSAqIE1hdGguUEkgKiA0IC0gTWF0aC5QSSxcbiAgICAgIGVuZDogTWF0aC5zaW4oaSkgKiBNYXRoLlBJICogNCArIE1hdGguUEksXG4gICAgfSxcbiAgfSkpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcbiJdLCJuYW1lcyI6WyJDYXJib24iLCJsb2FkUG9wdXAiLCJkYXRhIiwia2V5IiwibGFiZWwiLCJkaXNwbGF5Iiwic2hhcGUiLCJoZWxwZXJzIiwiU0hBUEVTIiwiREFSSyIsIkNST1NTIiwiY29sb3IiLCJDT0xPUlMiLCJMSUdIVF9QVVJQTEUiLCJvbkNsaWNrIiwidmFsdWVzIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwiXyIsImkiLCJ5IiwiTWF0aCIsInNpbiIsIlBJIiwieCIsInJlZ2lvbiIsInN0YXJ0IiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/dataObjects/Line/dataset4.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/example-datasets/dataObjects/Line/dataset5noShapes.js":
/*!**********************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/dataObjects/Line/dataset5noShapes.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/popup */ \"./packages/terra-graphs-docs/src/example-datasets/popup.js\");\n/* harmony import */ var _createGraphValues__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createGraphValues */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/createGraphValues.js\");\n\n\n\nvar data = {\n  key: 'uid_5',\n  label: {\n    display: 'Data Label 5'\n  },\n  shape: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.SQUARE,\n  color: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.ORANGE,\n  onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadPopup,\n  values: (0,_createGraphValues__WEBPACK_IMPORTED_MODULE_2__.createGraphValuesWithCos)({\n    length: 20,\n    initialX: 85,\n    xModifier: 10,\n    yModifier: Math.PI * 5\n  }),\n  legendOptions: {\n    showLine: true,\n    showShape: false\n  },\n  showShapes: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9MaW5lL2RhdGFzZXQ1bm9TaGFwZXMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUEyQztBQUNzQztBQUNqQjtBQUVoRSxJQUFNRyxJQUFJLEdBQUc7RUFDWEMsR0FBRyxFQUFFLE9BQU87RUFDWkMsS0FBSyxFQUFFO0lBQ0xDLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFDREMsS0FBSyxFQUFFUCw2REFBTSxDQUFDUSxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxNQUFNO0VBQ3hDQyxLQUFLLEVBQUVaLDZEQUFNLENBQUNRLE9BQU8sQ0FBQ0ssTUFBTSxDQUFDQyxNQUFNO0VBQ25DQyxPQUFPLEVBQUVkLDJGQUFTO0VBQ2xCZSxNQUFNLEVBQUVkLDRFQUF3QixDQUFDO0lBQy9CZSxNQUFNLEVBQUUsRUFBRTtJQUFFQyxRQUFRLEVBQUUsRUFBRTtJQUFFQyxTQUFTLEVBQUUsRUFBRTtJQUFFQyxTQUFTLEVBQUVDLElBQUksQ0FBQ0MsRUFBRSxHQUFHO0VBQ2hFLENBQUMsQ0FBQztFQUNGQyxhQUFhLEVBQUU7SUFDYkMsUUFBUSxFQUFFLElBQUk7SUFDZEMsU0FBUyxFQUFFO0VBQ2IsQ0FBQztFQUNEQyxVQUFVLEVBQUU7QUFDZCxDQUFDO0FBRUQsK0RBQWV2QixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVycmEtZ3JhcGhzLy4vcGFja2FnZXMvdGVycmEtZ3JhcGhzLWRvY3Mvc3JjL2V4YW1wbGUtZGF0YXNldHMvZGF0YU9iamVjdHMvTGluZS9kYXRhc2V0NW5vU2hhcGVzLmpzPzk5NmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmJvbiBmcm9tICdAY2VybmVyL2NhcmJvbi1ncmFwaHMnO1xuaW1wb3J0IHsgbG9hZFBvcHVwIH0gZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvZXhhbXBsZS1kYXRhc2V0cy9wb3B1cCc7XG5pbXBvcnQgeyBjcmVhdGVHcmFwaFZhbHVlc1dpdGhDb3MgfSBmcm9tICcuLi9jcmVhdGVHcmFwaFZhbHVlcyc7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIGtleTogJ3VpZF81JyxcbiAgbGFiZWw6IHtcbiAgICBkaXNwbGF5OiAnRGF0YSBMYWJlbCA1JyxcbiAgfSxcbiAgc2hhcGU6IENhcmJvbi5oZWxwZXJzLlNIQVBFUy5EQVJLLlNRVUFSRSxcbiAgY29sb3I6IENhcmJvbi5oZWxwZXJzLkNPTE9SUy5PUkFOR0UsXG4gIG9uQ2xpY2s6IGxvYWRQb3B1cCxcbiAgdmFsdWVzOiBjcmVhdGVHcmFwaFZhbHVlc1dpdGhDb3Moe1xuICAgIGxlbmd0aDogMjAsIGluaXRpYWxYOiA4NSwgeE1vZGlmaWVyOiAxMCwgeU1vZGlmaWVyOiBNYXRoLlBJICogNSxcbiAgfSksXG4gIGxlZ2VuZE9wdGlvbnM6IHtcbiAgICBzaG93TGluZTogdHJ1ZSxcbiAgICBzaG93U2hhcGU6IGZhbHNlLFxuICB9LFxuICBzaG93U2hhcGVzOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iXSwibmFtZXMiOlsiQ2FyYm9uIiwibG9hZFBvcHVwIiwiY3JlYXRlR3JhcGhWYWx1ZXNXaXRoQ29zIiwiZGF0YSIsImtleSIsImxhYmVsIiwiZGlzcGxheSIsInNoYXBlIiwiaGVscGVycyIsIlNIQVBFUyIsIkRBUksiLCJTUVVBUkUiLCJjb2xvciIsIkNPTE9SUyIsIk9SQU5HRSIsIm9uQ2xpY2siLCJ2YWx1ZXMiLCJsZW5ndGgiLCJpbml0aWFsWCIsInhNb2RpZmllciIsInlNb2RpZmllciIsIk1hdGgiLCJQSSIsImxlZ2VuZE9wdGlvbnMiLCJzaG93TGluZSIsInNob3dTaGFwZSIsInNob3dTaGFwZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/dataObjects/Line/dataset5noShapes.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Line/lineDefault.js":
/*!************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Line/lineDefault.js ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar getLineDefaultConfig = function getLineDefaultConfig(id) {\n  return {\n    bindTo: id,\n    bindLegendTo: null,\n    axis: {\n      x: {\n        show: true,\n        label: 'Data',\n        lowerLimit: 80,\n        upperLimit: 280\n      },\n      y: {\n        show: true,\n        label: 'Line Set A',\n        lowerLimit: -18,\n        upperLimit: 18\n      },\n      y2: {\n        show: false,\n        label: 'Line Set B',\n        lowerLimit: 0,\n        upperLimit: 250\n      }\n    },\n    showLabel: true,\n    showLegend: true,\n    showShapes: true,\n    showVGrid: true,\n    showHGrid: true\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getLineDefaultConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9ncmFwaENvbmZpZ09iamVjdHMvTGluZS9saW5lRGVmYXVsdC5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUFvQkEsQ0FBSUMsRUFBRTtFQUFBLE9BQU07SUFDcENDLE1BQU0sRUFBRUQsRUFBRTtJQUNWRSxZQUFZLEVBQUUsSUFBSTtJQUNsQkMsSUFBSSxFQUFFO01BQ0pDLENBQUMsRUFBRTtRQUNEQyxJQUFJLEVBQUUsSUFBSTtRQUNWQyxLQUFLLEVBQUUsTUFBTTtRQUNiQyxVQUFVLEVBQUUsRUFBRTtRQUNkQyxVQUFVLEVBQUU7TUFDZCxDQUFDO01BQ0RDLENBQUMsRUFBRTtRQUNESixJQUFJLEVBQUUsSUFBSTtRQUNWQyxLQUFLLEVBQUUsWUFBWTtRQUNuQkMsVUFBVSxFQUFFLENBQUMsRUFBRTtRQUNmQyxVQUFVLEVBQUU7TUFDZCxDQUFDO01BQ0RFLEVBQUUsRUFBRTtRQUNGTCxJQUFJLEVBQUUsS0FBSztRQUNYQyxLQUFLLEVBQUUsWUFBWTtRQUNuQkMsVUFBVSxFQUFFLENBQUM7UUFDYkMsVUFBVSxFQUFFO01BQ2Q7SUFDRixDQUFDO0lBQ0RHLFNBQVMsRUFBRSxJQUFJO0lBQ2ZDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxVQUFVLEVBQUUsSUFBSTtJQUNoQkMsU0FBUyxFQUFFLElBQUk7SUFDZkMsU0FBUyxFQUFFO0VBQ2IsQ0FBQztBQUFBLENBQUM7QUFFRiwrREFBZWhCLG9CQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy9leGFtcGxlLWRhdGFzZXRzL2dyYXBoQ29uZmlnT2JqZWN0cy9MaW5lL2xpbmVEZWZhdWx0LmpzPzVmNTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0TGluZURlZmF1bHRDb25maWcgPSAoaWQpID0+ICh7XG4gIGJpbmRUbzogaWQsXG4gIGJpbmRMZWdlbmRUbzogbnVsbCxcbiAgYXhpczoge1xuICAgIHg6IHtcbiAgICAgIHNob3c6IHRydWUsXG4gICAgICBsYWJlbDogJ0RhdGEnLFxuICAgICAgbG93ZXJMaW1pdDogODAsXG4gICAgICB1cHBlckxpbWl0OiAyODAsXG4gICAgfSxcbiAgICB5OiB7XG4gICAgICBzaG93OiB0cnVlLFxuICAgICAgbGFiZWw6ICdMaW5lIFNldCBBJyxcbiAgICAgIGxvd2VyTGltaXQ6IC0xOCxcbiAgICAgIHVwcGVyTGltaXQ6IDE4LFxuICAgIH0sXG4gICAgeTI6IHtcbiAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgbGFiZWw6ICdMaW5lIFNldCBCJyxcbiAgICAgIGxvd2VyTGltaXQ6IDAsXG4gICAgICB1cHBlckxpbWl0OiAyNTAsXG4gICAgfSxcbiAgfSxcbiAgc2hvd0xhYmVsOiB0cnVlLFxuICBzaG93TGVnZW5kOiB0cnVlLFxuICBzaG93U2hhcGVzOiB0cnVlLFxuICBzaG93VkdyaWQ6IHRydWUsXG4gIHNob3dIR3JpZDogdHJ1ZSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRMaW5lRGVmYXVsdENvbmZpZztcblxuIl0sIm5hbWVzIjpbImdldExpbmVEZWZhdWx0Q29uZmlnIiwiaWQiLCJiaW5kVG8iLCJiaW5kTGVnZW5kVG8iLCJheGlzIiwieCIsInNob3ciLCJsYWJlbCIsImxvd2VyTGltaXQiLCJ1cHBlckxpbWl0IiwieSIsInkyIiwic2hvd0xhYmVsIiwic2hvd0xlZ2VuZCIsInNob3dTaGFwZXMiLCJzaG93VkdyaWQiLCJzaG93SEdyaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Line/lineDefault.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/LineGraph/BasicLineGraphs/ShowOrHideShapesPerDataset.test.jsx":
/*!*********************************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/LineGraph/BasicLineGraphs/ShowOrHideShapesPerDataset.test.jsx ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/helpers/utils */ \"./packages/carbon-graphs/src/js/helpers/utils.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_graphs_src_components_Line_LineGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Line/LineGraph.jsx\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_dev_site_ExampleGraphContainer_ExampleGraphContainer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss */ \"./packages/terra-graphs-docs/src/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Line_lineDefault__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineDefault */ \"./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Line/lineDefault.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Line_dataset1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset1 */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/Line/dataset1.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Line_dataset4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset4 */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/Line/dataset4.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Line_dataset5noShapes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/dataset5noShapes */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/Line/dataset5noShapes.js\");\n\n\n\n\n\n\n\n\nvar graphConfig = _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone((0,_cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Line_lineDefault__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('#showOrHideShapesPerDataset'));\nvar dataset = [_cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Line_dataset1__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Line_dataset4__WEBPACK_IMPORTED_MODULE_6__[\"default\"]), _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Line_dataset5noShapes__WEBPACK_IMPORTED_MODULE_7__[\"default\"])];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"tooltip\",\n    className: \"initial-tooltip\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_cerner_terra_graphs_docs_lib_terra_graphs_src_components_Line_LineGraph__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    graphID: \"showOrHideShapesPerDataset\",\n    graphConfig: graphConfig,\n    dataset: dataset\n  }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9ncmFwaHMvTGluZUdyYXBoL0Jhc2ljTGluZUdyYXBocy9TaG93T3JIaWRlU2hhcGVzUGVyRGF0YXNldC50ZXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDcUM7QUFDa0M7QUFDYTtBQUNRO0FBQ2xCO0FBQ0E7QUFDUTtBQUU1RyxJQUFNTyxXQUFXLEdBQUdOLGtGQUFLLENBQUNPLFNBQVMsQ0FBQ0wsOEhBQW9CLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUN4RixJQUFNTSxPQUFPLEdBQUcsQ0FDZFIsa0ZBQUssQ0FBQ08sU0FBUyxDQUFDSixnSEFBWSxDQUFDLEVBQzdCSCxrRkFBSyxDQUFDTyxTQUFTLENBQUNILGdIQUFZLENBQUMsRUFDN0JKLGtGQUFLLENBQUNPLFNBQVMsQ0FBQ0Ysd0hBQVksQ0FBQyxDQUM5QjtBQUVELCtEQUFlO0VBQUEsb0JBQ2JOLGdEQUFBLENBQUFBLDJDQUFBLHFCQUNFQSxnREFBQTtJQUFLWSxFQUFFLEVBQUMsU0FBUztJQUFDQyxTQUFTLEVBQUM7RUFBaUIsQ0FBRSxDQUFDLGVBQ2hEYixnREFBQSxDQUFDRSxnSEFBUztJQUFDWSxPQUFPLEVBQUMsNEJBQTRCO0lBQUNQLFdBQVcsRUFBRUEsV0FBWTtJQUFDRSxPQUFPLEVBQUVBO0VBQVEsQ0FBRSxDQUM3RixDQUFDO0FBQUEsQ0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy90ZXJyYS1kZXYtc2l0ZS90ZXN0L2dyYXBocy9MaW5lR3JhcGgvQmFzaWNMaW5lR3JhcGhzL1Nob3dPckhpZGVTaGFwZXNQZXJEYXRhc2V0LnRlc3QuanN4PzMwZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1dGlscyBmcm9tICdAY2VybmVyL2NhcmJvbi1ncmFwaHMvbGliL2pzL2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0IExpbmVHcmFwaCBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi90ZXJyYS1ncmFwaHMtc3JjL2NvbXBvbmVudHMvTGluZS9MaW5lR3JhcGgnO1xuaW1wb3J0ICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi90ZXJyYS1kZXYtc2l0ZS9FeGFtcGxlR3JhcGhDb250YWluZXIvRXhhbXBsZUdyYXBoQ29udGFpbmVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBnZXRMaW5lRGVmYXVsdENvbmZpZyBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL2dyYXBoQ29uZmlnT2JqZWN0cy9MaW5lL2xpbmVEZWZhdWx0JztcbmltcG9ydCBleGFtcGxlRGF0YTEgZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9MaW5lL2RhdGFzZXQxJztcbmltcG9ydCBleGFtcGxlRGF0YTIgZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9MaW5lL2RhdGFzZXQ0JztcbmltcG9ydCBleGFtcGxlRGF0YTMgZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9MaW5lL2RhdGFzZXQ1bm9TaGFwZXMnO1xuXG5jb25zdCBncmFwaENvbmZpZyA9IHV0aWxzLmRlZXBDbG9uZShnZXRMaW5lRGVmYXVsdENvbmZpZygnI3Nob3dPckhpZGVTaGFwZXNQZXJEYXRhc2V0JykpO1xuY29uc3QgZGF0YXNldCA9IFtcbiAgdXRpbHMuZGVlcENsb25lKGV4YW1wbGVEYXRhMSksXG4gIHV0aWxzLmRlZXBDbG9uZShleGFtcGxlRGF0YTIpLFxuICB1dGlscy5kZWVwQ2xvbmUoZXhhbXBsZURhdGEzKSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPD5cbiAgICA8ZGl2IGlkPVwidG9vbHRpcFwiIGNsYXNzTmFtZT1cImluaXRpYWwtdG9vbHRpcFwiIC8+XG4gICAgPExpbmVHcmFwaCBncmFwaElEPVwic2hvd09ySGlkZVNoYXBlc1BlckRhdGFzZXRcIiBncmFwaENvbmZpZz17Z3JhcGhDb25maWd9IGRhdGFzZXQ9e2RhdGFzZXR9IC8+XG4gIDwvPlxuKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInV0aWxzIiwiTGluZUdyYXBoIiwiZ2V0TGluZURlZmF1bHRDb25maWciLCJleGFtcGxlRGF0YTEiLCJleGFtcGxlRGF0YTIiLCJleGFtcGxlRGF0YTMiLCJncmFwaENvbmZpZyIsImRlZXBDbG9uZSIsImRhdGFzZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJpZCIsImNsYXNzTmFtZSIsImdyYXBoSUQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/LineGraph/BasicLineGraphs/ShowOrHideShapesPerDataset.test.jsx\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-graphs-src/components/Line/LineGraph.jsx":
/*!***************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-graphs-src/components/Line/LineGraph.jsx ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n/* harmony import */ var _Graph_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Graph.module.scss */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Graph.module.scss\");\n/* harmony import */ var _LineGraph_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LineGraph.module.scss */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Line/LineGraph.module.scss\");\n/* harmony import */ var _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/helpers/utils */ \"./packages/carbon-graphs/src/js/helpers/utils.js\");\n\n\n\n\n\n\n\nvar propTypes = {\n  /**\n   * The unique identifier for the graph and prefix for the canvas.\n   */\n  graphID: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string).isRequired,\n  /**\n   * Graph configuration object.\n   */\n  graphConfig: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object).isRequired,\n  /**\n   * Data to be displayed in graph.\n   */\n  dataset: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)),\n  /**\n   * Timeout to display multiple data contents in specific time interval.\n   */\n  timeout: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().number))\n};\nvar LineGraph = function LineGraph(_ref) {\n  var graphConfig = _ref.graphConfig,\n    dataset = _ref.dataset,\n    graphID = _ref.graphID,\n    timeout = _ref.timeout;\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(),\n    _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n    graph = _React$useState2[0],\n    setGraph = _React$useState2[1];\n  var graphLoadedRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n  var skipreflowRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n\n  // creation of canvas\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {\n    if (!graph) {\n      setGraph(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].api.graph(graphConfig));\n    }\n  }, [graph, graphConfig]);\n\n  // initial dataset load\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {\n    if (!graph || graphLoadedRef.current) {\n      return undefined;\n    }\n    var timeoutIds = [];\n    if (dataset) {\n      if (timeout) {\n        dataset.forEach(function (data, index) {\n          var timeoutId = setTimeout(function () {\n            return graph.graphContainer ? graph.loadContent(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].api.line(data)) : '';\n          }, timeout[index]);\n          timeoutIds.push(timeoutId);\n        });\n      } else {\n        dataset.forEach(function (data) {\n          graph.loadContent(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].api.line(data));\n        });\n      }\n    }\n    graphLoadedRef.current = true;\n    return function () {\n      timeoutIds.forEach(function (id) {\n        clearTimeout(id);\n      });\n    };\n  }, [graph, dataset, timeout]);\n\n  // panning\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {\n    if (!graph) {\n      return;\n    }\n    if (!skipreflowRef.current) {\n      skipreflowRef.current = true;\n      return;\n    }\n    graph.config.axis.x.upperLimit = graphConfig.axis.x.upperLimit;\n    graph.config.axis.x.lowerLimit = graphConfig.axis.x.lowerLimit;\n    var newDataset = {\n      panData: _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_5__[\"default\"].deepClone(dataset.panData),\n      eventline: _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_5__[\"default\"].deepClone(dataset.eventline)\n    };\n    graph.reflowMultipleDatasets(newDataset);\n  }, [graph, dataset, graphConfig]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: \"\".concat(graphID, \"-canvasContainer\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: graphID\n  }));\n};\nLineGraph.propTypes = propTypes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LineGraph);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL0xpbmUvTGluZUdyYXBoLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ1M7QUFDUTtBQUNiO0FBQ0c7QUFDOEI7QUFFL0QsSUFBTUksU0FBUyxHQUFHO0VBQ2hCO0FBQ0Y7QUFDQTtFQUNFQyxPQUFPLEVBQUVKLDBEQUFnQixDQUFDTSxVQUFVO0VBQ3BDO0FBQ0Y7QUFDQTtFQUNFQyxXQUFXLEVBQUVQLDBEQUFnQixDQUFDTSxVQUFVO0VBQ3hDO0FBQ0Y7QUFDQTtFQUNFRyxPQUFPLEVBQUVULHlEQUFpQixDQUFDQSwwREFBZ0IsQ0FBQztFQUM1QztBQUNGO0FBQ0E7RUFDRVcsT0FBTyxFQUFFWCx5REFBaUIsQ0FBQ0EsMERBQWdCO0FBQzdDLENBQUM7QUFFRCxJQUFNYSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQUMsSUFBQSxFQUVUO0VBQUEsSUFESlAsV0FBVyxHQUFBTyxJQUFBLENBQVhQLFdBQVc7SUFBRUUsT0FBTyxHQUFBSyxJQUFBLENBQVBMLE9BQU87SUFBRUwsT0FBTyxHQUFBVSxJQUFBLENBQVBWLE9BQU87SUFBRU8sT0FBTyxHQUFBRyxJQUFBLENBQVBILE9BQU87RUFFdEMsSUFBQUksZUFBQSxHQUEwQmhCLDJDQUFjLENBQUMsQ0FBQztJQUFBa0IsZ0JBQUEsR0FBQUMsZ0ZBQUEsQ0FBQUgsZUFBQTtJQUFuQ0ksS0FBSyxHQUFBRixnQkFBQTtJQUFFRyxRQUFRLEdBQUFILGdCQUFBO0VBQ3RCLElBQU1JLGNBQWMsR0FBR3RCLHlDQUFZLENBQUMsQ0FBQztFQUNyQyxJQUFNd0IsYUFBYSxHQUFHeEIseUNBQVksQ0FBQyxDQUFDOztFQUVwQztFQUNBQSw0Q0FBZSxDQUFDLFlBQU07SUFDcEIsSUFBSSxDQUFDb0IsS0FBSyxFQUFFO01BQ1ZDLFFBQVEsQ0FBQ25CLDZEQUFNLENBQUN3QixHQUFHLENBQUNOLEtBQUssQ0FBQ1osV0FBVyxDQUFDLENBQUM7SUFDekM7RUFDRixDQUFDLEVBQUUsQ0FBQ1ksS0FBSyxFQUFFWixXQUFXLENBQUMsQ0FBQzs7RUFFeEI7RUFDQVIsNENBQWUsQ0FBQyxZQUFNO0lBQ3BCLElBQUksQ0FBQ29CLEtBQUssSUFBSUUsY0FBYyxDQUFDSyxPQUFPLEVBQUU7TUFDcEMsT0FBT0MsU0FBUztJQUNsQjtJQUNBLElBQU1DLFVBQVUsR0FBRyxFQUFFO0lBRXJCLElBQUluQixPQUFPLEVBQUU7TUFDWCxJQUFJRSxPQUFPLEVBQUU7UUFDWEYsT0FBTyxDQUFDb0IsT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFLO1VBQy9CLElBQU1DLFNBQVMsR0FBR0MsVUFBVSxDQUMxQjtZQUFBLE9BQU9kLEtBQUssQ0FBQ2UsY0FBYyxHQUN2QmYsS0FBSyxDQUFDZ0IsV0FBVyxDQUFDbEMsNkRBQU0sQ0FBQ3dCLEdBQUcsQ0FBQ1csSUFBSSxDQUFDTixJQUFJLENBQUMsQ0FBQyxHQUN4QyxFQUFFO1VBQUEsQ0FBQyxFQUNQbkIsT0FBTyxDQUFDb0IsS0FBSyxDQUNmLENBQUM7VUFFREgsVUFBVSxDQUFDUyxJQUFJLENBQUNMLFNBQVMsQ0FBQztRQUM1QixDQUFDLENBQUM7TUFDSixDQUFDLE1BQU07UUFDTHZCLE9BQU8sQ0FBQ29CLE9BQU8sQ0FBQyxVQUFDQyxJQUFJLEVBQUs7VUFDeEJYLEtBQUssQ0FBQ2dCLFdBQVcsQ0FBQ2xDLDZEQUFNLENBQUN3QixHQUFHLENBQUNXLElBQUksQ0FBQ04sSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDO01BQ0o7SUFDRjtJQUNBVCxjQUFjLENBQUNLLE9BQU8sR0FBRyxJQUFJO0lBQzdCLE9BQU8sWUFBTTtNQUNYRSxVQUFVLENBQUNDLE9BQU8sQ0FBQyxVQUFDUyxFQUFFLEVBQUs7UUFBRUMsWUFBWSxDQUFDRCxFQUFFLENBQUM7TUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztFQUNILENBQUMsRUFBRSxDQUFDbkIsS0FBSyxFQUFFVixPQUFPLEVBQUVFLE9BQU8sQ0FBQyxDQUFDOztFQUU3QjtFQUNBWiw0Q0FBZSxDQUFDLFlBQU07SUFDcEIsSUFBSSxDQUFDb0IsS0FBSyxFQUFFO01BQ1Y7SUFDRjtJQUNBLElBQUksQ0FBQ0ksYUFBYSxDQUFDRyxPQUFPLEVBQUU7TUFDMUJILGFBQWEsQ0FBQ0csT0FBTyxHQUFHLElBQUk7TUFDNUI7SUFDRjtJQUVBUCxLQUFLLENBQUNxQixNQUFNLENBQUNDLElBQUksQ0FBQ0MsQ0FBQyxDQUFDQyxVQUFVLEdBQUdwQyxXQUFXLENBQUNrQyxJQUFJLENBQUNDLENBQUMsQ0FBQ0MsVUFBVTtJQUM5RHhCLEtBQUssQ0FBQ3FCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxDQUFDLENBQUNFLFVBQVUsR0FBR3JDLFdBQVcsQ0FBQ2tDLElBQUksQ0FBQ0MsQ0FBQyxDQUFDRSxVQUFVO0lBRTlELElBQU1DLFVBQVUsR0FBRztNQUNqQkMsT0FBTyxFQUFFNUMsa0ZBQUssQ0FBQzZDLFNBQVMsQ0FBQ3RDLE9BQU8sQ0FBQ3FDLE9BQU8sQ0FBQztNQUN6Q0UsU0FBUyxFQUFFOUMsa0ZBQUssQ0FBQzZDLFNBQVMsQ0FBQ3RDLE9BQU8sQ0FBQ3VDLFNBQVM7SUFDOUMsQ0FBQztJQUVEN0IsS0FBSyxDQUFDOEIsc0JBQXNCLENBQUNKLFVBQVUsQ0FBQztFQUMxQyxDQUFDLEVBQUUsQ0FBQzFCLEtBQUssRUFBRVYsT0FBTyxFQUFFRixXQUFXLENBQUMsQ0FBQztFQUVqQyxvQkFDRVIsZ0RBQUE7SUFBS3VDLEVBQUUsS0FBQWEsTUFBQSxDQUFLL0MsT0FBTztFQUFtQixnQkFDcENMLGdEQUFBO0lBQUt1QyxFQUFFLEVBQUVsQztFQUFRLENBQUUsQ0FDaEIsQ0FBQztBQUVWLENBQUM7QUFFRFMsU0FBUyxDQUFDVixTQUFTLEdBQUdBLFNBQVM7QUFFL0IsK0RBQWVVLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL0xpbmUvTGluZUdyYXBoLmpzeD8zMWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENhcmJvbiBmcm9tICdAY2VybmVyL2NhcmJvbi1ncmFwaHMnO1xuaW1wb3J0ICcuLi9HcmFwaC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgJy4vTGluZUdyYXBoLm1vZHVsZS5zY3NzJztcbmltcG9ydCB1dGlscyBmcm9tICdAY2VybmVyL2NhcmJvbi1ncmFwaHMvbGliL2pzL2hlbHBlcnMvdXRpbHMnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBncmFwaCBhbmQgcHJlZml4IGZvciB0aGUgY2FudmFzLlxuICAgKi9cbiAgZ3JhcGhJRDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogR3JhcGggY29uZmlndXJhdGlvbiBvYmplY3QuXG4gICAqL1xuICBncmFwaENvbmZpZzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogRGF0YSB0byBiZSBkaXNwbGF5ZWQgaW4gZ3JhcGguXG4gICAqL1xuICBkYXRhc2V0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgLyoqXG4gICAqIFRpbWVvdXQgdG8gZGlzcGxheSBtdWx0aXBsZSBkYXRhIGNvbnRlbnRzIGluIHNwZWNpZmljIHRpbWUgaW50ZXJ2YWwuXG4gICAqL1xuICB0aW1lb3V0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcbn07XG5cbmNvbnN0IExpbmVHcmFwaCA9ICh7XG4gIGdyYXBoQ29uZmlnLCBkYXRhc2V0LCBncmFwaElELCB0aW1lb3V0LFxufSkgPT4ge1xuICBjb25zdCBbZ3JhcGgsIHNldEdyYXBoXSA9IFJlYWN0LnVzZVN0YXRlKCk7XG4gIGNvbnN0IGdyYXBoTG9hZGVkUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIGNvbnN0IHNraXByZWZsb3dSZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICAvLyBjcmVhdGlvbiBvZiBjYW52YXNcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWdyYXBoKSB7XG4gICAgICBzZXRHcmFwaChDYXJib24uYXBpLmdyYXBoKGdyYXBoQ29uZmlnKSk7XG4gICAgfVxuICB9LCBbZ3JhcGgsIGdyYXBoQ29uZmlnXSk7XG5cbiAgLy8gaW5pdGlhbCBkYXRhc2V0IGxvYWRcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWdyYXBoIHx8IGdyYXBoTG9hZGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHRpbWVvdXRJZHMgPSBbXTtcblxuICAgIGlmIChkYXRhc2V0KSB7XG4gICAgICBpZiAodGltZW91dCkge1xuICAgICAgICBkYXRhc2V0LmZvckVhY2goKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICgpID0+IChncmFwaC5ncmFwaENvbnRhaW5lclxuICAgICAgICAgICAgICA/IGdyYXBoLmxvYWRDb250ZW50KENhcmJvbi5hcGkubGluZShkYXRhKSlcbiAgICAgICAgICAgICAgOiAnJyksXG4gICAgICAgICAgICB0aW1lb3V0W2luZGV4XSxcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdGltZW91dElkcy5wdXNoKHRpbWVvdXRJZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YXNldC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICAgICAgZ3JhcGgubG9hZENvbnRlbnQoQ2FyYm9uLmFwaS5saW5lKGRhdGEpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGdyYXBoTG9hZGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aW1lb3V0SWRzLmZvckVhY2goKGlkKSA9PiB7IGNsZWFyVGltZW91dChpZCk7IH0pO1xuICAgIH07XG4gIH0sIFtncmFwaCwgZGF0YXNldCwgdGltZW91dF0pO1xuXG4gIC8vIHBhbm5pbmdcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWdyYXBoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghc2tpcHJlZmxvd1JlZi5jdXJyZW50KSB7XG4gICAgICBza2lwcmVmbG93UmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGdyYXBoLmNvbmZpZy5heGlzLngudXBwZXJMaW1pdCA9IGdyYXBoQ29uZmlnLmF4aXMueC51cHBlckxpbWl0O1xuICAgIGdyYXBoLmNvbmZpZy5heGlzLngubG93ZXJMaW1pdCA9IGdyYXBoQ29uZmlnLmF4aXMueC5sb3dlckxpbWl0O1xuXG4gICAgY29uc3QgbmV3RGF0YXNldCA9IHtcbiAgICAgIHBhbkRhdGE6IHV0aWxzLmRlZXBDbG9uZShkYXRhc2V0LnBhbkRhdGEpLFxuICAgICAgZXZlbnRsaW5lOiB1dGlscy5kZWVwQ2xvbmUoZGF0YXNldC5ldmVudGxpbmUpLFxuICAgIH07XG5cbiAgICBncmFwaC5yZWZsb3dNdWx0aXBsZURhdGFzZXRzKG5ld0RhdGFzZXQpO1xuICB9LCBbZ3JhcGgsIGRhdGFzZXQsIGdyYXBoQ29uZmlnXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPXtgJHtncmFwaElEfS1jYW52YXNDb250YWluZXJgfT5cbiAgICAgIDxkaXYgaWQ9e2dyYXBoSUR9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5MaW5lR3JhcGgucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBMaW5lR3JhcGg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJDYXJib24iLCJ1dGlscyIsInByb3BUeXBlcyIsImdyYXBoSUQiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZ3JhcGhDb25maWciLCJvYmplY3QiLCJkYXRhc2V0IiwiYXJyYXlPZiIsInRpbWVvdXQiLCJudW1iZXIiLCJMaW5lR3JhcGgiLCJfcmVmIiwiX1JlYWN0JHVzZVN0YXRlIiwidXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJncmFwaCIsInNldEdyYXBoIiwiZ3JhcGhMb2FkZWRSZWYiLCJ1c2VSZWYiLCJza2lwcmVmbG93UmVmIiwidXNlRWZmZWN0IiwiYXBpIiwiY3VycmVudCIsInVuZGVmaW5lZCIsInRpbWVvdXRJZHMiLCJmb3JFYWNoIiwiZGF0YSIsImluZGV4IiwidGltZW91dElkIiwic2V0VGltZW91dCIsImdyYXBoQ29udGFpbmVyIiwibG9hZENvbnRlbnQiLCJsaW5lIiwicHVzaCIsImlkIiwiY2xlYXJUaW1lb3V0IiwiY29uZmlnIiwiYXhpcyIsIngiLCJ1cHBlckxpbWl0IiwibG93ZXJMaW1pdCIsIm5ld0RhdGFzZXQiLCJwYW5EYXRhIiwiZGVlcENsb25lIiwiZXZlbnRsaW5lIiwicmVmbG93TXVsdGlwbGVEYXRhc2V0cyIsImNyZWF0ZUVsZW1lbnQiLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-graphs-src/components/Line/LineGraph.jsx\n");

/***/ })

}]);