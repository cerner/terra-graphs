"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkterra_graphs"] = self["webpackChunkterra_graphs"] || []).push([["packages_terra-graphs-docs_src_terra-dev-site_test_graphs_ScatterGraph_BasicScatterGraphs_Tim-ceea11"],{

/***/ "./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Scatter/scatterTimeseries.js":
/*!*********************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Scatter/scatterTimeseries.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/js/index.js\");\n\nvar getScatterTimeseriesConfig = function getScatterTimeseriesConfig(id) {\n  return {\n    bindTo: id,\n    axis: {\n      x: {\n        type: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.AXIS_TYPE.TIME_SERIES,\n        label: 'Datetime',\n        lowerLimit: new Date(2016, 0, 1, 0, 0).toISOString(),\n        upperLimit: new Date(2016, 0, 1, 23, 59).toISOString()\n      },\n      y: {\n        label: 'Line Set A',\n        lowerLimit: 10,\n        upperLimit: 30\n      },\n      y2: {\n        show: false,\n        label: 'Line Set B',\n        lowerLimit: 0,\n        upperLimit: 250\n      }\n    },\n    showLabel: true,\n    showLegend: true,\n    showShapes: true,\n    showVGrid: true,\n    showHGrid: true\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getScatterTimeseriesConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9ncmFwaENvbmZpZ09iamVjdHMvU2NhdHRlci9zY2F0dGVyVGltZXNlcmllcy5qcyIsIm1hcHBpbmdzIjoiOztBQUEyQztBQUUzQyxJQUFNQywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTBCQSxDQUFJQyxFQUFFO0VBQUEsT0FBTTtJQUMxQ0MsTUFBTSxFQUFFRCxFQUFFO0lBQ1ZFLElBQUksRUFBRTtNQUNKQyxDQUFDLEVBQUU7UUFDREMsSUFBSSxFQUFFTiw2REFBTSxDQUFDTyxPQUFPLENBQUNDLFNBQVMsQ0FBQ0MsV0FBVztRQUMxQ0MsS0FBSyxFQUFFLFVBQVU7UUFDakJDLFVBQVUsRUFBRSxJQUFJQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDQyxXQUFXLENBQUMsQ0FBQztRQUNwREMsVUFBVSxFQUFFLElBQUlGLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUNDLFdBQVcsQ0FBQztNQUN2RCxDQUFDO01BQ0RFLENBQUMsRUFBRTtRQUNETCxLQUFLLEVBQUUsWUFBWTtRQUNuQkMsVUFBVSxFQUFFLEVBQUU7UUFDZEcsVUFBVSxFQUFFO01BQ2QsQ0FBQztNQUNERSxFQUFFLEVBQUU7UUFDRkMsSUFBSSxFQUFFLEtBQUs7UUFDWFAsS0FBSyxFQUFFLFlBQVk7UUFDbkJDLFVBQVUsRUFBRSxDQUFDO1FBQ2JHLFVBQVUsRUFBRTtNQUNkO0lBQ0YsQ0FBQztJQUNESSxTQUFTLEVBQUUsSUFBSTtJQUNmQyxVQUFVLEVBQUUsSUFBSTtJQUNoQkMsVUFBVSxFQUFFLElBQUk7SUFDaEJDLFNBQVMsRUFBRSxJQUFJO0lBQ2ZDLFNBQVMsRUFBRTtFQUNiLENBQUM7QUFBQSxDQUFDO0FBRUYsK0RBQWVyQiwwQkFBMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9ncmFwaENvbmZpZ09iamVjdHMvU2NhdHRlci9zY2F0dGVyVGltZXNlcmllcy5qcz9lYTFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJib24gZnJvbSAnQGNlcm5lci9jYXJib24tZ3JhcGhzJztcblxuY29uc3QgZ2V0U2NhdHRlclRpbWVzZXJpZXNDb25maWcgPSAoaWQpID0+ICh7XG4gIGJpbmRUbzogaWQsXG4gIGF4aXM6IHtcbiAgICB4OiB7XG4gICAgICB0eXBlOiBDYXJib24uaGVscGVycy5BWElTX1RZUEUuVElNRV9TRVJJRVMsXG4gICAgICBsYWJlbDogJ0RhdGV0aW1lJyxcbiAgICAgIGxvd2VyTGltaXQ6IG5ldyBEYXRlKDIwMTYsIDAsIDEsIDAsIDApLnRvSVNPU3RyaW5nKCksXG4gICAgICB1cHBlckxpbWl0OiBuZXcgRGF0ZSgyMDE2LCAwLCAxLCAyMywgNTkpLnRvSVNPU3RyaW5nKCksXG4gICAgfSxcbiAgICB5OiB7XG4gICAgICBsYWJlbDogJ0xpbmUgU2V0IEEnLFxuICAgICAgbG93ZXJMaW1pdDogMTAsXG4gICAgICB1cHBlckxpbWl0OiAzMCxcbiAgICB9LFxuICAgIHkyOiB7XG4gICAgICBzaG93OiBmYWxzZSxcbiAgICAgIGxhYmVsOiAnTGluZSBTZXQgQicsXG4gICAgICBsb3dlckxpbWl0OiAwLFxuICAgICAgdXBwZXJMaW1pdDogMjUwLFxuICAgIH0sXG4gIH0sXG4gIHNob3dMYWJlbDogdHJ1ZSxcbiAgc2hvd0xlZ2VuZDogdHJ1ZSxcbiAgc2hvd1NoYXBlczogdHJ1ZSxcbiAgc2hvd1ZHcmlkOiB0cnVlLFxuICBzaG93SEdyaWQ6IHRydWUsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0U2NhdHRlclRpbWVzZXJpZXNDb25maWc7XG4iXSwibmFtZXMiOlsiQ2FyYm9uIiwiZ2V0U2NhdHRlclRpbWVzZXJpZXNDb25maWciLCJpZCIsImJpbmRUbyIsImF4aXMiLCJ4IiwidHlwZSIsImhlbHBlcnMiLCJBWElTX1RZUEUiLCJUSU1FX1NFUklFUyIsImxhYmVsIiwibG93ZXJMaW1pdCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInVwcGVyTGltaXQiLCJ5IiwieTIiLCJzaG93Iiwic2hvd0xhYmVsIiwic2hvd0xlZ2VuZCIsInNob3dTaGFwZXMiLCJzaG93VkdyaWQiLCJzaG93SEdyaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Scatter/scatterTimeseries.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/ScatterGraph/BasicScatterGraphs/Timeseries.test.jsx":
/*!***********************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/ScatterGraph/BasicScatterGraphs/Timeseries.test.jsx ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/helpers/utils */ \"./packages/carbon-graphs/src/js/helpers/utils.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_graphs_src_components_Scatter_ScatterGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-graphs-src/components/Scatter/ScatterGraph */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Scatter/ScatterGraph.jsx\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_dev_site_ExampleGraphContainer_ExampleGraphContainer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss */ \"./packages/terra-graphs-docs/src/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Scatter_scatterTimeseries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Scatter/scatterTimeseries */ \"./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Scatter/scatterTimeseries.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Scatter_dataset1timeseries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Scatter/dataset1timeseries */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/Scatter/dataset1timeseries.js\");\n\n\n\n\n\n\nvar graphConfig = _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone((0,_cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Scatter_scatterTimeseries__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('#timeseriesScatterGraph'));\nvar dataset = [_cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Scatter_dataset1timeseries__WEBPACK_IMPORTED_MODULE_5__[\"default\"])];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"tooltip\",\n    className: \"initial-tooltip\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_cerner_terra_graphs_docs_lib_terra_graphs_src_components_Scatter_ScatterGraph__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    graphID: \"timeseriesScatterGraph\",\n    graphConfig: graphConfig,\n    dataset: dataset\n  }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9ncmFwaHMvU2NhdHRlckdyYXBoL0Jhc2ljU2NhdHRlckdyYXBocy9UaW1lc2VyaWVzLnRlc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFDcUM7QUFDMkM7QUFDSTtBQUNXO0FBQ1Q7QUFFaEgsSUFBTUssV0FBVyxHQUFHSixrRkFBSyxDQUFDSyxTQUFTLENBQUNILHVJQUFjLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUM5RSxJQUFNSSxPQUFPLEdBQUcsQ0FBQ04sa0ZBQUssQ0FBQ0ssU0FBUyxDQUFDRiw2SEFBVyxDQUFDLENBQUM7QUFFOUMsK0RBQWU7RUFBQSxvQkFDYkosZ0RBQUEsQ0FBQUEsMkNBQUEscUJBQ0VBLGdEQUFBO0lBQUtVLEVBQUUsRUFBQyxTQUFTO0lBQUNDLFNBQVMsRUFBQztFQUFpQixDQUFFLENBQUMsZUFDaERYLGdEQUFBLENBQUNFLHNIQUFZO0lBQUNVLE9BQU8sRUFBQyx3QkFBd0I7SUFBQ1AsV0FBVyxFQUFFQSxXQUFZO0lBQUNFLE9BQU8sRUFBRUE7RUFBUSxDQUFFLENBQzVGLENBQUM7QUFBQSxDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVycmEtZ3JhcGhzLy4vcGFja2FnZXMvdGVycmEtZ3JhcGhzLWRvY3Mvc3JjL3RlcnJhLWRldi1zaXRlL3Rlc3QvZ3JhcGhzL1NjYXR0ZXJHcmFwaC9CYXNpY1NjYXR0ZXJHcmFwaHMvVGltZXNlcmllcy50ZXN0LmpzeD8yNWEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGNlcm5lci9jYXJib24tZ3JhcGhzL2xpYi9qcy9oZWxwZXJzL3V0aWxzJztcbmltcG9ydCBTY2F0dGVyR3JhcGggZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL1NjYXR0ZXIvU2NhdHRlckdyYXBoJztcbmltcG9ydCAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvdGVycmEtZGV2LXNpdGUvRXhhbXBsZUdyYXBoQ29udGFpbmVyL0V4YW1wbGVHcmFwaENvbnRhaW5lci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgZ2V0R3JhcGhDb25maWcgZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvZXhhbXBsZS1kYXRhc2V0cy9ncmFwaENvbmZpZ09iamVjdHMvU2NhdHRlci9zY2F0dGVyVGltZXNlcmllcyc7XG5pbXBvcnQgZXhhbXBsZURhdGEgZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9TY2F0dGVyL2RhdGFzZXQxdGltZXNlcmllcyc7XG5cbmNvbnN0IGdyYXBoQ29uZmlnID0gdXRpbHMuZGVlcENsb25lKGdldEdyYXBoQ29uZmlnKCcjdGltZXNlcmllc1NjYXR0ZXJHcmFwaCcpKTtcbmNvbnN0IGRhdGFzZXQgPSBbdXRpbHMuZGVlcENsb25lKGV4YW1wbGVEYXRhKV07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPD5cbiAgICA8ZGl2IGlkPVwidG9vbHRpcFwiIGNsYXNzTmFtZT1cImluaXRpYWwtdG9vbHRpcFwiIC8+XG4gICAgPFNjYXR0ZXJHcmFwaCBncmFwaElEPVwidGltZXNlcmllc1NjYXR0ZXJHcmFwaFwiIGdyYXBoQ29uZmlnPXtncmFwaENvbmZpZ30gZGF0YXNldD17ZGF0YXNldH0gLz5cbiAgPC8+XG4pO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXRpbHMiLCJTY2F0dGVyR3JhcGgiLCJnZXRHcmFwaENvbmZpZyIsImV4YW1wbGVEYXRhIiwiZ3JhcGhDb25maWciLCJkZWVwQ2xvbmUiLCJkYXRhc2V0IiwiY3JlYXRlRWxlbWVudCIsIkZyYWdtZW50IiwiaWQiLCJjbGFzc05hbWUiLCJncmFwaElEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/ScatterGraph/BasicScatterGraphs/Timeseries.test.jsx\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-graphs-src/components/Scatter/ScatterGraph.jsx":
/*!*********************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-graphs-src/components/Scatter/ScatterGraph.jsx ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/js/index.js\");\n/* harmony import */ var _Graph_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Graph.module.scss */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Graph.module.scss\");\n/* harmony import */ var _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/helpers/utils */ \"./packages/carbon-graphs/src/js/helpers/utils.js\");\n\n\n\n\n\n\nvar propTypes = {\n  /**\n   * The unique identifier for the graph and prefix for the canvas.\n   */\n  graphID: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string).isRequired,\n  /**\n   * Graph configuration object.\n   */\n  graphConfig: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().object).isRequired,\n  /**\n   * Data to be displayed in graph.\n   */\n  dataset: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().object)),\n  /**\n   * Timeout to display multiple data contents in specific time interval.\n   */\n  timeout: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().number))\n};\nvar ScatterGraph = function ScatterGraph(_ref) {\n  var graphConfig = _ref.graphConfig,\n    dataset = _ref.dataset,\n    graphID = _ref.graphID,\n    timeout = _ref.timeout;\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(),\n    _React$useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n    graph = _React$useState2[0],\n    setGraph = _React$useState2[1];\n  var graphLoadedRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n  var skipreflowRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n\n  // creation of canvas\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {\n    if (!graph) {\n      setGraph(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].api.graph(graphConfig));\n    }\n  }, [graph, graphConfig]);\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {\n    if (!graph || graphLoadedRef.current) {\n      return undefined;\n    }\n    var timeoutIds = [];\n    if (dataset) {\n      if (timeout) {\n        dataset.forEach(function (data, index) {\n          var timeoutId = setTimeout(function () {\n            return graph.graphContainer ? graph.loadContent(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].api.scatter(data)) : '';\n          }, timeout[index]);\n          timeoutIds.push(timeoutId);\n        });\n      } else {\n        dataset.forEach(function (data) {\n          graph.loadContent(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].api.scatter(data));\n        });\n      }\n    }\n    graphLoadedRef.current = true;\n    return function () {\n      timeoutIds.forEach(function (id) {\n        clearTimeout(id);\n      });\n    };\n  }, [graph, dataset, timeout]);\n\n  // panning\n  react__WEBPACK_IMPORTED_MODULE_1__.useEffect(function () {\n    if (!graph) {\n      return;\n    }\n    if (!skipreflowRef.current) {\n      skipreflowRef.current = true;\n      return;\n    }\n    graph.config.axis.x.upperLimit = graphConfig.axis.x.upperLimit;\n    graph.config.axis.x.lowerLimit = graphConfig.axis.x.lowerLimit;\n    var newDataset = {\n      panData: _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].deepClone(dataset.panData),\n      eventline: _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_4__[\"default\"].deepClone(dataset.eventline)\n    };\n    graph.reflowMultipleDatasets(newDataset);\n  }, [graph, dataset, graphConfig]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: \"\".concat(graphID, \"-canvasContainer\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    id: graphID\n  }));\n};\nScatterGraph.propTypes = propTypes;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScatterGraph);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL1NjYXR0ZXIvU2NhdHRlckdyYXBoLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDUztBQUNRO0FBQ2I7QUFDaUM7QUFFL0QsSUFBTUksU0FBUyxHQUFHO0VBQ2hCO0FBQ0Y7QUFDQTtFQUNFQyxPQUFPLEVBQUVKLDBEQUFnQixDQUFDTSxVQUFVO0VBQ3BDO0FBQ0Y7QUFDQTtFQUNFQyxXQUFXLEVBQUVQLDBEQUFnQixDQUFDTSxVQUFVO0VBQ3hDO0FBQ0Y7QUFDQTtFQUNFRyxPQUFPLEVBQUVULHlEQUFpQixDQUFDQSwwREFBZ0IsQ0FBQztFQUM1QztBQUNGO0FBQ0E7RUFDRVcsT0FBTyxFQUFFWCx5REFBaUIsQ0FBQ0EsMERBQWdCO0FBQzdDLENBQUM7QUFFRCxJQUFNYSxZQUFZLEdBQUcsU0FBZkEsWUFBWUEsQ0FBQUMsSUFBQSxFQUVaO0VBQUEsSUFESlAsV0FBVyxHQUFBTyxJQUFBLENBQVhQLFdBQVc7SUFBRUUsT0FBTyxHQUFBSyxJQUFBLENBQVBMLE9BQU87SUFBRUwsT0FBTyxHQUFBVSxJQUFBLENBQVBWLE9BQU87SUFBRU8sT0FBTyxHQUFBRyxJQUFBLENBQVBILE9BQU87RUFFdEMsSUFBQUksZUFBQSxHQUEwQmhCLDJDQUFjLENBQUMsQ0FBQztJQUFBa0IsZ0JBQUEsR0FBQUMsZ0ZBQUEsQ0FBQUgsZUFBQTtJQUFuQ0ksS0FBSyxHQUFBRixnQkFBQTtJQUFFRyxRQUFRLEdBQUFILGdCQUFBO0VBQ3RCLElBQU1JLGNBQWMsR0FBR3RCLHlDQUFZLENBQUMsQ0FBQztFQUNyQyxJQUFNd0IsYUFBYSxHQUFHeEIseUNBQVksQ0FBQyxDQUFDOztFQUVwQztFQUNBQSw0Q0FBZSxDQUFDLFlBQU07SUFDcEIsSUFBSSxDQUFDb0IsS0FBSyxFQUFFO01BQ1ZDLFFBQVEsQ0FBQ25CLDZEQUFNLENBQUN3QixHQUFHLENBQUNOLEtBQUssQ0FBQ1osV0FBVyxDQUFDLENBQUM7SUFDekM7RUFDRixDQUFDLEVBQUUsQ0FBQ1ksS0FBSyxFQUFFWixXQUFXLENBQUMsQ0FBQztFQUV4QlIsNENBQWUsQ0FBQyxZQUFNO0lBQ3BCLElBQUksQ0FBQ29CLEtBQUssSUFBSUUsY0FBYyxDQUFDSyxPQUFPLEVBQUU7TUFDcEMsT0FBT0MsU0FBUztJQUNsQjtJQUNBLElBQU1DLFVBQVUsR0FBRyxFQUFFO0lBRXJCLElBQUluQixPQUFPLEVBQUU7TUFDWCxJQUFJRSxPQUFPLEVBQUU7UUFDWEYsT0FBTyxDQUFDb0IsT0FBTyxDQUFDLFVBQUNDLElBQUksRUFBRUMsS0FBSyxFQUFLO1VBQy9CLElBQU1DLFNBQVMsR0FBR0MsVUFBVSxDQUMxQjtZQUFBLE9BQU9kLEtBQUssQ0FBQ2UsY0FBYyxHQUN2QmYsS0FBSyxDQUFDZ0IsV0FBVyxDQUFDbEMsNkRBQU0sQ0FBQ3dCLEdBQUcsQ0FBQ1csT0FBTyxDQUFDTixJQUFJLENBQUMsQ0FBQyxHQUMzQyxFQUFFO1VBQUEsQ0FBQyxFQUNQbkIsT0FBTyxDQUFDb0IsS0FBSyxDQUNmLENBQUM7VUFFREgsVUFBVSxDQUFDUyxJQUFJLENBQUNMLFNBQVMsQ0FBQztRQUM1QixDQUFDLENBQUM7TUFDSixDQUFDLE1BQU07UUFDTHZCLE9BQU8sQ0FBQ29CLE9BQU8sQ0FBQyxVQUFDQyxJQUFJLEVBQUs7VUFDeEJYLEtBQUssQ0FBQ2dCLFdBQVcsQ0FBQ2xDLDZEQUFNLENBQUN3QixHQUFHLENBQUNXLE9BQU8sQ0FBQ04sSUFBSSxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDO01BQ0o7SUFDRjtJQUNBVCxjQUFjLENBQUNLLE9BQU8sR0FBRyxJQUFJO0lBQzdCLE9BQU8sWUFBTTtNQUNYRSxVQUFVLENBQUNDLE9BQU8sQ0FBQyxVQUFDUyxFQUFFLEVBQUs7UUFBRUMsWUFBWSxDQUFDRCxFQUFFLENBQUM7TUFBRSxDQUFDLENBQUM7SUFDbkQsQ0FBQztFQUNILENBQUMsRUFBRSxDQUFDbkIsS0FBSyxFQUFFVixPQUFPLEVBQUVFLE9BQU8sQ0FBQyxDQUFDOztFQUU3QjtFQUNBWiw0Q0FBZSxDQUFDLFlBQU07SUFDcEIsSUFBSSxDQUFDb0IsS0FBSyxFQUFFO01BQ1Y7SUFDRjtJQUNBLElBQUksQ0FBQ0ksYUFBYSxDQUFDRyxPQUFPLEVBQUU7TUFDMUJILGFBQWEsQ0FBQ0csT0FBTyxHQUFHLElBQUk7TUFDNUI7SUFDRjtJQUVBUCxLQUFLLENBQUNxQixNQUFNLENBQUNDLElBQUksQ0FBQ0MsQ0FBQyxDQUFDQyxVQUFVLEdBQUdwQyxXQUFXLENBQUNrQyxJQUFJLENBQUNDLENBQUMsQ0FBQ0MsVUFBVTtJQUM5RHhCLEtBQUssQ0FBQ3FCLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxDQUFDLENBQUNFLFVBQVUsR0FBR3JDLFdBQVcsQ0FBQ2tDLElBQUksQ0FBQ0MsQ0FBQyxDQUFDRSxVQUFVO0lBRTlELElBQU1DLFVBQVUsR0FBRztNQUNqQkMsT0FBTyxFQUFFNUMsa0ZBQUssQ0FBQzZDLFNBQVMsQ0FBQ3RDLE9BQU8sQ0FBQ3FDLE9BQU8sQ0FBQztNQUN6Q0UsU0FBUyxFQUFFOUMsa0ZBQUssQ0FBQzZDLFNBQVMsQ0FBQ3RDLE9BQU8sQ0FBQ3VDLFNBQVM7SUFDOUMsQ0FBQztJQUVEN0IsS0FBSyxDQUFDOEIsc0JBQXNCLENBQUNKLFVBQVUsQ0FBQztFQUMxQyxDQUFDLEVBQUUsQ0FBQzFCLEtBQUssRUFBRVYsT0FBTyxFQUFFRixXQUFXLENBQUMsQ0FBQztFQUVqQyxvQkFDRVIsZ0RBQUE7SUFBS3VDLEVBQUUsS0FBQWEsTUFBQSxDQUFLL0MsT0FBTztFQUFtQixnQkFDcENMLGdEQUFBO0lBQUt1QyxFQUFFLEVBQUVsQztFQUFRLENBQUUsQ0FDaEIsQ0FBQztBQUVWLENBQUM7QUFFRFMsWUFBWSxDQUFDVixTQUFTLEdBQUdBLFNBQVM7QUFFbEMsK0RBQWVVLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL1NjYXR0ZXIvU2NhdHRlckdyYXBoLmpzeD8xZWUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IENhcmJvbiBmcm9tICdAY2VybmVyL2NhcmJvbi1ncmFwaHMnO1xuaW1wb3J0ICcuLi9HcmFwaC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGNlcm5lci9jYXJib24tZ3JhcGhzL2xpYi9qcy9oZWxwZXJzL3V0aWxzJztcblxuY29uc3QgcHJvcFR5cGVzID0ge1xuICAvKipcbiAgICogVGhlIHVuaXF1ZSBpZGVudGlmaWVyIGZvciB0aGUgZ3JhcGggYW5kIHByZWZpeCBmb3IgdGhlIGNhbnZhcy5cbiAgICovXG4gIGdyYXBoSUQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIEdyYXBoIGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICAgKi9cbiAgZ3JhcGhDb25maWc6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgLyoqXG4gICAqIERhdGEgdG8gYmUgZGlzcGxheWVkIGluIGdyYXBoLlxuICAgKi9cbiAgZGF0YXNldDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gIC8qKlxuICAgKiBUaW1lb3V0IHRvIGRpc3BsYXkgbXVsdGlwbGUgZGF0YSBjb250ZW50cyBpbiBzcGVjaWZpYyB0aW1lIGludGVydmFsLlxuICAgKi9cbiAgdGltZW91dDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm51bWJlciksXG59O1xuXG5jb25zdCBTY2F0dGVyR3JhcGggPSAoe1xuICBncmFwaENvbmZpZywgZGF0YXNldCwgZ3JhcGhJRCwgdGltZW91dCxcbn0pID0+IHtcbiAgY29uc3QgW2dyYXBoLCBzZXRHcmFwaF0gPSBSZWFjdC51c2VTdGF0ZSgpO1xuICBjb25zdCBncmFwaExvYWRlZFJlZiA9IFJlYWN0LnVzZVJlZigpO1xuICBjb25zdCBza2lwcmVmbG93UmVmID0gUmVhY3QudXNlUmVmKCk7XG5cbiAgLy8gY3JlYXRpb24gb2YgY2FudmFzXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFncmFwaCkge1xuICAgICAgc2V0R3JhcGgoQ2FyYm9uLmFwaS5ncmFwaChncmFwaENvbmZpZykpO1xuICAgIH1cbiAgfSwgW2dyYXBoLCBncmFwaENvbmZpZ10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFncmFwaCB8fCBncmFwaExvYWRlZFJlZi5jdXJyZW50KSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCB0aW1lb3V0SWRzID0gW107XG5cbiAgICBpZiAoZGF0YXNldCkge1xuICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgZGF0YXNldC5mb3JFYWNoKChkYXRhLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAoKSA9PiAoZ3JhcGguZ3JhcGhDb250YWluZXJcbiAgICAgICAgICAgICAgPyBncmFwaC5sb2FkQ29udGVudChDYXJib24uYXBpLnNjYXR0ZXIoZGF0YSkpXG4gICAgICAgICAgICAgIDogJycpLFxuICAgICAgICAgICAgdGltZW91dFtpbmRleF0sXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHRpbWVvdXRJZHMucHVzaCh0aW1lb3V0SWQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFzZXQuZm9yRWFjaCgoZGF0YSkgPT4ge1xuICAgICAgICAgIGdyYXBoLmxvYWRDb250ZW50KENhcmJvbi5hcGkuc2NhdHRlcihkYXRhKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBncmFwaExvYWRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdGltZW91dElkcy5mb3JFYWNoKChpZCkgPT4geyBjbGVhclRpbWVvdXQoaWQpOyB9KTtcbiAgICB9O1xuICB9LCBbZ3JhcGgsIGRhdGFzZXQsIHRpbWVvdXRdKTtcblxuICAvLyBwYW5uaW5nXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFncmFwaCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXNraXByZWZsb3dSZWYuY3VycmVudCkge1xuICAgICAgc2tpcHJlZmxvd1JlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBncmFwaC5jb25maWcuYXhpcy54LnVwcGVyTGltaXQgPSBncmFwaENvbmZpZy5heGlzLngudXBwZXJMaW1pdDtcbiAgICBncmFwaC5jb25maWcuYXhpcy54Lmxvd2VyTGltaXQgPSBncmFwaENvbmZpZy5heGlzLngubG93ZXJMaW1pdDtcblxuICAgIGNvbnN0IG5ld0RhdGFzZXQgPSB7XG4gICAgICBwYW5EYXRhOiB1dGlscy5kZWVwQ2xvbmUoZGF0YXNldC5wYW5EYXRhKSxcbiAgICAgIGV2ZW50bGluZTogdXRpbHMuZGVlcENsb25lKGRhdGFzZXQuZXZlbnRsaW5lKSxcbiAgICB9O1xuXG4gICAgZ3JhcGgucmVmbG93TXVsdGlwbGVEYXRhc2V0cyhuZXdEYXRhc2V0KTtcbiAgfSwgW2dyYXBoLCBkYXRhc2V0LCBncmFwaENvbmZpZ10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD17YCR7Z3JhcGhJRH0tY2FudmFzQ29udGFpbmVyYH0+XG4gICAgICA8ZGl2IGlkPXtncmFwaElEfSAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU2NhdHRlckdyYXBoLnByb3BUeXBlcyA9IHByb3BUeXBlcztcblxuZXhwb3J0IGRlZmF1bHQgU2NhdHRlckdyYXBoO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiQ2FyYm9uIiwidXRpbHMiLCJwcm9wVHlwZXMiLCJncmFwaElEIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImdyYXBoQ29uZmlnIiwib2JqZWN0IiwiZGF0YXNldCIsImFycmF5T2YiLCJ0aW1lb3V0IiwibnVtYmVyIiwiU2NhdHRlckdyYXBoIiwiX3JlZiIsIl9SZWFjdCR1c2VTdGF0ZSIsInVzZVN0YXRlIiwiX1JlYWN0JHVzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZ3JhcGgiLCJzZXRHcmFwaCIsImdyYXBoTG9hZGVkUmVmIiwidXNlUmVmIiwic2tpcHJlZmxvd1JlZiIsInVzZUVmZmVjdCIsImFwaSIsImN1cnJlbnQiLCJ1bmRlZmluZWQiLCJ0aW1lb3V0SWRzIiwiZm9yRWFjaCIsImRhdGEiLCJpbmRleCIsInRpbWVvdXRJZCIsInNldFRpbWVvdXQiLCJncmFwaENvbnRhaW5lciIsImxvYWRDb250ZW50Iiwic2NhdHRlciIsInB1c2giLCJpZCIsImNsZWFyVGltZW91dCIsImNvbmZpZyIsImF4aXMiLCJ4IiwidXBwZXJMaW1pdCIsImxvd2VyTGltaXQiLCJuZXdEYXRhc2V0IiwicGFuRGF0YSIsImRlZXBDbG9uZSIsImV2ZW50bGluZSIsInJlZmxvd011bHRpcGxlRGF0YXNldHMiLCJjcmVhdGVFbGVtZW50IiwiY29uY2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-graphs-src/components/Scatter/ScatterGraph.jsx\n");

/***/ })

}]);