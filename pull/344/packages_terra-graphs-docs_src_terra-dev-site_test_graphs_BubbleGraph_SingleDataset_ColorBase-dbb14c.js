"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkterra_graphs"] = self["webpackChunkterra_graphs"] || []).push([["packages_terra-graphs-docs_src_terra-dev-site_test_graphs_BubbleGraph_SingleDataset_ColorBase-dbb14c"],{

/***/ "./packages/terra-graphs-docs/src/terra-graphs-src/components/Graph.module.scss":
/*!**************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-graphs-src/components/Graph.module.scss ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL0dyYXBoLm1vZHVsZS5zY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy90ZXJyYS1ncmFwaHMtc3JjL2NvbXBvbmVudHMvR3JhcGgubW9kdWxlLnNjc3M/Mjk0YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-graphs-src/components/Graph.module.scss\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataColorBased.js":
/*!****************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataColorBased.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/popup.js */ \"./packages/terra-graphs-docs/src/example-datasets/popup.js\");\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n\n\nvar bubbleDataColorWeightBased = {\n  key: 'bubble_color_dataset',\n  label: {\n    display: 'Amount'\n  },\n  palette: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.BUBBLE.PALETTE.GREEN,\n  onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup_js__WEBPACK_IMPORTED_MODULE_0__.loadBubblePopup,\n  values: [{\n    x: new Date(2016, 0, 1, 11, 0).toISOString(),\n    y: 60\n  }, {\n    x: new Date(2016, 0, 1, 9, 0).toISOString(),\n    y: 75\n  }, {\n    x: new Date(2016, 0, 1, 19, 30).toISOString(),\n    y: 165\n  }, {\n    x: new Date(2016, 0, 1, 15, 0).toISOString(),\n    y: 120\n  }],\n  yAxis: 'y'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (bubbleDataColorWeightBased);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9CdWJibGUvYnViYmxlRGF0YUNvbG9yQmFzZWQuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTBGO0FBQy9DO0FBRTNDLElBQU1FLDBCQUEwQixHQUFHO0VBQ2pDQyxHQUFHLEVBQUUsc0JBQXNCO0VBQzNCQyxLQUFLLEVBQUU7SUFDTEMsT0FBTyxFQUFFO0VBQ1gsQ0FBQztFQUNEQyxPQUFPLEVBQUVMLDZEQUFNLENBQUNNLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxPQUFPLENBQUNDLEtBQUs7RUFDNUNDLE9BQU8sRUFBRVgsb0dBQWU7RUFDeEJZLE1BQU0sRUFBRSxDQUNOO0lBQ0VDLENBQUMsRUFBRSxJQUFJQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUM1Q0MsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxFQUNEO0lBQ0VILENBQUMsRUFBRSxJQUFJQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUMzQ0MsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxFQUNEO0lBQ0VILENBQUMsRUFBRSxJQUFJQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUM3Q0MsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxFQUNEO0lBQ0VILENBQUMsRUFBRSxJQUFJQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUM1Q0MsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxDQUNGO0VBQ0RDLEtBQUssRUFBRTtBQUNULENBQUM7QUFFRCwrREFBZWYsMEJBQTBCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVycmEtZ3JhcGhzLy4vcGFja2FnZXMvdGVycmEtZ3JhcGhzLWRvY3Mvc3JjL2V4YW1wbGUtZGF0YXNldHMvZGF0YU9iamVjdHMvQnViYmxlL2J1YmJsZURhdGFDb2xvckJhc2VkLmpzPzk3M2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZEJ1YmJsZVBvcHVwIH0gZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvZXhhbXBsZS1kYXRhc2V0cy9wb3B1cC5qcyc7XG5pbXBvcnQgQ2FyYm9uIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocyc7XG5cbmNvbnN0IGJ1YmJsZURhdGFDb2xvcldlaWdodEJhc2VkID0ge1xuICBrZXk6ICdidWJibGVfY29sb3JfZGF0YXNldCcsXG4gIGxhYmVsOiB7XG4gICAgZGlzcGxheTogJ0Ftb3VudCcsXG4gIH0sXG4gIHBhbGV0dGU6IENhcmJvbi5oZWxwZXJzLkJVQkJMRS5QQUxFVFRFLkdSRUVOLFxuICBvbkNsaWNrOiBsb2FkQnViYmxlUG9wdXAsXG4gIHZhbHVlczogW1xuICAgIHtcbiAgICAgIHg6IG5ldyBEYXRlKDIwMTYsIDAsIDEsIDExLCAwKS50b0lTT1N0cmluZygpLFxuICAgICAgeTogNjAsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAwLCAxLCA5LCAwKS50b0lTT1N0cmluZygpLFxuICAgICAgeTogNzUsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAwLCAxLCAxOSwgMzApLnRvSVNPU3RyaW5nKCksXG4gICAgICB5OiAxNjUsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAwLCAxLCAxNSwgMCkudG9JU09TdHJpbmcoKSxcbiAgICAgIHk6IDEyMCxcbiAgICB9LFxuICBdLFxuICB5QXhpczogJ3knLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYnViYmxlRGF0YUNvbG9yV2VpZ2h0QmFzZWQ7XG4iXSwibmFtZXMiOlsibG9hZEJ1YmJsZVBvcHVwIiwiQ2FyYm9uIiwiYnViYmxlRGF0YUNvbG9yV2VpZ2h0QmFzZWQiLCJrZXkiLCJsYWJlbCIsImRpc3BsYXkiLCJwYWxldHRlIiwiaGVscGVycyIsIkJVQkJMRSIsIlBBTEVUVEUiLCJHUkVFTiIsIm9uQ2xpY2siLCJ2YWx1ZXMiLCJ4IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwieSIsInlBeGlzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataColorBased.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/BubbleGraph/SingleDataset/ColorBasedGraph.test.jsx":
/*!**********************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/BubbleGraph/SingleDataset/ColorBasedGraph.test.jsx ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/helpers/utils */ \"./packages/carbon-graphs/src/js/helpers/utils.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_graphs_src_components_Bubble_BubbleSingleDataset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bubble/BubbleSingleDataset */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Bubble/BubbleSingleDataset.jsx\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_dev_site_ExampleGraphContainer_ExampleGraphContainer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss */ \"./packages/terra-graphs-docs/src/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Bubble_simpleAxisData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simpleAxisData */ \"./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Bubble/simpleAxisData.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Bubble_bubbleDataColorBased_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataColorBased.js */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataColorBased.js\");\n\n\n\n\n\n\nvar graphConfig = _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone((0,_cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Bubble_simpleAxisData__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('#colorBasedBubbleGraph'));\nvar dataset = [_cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Bubble_bubbleDataColorBased_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"tooltip\",\n    className: \"initial-tooltip\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_cerner_terra_graphs_docs_lib_terra_graphs_src_components_Bubble_BubbleSingleDataset__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    graphID: \"colorBasedBubbleGraph\",\n    graphConfig: graphConfig,\n    dataset: dataset\n  }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9ncmFwaHMvQnViYmxlR3JhcGgvU2luZ2xlRGF0YXNldC9Db2xvckJhc2VkR3JhcGgudGVzdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUEwQjtBQUNxQztBQUN3RDtBQUNUO0FBQ1U7QUFDSztBQUU3SCxJQUFNSyxXQUFXLEdBQUdKLGtGQUFLLENBQUNLLFNBQVMsQ0FBQ0gsbUlBQWlCLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUNoRixJQUFNSSxPQUFPLEdBQUcsQ0FBQ04sa0ZBQUssQ0FBQ0ssU0FBUyxDQUFDRixpSUFBb0IsQ0FBQyxDQUFDO0FBRXZELCtEQUFlO0VBQUEsb0JBQ2JKLGdEQUFBLENBQUFBLDJDQUFBLHFCQUNFQSxnREFBQTtJQUFLVSxFQUFFLEVBQUMsU0FBUztJQUFDQyxTQUFTLEVBQUM7RUFBaUIsQ0FBRSxDQUFDLGVBQ2hEWCxnREFBQSxDQUFDRSw0SEFBbUI7SUFBQ1UsT0FBTyxFQUFDLHVCQUF1QjtJQUFDUCxXQUFXLEVBQUVBLFdBQVk7SUFBQ0UsT0FBTyxFQUFFQTtFQUFRLENBQUUsQ0FDbEcsQ0FBQztBQUFBLENBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9ncmFwaHMvQnViYmxlR3JhcGgvU2luZ2xlRGF0YXNldC9Db2xvckJhc2VkR3JhcGgudGVzdC5qc3g/YTkyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocy9saWIvanMvaGVscGVycy91dGlscyc7XG5pbXBvcnQgQnViYmxlU2luZ2xlRGF0YXNldCBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi90ZXJyYS1ncmFwaHMtc3JjL2NvbXBvbmVudHMvQnViYmxlL0J1YmJsZVNpbmdsZURhdGFzZXQnO1xuaW1wb3J0ICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi90ZXJyYS1kZXYtc2l0ZS9FeGFtcGxlR3JhcGhDb250YWluZXIvRXhhbXBsZUdyYXBoQ29udGFpbmVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBnZXRTaW1wbGVBeGlzRGF0YSBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL2dyYXBoQ29uZmlnT2JqZWN0cy9CdWJibGUvc2ltcGxlQXhpc0RhdGEnO1xuaW1wb3J0IGJ1YmJsZURhdGFDb2xvckJhc2VkIGZyb20gJ0BjZXJuZXIvdGVycmEtZ3JhcGhzLWRvY3MvbGliL2V4YW1wbGUtZGF0YXNldHMvZGF0YU9iamVjdHMvQnViYmxlL2J1YmJsZURhdGFDb2xvckJhc2VkLmpzJztcblxuY29uc3QgZ3JhcGhDb25maWcgPSB1dGlscy5kZWVwQ2xvbmUoZ2V0U2ltcGxlQXhpc0RhdGEoJyNjb2xvckJhc2VkQnViYmxlR3JhcGgnKSk7XG5jb25zdCBkYXRhc2V0ID0gW3V0aWxzLmRlZXBDbG9uZShidWJibGVEYXRhQ29sb3JCYXNlZCldO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXG4gIDw+XG4gICAgPGRpdiBpZD1cInRvb2x0aXBcIiBjbGFzc05hbWU9XCJpbml0aWFsLXRvb2x0aXBcIiAvPlxuICAgIDxCdWJibGVTaW5nbGVEYXRhc2V0IGdyYXBoSUQ9XCJjb2xvckJhc2VkQnViYmxlR3JhcGhcIiBncmFwaENvbmZpZz17Z3JhcGhDb25maWd9IGRhdGFzZXQ9e2RhdGFzZXR9IC8+XG4gIDwvPlxuKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInV0aWxzIiwiQnViYmxlU2luZ2xlRGF0YXNldCIsImdldFNpbXBsZUF4aXNEYXRhIiwiYnViYmxlRGF0YUNvbG9yQmFzZWQiLCJncmFwaENvbmZpZyIsImRlZXBDbG9uZSIsImRhdGFzZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJpZCIsImNsYXNzTmFtZSIsImdyYXBoSUQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/BubbleGraph/SingleDataset/ColorBasedGraph.test.jsx\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-graphs-src/components/Bubble/BubbleSingleDataset.jsx":
/*!***************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-graphs-src/components/Bubble/BubbleSingleDataset.jsx ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n/* harmony import */ var _Graph_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Graph.module.scss */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Graph.module.scss\");\n/* harmony import */ var _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/helpers/utils */ \"./packages/carbon-graphs/src/js/helpers/utils.js\");\n\n\n\n\n\n\nvar propTypes = {\n  /**\n   * The unique identifier for the graph and prefix for the canvas.\n   */\n  graphID: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired,\n  /**\n   * Graph configuration object.\n   */\n  graphConfig: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object).isRequired,\n  /**\n   * Data to be displayed in graph.\n   */\n  dataset: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)),\n  /**\n   * Timeout to display multiple data contents in specific time interval.\n   */\n  timeout: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().number))\n};\nvar BubbleSingleDataset = function BubbleSingleDataset(_ref) {\n  var graphConfig = _ref.graphConfig,\n    dataset = _ref.dataset,\n    graphID = _ref.graphID,\n    timeout = _ref.timeout;\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(),\n    _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n    graph = _React$useState2[0],\n    setGraph = _React$useState2[1];\n  var graphLoadedRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n  var skipreflowRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n\n  // creation of canvas\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {\n    if (!graph) {\n      setGraph(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].api.graph(graphConfig));\n    }\n  }, [graph, graphConfig]);\n\n  // initial dataset load\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {\n    if (!graph || graphLoadedRef.current) {\n      return undefined;\n    }\n    var timeoutIds = [];\n    if (dataset) {\n      if (timeout) {\n        dataset.forEach(function (data, index) {\n          var timeoutId = setTimeout(function () {\n            return graph.graphContainer ? graph.loadContent(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].api.bubbleSingleDataset(data)) : '';\n          }, timeout[index]);\n          timeoutIds.push(timeoutId);\n        });\n      } else {\n        dataset.forEach(function (data) {\n          graph.loadContent(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].api.bubbleSingleDataset(data));\n        });\n      }\n    }\n    graphLoadedRef.current = true;\n    return function () {\n      timeoutIds.forEach(function (id) {\n        clearTimeout(id);\n      });\n    };\n  }, [graph, dataset, timeout]);\n\n  // panning\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {\n    if (!graph) {\n      return;\n    }\n    if (!skipreflowRef.current) {\n      skipreflowRef.current = true;\n      return;\n    }\n    graph.config.axis.x.upperLimit = graphConfig.axis.x.upperLimit;\n    graph.config.axis.x.lowerLimit = graphConfig.axis.x.lowerLimit;\n    var newDataset = {\n      panData: _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].deepClone(dataset.panData),\n      eventline: _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].deepClone(dataset.eventline)\n    };\n    graph.reflowMultipleDatasets(newDataset);\n  }, [graph, dataset, graphConfig]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: \"\".concat(graphID, \"-canvasContainer\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: graphID\n  }));\n};\nBubbleSingleDataset.propTypes = propTypes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BubbleSingleDataset);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL0J1YmJsZS9CdWJibGVTaW5nbGVEYXRhc2V0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDUztBQUNRO0FBQ2I7QUFDaUM7QUFFL0QsSUFBTUksU0FBUyxHQUFHO0VBQ2hCO0FBQ0Y7QUFDQTtFQUNFQyxPQUFPLEVBQUVKLDBEQUFnQixDQUFDTSxVQUFVO0VBQ3BDO0FBQ0Y7QUFDQTtFQUNFQyxXQUFXLEVBQUVQLDBEQUFnQixDQUFDTSxVQUFVO0VBQ3hDO0FBQ0Y7QUFDQTtFQUNFRyxPQUFPLEVBQUVULHlEQUFpQixDQUFDQSwwREFBZ0IsQ0FBQztFQUM1QztBQUNGO0FBQ0E7RUFDRVcsT0FBTyxFQUFFWCx5REFBaUIsQ0FBQ0EsMERBQWdCO0FBQzdDLENBQUM7QUFFRCxJQUFNYSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQW1CQSxDQUFBQyxJQUFBLEVBRW5CO0VBQUEsSUFESlAsV0FBVyxHQUFBTyxJQUFBLENBQVhQLFdBQVc7SUFBRUUsT0FBTyxHQUFBSyxJQUFBLENBQVBMLE9BQU87SUFBRUwsT0FBTyxHQUFBVSxJQUFBLENBQVBWLE9BQU87SUFBRU8sT0FBTyxHQUFBRyxJQUFBLENBQVBILE9BQU87RUFFdEMsSUFBQUksZUFBQSxHQUEwQmhCLDJDQUFjLENBQUMsQ0FBQztJQUFBa0IsZ0JBQUEsR0FBQUMsZ0ZBQUEsQ0FBQUgsZUFBQTtJQUFuQ0ksS0FBSyxHQUFBRixnQkFBQTtJQUFFRyxRQUFRLEdBQUFILGdCQUFBO0VBQ3RCLElBQU1JLGNBQWMsR0FBR3RCLHlDQUFZLENBQUMsQ0FBQztFQUNyQyxJQUFNd0IsYUFBYSxHQUFHeEIseUNBQVksQ0FBQyxDQUFDOztFQUVwQztFQUNBQSw0Q0FBZSxDQUFDLFlBQU07SUFDcEIsSUFBSSxDQUFDb0IsS0FBSyxFQUFFO01BQ1ZDLFFBQVEsQ0FBQ25CLDZEQUFNLENBQUN3QixHQUFHLENBQUNOLEtBQUssQ0FBQ1osV0FBVyxDQUFDLENBQUM7SUFDekM7RUFDRixDQUFDLEVBQUUsQ0FBQ1ksS0FBSyxFQUFFWixXQUFXLENBQUMsQ0FBQzs7RUFFeEI7RUFDQVIsNENBQWUsQ0FBQyxZQUFNO0lBQ3BCLElBQUksQ0FBQ29CLEtBQUssSUFBSUUsY0FBYyxDQUFDSyxPQUFPLEVBQUU7TUFDcEMsT0FBT0MsU0FBUztJQUNsQjtJQUNBLElBQU1DLFVBQVUsR0FBRyxFQUFFO0lBRXJCLElBQUluQixPQUFPLEVBQUU7TUFDWCxJQUFJRSxPQUFPLEVBQUU7UUFDWEYsT0FBTyxDQUFDb0IsT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFLO1VBQy9CLElBQU1DLFNBQVMsR0FBR0MsVUFBVSxDQUMxQjtZQUFBLE9BQU9kLEtBQUssQ0FBQ2UsY0FBYyxHQUN2QmYsS0FBSyxDQUFDZ0IsV0FBVyxDQUFDbEMsNkRBQU0sQ0FBQ3dCLEdBQUcsQ0FBQ1csbUJBQW1CLENBQUNOLElBQUksQ0FBQyxDQUFDLEdBQ3ZELEVBQUU7VUFBQSxDQUFDLEVBQ1BuQixPQUFPLENBQUNvQixLQUFLLENBQ2YsQ0FBQztVQUVESCxVQUFVLENBQUNTLElBQUksQ0FBQ0wsU0FBUyxDQUFDO1FBQzVCLENBQUMsQ0FBQztNQUNKLENBQUMsTUFBTTtRQUNMdkIsT0FBTyxDQUFDb0IsT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBSztVQUN4QlgsS0FBSyxDQUFDZ0IsV0FBVyxDQUFDbEMsNkRBQU0sQ0FBQ3dCLEdBQUcsQ0FBQ1csbUJBQW1CLENBQUNOLElBQUksQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQztNQUNKO0lBQ0Y7SUFDQVQsY0FBYyxDQUFDSyxPQUFPLEdBQUcsSUFBSTtJQUU3QixPQUFPLFlBQU07TUFDWEUsVUFBVSxDQUFDQyxPQUFPLENBQUMsVUFBQ1MsRUFBRSxFQUFLO1FBQUVDLFlBQVksQ0FBQ0QsRUFBRSxDQUFDO01BQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7RUFDSCxDQUFDLEVBQUUsQ0FBQ25CLEtBQUssRUFBRVYsT0FBTyxFQUFFRSxPQUFPLENBQUMsQ0FBQzs7RUFFN0I7RUFDQVosNENBQWUsQ0FBQyxZQUFNO0lBQ3BCLElBQUksQ0FBQ29CLEtBQUssRUFBRTtNQUNWO0lBQ0Y7SUFDQSxJQUFJLENBQUNJLGFBQWEsQ0FBQ0csT0FBTyxFQUFFO01BQzFCSCxhQUFhLENBQUNHLE9BQU8sR0FBRyxJQUFJO01BQzVCO0lBQ0Y7SUFFQVAsS0FBSyxDQUFDcUIsTUFBTSxDQUFDQyxJQUFJLENBQUNDLENBQUMsQ0FBQ0MsVUFBVSxHQUFHcEMsV0FBVyxDQUFDa0MsSUFBSSxDQUFDQyxDQUFDLENBQUNDLFVBQVU7SUFDOUR4QixLQUFLLENBQUNxQixNQUFNLENBQUNDLElBQUksQ0FBQ0MsQ0FBQyxDQUFDRSxVQUFVLEdBQUdyQyxXQUFXLENBQUNrQyxJQUFJLENBQUNDLENBQUMsQ0FBQ0UsVUFBVTtJQUU5RCxJQUFNQyxVQUFVLEdBQUc7TUFDakJDLE9BQU8sRUFBRTVDLGtGQUFLLENBQUM2QyxTQUFTLENBQUN0QyxPQUFPLENBQUNxQyxPQUFPLENBQUM7TUFDekNFLFNBQVMsRUFBRTlDLGtGQUFLLENBQUM2QyxTQUFTLENBQUN0QyxPQUFPLENBQUN1QyxTQUFTO0lBQzlDLENBQUM7SUFFRDdCLEtBQUssQ0FBQzhCLHNCQUFzQixDQUFDSixVQUFVLENBQUM7RUFDMUMsQ0FBQyxFQUFFLENBQUMxQixLQUFLLEVBQUVWLE9BQU8sRUFBRUYsV0FBVyxDQUFDLENBQUM7RUFFakMsb0JBQ0VSLGdEQUFBO0lBQUt1QyxFQUFFLEtBQUFhLE1BQUEsQ0FBSy9DLE9BQU87RUFBbUIsZ0JBQ3BDTCxnREFBQTtJQUFLdUMsRUFBRSxFQUFFbEM7RUFBUSxDQUFFLENBQ2hCLENBQUM7QUFFVixDQUFDO0FBRURTLG1CQUFtQixDQUFDVixTQUFTLEdBQUdBLFNBQVM7QUFFekMsK0RBQWVVLG1CQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy90ZXJyYS1ncmFwaHMtc3JjL2NvbXBvbmVudHMvQnViYmxlL0J1YmJsZVNpbmdsZURhdGFzZXQuanN4PzI1M2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ2FyYm9uIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocyc7XG5pbXBvcnQgJy4uL0dyYXBoLm1vZHVsZS5zY3NzJztcbmltcG9ydCB1dGlscyBmcm9tICdAY2VybmVyL2NhcmJvbi1ncmFwaHMvbGliL2pzL2hlbHBlcnMvdXRpbHMnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBncmFwaCBhbmQgcHJlZml4IGZvciB0aGUgY2FudmFzLlxuICAgKi9cbiAgZ3JhcGhJRDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogR3JhcGggY29uZmlndXJhdGlvbiBvYmplY3QuXG4gICAqL1xuICBncmFwaENvbmZpZzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogRGF0YSB0byBiZSBkaXNwbGF5ZWQgaW4gZ3JhcGguXG4gICAqL1xuICBkYXRhc2V0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgLyoqXG4gICAqIFRpbWVvdXQgdG8gZGlzcGxheSBtdWx0aXBsZSBkYXRhIGNvbnRlbnRzIGluIHNwZWNpZmljIHRpbWUgaW50ZXJ2YWwuXG4gICAqL1xuICB0aW1lb3V0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcbn07XG5cbmNvbnN0IEJ1YmJsZVNpbmdsZURhdGFzZXQgPSAoe1xuICBncmFwaENvbmZpZywgZGF0YXNldCwgZ3JhcGhJRCwgdGltZW91dCxcbn0pID0+IHtcbiAgY29uc3QgW2dyYXBoLCBzZXRHcmFwaF0gPSBSZWFjdC51c2VTdGF0ZSgpO1xuICBjb25zdCBncmFwaExvYWRlZFJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBjb25zdCBza2lwcmVmbG93UmVmID0gUmVhY3QudXNlUmVmKCk7XG5cbiAgLy8gY3JlYXRpb24gb2YgY2FudmFzXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFncmFwaCkge1xuICAgICAgc2V0R3JhcGgoQ2FyYm9uLmFwaS5ncmFwaChncmFwaENvbmZpZykpO1xuICAgIH1cbiAgfSwgW2dyYXBoLCBncmFwaENvbmZpZ10pO1xuXG4gIC8vIGluaXRpYWwgZGF0YXNldCBsb2FkXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFncmFwaCB8fCBncmFwaExvYWRlZFJlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCB0aW1lb3V0SWRzID0gW107XG5cbiAgICBpZiAoZGF0YXNldCkge1xuICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgZGF0YXNldC5mb3JFYWNoKChkYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAoKSA9PiAoZ3JhcGguZ3JhcGhDb250YWluZXJcbiAgICAgICAgICAgICAgPyBncmFwaC5sb2FkQ29udGVudChDYXJib24uYXBpLmJ1YmJsZVNpbmdsZURhdGFzZXQoZGF0YSkpXG4gICAgICAgICAgICAgIDogJycpLFxuICAgICAgICAgICAgdGltZW91dFtpbmRleF0sXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHRpbWVvdXRJZHMucHVzaCh0aW1lb3V0SWQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFzZXQuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICAgIGdyYXBoLmxvYWRDb250ZW50KENhcmJvbi5hcGkuYnViYmxlU2luZ2xlRGF0YXNldChkYXRhKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBncmFwaExvYWRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aW1lb3V0SWRzLmZvckVhY2goKGlkKSA9PiB7IGNsZWFyVGltZW91dChpZCk7IH0pO1xuICAgIH07XG4gIH0sIFtncmFwaCwgZGF0YXNldCwgdGltZW91dF0pO1xuXG4gIC8vIHBhbm5pbmdcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWdyYXBoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghc2tpcHJlZmxvd1JlZi5jdXJyZW50KSB7XG4gICAgICBza2lwcmVmbG93UmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGdyYXBoLmNvbmZpZy5heGlzLngudXBwZXJMaW1pdCA9IGdyYXBoQ29uZmlnLmF4aXMueC51cHBlckxpbWl0O1xuICAgIGdyYXBoLmNvbmZpZy5heGlzLngubG93ZXJMaW1pdCA9IGdyYXBoQ29uZmlnLmF4aXMueC5sb3dlckxpbWl0O1xuXG4gICAgY29uc3QgbmV3RGF0YXNldCA9IHtcbiAgICAgIHBhbkRhdGE6IHV0aWxzLmRlZXBDbG9uZShkYXRhc2V0LnBhbkRhdGEpLFxuICAgICAgZXZlbnRsaW5lOiB1dGlscy5kZWVwQ2xvbmUoZGF0YXNldC5ldmVudGxpbmUpLFxuICAgIH07XG5cbiAgICBncmFwaC5yZWZsb3dNdWx0aXBsZURhdGFzZXRzKG5ld0RhdGFzZXQpO1xuICB9LCBbZ3JhcGgsIGRhdGFzZXQsIGdyYXBoQ29uZmlnXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPXtgJHtncmFwaElEfS1jYW52YXNDb250YWluZXJgfT5cbiAgICAgIDxkaXYgaWQ9e2dyYXBoSUR9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5CdWJibGVTaW5nbGVEYXRhc2V0LnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuZXhwb3J0IGRlZmF1bHQgQnViYmxlU2luZ2xlRGF0YXNldDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkNhcmJvbiIsInV0aWxzIiwicHJvcFR5cGVzIiwiZ3JhcGhJRCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJncmFwaENvbmZpZyIsIm9iamVjdCIsImRhdGFzZXQiLCJhcnJheU9mIiwidGltZW91dCIsIm51bWJlciIsIkJ1YmJsZVNpbmdsZURhdGFzZXQiLCJfcmVmIiwiX1JlYWN0JHVzZVN0YXRlIiwidXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJncmFwaCIsInNldEdyYXBoIiwiZ3JhcGhMb2FkZWRSZWYiLCJ1c2VSZWYiLCJza2lwcmVmbG93UmVmIiwidXNlRWZmZWN0IiwiYXBpIiwiY3VycmVudCIsInVuZGVmaW5lZCIsInRpbWVvdXRJZHMiLCJmb3JFYWNoIiwiZGF0YSIsImluZGV4IiwidGltZW91dElkIiwic2V0VGltZW91dCIsImdyYXBoQ29udGFpbmVyIiwibG9hZENvbnRlbnQiLCJidWJibGVTaW5nbGVEYXRhc2V0IiwicHVzaCIsImlkIiwiY2xlYXJUaW1lb3V0IiwiY29uZmlnIiwiYXhpcyIsIngiLCJ1cHBlckxpbWl0IiwibG93ZXJMaW1pdCIsIm5ld0RhdGFzZXQiLCJwYW5EYXRhIiwiZGVlcENsb25lIiwiZXZlbnRsaW5lIiwicmVmbG93TXVsdGlwbGVEYXRhc2V0cyIsImNyZWF0ZUVsZW1lbnQiLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-graphs-src/components/Bubble/BubbleSingleDataset.jsx\n");

/***/ })

}]);