"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkterra_graphs"] = self["webpackChunkterra_graphs"] || []).push([["packages_terra-graphs-docs_src_terra-dev-site_test_graphs_LineGraph_Reflow_SimplePanning_test-8ee706"],{

/***/ "./packages/terra-graphs-docs/src/terra-graphs-src/components/Graph.module.scss":
/*!**************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-graphs-src/components/Graph.module.scss ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL0dyYXBoLm1vZHVsZS5zY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy90ZXJyYS1ncmFwaHMtc3JjL2NvbXBvbmVudHMvR3JhcGgubW9kdWxlLnNjc3M/Mjk0YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-graphs-src/components/Graph.module.scss\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/LineGraph/Reflow/SimplePanning.test.jsx":
/*!***********************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/LineGraph/Reflow/SimplePanning.test.jsx ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var terra_button_lib_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! terra-button/lib/Button */ \"./node_modules/terra-button/lib/Button.js\");\n/* harmony import */ var _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/helpers/utils */ \"./packages/carbon-graphs/src/js/helpers/utils.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_graphs_src_components_Line_LineGraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-graphs-src/components/Line/LineGraph */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Line/LineGraph.jsx\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_dev_site_ExampleGraphContainer_ExampleGraphContainer_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss */ \"./packages/terra-graphs-docs/src/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Line_lineTimeseriesPanning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Line/lineTimeseriesPanning */ \"./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Line/lineTimeseriesPanning.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Line_datasetTimeseries1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Line/datasetTimeseries1 */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/Line/datasetTimeseries1.js\");\n\n\n\n\n\n\n\n\nvar dataset = [_cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deepClone(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Line_datasetTimeseries1__WEBPACK_IMPORTED_MODULE_7__[\"default\"])];\nvar initialState = {\n  initial: 0,\n  factor: 3,\n  graphConfig: _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deepClone((0,_cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Line_lineTimeseriesPanning__WEBPACK_IMPORTED_MODULE_6__[\"default\"])('#linePanningExample'))\n};\nvar LinePanningExample = function LinePanningExample() {\n  var reducer = function reducer(panState, action) {\n    var newGraphState = _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deepClone(panState.graphConfig);\n    var hour;\n    switch (action.type) {\n      case 'panLeft':\n        hour = panState.initial - panState.factor;\n        break;\n      case 'panRight':\n        hour = panState.initial + panState.factor;\n        break;\n      default:\n        return panState;\n    }\n    newGraphState.axis.x.lowerLimit = new Date(2016, 0, 1, hour).toISOString();\n    newGraphState.axis.x.upperLimit = new Date(2016, 0, 2, hour).toISOString();\n    return {\n      initial: hour,\n      factor: panState.factor,\n      graphConfig: _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_3__[\"default\"].deepClone(newGraphState)\n    };\n  };\n  var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_1__.useReducer(reducer, initialState),\n    _React$useReducer2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useReducer, 2),\n    panState = _React$useReducer2[0],\n    dispatch = _React$useReducer2[1];\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(terra_button_lib_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"button-pan-left\",\n    text: \"<\",\n    onClick: function onClick() {\n      return dispatch({\n        type: 'panLeft'\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(terra_button_lib_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    className: \"button-pan-right\",\n    text: \">\",\n    onClick: function onClick() {\n      return dispatch({\n        type: 'panRight'\n      });\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_cerner_terra_graphs_docs_lib_terra_graphs_src_components_Line_LineGraph__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    graphID: \"linePanningExample\",\n    graphConfig: panState.graphConfig,\n    dataset: dataset\n  }));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinePanningExample);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9ncmFwaHMvTGluZUdyYXBoL1JlZmxvdy9TaW1wbGVQYW5uaW5nLnRlc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEI7QUFDbUI7QUFDa0I7QUFDa0M7QUFDYTtBQUM0QjtBQUM3QjtBQUU3RyxJQUFNTSxPQUFPLEdBQUcsQ0FBQ0osa0ZBQUssQ0FBQ0ssU0FBUyxDQUFDRiwwSEFBVyxDQUFDLENBQUM7QUFDOUMsSUFBTUcsWUFBWSxHQUFHO0VBQ25CQyxPQUFPLEVBQUUsQ0FBQztFQUNWQyxNQUFNLEVBQUUsQ0FBQztFQUNUQyxXQUFXLEVBQUVULGtGQUFLLENBQUNLLFNBQVMsQ0FBQ0gsd0lBQThCLENBQUMscUJBQXFCLENBQUM7QUFDcEYsQ0FBQztBQUVELElBQU1RLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUEsRUFBUztFQUMvQixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBT0EsQ0FBSUMsUUFBUSxFQUFFQyxNQUFNLEVBQUs7SUFDcEMsSUFBTUMsYUFBYSxHQUFHZCxrRkFBSyxDQUFDSyxTQUFTLENBQUNPLFFBQVEsQ0FBQ0gsV0FBVyxDQUFDO0lBQzNELElBQUlNLElBQUk7SUFFUixRQUFRRixNQUFNLENBQUNHLElBQUk7TUFDakIsS0FBSyxTQUFTO1FBQ1pELElBQUksR0FBR0gsUUFBUSxDQUFDTCxPQUFPLEdBQUdLLFFBQVEsQ0FBQ0osTUFBTTtRQUN6QztNQUNGLEtBQUssVUFBVTtRQUNiTyxJQUFJLEdBQUdILFFBQVEsQ0FBQ0wsT0FBTyxHQUFHSyxRQUFRLENBQUNKLE1BQU07UUFDekM7TUFDRjtRQUNFLE9BQU9JLFFBQVE7SUFDbkI7SUFFQUUsYUFBYSxDQUFDRyxJQUFJLENBQUNDLENBQUMsQ0FBQ0MsVUFBVSxHQUFHLElBQUlDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRUwsSUFBSSxDQUFDLENBQUNNLFdBQVcsQ0FBQyxDQUFDO0lBQzFFUCxhQUFhLENBQUNHLElBQUksQ0FBQ0MsQ0FBQyxDQUFDSSxVQUFVLEdBQUcsSUFBSUYsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFTCxJQUFJLENBQUMsQ0FBQ00sV0FBVyxDQUFDLENBQUM7SUFFMUUsT0FBTztNQUNMZCxPQUFPLEVBQUVRLElBQUk7TUFDYlAsTUFBTSxFQUFFSSxRQUFRLENBQUNKLE1BQU07TUFDdkJDLFdBQVcsRUFBRVQsa0ZBQUssQ0FBQ0ssU0FBUyxDQUFDUyxhQUFhO0lBQzVDLENBQUM7RUFDSCxDQUFDO0VBRUQsSUFBQVMsaUJBQUEsR0FBNkJ6Qiw2Q0FBZ0IsQ0FBQ2EsT0FBTyxFQUFFTCxZQUFZLENBQUM7SUFBQW1CLGtCQUFBLEdBQUFDLGdGQUFBLENBQUFILGlCQUFBO0lBQTdEWCxRQUFRLEdBQUFhLGtCQUFBO0lBQUVFLFFBQVEsR0FBQUYsa0JBQUE7RUFFekIsb0JBQ0UzQixnREFBQSxDQUFBQSwyQ0FBQSxxQkFDRUEsZ0RBQUEsQ0FBQ0MsK0RBQU07SUFBQytCLFNBQVMsRUFBQyxpQkFBaUI7SUFBQ0MsSUFBSSxFQUFDLEdBQUc7SUFBQ0MsT0FBTyxFQUFFLFNBQUFBLFFBQUE7TUFBQSxPQUFNTCxRQUFRLENBQUM7UUFBRVgsSUFBSSxFQUFFO01BQVUsQ0FBQyxDQUFDO0lBQUE7RUFBQyxDQUFFLENBQUMsZUFDN0ZsQixnREFBQSxDQUFDQywrREFBTTtJQUFDK0IsU0FBUyxFQUFDLGtCQUFrQjtJQUFDQyxJQUFJLEVBQUMsR0FBRztJQUFDQyxPQUFPLEVBQUUsU0FBQUEsUUFBQTtNQUFBLE9BQU1MLFFBQVEsQ0FBQztRQUFFWCxJQUFJLEVBQUU7TUFBVyxDQUFDLENBQUM7SUFBQTtFQUFDLENBQUUsQ0FBQyxlQUMvRmxCLGdEQUFBLENBQUNHLGdIQUFTO0lBQUNnQyxPQUFPLEVBQUMsb0JBQW9CO0lBQUN4QixXQUFXLEVBQUVHLFFBQVEsQ0FBQ0gsV0FBWTtJQUFDTCxPQUFPLEVBQUVBO0VBQVEsQ0FBRSxDQUM5RixDQUFDO0FBRVAsQ0FBQztBQUVELCtEQUFlTSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9ncmFwaHMvTGluZUdyYXBoL1JlZmxvdy9TaW1wbGVQYW5uaW5nLnRlc3QuanN4P2QzN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCdXR0b24gZnJvbSAndGVycmEtYnV0dG9uL2xpYi9CdXR0b24nO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocy9saWIvanMvaGVscGVycy91dGlscyc7XG5pbXBvcnQgTGluZUdyYXBoIGZyb20gJ0BjZXJuZXIvdGVycmEtZ3JhcGhzLWRvY3MvbGliL3RlcnJhLWdyYXBocy1zcmMvY29tcG9uZW50cy9MaW5lL0xpbmVHcmFwaCc7XG5pbXBvcnQgJ0BjZXJuZXIvdGVycmEtZ3JhcGhzLWRvY3MvbGliL3RlcnJhLWRldi1zaXRlL0V4YW1wbGVHcmFwaENvbnRhaW5lci9FeGFtcGxlR3JhcGhDb250YWluZXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IGdldENvbmZpZ0xpbmVUaW1lc2VyaWVzUGFubmluZyBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL2dyYXBoQ29uZmlnT2JqZWN0cy9MaW5lL2xpbmVUaW1lc2VyaWVzUGFubmluZyc7XG5pbXBvcnQgZXhhbXBsZURhdGEgZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9MaW5lL2RhdGFzZXRUaW1lc2VyaWVzMSc7XG5cbmNvbnN0IGRhdGFzZXQgPSBbdXRpbHMuZGVlcENsb25lKGV4YW1wbGVEYXRhKV07XG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGluaXRpYWw6IDAsXG4gIGZhY3RvcjogMyxcbiAgZ3JhcGhDb25maWc6IHV0aWxzLmRlZXBDbG9uZShnZXRDb25maWdMaW5lVGltZXNlcmllc1Bhbm5pbmcoJyNsaW5lUGFubmluZ0V4YW1wbGUnKSksXG59O1xuXG5jb25zdCBMaW5lUGFubmluZ0V4YW1wbGUgPSAoKSA9PiB7XG4gIGNvbnN0IHJlZHVjZXIgPSAocGFuU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIGNvbnN0IG5ld0dyYXBoU3RhdGUgPSB1dGlscy5kZWVwQ2xvbmUocGFuU3RhdGUuZ3JhcGhDb25maWcpO1xuICAgIGxldCBob3VyO1xuXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAncGFuTGVmdCc6XG4gICAgICAgIGhvdXIgPSBwYW5TdGF0ZS5pbml0aWFsIC0gcGFuU3RhdGUuZmFjdG9yO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3BhblJpZ2h0JzpcbiAgICAgICAgaG91ciA9IHBhblN0YXRlLmluaXRpYWwgKyBwYW5TdGF0ZS5mYWN0b3I7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHBhblN0YXRlO1xuICAgIH1cblxuICAgIG5ld0dyYXBoU3RhdGUuYXhpcy54Lmxvd2VyTGltaXQgPSBuZXcgRGF0ZSgyMDE2LCAwLCAxLCBob3VyKS50b0lTT1N0cmluZygpO1xuICAgIG5ld0dyYXBoU3RhdGUuYXhpcy54LnVwcGVyTGltaXQgPSBuZXcgRGF0ZSgyMDE2LCAwLCAyLCBob3VyKS50b0lTT1N0cmluZygpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGluaXRpYWw6IGhvdXIsXG4gICAgICBmYWN0b3I6IHBhblN0YXRlLmZhY3RvcixcbiAgICAgIGdyYXBoQ29uZmlnOiB1dGlscy5kZWVwQ2xvbmUobmV3R3JhcGhTdGF0ZSksXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCBbcGFuU3RhdGUsIGRpc3BhdGNoXSA9IFJlYWN0LnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1wYW4tbGVmdFwiIHRleHQ9XCI8XCIgb25DbGljaz17KCkgPT4gZGlzcGF0Y2goeyB0eXBlOiAncGFuTGVmdCcgfSl9IC8+XG4gICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1wYW4tcmlnaHRcIiB0ZXh0PVwiPlwiIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKHsgdHlwZTogJ3BhblJpZ2h0JyB9KX0gLz5cbiAgICAgIDxMaW5lR3JhcGggZ3JhcGhJRD1cImxpbmVQYW5uaW5nRXhhbXBsZVwiIGdyYXBoQ29uZmlnPXtwYW5TdGF0ZS5ncmFwaENvbmZpZ30gZGF0YXNldD17ZGF0YXNldH0gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpbmVQYW5uaW5nRXhhbXBsZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJ1dHRvbiIsInV0aWxzIiwiTGluZUdyYXBoIiwiZ2V0Q29uZmlnTGluZVRpbWVzZXJpZXNQYW5uaW5nIiwiZXhhbXBsZURhdGEiLCJkYXRhc2V0IiwiZGVlcENsb25lIiwiaW5pdGlhbFN0YXRlIiwiaW5pdGlhbCIsImZhY3RvciIsImdyYXBoQ29uZmlnIiwiTGluZVBhbm5pbmdFeGFtcGxlIiwicmVkdWNlciIsInBhblN0YXRlIiwiYWN0aW9uIiwibmV3R3JhcGhTdGF0ZSIsImhvdXIiLCJ0eXBlIiwiYXhpcyIsIngiLCJsb3dlckxpbWl0IiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwidXBwZXJMaW1pdCIsIl9SZWFjdCR1c2VSZWR1Y2VyIiwidXNlUmVkdWNlciIsIl9SZWFjdCR1c2VSZWR1Y2VyMiIsIl9zbGljZWRUb0FycmF5IiwiZGlzcGF0Y2giLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJjbGFzc05hbWUiLCJ0ZXh0Iiwib25DbGljayIsImdyYXBoSUQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/LineGraph/Reflow/SimplePanning.test.jsx\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-graphs-src/components/Line/LineGraph.jsx":
/*!***************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-graphs-src/components/Line/LineGraph.jsx ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n/* harmony import */ var _Graph_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Graph.module.scss */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Graph.module.scss\");\n/* harmony import */ var _LineGraph_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LineGraph.module.scss */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Line/LineGraph.module.scss\");\n/* harmony import */ var _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/helpers/utils */ \"./packages/carbon-graphs/src/js/helpers/utils.js\");\n\n\n\n\n\n\n\nvar propTypes = {\n  /**\n   * The unique identifier for the graph and prefix for the canvas.\n   */\n  graphID: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string).isRequired,\n  /**\n   * Graph configuration object.\n   */\n  graphConfig: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().object).isRequired,\n  /**\n   * Data to be displayed in graph.\n   */\n  dataset: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().object)),\n  /**\n   * Timeout to display multiple data contents in specific time interval.\n   */\n  timeout: prop_types__WEBPACK_IMPORTED_MODULE_6___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_6___default().number))\n};\nvar LineGraph = function LineGraph(_ref) {\n  var graphConfig = _ref.graphConfig,\n    dataset = _ref.dataset,\n    graphID = _ref.graphID,\n    timeout = _ref.timeout;\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(),\n    _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n    graph = _React$useState2[0],\n    setGraph = _React$useState2[1];\n  var graphLoadedRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n  var skipreflowRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n\n  // creation of canvas\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {\n    if (!graph) {\n      setGraph(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].api.graph(graphConfig));\n    }\n  }, [graph, graphConfig]);\n\n  // initial dataset load\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {\n    if (!graph || graphLoadedRef.current) {\n      return undefined;\n    }\n    var timeoutIds = [];\n    if (dataset) {\n      if (timeout) {\n        dataset.forEach(function (data, index) {\n          var timeoutId = setTimeout(function () {\n            return graph.graphContainer ? graph.loadContent(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].api.line(data)) : '';\n          }, timeout[index]);\n          timeoutIds.push(timeoutId);\n        });\n      } else {\n        dataset.forEach(function (data) {\n          graph.loadContent(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].api.line(data));\n        });\n      }\n    }\n    graphLoadedRef.current = true;\n    return function () {\n      timeoutIds.forEach(function (id) {\n        clearTimeout(id);\n      });\n    };\n  }, [graph, dataset, timeout]);\n\n  // panning\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {\n    if (!graph) {\n      return;\n    }\n    if (!skipreflowRef.current) {\n      skipreflowRef.current = true;\n      return;\n    }\n    graph.config.axis.x.upperLimit = graphConfig.axis.x.upperLimit;\n    graph.config.axis.x.lowerLimit = graphConfig.axis.x.lowerLimit;\n    var newDataset = {\n      panData: _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_5__[\"default\"].deepClone(dataset.panData),\n      eventline: _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_5__[\"default\"].deepClone(dataset.eventline)\n    };\n    graph.reflowMultipleDatasets(newDataset);\n  }, [graph, dataset, graphConfig]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: \"\".concat(graphID, \"-canvasContainer\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: graphID\n  }));\n};\nLineGraph.propTypes = propTypes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LineGraph);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL0xpbmUvTGluZUdyYXBoLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTBCO0FBQ1M7QUFDUTtBQUNiO0FBQ0c7QUFDOEI7QUFFL0QsSUFBTUksU0FBUyxHQUFHO0VBQ2hCO0FBQ0Y7QUFDQTtFQUNFQyxPQUFPLEVBQUVKLDBEQUFnQixDQUFDTSxVQUFVO0VBQ3BDO0FBQ0Y7QUFDQTtFQUNFQyxXQUFXLEVBQUVQLDBEQUFnQixDQUFDTSxVQUFVO0VBQ3hDO0FBQ0Y7QUFDQTtFQUNFRyxPQUFPLEVBQUVULHlEQUFpQixDQUFDQSwwREFBZ0IsQ0FBQztFQUM1QztBQUNGO0FBQ0E7RUFDRVcsT0FBTyxFQUFFWCx5REFBaUIsQ0FBQ0EsMERBQWdCO0FBQzdDLENBQUM7QUFFRCxJQUFNYSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQUMsSUFBQSxFQUVUO0VBQUEsSUFESlAsV0FBVyxHQUFBTyxJQUFBLENBQVhQLFdBQVc7SUFBRUUsT0FBTyxHQUFBSyxJQUFBLENBQVBMLE9BQU87SUFBRUwsT0FBTyxHQUFBVSxJQUFBLENBQVBWLE9BQU87SUFBRU8sT0FBTyxHQUFBRyxJQUFBLENBQVBILE9BQU87RUFFdEMsSUFBQUksZUFBQSxHQUEwQmhCLDJDQUFjLENBQUMsQ0FBQztJQUFBa0IsZ0JBQUEsR0FBQUMsZ0ZBQUEsQ0FBQUgsZUFBQTtJQUFuQ0ksS0FBSyxHQUFBRixnQkFBQTtJQUFFRyxRQUFRLEdBQUFILGdCQUFBO0VBQ3RCLElBQU1JLGNBQWMsR0FBR3RCLHlDQUFZLENBQUMsQ0FBQztFQUNyQyxJQUFNd0IsYUFBYSxHQUFHeEIseUNBQVksQ0FBQyxDQUFDOztFQUVwQztFQUNBQSw0Q0FBZSxDQUFDLFlBQU07SUFDcEIsSUFBSSxDQUFDb0IsS0FBSyxFQUFFO01BQ1ZDLFFBQVEsQ0FBQ25CLDZEQUFNLENBQUN3QixHQUFHLENBQUNOLEtBQUssQ0FBQ1osV0FBVyxDQUFDLENBQUM7SUFDekM7RUFDRixDQUFDLEVBQUUsQ0FBQ1ksS0FBSyxFQUFFWixXQUFXLENBQUMsQ0FBQzs7RUFFeEI7RUFDQVIsNENBQWUsQ0FBQyxZQUFNO0lBQ3BCLElBQUksQ0FBQ29CLEtBQUssSUFBSUUsY0FBYyxDQUFDSyxPQUFPLEVBQUU7TUFDcEMsT0FBT0MsU0FBUztJQUNsQjtJQUNBLElBQU1DLFVBQVUsR0FBRyxFQUFFO0lBRXJCLElBQUluQixPQUFPLEVBQUU7TUFDWCxJQUFJRSxPQUFPLEVBQUU7UUFDWEYsT0FBTyxDQUFDb0IsT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFLO1VBQy9CLElBQU1DLFNBQVMsR0FBR0MsVUFBVSxDQUMxQjtZQUFBLE9BQU9kLEtBQUssQ0FBQ2UsY0FBYyxHQUN2QmYsS0FBSyxDQUFDZ0IsV0FBVyxDQUFDbEMsNkRBQU0sQ0FBQ3dCLEdBQUcsQ0FBQ1csSUFBSSxDQUFDTixJQUFJLENBQUMsQ0FBQyxHQUN4QyxFQUFFO1VBQUEsQ0FBQyxFQUNQbkIsT0FBTyxDQUFDb0IsS0FBSyxDQUNmLENBQUM7VUFFREgsVUFBVSxDQUFDUyxJQUFJLENBQUNMLFNBQVMsQ0FBQztRQUM1QixDQUFDLENBQUM7TUFDSixDQUFDLE1BQU07UUFDTHZCLE9BQU8sQ0FBQ29CLE9BQU8sQ0FBQyxVQUFDQyxJQUFJLEVBQUs7VUFDeEJYLEtBQUssQ0FBQ2dCLFdBQVcsQ0FBQ2xDLDZEQUFNLENBQUN3QixHQUFHLENBQUNXLElBQUksQ0FBQ04sSUFBSSxDQUFDLENBQUM7UUFDMUMsQ0FBQyxDQUFDO01BQ0o7SUFDRjtJQUNBVCxjQUFjLENBQUNLLE9BQU8sR0FBRyxJQUFJO0lBQzdCLE9BQU8sWUFBTTtNQUNYRSxVQUFVLENBQUNDLE9BQU8sQ0FBQyxVQUFDUyxFQUFFLEVBQUs7UUFBRUMsWUFBWSxDQUFDRCxFQUFFLENBQUM7TUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztFQUNILENBQUMsRUFBRSxDQUFDbkIsS0FBSyxFQUFFVixPQUFPLEVBQUVFLE9BQU8sQ0FBQyxDQUFDOztFQUU3QjtFQUNBWiw0Q0FBZSxDQUFDLFlBQU07SUFDcEIsSUFBSSxDQUFDb0IsS0FBSyxFQUFFO01BQ1Y7SUFDRjtJQUNBLElBQUksQ0FBQ0ksYUFBYSxDQUFDRyxPQUFPLEVBQUU7TUFDMUJILGFBQWEsQ0FBQ0csT0FBTyxHQUFHLElBQUk7TUFDNUI7SUFDRjtJQUVBUCxLQUFLLENBQUNxQixNQUFNLENBQUNDLElBQUksQ0FBQ0MsQ0FBQyxDQUFDQyxVQUFVLEdBQUdwQyxXQUFXLENBQUNrQyxJQUFJLENBQUNDLENBQUMsQ0FBQ0MsVUFBVTtJQUM5RHhCLEtBQUssQ0FBQ3FCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxDQUFDLENBQUNFLFVBQVUsR0FBR3JDLFdBQVcsQ0FBQ2tDLElBQUksQ0FBQ0MsQ0FBQyxDQUFDRSxVQUFVO0lBRTlELElBQU1DLFVBQVUsR0FBRztNQUNqQkMsT0FBTyxFQUFFNUMsa0ZBQUssQ0FBQzZDLFNBQVMsQ0FBQ3RDLE9BQU8sQ0FBQ3FDLE9BQU8sQ0FBQztNQUN6Q0UsU0FBUyxFQUFFOUMsa0ZBQUssQ0FBQzZDLFNBQVMsQ0FBQ3RDLE9BQU8sQ0FBQ3VDLFNBQVM7SUFDOUMsQ0FBQztJQUVEN0IsS0FBSyxDQUFDOEIsc0JBQXNCLENBQUNKLFVBQVUsQ0FBQztFQUMxQyxDQUFDLEVBQUUsQ0FBQzFCLEtBQUssRUFBRVYsT0FBTyxFQUFFRixXQUFXLENBQUMsQ0FBQztFQUVqQyxvQkFDRVIsZ0RBQUE7SUFBS3VDLEVBQUUsS0FBQWEsTUFBQSxDQUFLL0MsT0FBTztFQUFtQixnQkFDcENMLGdEQUFBO0lBQUt1QyxFQUFFLEVBQUVsQztFQUFRLENBQUUsQ0FDaEIsQ0FBQztBQUVWLENBQUM7QUFFRFMsU0FBUyxDQUFDVixTQUFTLEdBQUdBLFNBQVM7QUFFL0IsK0RBQWVVLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL0xpbmUvTGluZUdyYXBoLmpzeD8zMWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENhcmJvbiBmcm9tICdAY2VybmVyL2NhcmJvbi1ncmFwaHMnO1xuaW1wb3J0ICcuLi9HcmFwaC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgJy4vTGluZUdyYXBoLm1vZHVsZS5zY3NzJztcbmltcG9ydCB1dGlscyBmcm9tICdAY2VybmVyL2NhcmJvbi1ncmFwaHMvbGliL2pzL2hlbHBlcnMvdXRpbHMnO1xuXG5jb25zdCBwcm9wVHlwZXMgPSB7XG4gIC8qKlxuICAgKiBUaGUgdW5pcXVlIGlkZW50aWZpZXIgZm9yIHRoZSBncmFwaCBhbmQgcHJlZml4IGZvciB0aGUgY2FudmFzLlxuICAgKi9cbiAgZ3JhcGhJRDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogR3JhcGggY29uZmlndXJhdGlvbiBvYmplY3QuXG4gICAqL1xuICBncmFwaENvbmZpZzogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAvKipcbiAgICogRGF0YSB0byBiZSBkaXNwbGF5ZWQgaW4gZ3JhcGguXG4gICAqL1xuICBkYXRhc2V0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub2JqZWN0KSxcbiAgLyoqXG4gICAqIFRpbWVvdXQgdG8gZGlzcGxheSBtdWx0aXBsZSBkYXRhIGNvbnRlbnRzIGluIHNwZWNpZmljIHRpbWUgaW50ZXJ2YWwuXG4gICAqL1xuICB0aW1lb3V0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubnVtYmVyKSxcbn07XG5cbmNvbnN0IExpbmVHcmFwaCA9ICh7XG4gIGdyYXBoQ29uZmlnLCBkYXRhc2V0LCBncmFwaElELCB0aW1lb3V0LFxufSkgPT4ge1xuICBjb25zdCBbZ3JhcGgsIHNldEdyYXBoXSA9IFJlYWN0LnVzZVN0YXRlKCk7XG4gIGNvbnN0IGdyYXBoTG9hZGVkUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIGNvbnN0IHNraXByZWZsb3dSZWYgPSBSZWFjdC51c2VSZWYoKTtcblxuICAvLyBjcmVhdGlvbiBvZiBjYW52YXNcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWdyYXBoKSB7XG4gICAgICBzZXRHcmFwaChDYXJib24uYXBpLmdyYXBoKGdyYXBoQ29uZmlnKSk7XG4gICAgfVxuICB9LCBbZ3JhcGgsIGdyYXBoQ29uZmlnXSk7XG5cbiAgLy8gaW5pdGlhbCBkYXRhc2V0IGxvYWRcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWdyYXBoIHx8IGdyYXBoTG9hZGVkUmVmLmN1cnJlbnQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHRpbWVvdXRJZHMgPSBbXTtcblxuICAgIGlmIChkYXRhc2V0KSB7XG4gICAgICBpZiAodGltZW91dCkge1xuICAgICAgICBkYXRhc2V0LmZvckVhY2goKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dChcbiAgICAgICAgICAgICgpID0+IChncmFwaC5ncmFwaENvbnRhaW5lclxuICAgICAgICAgICAgICA/IGdyYXBoLmxvYWRDb250ZW50KENhcmJvbi5hcGkubGluZShkYXRhKSlcbiAgICAgICAgICAgICAgOiAnJyksXG4gICAgICAgICAgICB0aW1lb3V0W2luZGV4XSxcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgdGltZW91dElkcy5wdXNoKHRpbWVvdXRJZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YXNldC5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICAgICAgZ3JhcGgubG9hZENvbnRlbnQoQ2FyYm9uLmFwaS5saW5lKGRhdGEpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGdyYXBoTG9hZGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aW1lb3V0SWRzLmZvckVhY2goKGlkKSA9PiB7IGNsZWFyVGltZW91dChpZCk7IH0pO1xuICAgIH07XG4gIH0sIFtncmFwaCwgZGF0YXNldCwgdGltZW91dF0pO1xuXG4gIC8vIHBhbm5pbmdcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWdyYXBoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghc2tpcHJlZmxvd1JlZi5jdXJyZW50KSB7XG4gICAgICBza2lwcmVmbG93UmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGdyYXBoLmNvbmZpZy5heGlzLngudXBwZXJMaW1pdCA9IGdyYXBoQ29uZmlnLmF4aXMueC51cHBlckxpbWl0O1xuICAgIGdyYXBoLmNvbmZpZy5heGlzLngubG93ZXJMaW1pdCA9IGdyYXBoQ29uZmlnLmF4aXMueC5sb3dlckxpbWl0O1xuXG4gICAgY29uc3QgbmV3RGF0YXNldCA9IHtcbiAgICAgIHBhbkRhdGE6IHV0aWxzLmRlZXBDbG9uZShkYXRhc2V0LnBhbkRhdGEpLFxuICAgICAgZXZlbnRsaW5lOiB1dGlscy5kZWVwQ2xvbmUoZGF0YXNldC5ldmVudGxpbmUpLFxuICAgIH07XG5cbiAgICBncmFwaC5yZWZsb3dNdWx0aXBsZURhdGFzZXRzKG5ld0RhdGFzZXQpO1xuICB9LCBbZ3JhcGgsIGRhdGFzZXQsIGdyYXBoQ29uZmlnXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPXtgJHtncmFwaElEfS1jYW52YXNDb250YWluZXJgfT5cbiAgICAgIDxkaXYgaWQ9e2dyYXBoSUR9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5MaW5lR3JhcGgucHJvcFR5cGVzID0gcHJvcFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBMaW5lR3JhcGg7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJDYXJib24iLCJ1dGlscyIsInByb3BUeXBlcyIsImdyYXBoSUQiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiZ3JhcGhDb25maWciLCJvYmplY3QiLCJkYXRhc2V0IiwiYXJyYXlPZiIsInRpbWVvdXQiLCJudW1iZXIiLCJMaW5lR3JhcGgiLCJfcmVmIiwiX1JlYWN0JHVzZVN0YXRlIiwidXNlU3RhdGUiLCJfUmVhY3QkdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJncmFwaCIsInNldEdyYXBoIiwiZ3JhcGhMb2FkZWRSZWYiLCJ1c2VSZWYiLCJza2lwcmVmbG93UmVmIiwidXNlRWZmZWN0IiwiYXBpIiwiY3VycmVudCIsInVuZGVmaW5lZCIsInRpbWVvdXRJZHMiLCJmb3JFYWNoIiwiZGF0YSIsImluZGV4IiwidGltZW91dElkIiwic2V0VGltZW91dCIsImdyYXBoQ29udGFpbmVyIiwibG9hZENvbnRlbnQiLCJsaW5lIiwicHVzaCIsImlkIiwiY2xlYXJUaW1lb3V0IiwiY29uZmlnIiwiYXhpcyIsIngiLCJ1cHBlckxpbWl0IiwibG93ZXJMaW1pdCIsIm5ld0RhdGFzZXQiLCJwYW5EYXRhIiwiZGVlcENsb25lIiwiZXZlbnRsaW5lIiwicmVmbG93TXVsdGlwbGVEYXRhc2V0cyIsImNyZWF0ZUVsZW1lbnQiLCJjb25jYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-graphs-src/components/Line/LineGraph.jsx\n");

/***/ })

}]);