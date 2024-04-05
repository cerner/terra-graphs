"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkterra_graphs"] = self["webpackChunkterra_graphs"] || []).push([["packages_terra-graphs-docs_src_terra-dev-site_test_graphs_General_Padding_CustomLegendPlaceme-124560"],{

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConfiguration.b/examples/GraphWithCustomLegendDom.jsx":
/*!***********************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConfiguration.b/examples/GraphWithCustomLegendDom.jsx ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n/* eslint-disable react/forbid-dom-props */\n\n\n\n//  graph configuration object\n\nvar graphConfig = {\n  bindTo: '#custom-legend-graph',\n  bindLegendTo: '#custom-legend-node',\n  axis: {\n    x: {\n      show: true,\n      label: 'x axis',\n      lowerLimit: 80,\n      upperLimit: 280\n    },\n    y: {\n      show: true,\n      label: 'y axis',\n      lowerLimit: -18,\n      upperLimit: 18\n    }\n  }\n};\n\n//  graph dataset\n\nvar dataset1 = {\n  key: 'uid_1',\n  label: {\n    display: 'Data Label 1'\n  },\n  color: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.COLORS.BLACK,\n  values: [{\n    x: 87,\n    y: -2\n  }, {\n    x: 95,\n    y: 1\n  }, {\n    x: 103,\n    y: -4\n  }, {\n    x: 109,\n    y: -2\n  }, {\n    x: 128,\n    y: 3\n  }, {\n    x: 145,\n    y: 28\n  }, {\n    x: 151,\n    y: 7\n  }, {\n    x: 164,\n    y: 10\n  }, {\n    x: 177,\n    y: 1\n  }, {\n    x: 192,\n    y: 6\n  }, {\n    x: 203,\n    y: -21\n  }, {\n    x: 209,\n    y: -3\n  }, {\n    x: 246,\n    y: 3\n  }]\n};\n\n// graph rendering\n\nvar CustomLegendDomExample = function CustomLegendDomExample() {\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {\n    var graph = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.graph(graphConfig);\n    graph.loadContent(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.line(dataset1));\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"custom-legend-example\",\n    style: {\n      display: 'flex',\n      width: '100%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"custom-legend-node\",\n    style: {\n      width: '20%'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      width: '80%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"custom-legend-graph\"\n  })));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomLegendDomExample);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvZ3JhcGgvQ29yZUNvbmZpZ3VyYXRpb24uYi9leGFtcGxlcy9HcmFwaFdpdGhDdXN0b21MZWdlbmREb20uanN4IiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzBCO0FBQ2lCOztBQUUzQzs7QUFFQSxJQUFNRSxXQUFXLEdBQUc7RUFDbEJDLE1BQU0sRUFBRSxzQkFBc0I7RUFDOUJDLFlBQVksRUFBRSxxQkFBcUI7RUFDbkNDLElBQUksRUFBRTtJQUNKQyxDQUFDLEVBQUU7TUFDREMsSUFBSSxFQUFFLElBQUk7TUFDVkMsS0FBSyxFQUFFLFFBQVE7TUFDZkMsVUFBVSxFQUFFLEVBQUU7TUFDZEMsVUFBVSxFQUFFO0lBQ2QsQ0FBQztJQUNEQyxDQUFDLEVBQUU7TUFDREosSUFBSSxFQUFFLElBQUk7TUFDVkMsS0FBSyxFQUFFLFFBQVE7TUFDZkMsVUFBVSxFQUFFLENBQUMsRUFBRTtNQUNmQyxVQUFVLEVBQUU7SUFDZDtFQUNGO0FBQ0YsQ0FBQzs7QUFFRDs7QUFFQSxJQUFNRSxRQUFRLEdBQUc7RUFDZkMsR0FBRyxFQUFFLE9BQU87RUFDWkwsS0FBSyxFQUFFO0lBQ0xNLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFDREMsS0FBSyxFQUFFZCw2REFBTSxDQUFDZSxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztFQUNsQ0MsTUFBTSxFQUFFLENBQ047SUFBRWIsQ0FBQyxFQUFFLEVBQUU7SUFBRUssQ0FBQyxFQUFFLENBQUM7RUFBRSxDQUFDLEVBQ2hCO0lBQUVMLENBQUMsRUFBRSxFQUFFO0lBQUVLLENBQUMsRUFBRTtFQUFFLENBQUMsRUFDZjtJQUFFTCxDQUFDLEVBQUUsR0FBRztJQUFFSyxDQUFDLEVBQUUsQ0FBQztFQUFFLENBQUMsRUFDakI7SUFBRUwsQ0FBQyxFQUFFLEdBQUc7SUFBRUssQ0FBQyxFQUFFLENBQUM7RUFBRSxDQUFDLEVBQ2pCO0lBQUVMLENBQUMsRUFBRSxHQUFHO0lBQUVLLENBQUMsRUFBRTtFQUFFLENBQUMsRUFDaEI7SUFBRUwsQ0FBQyxFQUFFLEdBQUc7SUFBRUssQ0FBQyxFQUFFO0VBQUcsQ0FBQyxFQUNqQjtJQUFFTCxDQUFDLEVBQUUsR0FBRztJQUFFSyxDQUFDLEVBQUU7RUFBRSxDQUFDLEVBQ2hCO0lBQUVMLENBQUMsRUFBRSxHQUFHO0lBQUVLLENBQUMsRUFBRTtFQUFHLENBQUMsRUFDakI7SUFBRUwsQ0FBQyxFQUFFLEdBQUc7SUFBRUssQ0FBQyxFQUFFO0VBQUUsQ0FBQyxFQUNoQjtJQUFFTCxDQUFDLEVBQUUsR0FBRztJQUFFSyxDQUFDLEVBQUU7RUFBRSxDQUFDLEVBQ2hCO0lBQUVMLENBQUMsRUFBRSxHQUFHO0lBQUVLLENBQUMsRUFBRSxDQUFDO0VBQUcsQ0FBQyxFQUNsQjtJQUFFTCxDQUFDLEVBQUUsR0FBRztJQUFFSyxDQUFDLEVBQUUsQ0FBQztFQUFFLENBQUMsRUFDakI7SUFBRUwsQ0FBQyxFQUFFLEdBQUc7SUFBRUssQ0FBQyxFQUFFO0VBQUUsQ0FBQztBQUVwQixDQUFDOztBQUVEOztBQUVBLElBQU1TLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBc0JBLENBQUEsRUFBUztFQUNuQ3BCLDRDQUFlLENBQUMsWUFBTTtJQUNwQixJQUFNc0IsS0FBSyxHQUFHckIsNkRBQU0sQ0FBQ3NCLEdBQUcsQ0FBQ0QsS0FBSyxDQUFDcEIsV0FBVyxDQUFDO0lBQzNDb0IsS0FBSyxDQUFDRSxXQUFXLENBQUN2Qiw2REFBTSxDQUFDc0IsR0FBRyxDQUFDRSxJQUFJLENBQUNiLFFBQVEsQ0FBQyxDQUFDO0VBQzlDLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTixvQkFDRVosZ0RBQUE7SUFBSzJCLEVBQUUsRUFBQyx1QkFBdUI7SUFBQ0MsS0FBSyxFQUFFO01BQUVkLE9BQU8sRUFBRSxNQUFNO01BQUVlLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ3hFN0IsZ0RBQUE7SUFBSzJCLEVBQUUsRUFBQyxvQkFBb0I7SUFBQ0MsS0FBSyxFQUFFO01BQUVDLEtBQUssRUFBRTtJQUFNO0VBQUUsQ0FBRSxDQUFDLGVBQ3hEN0IsZ0RBQUE7SUFBSzRCLEtBQUssRUFBRTtNQUFFQyxLQUFLLEVBQUU7SUFBTTtFQUFFLGdCQUMzQjdCLGdEQUFBO0lBQUsyQixFQUFFLEVBQUM7RUFBcUIsQ0FBRSxDQUM1QixDQUNGLENBQUM7QUFFVixDQUFDO0FBRUQsK0RBQWVQLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy90ZXJyYS1kZXYtc2l0ZS9ncmFwaC9Db3JlQ29uZmlndXJhdGlvbi5iL2V4YW1wbGVzL0dyYXBoV2l0aEN1c3RvbUxlZ2VuZERvbS5qc3g/ZjVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtZG9tLXByb3BzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcmJvbiBmcm9tICdAY2VybmVyL2NhcmJvbi1ncmFwaHMnO1xuXG4vLyAgZ3JhcGggY29uZmlndXJhdGlvbiBvYmplY3RcblxuY29uc3QgZ3JhcGhDb25maWcgPSB7XG4gIGJpbmRUbzogJyNjdXN0b20tbGVnZW5kLWdyYXBoJyxcbiAgYmluZExlZ2VuZFRvOiAnI2N1c3RvbS1sZWdlbmQtbm9kZScsXG4gIGF4aXM6IHtcbiAgICB4OiB7XG4gICAgICBzaG93OiB0cnVlLFxuICAgICAgbGFiZWw6ICd4IGF4aXMnLFxuICAgICAgbG93ZXJMaW1pdDogODAsXG4gICAgICB1cHBlckxpbWl0OiAyODAsXG4gICAgfSxcbiAgICB5OiB7XG4gICAgICBzaG93OiB0cnVlLFxuICAgICAgbGFiZWw6ICd5IGF4aXMnLFxuICAgICAgbG93ZXJMaW1pdDogLTE4LFxuICAgICAgdXBwZXJMaW1pdDogMTgsXG4gICAgfSxcbiAgfSxcbn07XG5cbi8vICBncmFwaCBkYXRhc2V0XG5cbmNvbnN0IGRhdGFzZXQxID0ge1xuICBrZXk6ICd1aWRfMScsXG4gIGxhYmVsOiB7XG4gICAgZGlzcGxheTogJ0RhdGEgTGFiZWwgMScsXG4gIH0sXG4gIGNvbG9yOiBDYXJib24uaGVscGVycy5DT0xPUlMuQkxBQ0ssXG4gIHZhbHVlczogW1xuICAgIHsgeDogODcsIHk6IC0yIH0sXG4gICAgeyB4OiA5NSwgeTogMSB9LFxuICAgIHsgeDogMTAzLCB5OiAtNCB9LFxuICAgIHsgeDogMTA5LCB5OiAtMiB9LFxuICAgIHsgeDogMTI4LCB5OiAzIH0sXG4gICAgeyB4OiAxNDUsIHk6IDI4IH0sXG4gICAgeyB4OiAxNTEsIHk6IDcgfSxcbiAgICB7IHg6IDE2NCwgeTogMTAgfSxcbiAgICB7IHg6IDE3NywgeTogMSB9LFxuICAgIHsgeDogMTkyLCB5OiA2IH0sXG4gICAgeyB4OiAyMDMsIHk6IC0yMSB9LFxuICAgIHsgeDogMjA5LCB5OiAtMyB9LFxuICAgIHsgeDogMjQ2LCB5OiAzIH0sXG4gIF0sXG59O1xuXG4vLyBncmFwaCByZW5kZXJpbmdcblxuY29uc3QgQ3VzdG9tTGVnZW5kRG9tRXhhbXBsZSA9ICgpID0+IHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBncmFwaCA9IENhcmJvbi5hcGkuZ3JhcGgoZ3JhcGhDb25maWcpO1xuICAgIGdyYXBoLmxvYWRDb250ZW50KENhcmJvbi5hcGkubGluZShkYXRhc2V0MSkpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImN1c3RvbS1sZWdlbmQtZXhhbXBsZVwiIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4Jywgd2lkdGg6ICcxMDAlJyB9fT5cbiAgICAgIDxkaXYgaWQ9XCJjdXN0b20tbGVnZW5kLW5vZGVcIiBzdHlsZT17eyB3aWR0aDogJzIwJScgfX0gLz5cbiAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICc4MCUnIH19PlxuICAgICAgICA8ZGl2IGlkPVwiY3VzdG9tLWxlZ2VuZC1ncmFwaFwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUxlZ2VuZERvbUV4YW1wbGU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJib24iLCJncmFwaENvbmZpZyIsImJpbmRUbyIsImJpbmRMZWdlbmRUbyIsImF4aXMiLCJ4Iiwic2hvdyIsImxhYmVsIiwibG93ZXJMaW1pdCIsInVwcGVyTGltaXQiLCJ5IiwiZGF0YXNldDEiLCJrZXkiLCJkaXNwbGF5IiwiY29sb3IiLCJoZWxwZXJzIiwiQ09MT1JTIiwiQkxBQ0siLCJ2YWx1ZXMiLCJDdXN0b21MZWdlbmREb21FeGFtcGxlIiwidXNlRWZmZWN0IiwiZ3JhcGgiLCJhcGkiLCJsb2FkQ29udGVudCIsImxpbmUiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJzdHlsZSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConfiguration.b/examples/GraphWithCustomLegendDom.jsx\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/General/Padding/CustomLegendPlacement.test.jsx":
/*!******************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/General/Padding/CustomLegendPlacement.test.jsx ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _graph_CoreConfiguration_b_examples_GraphWithCustomLegendDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../graph/CoreConfiguration.b/examples/GraphWithCustomLegendDom */ \"./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConfiguration.b/examples/GraphWithCustomLegendDom.jsx\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_graph_CoreConfiguration_b_examples_GraphWithCustomLegendDom__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9ncmFwaHMvR2VuZXJhbC9QYWRkaW5nL0N1c3RvbUxlZ2VuZFBsYWNlbWVudC50ZXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7QUFBMEI7QUFDbUY7QUFFN0csK0RBQWU7RUFBQSxvQkFBTUEsZ0RBQUEsQ0FBQ0Msb0dBQXNCLE1BQUUsQ0FBQztBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVycmEtZ3JhcGhzLy4vcGFja2FnZXMvdGVycmEtZ3JhcGhzLWRvY3Mvc3JjL3RlcnJhLWRldi1zaXRlL3Rlc3QvZ3JhcGhzL0dlbmVyYWwvUGFkZGluZy9DdXN0b21MZWdlbmRQbGFjZW1lbnQudGVzdC5qc3g/NmJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEN1c3RvbUxlZ2VuZERvbUV4YW1wbGUgZnJvbSAnLi4vLi4vLi4vLi4vZ3JhcGgvQ29yZUNvbmZpZ3VyYXRpb24uYi9leGFtcGxlcy9HcmFwaFdpdGhDdXN0b21MZWdlbmREb20nO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiA8Q3VzdG9tTGVnZW5kRG9tRXhhbXBsZSAvPjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkN1c3RvbUxlZ2VuZERvbUV4YW1wbGUiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/General/Padding/CustomLegendPlacement.test.jsx\n");

/***/ })

}]);