"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkterra_graphs"] = self["webpackChunkterra_graphs"] || []).push([["packages_terra-graphs-docs_src_terra-dev-site_test_graphs_PairedResult_Reflow_DynamicData_tes-272a2b"],{

/***/ "./packages/terra-graphs-docs/src/example-datasets/dataObjects/PairedResult/pairedResultDynamicPanningDataset1.js":
/*!************************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/dataObjects/PairedResult/pairedResultDynamicPanningDataset1.js ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/carbon */ \"./packages/carbon-graphs/src/js/carbon.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/popup */ \"./packages/terra-graphs-docs/src/example-datasets/popup.js\");\n\n\nvar data = {\n  key: 'dynamic_panning_dataset',\n  label: {\n    high: {\n      display: 'High'\n    },\n    mid: {\n      display: 'Median'\n    },\n    low: {\n      display: 'Low'\n    }\n  },\n  onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadPopup,\n  shape: {\n    high: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TEAR_ALT,\n    mid: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.RHOMBUS,\n    low: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TEAR_DROP\n  },\n  color: {\n    high: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n    mid: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n    low: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK\n  },\n  values: [{\n    high: {\n      x: '2016-01-02T00:30:00.000Z',\n      y: 150\n    },\n    mid: {\n      x: '2016-01-02T00:30:00.000Z',\n      y: 40\n    },\n    low: {\n      x: '2016-01-02T00:30:00.000Z',\n      y: 10\n    }\n  }, {\n    high: {\n      x: '2016-01-02T05:30:00.000Z',\n      y: 110\n    },\n    mid: {\n      x: '2016-01-02T05:30:00.000Z',\n      y: 70\n    },\n    low: {\n      x: '2016-01-02T05:30:00.000Z',\n      y: 30\n    }\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9QYWlyZWRSZXN1bHQvcGFpcmVkUmVzdWx0RHluYW1pY1Bhbm5pbmdEYXRhc2V0MS5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBeUQ7QUFHSztBQUU5RCxJQUFNRSxJQUFJLEdBQUc7RUFDWEMsR0FBRyxFQUFFLHlCQUF5QjtFQUM5QkMsS0FBSyxFQUFFO0lBQ0xDLElBQUksRUFBRTtNQUNKQyxPQUFPLEVBQUU7SUFDWCxDQUFDO0lBQ0RDLEdBQUcsRUFBRTtNQUNIRCxPQUFPLEVBQUU7SUFDWCxDQUFDO0lBQ0RFLEdBQUcsRUFBRTtNQUNIRixPQUFPLEVBQUU7SUFDWDtFQUNGLENBQUM7RUFDREcsT0FBTyxFQUFFUiwyRkFBUztFQUNsQlMsS0FBSyxFQUFFO0lBQ0xMLElBQUksRUFBRUwsMkVBQU0sQ0FBQ1csT0FBTyxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsUUFBUTtJQUN6Q1AsR0FBRyxFQUFFUCwyRUFBTSxDQUFDVyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDRSxPQUFPO0lBQ3ZDUCxHQUFHLEVBQUVSLDJFQUFNLENBQUNXLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNHO0VBQ2xDLENBQUM7RUFDREMsS0FBSyxFQUFFO0lBQ0xaLElBQUksRUFBRUwsMkVBQU0sQ0FBQ1csT0FBTyxDQUFDTyxNQUFNLENBQUNDLEtBQUs7SUFDakNaLEdBQUcsRUFBRVAsMkVBQU0sQ0FBQ1csT0FBTyxDQUFDTyxNQUFNLENBQUNFLElBQUk7SUFDL0JaLEdBQUcsRUFBRVIsMkVBQU0sQ0FBQ1csT0FBTyxDQUFDTyxNQUFNLENBQUNDO0VBQzdCLENBQUM7RUFDREUsTUFBTSxFQUFFLENBQ047SUFDRWhCLElBQUksRUFBRTtNQUNKaUIsQ0FBQyxFQUFFLDBCQUEwQjtNQUM3QkMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQztJQUNEaEIsR0FBRyxFQUFFO01BQ0hlLENBQUMsRUFBRSwwQkFBMEI7TUFDN0JDLENBQUMsRUFBRTtJQUNMLENBQUM7SUFDRGYsR0FBRyxFQUFFO01BQ0hjLENBQUMsRUFBRSwwQkFBMEI7TUFDN0JDLENBQUMsRUFBRTtJQUNMO0VBQ0YsQ0FBQyxFQUNEO0lBQ0VsQixJQUFJLEVBQUU7TUFDSmlCLENBQUMsRUFBRSwwQkFBMEI7TUFDN0JDLENBQUMsRUFBRTtJQUNMLENBQUM7SUFDRGhCLEdBQUcsRUFBRTtNQUNIZSxDQUFDLEVBQUUsMEJBQTBCO01BQzdCQyxDQUFDLEVBQUU7SUFDTCxDQUFDO0lBQ0RmLEdBQUcsRUFBRTtNQUNIYyxDQUFDLEVBQUUsMEJBQTBCO01BQzdCQyxDQUFDLEVBQUU7SUFDTDtFQUNGLENBQUM7QUFFTCxDQUFDO0FBRUQsK0RBQWVyQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVycmEtZ3JhcGhzLy4vcGFja2FnZXMvdGVycmEtZ3JhcGhzLWRvY3Mvc3JjL2V4YW1wbGUtZGF0YXNldHMvZGF0YU9iamVjdHMvUGFpcmVkUmVzdWx0L3BhaXJlZFJlc3VsdER5bmFtaWNQYW5uaW5nRGF0YXNldDEuanM/ZTllZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyYm9uIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocy9saWIvanMvY2FyYm9uJztcbmltcG9ydCB7XG4gIGxvYWRQb3B1cCxcbn0gZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvZXhhbXBsZS1kYXRhc2V0cy9wb3B1cCc7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIGtleTogJ2R5bmFtaWNfcGFubmluZ19kYXRhc2V0JyxcbiAgbGFiZWw6IHtcbiAgICBoaWdoOiB7XG4gICAgICBkaXNwbGF5OiAnSGlnaCcsXG4gICAgfSxcbiAgICBtaWQ6IHtcbiAgICAgIGRpc3BsYXk6ICdNZWRpYW4nLFxuICAgIH0sXG4gICAgbG93OiB7XG4gICAgICBkaXNwbGF5OiAnTG93JyxcbiAgICB9LFxuICB9LFxuICBvbkNsaWNrOiBsb2FkUG9wdXAsXG4gIHNoYXBlOiB7XG4gICAgaGlnaDogQ2FyYm9uLmhlbHBlcnMuU0hBUEVTLkRBUksuVEVBUl9BTFQsXG4gICAgbWlkOiBDYXJib24uaGVscGVycy5TSEFQRVMuREFSSy5SSE9NQlVTLFxuICAgIGxvdzogQ2FyYm9uLmhlbHBlcnMuU0hBUEVTLkRBUksuVEVBUl9EUk9QLFxuICB9LFxuICBjb2xvcjoge1xuICAgIGhpZ2g6IENhcmJvbi5oZWxwZXJzLkNPTE9SUy5CTEFDSyxcbiAgICBtaWQ6IENhcmJvbi5oZWxwZXJzLkNPTE9SUy5CTFVFLFxuICAgIGxvdzogQ2FyYm9uLmhlbHBlcnMuQ09MT1JTLkJMQUNLLFxuICB9LFxuICB2YWx1ZXM6IFtcbiAgICB7XG4gICAgICBoaWdoOiB7XG4gICAgICAgIHg6ICcyMDE2LTAxLTAyVDAwOjMwOjAwLjAwMFonLFxuICAgICAgICB5OiAxNTAsXG4gICAgICB9LFxuICAgICAgbWlkOiB7XG4gICAgICAgIHg6ICcyMDE2LTAxLTAyVDAwOjMwOjAwLjAwMFonLFxuICAgICAgICB5OiA0MCxcbiAgICAgIH0sXG4gICAgICBsb3c6IHtcbiAgICAgICAgeDogJzIwMTYtMDEtMDJUMDA6MzA6MDAuMDAwWicsXG4gICAgICAgIHk6IDEwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGhpZ2g6IHtcbiAgICAgICAgeDogJzIwMTYtMDEtMDJUMDU6MzA6MDAuMDAwWicsXG4gICAgICAgIHk6IDExMCxcbiAgICAgIH0sXG4gICAgICBtaWQ6IHtcbiAgICAgICAgeDogJzIwMTYtMDEtMDJUMDU6MzA6MDAuMDAwWicsXG4gICAgICAgIHk6IDcwLFxuICAgICAgfSxcbiAgICAgIGxvdzoge1xuICAgICAgICB4OiAnMjAxNi0wMS0wMlQwNTozMDowMC4wMDBaJyxcbiAgICAgICAgeTogMzAsXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xuIl0sIm5hbWVzIjpbIkNhcmJvbiIsImxvYWRQb3B1cCIsImRhdGEiLCJrZXkiLCJsYWJlbCIsImhpZ2giLCJkaXNwbGF5IiwibWlkIiwibG93Iiwib25DbGljayIsInNoYXBlIiwiaGVscGVycyIsIlNIQVBFUyIsIkRBUksiLCJURUFSX0FMVCIsIlJIT01CVVMiLCJURUFSX0RST1AiLCJjb2xvciIsIkNPTE9SUyIsIkJMQUNLIiwiQkxVRSIsInZhbHVlcyIsIngiLCJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/dataObjects/PairedResult/pairedResultDynamicPanningDataset1.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/example-datasets/dataObjects/PairedResult/pairedResultDynamicPanningDataset2.js":
/*!************************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/dataObjects/PairedResult/pairedResultDynamicPanningDataset2.js ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar data = {\n  key: 'dynamic_panning_dataset',\n  values: [{\n    high: {\n      x: '2016-01-02T00:30:00.000Z',\n      y: 160\n    },\n    mid: {\n      x: '2016-01-02T00:30:00.000Z',\n      y: 40\n    },\n    low: {\n      x: '2016-01-02T00:30:00.000Z',\n      y: 10\n    }\n  }, {\n    high: {\n      x: '2016-01-02T03:30:00.000Z',\n      y: 100\n    },\n    mid: {\n      x: '2016-01-02T03:30:00.000Z',\n      y: 30\n    },\n    low: {\n      x: '2016-01-02T03:30:00.000Z',\n      y: 10\n    }\n  }, {\n    high: {\n      x: '2016-01-02T05:30:00.000Z',\n      y: 100\n    },\n    mid: {\n      x: '2016-01-02T05:30:00.000Z',\n      y: 70\n    },\n    low: {\n      x: '2016-01-02T05:30:00.000Z',\n      y: 30\n    }\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9QYWlyZWRSZXN1bHQvcGFpcmVkUmVzdWx0RHluYW1pY1Bhbm5pbmdEYXRhc2V0Mi5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsSUFBTUEsSUFBSSxHQUFHO0VBQ1hDLEdBQUcsRUFBRSx5QkFBeUI7RUFDOUJDLE1BQU0sRUFBRSxDQUNOO0lBQ0VDLElBQUksRUFBRTtNQUNKQyxDQUFDLEVBQUUsMEJBQTBCO01BQzdCQyxDQUFDLEVBQUU7SUFDTCxDQUFDO0lBQ0RDLEdBQUcsRUFBRTtNQUNIRixDQUFDLEVBQUUsMEJBQTBCO01BQzdCQyxDQUFDLEVBQUU7SUFDTCxDQUFDO0lBQ0RFLEdBQUcsRUFBRTtNQUNISCxDQUFDLEVBQUUsMEJBQTBCO01BQzdCQyxDQUFDLEVBQUU7SUFDTDtFQUNGLENBQUMsRUFDRDtJQUNFRixJQUFJLEVBQUU7TUFDSkMsQ0FBQyxFQUFFLDBCQUEwQjtNQUM3QkMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQztJQUNEQyxHQUFHLEVBQUU7TUFDSEYsQ0FBQyxFQUFFLDBCQUEwQjtNQUM3QkMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQztJQUNERSxHQUFHLEVBQUU7TUFDSEgsQ0FBQyxFQUFFLDBCQUEwQjtNQUM3QkMsQ0FBQyxFQUFFO0lBQ0w7RUFDRixDQUFDLEVBQ0Q7SUFDRUYsSUFBSSxFQUFFO01BQ0pDLENBQUMsRUFBRSwwQkFBMEI7TUFDN0JDLENBQUMsRUFBRTtJQUNMLENBQUM7SUFDREMsR0FBRyxFQUFFO01BQ0hGLENBQUMsRUFBRSwwQkFBMEI7TUFDN0JDLENBQUMsRUFBRTtJQUNMLENBQUM7SUFDREUsR0FBRyxFQUFFO01BQ0hILENBQUMsRUFBRSwwQkFBMEI7TUFDN0JDLENBQUMsRUFBRTtJQUNMO0VBQ0YsQ0FBQztBQUVMLENBQUM7QUFDRCwrREFBZUwsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy9leGFtcGxlLWRhdGFzZXRzL2RhdGFPYmplY3RzL1BhaXJlZFJlc3VsdC9wYWlyZWRSZXN1bHREeW5hbWljUGFubmluZ0RhdGFzZXQyLmpzPzI0MDQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGF0YSA9IHtcbiAga2V5OiAnZHluYW1pY19wYW5uaW5nX2RhdGFzZXQnLFxuICB2YWx1ZXM6IFtcbiAgICB7XG4gICAgICBoaWdoOiB7XG4gICAgICAgIHg6ICcyMDE2LTAxLTAyVDAwOjMwOjAwLjAwMFonLFxuICAgICAgICB5OiAxNjAsXG4gICAgICB9LFxuICAgICAgbWlkOiB7XG4gICAgICAgIHg6ICcyMDE2LTAxLTAyVDAwOjMwOjAwLjAwMFonLFxuICAgICAgICB5OiA0MCxcbiAgICAgIH0sXG4gICAgICBsb3c6IHtcbiAgICAgICAgeDogJzIwMTYtMDEtMDJUMDA6MzA6MDAuMDAwWicsXG4gICAgICAgIHk6IDEwLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGhpZ2g6IHtcbiAgICAgICAgeDogJzIwMTYtMDEtMDJUMDM6MzA6MDAuMDAwWicsXG4gICAgICAgIHk6IDEwMCxcbiAgICAgIH0sXG4gICAgICBtaWQ6IHtcbiAgICAgICAgeDogJzIwMTYtMDEtMDJUMDM6MzA6MDAuMDAwWicsXG4gICAgICAgIHk6IDMwLFxuICAgICAgfSxcbiAgICAgIGxvdzoge1xuICAgICAgICB4OiAnMjAxNi0wMS0wMlQwMzozMDowMC4wMDBaJyxcbiAgICAgICAgeTogMTAsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgaGlnaDoge1xuICAgICAgICB4OiAnMjAxNi0wMS0wMlQwNTozMDowMC4wMDBaJyxcbiAgICAgICAgeTogMTAwLFxuICAgICAgfSxcbiAgICAgIG1pZDoge1xuICAgICAgICB4OiAnMjAxNi0wMS0wMlQwNTozMDowMC4wMDBaJyxcbiAgICAgICAgeTogNzAsXG4gICAgICB9LFxuICAgICAgbG93OiB7XG4gICAgICAgIHg6ICcyMDE2LTAxLTAyVDA1OjMwOjAwLjAwMFonLFxuICAgICAgICB5OiAzMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbn07XG5leHBvcnQgZGVmYXVsdCBkYXRhO1xuIl0sIm5hbWVzIjpbImRhdGEiLCJrZXkiLCJ2YWx1ZXMiLCJoaWdoIiwieCIsInkiLCJtaWQiLCJsb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/dataObjects/PairedResult/pairedResultDynamicPanningDataset2.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/PairedResult/pairedResultPanning.js":
/*!****************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/PairedResult/pairedResultPanning.js ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/carbon */ \"./packages/carbon-graphs/src/js/carbon.js\");\n\nvar getPairedResultTimeseriesPanningConfig = function getPairedResultTimeseriesPanningConfig(id) {\n  return {\n    bindTo: id,\n    axis: {\n      x: {\n        type: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.AXIS_TYPE.TIME_SERIES,\n        label: 'Datetime',\n        lowerLimit: new Date(2016, 0, 1, 0).toISOString(),\n        upperLimit: new Date(2016, 0, 2, 0).toISOString(),\n        ticks: {}\n      },\n      y: {\n        label: 'Paired Set A',\n        lowerLimit: 0,\n        upperLimit: 200\n      },\n      y2: {\n        show: false,\n        label: 'Paired Set B',\n        lowerLimit: 100,\n        upperLimit: 350\n      }\n    },\n    pan: {\n      enabled: true\n    },\n    showLabel: true,\n    showLegend: true,\n    showVGrid: true,\n    showHGrid: true\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getPairedResultTimeseriesPanningConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9ncmFwaENvbmZpZ09iamVjdHMvUGFpcmVkUmVzdWx0L3BhaXJlZFJlc3VsdFBhbm5pbmcuanMiLCJtYXBwaW5ncyI6Ijs7QUFBeUQ7QUFFekQsSUFBTUMsc0NBQXNDLEdBQUcsU0FBekNBLHNDQUFzQ0EsQ0FBSUMsRUFBRTtFQUFBLE9BQU07SUFDdERDLE1BQU0sRUFBRUQsRUFBRTtJQUNWRSxJQUFJLEVBQUU7TUFDSkMsQ0FBQyxFQUFFO1FBQ0RDLElBQUksRUFBRU4sMkVBQU0sQ0FBQ08sT0FBTyxDQUFDQyxTQUFTLENBQUNDLFdBQVc7UUFDMUNDLEtBQUssRUFBRSxVQUFVO1FBQ2pCQyxVQUFVLEVBQUUsSUFBSUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztRQUNqREMsVUFBVSxFQUFFLElBQUlGLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUM7UUFDakRFLEtBQUssRUFBRSxDQUFDO01BQ1YsQ0FBQztNQUNEQyxDQUFDLEVBQUU7UUFDRE4sS0FBSyxFQUFFLGNBQWM7UUFDckJDLFVBQVUsRUFBRSxDQUFDO1FBQ2JHLFVBQVUsRUFBRTtNQUNkLENBQUM7TUFDREcsRUFBRSxFQUFFO1FBQ0ZDLElBQUksRUFBRSxLQUFLO1FBQ1hSLEtBQUssRUFBRSxjQUFjO1FBQ3JCQyxVQUFVLEVBQUUsR0FBRztRQUNmRyxVQUFVLEVBQUU7TUFDZDtJQUNGLENBQUM7SUFDREssR0FBRyxFQUFFO01BQ0hDLE9BQU8sRUFBRTtJQUNYLENBQUM7SUFDREMsU0FBUyxFQUFFLElBQUk7SUFDZkMsVUFBVSxFQUFFLElBQUk7SUFDaEJDLFNBQVMsRUFBRSxJQUFJO0lBQ2ZDLFNBQVMsRUFBRTtFQUNiLENBQUM7QUFBQSxDQUFDO0FBRUYsK0RBQWV2QixzQ0FBc0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9ncmFwaENvbmZpZ09iamVjdHMvUGFpcmVkUmVzdWx0L3BhaXJlZFJlc3VsdFBhbm5pbmcuanM/NTMxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyYm9uIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocy9saWIvanMvY2FyYm9uJztcblxuY29uc3QgZ2V0UGFpcmVkUmVzdWx0VGltZXNlcmllc1Bhbm5pbmdDb25maWcgPSAoaWQpID0+ICh7XG4gIGJpbmRUbzogaWQsXG4gIGF4aXM6IHtcbiAgICB4OiB7XG4gICAgICB0eXBlOiBDYXJib24uaGVscGVycy5BWElTX1RZUEUuVElNRV9TRVJJRVMsXG4gICAgICBsYWJlbDogJ0RhdGV0aW1lJyxcbiAgICAgIGxvd2VyTGltaXQ6IG5ldyBEYXRlKDIwMTYsIDAsIDEsIDApLnRvSVNPU3RyaW5nKCksXG4gICAgICB1cHBlckxpbWl0OiBuZXcgRGF0ZSgyMDE2LCAwLCAyLCAwKS50b0lTT1N0cmluZygpLFxuICAgICAgdGlja3M6IHt9LFxuICAgIH0sXG4gICAgeToge1xuICAgICAgbGFiZWw6ICdQYWlyZWQgU2V0IEEnLFxuICAgICAgbG93ZXJMaW1pdDogMCxcbiAgICAgIHVwcGVyTGltaXQ6IDIwMCxcbiAgICB9LFxuICAgIHkyOiB7XG4gICAgICBzaG93OiBmYWxzZSxcbiAgICAgIGxhYmVsOiAnUGFpcmVkIFNldCBCJyxcbiAgICAgIGxvd2VyTGltaXQ6IDEwMCxcbiAgICAgIHVwcGVyTGltaXQ6IDM1MCxcbiAgICB9LFxuICB9LFxuICBwYW46IHtcbiAgICBlbmFibGVkOiB0cnVlLFxuICB9LFxuICBzaG93TGFiZWw6IHRydWUsXG4gIHNob3dMZWdlbmQ6IHRydWUsXG4gIHNob3dWR3JpZDogdHJ1ZSxcbiAgc2hvd0hHcmlkOiB0cnVlLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldFBhaXJlZFJlc3VsdFRpbWVzZXJpZXNQYW5uaW5nQ29uZmlnO1xuIl0sIm5hbWVzIjpbIkNhcmJvbiIsImdldFBhaXJlZFJlc3VsdFRpbWVzZXJpZXNQYW5uaW5nQ29uZmlnIiwiaWQiLCJiaW5kVG8iLCJheGlzIiwieCIsInR5cGUiLCJoZWxwZXJzIiwiQVhJU19UWVBFIiwiVElNRV9TRVJJRVMiLCJsYWJlbCIsImxvd2VyTGltaXQiLCJEYXRlIiwidG9JU09TdHJpbmciLCJ1cHBlckxpbWl0IiwidGlja3MiLCJ5IiwieTIiLCJzaG93IiwicGFuIiwiZW5hYmxlZCIsInNob3dMYWJlbCIsInNob3dMZWdlbmQiLCJzaG93VkdyaWQiLCJzaG93SEdyaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/PairedResult/pairedResultPanning.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/PairedResult/Reflow/DynamicData.test.jsx":
/*!************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/PairedResult/Reflow/DynamicData.test.jsx ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var terra_button_lib_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! terra-button/lib/Button */ \"./node_modules/terra-button/lib/Button.js\");\n/* harmony import */ var _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/helpers/utils */ \"./packages/carbon-graphs/src/js/helpers/utils.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_graphs_src_components_PairedResult_PairedResultGraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-graphs-src/components/PairedResult/PairedResultGraph */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/PairedResult/PairedResultGraph.jsx\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_dev_site_ExampleGraphContainer_ExampleGraphContainer_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss */ \"./packages/terra-graphs-docs/src/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_PairedResult_pairedResultPanning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/PairedResult/pairedResultPanning */ \"./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/PairedResult/pairedResultPanning.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_PairedResult_pairedResultDynamicPanningDataset1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultDynamicPanningDataset1 */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/PairedResult/pairedResultDynamicPanningDataset1.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_PairedResult_pairedResultDynamicPanningDataset2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/PairedResult/pairedResultDynamicPanningDataset2 */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/PairedResult/pairedResultDynamicPanningDataset2.js\");\n\n\n\n\n\n\n\n\n\nvar initialState = {\n  initial: 0,\n  factor: 3,\n  dataset: [_cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deepClone(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_PairedResult_pairedResultDynamicPanningDataset1__WEBPACK_IMPORTED_MODULE_7__[\"default\"])],\n  graphConfig: _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deepClone((0,_cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_PairedResult_pairedResultPanning__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('#PairedResultDynamicData'))\n};\nvar PairedResultPanningExample = function PairedResultPanningExample() {\n  var reducer = function reducer(panState, action) {\n    var newGraphState = _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deepClone(panState.graphConfig);\n    var hour;\n    var newDataset = [_cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deepClone(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_PairedResult_pairedResultDynamicPanningDataset2__WEBPACK_IMPORTED_MODULE_8__[\"default\"])];\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n    newGraphState.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();\n    newGraphState.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();\n    return {\n      initial: hour,\n      factor: panState.factor,\n      dataset: {\n        panData: newDataset\n      },\n      graphConfig: _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deepClone(newGraphState)\n    };\n  };\n  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_1__.useReducer(reducer, initialState),\n    _React$useReducer2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useReducer, 2),\n    panState = _React$useReducer2[0],\n    dispatch = _React$useReducer2[1];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(terra_button_lib_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"button-pan-left\",\n    text: \"<\",\n    onClick: function onClick() {\n      return dispatch({\n        type: 'panLeft'\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(terra_button_lib_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"button-pan-right\",\n    text: \">\",\n    onClick: function onClick() {\n      return dispatch({\n        type: 'panRight'\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_cerner_terra_graphs_docs_lib_terra_graphs_src_components_PairedResult_PairedResultGraph__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    graphID: \"PairedResultDynamicData\",\n    graphConfig: panState.graphConfig,\n    dataset: panState.dataset\n  }));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PairedResultPanningExample);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9ncmFwaHMvUGFpcmVkUmVzdWx0L1JlZmxvdy9EeW5hbWljRGF0YS50ZXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwQjtBQUNtQjtBQUNrQjtBQUMwRDtBQUNYO0FBQzBDO0FBQ3RCO0FBQ0E7QUFFbEksSUFBTU8sWUFBWSxHQUFHO0VBQ25CQyxPQUFPLEVBQUUsQ0FBQztFQUNWQyxNQUFNLEVBQUUsQ0FBQztFQUNUQyxPQUFPLEVBQUUsQ0FBQ1Isa0ZBQUssQ0FBQ1MsU0FBUyxDQUFDTixrSkFBUSxDQUFDLENBQUM7RUFDcENPLFdBQVcsRUFBRVYsa0ZBQUssQ0FBQ1MsU0FBUyxDQUFDUCw4SUFBc0MsQ0FBQywwQkFBMEIsQ0FBQztBQUNqRyxDQUFDO0FBRUQsSUFBTVMsMEJBQTBCLEdBQUcsU0FBN0JBLDBCQUEwQkEsQ0FBQSxFQUFTO0VBQ3ZDLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFJQyxRQUFRLEVBQUVDLE1BQU0sRUFBSztJQUNwQyxJQUFNQyxhQUFhLEdBQUdmLGtGQUFLLENBQUNTLFNBQVMsQ0FBQ0ksUUFBUSxDQUFDSCxXQUFXLENBQUM7SUFDM0QsSUFBSU0sSUFBSTtJQUNSLElBQU1DLFVBQVUsR0FBRyxDQUFDakIsa0ZBQUssQ0FBQ1MsU0FBUyxDQUFDTCxrSkFBUSxDQUFDLENBQUM7SUFFOUMsUUFBUVUsTUFBTSxDQUFDSSxJQUFJO01BQ2pCLEtBQUssU0FBUztRQUNaRixJQUFJLEdBQUdILFFBQVEsQ0FBQ1AsT0FBTyxHQUFHTyxRQUFRLENBQUNOLE1BQU07UUFDekM7TUFDRixLQUFLLFVBQVU7UUFDYlMsSUFBSSxHQUFHSCxRQUFRLENBQUNQLE9BQU8sR0FBR08sUUFBUSxDQUFDTixNQUFNO1FBQ3pDO01BQ0Y7UUFDRSxPQUFPTSxRQUFRO0lBQ25CO0lBRUFFLGFBQWEsQ0FBQ0ksSUFBSSxDQUFDQyxDQUFDLENBQUNDLFVBQVUsR0FBRyxJQUFJQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUVOLElBQUksQ0FBQyxDQUFDTyxXQUFXLENBQUMsQ0FBQztJQUMxRVIsYUFBYSxDQUFDSSxJQUFJLENBQUNDLENBQUMsQ0FBQ0ksVUFBVSxHQUFHLElBQUlGLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRU4sSUFBSSxDQUFDLENBQUNPLFdBQVcsQ0FBQyxDQUFDO0lBRTFFLE9BQU87TUFDTGpCLE9BQU8sRUFBRVUsSUFBSTtNQUNiVCxNQUFNLEVBQUVNLFFBQVEsQ0FBQ04sTUFBTTtNQUN2QkMsT0FBTyxFQUFFO1FBQUVpQixPQUFPLEVBQUVSO01BQVcsQ0FBQztNQUNoQ1AsV0FBVyxFQUFFVixrRkFBSyxDQUFDUyxTQUFTLENBQUNNLGFBQWE7SUFDNUMsQ0FBQztFQUNILENBQUM7RUFFRCxJQUFBVyxpQkFBQSxHQUE2QjVCLDZDQUFnQixDQUFDYyxPQUFPLEVBQUVQLFlBQVksQ0FBQztJQUFBdUIsa0JBQUEsR0FBQUMsZ0ZBQUEsQ0FBQUgsaUJBQUE7SUFBN0RiLFFBQVEsR0FBQWUsa0JBQUE7SUFBRUUsUUFBUSxHQUFBRixrQkFBQTtFQUV6QixvQkFDRTlCLGdEQUFBLENBQUFBLDJDQUFBLHFCQUNFQSxnREFBQSxDQUFDQywrREFBTTtJQUFDa0MsU0FBUyxFQUFDLGlCQUFpQjtJQUFDQyxJQUFJLEVBQUMsR0FBRztJQUFDQyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1MLFFBQVEsQ0FBQztRQUFFWixJQUFJLEVBQUU7TUFBVSxDQUFDLENBQUM7SUFBQTtFQUFDLENBQUUsQ0FBQyxlQUM3RnBCLGdEQUFBLENBQUNDLCtEQUFNO0lBQUNrQyxTQUFTLEVBQUMsa0JBQWtCO0lBQUNDLElBQUksRUFBQyxHQUFHO0lBQUNDLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTUwsUUFBUSxDQUFDO1FBQUVaLElBQUksRUFBRTtNQUFXLENBQUMsQ0FBQztJQUFBO0VBQUMsQ0FBRSxDQUFDLGVBQy9GcEIsZ0RBQUEsQ0FBQ0csZ0lBQWlCO0lBQUNtQyxPQUFPLEVBQUMseUJBQXlCO0lBQUMxQixXQUFXLEVBQUVHLFFBQVEsQ0FBQ0gsV0FBWTtJQUFDRixPQUFPLEVBQUVLLFFBQVEsQ0FBQ0w7RUFBUSxDQUFFLENBQ3BILENBQUM7QUFFUCxDQUFDO0FBRUQsK0RBQWVHLDBCQUEwQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy90ZXJyYS1kZXYtc2l0ZS90ZXN0L2dyYXBocy9QYWlyZWRSZXN1bHQvUmVmbG93L0R5bmFtaWNEYXRhLnRlc3QuanN4P2NjOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAndGVycmEtYnV0dG9uL2xpYi9CdXR0b24nO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocy9saWIvanMvaGVscGVycy91dGlscyc7XG5pbXBvcnQgUGFpcmVkUmVzdWx0R3JhcGggZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL1BhaXJlZFJlc3VsdC9QYWlyZWRSZXN1bHRHcmFwaCc7XG5pbXBvcnQgJ0BjZXJuZXIvdGVycmEtZ3JhcGhzLWRvY3MvbGliL3RlcnJhLWRldi1zaXRlL0V4YW1wbGVHcmFwaENvbnRhaW5lci9FeGFtcGxlR3JhcGhDb250YWluZXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IGdldFBhaXJlZFJlc3VsdFRpbWVzZXJpZXNQYW5uaW5nQ29uZmlnIGZyb20gJ0BjZXJuZXIvdGVycmEtZ3JhcGhzLWRvY3MvbGliL2V4YW1wbGUtZGF0YXNldHMvZ3JhcGhDb25maWdPYmplY3RzL1BhaXJlZFJlc3VsdC9wYWlyZWRSZXN1bHRQYW5uaW5nJztcbmltcG9ydCBkYXRhc2V0MSBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL2RhdGFPYmplY3RzL1BhaXJlZFJlc3VsdC9wYWlyZWRSZXN1bHREeW5hbWljUGFubmluZ0RhdGFzZXQxJztcbmltcG9ydCBkYXRhc2V0MiBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL2RhdGFPYmplY3RzL1BhaXJlZFJlc3VsdC9wYWlyZWRSZXN1bHREeW5hbWljUGFubmluZ0RhdGFzZXQyJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpbml0aWFsOiAwLFxuICBmYWN0b3I6IDMsXG4gIGRhdGFzZXQ6IFt1dGlscy5kZWVwQ2xvbmUoZGF0YXNldDEpXSxcbiAgZ3JhcGhDb25maWc6IHV0aWxzLmRlZXBDbG9uZShnZXRQYWlyZWRSZXN1bHRUaW1lc2VyaWVzUGFubmluZ0NvbmZpZygnI1BhaXJlZFJlc3VsdER5bmFtaWNEYXRhJykpLFxufTtcblxuY29uc3QgUGFpcmVkUmVzdWx0UGFubmluZ0V4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IHJlZHVjZXIgPSAocGFuU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IG5ld0dyYXBoU3RhdGUgPSB1dGlscy5kZWVwQ2xvbmUocGFuU3RhdGUuZ3JhcGhDb25maWcpO1xuICAgIGxldCBob3VyO1xuICAgIGNvbnN0IG5ld0RhdGFzZXQgPSBbdXRpbHMuZGVlcENsb25lKGRhdGFzZXQyKV07XG5cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdwYW5MZWZ0JzpcbiAgICAgICAgaG91ciA9IHBhblN0YXRlLmluaXRpYWwgLSBwYW5TdGF0ZS5mYWN0b3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGFuUmlnaHQnOlxuICAgICAgICBob3VyID0gcGFuU3RhdGUuaW5pdGlhbCArIHBhblN0YXRlLmZhY3RvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFuU3RhdGU7XG4gICAgfVxuXG4gICAgbmV3R3JhcGhTdGF0ZS5heGlzLngubG93ZXJMaW1pdCA9IG5ldyBEYXRlKDIwMTYsIDAsIDEsIGhvdXIpLnRvSVNPU3RyaW5nKCk7XG4gICAgbmV3R3JhcGhTdGF0ZS5heGlzLngudXBwZXJMaW1pdCA9IG5ldyBEYXRlKDIwMTYsIDAsIDIsIGhvdXIpLnRvSVNPU3RyaW5nKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaW5pdGlhbDogaG91cixcbiAgICAgIGZhY3RvcjogcGFuU3RhdGUuZmFjdG9yLFxuICAgICAgZGF0YXNldDogeyBwYW5EYXRhOiBuZXdEYXRhc2V0IH0sXG4gICAgICBncmFwaENvbmZpZzogdXRpbHMuZGVlcENsb25lKG5ld0dyYXBoU3RhdGUpLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgW3BhblN0YXRlLCBkaXNwYXRjaF0gPSBSZWFjdC51c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tcGFuLWxlZnRcIiB0ZXh0PVwiPFwiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3BhbkxlZnQnIH0pfSAvPlxuICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tcGFuLXJpZ2h0XCIgdGV4dD1cIj5cIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdwYW5SaWdodCcgfSl9IC8+XG4gICAgICA8UGFpcmVkUmVzdWx0R3JhcGggZ3JhcGhJRD1cIlBhaXJlZFJlc3VsdER5bmFtaWNEYXRhXCIgZ3JhcGhDb25maWc9e3BhblN0YXRlLmdyYXBoQ29uZmlnfSBkYXRhc2V0PXtwYW5TdGF0ZS5kYXRhc2V0fSAvPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFpcmVkUmVzdWx0UGFubmluZ0V4YW1wbGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJCdXR0b24iLCJ1dGlscyIsIlBhaXJlZFJlc3VsdEdyYXBoIiwiZ2V0UGFpcmVkUmVzdWx0VGltZXNlcmllc1Bhbm5pbmdDb25maWciLCJkYXRhc2V0MSIsImRhdGFzZXQyIiwiaW5pdGlhbFN0YXRlIiwiaW5pdGlhbCIsImZhY3RvciIsImRhdGFzZXQiLCJkZWVwQ2xvbmUiLCJncmFwaENvbmZpZyIsIlBhaXJlZFJlc3VsdFBhbm5pbmdFeGFtcGxlIiwicmVkdWNlciIsInBhblN0YXRlIiwiYWN0aW9uIiwibmV3R3JhcGhTdGF0ZSIsImhvdXIiLCJuZXdEYXRhc2V0IiwidHlwZSIsImF4aXMiLCJ4IiwibG93ZXJMaW1pdCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInVwcGVyTGltaXQiLCJwYW5EYXRhIiwiX1JlYWN0JHVzZVJlZHVjZXIiLCJ1c2VSZWR1Y2VyIiwiX1JlYWN0JHVzZVJlZHVjZXIyIiwiX3NsaWNlZFRvQXJyYXkiLCJkaXNwYXRjaCIsImNyZWF0ZUVsZW1lbnQiLCJGcmFnbWVudCIsImNsYXNzTmFtZSIsInRleHQiLCJvbkNsaWNrIiwiZ3JhcGhJRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/PairedResult/Reflow/DynamicData.test.jsx\n");

/***/ })

}]);