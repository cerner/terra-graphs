"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkterra_graphs"] = self["webpackChunkterra_graphs"] || []).push([["packages_terra-graphs-docs_src_terra-dev-site_test_graphs_BubbleGraph_Reflow_MultipleDatasets-50a047"],{

/***/ "./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataBasic.js":
/*!***********************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataBasic.js ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/popup.js */ \"./packages/terra-graphs-docs/src/example-datasets/popup.js\");\n/* harmony import */ var _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/carbon */ \"./packages/carbon-graphs/src/js/carbon.js\");\n\n\nvar bubbleDataBasic = {\n  key: 'bubble_basic_data',\n  label: {\n    display: 'Bubble set A'\n  },\n  onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup_js__WEBPACK_IMPORTED_MODULE_0__.loadBubblePopup,\n  color: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.COLORS.PINK,\n  values: [{\n    x: new Date(2016, 0, 1, 12, 0).toISOString(),\n    y: 70\n  }, {\n    x: new Date(2016, 0, 1, 15, 45).toISOString(),\n    y: 120\n  }, {\n    x: new Date(2016, 0, 1, 10, 30).toISOString(),\n    y: 160\n  }, {\n    x: new Date(2016, 0, 1, 18, 0).toISOString(),\n    y: 180\n  }],\n  yAxis: 'y',\n  showShapes: false\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (bubbleDataBasic);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9CdWJibGUvYnViYmxlRGF0YUJhc2ljLmpzIiwibWFwcGluZ3MiOiI7OztBQUEwRjtBQUNqQztBQUV6RCxJQUFNRSxlQUFlLEdBQUc7RUFDdEJDLEdBQUcsRUFBRSxtQkFBbUI7RUFDeEJDLEtBQUssRUFBRTtJQUNMQyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RDLE9BQU8sRUFBRU4sb0dBQWU7RUFDeEJPLEtBQUssRUFBRU4sMkVBQU0sQ0FBQ08sT0FBTyxDQUFDQyxNQUFNLENBQUNDLElBQUk7RUFDakNDLE1BQU0sRUFBRSxDQUNOO0lBQ0VDLENBQUMsRUFBRSxJQUFJQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUM1Q0MsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxFQUNEO0lBQ0VILENBQUMsRUFBRSxJQUFJQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUM3Q0MsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxFQUNEO0lBQ0VILENBQUMsRUFBRSxJQUFJQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUM3Q0MsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxFQUNEO0lBQ0VILENBQUMsRUFBRSxJQUFJQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUM1Q0MsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxDQUNGO0VBQ0RDLEtBQUssRUFBRSxHQUFHO0VBQ1ZDLFVBQVUsRUFBRTtBQUNkLENBQUM7QUFFRCwrREFBZWYsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy9leGFtcGxlLWRhdGFzZXRzL2RhdGFPYmplY3RzL0J1YmJsZS9idWJibGVEYXRhQmFzaWMuanM/YmM4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkQnViYmxlUG9wdXAgfSBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL3BvcHVwLmpzJztcbmltcG9ydCBDYXJib24gZnJvbSAnQGNlcm5lci9jYXJib24tZ3JhcGhzL2xpYi9qcy9jYXJib24nO1xuXG5jb25zdCBidWJibGVEYXRhQmFzaWMgPSB7XG4gIGtleTogJ2J1YmJsZV9iYXNpY19kYXRhJyxcbiAgbGFiZWw6IHtcbiAgICBkaXNwbGF5OiAnQnViYmxlIHNldCBBJyxcbiAgfSxcbiAgb25DbGljazogbG9hZEJ1YmJsZVBvcHVwLFxuICBjb2xvcjogQ2FyYm9uLmhlbHBlcnMuQ09MT1JTLlBJTkssXG4gIHZhbHVlczogW1xuICAgIHtcbiAgICAgIHg6IG5ldyBEYXRlKDIwMTYsIDAsIDEsIDEyLCAwKS50b0lTT1N0cmluZygpLFxuICAgICAgeTogNzAsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAwLCAxLCAxNSwgNDUpLnRvSVNPU3RyaW5nKCksXG4gICAgICB5OiAxMjAsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAwLCAxLCAxMCwgMzApLnRvSVNPU3RyaW5nKCksXG4gICAgICB5OiAxNjAsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAwLCAxLCAxOCwgMCkudG9JU09TdHJpbmcoKSxcbiAgICAgIHk6IDE4MCxcbiAgICB9LFxuICBdLFxuICB5QXhpczogJ3knLFxuICBzaG93U2hhcGVzOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1YmJsZURhdGFCYXNpYztcbiJdLCJuYW1lcyI6WyJsb2FkQnViYmxlUG9wdXAiLCJDYXJib24iLCJidWJibGVEYXRhQmFzaWMiLCJrZXkiLCJsYWJlbCIsImRpc3BsYXkiLCJvbkNsaWNrIiwiY29sb3IiLCJoZWxwZXJzIiwiQ09MT1JTIiwiUElOSyIsInZhbHVlcyIsIngiLCJEYXRlIiwidG9JU09TdHJpbmciLCJ5IiwieUF4aXMiLCJzaG93U2hhcGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataBasic.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataCustomRadius.js":
/*!******************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataCustomRadius.js ***!
  \******************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/popup.js */ \"./packages/terra-graphs-docs/src/example-datasets/popup.js\");\n/* harmony import */ var _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/carbon */ \"./packages/carbon-graphs/src/js/carbon.js\");\n\n\nvar bubbleDataCustomRadius = {\n  key: 'bubble_custom_radius_dataset',\n  label: {\n    display: 'Bubble set B'\n  },\n  color: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.COLORS.LIGHT_BLUE,\n  onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup_js__WEBPACK_IMPORTED_MODULE_0__.loadBubblePopup,\n  weight: {\n    fixedRadius: 12\n  },\n  values: [{\n    x: new Date(2016, 0, 1, 6, 0).toISOString(),\n    y: 100\n  }, {\n    x: new Date(2016, 0, 1, 10, 0).toISOString(),\n    y: 120\n  }, {\n    x: new Date(2016, 0, 1, 12, 0).toISOString(),\n    y: 180\n  }, {\n    x: new Date(2016, 0, 1, 18, 0).toISOString(),\n    y: 220\n  }],\n  yAxis: 'y'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (bubbleDataCustomRadius);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9CdWJibGUvYnViYmxlRGF0YUN1c3RvbVJhZGl1cy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBMEY7QUFDakM7QUFFekQsSUFBTUUsc0JBQXNCLEdBQUc7RUFDN0JDLEdBQUcsRUFBRSw4QkFBOEI7RUFDbkNDLEtBQUssRUFBRTtJQUNMQyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RDLEtBQUssRUFBRUwsMkVBQU0sQ0FBQ00sT0FBTyxDQUFDQyxNQUFNLENBQUNDLFVBQVU7RUFDdkNDLE9BQU8sRUFBRVYsb0dBQWU7RUFDeEJXLE1BQU0sRUFBRTtJQUNOQyxXQUFXLEVBQUU7RUFDZixDQUFDO0VBQ0RDLE1BQU0sRUFBRSxDQUNOO0lBQ0VDLENBQUMsRUFBRSxJQUFJQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUMzQ0MsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxFQUNEO0lBQ0VILENBQUMsRUFBRSxJQUFJQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUM1Q0MsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxFQUNEO0lBQ0VILENBQUMsRUFBRSxJQUFJQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUM1Q0MsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxFQUNEO0lBQ0VILENBQUMsRUFBRSxJQUFJQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztJQUM1Q0MsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxDQUNGO0VBQ0RDLEtBQUssRUFBRTtBQUNULENBQUM7QUFFRCwrREFBZWhCLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy9leGFtcGxlLWRhdGFzZXRzL2RhdGFPYmplY3RzL0J1YmJsZS9idWJibGVEYXRhQ3VzdG9tUmFkaXVzLmpzPzY2N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbG9hZEJ1YmJsZVBvcHVwIH0gZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvZXhhbXBsZS1kYXRhc2V0cy9wb3B1cC5qcyc7XG5pbXBvcnQgQ2FyYm9uIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocy9saWIvanMvY2FyYm9uJztcblxuY29uc3QgYnViYmxlRGF0YUN1c3RvbVJhZGl1cyA9IHtcbiAga2V5OiAnYnViYmxlX2N1c3RvbV9yYWRpdXNfZGF0YXNldCcsXG4gIGxhYmVsOiB7XG4gICAgZGlzcGxheTogJ0J1YmJsZSBzZXQgQicsXG4gIH0sXG4gIGNvbG9yOiBDYXJib24uaGVscGVycy5DT0xPUlMuTElHSFRfQkxVRSxcbiAgb25DbGljazogbG9hZEJ1YmJsZVBvcHVwLFxuICB3ZWlnaHQ6IHtcbiAgICBmaXhlZFJhZGl1czogMTIsXG4gIH0sXG4gIHZhbHVlczogW1xuICAgIHtcbiAgICAgIHg6IG5ldyBEYXRlKDIwMTYsIDAsIDEsIDYsIDApLnRvSVNPU3RyaW5nKCksXG4gICAgICB5OiAxMDAsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAwLCAxLCAxMCwgMCkudG9JU09TdHJpbmcoKSxcbiAgICAgIHk6IDEyMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHg6IG5ldyBEYXRlKDIwMTYsIDAsIDEsIDEyLCAwKS50b0lTT1N0cmluZygpLFxuICAgICAgeTogMTgwLFxuICAgIH0sXG4gICAge1xuICAgICAgeDogbmV3IERhdGUoMjAxNiwgMCwgMSwgMTgsIDApLnRvSVNPU3RyaW5nKCksXG4gICAgICB5OiAyMjAsXG4gICAgfSxcbiAgXSxcbiAgeUF4aXM6ICd5Jyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJ1YmJsZURhdGFDdXN0b21SYWRpdXM7XG4iXSwibmFtZXMiOlsibG9hZEJ1YmJsZVBvcHVwIiwiQ2FyYm9uIiwiYnViYmxlRGF0YUN1c3RvbVJhZGl1cyIsImtleSIsImxhYmVsIiwiZGlzcGxheSIsImNvbG9yIiwiaGVscGVycyIsIkNPTE9SUyIsIkxJR0hUX0JMVUUiLCJvbkNsaWNrIiwid2VpZ2h0IiwiZml4ZWRSYWRpdXMiLCJ2YWx1ZXMiLCJ4IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwieSIsInlBeGlzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataCustomRadius.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/BubbleGraph/Reflow/MultipleDatasets.test.jsx":
/*!****************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/BubbleGraph/Reflow/MultipleDatasets.test.jsx ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var terra_button_lib_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! terra-button/lib/Button */ \"./node_modules/terra-button/lib/Button.js\");\n/* harmony import */ var _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/helpers/utils */ \"./packages/carbon-graphs/src/js/helpers/utils.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_graphs_src_components_Bubble_BubbleMultipleDataset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bubble/BubbleMultipleDataset */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Bubble/BubbleMultipleDataset.jsx\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_dev_site_ExampleGraphContainer_ExampleGraphContainer_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss */ \"./packages/terra-graphs-docs/src/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Bubble_simplePanningAxisData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bubble/simplePanningAxisData */ \"./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Bubble/simplePanningAxisData.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Bubble_bubbleDataBasic_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataBasic.js */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataBasic.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Bubble_bubbleDataCustomRadius_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bubble/bubbleDataCustomRadius.js */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bubble/bubbleDataCustomRadius.js\");\n\n\n\n\n\n\n\n\n\nvar dataset = [_cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deepClone(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Bubble_bubbleDataBasic_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]), _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deepClone(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Bubble_bubbleDataCustomRadius_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])];\nvar initialState = {\n  initial: 0,\n  factor: 3,\n  graphConfig: _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deepClone((0,_cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Bubble_simplePanningAxisData__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('#BubbleMultipleDatasetsPanning'))\n};\nvar BubblePanningExample = function BubblePanningExample() {\n  var reducer = function reducer(panState, action) {\n    var newGraphConfig = _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deepClone(panState.graphConfig);\n    var hour;\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n    newGraphConfig.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();\n    newGraphConfig.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();\n    return {\n      initial: hour,\n      factor: panState.factor,\n      graphConfig: _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deepClone(newGraphConfig)\n    };\n  };\n  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_1__.useReducer(reducer, initialState),\n    _React$useReducer2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useReducer, 2),\n    panState = _React$useReducer2[0],\n    dispatch = _React$useReducer2[1];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(terra_button_lib_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"button-pan-left\",\n    text: \"<\",\n    onClick: function onClick() {\n      return dispatch({\n        type: 'panLeft'\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(terra_button_lib_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"button-pan-right\",\n    text: \">\",\n    onClick: function onClick() {\n      return dispatch({\n        type: 'panRight'\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_cerner_terra_graphs_docs_lib_terra_graphs_src_components_Bubble_BubbleMultipleDataset__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    graphID: \"BubbleMultipleDatasetsPanning\",\n    graphConfig: panState.graphConfig,\n    dataset: dataset\n  }));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (BubblePanningExample);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9ncmFwaHMvQnViYmxlR3JhcGgvUmVmbG93L011bHRpcGxlRGF0YXNldHMudGVzdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBMEI7QUFDbUI7QUFDa0I7QUFDNEQ7QUFDYjtBQUNpQjtBQUNaO0FBQ2M7QUFFakksSUFBTU8sT0FBTyxHQUFHLENBQUNMLGtGQUFLLENBQUNNLFNBQVMsQ0FBQ0gsNEhBQWUsQ0FBQyxFQUFFSCxrRkFBSyxDQUFDTSxTQUFTLENBQUNGLG1JQUFzQixDQUFDLENBQUM7QUFFM0YsSUFBTUcsWUFBWSxHQUFHO0VBQ25CQyxPQUFPLEVBQUUsQ0FBQztFQUNWQyxNQUFNLEVBQUUsQ0FBQztFQUNUQyxXQUFXLEVBQUVWLGtGQUFLLENBQUNNLFNBQVMsQ0FBQ0osMElBQWlCLENBQUMsZ0NBQWdDLENBQUM7QUFDbEYsQ0FBQztBQUVELElBQU1TLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBb0JBLENBQUEsRUFBUztFQUNqQyxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSUMsUUFBUSxFQUFFQyxNQUFNLEVBQUs7SUFDcEMsSUFBTUMsY0FBYyxHQUFHZixrRkFBSyxDQUFDTSxTQUFTLENBQUNPLFFBQVEsQ0FBQ0gsV0FBVyxDQUFDO0lBQzVELElBQUlNLElBQUk7SUFFUixRQUFRRixNQUFNLENBQUNHLElBQUk7TUFDakIsS0FBSyxTQUFTO1FBQ1pELElBQUksR0FBR0gsUUFBUSxDQUFDTCxPQUFPLEdBQUdLLFFBQVEsQ0FBQ0osTUFBTTtRQUN6QztNQUNGLEtBQUssVUFBVTtRQUNiTyxJQUFJLEdBQUdILFFBQVEsQ0FBQ0wsT0FBTyxHQUFHSyxRQUFRLENBQUNKLE1BQU07UUFDekM7TUFDRjtRQUNFLE9BQU9JLFFBQVE7SUFDbkI7SUFFQUUsY0FBYyxDQUFDRyxJQUFJLENBQUNDLENBQUMsQ0FBQ0MsVUFBVSxHQUFHLElBQUlDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRUwsSUFBSSxDQUFDLENBQUNNLFdBQVcsQ0FBQyxDQUFDO0lBQzNFUCxjQUFjLENBQUNHLElBQUksQ0FBQ0MsQ0FBQyxDQUFDSSxVQUFVLEdBQUcsSUFBSUYsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFTCxJQUFJLENBQUMsQ0FBQ00sV0FBVyxDQUFDLENBQUM7SUFFM0UsT0FBTztNQUNMZCxPQUFPLEVBQUVRLElBQUk7TUFDYlAsTUFBTSxFQUFFSSxRQUFRLENBQUNKLE1BQU07TUFDdkJDLFdBQVcsRUFBRVYsa0ZBQUssQ0FBQ00sU0FBUyxDQUFDUyxjQUFjO0lBQzdDLENBQUM7RUFDSCxDQUFDO0VBRUQsSUFBQVMsaUJBQUEsR0FBNkIxQiw2Q0FBZ0IsQ0FBQ2MsT0FBTyxFQUFFTCxZQUFZLENBQUM7SUFBQW1CLGtCQUFBLEdBQUFDLGdGQUFBLENBQUFILGlCQUFBO0lBQTdEWCxRQUFRLEdBQUFhLGtCQUFBO0lBQUVFLFFBQVEsR0FBQUYsa0JBQUE7RUFFekIsb0JBQ0U1QixnREFBQSxDQUFBQSwyQ0FBQSxxQkFDRUEsZ0RBQUEsQ0FBQ0MsK0RBQU07SUFBQ2dDLFNBQVMsRUFBQyxpQkFBaUI7SUFBQ0MsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNTCxRQUFRLENBQUM7UUFBRVgsSUFBSSxFQUFFO01BQVUsQ0FBQyxDQUFDO0lBQUE7RUFBQyxDQUFFLENBQUMsZUFDN0ZuQixnREFBQSxDQUFDQywrREFBTTtJQUFDZ0MsU0FBUyxFQUFDLGtCQUFrQjtJQUFDQyxJQUFJLEVBQUMsR0FBRztJQUFDQyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1MLFFBQVEsQ0FBQztRQUFFWCxJQUFJLEVBQUU7TUFBVyxDQUFDLENBQUM7SUFBQTtFQUFDLENBQUUsQ0FBQyxlQUMvRm5CLGdEQUFBLENBQUNHLDhIQUFxQjtJQUFDaUMsT0FBTyxFQUFDLCtCQUErQjtJQUFDeEIsV0FBVyxFQUFFRyxRQUFRLENBQUNILFdBQVk7SUFBQ0wsT0FBTyxFQUFFQTtFQUFRLENBQUUsQ0FDckgsQ0FBQztBQUVQLENBQUM7QUFFRCwrREFBZU0sb0JBQW9CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVycmEtZ3JhcGhzLy4vcGFja2FnZXMvdGVycmEtZ3JhcGhzLWRvY3Mvc3JjL3RlcnJhLWRldi1zaXRlL3Rlc3QvZ3JhcGhzL0J1YmJsZUdyYXBoL1JlZmxvdy9NdWx0aXBsZURhdGFzZXRzLnRlc3QuanN4PzgwYmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAndGVycmEtYnV0dG9uL2xpYi9CdXR0b24nO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocy9saWIvanMvaGVscGVycy91dGlscyc7XG5pbXBvcnQgQnViYmxlTXVsdGlwbGVEYXRhc2V0IGZyb20gJ0BjZXJuZXIvdGVycmEtZ3JhcGhzLWRvY3MvbGliL3RlcnJhLWdyYXBocy1zcmMvY29tcG9uZW50cy9CdWJibGUvQnViYmxlTXVsdGlwbGVEYXRhc2V0JztcbmltcG9ydCAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvdGVycmEtZGV2LXNpdGUvRXhhbXBsZUdyYXBoQ29udGFpbmVyL0V4YW1wbGVHcmFwaENvbnRhaW5lci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgZ2V0U2ltcGxlQXhpc0RhdGEgZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvZXhhbXBsZS1kYXRhc2V0cy9ncmFwaENvbmZpZ09iamVjdHMvQnViYmxlL3NpbXBsZVBhbm5pbmdBeGlzRGF0YSc7XG5pbXBvcnQgYnViYmxlRGF0YUJhc2ljIGZyb20gJ0BjZXJuZXIvdGVycmEtZ3JhcGhzLWRvY3MvbGliL2V4YW1wbGUtZGF0YXNldHMvZGF0YU9iamVjdHMvQnViYmxlL2J1YmJsZURhdGFCYXNpYy5qcyc7XG5pbXBvcnQgYnViYmxlRGF0YUN1c3RvbVJhZGl1cyBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL2RhdGFPYmplY3RzL0J1YmJsZS9idWJibGVEYXRhQ3VzdG9tUmFkaXVzLmpzJztcblxuY29uc3QgZGF0YXNldCA9IFt1dGlscy5kZWVwQ2xvbmUoYnViYmxlRGF0YUJhc2ljKSwgdXRpbHMuZGVlcENsb25lKGJ1YmJsZURhdGFDdXN0b21SYWRpdXMpXTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBpbml0aWFsOiAwLFxuICBmYWN0b3I6IDMsXG4gIGdyYXBoQ29uZmlnOiB1dGlscy5kZWVwQ2xvbmUoZ2V0U2ltcGxlQXhpc0RhdGEoJyNCdWJibGVNdWx0aXBsZURhdGFzZXRzUGFubmluZycpKSxcbn07XG5cbmNvbnN0IEJ1YmJsZVBhbm5pbmdFeGFtcGxlID0gKCkgPT4ge1xuICBjb25zdCByZWR1Y2VyID0gKHBhblN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBuZXdHcmFwaENvbmZpZyA9IHV0aWxzLmRlZXBDbG9uZShwYW5TdGF0ZS5ncmFwaENvbmZpZyk7XG4gICAgbGV0IGhvdXI7XG5cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlICdwYW5MZWZ0JzpcbiAgICAgICAgaG91ciA9IHBhblN0YXRlLmluaXRpYWwgLSBwYW5TdGF0ZS5mYWN0b3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGFuUmlnaHQnOlxuICAgICAgICBob3VyID0gcGFuU3RhdGUuaW5pdGlhbCArIHBhblN0YXRlLmZhY3RvcjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gcGFuU3RhdGU7XG4gICAgfVxuXG4gICAgbmV3R3JhcGhDb25maWcuYXhpcy54Lmxvd2VyTGltaXQgPSBuZXcgRGF0ZSgyMDE2LCAwLCAxLCBob3VyKS50b0lTT1N0cmluZygpO1xuICAgIG5ld0dyYXBoQ29uZmlnLmF4aXMueC51cHBlckxpbWl0ID0gbmV3IERhdGUoMjAxNiwgMCwgMiwgaG91cikudG9JU09TdHJpbmcoKTtcblxuICAgIHJldHVybiB7XG4gICAgICBpbml0aWFsOiBob3VyLFxuICAgICAgZmFjdG9yOiBwYW5TdGF0ZS5mYWN0b3IsXG4gICAgICBncmFwaENvbmZpZzogdXRpbHMuZGVlcENsb25lKG5ld0dyYXBoQ29uZmlnKSxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IFtwYW5TdGF0ZSwgZGlzcGF0Y2hdID0gUmVhY3QudXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXBhbi1sZWZ0XCIgdGV4dD1cIjxcIiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdwYW5MZWZ0JyB9KX0gLz5cbiAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXBhbi1yaWdodFwiIHRleHQ9XCI+XCIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAncGFuUmlnaHQnIH0pfSAvPlxuICAgICAgPEJ1YmJsZU11bHRpcGxlRGF0YXNldCBncmFwaElEPVwiQnViYmxlTXVsdGlwbGVEYXRhc2V0c1Bhbm5pbmdcIiBncmFwaENvbmZpZz17cGFuU3RhdGUuZ3JhcGhDb25maWd9IGRhdGFzZXQ9e2RhdGFzZXR9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdWJibGVQYW5uaW5nRXhhbXBsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsInV0aWxzIiwiQnViYmxlTXVsdGlwbGVEYXRhc2V0IiwiZ2V0U2ltcGxlQXhpc0RhdGEiLCJidWJibGVEYXRhQmFzaWMiLCJidWJibGVEYXRhQ3VzdG9tUmFkaXVzIiwiZGF0YXNldCIsImRlZXBDbG9uZSIsImluaXRpYWxTdGF0ZSIsImluaXRpYWwiLCJmYWN0b3IiLCJncmFwaENvbmZpZyIsIkJ1YmJsZVBhbm5pbmdFeGFtcGxlIiwicmVkdWNlciIsInBhblN0YXRlIiwiYWN0aW9uIiwibmV3R3JhcGhDb25maWciLCJob3VyIiwidHlwZSIsImF4aXMiLCJ4IiwibG93ZXJMaW1pdCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInVwcGVyTGltaXQiLCJfUmVhY3QkdXNlUmVkdWNlciIsInVzZVJlZHVjZXIiLCJfUmVhY3QkdXNlUmVkdWNlcjIiLCJfc2xpY2VkVG9BcnJheSIsImRpc3BhdGNoIiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiY2xhc3NOYW1lIiwidGV4dCIsIm9uQ2xpY2siLCJncmFwaElEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/BubbleGraph/Reflow/MultipleDatasets.test.jsx\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-graphs-src/components/Bubble/BubbleMultipleDataset.jsx":
/*!*****************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-graphs-src/components/Bubble/BubbleMultipleDataset.jsx ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/carbon */ \"./packages/carbon-graphs/src/js/carbon.js\");\n/* harmony import */ var _Graph_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Graph.module.scss */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Graph.module.scss\");\n/* harmony import */ var _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/helpers/utils */ \"./packages/carbon-graphs/src/js/helpers/utils.js\");\n\n\n\n\n\n\nvar propTypes = {\n  /**\n   * The unique identifier for the graph and prefix for the canvas.\n   */\n  graphID: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired,\n  /**\n   * Graph configuration object.\n   */\n  graphConfig: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object).isRequired,\n  /**\n   * Data to be displayed in graph.\n   */\n  dataset: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)),\n  /**\n   * Timeout to display multiple data contents in specific time interval.\n   */\n  timeout: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().number))\n};\nvar BubbleMultipleDataset = function BubbleMultipleDataset(_ref) {\n  var graphConfig = _ref.graphConfig,\n    dataset = _ref.dataset,\n    graphID = _ref.graphID,\n    timeout = _ref.timeout;\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(),\n    _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n    graph = _React$useState2[0],\n    setGraph = _React$useState2[1];\n  var graphLoadedRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n  var skipreflowRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n\n  // creation of canvas\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {\n    if (!graph) {\n      setGraph(_cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_2__[\"default\"].api.graph(graphConfig));\n    }\n  }, [graph, graphConfig]);\n\n  // initial dataset load\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {\n    if (!graph || graphLoadedRef.current) {\n      return undefined;\n    }\n    var timeoutIds = [];\n    if (dataset) {\n      if (timeout) {\n        dataset.forEach(function (data, index) {\n          var timeoutId = setTimeout(function () {\n            return graph.graphContainer ? graph.loadContent(_cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_2__[\"default\"].api.bubbleMultipleDataset(data)) : '';\n          }, timeout[index]);\n          timeoutIds.push(timeoutId);\n        });\n      } else {\n        dataset.forEach(function (data) {\n          graph.loadContent(_cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_2__[\"default\"].api.bubbleMultipleDataset(data));\n        });\n      }\n    }\n    graphLoadedRef.current = true;\n    return function () {\n      timeoutIds.forEach(function (id) {\n        clearTimeout(id);\n      });\n    };\n  }, [graph, dataset, timeout]);\n\n  // panning\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {\n    if (!graph) {\n      return;\n    }\n    if (!skipreflowRef.current) {\n      skipreflowRef.current = true;\n      return;\n    }\n    graph.config.axis.x.upperLimit = graphConfig.axis.x.upperLimit;\n    graph.config.axis.x.lowerLimit = graphConfig.axis.x.lowerLimit;\n    var newDataset = {\n      panData: _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].deepClone(dataset.panData),\n      eventline: _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].deepClone(dataset.eventline)\n    };\n    graph.reflowMultipleDatasets(newDataset);\n  }, [graph, dataset, graphConfig]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: \"\".concat(graphID, \"-canvasContainer\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: graphID\n  }));\n};\nBubbleMultipleDataset.propTypes = propTypes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BubbleMultipleDataset);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL0J1YmJsZS9CdWJibGVNdWx0aXBsZURhdGFzZXQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUNTO0FBQ3NCO0FBQzNCO0FBQ2lDO0FBRS9ELElBQU1JLFNBQVMsR0FBRztFQUNoQjtBQUNGO0FBQ0E7RUFDRUMsT0FBTyxFQUFFSiwwREFBZ0IsQ0FBQ00sVUFBVTtFQUNwQztBQUNGO0FBQ0E7RUFDRUMsV0FBVyxFQUFFUCwwREFBZ0IsQ0FBQ00sVUFBVTtFQUN4QztBQUNGO0FBQ0E7RUFDRUcsT0FBTyxFQUFFVCx5REFBaUIsQ0FBQ0EsMERBQWdCLENBQUM7RUFDNUM7QUFDRjtBQUNBO0VBQ0VXLE9BQU8sRUFBRVgseURBQWlCLENBQUNBLDBEQUFnQjtBQUM3QyxDQUFDO0FBRUQsSUFBTWEscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUFxQkEsQ0FBQUMsSUFBQSxFQUVyQjtFQUFBLElBREpQLFdBQVcsR0FBQU8sSUFBQSxDQUFYUCxXQUFXO0lBQUVFLE9BQU8sR0FBQUssSUFBQSxDQUFQTCxPQUFPO0lBQUVMLE9BQU8sR0FBQVUsSUFBQSxDQUFQVixPQUFPO0lBQUVPLE9BQU8sR0FBQUcsSUFBQSxDQUFQSCxPQUFPO0VBRXRDLElBQUFJLGVBQUEsR0FBMEJoQiwyQ0FBYyxDQUFDLENBQUM7SUFBQWtCLGdCQUFBLEdBQUFDLGdGQUFBLENBQUFILGVBQUE7SUFBbkNJLEtBQUssR0FBQUYsZ0JBQUE7SUFBRUcsUUFBUSxHQUFBSCxnQkFBQTtFQUN0QixJQUFNSSxjQUFjLEdBQUd0Qix5Q0FBWSxDQUFDLENBQUM7RUFDckMsSUFBTXdCLGFBQWEsR0FBR3hCLHlDQUFZLENBQUMsQ0FBQzs7RUFFcEM7RUFDQUEsNENBQWUsQ0FBQyxZQUFNO0lBQ3BCLElBQUksQ0FBQ29CLEtBQUssRUFBRTtNQUNWQyxRQUFRLENBQUNuQiwyRUFBTSxDQUFDd0IsR0FB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cmMvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL0J1YmJsZS9CdWJibGVNdWx0aXBsZURhdGFzZXQuanN4PzE2NGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ2FyYm9uIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocy9saWIvanMvY2FyYm9uJztcbmltcG9ydCAnLi4vR3JhcGgubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocy9saWIvanMvaGVscGVycy91dGlscyc7XG5cbmNvbnN0IHByb3BUeXBlcyA9IHtcbiAgLyoqXG4gICAqIFRoZSB1bmlxdWUgaWRlbnRpZmllciBmb3IgdGhlIGdyYXBoIGFuZCBwcmVmaXggZm9yIHRoZSBjYW52YXMuXG4gICAqL1xuICBncmFwaElEOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBHcmFwaCBjb25maWd1cmF0aW9uIG9iamVjdC5cbiAgICovXG4gIGdyYXBoQ29uZmlnOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIC8qKlxuICAgKiBEYXRhIHRvIGJlIGRpc3BsYXllZCBpbiBncmFwaC5cbiAgICovXG4gIGRhdGFzZXQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5vYmplY3QpLFxuICAvKipcbiAgICogVGltZW91dCB0byBkaXNwbGF5IG11bHRpcGxlIGRhdGEgY29udGVudHMgaW4gc3BlY2lmaWMgdGltZSBpbnRlcnZhbC5cbiAgICovXG4gIHRpbWVvdXQ6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5udW1iZXIpLFxufTtcblxuY29uc3QgQnViYmxlTXVsdGlwbGVEYXRhc2V0ID0gKHtcbiAgZ3JhcGhDb25maWcsIGRhdGFzZXQsIGdyYXBoSUQsIHRpbWVvdXQsXG59KSA9PiB7XG4gIGNvbnN0IFtncmFwaCwgc2V0R3JhcGhdID0gUmVhY3QudXNlU3RhdGUoKTtcbiAgY29uc3QgZ3JhcGhMb2FkZWRSZWYgPSBSZWFjdC51c2VSZWYoKTtcbiAgY29uc3Qgc2tpcHJlZmxvd1JlZiA9IFJlYWN0LnVzZVJlZigpO1xuXG4gIC8vIGNyZWF0aW9uIG9mIGNhbnZhc1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZ3JhcGgpIHtcbiAgICAgIHNldEdyYXBoKENhcmJvbi5hcGkuZ3JhcGgoZ3JhcGhDb25maWcpKTtcbiAgICB9XG4gIH0sIFtncmFwaCwgZ3JhcGhDb25maWddKTtcblxuICAvLyBpbml0aWFsIGRhdGFzZXQgbG9hZFxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZ3JhcGggfHwgZ3JhcGhMb2FkZWRSZWYuY3VycmVudCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgdGltZW91dElkcyA9IFtdO1xuXG4gICAgaWYgKGRhdGFzZXQpIHtcbiAgICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICAgIGRhdGFzZXQuZm9yRWFjaCgoZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgKCkgPT4gKGdyYXBoLmdyYXBoQ29udGFpbmVyXG4gICAgICAgICAgICAgID8gZ3JhcGgubG9hZENvbnRlbnQoQ2FyYm9uLmFwaS5idWJibGVNdWx0aXBsZURhdGFzZXQoZGF0YSkpXG4gICAgICAgICAgICAgIDogJycpLFxuICAgICAgICAgICAgdGltZW91dFtpbmRleF0sXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHRpbWVvdXRJZHMucHVzaCh0aW1lb3V0SWQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFzZXQuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICAgIGdyYXBoLmxvYWRDb250ZW50KENhcmJvbi5hcGkuYnViYmxlTXVsdGlwbGVEYXRhc2V0KGRhdGEpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGdyYXBoTG9hZGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRpbWVvdXRJZHMuZm9yRWFjaCgoaWQpID0+IHsgY2xlYXJUaW1lb3V0KGlkKTsgfSk7XG4gICAgfTtcbiAgfSwgW2dyYXBoLCBkYXRhc2V0LCB0aW1lb3V0XSk7XG5cbiAgLy8gcGFubmluZ1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghZ3JhcGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFza2lwcmVmbG93UmVmLmN1cnJlbnQpIHtcbiAgICAgIHNraXByZWZsb3dSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZ3JhcGguY29uZmlnLmF4aXMueC51cHBlckxpbWl0ID0gZ3JhcGhDb25maWcuYXhpcy54LnVwcGVyTGltaXQ7XG4gICAgZ3JhcGguY29uZmlnLmF4aXMueC5sb3dlckxpbWl0ID0gZ3JhcGhDb25maWcuYXhpcy54Lmxvd2VyTGltaXQ7XG5cbiAgICBjb25zdCBuZXdEYXRhc2V0ID0ge1xuICAgICAgcGFuRGF0YTogdXRpbHMuZGVlcENsb25lKGRhdGFzZXQucGFuRGF0YSksXG4gICAgICBldmVudGxpbmU6IHV0aWxzLmRlZXBDbG9uZShkYXRhc2V0LmV2ZW50bGluZSksXG4gICAgfTtcblxuICAgIGdyYXBoLnJlZmxvd011bHRpcGxlRGF0YXNldHMobmV3RGF0YXNldCk7XG4gIH0sIFtncmFwaCwgZGF0YXNldCwgZ3JhcGhDb25maWddKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9e2Ake2dyYXBoSUR9LWNhbnZhc0NvbnRhaW5lcmB9PlxuICAgICAgPGRpdiBpZD17Z3JhcGhJRH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkJ1YmJsZU11bHRpcGxlRGF0YXNldC5wcm9wVHlwZXMgPSBwcm9wVHlwZXM7XG5cbmV4cG9ydCBkZWZhdWx0IEJ1YmJsZU11bHRpcGxlRGF0YXNldDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlByb3BUeXBlcyIsIkNhcmJvbiIsInV0aWxzIiwicHJvcFR5cGVzIiwiZ3JhcGhJRCIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJncmFwaENvbmZpZyIsIm9iamVjdCIsImRhdGFzZXQiLCJhcnJheU9mIiwidGltZW91dCIsIm51bWJlciIsIkJ1YmJsZU11bHRpcGxlRGF0YXNldCIsIl9yZWYiLCJfUmVhY3QkdXNlU3RhdGUiLCJ1c2VTdGF0ZSIsIl9SZWFjdCR1c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImdyYXBoIiwic2V0R3JhcGgiLCJncmFwaExvYWRlZFJlZiIsInVzZVJlZiIsInNraXByZWZsb3dSZWYiLCJ1c2VFZmZlY3QiLCJhcGkiLCJjdXJyZW50IiwidW5kZWZpbmVkIiwidGltZW91dElkcyIsImZvckVhY2giLCJkYXRhIiwiaW5kZXgiLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiZ3JhcGhDb250YWluZXIiLCJsb2FkQ29udGVudCIsImJ1YmJsZU11bHRpcGxlRGF0YXNldCIsInB1c2giLCJpZCIsImNsZWFyVGltZW91dCIsImNvbmZpZyIsImF4aXMiLCJ4IiwidXBwZXJMaW1pdCIsImxvd2VyTGltaXQiLCJuZXdEYXRhc2V0IiwicGFuRGF0YSIsImRlZXBDbG9uZSIsImV2ZW50bGluZSIsInJlZmxvd011bHRpcGxlRGF0YXNldHMiLCJjcmVhdGVFbGVtZW50IiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-graphs-src/components/Bubble/BubbleMultipleDataset.jsx\n");

/***/ })

}]);