"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkterra_graphs"] = self["webpackChunkterra_graphs"] || []).push([["packages_terra-graphs-docs_src_terra-dev-site_test_general_reflow_DynamicallyUpdatingData_test_jsx"],{

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConcepts.b/examples/reflow/DynamicallyUpdatingData.jsx":
/*!************************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConcepts.b/examples/reflow/DynamicallyUpdatingData.jsx ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var terra_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! terra-button */ \"./node_modules/terra-button/lib/Button.js\");\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n\n\n\n\n\n//  graph configuration object\n\nvar graphConfig = {\n  bindTo: '#dynamic-data-update-example',\n  axis: {\n    x: {\n      label: 'x-axis',\n      lowerLimit: 80,\n      upperLimit: 280,\n      rangeRounding: false\n    },\n    y: {\n      label: 'y-axis',\n      lowerLimit: -5,\n      upperLimit: 20\n    }\n  },\n  allowCalibration: true\n};\n\n//  graph dataset\n\nvar dataset1 = {\n  key: 'uid_1',\n  label: {\n    display: 'Dataset 1'\n  },\n  color: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].helpers.COLORS.PINK,\n  values: [{\n    x: 87,\n    y: -2\n  }, {\n    x: 95,\n    y: 1\n  }, {\n    x: 103,\n    y: -4\n  }, {\n    x: 109,\n    y: -2\n  }, {\n    x: 128,\n    y: 3\n  }, {\n    x: 145,\n    y: 28\n  }, {\n    x: 151,\n    y: 7\n  }, {\n    x: 164,\n    y: 10\n  }, {\n    x: 177,\n    y: 1\n  }, {\n    x: 192,\n    y: 6\n  }, {\n    x: 203,\n    y: -21\n  }, {\n    x: 209,\n    y: -3\n  }, {\n    x: 246,\n    y: 3\n  }]\n};\n\n// Updated values for dataset 1\n// Color, shape & label of the original dataset is retained if it is not updated\nvar updatedDataset1 = {\n  key: 'uid_1',\n  values: [{\n    x: 81,\n    y: 21\n  }, {\n    x: 107,\n    y: 6\n  }, {\n    x: 109,\n    y: 7\n  }, {\n    x: 118,\n    y: 5\n  }, {\n    x: 117,\n    y: 21\n  }, {\n    x: 127,\n    y: -20\n  }, {\n    x: 137,\n    y: -9\n  }, {\n    x: 141,\n    y: -6\n  }, {\n    x: 144,\n    y: 39\n  }, {\n    x: 151,\n    y: -14\n  }, {\n    x: 156,\n    y: -9\n  }, {\n    x: 163,\n    y: 4\n  }, {\n    x: 164,\n    y: 29\n  }, {\n    x: 170,\n    y: 30\n  }, {\n    x: 172,\n    y: 31\n  }, {\n    x: 176,\n    y: 34\n  }, {\n    x: 185,\n    y: 1\n  }, {\n    x: 191,\n    y: -2\n  }, {\n    x: 193,\n    y: 38\n  }, {\n    x: 198,\n    y: 40\n  }]\n};\n\n// graph rendering\nvar graph;\nvar DynamicallyUpdatingDataExample = function DynamicallyUpdatingDataExample() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(graphConfig.allowCalibration.toString()),\n    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n    allowCalibrationStatus = _useState2[0],\n    SetAllowCalibrationStatus = _useState2[1];\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {\n    graph = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].api.graph(graphConfig);\n    graph.loadContent(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].api.line(dataset1));\n  }, []);\n  var handleClickToggleCalibration = function handleClickToggleCalibration() {\n    graph.config.allowCalibration = !graph.config.allowCalibration;\n    SetAllowCalibrationStatus(graph.config.allowCalibration.toString());\n    graph.reflowMultipleDatasets();\n  };\n  var handleClickUpdateData = function handleClickUpdateData() {\n    //    graph.config.axis.y.domain.lowerLimit = 0;\n    //    graph.config.axis.y.domain.upperLimit = 20;\n\n    graph.reflowMultipleDatasets({\n      panData: [updatedDataset1]\n    });\n  };\n  var handleClickReset = function handleClickReset() {\n    graph.unloadContent(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].api.line(dataset1));\n    graph.loadContent(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_3__[\"default\"].api.line(dataset1));\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(terra_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    text: \"Toggle Calibration\",\n    onClick: handleClickToggleCalibration\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(terra_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    text: \"Update Data\",\n    onClick: handleClickUpdateData\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(terra_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    text: \"Reset\",\n    onClick: handleClickReset\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, \"AllowCalibration:\", allowCalibrationStatus), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: \"dynamic-data-update-example\"\n  }));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DynamicallyUpdatingDataExample);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvZ3JhcGgvQ29yZUNvbmNlcHRzLmIvZXhhbXBsZXMvcmVmbG93L0R5bmFtaWNhbGx5VXBkYXRpbmdEYXRhLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFFTjtBQUVTOztBQUUzQzs7QUFFQSxJQUFNSSxXQUFXLEdBQUc7RUFDbEJDLE1BQU0sRUFBRSw4QkFBOEI7RUFDdENDLElBQUksRUFBRTtJQUNKQyxDQUFDLEVBQUU7TUFDREMsS0FBSyxFQUFFLFFBQVE7TUFDZkMsVUFBVSxFQUFFLEVBQUU7TUFDZEMsVUFBVSxFQUFFLEdBQUc7TUFDZkMsYUFBYSxFQUFFO0lBQ2pCLENBQUM7SUFDREMsQ0FBQyxFQUFFO01BQ0RKLEtBQUssRUFBRSxRQUFRO01BQ2ZDLFVBQVUsRUFBRSxDQUFDLENBQUM7TUFDZEMsVUFBVSxFQUFFO0lBQ2Q7RUFDRixDQUFDO0VBQ0RHLGdCQUFnQixFQUFFO0FBQ3BCLENBQUM7O0FBRUQ7O0FBRUEsSUFBTUMsUUFBUSxHQUFHO0VBQ2ZDLEdBQUcsRUFBRSxPQUFPO0VBQ1pQLEtBQUssRUFBRTtJQUNMUSxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RDLEtBQUssRUFBRWQsNkRBQU0sQ0FBQ2UsT0FBTyxDQUFDQyxNQUFNLENBQUNDLElBQUk7RUFDakNDLE1BQU0sRUFBRSxDQUNOO0lBQUVkLENBQUMsRUFBRSxFQUFFO0lBQUVLLENBQUMsRUFBRSxDQUFDO0VBQUUsQ0FBQyxFQUNoQjtJQUFFTCxDQUFDLEVBQUUsRUFBRTtJQUFFSyxDQUFDLEVBQUU7RUFBRSxDQUFDLEVBQ2Y7SUFBRUwsQ0FBQyxFQUFFLEdBQUc7SUFBRUssQ0FBQyxFQUFFLENBQUM7RUFBRSxDQUFDLEVBQ2pCO0lBQUVMLENBQUMsRUFBRSxHQUFHO0lBQUVLLENBQUMsRUFBRSxDQUFDO0VBQUUsQ0FBQyxFQUNqQjtJQUFFTCxDQUFDLEVBQUUsR0FBRztJQUFFSyxDQUFDLEVBQUU7RUFBRSxDQUFDLEVBQ2hCO0lBQUVMLENBQUMsRUFBRSxHQUFHO0lBQUVLLENBQUMsRUFBRTtFQUFHLENBQUMsRUFDakI7SUFBRUwsQ0FBQyxFQUFFLEdBQUc7SUFBRUssQ0FBQyxFQUFFO0VBQUUsQ0FBQyxFQUNoQjtJQUFFTCxDQUFDLEVBQUUsR0FBRztJQUFFSyxDQUFDLEVBQUU7RUFBRyxDQUFDLEVBQ2pCO0lBQUVMLENBQUMsRUFBRSxHQUFHO0lBQUVLLENBQUMsRUFBRTtFQUFFLENBQUMsRUFDaEI7SUFBRUwsQ0FBQyxFQUFFLEdBQUc7SUFBRUssQ0FBQyxFQUFFO0VBQUUsQ0FBQyxFQUNoQjtJQUFFTCxDQUFDLEVBQUUsR0FBRztJQUFFSyxDQUFDLEVBQUUsQ0FBQztFQUFHLENBQUMsRUFDbEI7SUFBRUwsQ0FBQyxFQUFFLEdBQUc7SUFBRUssQ0FBQyxFQUFFLENBQUM7RUFBRSxDQUFDLEVBQ2pCO0lBQUVMLENBQUMsRUFBRSxHQUFHO0lBQUVLLENBQUMsRUFBRTtFQUFFLENBQUM7QUFFcEIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBTVUsZUFBZSxHQUFHO0VBQ3RCUCxHQUFHLEVBQUUsT0FBTztFQUNaTSxNQUFNLEVBQUUsQ0FDTjtJQUFFZCxDQUFDLEVBQUUsRUFBRTtJQUFFSyxDQUFDLEVBQUU7RUFBRyxDQUFDLEVBQ2hCO0lBQUVMLENBQUMsRUFBRSxHQUFHO0lBQUVLLENBQUMsRUFBRTtFQUFFLENBQUMsRUFDaEI7SUFBRUwsQ0FBQyxFQUFFLEdBQUc7SUFBRUssQ0FBQyxFQUFFO0VBQUUsQ0FBQyxFQUNoQjtJQUFFTCxDQUFDLEVBQUUsR0FBRztJQUFFSyxDQUFDLEVBQUU7RUFBRSxDQUFDLEVBQ2hCO0lBQUVMLENBQUMsRUFBRSxHQUFHO0lBQUVLLENBQUMsRUFBRTtFQUFHLENBQUMsRUFDakI7SUFBRUwsQ0FBQyxFQUFFLEdBQUc7SUFBRUssQ0FBQyxFQUFFLENBQUM7RUFBRyxDQUFDLEVBQ2xCO0lBQUVMLENBQUMsRUFBRSxHQUFHO0lBQUVLLENBQUMsRUFBRSxDQUFDO0VBQUUs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Q0FBQSxxQkFDRUEsZ0RBQUEsQ0FBQ0Usb0RBQU07SUFBQzBDLElBQUksRUFBQyxvQkFBb0I7SUFBQ0MsT0FBTyxFQUFFVjtFQUE2QixDQUFFLENBQUMsZUFDM0VuQyxnREFBQSxDQUFDRSxvREFBTTtJQUFDMEMsSUFBSSxFQUFDLGFBQWE7SUFBQ0MsT0FBTyxFQUFFUDtFQUFzQixDQUFFLENBQUMsZUFDN0R0QyxnREFBQSxDQUFDRSxvREFBTTtJQUFDMEMsSUFBSSxFQUFDLE9BQU87SUFBQ0MsT0FBTyxFQUFFTDtFQUFpQixDQUFFLENBQUMsZUFDbER4QyxnREFBQSxjQUFLLG1CQUVILEVBQUM2QixzQkFDRSxDQUFDLGVBQ043QixnREFBQTtJQUFLOEMsRUFBRSxFQUFDO0VBQTZCLENBQUUsQ0FDdkMsQ0FBQztBQUVQLENBQUM7QUFFRCwrREFBZXRCLDhCQUE4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy90ZXJyYS1kZXYtc2l0ZS9ncmFwaC9Db3JlQ29uY2VwdHMuYi9leGFtcGxlcy9yZWZsb3cvRHluYW1pY2FsbHlVcGRhdGluZ0RhdGEuanN4P2M2ODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3RlcnJhLWJ1dHRvbic7XG5cbmltcG9ydCBDYXJib24gZnJvbSAnQGNlcm5lci9jYXJib24tZ3JhcGhzJztcblxuLy8gIGdyYXBoIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG5cbmNvbnN0IGdyYXBoQ29uZmlnID0ge1xuICBiaW5kVG86ICcjZHluYW1pYy1kYXRhLXVwZGF0ZS1leGFtcGxlJyxcbiAgYXhpczoge1xuICAgIHg6IHtcbiAgICAgIGxhYmVsOiAneC1heGlzJyxcbiAgICAgIGxvd2VyTGltaXQ6IDgwLFxuICAgICAgdXBwZXJMaW1pdDogMjgwLFxuICAgICAgcmFuZ2VSb3VuZGluZzogZmFsc2UsXG4gICAgfSxcbiAgICB5OiB7XG4gICAgICBsYWJlbDogJ3ktYXhpcycsXG4gICAgICBsb3dlckxpbWl0OiAtNSxcbiAgICAgIHVwcGVyTGltaXQ6IDIwLFxuICAgIH0sXG4gIH0sXG4gIGFsbG93Q2FsaWJyYXRpb246IHRydWUsXG59O1xuXG4vLyAgZ3JhcGggZGF0YXNldFxuXG5jb25zdCBkYXRhc2V0MSA9IHtcbiAga2V5OiAndWlkXzEnLFxuICBsYWJlbDoge1xuICAgIGRpc3BsYXk6ICdEYXRhc2V0IDEnLFxuICB9LFxuICBjb2xvcjogQ2FyYm9uLmhlbHBlcnMuQ09MT1JTLlBJTkssXG4gIHZhbHVlczogW1xuICAgIHsgeDogODcsIHk6IC0yIH0sXG4gICAgeyB4OiA5NSwgeTogMSB9LFxuICAgIHsgeDogMTAzLCB5OiAtNCB9LFxuICAgIHsgeDogMTA5LCB5OiAtMiB9LFxuICAgIHsgeDogMTI4LCB5OiAzIH0sXG4gICAgeyB4OiAxNDUsIHk6IDI4IH0sXG4gICAgeyB4OiAxNTEsIHk6IDcgfSxcbiAgICB7IHg6IDE2NCwgeTogMTAgfSxcbiAgICB7IHg6IDE3NywgeTogMSB9LFxuICAgIHsgeDogMTkyLCB5OiA2IH0sXG4gICAgeyB4OiAyMDMsIHk6IC0yMSB9LFxuICAgIHsgeDogMjA5LCB5OiAtMyB9LFxuICAgIHsgeDogMjQ2LCB5OiAzIH0sXG4gIF0sXG59O1xuXG4vLyBVcGRhdGVkIHZhbHVlcyBmb3IgZGF0YXNldCAxXG4vLyBDb2xvciwgc2hhcGUgJiBsYWJlbCBvZiB0aGUgb3JpZ2luYWwgZGF0YXNldCBpcyByZXRhaW5lZCBpZiBpdCBpcyBub3QgdXBkYXRlZFxuY29uc3QgdXBkYXRlZERhdGFzZXQxID0ge1xuICBrZXk6ICd1aWRfMScsXG4gIHZhbHVlczogW1xuICAgIHsgeDogODEsIHk6IDIxIH0sXG4gICAgeyB4OiAxMDcsIHk6IDYgfSxcbiAgICB7IHg6IDEwOSwgeTogNyB9LFxuICAgIHsgeDogMTE4LCB5OiA1IH0sXG4gICAgeyB4OiAxMTcsIHk6IDIxIH0sXG4gICAgeyB4OiAxMjcsIHk6IC0yMCB9LFxuICAgIHsgeDogMTM3LCB5OiAtOSB9LFxuICAgIHsgeDogMTQxLCB5OiAtNiB9LFxuICAgIHsgeDogMTQ0LCB5OiAzOSB9LFxuICAgIHsgeDogMTUxLCB5OiAtMTQgfSxcbiAgICB7IHg6IDE1NiwgeTogLTkgfSxcbiAgICB7IHg6IDE2MywgeTogNCB9LFxuICAgIHsgeDogMTY0LCB5OiAyOSB9LFxuICAgIHsgeDogMTcwLCB5OiAzMCB9LFxuICAgIHsgeDogMTcyLCB5OiAzMSB9LFxuICAgIHsgeDogMTc2LCB5OiAzNCB9LFxuICAgIHsgeDogMTg1LCB5OiAxIH0sXG4gICAgeyB4OiAxOTEsIHk6IC0yIH0sXG4gICAgeyB4OiAxOTMsIHk6IDM4IH0sXG4gICAgeyB4OiAxOTgsIHk6IDQwIH0sXG4gIF0sXG59O1xuXG4vLyBncmFwaCByZW5kZXJpbmdcbmxldCBncmFwaDtcbmNvbnN0IER5bmFtaWNhbGx5VXBkYXRpbmdEYXRhRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgW2FsbG93Q2FsaWJyYXRpb25TdGF0dXMsIFNldEFsbG93Q2FsaWJyYXRpb25TdGF0dXNdID0gdXNlU3RhdGUoZ3JhcGhDb25maWcuYWxsb3dDYWxpYnJhdGlvbi50b1N0cmluZygpKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdyYXBoID0gQ2FyYm9uLmFwaS5ncmFwaChncmFwaENvbmZpZyk7XG4gICAgZ3JhcGgubG9hZENvbnRlbnQoQ2FyYm9uLmFwaS5saW5lKGRhdGFzZXQxKSk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVDbGlja1RvZ2dsZUNhbGlicmF0aW9uID0gKCkgPT4ge1xuICAgIGdyYXBoLmNvbmZpZy5hbGxvd0NhbGlicmF0aW9uID0gIWdyYXBoLmNvbmZpZy5hbGxvd0NhbGlicmF0aW9uO1xuICAgIFNldEFsbG93Q2FsaWJyYXRpb25TdGF0dXMoZ3JhcGguY29uZmlnLmFsbG93Q2FsaWJyYXRpb24udG9TdHJpbmcoKSk7XG5cbiAgICBncmFwaC5yZWZsb3dNdWx0aXBsZURhdGFzZXRzKCk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tVcGRhdGVEYXRhID0gKCkgPT4ge1xuICAgIC8vICAgIGdyYXBoLmNvbmZpZy5heGlzLnkuZG9tYWluLmxvd2VyTGltaXQgPSAwO1xuICAgIC8vICAgIGdyYXBoLmNvbmZpZy5heGlzLnkuZG9tYWluLnVwcGVyTGltaXQgPSAyMDtcblxuICAgIGdyYXBoLnJlZmxvd011bHRpcGxlRGF0YXNldHMoe1xuICAgICAgcGFuRGF0YTogW3VwZGF0ZWREYXRhc2V0MV0sXG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2xpY2tSZXNldCA9ICgpID0+IHtcbiAgICBncmFwaC51bmxvYWRDb250ZW50KENhcmJvbi5hcGkubGluZShkYXRhc2V0MSkpO1xuICAgIGdyYXBoLmxvYWRDb250ZW50KENhcmJvbi5hcGkubGluZShkYXRhc2V0MSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCdXR0b24gdGV4dD1cIlRvZ2dsZSBDYWxpYnJhdGlvblwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrVG9nZ2xlQ2FsaWJyYXRpb259IC8+XG4gICAgICA8QnV0dG9uIHRleHQ9XCJVcGRhdGUgRGF0YVwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrVXBkYXRlRGF0YX0gLz5cbiAgICAgIDxCdXR0b24gdGV4dD1cIlJlc2V0XCIgb25DbGljaz17aGFuZGxlQ2xpY2tSZXNldH0gLz5cbiAgICAgIDxkaXY+XG4gICAgICAgIEFsbG93Q2FsaWJyYXRpb246XG4gICAgICAgIHthbGxvd0NhbGlicmF0aW9uU3RhdHVzfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiZHluYW1pYy1kYXRhLXVwZGF0ZS1leGFtcGxlXCIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IER5bmFtaWNhbGx5VXBkYXRpbmdEYXRhRXhhbXBsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQnV0dG9uIiwiQ2FyYm9uIiwiZ3JhcGhDb25maWciLCJiaW5kVG8iLCJheGlzIiwieCIsImxhYmVsIiwibG93ZXJMaW1pdCIsInVwcGVyTGltaXQiLCJyYW5nZVJvdW5kaW5nIiwieSIsImFsbG93Q2FsaWJyYXRpb24iLCJkYXRhc2V0MSIsImtleSIsImRpc3BsYXkiLCJjb2xvciIsImhlbHBlcnMiLCJDT0xPUlMiLCJQSU5LIiwidmFsdWVzIiwidXBkYXRlZERhdGFzZXQxIiwiZ3JhcGgiLCJEeW5hbWljYWxseVVwZGF0aW5nRGF0YUV4YW1wbGUiLCJfdXNlU3RhdGUiLCJ0b1N0cmluZyIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImFsbG93Q2FsaWJyYXRpb25TdGF0dXMiLCJTZXRBbGxvd0NhbGlicmF0aW9uU3RhdHVzIiwidXNlRWZmZWN0IiwiYXBpIiwibG9hZENvbnRlbnQiLCJsaW5lIiwiaGFuZGxlQ2xpY2tUb2dnbGVDYWxpYnJhdGlvbiIsImNvbmZpZyIsInJlZmxvd011bHRpcGxlRGF0YXNldHMiLCJoYW5kbGVDbGlja1VwZGF0ZURhdGEiLCJwYW5EYXRhIiwiaGFuZGxlQ2xpY2tSZXNldCIsInVubG9hZENvbnRlbnQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJ0ZXh0Iiwib25DbGljayIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConcepts.b/examples/reflow/DynamicallyUpdatingData.jsx\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/test/general/reflow/DynamicallyUpdatingData.test.jsx":
/*!************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/test/general/reflow/DynamicallyUpdatingData.test.jsx ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _graph_CoreConcepts_b_examples_reflow_DynamicallyUpdatingData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../graph/CoreConcepts.b/examples/reflow/DynamicallyUpdatingData */ \"./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConcepts.b/examples/reflow/DynamicallyUpdatingData.jsx\");\n\n\nvar DynamicallyUpdatingDataTest = function DynamicallyUpdatingDataTest() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_graph_CoreConcepts_b_examples_reflow_DynamicallyUpdatingData__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (DynamicallyUpdatingDataTest);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9nZW5lcmFsL3JlZmxvdy9EeW5hbWljYWxseVVwZGF0aW5nRGF0YS50ZXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7QUFBMEI7QUFDeUY7QUFFbkgsSUFBTUUsMkJBQTJCLEdBQUcsU0FBOUJBLDJCQUEyQkEsQ0FBQTtFQUFBLG9CQUFTRixnREFBQSxDQUFDQyxxR0FBOEIsTUFBRSxDQUFDO0FBQUE7QUFFNUUsK0RBQWVDLDJCQUEyQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy90ZXJyYS1kZXYtc2l0ZS90ZXN0L2dlbmVyYWwvcmVmbG93L0R5bmFtaWNhbGx5VXBkYXRpbmdEYXRhLnRlc3QuanN4P2U4ZWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEeW5hbWljYWxseVVwZGF0aW5nRGF0YUV4YW1wbGUgZnJvbSAnLi4vLi4vLi4vZ3JhcGgvQ29yZUNvbmNlcHRzLmIvZXhhbXBsZXMvcmVmbG93L0R5bmFtaWNhbGx5VXBkYXRpbmdEYXRhJztcblxuY29uc3QgRHluYW1pY2FsbHlVcGRhdGluZ0RhdGFUZXN0ID0gKCkgPT4gPER5bmFtaWNhbGx5VXBkYXRpbmdEYXRhRXhhbXBsZSAvPjtcblxuZXhwb3J0IGRlZmF1bHQgRHluYW1pY2FsbHlVcGRhdGluZ0RhdGFUZXN0O1xuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJEeW5hbWljYWxseVVwZGF0aW5nRGF0YUV4YW1wbGUiLCJEeW5hbWljYWxseVVwZGF0aW5nRGF0YVRlc3QiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/test/general/reflow/DynamicallyUpdatingData.test.jsx\n");

/***/ })

}]);