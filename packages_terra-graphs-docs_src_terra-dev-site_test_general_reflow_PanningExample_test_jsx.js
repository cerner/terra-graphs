"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkterra_graphs"] = self["webpackChunkterra_graphs"] || []).push([["packages_terra-graphs-docs_src_terra-dev-site_test_general_reflow_PanningExample_test_jsx"],{

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConcepts.b/examples/reflow/PanningExample.jsx":
/*!***************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConcepts.b/examples/reflow/PanningExample.jsx ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var terra_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! terra-button */ \"./node_modules/terra-button/lib/Button.js\");\n/* harmony import */ var terra_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! terra-icon */ \"./node_modules/terra-icon/lib/index.js\");\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n\n\n\n\n\n\n//  graph configuration object\n\nvar graphConfig = {\n  bindTo: '#panning-example',\n  axis: {\n    x: {\n      label: 'x-axis',\n      lowerLimit: 80,\n      upperLimit: 280,\n      rangeRounding: false\n    },\n    y: {\n      label: 'y-axis',\n      lowerLimit: -5,\n      upperLimit: 20\n    }\n  },\n  panning: {\n    enabled: true\n  }\n};\n\n//  graph dataset\n\nvar dataset1 = {\n  key: 'uid_1',\n  label: {\n    display: 'Dataset 1'\n  },\n  color: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].helpers.COLORS.BLACK,\n  values: [{\n    x: 87,\n    y: -2\n  }, {\n    x: 95,\n    y: 1\n  }, {\n    x: 103,\n    y: -4\n  }, {\n    x: 109,\n    y: -2\n  }, {\n    x: 128,\n    y: 3\n  }, {\n    x: 145,\n    y: 28\n  }, {\n    x: 151,\n    y: 7\n  }, {\n    x: 164,\n    y: 10\n  }, {\n    x: 177,\n    y: 1\n  }, {\n    x: 192,\n    y: 6\n  }, {\n    x: 203,\n    y: -21\n  }, {\n    x: 209,\n    y: -3\n  }, {\n    x: 246,\n    y: 3\n  }]\n};\n\n// graph rendering\nvar graph;\nvar panningFactor = 10;\nvar PanningExample = function PanningExample() {\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {\n    graph = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].api.graph(graphConfig);\n    graph.loadContent(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_4__[\"default\"].api.line(dataset1));\n  }, []);\n  var reducer = function reducer(panState, action) {\n    var newLowerLimit = graph.config.axis.x.lowerLimit;\n    var newUpperLimit = graph.config.axis.x.upperLimit;\n    switch (action.type) {\n      case 'panLeft':\n        newLowerLimit = graph.config.axis.x.lowerLimit - panningFactor;\n        newUpperLimit = graph.config.axis.x.upperLimit - panningFactor;\n        break;\n      case 'panRight':\n        newLowerLimit = graph.config.axis.x.lowerLimit + panningFactor;\n        newUpperLimit = graph.config.axis.x.upperLimit + panningFactor;\n        break;\n      default:\n        return {\n          newLowerLimit: newLowerLimit,\n          newUpperLimit: newUpperLimit\n        };\n    }\n    return {\n      newLowerLimit: newLowerLimit,\n      newUpperLimit: newUpperLimit\n    };\n  };\n  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_1__.useReducer(reducer, panningFactor),\n    _React$useReducer2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useReducer, 2),\n    panState = _React$useReducer2[0],\n    dispatch = _React$useReducer2[1];\n  react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect(function () {\n    if (!graph) {\n      return;\n    }\n    graph.config.axis.x.lowerLimit = panState.newLowerLimit;\n    graph.config.axis.x.upperLimit = panState.newUpperLimit;\n    graph.reflowMultipleDatasets();\n  }, [panState]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(terra_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(terra_icon__WEBPACK_IMPORTED_MODULE_3__.IconLeft, null),\n    text: \"pan left\",\n    isIconOnly: true,\n    onClick: function onClick() {\n      return dispatch({\n        type: 'panLeft'\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(terra_button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(terra_icon__WEBPACK_IMPORTED_MODULE_3__.IconRight, null),\n    text: \"pan right\",\n    isIconOnly: true,\n    onClick: function onClick() {\n      return dispatch({\n        type: 'panRight'\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: \"panning-example\"\n  }));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PanningExample);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvZ3JhcGgvQ29yZUNvbmNlcHRzLmIvZXhhbXBsZXMvcmVmbG93L1Bhbm5pbmdFeGFtcGxlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBRVE7QUFDZTtBQUVOOztBQUUzQzs7QUFFQSxJQUFNSyxXQUFXLEdBQUc7RUFDbEJDLE1BQU0sRUFBRSxrQkFBa0I7RUFDMUJDLElBQUksRUFBRTtJQUNKQyxDQUFDLEVBQUU7TUFDREMsS0FBSyxFQUFFLFFBQVE7TUFDZkMsVUFBVSxFQUFFLEVBQUU7TUFDZEMsVUFBVSxFQUFFLEdBQUc7TUFDZkMsYUFBYSxFQUFFO0lBQ2pCLENBQUM7SUFDREMsQ0FBQyxFQUFFO01BQ0RKLEtBQUssRUFBRSxRQUFRO01BQ2ZDLFVBQVUsRUFBRSxDQUFDLENBQUM7TUFDZEMsVUFBVSxFQUFFO0lBQ2Q7RUFDRixDQUFDO0VBQ0RHLE9BQU8sRUFBRTtJQUNQQyxPQUFPLEVBQUU7RUFDWDtBQUNGLENBQUM7O0FBRUQ7O0FBRUEsSUFBTUMsUUFBUSxHQUFHO0VBQ2ZDLEdBQUcsRUFBRSxPQUFPO0VBQ1pSLEtBQUssRUFBRTtJQUNMUyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RDLEtBQUssRUFBRWYsNkRBQU0sQ0FBQ2dCLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO0VBQ2xDQyxNQUFNLEVBQUUsQ0FDTjtJQUFFZixDQUFDLEVBQUUsRUFBRTtJQUFFSyxDQUFDLEVBQUUsQ0FBQztFQUFFLENBQUMsRUFDaEI7SUFBRUwsQ0FBQyxFQUFFLEVBQUU7SUFBRUssQ0FBQyxFQUFFO0VBQUUsQ0FBQyxFQUNmO0lBQUVMLENBQUMsRUFBRSxHQUFHO0lBQUVLLENBQUMsRUFBRSxDQUFDO0VBQUUsQ0FBQyxFQUNqQjtJQUFFTCxDQUFDLEVBQUUsR0FBRztJQUFFSyxDQUFDLEVBQUUsQ0FBQztFQUFFLENBQUMsRUFDakI7SUFBRUwsQ0FBQyxFQUFFLEdBQUc7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LENBQUM1QixJQUFJLENBQUNDLENBQUMsQ0FBQ0csVUFBVSxHQUFHcUIsUUFBUSxDQUFDSSxhQUFhO0lBRXZEWixLQUFLLENBQUNvQixzQkFBc0IsQ0FBQyxDQUFDO0VBQ2hDLENBQUMsRUFBRSxDQUFDWixRQUFRLENBQUMsQ0FBQztFQUVkLG9CQUNFaEMsZ0RBQUEsQ0FBQUEsMkNBQUEscUJBQ0VBLGdEQUFBLENBQUNDLG9EQUFNO0lBQUM4QyxJQUFJLGVBQUUvQyxnREFBQSxDQUFDRSxnREFBUSxNQUFFLENBQUU7SUFBQzhDLElBQUksRUFBQyxVQUFVO0lBQUNDLFVBQVU7SUFBQ0MsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNUixRQUFRLENBQUM7UUFBRUwsSUFBSSxFQUFFO01BQVUsQ0FBQyxDQUFDO0lBQUE7RUFBQyxDQUFFLENBQUMsZUFDdkdyQyxnREFBQSxDQUFDQyxvREFBTTtJQUFDOEMsSUFBSSxlQUFFL0MsZ0RBQUEsQ0FBQ0csaURBQVMsTUFBRSxDQUFFO0lBQUM2QyxJQUFJLEVBQUMsV0FBVztJQUFDQyxVQUFVO0lBQUNDLE9BQU8sRUFBRSxTQUFBQSxRQUFBO01BQUEsT0FBTVIsUUFBUSxDQUFDO1FBQUVMLElBQUksRUFBRTtNQUFXLENBQUMsQ0FBQztJQUFBO0VBQUMsQ0FBRSxDQUFDLGVBQzFHckMsZ0RBQUE7SUFBS21ELEVBQUUsRUFBQztFQUFpQixDQUFFLENBQzNCLENBQUM7QUFFUCxDQUFDO0FBRUQsK0RBQWV6QixjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVycmEtZ3JhcGhzLy4vcGFja2FnZXMvdGVycmEtZ3JhcGhzLWRvY3Mvc3JjL3RlcnJhLWRldi1zaXRlL2dyYXBoL0NvcmVDb25jZXB0cy5iL2V4YW1wbGVzL3JlZmxvdy9QYW5uaW5nRXhhbXBsZS5qc3g/NGM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ3RlcnJhLWJ1dHRvbic7XG5pbXBvcnQgeyBJY29uTGVmdCwgSWNvblJpZ2h0IH0gZnJvbSAndGVycmEtaWNvbic7XG5cbmltcG9ydCBDYXJib24gZnJvbSAnQGNlcm5lci9jYXJib24tZ3JhcGhzJztcblxuLy8gIGdyYXBoIGNvbmZpZ3VyYXRpb24gb2JqZWN0XG5cbmNvbnN0IGdyYXBoQ29uZmlnID0ge1xuICBiaW5kVG86ICcjcGFubmluZy1leGFtcGxlJyxcbiAgYXhpczoge1xuICAgIHg6IHtcbiAgICAgIGxhYmVsOiAneC1heGlzJyxcbiAgICAgIGxvd2VyTGltaXQ6IDgwLFxuICAgICAgdXBwZXJMaW1pdDogMjgwLFxuICAgICAgcmFuZ2VSb3VuZGluZzogZmFsc2UsXG4gICAgfSxcbiAgICB5OiB7XG4gICAgICBsYWJlbDogJ3ktYXhpcycsXG4gICAgICBsb3dlckxpbWl0OiAtNSxcbiAgICAgIHVwcGVyTGltaXQ6IDIwLFxuICAgIH0sXG4gIH0sXG4gIHBhbm5pbmc6IHtcbiAgICBlbmFibGVkOiB0cnVlLFxuICB9LFxufTtcblxuLy8gIGdyYXBoIGRhdGFzZXRcblxuY29uc3QgZGF0YXNldDEgPSB7XG4gIGtleTogJ3VpZF8xJyxcbiAgbGFiZWw6IHtcbiAgICBkaXNwbGF5OiAnRGF0YXNldCAxJyxcbiAgfSxcbiAgY29sb3I6IENhcmJvbi5oZWxwZXJzLkNPTE9SUy5CTEFDSyxcbiAgdmFsdWVzOiBbXG4gICAgeyB4OiA4NywgeTogLTIgfSxcbiAgICB7IHg6IDk1LCB5OiAxIH0sXG4gICAgeyB4OiAxMDMsIHk6IC00IH0sXG4gICAgeyB4OiAxMDksIHk6IC0yIH0sXG4gICAgeyB4OiAxMjgsIHk6IDMgfSxcbiAgICB7IHg6IDE0NSwgeTogMjggfSxcbiAgICB7IHg6IDE1MSwgeTogNyB9LFxuICAgIHsgeDogMTY0LCB5OiAxMCB9LFxuICAgIHsgeDogMTc3LCB5OiAxIH0sXG4gICAgeyB4OiAxOTIsIHk6IDYgfSxcbiAgICB7IHg6IDIwMywgeTogLTIxIH0sXG4gICAgeyB4OiAyMDksIHk6IC0zIH0sXG4gICAgeyB4OiAyNDYsIHk6IDMgfSxcbiAgXSxcbn07XG5cbi8vIGdyYXBoIHJlbmRlcmluZ1xubGV0IGdyYXBoO1xuY29uc3QgcGFubmluZ0ZhY3RvciA9IDEwO1xuXG5jb25zdCBQYW5uaW5nRXhhbXBsZSA9ICgpID0+IHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBncmFwaCA9IENhcmJvbi5hcGkuZ3JhcGgoZ3JhcGhDb25maWcpO1xuICAgIGdyYXBoLmxvYWRDb250ZW50KENhcmJvbi5hcGkubGluZShkYXRhc2V0MSkpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgcmVkdWNlciA9IChwYW5TdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgbGV0IG5ld0xvd2VyTGltaXQgPSBncmFwaC5jb25maWcuYXhpcy54Lmxvd2VyTGltaXQ7XG4gICAgbGV0IG5ld1VwcGVyTGltaXQgPSBncmFwaC5jb25maWcuYXhpcy54LnVwcGVyTGltaXQ7XG5cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdwYW5MZWZ0JzpcbiAgICAgICAgbmV3TG93ZXJMaW1pdCA9IGdyYXBoLmNvbmZpZy5heGlzLngubG93ZXJMaW1pdCAtIHBhbm5pbmdGYWN0b3I7XG4gICAgICAgIG5ld1VwcGVyTGltaXQgPSBncmFwaC5jb25maWcuYXhpcy54LnVwcGVyTGltaXQgLSBwYW5uaW5nRmFjdG9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BhblJpZ2h0JzpcbiAgICAgICAgbmV3TG93ZXJMaW1pdCA9IGdyYXBoLmNvbmZpZy5heGlzLngubG93ZXJMaW1pdCArIHBhbm5pbmdGYWN0b3I7XG4gICAgICAgIG5ld1VwcGVyTGltaXQgPSBncmFwaC5jb25maWcuYXhpcy54LnVwcGVyTGltaXQgKyBwYW5uaW5nRmFjdG9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbmV3TG93ZXJMaW1pdCxcbiAgICAgICAgICBuZXdVcHBlckxpbWl0LFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBuZXdMb3dlckxpbWl0LFxuICAgICAgbmV3VXBwZXJMaW1pdCxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IFtwYW5TdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihyZWR1Y2VyLCBwYW5uaW5nRmFjdG9yKTtcblxuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZ3JhcGgpIHsgcmV0dXJuOyB9XG5cbiAgICBncmFwaC5jb25maWcuYXhpcy54Lmxvd2VyTGltaXQgPSBwYW5TdGF0ZS5uZXdMb3dlckxpbWl0O1xuICAgIGdyYXBoLmNvbmZpZy5heGlzLngudXBwZXJMaW1pdCA9IHBhblN0YXRlLm5ld1VwcGVyTGltaXQ7XG5cbiAgICBncmFwaC5yZWZsb3dNdWx0aXBsZURhdGFzZXRzKCk7XG4gIH0sIFtwYW5TdGF0ZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCdXR0b24gaWNvbj17PEljb25MZWZ0IC8+fSB0ZXh0PVwicGFuIGxlZnRcIiBpc0ljb25Pbmx5IG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3BhbkxlZnQnIH0pfSAvPlxuICAgICAgPEJ1dHRvbiBpY29uPXs8SWNvblJpZ2h0IC8+fSB0ZXh0PVwicGFuIHJpZ2h0XCIgaXNJY29uT25seSBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdwYW5SaWdodCcgfSl9IC8+XG4gICAgICA8ZGl2IGlkPVwicGFubmluZy1leGFtcGxlXCIgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhbm5pbmdFeGFtcGxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQnV0dG9uIiwiSWNvbkxlZnQiLCJJY29uUmlnaHQiLCJDYXJib24iLCJncmFwaENvbmZpZyIsImJpbmRUbyIsImF4aXMiLCJ4IiwibGFiZWwiLCJsb3dlckxpbWl0IiwidXBwZXJMaW1pdCIsInJhbmdlUm91bmRpbmciLCJ5IiwicGFubmluZyIsImVuYWJsZWQiLCJkYXRhc2V0MSIsImtleSIsImRpc3BsYXkiLCJjb2xvciIsImhlbHBlcnMiLCJDT0xPUlMiLCJCTEFDSyIsInZhbHVlcyIsImdyYXBoIiwicGFubmluZ0ZhY3RvciIsIlBhbm5pbmdFeGFtcGxlIiwidXNlRWZmZWN0IiwiYXBpIiwibG9hZENvbnRlbnQiLCJsaW5lIiwicmVkdWNlciIsInBhblN0YXRlIiwiYWN0aW9uIiwibmV3TG93ZXJMaW1pdCIsImNvbmZpZyIsIm5ld1VwcGVyTGltaXQiLCJ0eXBlIiwiX1JlYWN0JHVzZVJlZHVjZXIiLCJ1c2VSZWR1Y2VyIiwiX1JlYWN0JHVzZVJlZHVjZXIyIiwiX3NsaWNlZFRvQXJyYXkiLCJkaXNwYXRjaCIsInVzZUxheW91dEVmZmVjdCIsInJlZmxvd011bHRpcGxlRGF0YXNldHMiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJpY29uIiwidGV4dCIsImlzSWNvbk9ubHkiLCJvbkNsaWNrIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConcepts.b/examples/reflow/PanningExample.jsx\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/test/general/reflow/PanningExample.test.jsx":
/*!***************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/test/general/reflow/PanningExample.test.jsx ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _graph_CoreConcepts_b_examples_reflow_PanningExample__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../graph/CoreConcepts.b/examples/reflow/PanningExample */ \"./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConcepts.b/examples/reflow/PanningExample.jsx\");\n\n\nvar PanningTest = function PanningTest() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_graph_CoreConcepts_b_examples_reflow_PanningExample__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PanningTest);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9nZW5lcmFsL3JlZmxvdy9QYW5uaW5nRXhhbXBsZS50ZXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7QUFBMEI7QUFDZ0U7QUFFMUYsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUE7RUFBQSxvQkFBU0YsZ0RBQUEsQ0FBQ0MsNEZBQWMsTUFBRSxDQUFDO0FBQUE7QUFFNUMsK0RBQWVDLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9nZW5lcmFsL3JlZmxvdy9QYW5uaW5nRXhhbXBsZS50ZXN0LmpzeD8wMTJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFubmluZ0V4YW1wbGUgZnJvbSAnLi4vLi4vLi4vZ3JhcGgvQ29yZUNvbmNlcHRzLmIvZXhhbXBsZXMvcmVmbG93L1Bhbm5pbmdFeGFtcGxlJztcblxuY29uc3QgUGFubmluZ1Rlc3QgPSAoKSA9PiA8UGFubmluZ0V4YW1wbGUgLz47XG5cbmV4cG9ydCBkZWZhdWx0IFBhbm5pbmdUZXN0O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUGFubmluZ0V4YW1wbGUiLCJQYW5uaW5nVGVzdCIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/test/general/reflow/PanningExample.test.jsx\n");

/***/ })

}]);