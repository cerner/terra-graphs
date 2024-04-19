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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/carbon-graphs */ \"./packages/carbon-graphs/src/index.js\");\n/* eslint-disable react/forbid-dom-props */\n\n\n\n//  graph configuration object\n\nvar graphConfig = {\n  bindTo: '#custom-legend-graph',\n  bindLegendTo: '#custom-legend-node',\n  axis: {\n    x: {\n      label: 'x axis',\n      lowerLimit: 80,\n      upperLimit: 280\n    },\n    y: {\n      label: 'y axis',\n      lowerLimit: -18,\n      upperLimit: 18\n    }\n  }\n};\n\n//  graph dataset\n\nvar dataset1 = {\n  key: 'uid_1',\n  label: {\n    display: 'Data Label 1'\n  },\n  color: _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].helpers.COLORS.BLACK,\n  values: [{\n    x: 87,\n    y: -2\n  }, {\n    x: 95,\n    y: 1\n  }, {\n    x: 103,\n    y: -4\n  }, {\n    x: 109,\n    y: -2\n  }, {\n    x: 128,\n    y: 3\n  }, {\n    x: 145,\n    y: 28\n  }, {\n    x: 151,\n    y: 7\n  }, {\n    x: 164,\n    y: 10\n  }, {\n    x: 177,\n    y: 1\n  }, {\n    x: 192,\n    y: 6\n  }, {\n    x: 203,\n    y: -21\n  }, {\n    x: 209,\n    y: -3\n  }, {\n    x: 246,\n    y: 3\n  }]\n};\n\n// graph rendering\n\nvar CustomLegendDomExample = function CustomLegendDomExample() {\n  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {\n    var graph = _cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.graph(graphConfig);\n    graph.loadContent(_cerner_carbon_graphs__WEBPACK_IMPORTED_MODULE_1__[\"default\"].api.line(dataset1));\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"custom-legend-example\",\n    style: {\n      display: 'flex',\n      width: '100%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"custom-legend-node\",\n    style: {\n      width: '20%'\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    style: {\n      width: '80%'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"custom-legend-graph\"\n  })));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CustomLegendDomExample);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvZ3JhcGgvQ29yZUNvbmZpZ3VyYXRpb24uYi9leGFtcGxlcy9HcmFwaFdpdGhDdXN0b21MZWdlbmREb20uanN4IiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQzBCO0FBQ2lCOztBQUUzQzs7QUFFQSxJQUFNRSxXQUFXLEdBQUc7RUFDbEJDLE1BQU0sRUFBRSxzQkFBc0I7RUFDOUJDLFlBQVksRUFBRSxxQkFBcUI7RUFDbkNDLElBQUksRUFBRTtJQUNKQyxDQUFDLEVBQUU7TUFDREMsS0FBSyxFQUFFLFFBQVE7TUFDZkMsVUFBVSxFQUFFLEVBQUU7TUFDZEMsVUFBVSxFQUFFO0lBQ2QsQ0FBQztJQUNEQyxDQUFDLEVBQUU7TUFDREgsS0FBSyxFQUFFLFFBQVE7TUFDZkMsVUFBVSxFQUFFLENBQUMsRUFBRTtNQUNmQyxVQUFVLEVBQUU7SUFDZDtFQUNGO0FBQ0YsQ0FBQzs7QUFFRDs7QUFFQSxJQUFNRSxRQUFRLEdBQUc7RUFDZkMsR0FBRyxFQUFFLE9BQU87RUFDWkwsS0FBSyxFQUFFO0lBQ0xNLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFDREMsS0FBSyxFQUFFYiw2REFBTSxDQUFDYyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztFQUNsQ0MsTUFBTSxFQUFFLENBQ047SUFBRVosQ0FBQyxFQUFFLEVBQUU7SUFBRUksQ0FBQyxFQUFFLENBQUM7RUFBRSxDQUFDLEVBQ2hCO0lBQUVKLENBQUMsRUFBRSxFQUFFO0lBQUVJLENBQUMsRUFBRTtFQUFFLENBQUMsRUFDZjtJQUFFSixDQUFDLEVBQUUsR0FBRztJQUFFSSxDQUFDLEVBQUUsQ0FBQztFQUFFLENBQUMsRUFDakI7SUFBRUosQ0FBQyxFQUFFLEdBQUc7SUFBRUksQ0FBQyxFQUFFLENBQUM7RUFBRSxDQUFDLEVBQ2pCO0lBQUVKLENBQUMsRUFBRSxHQUFHO0lBQUVJLENBQUMsRUFBRTtFQUFFLENBQUMsRUFDaEI7SUFBRUosQ0FBQyxFQUFFLEdBQUc7SUFBRUksQ0FBQyxFQUFFO0VBQUcsQ0FBQyxFQUNqQjtJQUFFSixDQUFDLEVBQUUsR0FBRztJQUFFSSxDQUFDLEVBQUU7RUFBRSxDQUFDLEVBQ2hCO0lBQUVKLENBQUMsRUFBRSxHQUFHO0lBQUVJLENBQUMsRUFBRTtFQUFHLENBQUMsRUFDakI7SUFBRUosQ0FBQyxFQUFFLEdBQUc7SUFBRUksQ0FBQyxFQUFFO0VBQUUsQ0FBQyxFQUNoQjtJQUFFSixDQUFDLEVBQUUsR0FBRztJQUFFSSxDQUFDLEVBQUU7RUFBRSxDQUFDLEVBQ2hCO0lBQUVKLENBQUMsRUFBRSxHQUFHO0lBQUVJLENBQUMsRUFBRSxDQUFDO0VBQUcsQ0FBQyxFQUNsQjtJQUFFSixDQUFDLEVBQUUsR0FBRztJQUFFSSxDQUFDLEVBQUUsQ0FBQztFQUFFLENBQUMsRUFDakI7SUFBRUosQ0FBQyxFQUFFLEdBQUc7SUFBRUksQ0FBQyxFQUFFO0VBQUUsQ0FBQztBQUVwQixDQUFDOztBQUVEOztBQUVBLElBQU1TLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBc0JBLENBQUEsRUFBUztFQUNuQ25CLDRDQUFlLENBQUMsWUFBTTtJQUNwQixJQUFNcUIsS0FBSyxHQUFHcEIsNkRBQU0sQ0FBQ3FCLEdBQUcsQ0FBQ0QsS0FBSyxDQUFDbkIsV0FBVyxDQUFDO0lBQzNDbUIsS0FBSyxDQUFDRSxXQUFXLENBQUN0Qiw2REFBTSxDQUFDcUIsR0FBRyxDQUFDRSxJQUFJLENBQUNiLFFBQVEsQ0FBQyxDQUFDO0VBQzlDLENBQUMsRUFBRSxFQUFFLENBQUM7RUFDTixvQkFDRVgsZ0RBQUE7SUFBSzBCLEVBQUUsRUFBQyx1QkFBdUI7SUFBQ0MsS0FBSyxFQUFFO01BQUVkLE9BQU8sRUFBRSxNQUFNO01BQUVlLEtBQUssRUFBRTtJQUFPO0VBQUUsZ0JBQ3hFNUIsZ0RBQUE7SUFBSzBCLEVBQUUsRUFBQyxvQkFBb0I7SUFBQ0MsS0FBSyxFQUFFO01BQUVDLEtBQUssRUFBRTtJQUFNO0VBQUUsQ0FBRSxDQUFDLGVBQ3hENUIsZ0RBQUE7SUFBSzJCLEtBQUssRUFBRTtNQUFFQyxLQUFLLEVBQUU7SUFBTTtFQUFFLGdCQUMzQjVCLGdEQUFBO0lBQUswQixFQUFFLEVBQUM7RUFBcUIsQ0FBRSxDQUM1QixDQUNGLENBQUM7QUFFVixDQUFDO0FBRUQsK0RBQWVQLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy90ZXJyYS1kZXYtc2l0ZS9ncmFwaC9Db3JlQ29uZmlndXJhdGlvbi5iL2V4YW1wbGVzL0dyYXBoV2l0aEN1c3RvbUxlZ2VuZERvbS5qc3g/ZjVhYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9mb3JiaWQtZG9tLXByb3BzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcmJvbiBmcm9tICdAY2VybmVyL2NhcmJvbi1ncmFwaHMnO1xuXG4vLyAgZ3JhcGggY29uZmlndXJhdGlvbiBvYmplY3RcblxuY29uc3QgZ3JhcGhDb25maWcgPSB7XG4gIGJpbmRUbzogJyNjdXN0b20tbGVnZW5kLWdyYXBoJyxcbiAgYmluZExlZ2VuZFRvOiAnI2N1c3RvbS1sZWdlbmQtbm9kZScsXG4gIGF4aXM6IHtcbiAgICB4OiB7XG4gICAgICBsYWJlbDogJ3ggYXhpcycsXG4gICAgICBsb3dlckxpbWl0OiA4MCxcbiAgICAgIHVwcGVyTGltaXQ6IDI4MCxcbiAgICB9LFxuICAgIHk6IHtcbiAgICAgIGxhYmVsOiAneSBheGlzJyxcbiAgICAgIGxvd2VyTGltaXQ6IC0xOCxcbiAgICAgIHVwcGVyTGltaXQ6IDE4LFxuICAgIH0sXG4gIH0sXG59O1xuXG4vLyAgZ3JhcGggZGF0YXNldFxuXG5jb25zdCBkYXRhc2V0MSA9IHtcbiAga2V5OiAndWlkXzEnLFxuICBsYWJlbDoge1xuICAgIGRpc3BsYXk6ICdEYXRhIExhYmVsIDEnLFxuICB9LFxuICBjb2xvcjogQ2FyYm9uLmhlbHBlcnMuQ09MT1JTLkJMQUNLLFxuICB2YWx1ZXM6IFtcbiAgICB7IHg6IDg3LCB5OiAtMiB9LFxuICAgIHsgeDogOTUsIHk6IDEgfSxcbiAgICB7IHg6IDEwMywgeTogLTQgfSxcbiAgICB7IHg6IDEwOSwgeTogLTIgfSxcbiAgICB7IHg6IDEyOCwgeTogMyB9LFxuICAgIHsgeDogMTQ1LCB5OiAyOCB9LFxuICAgIHsgeDogMTUxLCB5OiA3IH0sXG4gICAgeyB4OiAxNjQsIHk6IDEwIH0sXG4gICAgeyB4OiAxNzcsIHk6IDEgfSxcbiAgICB7IHg6IDE5MiwgeTogNiB9LFxuICAgIHsgeDogMjAzLCB5OiAtMjEgfSxcbiAgICB7IHg6IDIwOSwgeTogLTMgfSxcbiAgICB7IHg6IDI0NiwgeTogMyB9LFxuICBdLFxufTtcblxuLy8gZ3JhcGggcmVuZGVyaW5nXG5cbmNvbnN0IEN1c3RvbUxlZ2VuZERvbUV4YW1wbGUgPSAoKSA9PiB7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZ3JhcGggPSBDYXJib24uYXBpLmdyYXBoKGdyYXBoQ29uZmlnKTtcbiAgICBncmFwaC5sb2FkQ29udGVudChDYXJib24uYXBpLmxpbmUoZGF0YXNldDEpKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJjdXN0b20tbGVnZW5kLWV4YW1wbGVcIiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIHdpZHRoOiAnMTAwJScgfX0+XG4gICAgICA8ZGl2IGlkPVwiY3VzdG9tLWxlZ2VuZC1ub2RlXCIgc3R5bGU9e3sgd2lkdGg6ICcyMCUnIH19IC8+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAnODAlJyB9fT5cbiAgICAgICAgPGRpdiBpZD1cImN1c3RvbS1sZWdlbmQtZ3JhcGhcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21MZWdlbmREb21FeGFtcGxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyYm9uIiwiZ3JhcGhDb25maWciLCJiaW5kVG8iLCJiaW5kTGVnZW5kVG8iLCJheGlzIiwieCIsImxhYmVsIiwibG93ZXJMaW1pdCIsInVwcGVyTGltaXQiLCJ5IiwiZGF0YXNldDEiLCJrZXkiLCJkaXNwbGF5IiwiY29sb3IiLCJoZWxwZXJzIiwiQ09MT1JTIiwiQkxBQ0siLCJ2YWx1ZXMiLCJDdXN0b21MZWdlbmREb21FeGFtcGxlIiwidXNlRWZmZWN0IiwiZ3JhcGgiLCJhcGkiLCJsb2FkQ29udGVudCIsImxpbmUiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJzdHlsZSIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConfiguration.b/examples/GraphWithCustomLegendDom.jsx\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/General/Padding/CustomLegendPlacement.test.jsx":
/*!******************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/General/Padding/CustomLegendPlacement.test.jsx ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _graph_CoreConfiguration_b_examples_GraphWithCustomLegendDom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../graph/CoreConfiguration.b/examples/GraphWithCustomLegendDom */ \"./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConfiguration.b/examples/GraphWithCustomLegendDom.jsx\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_graph_CoreConfiguration_b_examples_GraphWithCustomLegendDom__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9ncmFwaHMvR2VuZXJhbC9QYWRkaW5nL0N1c3RvbUxlZ2VuZFBsYWNlbWVudC50ZXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7QUFBMEI7QUFDbUY7QUFFN0csK0RBQWU7RUFBQSxvQkFBTUEsZ0RBQUEsQ0FBQ0Msb0dBQXNCLE1BQUUsQ0FBQztBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVycmEtZ3JhcGhzLy4vcGFja2FnZXMvdGVycmEtZ3JhcGhzLWRvY3Mvc3JjL3RlcnJhLWRldi1zaXRlL3Rlc3QvZ3JhcGhzL0dlbmVyYWwvUGFkZGluZy9DdXN0b21MZWdlbmRQbGFjZW1lbnQudGVzdC5qc3g/NmJlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEN1c3RvbUxlZ2VuZERvbUV4YW1wbGUgZnJvbSAnLi4vLi4vLi4vLi4vZ3JhcGgvQ29yZUNvbmZpZ3VyYXRpb24uYi9leGFtcGxlcy9HcmFwaFdpdGhDdXN0b21MZWdlbmREb20nO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiA8Q3VzdG9tTGVnZW5kRG9tRXhhbXBsZSAvPjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkN1c3RvbUxlZ2VuZERvbUV4YW1wbGUiLCJjcmVhdGVFbGVtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/General/Padding/CustomLegendPlacement.test.jsx\n");

/***/ })

}]);