"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkterra_graphs"] = self["webpackChunkterra_graphs"] || []).push([["packages_terra-graphs-docs_src_terra-dev-site_test_graphs_PairedResult_Reflow_SimplePanning_t-763981"],{

/***/ "./packages/terra-graphs-docs/src/example-datasets/dataObjects/PairedResult/pairedResultSimplePanningData.js":
/*!*******************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/dataObjects/PairedResult/pairedResultSimplePanningData.js ***!
  \*******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/popup */ \"./packages/terra-graphs-docs/src/example-datasets/popup.js\");\n\n\nvar data = {\n  key: 'uid_1',\n  label: {\n    high: {\n      display: 'High'\n    },\n    mid: {\n      display: 'Median'\n    },\n    low: {\n      display: 'Low'\n    }\n  },\n  onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadPopup,\n  shape: {\n    high: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TEAR_ALT,\n    mid: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.RHOMBUS,\n    low: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TEAR_DROP\n  },\n  color: {\n    high: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n    mid: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n    low: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK\n  },\n  values: [{\n    high: {\n      x: '2016-01-02T00:30:00.000Z',\n      y: 150\n    },\n    mid: {\n      x: '2016-01-02T00:30:00.000Z',\n      y: 40\n    },\n    low: {\n      x: '2016-01-02T00:30:00.000Z',\n      y: 10\n    }\n  }, {\n    high: {\n      x: '2016-01-02T05:30:00.000Z',\n      y: 110\n    },\n    mid: {\n      x: '2016-01-02T05:30:00.000Z',\n      y: 70\n    },\n    low: {\n      x: '2016-01-02T05:30:00.000Z',\n      y: 30\n    }\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9QYWlyZWRSZXN1bHQvcGFpcmVkUmVzdWx0U2ltcGxlUGFubmluZ0RhdGEuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTJDO0FBR21CO0FBRTlELElBQU1FLElBQUksR0FBRztFQUNYQyxHQUFHLEVBQUUsT0FBTztFQUNaQyxLQUFLLEVBQUU7SUFDTEMsSUFBSSxFQUFFO01BQ0pDLE9BQU8sRUFBRTtJQUNYLENBQUM7SUFDREMsR0FBRyxFQUFFO01BQ0hELE9BQU8sRUFBRTtJQUNYLENBQUM7SUFDREUsR0FBRyxFQUFFO01BQ0hGLE9BQU8sRUFBRTtJQUNYO0VBQ0YsQ0FBQztFQUNERyxPQUFPLEVBQUVSLDJGQUFTO0VBQ2xCUyxLQUFLLEVBQUU7SUFDTEwsSUFBSSxFQUFFTCw2REFBTSxDQUFDVyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxRQUFRO0lBQ3pDUCxHQUFHLEVBQUVQLDZEQUFNLENBQUNXLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNFLE9BQU87SUFDdkNQLEdBQUcsRUFBRVIsNkRBQU0sQ0FBQ1csT0FBTyxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0c7RUFDbEMsQ0FBQztFQUNEQyxLQUFLLEVBQUU7SUFDTFosSUFBSSxFQUFFTCw2REFBTSxDQUFDVyxPQUFPLENBQUNPLE1BQU0sQ0FBQ0MsS0FBSztJQUNqQ1osR0FBRyxFQUFFUCw2REFBTSxDQUFDVyxPQUFPLENBQUNPLE1BQU0sQ0FBQ0UsSUFBSTtJQUMvQlosR0FBRyxFQUFFUiw2REFBTSxDQUFDVyxPQUFPLENBQUNPLE1BQU0sQ0FBQ0M7RUFDN0IsQ0FBQztFQUNERSxNQUFNLEVBQUUsQ0FDTjtJQUNFaEIsSUFBSSxFQUFFO01BQ0ppQixDQUFDLEVBQUUsMEJBQTBCO01BQzdCQyxDQUFDLEVBQUU7SUFDTCxDQUFDO0lBQ0RoQixHQUFHLEVBQUU7TUFDSGUsQ0FBQyxFQUFFLDBCQUEwQjtNQUM3QkMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQztJQUNEZixHQUFHLEVBQUU7TUFDSGMsQ0FBQyxFQUFFLDBCQUEwQjtNQUM3QkMsQ0FBQyxFQUFFO0lBQ0w7RUFDRixDQUFDLEVBQ0Q7SUFDRWxCLElBQUksRUFBRTtNQUNKaUIsQ0FBQyxFQUFFLDBCQUEwQjtNQUM3QkMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQztJQUNEaEIsR0FBRyxFQUFFO01BQ0hlLENBQUMsRUFBRSwwQkFBMEI7TUFDN0JDLENBQUMsRUFBRTtJQUNMLENBQUM7SUFDRGYsR0FBRyxFQUFFO01BQ0hjLENBQUMsRUFBRSwwQkFBMEI7TUFDN0JDLENBQUMsRUFBRTtJQUNMO0VBQ0YsQ0FBQztBQUVMLENBQUM7QUFFRCwrREFBZXJCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9QYWlyZWRSZXN1bHQvcGFpcmVkUmVzdWx0U2ltcGxlUGFubmluZ0RhdGEuanM/YWFlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyYm9uIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocyc7XG5pbXBvcnQge1xuICBsb2FkUG9wdXAsXG59IGZyb20gJ0BjZXJuZXIvdGVycmEtZ3JhcGhzLWRvY3MvbGliL2V4YW1wbGUtZGF0YXNldHMvcG9wdXAnO1xuXG5jb25zdCBkYXRhID0ge1xuICBrZXk6ICd1aWRfMScsXG4gIGxhYmVsOiB7XG4gICAgaGlnaDoge1xuICAgICAgZGlzcGxheTogJ0hpZ2gnLFxuICAgIH0sXG4gICAgbWlkOiB7XG4gICAgICBkaXNwbGF5OiAnTWVkaWFuJyxcbiAgICB9LFxuICAgIGxvdzoge1xuICAgICAgZGlzcGxheTogJ0xvdycsXG4gICAgfSxcbiAgfSxcbiAgb25DbGljazogbG9hZFBvcHVwLFxuICBzaGFwZToge1xuICAgIGhpZ2g6IENhcmJvbi5oZWxwZXJzLlNIQVBFUy5EQVJLLlRFQVJfQUxULFxuICAgIG1pZDogQ2FyYm9uLmhlbHBlcnMuU0hBUEVTLkRBUksuUkhPTUJVUyxcbiAgICBsb3c6IENhcmJvbi5oZWxwZXJzLlNIQVBFUy5EQVJLLlRFQVJfRFJPUCxcbiAgfSxcbiAgY29sb3I6IHtcbiAgICBoaWdoOiBDYXJib24uaGVscGVycy5DT0xPUlMuQkxBQ0ssXG4gICAgbWlkOiBDYXJib24uaGVscGVycy5DT0xPUlMuQkxVRSxcbiAgICBsb3c6IENhcmJvbi5oZWxwZXJzLkNPTE9SUy5CTEFDSyxcbiAgfSxcbiAgdmFsdWVzOiBbXG4gICAge1xuICAgICAgaGlnaDoge1xuICAgICAgICB4OiAnMjAxNi0wMS0wMlQwMDozMDowMC4wMDBaJyxcbiAgICAgICAgeTogMTUwLFxuICAgICAgfSxcbiAgICAgIG1pZDoge1xuICAgICAgICB4OiAnMjAxNi0wMS0wMlQwMDozMDowMC4wMDBaJyxcbiAgICAgICAgeTogNDAsXG4gICAgICB9LFxuICAgICAgbG93OiB7XG4gICAgICAgIHg6ICcyMDE2LTAxLTAyVDAwOjMwOjAwLjAwMFonLFxuICAgICAgICB5OiAxMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBoaWdoOiB7XG4gICAgICAgIHg6ICcyMDE2LTAxLTAyVDA1OjMwOjAwLjAwMFonLFxuICAgICAgICB5OiAxMTAsXG4gICAgICB9LFxuICAgICAgbWlkOiB7XG4gICAgICAgIHg6ICcyMDE2LTAxLTAyVDA1OjMwOjAwLjAwMFonLFxuICAgICAgICB5OiA3MCxcbiAgICAgIH0sXG4gICAgICBsb3c6IHtcbiAgICAgICAgeDogJzIwMTYtMDEtMDJUMDU6MzA6MDAuMDAwWicsXG4gICAgICAgIHk6IDMwLFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcbiJdLCJuYW1lcyI6WyJDYXJib24iLCJsb2FkUG9wdXAiLCJkYXRhIiwia2V5IiwibGFiZWwiLCJoaWdoIiwiZGlzcGxheSIsIm1pZCIsImxvdyIsIm9uQ2xpY2siLCJzaGFwZSIsImhlbHBlcnMiLCJTSEFQRVMiLCJEQVJLIiwiVEVBUl9BTFQiLCJSSE9NQlVTIiwiVEVBUl9EUk9QIiwiY29sb3IiLCJDT0xPUlMiLCJCTEFDSyIsIkJMVUUiLCJ2YWx1ZXMiLCJ4IiwieSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/dataObjects/PairedResult/pairedResultSimplePanningData.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/PairedResult/pairedResultPanning.js":
/*!****************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/PairedResult/pairedResultPanning.js ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n\nvar getPairedResultTimeseriesPanningConfig = function getPairedResultTimeseriesPanningConfig(id) {\n  return {\n    bindTo: id,\n    axis: {\n      x: {\n        type: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.AXIS_TYPE.TIME_SERIES,\n        label: 'Datetime',\n        lowerLimit: new Date(2016, 0, 1, 0).toISOString(),\n        upperLimit: new Date(2016, 0, 2, 0).toISOString(),\n        ticks: {}\n      },\n      y: {\n        label: 'Paired Set A',\n        lowerLimit: 0,\n        upperLimit: 200\n      },\n      y2: {\n        show: false,\n        label: 'Paired Set B',\n        lowerLimit: 100,\n        upperLimit: 350\n      }\n    },\n    pan: {\n      enabled: true\n    },\n    showLabel: true,\n    showLegend: true,\n    showVGrid: true,\n    showHGrid: true\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getPairedResultTimeseriesPanningConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9ncmFwaENvbmZpZ09iamVjdHMvUGFpcmVkUmVzdWx0L3BhaXJlZFJlc3VsdFBhbm5pbmcuanMiLCJtYXBwaW5ncyI6Ijs7QUFBMkM7QUFFM0MsSUFBTUMsc0NBQXNDLEdBQUcsU0FBekNBLHNDQUFzQ0EsQ0FBSUMsRUFBRTtFQUFBLE9BQU07SUFDdERDLE1BQU0sRUFBRUQsRUFBRTtJQUNWRSxJQUFJLEVBQUU7TUFDSkMsQ0FBQyxFQUFFO1FBQ0RDLElBQUksRUFBRU4sNkRBQU0sQ0FBQ08sT0FBTyxDQUFDQyxTQUFTLENBQUNDLFdBQVc7UUFDMUNDLEtBQUssRUFBRSxVQUFVO1FBQ2pCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztRQUNqREMsVUFBVSxFQUFFLElBQUlGLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUM7UUFDakRFLEtBQUssRUFBRSxDQUFDO01BQ1YsQ0FBQztNQUNEQyxDQUFDLEVBQUU7UUFDRE4sS0FBSyxFQUFFLGNBQWM7UUFDckJDLFVBQVUsRUFBRSxDQUFDO1FBQ2JHLFVBQVUsRUFBRTtNQUNkLENBQUM7TUFDREcsRUFBRSxFQUFFO1FBQ0ZDLElBQUksRUFBRSxLQUFLO1FBQ1hSLEtBQUssRUFBRSxjQUFjO1FBQ3JCQyxVQUFVLEVBQUUsR0FBRztRQUNmRyxVQUFVLEVBQUU7TUFDZDtJQUNGLENBQUM7SUFDREssR0FBRyxFQUFFO01BQ0hDLE9BQU8sRUFBRTtJQUNYLENBQUM7SUFDREMsU0FBUyxFQUFFLElBQUk7SUFDZkMsVUFBVSxFQUFFLElBQUk7SUFDaEJDLFNBQVMsRUFBRSxJQUFJO0lBQ2ZDLFNBQVMsRUFBRTtFQUNiLENBQUM7QUFBQSxDQUFDO0FBRUYsK0RBQWV2QixzQ0FBc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9ncmFwaENvbmZpZ09iamVjdHMvUGFpcmVkUmVzdWx0L3BhaXJlZFJlc3VsdFBhbm5pbmcuanM/NTMxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyYm9uIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocyc7XG5cbmNvbnN0IGdldFBhaXJlZFJlc3VsdFRpbWVzZXJpZXNQYW5uaW5nQ29uZmlnID0gKGlkKSA9PiAoe1xuICBiaW5kVG86IGlkLFxuICBheGlzOiB7XG4gICAgeDoge1xuICAgICAgdHlwZTogQ2FyYm9uLmhlbHBlcnMuQVhJU19UWVBFLlRJTUVfU0VSSUVTLFxuICAgICAgbGFiZWw6ICdEYXRldGltZScsXG4gICAgICBsb3dlckxpbWl0OiBuZXcgRGF0ZSgyMDE2LCAwLCAxLCAwKS50b0lTT1N0cmluZygpLFxuICAgICAgdXBwZXJMaW1pdDogbmV3IERhdGUoMjAxNiwgMCwgMiwgMCkudG9JU09TdHJpbmcoKSxcbiAgICAgIHRpY2tzOiB7fSxcbiAgICB9LFxuICAgIHk6IHtcbiAgICAgIGxhYmVsOiAnUGFpcmVkIFNldCBBJyxcbiAgICAgIGxvd2VyTGltaXQ6IDAsXG4gICAgICB1cHBlckxpbWl0OiAyMDAsXG4gICAgfSxcbiAgICB5Mjoge1xuICAgICAgc2hvdzogZmFsc2UsXG4gICAgICBsYWJlbDogJ1BhaXJlZCBTZXQgQicsXG4gICAgICBsb3dlckxpbWl0OiAxMDAsXG4gICAgICB1cHBlckxpbWl0OiAzNTAsXG4gICAgfSxcbiAgfSxcbiAgcGFuOiB7XG4gICAgZW5hYmxlZDogdHJ1ZSxcbiAgfSxcbiAgc2hvd0xhYmVsOiB0cnVlLFxuICBzaG93TGVnZW5kOiB0cnVlLFxuICBzaG93VkdyaWQ6IHRydWUsXG4gIHNob3dIR3JpZDogdHJ1ZSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBnZXRQYWlyZWRSZXN1bHRUaW1lc2VyaWVzUGFubmluZ0NvbmZpZztcbiJdLCJuYW1lcyI6WyJDYXJib24iLCJnZXRQYWlyZWRSZXN1bHRUaW1lc2VyaWVzUGFubmluZ0NvbmZpZyIsImlkIiwiYmluZFRvIiwiYXhpcyIsIngiLCJ0eXBlIiwiaGVscGVycyIsIkFYSVNfVFlQRSIsIlRJTUVfU0VSSUVTIiwibGFiZWwiLCJsb3dlckxpbWl0IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwidXBwZXJMaW1pdCIsInRpY2tzIiwieSIsInkyIiwic2hvdyIsInBhbiIsImVuYWJsZWQiLCJzaG93TGFiZWwiLCJzaG93TGVnZW5kIiwic2hvd1ZHcmlkIiwic2hvd0hHcmlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/PairedResult/pairedResultPanning.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/PairedResult/Reflow/SimplePanning.test.jsx":
/*!**************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/PairedResult/Reflow/SimplePanning.test.jsx ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var terra_button_lib_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! terra-button/lib/Button */ \"./node_modules/terra-button/lib/Button.js\");\n/* harmony import */ var _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/helpers/utils */ \"./packages/carbon-graphs/src/js/helpers/utils.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_graphs_src_components_PairedResult_PairedResultGraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/PairedResult/PairedResultGraph.jsx\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_dev_site_ExampleGraphContainer_ExampleGraphContainer_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss */ \"./packages/terra-graphs-docs/src/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_PairedResult_pairedResultPanning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultPanning */ \"./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/PairedResult/pairedResultPanning.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_PairedResult_pairedResultSimplePanningData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultSimplePanningData */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/PairedResult/pairedResultSimplePanningData.js\");\n\n\n\n\n\n\n\n\nvar dataset = [_cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deepClone(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_PairedResult_pairedResultSimplePanningData__WEBPACK_IMPORTED_MODULE_7__[\"default\"])];\nvar initialState = {\n  initial: 0,\n  factor: 3,\n  graphConfig: _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deepClone((0,_cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_PairedResult_pairedResultPanning__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('#simplePairedResultPanning'))\n};\nvar PairedResultPanningExample = function PairedResultPanningExample() {\n  var reducer = function reducer(panState, action) {\n    var newGraphConfig = _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deepClone(panState.graphConfig);\n    var hour;\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n    newGraphConfig.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();\n    newGraphConfig.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();\n    return {\n      initial: hour,\n      factor: panState.factor,\n      graphConfig: _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deepClone(newGraphConfig)\n    };\n  };\n  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_1__.useReducer(reducer, initialState),\n    _React$useReducer2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useReducer, 2),\n    panState = _React$useReducer2[0],\n    dispatch = _React$useReducer2[1];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(terra_button_lib_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"button-pan-left\",\n    text: \"<\",\n    onClick: function onClick() {\n      return dispatch({\n        type: 'panLeft'\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(terra_button_lib_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"button-pan-right\",\n    text: \">\",\n    onClick: function onClick() {\n      return dispatch({\n        type: 'panRight'\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_cerner_terra_graphs_docs_lib_terra_graphs_src_components_PairedResult_PairedResultGraph__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    graphID: \"simplePairedResultPanning\",\n    graphConfig: panState.graphConfig,\n    dataset: dataset\n  }));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PairedResultPanningExample);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9ncmFwaHMvUGFpcmVkUmVzdWx0L1JlZmxvdy9TaW1wbGVQYW5uaW5nLnRlc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDbUI7QUFDa0I7QUFDMEQ7QUFDWDtBQUMwQztBQUMvQjtBQUV6SCxJQUFNTSxPQUFPLEdBQUcsQ0FBQ0osa0ZBQUssQ0FBQ0ssU0FBUyxDQUFDRiw2SUFBSSxDQUFDLENBQUM7QUFDdkMsSUFBTUcsWUFBWSxHQUFHO0VBQ25CQyxPQUFPLEVBQUUsQ0FBQztFQUNWQyxNQUFNLEVBQUUsQ0FBQztFQUNUQyxXQUFXLEVBQUVULGtGQUFLLENBQUNLLFNBQVMsQ0FBQ0gsOElBQXNDLENBQUMsNEJBQTRCLENBQUM7QUFDbkcsQ0FBQztBQUVELElBQU1RLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBMEJBLENBQUEsRUFBUztFQUN2QyxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSUMsUUFBUSxFQUFFQyxNQUFNLEVBQUs7SUFDcEMsSUFBTUMsY0FBYyxHQUFHZCxrRkFBSyxDQUFDSyxTQUFTLENBQUNPLFFBQVEsQ0FBQ0gsV0FBVyxDQUFDO0lBQzVELElBQUlNLElBQUk7SUFFUixRQUFRRixNQUFNLENBQUNHLElBQUk7TUFDakIsS0FBSyxTQUFTO1FBQ1pELElBQUksR0FBR0gsUUFBUSxDQUFDTCxPQUFPLEdBQUdLLFFBQVEsQ0FBQ0osTUFBTTtRQUN6QztNQUNGLEtBQUssVUFBVTtRQUNiTyxJQUFJLEdBQUdILFFBQVEsQ0FBQ0wsT0FBTyxHQUFHSyxRQUFRLENBQUNKLE1BQU07UUFDekM7TUFDRjtRQUNFLE9BQU9JLFFBQVE7SUFDbkI7SUFFQUUsY0FBYyxDQUFDRyxJQUFJLENBQUNDLENBQUMsQ0FBQ0MsVUFBVSxHQUFHLElBQUlDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRUwsSUFBSSxDQUFDLENBQUNNLFdBQVcsQ0FBQyxDQUFDO0lBQzNFUCxjQUFjLENBQUNHLElBQUksQ0FBQ0MsQ0FBQyxDQUFDSSxVQUFVLEdBQUcsSUFBSUYsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFTCxJQUFJLENBQUMsQ0FBQ00sV0FBVyxDQUFDLENBQUM7SUFFM0UsT0FBTztNQUNMZCxPQUFPLEVBQUVRLElBQUk7TUFDYlAsTUFBTSxFQUFFSSxRQUFRLENBQUNKLE1BQU07TUFDdkJDLFdBQVcsRUFBRVQsa0ZBQUssQ0FBQ0ssU0FBUyxDQUFDUyxjQUFjO0lBQzdDLENBQUM7RUFDSCxDQUFDO0VBRUQsSUFBQVMsaUJBQUEsR0FBNkJ6Qiw2Q0FBZ0IsQ0FBQ2EsT0FBTyxFQUFFTCxZQUFZLENBQUM7SUFBQW1CLGtCQUFBLEdBQUFDLGdGQUFBLENBQUFILGlCQUFBO0lBQTdEWCxRQUFRLEdBQUFhLGtCQUFBO0lBQUVFLFFBQVEsR0FBQUYsa0JBQUE7RUFFekIsb0JBQ0UzQixnREFBQSxDQUFBQSwyQ0FBQSxxQkFDRUEsZ0RBQUEsQ0FBQ0MsK0RBQU07SUFBQytCLFNBQVMsRUFBQyxpQkFBaUI7SUFBQ0MsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNTCxRQUFRLENBQUM7UUFBRVgsSUFBSSxFQUFFO01BQVUsQ0FBQyxDQUFDO0lBQUE7RUFBQyxDQUFFLENBQUMsZUFDN0ZsQixnREFBQSxDQUFDQywrREFBTTtJQUFDK0IsU0FBUyxFQUFDLGtCQUFrQjtJQUFDQyxJQUFJLEVBQUMsR0FBRztJQUFDQyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1MLFFBQVEsQ0FBQztRQUFFWCxJQUFJLEVBQUU7TUFBVyxDQUFDLENBQUM7SUFBQTtFQUFDLENBQUUsQ0FBQyxlQUMvRmxCLGdEQUFBLENBQUNHLGdJQUFpQjtJQUFDZ0MsT0FBTyxFQUFDLDJCQUEyQjtJQUFDeEIsV0FBVyxFQUFFRyxRQUFRLENBQUNILFdBQVk7SUFBQ0wsT0FBTyxFQUFFQTtFQUFRLENBQUUsQ0FDN0csQ0FBQztBQUVQLENBQUM7QUFFRCwrREFBZU0sMEJBQTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVycmEtZ3JhcGhzLy4vcGFja2FnZXMvdGVycmEtZ3JhcGhzLWRvY3Mvc3JjL3RlcnJhLWRldi1zaXRlL3Rlc3QvZ3JhcGhzL1BhaXJlZFJlc3VsdC9SZWZsb3cvU2ltcGxlUGFubmluZy50ZXN0LmpzeD8wZmUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3RlcnJhLWJ1dHRvbi9saWIvQnV0dG9uJztcbmltcG9ydCB1dGlscyBmcm9tICdAY2VybmVyL2NhcmJvbi1ncmFwaHMvbGliL2pzL2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0IFBhaXJlZFJlc3VsdEdyYXBoIGZyb20gJ0BjZXJuZXIvdGVycmEtZ3JhcGhzLWRvY3MvbGliL3RlcnJhLWdyYXBocy1zcmMvY29tcG9uZW50cy9QYWlyZWRSZXN1bHQvUGFpcmVkUmVzdWx0R3JhcGgnO1xuaW1wb3J0ICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi90ZXJyYS1kZXYtc2l0ZS9FeGFtcGxlR3JhcGhDb250YWluZXIvRXhhbXBsZUdyYXBoQ29udGFpbmVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBnZXRQYWlyZWRSZXN1bHRUaW1lc2VyaWVzUGFubmluZ0NvbmZpZyBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL2dyYXBoQ29uZmlnT2JqZWN0cy9QYWlyZWRSZXN1bHQvcGFpcmVkUmVzdWx0UGFubmluZyc7XG5pbXBvcnQgZGF0YSBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL2RhdGFPYmplY3RzL1BhaXJlZFJlc3VsdC9wYWlyZWRSZXN1bHRTaW1wbGVQYW5uaW5nRGF0YSc7XG5cbmNvbnN0IGRhdGFzZXQgPSBbdXRpbHMuZGVlcENsb25lKGRhdGEpXTtcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgaW5pdGlhbDogMCxcbiAgZmFjdG9yOiAzLFxuICBncmFwaENvbmZpZzogdXRpbHMuZGVlcENsb25lKGdldFBhaXJlZFJlc3VsdFRpbWVzZXJpZXNQYW5uaW5nQ29uZmlnKCcjc2ltcGxlUGFpcmVkUmVzdWx0UGFubmluZycpKSxcbn07XG5cbmNvbnN0IFBhaXJlZFJlc3VsdFBhbm5pbmdFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCByZWR1Y2VyID0gKHBhblN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBuZXdHcmFwaENvbmZpZyA9IHV0aWxzLmRlZXBDbG9uZShwYW5TdGF0ZS5ncmFwaENvbmZpZyk7XG4gICAgbGV0IGhvdXI7XG5cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdwYW5MZWZ0JzpcbiAgICAgICAgaG91ciA9IHBhblN0YXRlLmluaXRpYWwgLSBwYW5TdGF0ZS5mYWN0b3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGFuUmlnaHQnOlxuICAgICAgICBob3VyID0gcGFuU3RhdGUuaW5pdGlhbCArIHBhblN0YXRlLmZhY3RvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFuU3RhdGU7XG4gICAgfVxuXG4gICAgbmV3R3JhcGhDb25maWcuYXhpcy54Lmxvd2VyTGltaXQgPSBuZXcgRGF0ZSgyMDE2LCAwLCAxLCBob3VyKS50b0lTT1N0cmluZygpO1xuICAgIG5ld0dyYXBoQ29uZmlnLmF4aXMueC51cHBlckxpbWl0ID0gbmV3IERhdGUoMjAxNiwgMCwgMiwgaG91cikudG9JU09TdHJpbmcoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpbml0aWFsOiBob3VyLFxuICAgICAgZmFjdG9yOiBwYW5TdGF0ZS5mYWN0b3IsXG4gICAgICBncmFwaENvbmZpZzogdXRpbHMuZGVlcENsb25lKG5ld0dyYXBoQ29uZmlnKSxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IFtwYW5TdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXBhbi1sZWZ0XCIgdGV4dD1cIjxcIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdwYW5MZWZ0JyB9KX0gLz5cbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXBhbi1yaWdodFwiIHRleHQ9XCI+XCIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAncGFuUmlnaHQnIH0pfSAvPlxuICAgICAgPFBhaXJlZFJlc3VsdEdyYXBoIGdyYXBoSUQ9XCJzaW1wbGVQYWlyZWRSZXN1bHRQYW5uaW5nXCIgZ3JhcGhDb25maWc9e3BhblN0YXRlLmdyYXBoQ29uZmlnfSBkYXRhc2V0PXtkYXRhc2V0fSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFpcmVkUmVzdWx0UGFubmluZ0V4YW1wbGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJ1dGlscyIsIlBhaXJlZFJlc3VsdEdyYXBoIiwiZ2V0UGFpcmVkUmVzdWx0VGltZXNlcmllc1Bhbm5pbmdDb25maWciLCJkYXRhIiwiZGF0YXNldCIsImRlZXBDbG9uZSIsImluaXRpYWxTdGF0ZSIsImluaXRpYWwiLCJmYWN0b3IiLCJncmFwaENvbmZpZyIsIlBhaXJlZFJlc3VsdFBhbm5pbmdFeGFtcGxlIiwicmVkdWNlciIsInBhblN0YXRlIiwiYWN0aW9uIiwibmV3R3JhcGhDb25maWciLCJob3VyIiwidHlwZSIsImF4aXMiLCJ4IiwibG93ZXJMaW1pdCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInVwcGVyTGltaXQiLCJfUmVhY3QkdXNlUmVkdWNlciIsInVzZVJlZHVjZXIiLCJfUmVhY3QkdXNlUmVkdWNlcjIiLCJfc2xpY2VkVG9BcnJheSIsImRpc3BhdGNoIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwidGV4dCIsIm9uQ2xpY2siLCJncmFwaElEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/PairedResult/Reflow/SimplePanning.test.jsx\n");

/***/ })

}]);