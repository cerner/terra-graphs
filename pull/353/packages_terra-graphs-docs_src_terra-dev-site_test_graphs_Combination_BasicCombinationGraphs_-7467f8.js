"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkterra_graphs"] = self["webpackChunkterra_graphs"] || []).push([["packages_terra-graphs-docs_src_terra-dev-site_test_graphs_Combination_BasicCombinationGraphs_-7467f8"],{

/***/ "./packages/terra-graphs-docs/src/terra-graphs-src/components/Bar/BarGraph.module.scss":
/*!*********************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-graphs-src/components/Bar/BarGraph.module.scss ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL0Jhci9CYXJHcmFwaC5tb2R1bGUuc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL0Jhci9CYXJHcmFwaC5tb2R1bGUuc2Nzcz80NDdhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-graphs-src/components/Bar/BarGraph.module.scss\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-graphs-src/components/Graph.module.scss":
/*!**************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-graphs-src/components/Graph.module.scss ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL0dyYXBoLm1vZHVsZS5zY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy90ZXJyYS1ncmFwaHMtc3JjL2NvbXBvbmVudHMvR3JhcGgubW9kdWxlLnNjc3M/Mjk0YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-graphs-src/components/Graph.module.scss\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/example-datasets/dataObjects/Combination/lineDataset2.js":
/*!*************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/dataObjects/Combination/lineDataset2.js ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/popup */ \"./packages/terra-graphs-docs/src/example-datasets/popup.js\");\n\n\nvar data = {\n  key: 'line_dataset',\n  graphType: 'Line',\n  label: {\n    display: 'Line Data Label'\n  },\n  shape: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.RHOMBUS,\n  color: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n  onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadPopup,\n  values: new Array(50).fill('').map(function (_, i) {\n    return {\n      y: Math.sin(i) * 5 + 10,\n      x: 10 + i * 5\n    };\n  })\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9Db21iaW5hdGlvbi9saW5lRGF0YXNldDIuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTJDO0FBQ3NDO0FBRWpGLElBQU1FLElBQUksR0FBRztFQUNYQyxHQUFHLEVBQUUsY0FBYztFQUNuQkMsU0FBUyxFQUFFLE1BQU07RUFDakJDLEtBQUssRUFBRTtJQUNMQyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RDLEtBQUssRUFBRVAsNkRBQU0sQ0FBQ1EsT0FBTyxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsT0FBTztFQUN6Q0MsS0FBSyxFQUFFWiw2REFBTSxDQUFDUSxPQUFPLENBQUNLLE1BQU0sQ0FBQ0MsSUFBSTtFQUNqQ0MsT0FBTyxFQUFFZCwyRkFBUztFQUNsQmUsTUFBTSxFQUFFLElBQUlDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDQyxHQUFHLENBQUMsVUFBQ0MsQ0FBQyxFQUFFQyxDQUFDO0lBQUEsT0FBTTtNQUM1Q0MsQ0FBQyxFQUFFQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0gsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7TUFDdkJJLENBQUMsRUFBRSxFQUFFLEdBQUdKLENBQUMsR0FBRztJQUNkLENBQUM7RUFBQSxDQUFDO0FBQ0osQ0FBQztBQUVELCtEQUFlbkIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy9leGFtcGxlLWRhdGFzZXRzL2RhdGFPYmplY3RzL0NvbWJpbmF0aW9uL2xpbmVEYXRhc2V0Mi5qcz9hN2EwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJib24gZnJvbSAnQGNlcm5lci9jYXJib24tZ3JhcGhzJztcbmltcG9ydCB7IGxvYWRQb3B1cCB9IGZyb20gJ0BjZXJuZXIvdGVycmEtZ3JhcGhzLWRvY3MvbGliL2V4YW1wbGUtZGF0YXNldHMvcG9wdXAnO1xuXG5jb25zdCBkYXRhID0ge1xuICBrZXk6ICdsaW5lX2RhdGFzZXQnLFxuICBncmFwaFR5cGU6ICdMaW5lJyxcbiAgbGFiZWw6IHtcbiAgICBkaXNwbGF5OiAnTGluZSBEYXRhIExhYmVsJyxcbiAgfSxcbiAgc2hhcGU6IENhcmJvbi5oZWxwZXJzLlNIQVBFUy5EQVJLLlJIT01CVVMsXG4gIGNvbG9yOiBDYXJib24uaGVscGVycy5DT0xPUlMuQkxVRSxcbiAgb25DbGljazogbG9hZFBvcHVwLFxuICB2YWx1ZXM6IG5ldyBBcnJheSg1MCkuZmlsbCgnJykubWFwKChfLCBpKSA9PiAoe1xuICAgIHk6IE1hdGguc2luKGkpICogNSArIDEwLFxuICAgIHg6IDEwICsgaSAqIDUsXG4gIH0pKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iXSwibmFtZXMiOlsiQ2FyYm9uIiwibG9hZFBvcHVwIiwiZGF0YSIsImtleSIsImdyYXBoVHlwZSIsImxhYmVsIiwiZGlzcGxheSIsInNoYXBlIiwiaGVscGVycyIsIlNIQVBFUyIsIkRBUksiLCJSSE9NQlVTIiwiY29sb3IiLCJDT0xPUlMiLCJCTFVFIiwib25DbGljayIsInZhbHVlcyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwieSIsIk1hdGgiLCJzaW4iLCJ4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/dataObjects/Combination/lineDataset2.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/example-datasets/dataObjects/Combination/pairedResultDataset.js":
/*!********************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/dataObjects/Combination/pairedResultDataset.js ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/popup */ \"./packages/terra-graphs-docs/src/example-datasets/popup.js\");\n\n\nvar data = {\n  key: 'paired_result_dataset',\n  graphType: 'Paired Result',\n  label: {\n    high: {\n      display: 'Paired Result High'\n    },\n    mid: {\n      display: 'Paired Result Median'\n    },\n    low: {\n      display: 'Paired Result Low'\n    }\n  },\n  yAxis: 'y2',\n  shape: {\n    high: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TEAR_ALT,\n    mid: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.RHOMBUS,\n    low: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TEAR_DROP\n  },\n  color: {\n    high: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n    mid: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n    low: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK\n  },\n  onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadPopup,\n  values: [{\n    high: {\n      x: 45,\n      y: 200\n    },\n    mid: {\n      x: 45,\n      y: 146\n    },\n    low: {\n      x: 45,\n      y: 75\n    }\n  }, {\n    high: {\n      x: 160,\n      y: 110\n    },\n    mid: {\n      x: 160,\n      y: 70\n    },\n    low: {\n      x: 160,\n      y: 30\n    }\n  }, {\n    high: {\n      x: 220,\n      y: 110\n    },\n    mid: {\n      x: 220,\n      y: 70\n    },\n    low: {\n      x: 220,\n      y: 30\n    }\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9Db21iaW5hdGlvbi9wYWlyZWRSZXN1bHREYXRhc2V0LmpzIiwibWFwcGluZ3MiOiI7OztBQUEyQztBQUNzQztBQUVqRixJQUFNRSxJQUFJLEdBQUc7RUFDWEMsR0FBRyxFQUFFLHVCQUF1QjtFQUM1QkMsU0FBUyxFQUFFLGVBQWU7RUFDMUJDLEtBQUssRUFBRTtJQUNMQyxJQUFJLEVBQUU7TUFDSkMsT0FBTyxFQUFFO0lBQ1gsQ0FBQztJQUNEQyxHQUFHLEVBQUU7TUFDSEQsT0FBTyxFQUFFO0lBQ1gsQ0FBQztJQUNERSxHQUFHLEVBQUU7TUFDSEYsT0FBTyxFQUFFO0lBQ1g7RUFDRixDQUFDO0VBQ0RHLEtBQUssRUFBRSxJQUFJO0VBQ1hDLEtBQUssRUFBRTtJQUNMTCxJQUFJLEVBQUVOLDZEQUFNLENBQUNZLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLFFBQVE7SUFDekNQLEdBQUcsRUFBRVIsNkRBQU0sQ0FBQ1ksT0FBTyxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0UsT0FBTztJQUN2Q1AsR0FBRyxFQUFFVCw2REFBTSxDQUFDWSxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDRztFQUNsQyxDQUFDO0VBQ0RDLEtBQUssRUFBRTtJQUNMWixJQUFJLEVBQUVOLDZEQUFNLENBQUNZLE9BQU8sQ0FBQ08sTUFBTSxDQUFDQyxLQUFLO0lBQ2pDWixHQUFHLEVBQUVSLDZEQUFNLENBQUNZLE9BQU8sQ0FBQ08sTUFBTSxDQUFDQyxLQUFLO0lBQ2hDWCxHQUFHLEVBQUVULDZEQUFNLENBQUNZLE9BQU8sQ0FBQ08sTUFBTSxDQUFDQztFQUM3QixDQUFDO0VBQ0RDLE9BQU8sRUFBRXBCLDJGQUFTO0VBQ2xCcUIsTUFBTSxFQUFFLENBQ047SUFDRWhCLElBQUksRUFBRTtNQUNKaUIsQ0FBQyxFQUFFLEVBQUU7TUFDTEMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQztJQUNEaEIsR0FBRyxFQUFFO01BQ0hlLENBQUMsRUFBRSxFQUFFO01BQ0xDLENBQUMsRUFBRTtJQUNMLENBQUM7SUFDRGYsR0FBRyxFQUFFO01BQ0hjLENBQUMsRUFBRSxFQUFFO01BQ0xDLENBQUMsRUFBRTtJQUNMO0VBQ0YsQ0FBQyxFQUNEO0lBQ0VsQixJQUFJLEVBQUU7TUFDSmlCLENBQUMsRUFBRSxHQUFHO01BQ05DLENBQUMsRUFBRTtJQUNMLENBQUM7SUFDRGhCLEdBQUcsRUFBRTtNQUNIZSxDQUFDLEVBQUUsR0FBRztNQUNOQyxDQUFDLEVBQUU7SUFDTCxDQUFDO0lBQ0RmLEdBQUcsRUFBRTtNQUNIYyxDQUFDLEVBQUUsR0FBRztNQUNOQyxDQUFDLEVBQUU7SUFDTDtFQUNGLENBQUMsRUFDRDtJQUNFbEIsSUFBSSxFQUFFO01BQ0ppQixDQUFDLEVBQUUsR0FBRztNQUNOQyxDQUFDLEVBQUU7SUFDTCxDQUFDO0lBQ0RoQixHQUFHLEVBQUU7TUFDSGUsQ0FBQyxFQUFFLEdBQUc7TUFDTkMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQztJQUNEZixHQUFHLEVBQUU7TUFDSGMsQ0FBQyxFQUFFLEdBQUc7TUFDTkMsQ0FBQyxFQUFFO0lBQ0w7RUFDRixDQUFDO0FBRUwsQ0FBQztBQUVELCtEQUFldEIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy9leGFtcGxlLWRhdGFzZXRzL2RhdGFPYmplY3RzL0NvbWJpbmF0aW9uL3BhaXJlZFJlc3VsdERhdGFzZXQuanM/ZTJlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyYm9uIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocyc7XG5pbXBvcnQgeyBsb2FkUG9wdXAgfSBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL3BvcHVwJztcblxuY29uc3QgZGF0YSA9IHtcbiAga2V5OiAncGFpcmVkX3Jlc3VsdF9kYXRhc2V0JyxcbiAgZ3JhcGhUeXBlOiAnUGFpcmVkIFJlc3VsdCcsXG4gIGxhYmVsOiB7XG4gICAgaGlnaDoge1xuICAgICAgZGlzcGxheTogJ1BhaXJlZCBSZXN1bHQgSGlnaCcsXG4gICAgfSxcbiAgICBtaWQ6IHtcbiAgICAgIGRpc3BsYXk6ICdQYWlyZWQgUmVzdWx0IE1lZGlhbicsXG4gICAgfSxcbiAgICBsb3c6IHtcbiAgICAgIGRpc3BsYXk6ICdQYWlyZWQgUmVzdWx0IExvdycsXG4gICAgfSxcbiAgfSxcbiAgeUF4aXM6ICd5MicsXG4gIHNoYXBlOiB7XG4gICAgaGlnaDogQ2FyYm9uLmhlbHBlcnMuU0hBUEVTLkRBUksuVEVBUl9BTFQsXG4gICAgbWlkOiBDYXJib24uaGVscGVycy5TSEFQRVMuREFSSy5SSE9NQlVTLFxuICAgIGxvdzogQ2FyYm9uLmhlbHBlcnMuU0hBUEVTLkRBUksuVEVBUl9EUk9QLFxuICB9LFxuICBjb2xvcjoge1xuICAgIGhpZ2g6IENhcmJvbi5oZWxwZXJzLkNPTE9SUy5CTEFDSyxcbiAgICBtaWQ6IENhcmJvbi5oZWxwZXJzLkNPTE9SUy5CTEFDSyxcbiAgICBsb3c6IENhcmJvbi5oZWxwZXJzLkNPTE9SUy5CTEFDSyxcbiAgfSxcbiAgb25DbGljazogbG9hZFBvcHVwLFxuICB2YWx1ZXM6IFtcbiAgICB7XG4gICAgICBoaWdoOiB7XG4gICAgICAgIHg6IDQ1LFxuICAgICAgICB5OiAyMDAsXG4gICAgICB9LFxuICAgICAgbWlkOiB7XG4gICAgICAgIHg6IDQ1LFxuICAgICAgICB5OiAxNDYsXG4gICAgICB9LFxuICAgICAgbG93OiB7XG4gICAgICAgIHg6IDQ1LFxuICAgICAgICB5OiA3NSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBoaWdoOiB7XG4gICAgICAgIHg6IDE2MCxcbiAgICAgICAgeTogMTEwLFxuICAgICAgfSxcbiAgICAgIG1pZDoge1xuICAgICAgICB4OiAxNjAsXG4gICAgICAgIHk6IDcwLFxuICAgICAgfSxcbiAgICAgIGxvdzoge1xuICAgICAgICB4OiAxNjAsXG4gICAgICAgIHk6IDMwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGhpZ2g6IHtcbiAgICAgICAgeDogMjIwLFxuICAgICAgICB5OiAxMTAsXG4gICAgICB9LFxuICAgICAgbWlkOiB7XG4gICAgICAgIHg6IDIyMCxcbiAgICAgICAgeTogNzAsXG4gICAgICB9LFxuICAgICAgbG93OiB7XG4gICAgICAgIHg6IDIyMCxcbiAgICAgICAgeTogMzAsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xuIl0sIm5hbWVzIjpbIkNhcmJvbiIsImxvYWRQb3B1cCIsImRhdGEiLCJrZXkiLCJncmFwaFR5cGUiLCJsYWJlbCIsImhpZ2giLCJkaXNwbGF5IiwibWlkIiwibG93IiwieUF4aXMiLCJzaGFwZSIsImhlbHBlcnMiLCJTSEFQRVMiLCJEQVJLIiwiVEVBUl9BTFQiLCJSSE9NQlVTIiwiVEVBUl9EUk9QIiwiY29sb3IiLCJDT0xPUlMiLCJCTEFDSyIsIm9uQ2xpY2siLCJ2YWx1ZXMiLCJ4IiwieSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/dataObjects/Combination/pairedResultDataset.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/Combination/BasicCombinationGraphs/LineWithPairedResult.test.jsx":
/*!************************************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/Combination/BasicCombinationGraphs/LineWithPairedResult.test.jsx ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/helpers/utils */ \"./packages/carbon-graphs/src/js/helpers/utils.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_graphs_src_components_Combination_CombinationGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-graphs-src/components/Combination/CombinationGraph */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Combination/CombinationGraph.jsx\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_dev_site_ExampleGraphContainer_ExampleGraphContainer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss */ \"./packages/terra-graphs-docs/src/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Combination_lineAndPairedResultConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig */ \"./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Combination_lineDataset2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineDataset2 */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/Combination/lineDataset2.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Combination_pairedResultDataset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/pairedResultDataset */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/Combination/pairedResultDataset.js\");\n\n\n\n\n\n\n\nvar graphConfig = _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone((0,_cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Combination_lineAndPairedResultConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('#lineWithPairedResult'));\nvar dataset = [_cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Combination_lineDataset2__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Combination_pairedResultDataset__WEBPACK_IMPORTED_MODULE_6__[\"default\"])];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"tooltip\",\n    className: \"initial-tooltip\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_cerner_terra_graphs_docs_lib_terra_graphs_src_components_Combination_CombinationGraph__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    graphID: \"lineWithPairedResult\",\n    graphConfig: graphConfig,\n    dataset: dataset\n  }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9ncmFwaHMvQ29tYmluYXRpb24vQmFzaWNDb21iaW5hdGlvbkdyYXBocy9MaW5lV2l0aFBhaXJlZFJlc3VsdC50ZXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUNxQztBQUN1RDtBQUNSO0FBQ2tDO0FBQ2xDO0FBQ2U7QUFFN0gsSUFBTU0sV0FBVyxHQUFHTCxrRkFBSyxDQUFDTSxTQUFTLENBQUNKLG1KQUF5QixDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFDdkYsSUFBTUssT0FBTyxHQUFHLENBQ2RQLGtGQUFLLENBQUNNLFNBQVMsQ0FBQ0gsMkhBQVcsQ0FBQyxFQUM1Qkgsa0ZBQUssQ0FBQ00sU0FBUyxDQUFDRixrSUFBbUIsQ0FBQyxDQUNyQztBQUVELCtEQUFlO0VBQUEsb0JBQ2JMLGdEQUFBLENBQUFBLDJDQUFBLHFCQUNFQSxnREFBQTtJQUFLVyxFQUFFLEVBQUMsU0FBUztJQUFDQyxTQUFTLEVBQUM7RUFBaUIsQ0FBRSxDQUFDLGVBQ2hEWixnREFBQSxDQUFDRSw4SEFBZ0I7SUFBQ1csT0FBTyxFQUFDLHNCQUFzQjtJQUFDUCxXQUFXLEVBQUVBLFdBQVk7SUFBQ0UsT0FBTyxFQUFFQTtFQUFRLENBQUUsQ0FDOUYsQ0FBQztBQUFBLENBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9ncmFwaHMvQ29tYmluYXRpb24vQmFzaWNDb21iaW5hdGlvbkdyYXBocy9MaW5lV2l0aFBhaXJlZFJlc3VsdC50ZXN0LmpzeD8wNWQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGNlcm5lci9jYXJib24tZ3JhcGhzL2xpYi9qcy9oZWxwZXJzL3V0aWxzJztcbmltcG9ydCBDb21iaW5hdGlvbkdyYXBoIGZyb20gJ0BjZXJuZXIvdGVycmEtZ3JhcGhzLWRvY3MvbGliL3RlcnJhLWdyYXBocy1zcmMvY29tcG9uZW50cy9Db21iaW5hdGlvbi9Db21iaW5hdGlvbkdyYXBoJztcbmltcG9ydCAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvdGVycmEtZGV2LXNpdGUvRXhhbXBsZUdyYXBoQ29udGFpbmVyL0V4YW1wbGVHcmFwaENvbnRhaW5lci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgbGluZUFuZFBhaXJlZFJlc3VsdENvbmZpZyBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL2dyYXBoQ29uZmlnT2JqZWN0cy9Db21iaW5hdGlvbi9saW5lQW5kUGFpcmVkUmVzdWx0Q29uZmlnJztcbmltcG9ydCBsaW5lRGF0YXNldCBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL2RhdGFPYmplY3RzL0NvbWJpbmF0aW9uL2xpbmVEYXRhc2V0Mic7XG5pbXBvcnQgcGFpcmVkUmVzdWx0RGF0YXNldCBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL2RhdGFPYmplY3RzL0NvbWJpbmF0aW9uL3BhaXJlZFJlc3VsdERhdGFzZXQnO1xuXG5jb25zdCBncmFwaENvbmZpZyA9IHV0aWxzLmRlZXBDbG9uZShsaW5lQW5kUGFpcmVkUmVzdWx0Q29uZmlnKCcjbGluZVdpdGhQYWlyZWRSZXN1bHQnKSk7XG5jb25zdCBkYXRhc2V0ID0gW1xuICB1dGlscy5kZWVwQ2xvbmUobGluZURhdGFzZXQpLFxuICB1dGlscy5kZWVwQ2xvbmUocGFpcmVkUmVzdWx0RGF0YXNldCksXG5dO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDw+XG4gICAgPGRpdiBpZD1cInRvb2x0aXBcIiBjbGFzc05hbWU9XCJpbml0aWFsLXRvb2x0aXBcIiAvPlxuICAgIDxDb21iaW5hdGlvbkdyYXBoIGdyYXBoSUQ9XCJsaW5lV2l0aFBhaXJlZFJlc3VsdFwiIGdyYXBoQ29uZmlnPXtncmFwaENvbmZpZ30gZGF0YXNldD17ZGF0YXNldH0gLz5cbiAgPC8+XG4pO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXRpbHMiLCJDb21iaW5hdGlvbkdyYXBoIiwibGluZUFuZFBhaXJlZFJlc3VsdENvbmZpZyIsImxpbmVEYXRhc2V0IiwicGFpcmVkUmVzdWx0RGF0YXNldCIsImdyYXBoQ29uZmlnIiwiZGVlcENsb25lIiwiZGF0YXNldCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImlkIiwiY2xhc3NOYW1lIiwiZ3JhcGhJRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/Combination/BasicCombinationGraphs/LineWithPairedResult.test.jsx\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-graphs-src/components/Combination/CombinationGraph.jsx":
/*!*****************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-graphs-src/components/Combination/CombinationGraph.jsx ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n/* harmony import */ var _Graph_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Graph.module.scss */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Graph.module.scss\");\n/* harmony import */ var _Line_LineGraph_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Line/LineGraph.module.scss */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Line/LineGraph.module.scss\");\n/* harmony import */ var _Bar_BarGraph_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Bar/BarGraph.module.scss */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Bar/BarGraph.module.scss\");\n/* harmony import */ var _PairedResult_PairedResultGraph_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PairedResult/PairedResultGraph.module.scss */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss\");\n\n\n\n\n\n\n\nvar propTypes = {\n  /**\n   * ID for graph created.\n   */\n  graphID: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string).isRequired,\n  /**\n   * Graph configuration object\n   */\n  graphConfig: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object).isRequired,\n  /**\n   * data to be displayed in graph\n   */\n  dataset: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)),\n  /**\n   * timeout to display multiple data contents in specific time interval.\n   */\n  timeout: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().number))\n};\nvar datasetLoader = function datasetLoader(dataset) {\n  var graphType = dataset.graphType.toUpperCase();\n  graphType = graphType.replaceAll(' ', '');\n  var apiData;\n  switch (graphType) {\n    case 'LINE':\n      apiData = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.line(dataset);\n      break;\n    case 'SCATTER':\n      apiData = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.scatter(dataset);\n      break;\n    case 'PAIREDRESULT':\n      apiData = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.pairedResult(dataset);\n      break;\n    case 'BAR':\n      apiData = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.bar(dataset);\n      break;\n    case 'BUBBLESINGLEDATASET':\n      apiData = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.bubbleSingleDataset(dataset);\n      break;\n    case 'BUBBLEMULTIPLEDATASET':\n      apiData = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.bubbleMultipleDataset(dataset);\n      break;\n    default:\n      apiData = undefined;\n  }\n  return apiData;\n};\nvar CombinationGraph = function CombinationGraph(_ref) {\n  var graphConfig = _ref.graphConfig,\n    dataset = _ref.dataset,\n    graphID = _ref.graphID,\n    timeout = _ref.timeout;\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {\n    var graph = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.graph(graphConfig);\n    var timeoutIds = [];\n    if (dataset) {\n      if (timeout) {\n        dataset.forEach(function (data, index) {\n          var timeoutId = setTimeout(function () {\n            return graph.graphContainer ? graph.loadContent(datasetLoader(data)) : '';\n          }, timeout[index]);\n          timeoutIds.push(timeoutId);\n        });\n      } else {\n        dataset.forEach(function (data) {\n          graph.loadContent(datasetLoader(data));\n        });\n      }\n    }\n    return function () {\n      timeoutIds.forEach(function (id) {\n        clearTimeout(id);\n      });\n    };\n  }, [graphConfig, dataset, timeout]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"\".concat(graphID, \"-canvasContainer\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: graphID\n  }));\n};\nCombinationGraph.propTypes = propTypes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CombinationGraph);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL0NvbWJpbmF0aW9uL0NvbWJpbmF0aW9uR3JhcGguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNTO0FBQ1E7QUFDYjtBQUNTO0FBQ0Y7QUFDa0I7QUFFdkQsSUFBTUcsU0FBUyxHQUFHO0VBQ2hCO0FBQ0Y7QUFDQTtFQUNFQyxPQUFPLEVBQUVILDBEQUFnQixDQUFDSyxVQUFVO0VBQ3BDO0FBQ0Y7QUFDQTtFQUNFQyxXQUFXLEVBQUVOLDBEQUFnQixDQUFDSyxVQUFVO0VBQ3hDO0FBQ0Y7QUFDQTtFQUNFRyxPQUFPLEVBQUVSLHlEQUFpQixDQUFDQSwwREFBZ0IsQ0FBQztFQUM1QztBQUNGO0FBQ0E7RUFDRVUsT0FBTyxFQUFFVix5REFBaUIsQ0FBQ0EsMERBQWdCO0FBQzdDLENBQUM7QUFFRCxJQUFNWSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlKLE9BQU8sRUFBSztFQUNqQyxJQUFJSyxTQUFTLEdBQUdMLE9BQU8sQ0FBQ0ssU0FBUyxDQUFDQyxXQUFXLENBQUMsQ0FBQztFQUMvQ0QsU0FBUyxHQUFHQSxTQUFTLENBQUNFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO0VBQ3pDLElBQUlDLE9BQU87RUFDWCxRQUFRSCxTQUFTO0lBQ2YsS0FBSyxNQUFNO01BQ1RHLE9BQU8sR0FBR2YsNkRBQU0sQ0FBQ2dCLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDVixPQUFPLENBQUM7TUFDbEM7SUFDRixLQUFLLFNBQVM7TUFDWlEsT0FBTyxHQUFHZiw2REFBTSxDQUFDZ0IsR0FBRyxDQUFDRSxPQUFPLENBQUNYLE9BQU8sQ0FBQztNQUNyQztJQUNGLEtBQUssY0FBYztNQUNqQlEsT0FBTyxHQUFHZiw2REFBTSxDQUFDZ0IsR0FBRyxDQUFDRyxZQUFZLENBQUNaLE9BQU8sQ0FBQztNQUMxQztJQUNGLEtBQUssS0FBSztNQUNSUSxPQUFPLEdBQUdmLDZEQUFNLENBQUNnQixHQUFHLENBQUNJLEdBQUcsQ0FBQ2IsT0FBTyxDQUFDO01BQ2pDO0lBQ0YsS0FBSyxxQkFBcUI7TUFDeEJRLE9BQU8sR0FBR2YsNkRBQU0sQ0FBQ2dCLEdBQUcsQ0FBQ0ssbUJBQW1CLENBQUNkLE9BQU8sQ0FBQztNQUNqRDtJQUNGLEtBQUssdUJBQXVCO01BQzFCUSxPQUFPLEdBQUdmLDZEQUFNLENBQUNnQixHQUFHLENBQUNNLHFCQUFxQixDQUFDZixPQUFPLENBQUM7TUFDbkQ7SUFDRjtNQUNFUSxPQUFPLEdBQUdRLFNBQVM7RUFDdkI7RUFDQSxPQUFPUixPQUFPO0FBQ2hCLENBQUM7QUFDRCxJQUFNUyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFBQyxJQUFBLEVBRWhCO0VBQUEsSUFESnBCLFdBQVcsR0FBQW9CLElBQUEsQ0FBWHBCLFdBQVc7SUFBRUUsT0FBTyxHQUFBa0IsSUFBQSxDQUFQbEIsT0FBTztJQUFFTCxPQUFPLEdBQUF1QixJQUFBLENBQVB2QixPQUFPO0lBQUVPLE9BQU8sR0FBQWdCLElBQUEsQ0FBUGhCLE9BQU87RUFFdENYLDRDQUFlLENBQUMsWUFBTTtJQUNwQixJQUFNNkIsS0FBSyxHQUFHM0IsNkRBQU0sQ0FBQ2dCLEdBQUcsQ0FBQ1csS0FBSyxDQUFDdEIsV0FBVyxDQUFDO0lBQzNDLElBQU11QixVQUFVLEdBQUcsRUFBRTtJQUVyQixJQUFJckIsT0FBTyxFQUFFO01BQ1gsSUFBSUUsT0FBTyxFQUFFO1FBQ1hGLE9BQU8sQ0FBQ3NCLE9BQU8sQ0FBQyxVQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBSztVQUMvQixJQUFNQyxTQUFTLEdBQUdDLFVBQVUsQ0FDMUI7WUFBQSxPQUFPTixLQUFLLENBQUNPLGNBQWMsR0FDdkJQLEtBQUssQ0FBQ1EsV0FBVyxDQUFDeEIsYUFBYSxDQUFDbUIsSUFBSSxDQUFDLENBQUMsR0FDdEMsRUFBRTtVQUFBLENBQUMsRUFDUHJCLE9BQU8sQ0FBQ3NCLEtBQUssQ0FDZixDQUFDO1VBRURILFVBQVUsQ0FBQ1EsSUFBSSxDQUFDSixTQUFTLENBQUM7UUFDNUIsQ0FBQyxDQUFDO01BQ0osQ0FBQyxNQUFNO1FBQ0x6QixPQUFPLENBQUNzQixPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFLO1VBQ3hCSCxLQUFLLENBQUNRLFdBQVcsQ0FBQ3hCLGFBQWEsQ0FBQ21CLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQztNQUNKO0lBQ0Y7SUFFQSxPQUFPLFlBQU07TUFDWEYsVUFBVSxDQUFDQyxPQUFPLENBQUMsVUFBQ1EsRUFBRSxFQUFLO1FBQUVDLFlBQVksQ0FBQ0QsRUFBRSxDQUFDO01BQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7RUFDSCxDQUFDLEVBQUUsQ0FBQ2hDLFdBQVcsRUFBRUUsT0FBTyxFQUFFRSxPQUFPLENBQUMsQ0FBQztFQUVuQyxvQkFDRVgsZ0RBQUE7SUFBS3VDLEVBQUUsS0FBQUcsTUFBQSxDQUFLdEMsT0FBTztFQUFtQixnQkFDcENKLGdEQUFBO0lBQUt1QyxFQUFFLEVBQUVuQztFQUFRLENBQUUsQ0FDaEIsQ0FBQztBQUVWLENBQUM7QUFFRHNCLGdCQUFnQixDQUFDdkIsU0FBUyxHQUFHQSxTQUFTO0FBRXRDLCtEQUFldUIsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVycmEtZ3JhcGhzLy4vcGFja2FnZXMvdGVycmEtZ3JhcGhzLWRvY3Mvc3JjL3RlcnJhLWdyYXBocy1zcmMvY29tcG9uZW50cy9Db21iaW5hdGlvbi9Db21iaW5hdGlvbkdyYXBoLmpzeD84ZTFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENhcmJvbiBmcm9tICdAY2VybmVyL2NhcmJvbi1ncmFwaHMnO1xuaW1wb3J0ICcuLi9HcmFwaC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgJy4uL0xpbmUvTGluZUdyYXBoLm1vZHVsZS5zY3NzJztcbmltcG9ydCAnLi4vQmFyL0JhckdyYXBoLm1vZHVsZS5zY3NzJztcbmltcG9ydCAnLi4vUGFpcmVkUmVzdWx0L1BhaXJlZFJlc3VsdEdyYXBoLm1vZHVsZS5zY3NzJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogSUQgZm9yIGdyYXBoIGNyZWF0ZWQuXG4gICAqL1xuICBncmFwaElEOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBHcmFwaCBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgKi9cbiAgZ3JhcGhDb25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIGRhdGEgdG8gYmUgZGlzcGxheWVkIGluIGdyYXBoXG4gICAqL1xuICBkYXRhc2V0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgLyoqXG4gICAqIHRpbWVvdXQgdG8gZGlzcGxheSBtdWx0aXBsZSBkYXRhIGNvbnRlbnRzIGluIHNwZWNpZmljIHRpbWUgaW50ZXJ2YWwuXG4gICAqL1xuICB0aW1lb3V0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcbn07XG5cbmNvbnN0IGRhdGFzZXRMb2FkZXIgPSAoZGF0YXNldCkgPT4ge1xuICBsZXQgZ3JhcGhUeXBlID0gZGF0YXNldC5ncmFwaFR5cGUudG9VcHBlckNhc2UoKTtcbiAgZ3JhcGhUeXBlID0gZ3JhcGhUeXBlLnJlcGxhY2VBbGwoJyAnLCAnJyk7XG4gIGxldCBhcGlEYXRhO1xuICBzd2l0Y2ggKGdyYXBoVHlwZSkge1xuICAgIGNhc2UgJ0xJTkUnOlxuICAgICAgYXBpRGF0YSA9IENhcmJvbi5hcGkubGluZShkYXRhc2V0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1NDQVRURVInOlxuICAgICAgYXBpRGF0YSA9IENhcmJvbi5hcGkuc2NhdHRlcihkYXRhc2V0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BBSVJFRFJFU1VMVCc6XG4gICAgICBhcGlEYXRhID0gQ2FyYm9uLmFwaS5wYWlyZWRSZXN1bHQoZGF0YXNldCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdCQVInOlxuICAgICAgYXBpRGF0YSA9IENhcmJvbi5hcGkuYmFyKGRhdGFzZXQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQlVCQkxFU0lOR0xFREFUQVNFVCc6XG4gICAgICBhcGlEYXRhID0gQ2FyYm9uLmFwaS5idWJibGVTaW5nbGVEYXRhc2V0KGRhdGFzZXQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQlVCQkxFTVVMVElQTEVEQVRBU0VUJzpcbiAgICAgIGFwaURhdGEgPSBDYXJib24uYXBpLmJ1YmJsZU11bHRpcGxlRGF0YXNldChkYXRhc2V0KTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBhcGlEYXRhID0gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBhcGlEYXRhO1xufTtcbmNvbnN0IENvbWJpbmF0aW9uR3JhcGggPSAoe1xuICBncmFwaENvbmZpZywgZGF0YXNldCwgZ3JhcGhJRCwgdGltZW91dCxcbn0pID0+IHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBncmFwaCA9IENhcmJvbi5hcGkuZ3JhcGgoZ3JhcGhDb25maWcpO1xuICAgIGNvbnN0IHRpbWVvdXRJZHMgPSBbXTtcblxuICAgIGlmIChkYXRhc2V0KSB7XG4gICAgICBpZiAodGltZW91dCkge1xuICAgICAgICBkYXRhc2V0LmZvckVhY2goKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICgpID0+IChncmFwaC5ncmFwaENvbnRhaW5lclxuICAgICAgICAgICAgICA/IGdyYXBoLmxvYWRDb250ZW50KGRhdGFzZXRMb2FkZXIoZGF0YSkpXG4gICAgICAgICAgICAgIDogJycpLFxuICAgICAgICAgICAgdGltZW91dFtpbmRleF0sXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHRpbWVvdXRJZHMucHVzaCh0aW1lb3V0SWQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFzZXQuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICAgIGdyYXBoLmxvYWRDb250ZW50KGRhdGFzZXRMb2FkZXIoZGF0YSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdGltZW91dElkcy5mb3JFYWNoKChpZCkgPT4geyBjbGVhclRpbWVvdXQoaWQpOyB9KTtcbiAgICB9O1xuICB9LCBbZ3JhcGhDb25maWcsIGRhdGFzZXQsIHRpbWVvdXRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9e2Ake2dyYXBoSUR9LWNhbnZhc0NvbnRhaW5lcmB9PlxuICAgICAgPGRpdiBpZD17Z3JhcGhJRH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkNvbWJpbmF0aW9uR3JhcGgucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBDb21iaW5hdGlvbkdyYXBoO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiQ2FyYm9uIiwicHJvcFR5cGVzIiwiZ3JhcGhJRCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJncmFwaENvbmZpZyIsIm9iamVjdCIsImRhdGFzZXQiLCJhcnJheU9mIiwidGltZW91dCIsIm51bWJlciIsImRhdGFzZXRMb2FkZXIiLCJncmFwaFR5cGUiLCJ0b1VwcGVyQ2FzZSIsInJlcGxhY2VBbGwiLCJhcGlEYXRhIiwiYXBpIiwibGluZSIsInNjYXR0ZXIiLCJwYWlyZWRSZXN1bHQiLCJiYXIiLCJidWJibGVTaW5nbGVEYXRhc2V0IiwiYnViYmxlTXVsdGlwbGVEYXRhc2V0IiwidW5kZWZpbmVkIiwiQ29tYmluYXRpb25HcmFwaCIsIl9yZWYiLCJ1c2VFZmZlY3QiLCJncmFwaCIsInRpbWVvdXRJZHMiLCJmb3JFYWNoIiwiZGF0YSIsImluZGV4IiwidGltZW91dElkIiwic2V0VGltZW91dCIsImdyYXBoQ29udGFpbmVyIiwibG9hZENvbnRlbnQiLCJwdXNoIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJjcmVhdGVFbGVtZW50IiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-graphs-src/components/Combination/CombinationGraph.jsx\n");

/***/ })

}]);