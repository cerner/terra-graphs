"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkterra_graphs"] = self["webpackChunkterra_graphs"] || []).push([["packages_terra-graphs-docs_src_terra-dev-site_test_graphs_Combination_Regions_DatasetRegionId-ca36df"],{

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

/***/ "./packages/terra-graphs-docs/src/example-datasets/dataObjects/Combination/lineIdenticalRegionDataset.js":
/*!***************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/dataObjects/Combination/lineIdenticalRegionDataset.js ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/popup */ \"./packages/terra-graphs-docs/src/example-datasets/popup.js\");\n\n\nvar data = {\n  key: 'identical_region_line_dataset',\n  graphType: 'Line',\n  label: {\n    display: 'Line Data Label'\n  },\n  shape: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.RHOMBUS,\n  color: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n  onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadPopup,\n  values: new Array(50).fill('').map(function (_, i) {\n    return {\n      y: Math.sin(i) * 5 + 10,\n      x: 10 + i * 5\n    };\n  }),\n  regions: [{\n    axis: 'y',\n    start: 120,\n    end: 180,\n    color: '#c8cacb'\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9Db21iaW5hdGlvbi9saW5lSWRlbnRpY2FsUmVnaW9uRGF0YXNldC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBMkM7QUFDc0M7QUFFakYsSUFBTUUsSUFBSSxHQUFHO0VBQ1hDLEdBQUcsRUFBRSwrQkFBK0I7RUFDcENDLFNBQVMsRUFBRSxNQUFNO0VBQ2pCQyxLQUFLLEVBQUU7SUFDTEMsT0FBTyxFQUFFO0VBQ1gsQ0FBQztFQUNEQyxLQUFLLEVBQUVQLDZEQUFNLENBQUNRLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLE9BQU87RUFDekNDLEtBQUssRUFBRVosNkRBQU0sQ0FBQ1EsT0FBTyxDQUFDSyxNQUFNLENBQUNDLElBQUk7RUFDakNDLE9BQU8sRUFBRWQsMkZBQVM7RUFDbEJlLE1BQU0sRUFBRSxJQUFJQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUNDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFVBQUNDLENBQUMsRUFBRUMsQ0FBQztJQUFBLE9BQU07TUFDNUNDLENBQUMsRUFBRUMsSUFBSSxDQUFDQyxHQUFHLENBQUNILENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO01BQ3ZCSSxDQUFDLEVBQUUsRUFBRSxHQUFHSixDQUFDLEdBQUc7SUFDZCxDQUFDO0VBQUEsQ0FBQyxDQUFDO0VBQ0hLLE9BQU8sRUFBRSxDQUNQO0lBQ0VDLElBQUksRUFBRSxHQUFHO0lBQ1RDLEtBQUssRUFBRSxHQUFHO0lBQ1ZDLEdBQUcsRUFBRSxHQUFHO0lBQ1JqQixLQUFLLEVBQUU7RUFDVCxDQUFDO0FBRUwsQ0FBQztBQUVELCtEQUFlVixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVycmEtZ3JhcGhzLy4vcGFja2FnZXMvdGVycmEtZ3JhcGhzLWRvY3Mvc3JjL2V4YW1wbGUtZGF0YXNldHMvZGF0YU9iamVjdHMvQ29tYmluYXRpb24vbGluZUlkZW50aWNhbFJlZ2lvbkRhdGFzZXQuanM/YTYxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyYm9uIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocyc7XG5pbXBvcnQgeyBsb2FkUG9wdXAgfSBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL3BvcHVwJztcblxuY29uc3QgZGF0YSA9IHtcbiAga2V5OiAnaWRlbnRpY2FsX3JlZ2lvbl9saW5lX2RhdGFzZXQnLFxuICBncmFwaFR5cGU6ICdMaW5lJyxcbiAgbGFiZWw6IHtcbiAgICBkaXNwbGF5OiAnTGluZSBEYXRhIExhYmVsJyxcbiAgfSxcbiAgc2hhcGU6IENhcmJvbi5oZWxwZXJzLlNIQVBFUy5EQVJLLlJIT01CVVMsXG4gIGNvbG9yOiBDYXJib24uaGVscGVycy5DT0xPUlMuQkxVRSxcbiAgb25DbGljazogbG9hZFBvcHVwLFxuICB2YWx1ZXM6IG5ldyBBcnJheSg1MCkuZmlsbCgnJykubWFwKChfLCBpKSA9PiAoe1xuICAgIHk6IE1hdGguc2luKGkpICogNSArIDEwLFxuICAgIHg6IDEwICsgaSAqIDUsXG4gIH0pKSxcbiAgcmVnaW9uczogW1xuICAgIHtcbiAgICAgIGF4aXM6ICd5JyxcbiAgICAgIHN0YXJ0OiAxMjAsXG4gICAgICBlbmQ6IDE4MCxcbiAgICAgIGNvbG9yOiAnI2M4Y2FjYicsXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iXSwibmFtZXMiOlsiQ2FyYm9uIiwibG9hZFBvcHVwIiwiZGF0YSIsImtleSIsImdyYXBoVHlwZSIsImxhYmVsIiwiZGlzcGxheSIsInNoYXBlIiwiaGVscGVycyIsIlNIQVBFUyIsIkRBUksiLCJSSE9NQlVTIiwiY29sb3IiLCJDT0xPUlMiLCJCTFVFIiwib25DbGljayIsInZhbHVlcyIsIkFycmF5IiwiZmlsbCIsIm1hcCIsIl8iLCJpIiwieSIsIk1hdGgiLCJzaW4iLCJ4IiwicmVnaW9ucyIsImF4aXMiLCJzdGFydCIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/dataObjects/Combination/lineIdenticalRegionDataset.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/example-datasets/dataObjects/Combination/pairedResultIdenticalRegionDataset.js":
/*!***********************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/dataObjects/Combination/pairedResultIdenticalRegionDataset.js ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/popup */ \"./packages/terra-graphs-docs/src/example-datasets/popup.js\");\n\n\nvar data = {\n  key: 'identical_region_paired_result_dataset',\n  graphType: 'Paired Result',\n  label: {\n    high: {\n      display: 'Paired Result High'\n    },\n    mid: {\n      display: 'Paired Result Median'\n    },\n    low: {\n      display: 'Paired Result Low'\n    }\n  },\n  yAxis: 'y',\n  shape: {\n    high: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TEAR_ALT,\n    mid: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.RHOMBUS,\n    low: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.SHAPES.DARK.TEAR_DROP\n  },\n  color: {\n    high: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n    mid: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n    low: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK\n  },\n  onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadPopup,\n  values: [{\n    high: {\n      x: 45,\n      y: 200\n    },\n    mid: {\n      x: 45,\n      y: 146\n    },\n    low: {\n      x: 45,\n      y: 75\n    }\n  }, {\n    high: {\n      x: 160,\n      y: 110\n    },\n    mid: {\n      x: 160,\n      y: 70\n    },\n    low: {\n      x: 160,\n      y: 30\n    }\n  }, {\n    high: {\n      x: 220,\n      y: 110\n    },\n    mid: {\n      x: 220,\n      y: 70\n    },\n    low: {\n      x: 220,\n      y: 30\n    }\n  }],\n  regions: {\n    high: [{\n      axis: 'y',\n      start: 120,\n      end: 180,\n      color: '#c8cacb'\n    }],\n    mid: [{\n      axis: 'y',\n      start: 120,\n      end: 180,\n      color: '#c8cacb'\n    }],\n    low: [{\n      axis: 'y',\n      start: 120,\n      end: 180,\n      color: '#c8cacb'\n    }]\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9Db21iaW5hdGlvbi9wYWlyZWRSZXN1bHRJZGVudGljYWxSZWdpb25EYXRhc2V0LmpzIiwibWFwcGluZ3MiOiI7OztBQUEyQztBQUNzQztBQUVqRixJQUFNRSxJQUFJLEdBQUc7RUFDWEMsR0FBRyxFQUFFLHdDQUF3QztFQUM3Q0MsU0FBUyxFQUFFLGVBQWU7RUFDMUJDLEtBQUssRUFBRTtJQUNMQyxJQUFJLEVBQUU7TUFDSkMsT0FBTyxFQUFFO0lBQ1gsQ0FBQztJQUNEQyxHQUFHLEVBQUU7TUFDSEQsT0FBTyxFQUFFO0lBQ1gsQ0FBQztJQUNERSxHQUFHLEVBQUU7TUFDSEYsT0FBTyxFQUFFO0lBQ1g7RUFDRixDQUFDO0VBQ0RHLEtBQUssRUFBRSxHQUFHO0VBQ1ZDLEtBQUssRUFBRTtJQUNMTCxJQUFJLEVBQUVOLDZEQUFNLENBQUNZLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNDLFFBQVE7SUFDekNQLEdBQUcsRUFBRVIsNkRBQU0sQ0FBQ1ksT0FBTyxDQUFDQyxNQUFNLENBQUNDLElBQUksQ0FBQ0UsT0FBTztJQUN2Q1AsR0FBRyxFQUFFVCw2REFBTSxDQUFDWSxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDRztFQUNsQyxDQUFDO0VBQ0RDLEtBQUssRUFBRTtJQUNMWixJQUFJLEVBQUVOLDZEQUFNLENBQUNZLE9BQU8sQ0FBQ08sTUFBTSxDQUFDQyxLQUFLO0lBQ2pDWixHQUFHLEVBQUVSLDZEQUFNLENBQUNZLE9BQU8sQ0FBQ08sTUFBTSxDQUFDQyxLQUFLO0lBQ2hDWCxHQUFHLEVBQUVULDZEQUFNLENBQUNZLE9BQU8sQ0FBQ08sTUFBTSxDQUFDQztFQUM3QixDQUFDO0VBQ0RDLE9BQU8sRUFBRXBCLDJGQUFTO0VBQ2xCcUIsTUFBTSxFQUFFLENBQ047SUFDRWhCLElBQUksRUFBRTtNQUNKaUIsQ0FBQyxFQUFFLEVBQUU7TUFDTEMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQztJQUNEaEIsR0FBRyxFQUFFO01BQ0hlLENBQUMsRUFBRSxFQUFFO01BQ0xDLENBQUMsRUFBRTtJQUNMLENBQUM7SUFDRGYsR0FBRyxFQUFFO01BQ0hjLENBQUMsRUFBRSxFQUFFO01BQ0xDLENBQUMsRUFBRTtJQUNMO0VBQ0YsQ0FBQyxFQUNEO0lBQ0VsQixJQUFJLEVBQUU7TUFDSmlCLENBQUMsRUFBRSxHQUFHO01BQ05DLENBQUMsRUFBRTtJQUNMLENBQUM7SUFDRGhCLEdBQUcsRUFBRTtNQUNIZSxDQUFDLEVBQUUsR0FBRztNQUNOQyxDQUFDLEVBQUU7SUFDTCxDQUFDO0lBQ0RmLEdBQUcsRUFBRTtNQUNIYyxDQUFDLEVBQUUsR0FBRztNQUNOQyxDQUFDLEVBQUU7SUFDTDtFQUNGLENBQUMsRUFDRDtJQUNFbEIsSUFBSSxFQUFFO01BQ0ppQixDQUFDLEVBQUUsR0FBRztNQUNOQyxDQUFDLEVBQUU7SUFDTCxDQUFDO0lBQ0RoQixHQUFHLEVBQUU7TUFDSGUsQ0FBQyxFQUFFLEdBQUc7TUFDTkMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQztJQUNEZixHQUFHLEVBQUU7TUFDSGMsQ0FBQyxFQUFFLEdBQUc7TUFDTkMsQ0FBQyxFQUFFO0lBQ0w7RUFDRixDQUFDLENBQ0Y7RUFDREMsT0FBTyxFQUFFO0lBQ1BuQixJQUFJLEVBQUUsQ0FDSjtNQUNFb0IsSUFBSSxFQUFFLEdBQUc7TUFDVEMsS0FBSyxFQUFFLEdBQUc7TUFDVkMsR0FBRyxFQUFFLEdBQUc7TUFDUlYsS0FBSyxFQUFFO0lBQ1QsQ0FBQyxDQUNGO0lBQ0RWLEdBQUcsRUFBRSxDQUNIO01BQ0VrQixJQUFJLEVBQUUsR0FBRztNQUNUQyxLQUFLLEVBQUUsR0FBRztNQUNWQyxHQUFHLEVBQUUsR0FBRztNQUNSVixLQUFLLEVBQUU7SUFDVCxDQUFDLENBQ0Y7SUFDRFQsR0FBRyxFQUFFLENBQ0g7TUFDRWlCLElBQUksRUFBRSxHQUFHO01BQ1RDLEtBQUssRUFBRSxHQUFHO01BQ1ZDLEdBQUcsRUFBRSxHQUFHO01BQ1JWLEtBQUssRUFBRTtJQUNULENBQUM7RUFFTDtBQUNGLENBQUM7QUFFRCwrREFBZWhCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9Db21iaW5hdGlvbi9wYWlyZWRSZXN1bHRJZGVudGljYWxSZWdpb25EYXRhc2V0LmpzP2Q3MGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmJvbiBmcm9tICdAY2VybmVyL2NhcmJvbi1ncmFwaHMnO1xuaW1wb3J0IHsgbG9hZFBvcHVwIH0gZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvZXhhbXBsZS1kYXRhc2V0cy9wb3B1cCc7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIGtleTogJ2lkZW50aWNhbF9yZWdpb25fcGFpcmVkX3Jlc3VsdF9kYXRhc2V0JyxcbiAgZ3JhcGhUeXBlOiAnUGFpcmVkIFJlc3VsdCcsXG4gIGxhYmVsOiB7XG4gICAgaGlnaDoge1xuICAgICAgZGlzcGxheTogJ1BhaXJlZCBSZXN1bHQgSGlnaCcsXG4gICAgfSxcbiAgICBtaWQ6IHtcbiAgICAgIGRpc3BsYXk6ICdQYWlyZWQgUmVzdWx0IE1lZGlhbicsXG4gICAgfSxcbiAgICBsb3c6IHtcbiAgICAgIGRpc3BsYXk6ICdQYWlyZWQgUmVzdWx0IExvdycsXG4gICAgfSxcbiAgfSxcbiAgeUF4aXM6ICd5JyxcbiAgc2hhcGU6IHtcbiAgICBoaWdoOiBDYXJib24uaGVscGVycy5TSEFQRVMuREFSSy5URUFSX0FMVCxcbiAgICBtaWQ6IENhcmJvbi5oZWxwZXJzLlNIQVBFUy5EQVJLLlJIT01CVVMsXG4gICAgbG93OiBDYXJib24uaGVscGVycy5TSEFQRVMuREFSSy5URUFSX0RST1AsXG4gIH0sXG4gIGNvbG9yOiB7XG4gICAgaGlnaDogQ2FyYm9uLmhlbHBlcnMuQ09MT1JTLkJMQUNLLFxuICAgIG1pZDogQ2FyYm9uLmhlbHBlcnMuQ09MT1JTLkJMQUNLLFxuICAgIGxvdzogQ2FyYm9uLmhlbHBlcnMuQ09MT1JTLkJMQUNLLFxuICB9LFxuICBvbkNsaWNrOiBsb2FkUG9wdXAsXG4gIHZhbHVlczogW1xuICAgIHtcbiAgICAgIGhpZ2g6IHtcbiAgICAgICAgeDogNDUsXG4gICAgICAgIHk6IDIwMCxcbiAgICAgIH0sXG4gICAgICBtaWQ6IHtcbiAgICAgICAgeDogNDUsXG4gICAgICAgIHk6IDE0NixcbiAgICAgIH0sXG4gICAgICBsb3c6IHtcbiAgICAgICAgeDogNDUsXG4gICAgICAgIHk6IDc1LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGhpZ2g6IHtcbiAgICAgICAgeDogMTYwLFxuICAgICAgICB5OiAxMTAsXG4gICAgICB9LFxuICAgICAgbWlkOiB7XG4gICAgICAgIHg6IDE2MCxcbiAgICAgICAgeTogNzAsXG4gICAgICB9LFxuICAgICAgbG93OiB7XG4gICAgICAgIHg6IDE2MCxcbiAgICAgICAgeTogMzAsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgaGlnaDoge1xuICAgICAgICB4OiAyMjAsXG4gICAgICAgIHk6IDExMCxcbiAgICAgIH0sXG4gICAgICBtaWQ6IHtcbiAgICAgICAgeDogMjIwLFxuICAgICAgICB5OiA3MCxcbiAgICAgIH0sXG4gICAgICBsb3c6IHtcbiAgICAgICAgeDogMjIwLFxuICAgICAgICB5OiAzMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgXSxcbiAgcmVnaW9uczoge1xuICAgIGhpZ2g6IFtcbiAgICAgIHtcbiAgICAgICAgYXhpczogJ3knLFxuICAgICAgICBzdGFydDogMTIwLFxuICAgICAgICBlbmQ6IDE4MCxcbiAgICAgICAgY29sb3I6ICcjYzhjYWNiJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBtaWQ6IFtcbiAgICAgIHtcbiAgICAgICAgYXhpczogJ3knLFxuICAgICAgICBzdGFydDogMTIwLFxuICAgICAgICBlbmQ6IDE4MCxcbiAgICAgICAgY29sb3I6ICcjYzhjYWNiJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgICBsb3c6IFtcbiAgICAgIHtcbiAgICAgICAgYXhpczogJ3knLFxuICAgICAgICBzdGFydDogMTIwLFxuICAgICAgICBlbmQ6IDE4MCxcbiAgICAgICAgY29sb3I6ICcjYzhjYWNiJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iXSwibmFtZXMiOlsiQ2FyYm9uIiwibG9hZFBvcHVwIiwiZGF0YSIsImtleSIsImdyYXBoVHlwZSIsImxhYmVsIiwiaGlnaCIsImRpc3BsYXkiLCJtaWQiLCJsb3ciLCJ5QXhpcyIsInNoYXBlIiwiaGVscGVycyIsIlNIQVBFUyIsIkRBUksiLCJURUFSX0FMVCIsIlJIT01CVVMiLCJURUFSX0RST1AiLCJjb2xvciIsIkNPTE9SUyIsIkJMQUNLIiwib25DbGljayIsInZhbHVlcyIsIngiLCJ5IiwicmVnaW9ucyIsImF4aXMiLCJzdGFydCIsImVuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/dataObjects/Combination/pairedResultIdenticalRegionDataset.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/Combination/Regions/DatasetRegionIdentical.test.jsx":
/*!***********************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/Combination/Regions/DatasetRegionIdentical.test.jsx ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/helpers/utils */ \"./packages/carbon-graphs/src/js/helpers/utils.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_graphs_src_components_Combination_CombinationGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-graphs-src/components/Combination/CombinationGraph */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Combination/CombinationGraph.jsx\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_dev_site_ExampleGraphContainer_ExampleGraphContainer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss */ \"./packages/terra-graphs-docs/src/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Combination_lineAndPairedResultConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig */ \"./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Combination/lineAndPairedResultConfig.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Combination_lineIdenticalRegionDataset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/lineIdenticalRegionDataset */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/Combination/lineIdenticalRegionDataset.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Combination_pairedResultIdenticalRegionDataset__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Combination/pairedResultIdenticalRegionDataset */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/Combination/pairedResultIdenticalRegionDataset.js\");\n\n\n\n\n\n\n\nvar graphConfig = _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone((0,_cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Combination_lineAndPairedResultConfig__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('#lineWithPairedResultRegion'));\nvar dataset = [_cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Combination_lineIdenticalRegionDataset__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Combination_pairedResultIdenticalRegionDataset__WEBPACK_IMPORTED_MODULE_6__[\"default\"])];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"tooltip\",\n    className: \"initial-tooltip\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_cerner_terra_graphs_docs_lib_terra_graphs_src_components_Combination_CombinationGraph__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    graphID: \"lineWithPairedResultRegion\",\n    graphConfig: graphConfig,\n    dataset: dataset\n  }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9ncmFwaHMvQ29tYmluYXRpb24vUmVnaW9ucy9EYXRhc2V0UmVnaW9uSWRlbnRpY2FsLnRlc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ3FDO0FBQ3VEO0FBQ1I7QUFDa0M7QUFDcEI7QUFDZ0I7QUFFNUksSUFBTU0sV0FBVyxHQUFHTCxrRkFBSyxDQUFDTSxTQUFTLENBQUNKLG1KQUF5QixDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDN0YsSUFBTUssT0FBTyxHQUFHLENBQ2RQLGtGQUFLLENBQUNNLFNBQVMsQ0FBQ0gseUlBQVcsQ0FBQyxFQUM1Qkgsa0ZBQUssQ0FBQ00sU0FBUyxDQUFDRixpSkFBbUIsQ0FBQyxDQUNyQztBQUVELCtEQUFlO0VBQUEsb0JBQ2JMLGdEQUFBLENBQUFBLDJDQUFBLHFCQUNFQSxnREFBQTtJQUFLVyxFQUFFLEVBQUMsU0FBUztJQUFDQyxTQUFTLEVBQUM7RUFBaUIsQ0FBRSxDQUFDLGVBQ2hEWixnREFBQSxDQUFDRSw4SEFBZ0I7SUFBQ1csT0FBTyxFQUFDLDRCQUE0QjtJQUFDUCxXQUFXLEVBQUVBLFdBQVk7SUFBQ0UsT0FBTyxFQUFFQTtFQUFRLENBQUUsQ0FDcEcsQ0FBQztBQUFBLENBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9ncmFwaHMvQ29tYmluYXRpb24vUmVnaW9ucy9EYXRhc2V0UmVnaW9uSWRlbnRpY2FsLnRlc3QuanN4PzFiN2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1dGlscyBmcm9tICdAY2VybmVyL2NhcmJvbi1ncmFwaHMvbGliL2pzL2hlbHBlcnMvdXRpbHMnO1xuaW1wb3J0IENvbWJpbmF0aW9uR3JhcGggZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL0NvbWJpbmF0aW9uL0NvbWJpbmF0aW9uR3JhcGgnO1xuaW1wb3J0ICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi90ZXJyYS1kZXYtc2l0ZS9FeGFtcGxlR3JhcGhDb250YWluZXIvRXhhbXBsZUdyYXBoQ29udGFpbmVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBsaW5lQW5kUGFpcmVkUmVzdWx0Q29uZmlnIGZyb20gJ0BjZXJuZXIvdGVycmEtZ3JhcGhzLWRvY3MvbGliL2V4YW1wbGUtZGF0YXNldHMvZ3JhcGhDb25maWdPYmplY3RzL0NvbWJpbmF0aW9uL2xpbmVBbmRQYWlyZWRSZXN1bHRDb25maWcnO1xuaW1wb3J0IGxpbmVEYXRhc2V0IGZyb20gJ0BjZXJuZXIvdGVycmEtZ3JhcGhzLWRvY3MvbGliL2V4YW1wbGUtZGF0YXNldHMvZGF0YU9iamVjdHMvQ29tYmluYXRpb24vbGluZUlkZW50aWNhbFJlZ2lvbkRhdGFzZXQnO1xuaW1wb3J0IHBhaXJlZFJlc3VsdERhdGFzZXQgZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9Db21iaW5hdGlvbi9wYWlyZWRSZXN1bHRJZGVudGljYWxSZWdpb25EYXRhc2V0JztcblxuY29uc3QgZ3JhcGhDb25maWcgPSB1dGlscy5kZWVwQ2xvbmUobGluZUFuZFBhaXJlZFJlc3VsdENvbmZpZygnI2xpbmVXaXRoUGFpcmVkUmVzdWx0UmVnaW9uJykpO1xuY29uc3QgZGF0YXNldCA9IFtcbiAgdXRpbHMuZGVlcENsb25lKGxpbmVEYXRhc2V0KSxcbiAgdXRpbHMuZGVlcENsb25lKHBhaXJlZFJlc3VsdERhdGFzZXQpLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8PlxuICAgIDxkaXYgaWQ9XCJ0b29sdGlwXCIgY2xhc3NOYW1lPVwiaW5pdGlhbC10b29sdGlwXCIgLz5cbiAgICA8Q29tYmluYXRpb25HcmFwaCBncmFwaElEPVwibGluZVdpdGhQYWlyZWRSZXN1bHRSZWdpb25cIiBncmFwaENvbmZpZz17Z3JhcGhDb25maWd9IGRhdGFzZXQ9e2RhdGFzZXR9IC8+XG4gIDwvPlxuKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInV0aWxzIiwiQ29tYmluYXRpb25HcmFwaCIsImxpbmVBbmRQYWlyZWRSZXN1bHRDb25maWciLCJsaW5lRGF0YXNldCIsInBhaXJlZFJlc3VsdERhdGFzZXQiLCJncmFwaENvbmZpZyIsImRlZXBDbG9uZSIsImRhdGFzZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJpZCIsImNsYXNzTmFtZSIsImdyYXBoSUQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/Combination/Regions/DatasetRegionIdentical.test.jsx\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-graphs-src/components/Combination/CombinationGraph.jsx":
/*!*****************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-graphs-src/components/Combination/CombinationGraph.jsx ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n/* harmony import */ var _Graph_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Graph.module.scss */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Graph.module.scss\");\n/* harmony import */ var _Line_LineGraph_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Line/LineGraph.module.scss */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Line/LineGraph.module.scss\");\n/* harmony import */ var _Bar_BarGraph_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Bar/BarGraph.module.scss */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Bar/BarGraph.module.scss\");\n/* harmony import */ var _PairedResult_PairedResultGraph_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PairedResult/PairedResultGraph.module.scss */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/PairedResult/PairedResultGraph.module.scss\");\n\n\n\n\n\n\n\nvar propTypes = {\n  /**\n   * ID for graph created.\n   */\n  graphID: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string).isRequired,\n  /**\n   * Graph configuration object\n   */\n  graphConfig: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object).isRequired,\n  /**\n   * data to be displayed in graph\n   */\n  dataset: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)),\n  /**\n   * timeout to display multiple data contents in specific time interval.\n   */\n  timeout: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().number))\n};\nvar datasetLoader = function datasetLoader(dataset) {\n  var graphType = dataset.graphType.toUpperCase();\n  graphType = graphType.replaceAll(' ', '');\n  var apiData;\n  switch (graphType) {\n    case 'LINE':\n      apiData = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.line(dataset);\n      break;\n    case 'SCATTER':\n      apiData = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.scatter(dataset);\n      break;\n    case 'PAIREDRESULT':\n      apiData = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.pairedResult(dataset);\n      break;\n    case 'BAR':\n      apiData = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.bar(dataset);\n      break;\n    case 'BUBBLESINGLEDATASET':\n      apiData = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.bubbleSingleDataset(dataset);\n      break;\n    case 'BUBBLEMULTIPLEDATASET':\n      apiData = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.bubbleMultipleDataset(dataset);\n      break;\n    default:\n      apiData = undefined;\n  }\n  return apiData;\n};\nvar CombinationGraph = function CombinationGraph(_ref) {\n  var graphConfig = _ref.graphConfig,\n    dataset = _ref.dataset,\n    graphID = _ref.graphID,\n    timeout = _ref.timeout;\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {\n    var graph = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.graph(graphConfig);\n    var timeoutIds = [];\n    if (dataset) {\n      if (timeout) {\n        dataset.forEach(function (data, index) {\n          var timeoutId = setTimeout(function () {\n            return graph.graphContainer ? graph.loadContent(datasetLoader(data)) : '';\n          }, timeout[index]);\n          timeoutIds.push(timeoutId);\n        });\n      } else {\n        dataset.forEach(function (data) {\n          graph.loadContent(datasetLoader(data));\n        });\n      }\n    }\n    return function () {\n      timeoutIds.forEach(function (id) {\n        clearTimeout(id);\n      });\n    };\n  }, [graphConfig, dataset, timeout]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"\".concat(graphID, \"-canvasContainer\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: graphID\n  }));\n};\nCombinationGraph.propTypes = propTypes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CombinationGraph);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL0NvbWJpbmF0aW9uL0NvbWJpbmF0aW9uR3JhcGguanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNTO0FBQ1E7QUFDYjtBQUNTO0FBQ0Y7QUFDa0I7QUFFdkQsSUFBTUcsU0FBUyxHQUFHO0VBQ2hCO0FBQ0Y7QUFDQTtFQUNFQyxPQUFPLEVBQUVILDBEQUFnQixDQUFDSyxVQUFVO0VBQ3BDO0FBQ0Y7QUFDQTtFQUNFQyxXQUFXLEVBQUVOLDBEQUFnQixDQUFDSyxVQUFVO0VBQ3hDO0FBQ0Y7QUFDQTtFQUNFRyxPQUFPLEVBQUVSLHlEQUFpQixDQUFDQSwwREFBZ0IsQ0FBQztFQUM1QztBQUNGO0FBQ0E7RUFDRVUsT0FBTyxFQUFFVix5REFBaUIsQ0FBQ0EsMERBQWdCO0FBQzdDLENBQUM7QUFFRCxJQUFNWSxhQUFhLEdBQUcsU0FBaEJBLGFBQWFBLENBQUlKLE9BQU8sRUFBSztFQUNqQyxJQUFJSyxTQUFTLEdBQUdMLE9BQU8sQ0FBQ0ssU0FBUyxDQUFDQyxXQUFXLENBQUMsQ0FBQztFQUMvQ0QsU0FBUyxHQUFHQSxTQUFTLENBQUNFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO0VBQ3pDLElBQUlDLE9BQU87RUFDWCxRQUFRSCxTQUFTO0lBQ2YsS0FBSyxNQUFNO01BQ1RHLE9BQU8sR0FBR2YsNkRBQU0sQ0FBQ2dCLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDVixPQUFPLENBQUM7TUFDbEM7SUFDRixLQUFLLFNBQVM7TUFDWlEsT0FBTyxHQUFHZiw2REFBTSxDQUFDZ0IsR0FBRyxDQUFDRSxPQUFPLENBQUNYLE9BQU8sQ0FBQztNQUNyQztJQUNGLEtBQUssY0FBYztNQUNqQlEsT0FBTyxHQUFHZiw2REFBTSxDQUFDZ0IsR0FBRyxDQUFDRyxZQUFZLENBQUNaLE9BQU8sQ0FBQztNQUMxQztJQUNGLEtBQUssS0FBSztNQUNSUSxPQUFPLEdBQUdmLDZEQUFNLENBQUNnQixHQUFHLENBQUNJLEdBQUcsQ0FBQ2IsT0FBTyxDQUFDO01BQ2pDO0lBQ0YsS0FBSyxxQkFBcUI7TUFDeEJRLE9BQU8sR0FBR2YsNkRBQU0sQ0FBQ2dCLEdBQUcsQ0FBQ0ssbUJBQW1CLENBQUNkLE9BQU8sQ0FBQztNQUNqRDtJQUNGLEtBQUssdUJBQXVCO01BQzFCUSxPQUFPLEdBQUdmLDZEQUFNLENBQUNnQixHQUFHLENBQUNNLHFCQUFxQixDQUFDZixPQUFPLENBQUM7TUFDbkQ7SUFDRjtNQUNFUSxPQUFPLEdBQUdRLFNBQVM7RUFDdkI7RUFDQSxPQUFPUixPQUFPO0FBQ2hCLENBQUM7QUFDRCxJQUFNUyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCQSxDQUFBQyxJQUFBLEVBRWhCO0VBQUEsSUFESnBCLFdBQVcsR0FBQW9CLElBQUEsQ0FBWHBCLFdBQVc7SUFBRUUsT0FBTyxHQUFBa0IsSUFBQSxDQUFQbEIsT0FBTztJQUFFTCxPQUFPLEdBQUF1QixJQUFBLENBQVB2QixPQUFPO0lBQUVPLE9BQU8sR0FBQWdCLElBQUEsQ0FBUGhCLE9BQU87RUFFdENYLDRDQUFlLENBQUMsWUFBTTtJQUNwQixJQUFNNkIsS0FBSyxHQUFHM0IsNkRBQU0sQ0FBQ2dCLEdBQUcsQ0FBQ1csS0FBSyxDQUFDdEIsV0FBVyxDQUFDO0lBQzNDLElBQU11QixVQUFVLEdBQUcsRUFBRTtJQUVyQixJQUFJckIsT0FBTyxFQUFFO01BQ1gsSUFBSUUsT0FBTyxFQUFFO1FBQ1hGLE9BQU8sQ0FBQ3NCLE9BQU8sQ0FBQyxVQUFDQyxJQUFJLEVBQUVDLEtBQUssRUFBSztVQUMvQixJQUFNQyxTQUFTLEdBQUdDLFVBQVUsQ0FDMUI7WUFBQSxPQUFPTixLQUFLLENBQUNPLGNBQWMsR0FDdkJQLEtBQUssQ0FBQ1EsV0FBVyxDQUFDeEIsYUFBYSxDQUFDbUIsSUFBSSxDQUFDLENBQUMsR0FDdEMsRUFBRTtVQUFBLENBQUMsRUFDUHJCLE9BQU8sQ0FBQ3NCLEtBQUssQ0FDZixDQUFDO1VBRURILFVBQVUsQ0FBQ1EsSUFBSSxDQUFDSixTQUFTLENBQUM7UUFDNUIsQ0FBQyxDQUFDO01BQ0osQ0FBQyxNQUFNO1FBQ0x6QixPQUFPLENBQUNzQixPQUFPLENBQUMsVUFBQ0MsSUFBSSxFQUFLO1VBQ3hCSCxLQUFLLENBQUNRLFdBQVcsQ0FBQ3hCLGFBQWEsQ0FBQ21CLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQztNQUNKO0lBQ0Y7SUFFQSxPQUFPLFlBQU07TUFDWEYsVUFBVSxDQUFDQyxPQUFPLENBQUMsVUFBQ1EsRUFBRSxFQUFLO1FBQUVDLFlBQVksQ0FBQ0QsRUFBRSxDQUFDO01BQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7RUFDSCxDQUFDLEVBQUUsQ0FBQ2hDLFdBQVcsRUFBRUUsT0FBTyxFQUFFRSxPQUFPLENBQUMsQ0FBQztFQUVuQyxvQkFDRVgsZ0RBQUE7SUFBS3VDLEVBQUUsS0FBQUcsTUFBQSxDQUFLdEMsT0FBTztFQUFtQixnQkFDcENKLGdEQUFBO0lBQUt1QyxFQUFFLEVBQUVuQztFQUFRLENBQUUsQ0FDaEIsQ0FBQztBQUVWLENBQUM7QUFFRHNCLGdCQUFnQixDQUFDdkIsU0FBUyxHQUFHQSxTQUFTO0FBRXRDLCtEQUFldUIsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVycmEtZ3JhcGhzLy4vcGFja2FnZXMvdGVycmEtZ3JhcGhzLWRvY3Mvc3JjL3RlcnJhLWdyYXBocy1zcmMvY29tcG9uZW50cy9Db21iaW5hdGlvbi9Db21iaW5hdGlvbkdyYXBoLmpzeD84ZTFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENhcmJvbiBmcm9tICdAY2VybmVyL2NhcmJvbi1ncmFwaHMnO1xuaW1wb3J0ICcuLi9HcmFwaC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgJy4uL0xpbmUvTGluZUdyYXBoLm1vZHVsZS5zY3NzJztcbmltcG9ydCAnLi4vQmFyL0JhckdyYXBoLm1vZHVsZS5zY3NzJztcbmltcG9ydCAnLi4vUGFpcmVkUmVzdWx0L1BhaXJlZFJlc3VsdEdyYXBoLm1vZHVsZS5zY3NzJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogSUQgZm9yIGdyYXBoIGNyZWF0ZWQuXG4gICAqL1xuICBncmFwaElEOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBHcmFwaCBjb25maWd1cmF0aW9uIG9iamVjdFxuICAgKi9cbiAgZ3JhcGhDb25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIGRhdGEgdG8gYmUgZGlzcGxheWVkIGluIGdyYXBoXG4gICAqL1xuICBkYXRhc2V0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgLyoqXG4gICAqIHRpbWVvdXQgdG8gZGlzcGxheSBtdWx0aXBsZSBkYXRhIGNvbnRlbnRzIGluIHNwZWNpZmljIHRpbWUgaW50ZXJ2YWwuXG4gICAqL1xuICB0aW1lb3V0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcbn07XG5cbmNvbnN0IGRhdGFzZXRMb2FkZXIgPSAoZGF0YXNldCkgPT4ge1xuICBsZXQgZ3JhcGhUeXBlID0gZGF0YXNldC5ncmFwaFR5cGUudG9VcHBlckNhc2UoKTtcbiAgZ3JhcGhUeXBlID0gZ3JhcGhUeXBlLnJlcGxhY2VBbGwoJyAnLCAnJyk7XG4gIGxldCBhcGlEYXRhO1xuICBzd2l0Y2ggKGdyYXBoVHlwZSkge1xuICAgIGNhc2UgJ0xJTkUnOlxuICAgICAgYXBpRGF0YSA9IENhcmJvbi5hcGkubGluZShkYXRhc2V0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1NDQVRURVInOlxuICAgICAgYXBpRGF0YSA9IENhcmJvbi5hcGkuc2NhdHRlcihkYXRhc2V0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BBSVJFRFJFU1VMVCc6XG4gICAgICBhcGlEYXRhID0gQ2FyYm9uLmFwaS5wYWlyZWRSZXN1bHQoZGF0YXNldCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdCQVInOlxuICAgICAgYXBpRGF0YSA9IENhcmJvbi5hcGkuYmFyKGRhdGFzZXQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQlVCQkxFU0lOR0xFREFUQVNFVCc6XG4gICAgICBhcGlEYXRhID0gQ2FyYm9uLmFwaS5idWJibGVTaW5nbGVEYXRhc2V0KGRhdGFzZXQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQlVCQkxFTVVMVElQTEVEQVRBU0VUJzpcbiAgICAgIGFwaURhdGEgPSBDYXJib24uYXBpLmJ1YmJsZU11bHRpcGxlRGF0YXNldChkYXRhc2V0KTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBhcGlEYXRhID0gdW5kZWZpbmVkO1xuICB9XG4gIHJldHVybiBhcGlEYXRhO1xufTtcbmNvbnN0IENvbWJpbmF0aW9uR3JhcGggPSAoe1xuICBncmFwaENvbmZpZywgZGF0YXNldCwgZ3JhcGhJRCwgdGltZW91dCxcbn0pID0+IHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBncmFwaCA9IENhcmJvbi5hcGkuZ3JhcGgoZ3JhcGhDb25maWcpO1xuICAgIGNvbnN0IHRpbWVvdXRJZHMgPSBbXTtcblxuICAgIGlmIChkYXRhc2V0KSB7XG4gICAgICBpZiAodGltZW91dCkge1xuICAgICAgICBkYXRhc2V0LmZvckVhY2goKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICgpID0+IChncmFwaC5ncmFwaENvbnRhaW5lclxuICAgICAgICAgICAgICA/IGdyYXBoLmxvYWRDb250ZW50KGRhdGFzZXRMb2FkZXIoZGF0YSkpXG4gICAgICAgICAgICAgIDogJycpLFxuICAgICAgICAgICAgdGltZW91dFtpbmRleF0sXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHRpbWVvdXRJZHMucHVzaCh0aW1lb3V0SWQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFzZXQuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICAgIGdyYXBoLmxvYWRDb250ZW50KGRhdGFzZXRMb2FkZXIoZGF0YSkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdGltZW91dElkcy5mb3JFYWNoKChpZCkgPT4geyBjbGVhclRpbWVvdXQoaWQpOyB9KTtcbiAgICB9O1xuICB9LCBbZ3JhcGhDb25maWcsIGRhdGFzZXQsIHRpbWVvdXRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9e2Ake2dyYXBoSUR9LWNhbnZhc0NvbnRhaW5lcmB9PlxuICAgICAgPGRpdiBpZD17Z3JhcGhJRH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkNvbWJpbmF0aW9uR3JhcGgucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBDb21iaW5hdGlvbkdyYXBoO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiQ2FyYm9uIiwicHJvcFR5cGVzIiwiZ3JhcGhJRCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJncmFwaENvbmZpZyIsIm9iamVjdCIsImRhdGFzZXQiLCJhcnJheU9mIiwidGltZW91dCIsIm51bWJlciIsImRhdGFzZXRMb2FkZXIiLCJncmFwaFR5cGUiLCJ0b1VwcGVyQ2FzZSIsInJlcGxhY2VBbGwiLCJhcGlEYXRhIiwiYXBpIiwibGluZSIsInNjYXR0ZXIiLCJwYWlyZWRSZXN1bHQiLCJiYXIiLCJidWJibGVTaW5nbGVEYXRhc2V0IiwiYnViYmxlTXVsdGlwbGVEYXRhc2V0IiwidW5kZWZpbmVkIiwiQ29tYmluYXRpb25HcmFwaCIsIl9yZWYiLCJ1c2VFZmZlY3QiLCJncmFwaCIsInRpbWVvdXRJZHMiLCJmb3JFYWNoIiwiZGF0YSIsImluZGV4IiwidGltZW91dElkIiwic2V0VGltZW91dCIsImdyYXBoQ29udGFpbmVyIiwibG9hZENvbnRlbnQiLCJwdXNoIiwiaWQiLCJjbGVhclRpbWVvdXQiLCJjcmVhdGVFbGVtZW50IiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-graphs-src/components/Combination/CombinationGraph.jsx\n");

/***/ })

}]);