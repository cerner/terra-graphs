"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkterra_graphs"] = self["webpackChunkterra_graphs"] || []).push([["packages_terra-graphs-docs_src_terra-dev-site_test_graphs_General_AllowCalibration_test_jsx"],{

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConfiguration.b/examples/AllowCalibrationDisabled.jsx":
/*!***********************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConfiguration.b/examples/AllowCalibrationDisabled.jsx ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n\n\n\n//  graph configuration object\n\nvar graphConfig = {\n  bindTo: '#allow-calibration-disabled-example',\n  axis: {\n    x: {\n      label: 'x-axis',\n      lowerLimit: 80,\n      upperLimit: 280\n    },\n    y: {\n      label: 'y-axis',\n      lowerLimit: -5,\n      upperLimit: 20\n    }\n  },\n  allowCalibration: false\n};\n\n//  graph dataset\n\nvar dataset1 = {\n  key: 'uid_1',\n  label: {\n    display: 'Data Label 1'\n  },\n  color: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.COLORS.BLACK,\n  values: [{\n    x: 87,\n    y: -2\n  }, {\n    x: 95,\n    y: 1\n  }, {\n    x: 103,\n    y: -4\n  }, {\n    x: 109,\n    y: -2\n  }, {\n    x: 128,\n    y: 3\n  }, {\n    x: 145,\n    y: 28\n  }, {\n    x: 151,\n    y: 7\n  }, {\n    x: 164,\n    y: 10\n  }, {\n    x: 177,\n    y: 1\n  }, {\n    x: 192,\n    y: 6\n  }, {\n    x: 203,\n    y: -21\n  }, {\n    x: 209,\n    y: -3\n  }, {\n    x: 246,\n    y: 3\n  }]\n};\n\n// graph rendering\n\nvar AllowCalibrationDisabledExample = function AllowCalibrationDisabledExample() {\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {\n    var graph = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.graph(graphConfig);\n    graph.loadContent(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.line(dataset1));\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"allow-calibration-disabled-example\"\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllowCalibrationDisabledExample);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvZ3JhcGgvQ29yZUNvbmZpZ3VyYXRpb24uYi9leGFtcGxlcy9BbGxvd0NhbGlicmF0aW9uRGlzYWJsZWQuanN4IiwibWFwcGluZ3MiOiI7OztBQUEwQjtBQUNpQjs7QUFFM0M7O0FBRUEsSUFBTUUsV0FBVyxHQUFHO0VBQ2xCQyxNQUFNLEVBQUUscUNBQXFDO0VBQzdDQyxJQUFJLEVBQUU7SUFDSkMsQ0FBQyxFQUFFO01BQ0RDLEtBQUssRUFBRSxRQUFRO01BQ2ZDLFVBQVUsRUFBRSxFQUFFO01BQ2RDLFVBQVUsRUFBRTtJQUNkLENBQUM7SUFDREMsQ0FBQyxFQUFFO01BQ0RILEtBQUssRUFBRSxRQUFRO01BQ2ZDLFVBQVUsRUFBRSxDQUFDLENBQUM7TUFDZEMsVUFBVSxFQUFFO0lBQ2Q7RUFDRixDQUFDO0VBQ0RFLGdCQUFnQixFQUFFO0FBQ3BCLENBQUM7O0FBRUQ7O0FBRUEsSUFBTUMsUUFBUSxHQUFHO0VBQ2ZDLEdBQUcsRUFBRSxPQUFPO0VBQ1pOLEtBQUssRUFBRTtJQUNMTyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RDLEtBQUssRUFBRWIsNkRBQU0sQ0FBQ2MsT0FBTyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7RUFDbENDLE1BQU0sRUFBRSxDQUNOO0lBQUViLENBQUMsRUFBRSxFQUFFO0lBQUVJLENBQUMsRUFBRSxDQUFDO0VBQUUsQ0FBQyxFQUNoQjtJQUFFSixDQUFDLEVBQUUsRUFBRTtJQUFFSSxDQUFDLEVBQUU7RUFBRSxDQUFDLEVBQ2Y7SUFBRUosQ0FBQyxFQUFFLEdBQUc7SUFBRUksQ0FBQyxFQUFFLENBQUM7RUFBRSxDQUFDLEVBQ2pCO0lBQUVKLENBQUMsRUFBRSxHQUFHO0lBQUVJLENBQUMsRUFBRSxDQUFDO0VBQUUsQ0FBQyxFQUNqQjtJQUFFSixDQUFDLEVBQUUsR0FBRztJQUFFSSxDQUFDLEVBQUU7RUFBRSxDQUFDLEVBQ2hCO0lBQUVKLENBQUMsRUFBRSxHQUFHO0lBQUVJLENBQUMsRUFBRTtFQUFHLENBQUMsRUFDakI7SUFBRUosQ0FBQyxFQUFFLEdBQUc7SUFBRUksQ0FBQyxFQUFFO0VBQUUsQ0FBQyxFQUNoQjtJQUFFSixDQUFDLEVBQUUsR0FBRztJQUFFSSxDQUFDLEVBQUU7RUFBRyxDQUFDLEVBQ2pCO0lBQUVKLENBQUMsRUFBRSxHQUFHO0lBQUVJLENBQUMsRUFBRTtFQUFFLENBQUMsRUFDaEI7SUFBRUosQ0FBQyxFQUFFLEdBQUc7SUFBRUksQ0FBQyxFQUFFO0VBQUUsQ0FBQyxFQUNoQjtJQUFFSixDQUFDLEVBQUUsR0FBRztJQUFFSSxDQUFDLEVBQUUsQ0FBQztFQUFHLENBQUMsRUFDbEI7SUFBRUosQ0FBQyxFQUFFLEdBQUc7SUFBRUksQ0FBQyxFQUFFLENBQUM7RUFBRSxDQUFDLEVBQ2pCO0lBQUVKLENBQUMsRUFBRSxHQUFHO0lBQUVJLENBQUMsRUFBRTtFQUFFLENBQUM7QUFFcEIsQ0FBQzs7QUFFRDs7QUFFQSxJQUFNVSwrQkFBK0IsR0FBRyxTQUFsQ0EsK0JBQStCQSxDQUFBLEVBQVM7RUFDNUNuQiw0Q0FBZSxDQUFDLFlBQU07SUFDcEIsSUFBTXFCLEtBQUssR0FBR3BCLDZEQUFNLENBQUNxQixHQUFHLENBQUNELEtBQUssQ0FBQ25CLFdBQVcsQ0FBQztJQUMzQ21CLEtBQUssQ0FBQ0UsV0FBVyxDQUFDdEIsNkRBQU0sQ0FBQ3FCLEdBQUcsQ0FBQ0UsSUFBSSxDQUFDYixRQUFRLENBQUMsQ0FBQztFQUM5QyxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBQ04sb0JBQU9YLGdEQUFBO0lBQUswQixFQUFFLEVBQUM7RUFBb0MsQ0FBRSxDQUFDO0FBQ3hELENBQUM7QUFFRCwrREFBZVAsK0JBQStCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVycmEtZ3JhcGhzLy4vcGFja2FnZXMvdGVycmEtZ3JhcGhzLWRvY3Mvc3JjL3RlcnJhLWRldi1zaXRlL2dyYXBoL0NvcmVDb25maWd1cmF0aW9uLmIvZXhhbXBsZXMvQWxsb3dDYWxpYnJhdGlvbkRpc2FibGVkLmpzeD8xM2JlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FyYm9uIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocyc7XG5cbi8vICBncmFwaCBjb25maWd1cmF0aW9uIG9iamVjdFxuXG5jb25zdCBncmFwaENvbmZpZyA9IHtcbiAgYmluZFRvOiAnI2FsbG93LWNhbGlicmF0aW9uLWRpc2FibGVkLWV4YW1wbGUnLFxuICBheGlzOiB7XG4gICAgeDoge1xuICAgICAgbGFiZWw6ICd4LWF4aXMnLFxuICAgICAgbG93ZXJMaW1pdDogODAsXG4gICAgICB1cHBlckxpbWl0OiAyODAsXG4gICAgfSxcbiAgICB5OiB7XG4gICAgICBsYWJlbDogJ3ktYXhpcycsXG4gICAgICBsb3dlckxpbWl0OiAtNSxcbiAgICAgIHVwcGVyTGltaXQ6IDIwLFxuICAgIH0sXG4gIH0sXG4gIGFsbG93Q2FsaWJyYXRpb246IGZhbHNlLFxufTtcblxuLy8gIGdyYXBoIGRhdGFzZXRcblxuY29uc3QgZGF0YXNldDEgPSB7XG4gIGtleTogJ3VpZF8xJyxcbiAgbGFiZWw6IHtcbiAgICBkaXNwbGF5OiAnRGF0YSBMYWJlbCAxJyxcbiAgfSxcbiAgY29sb3I6IENhcmJvbi5oZWxwZXJzLkNPTE9SUy5CTEFDSyxcbiAgdmFsdWVzOiBbXG4gICAgeyB4OiA4NywgeTogLTIgfSxcbiAgICB7IHg6IDk1LCB5OiAxIH0sXG4gICAgeyB4OiAxMDMsIHk6IC00IH0sXG4gICAgeyB4OiAxMDksIHk6IC0yIH0sXG4gICAgeyB4OiAxMjgsIHk6IDMgfSxcbiAgICB7IHg6IDE0NSwgeTogMjggfSxcbiAgICB7IHg6IDE1MSwgeTogNyB9LFxuICAgIHsgeDogMTY0LCB5OiAxMCB9LFxuICAgIHsgeDogMTc3LCB5OiAxIH0sXG4gICAgeyB4OiAxOTIsIHk6IDYgfSxcbiAgICB7IHg6IDIwMywgeTogLTIxIH0sXG4gICAgeyB4OiAyMDksIHk6IC0zIH0sXG4gICAgeyB4OiAyNDYsIHk6IDMgfSxcbiAgXSxcbn07XG5cbi8vIGdyYXBoIHJlbmRlcmluZ1xuXG5jb25zdCBBbGxvd0NhbGlicmF0aW9uRGlzYWJsZWRFeGFtcGxlID0gKCkgPT4ge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdyYXBoID0gQ2FyYm9uLmFwaS5ncmFwaChncmFwaENvbmZpZyk7XG4gICAgZ3JhcGgubG9hZENvbnRlbnQoQ2FyYm9uLmFwaS5saW5lKGRhdGFzZXQxKSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIDxkaXYgaWQ9XCJhbGxvdy1jYWxpYnJhdGlvbi1kaXNhYmxlZC1leGFtcGxlXCIgLz47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGxvd0NhbGlicmF0aW9uRGlzYWJsZWRFeGFtcGxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyYm9uIiwiZ3JhcGhDb25maWciLCJiaW5kVG8iLCJheGlzIiwieCIsImxhYmVsIiwibG93ZXJMaW1pdCIsInVwcGVyTGltaXQiLCJ5IiwiYWxsb3dDYWxpYnJhdGlvbiIsImRhdGFzZXQxIiwia2V5IiwiZGlzcGxheSIsImNvbG9yIiwiaGVscGVycyIsIkNPTE9SUyIsIkJMQUNLIiwidmFsdWVzIiwiQWxsb3dDYWxpYnJhdGlvbkRpc2FibGVkRXhhbXBsZSIsInVzZUVmZmVjdCIsImdyYXBoIiwiYXBpIiwibG9hZENvbnRlbnQiLCJsaW5lIiwiY3JlYXRlRWxlbWVudCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConfiguration.b/examples/AllowCalibrationDisabled.jsx\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConfiguration.b/examples/AllowCalibrationEnabled.jsx":
/*!**********************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConfiguration.b/examples/AllowCalibrationEnabled.jsx ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n\n\n\n//  graph configuration objects\n\nvar graphConfig1 = {\n  bindTo: '#allow-calibration-enabled-example',\n  axis: {\n    x: {\n      show: true,\n      label: 'x-axis',\n      lowerLimit: 80,\n      upperLimit: 280\n    },\n    y: {\n      show: true,\n      label: 'y-axis',\n      lowerLimit: -5,\n      upperLimit: 20\n    }\n  }\n  // allowCalibration is true by default\n  // allowCalibration: true,\n};\nvar graphConfig2 = {\n  bindTo: '#allow-calibration-enabled-example2',\n  axis: {\n    x: {\n      label: 'x-axis',\n      lowerLimit: 80,\n      upperLimit: 130\n    },\n    y: {\n      label: 'y-axis',\n      lowerLimit: -5,\n      upperLimit: 20\n    }\n  }\n  // allowCalibration is true by default\n  // allowCalibration: true,\n};\n\n//  graph dataset\n\nvar dataset1 = {\n  key: 'uid_1',\n  label: {\n    display: 'Data Label 1'\n  },\n  color: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.COLORS.BLACK,\n  values: [{\n    x: 87,\n    y: -2\n  }, {\n    x: 95,\n    y: 1\n  }, {\n    x: 103,\n    y: -4\n  }, {\n    x: 109,\n    y: -2\n  }, {\n    x: 128,\n    y: 3\n  }, {\n    x: 145,\n    y: 28\n  }, {\n    x: 151,\n    y: 7\n  }, {\n    x: 164,\n    y: 10\n  }, {\n    x: 177,\n    y: 1\n  }, {\n    x: 192,\n    y: 6\n  }, {\n    x: 203,\n    y: -21\n  }, {\n    x: 209,\n    y: -3\n  }, {\n    x: 246,\n    y: 3\n  }]\n};\n\n// graph rendering\n\nvar AllowCalibrationEnabledExample = function AllowCalibrationEnabledExample() {\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {\n    var graph1 = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.graph(graphConfig1);\n    graph1.loadContent(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.line(dataset1));\n    var graph2 = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.graph(graphConfig2);\n    graph2.loadContent(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.line(dataset1));\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"allow-calibration-enabled-example\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"allow-calibration-enabled-example2\"\n  }));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (AllowCalibrationEnabledExample);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvZ3JhcGgvQ29yZUNvbmZpZ3VyYXRpb24uYi9leGFtcGxlcy9BbGxvd0NhbGlicmF0aW9uRW5hYmxlZC5qc3giLCJtYXBwaW5ncyI6Ijs7O0FBQTBCO0FBQ2lCOztBQUUzQzs7QUFFQSxJQUFNRSxZQUFZLEdBQUc7RUFDbkJDLE1BQU0sRUFBRSxvQ0FBb0M7RUFDNUNDLElBQUksRUFBRTtJQUNKQyxDQUFDLEVBQUU7TUFDREMsSUFBSSxFQUFFLElBQUk7TUFDVkMsS0FBSyxFQUFFLFFBQVE7TUFDZkMsVUFBVSxFQUFFLEVBQUU7TUFDZEMsVUFBVSxFQUFFO0lBQ2QsQ0FBQztJQUNEQyxDQUFDLEVBQUU7TUFDREosSUFBSSxFQUFFLElBQUk7TUFDVkMsS0FBSyxFQUFFLFFBQVE7TUFDZkMsVUFBVSxFQUFFLENBQUMsQ0FBQztNQUNkQyxVQUFVLEVBQUU7SUFDZDtFQUNGO0VBQ0E7RUFDQTtBQUNGLENBQUM7QUFFRCxJQUFNRSxZQUFZLEdBQUc7RUFDbkJSLE1BQU0sRUFBRSxxQ0FBcUM7RUFDN0NDLElBQUksRUFBRTtJQUNKQyxDQUFDLEVBQUU7TUFDREUsS0FBSyxFQUFFLFFBQVE7TUFDZkMsVUFBVSxFQUFFLEVBQUU7TUFDZEMsVUFBVSxFQUFFO0lBQ2QsQ0FBQztJQUNEQyxDQUFDLEVBQUU7TUFDREgsS0FBSyxFQUFFLFFBQVE7TUFDZkMsVUFBVSxFQUFFLENBQUMsQ0FBQztNQUNkQyxVQUFVLEVBQUU7SUFDZDtFQUNGO0VBQ0E7RUFDQTtBQUNGLENBQUM7O0FBRUQ7O0FBRUEsSUFBTUcsUUFBUSxHQUFHO0VBQ2ZDLEdBQUcsRUFBRSxPQUFPO0VBQ1pOLEtBQUssRUFBRTtJQUNMTyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RDLEtBQUssRUFBRWQsNkRBQU0sQ0FBQ2UsT0FBTyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7RUFDbENDLE1BQU0sRUFBRSxDQUNOO0lBQUVkLENBQUMsRUFBRSxFQUFFO0lBQUVLLENBQUMsRUFBRSxDQUFDO0VBQUUsQ0FBQyxFQUNoQjtJQUFFTCxDQUFDLEVBQUUsRUFBRTtJQUFFSyxDQUFDLEVBQUU7RUFBRSxDQUFDLEVBQ2Y7SUFBRUwsQ0FBQyxFQUFFLEdBQUc7SUFBRUssQ0FBQyxFQUFFLENBQUM7RUFBRSxDQUFDLEVBQ2pCO0lBQUVMLENBQUMsRUFBRSxHQUFHO0lBQUVLLENBQUMsRUFBRSxDQUFDO0VBQUUsQ0FBQyxFQUNqQjtJQUFFTCxDQUFDLEVBQUUsR0FBRztJQUFFSyxDQUFDLEVBQUU7RUFBRSxDQUFDLEVBQ2hCO0lBQUVMLENBQUMsRUFBRSxHQUFHO0lBQUVLLENBQUMsRUFBRTtFQUFHLENBQUMsRUFDakI7SUFBRUwsQ0FBQyxFQUFFLEdBQUc7SUFBRUssQ0FBQyxFQUFFO0VBQUUsQ0FBQyxFQUNoQjtJQUFFTCxDQUFDLEVBQUUsR0FBRztJQUFFSyxDQUFDLEVBQUU7RUFBRyxDQUFDLEVBQ2pCO0lBQUVMLENBQUMsRUFBRSxHQUFHO0lBQUVLLENBQUMsRUFBRTtFQUFFLENBQUMsRUFDaEI7SUFBRUwsQ0FBQyxFQUFFLEdBQUc7SUFBRUssQ0FBQyxFQUFFO0VBQUUsQ0FBQyxFQUNoQjtJQUFFTCxDQUFDLEVBQUUsR0FBRztJQUFFSyxDQUFDLEVBQUUsQ0FBQztFQUFHLENBQUMsRUFDbEI7SUFBRUwsQ0FBQyxFQUFFLEdBQUc7SUFBRUssQ0FBQyxFQUFFLENBQUM7RUFBRSxDQUFDLEVBQ2pCO0lBQUVMLENBQUMsRUFBRSxHQUFHO0lBQUVLLENBQUMsRUFBRTtFQUFFLENBQUM7QUFFcEIsQ0FBQzs7QUFFRDs7QUFFQSxJQUFNVSw4QkFBOEIsR0FBRyxTQUFqQ0EsOEJBQThCQSxDQUFBLEVBQVM7RUFDM0NwQiw0Q0FBZSxDQUFDLFlBQU07SUFDcEIsSUFBTXNCLE1BQU0sR0FBR3JCLDZEQUFNLENBQUNzQixHQUFHLENBQUNDLEtBQUssQ0FBQ3RCLFlBQVksQ0FBQztJQUM3Q29CLE1BQU0sQ0FBQ0csV0FBVyxDQUFDeEIsNkRBQU0sQ0FBQ3NCLEdBQUcsQ0FBQ0csSUFBSSxDQUFDZCxRQUFRLENBQUMsQ0FBQztJQUU3QyxJQUFNZSxNQUFNLEdBQUcxQiw2REFBTSxDQUFDc0IsR0FBRyxDQUFDQyxLQUFLLENBQUNiLFlBQVksQ0FBQztJQUM3Q2dCLE1BQU0sQ0FBQ0YsV0FBVyxDQUFDeEIsNkRBQU0sQ0FBQ3NCLEdBQUcsQ0FBQ0csSUFBSSxDQUFDZCxRQUFRLENBQUMsQ0FBQztFQUMvQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0VaLGdEQUFBLENBQUFBLDJDQUFBLHFCQUNFQSxnREFBQTtJQUFLOEIsRUFBRSxFQUFDO0VBQW1DLENBQUUsQ0FBQyxlQUM5QzlCLGdEQUFBO0lBQUs4QixFQUFFLEVBQUM7RUFBb0MsQ0FBRSxDQUM5QyxDQUFDO0FBRVAsQ0FBQztBQUVELCtEQUFlViw4QkFBOEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvZ3JhcGgvQ29yZUNvbmZpZ3VyYXRpb24uYi9leGFtcGxlcy9BbGxvd0NhbGlicmF0aW9uRW5hYmxlZC5qc3g/MDllZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcmJvbiBmcm9tICdAY2VybmVyL2NhcmJvbi1ncmFwaHMnO1xuXG4vLyAgZ3JhcGggY29uZmlndXJhdGlvbiBvYmplY3RzXG5cbmNvbnN0IGdyYXBoQ29uZmlnMSA9IHtcbiAgYmluZFRvOiAnI2FsbG93LWNhbGlicmF0aW9uLWVuYWJsZWQtZXhhbXBsZScsXG4gIGF4aXM6IHtcbiAgICB4OiB7XG4gICAgICBzaG93OiB0cnVlLFxuICAgICAgbGFiZWw6ICd4LWF4aXMnLFxuICAgICAgbG93ZXJMaW1pdDogODAsXG4gICAgICB1cHBlckxpbWl0OiAyODAsXG4gICAgfSxcbiAgICB5OiB7XG4gICAgICBzaG93OiB0cnVlLFxuICAgICAgbGFiZWw6ICd5LWF4aXMnLFxuICAgICAgbG93ZXJMaW1pdDogLTUsXG4gICAgICB1cHBlckxpbWl0OiAyMCxcbiAgICB9LFxuICB9LFxuICAvLyBhbGxvd0NhbGlicmF0aW9uIGlzIHRydWUgYnkgZGVmYXVsdFxuICAvLyBhbGxvd0NhbGlicmF0aW9uOiB0cnVlLFxufTtcblxuY29uc3QgZ3JhcGhDb25maWcyID0ge1xuICBiaW5kVG86ICcjYWxsb3ctY2FsaWJyYXRpb24tZW5hYmxlZC1leGFtcGxlMicsXG4gIGF4aXM6IHtcbiAgICB4OiB7XG4gICAgICBsYWJlbDogJ3gtYXhpcycsXG4gICAgICBsb3dlckxpbWl0OiA4MCxcbiAgICAgIHVwcGVyTGltaXQ6IDEzMCxcbiAgICB9LFxuICAgIHk6IHtcbiAgICAgIGxhYmVsOiAneS1heGlzJyxcbiAgICAgIGxvd2VyTGltaXQ6IC01LFxuICAgICAgdXBwZXJMaW1pdDogMjAsXG4gICAgfSxcbiAgfSxcbiAgLy8gYWxsb3dDYWxpYnJhdGlvbiBpcyB0cnVlIGJ5IGRlZmF1bHRcbiAgLy8gYWxsb3dDYWxpYnJhdGlvbjogdHJ1ZSxcbn07XG5cbi8vICBncmFwaCBkYXRhc2V0XG5cbmNvbnN0IGRhdGFzZXQxID0ge1xuICBrZXk6ICd1aWRfMScsXG4gIGxhYmVsOiB7XG4gICAgZGlzcGxheTogJ0RhdGEgTGFiZWwgMScsXG4gIH0sXG4gIGNvbG9yOiBDYXJib24uaGVscGVycy5DT0xPUlMuQkxBQ0ssXG4gIHZhbHVlczogW1xuICAgIHsgeDogODcsIHk6IC0yIH0sXG4gICAgeyB4OiA5NSwgeTogMSB9LFxuICAgIHsgeDogMTAzLCB5OiAtNCB9LFxuICAgIHsgeDogMTA5LCB5OiAtMiB9LFxuICAgIHsgeDogMTI4LCB5OiAzIH0sXG4gICAgeyB4OiAxNDUsIHk6IDI4IH0sXG4gICAgeyB4OiAxNTEsIHk6IDcgfSxcbiAgICB7IHg6IDE2NCwgeTogMTAgfSxcbiAgICB7IHg6IDE3NywgeTogMSB9LFxuICAgIHsgeDogMTkyLCB5OiA2IH0sXG4gICAgeyB4OiAyMDMsIHk6IC0yMSB9LFxuICAgIHsgeDogMjA5LCB5OiAtMyB9LFxuICAgIHsgeDogMjQ2LCB5OiAzIH0sXG4gIF0sXG59O1xuXG4vLyBncmFwaCByZW5kZXJpbmdcblxuY29uc3QgQWxsb3dDYWxpYnJhdGlvbkVuYWJsZWRFeGFtcGxlID0gKCkgPT4ge1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGdyYXBoMSA9IENhcmJvbi5hcGkuZ3JhcGgoZ3JhcGhDb25maWcxKTtcbiAgICBncmFwaDEubG9hZENvbnRlbnQoQ2FyYm9uLmFwaS5saW5lKGRhdGFzZXQxKSk7XG5cbiAgICBjb25zdCBncmFwaDIgPSBDYXJib24uYXBpLmdyYXBoKGdyYXBoQ29uZmlnMik7XG4gICAgZ3JhcGgyLmxvYWRDb250ZW50KENhcmJvbi5hcGkubGluZShkYXRhc2V0MSkpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBpZD1cImFsbG93LWNhbGlicmF0aW9uLWVuYWJsZWQtZXhhbXBsZVwiIC8+XG4gICAgICA8ZGl2IGlkPVwiYWxsb3ctY2FsaWJyYXRpb24tZW5hYmxlZC1leGFtcGxlMlwiIC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGxvd0NhbGlicmF0aW9uRW5hYmxlZEV4YW1wbGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJib24iLCJncmFwaENvbmZpZzEiLCJiaW5kVG8iLCJheGlzIiwieCIsInNob3ciLCJsYWJlbCIsImxvd2VyTGltaXQiLCJ1cHBlckxpbWl0IiwieSIsImdyYXBoQ29uZmlnMiIsImRhdGFzZXQxIiwia2V5IiwiZGlzcGxheSIsImNvbG9yIiwiaGVscGVycyIsIkNPTE9SUyIsIkJMQUNLIiwidmFsdWVzIiwiQWxsb3dDYWxpYnJhdGlvbkVuYWJsZWRFeGFtcGxlIiwidXNlRWZmZWN0IiwiZ3JhcGgxIiwiYXBpIiwiZ3JhcGgiLCJsb2FkQ29udGVudCIsImxpbmUiLCJncmFwaDIiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConfiguration.b/examples/AllowCalibrationEnabled.jsx\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/General/AllowCalibration.test.jsx":
/*!*****************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/General/AllowCalibration.test.jsx ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _graph_CoreConfiguration_b_examples_AllowCalibrationDisabled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../graph/CoreConfiguration.b/examples/AllowCalibrationDisabled */ \"./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConfiguration.b/examples/AllowCalibrationDisabled.jsx\");\n/* harmony import */ var _graph_CoreConfiguration_b_examples_AllowCalibrationEnabled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../graph/CoreConfiguration.b/examples/AllowCalibrationEnabled */ \"./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConfiguration.b/examples/AllowCalibrationEnabled.jsx\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"allow-calibration-examples\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"allowCalibration Disabled\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_graph_CoreConfiguration_b_examples_AllowCalibrationDisabled__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h3\", null, \"allowCalibration Enabled\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_graph_CoreConfiguration_b_examples_AllowCalibrationEnabled__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9ncmFwaHMvR2VuZXJhbC9BbGxvd0NhbGlicmF0aW9uLnRlc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7QUFBMEI7QUFDa0Y7QUFDRjtBQUUxRywrREFBZTtFQUFBLG9CQUNiQSxnREFBQTtJQUFLSSxFQUFFLEVBQUM7RUFBNEIsZ0JBQ2xDSixnREFBQSxhQUFJLDJCQUE2QixDQUFDLGVBQ2xDQSxnREFBQSxDQUFDQyxvR0FBd0IsTUFBRSxDQUFDLGVBRTVCRCxnREFBQSxhQUFJLDBCQUE0QixDQUFDLGVBQ2pDQSxnREFBQSxDQUFDRSxtR0FBdUIsTUFBRSxDQUN2QixDQUFDO0FBQUEsQ0FDUCIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy90ZXJyYS1kZXYtc2l0ZS90ZXN0L2dyYXBocy9HZW5lcmFsL0FsbG93Q2FsaWJyYXRpb24udGVzdC5qc3g/ZTA3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFsbG93Q2FsaWJyYXRpb25EaXNhYmxlZCBmcm9tICcuLi8uLi8uLi9ncmFwaC9Db3JlQ29uZmlndXJhdGlvbi5iL2V4YW1wbGVzL0FsbG93Q2FsaWJyYXRpb25EaXNhYmxlZCc7XG5pbXBvcnQgQWxsb3dDYWxpYnJhdGlvbkVuYWJsZWQgZnJvbSAnLi4vLi4vLi4vZ3JhcGgvQ29yZUNvbmZpZ3VyYXRpb24uYi9leGFtcGxlcy9BbGxvd0NhbGlicmF0aW9uRW5hYmxlZCc7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdiBpZD1cImFsbG93LWNhbGlicmF0aW9uLWV4YW1wbGVzXCI+XG4gICAgPGgzPmFsbG93Q2FsaWJyYXRpb24gRGlzYWJsZWQ8L2gzPlxuICAgIDxBbGxvd0NhbGlicmF0aW9uRGlzYWJsZWQgLz5cblxuICAgIDxoMz5hbGxvd0NhbGlicmF0aW9uIEVuYWJsZWQ8L2gzPlxuICAgIDxBbGxvd0NhbGlicmF0aW9uRW5hYmxlZCAvPlxuICA8L2Rpdj5cbik7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBbGxvd0NhbGlicmF0aW9uRGlzYWJsZWQiLCJBbGxvd0NhbGlicmF0aW9uRW5hYmxlZCIsImNyZWF0ZUVsZW1lbnQiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/General/AllowCalibration.test.jsx\n");

/***/ })

}]);