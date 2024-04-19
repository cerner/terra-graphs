"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkterra_graphs"] = self["webpackChunkterra_graphs"] || []).push([["packages_terra-graphs-docs_src_terra-dev-site_graph_ScatterGraph_g_DynamicData_7_graph_mdx"],{

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/graph/ScatterGraph.g/DynamicData.7.graph.mdx":
/*!****************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/graph/ScatterGraph.g/DynamicData.7.graph.mdx ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MDXContent; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ \"./node_modules/@mdx-js/react/dist/cjs.js\");\n/* harmony import */ var _example_Graphs_Carbon_ScatterGraph_Reflow_DynamicData_dev_site_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../example/Graphs-Carbon/ScatterGraph/Reflow/DynamicData?dev-site-example */ \"./packages/terra-graphs-docs/src/terra-dev-site/graph/example/Graphs-Carbon/ScatterGraph/Reflow/DynamicData.jsx?dev-site-example\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Scatter_scatterTimeseriesPanning_js_dev_site_codeblock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Scatter/scatterTimeseriesPanning.js?dev-site-codeblock */ \"./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Scatter/scatterTimeseriesPanning.js?dev-site-codeblock\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Scatter_dataset1timeseries_js_dev_site_codeblock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Scatter/dataset1timeseries.js?dev-site-codeblock */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/Scatter/dataset1timeseries.js?dev-site-codeblock\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Scatter_dataset1timeseriesNewData_js_dev_site_codeblock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Scatter/dataset1timeseriesNewData.js?dev-site-codeblock */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/Scatter/dataset1timeseriesNewData.js?dev-site-codeblock\");\n\n\nvar _excluded = [\"components\"];\n\n\n\n/* @jsxRuntime classic */\n/* @jsx mdx */\n\n\n\n\n__webpack_require__(/*! details-polyfill */ \"./node_modules/details-polyfill/index.js\");\nvar layoutProps = {};\nvar MDXLayout = \"wrapper\";\nfunction MDXContent(_ref) {\n  var components = _ref.components,\n    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, _excluded);\n  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(MDXLayout, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\"\n  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"h1\", {\n    \"id\": \"scatter-graph---dynamic-data\"\n  }, \"Scatter Graph - Dynamic Data\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"p\", null, \"This is a scatter graph example that implements panning with dynamic data.\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"h2\", {\n    \"id\": \"getting-started\"\n  }, \"Getting Started\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"ul\", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"li\", {\n    parentName: \"ul\"\n  }, \"Install with \", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"a\", {\n    parentName: \"li\",\n    \"href\": \"https://www.npmjs.com/\"\n  }, \"npmjs\"), \":\", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"ul\", {\n    parentName: \"li\"\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"li\", {\n    parentName: \"ul\"\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"inlineCode\", {\n    parentName: \"li\"\n  }, \"npm i @cerner/carbon-graphs --save-dev\"))))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"h2\", {\n    \"id\": \"usage\"\n  }, \"Usage\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"pre\", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"code\", {\n    parentName: \"pre\",\n    \"className\": \"language-js\"\n  }, \"import Carbon from '@cerner/carbon-graphs';\\nimport '@cerner/carbon-graphs/dist/css/carbon-graphs.css';\\n\")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"h2\", {\n    \"id\": \"example\"\n  }, \"Example\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(_example_Graphs_Carbon_ScatterGraph_Reflow_DynamicData_dev_site_example__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    mdxType: \"ScatterGraphPanning\"\n  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"details\", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"summary\", {\n    style: {\n      fontSize: 24\n    }\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"b\", null, \"Example Data\")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"h3\", {\n    \"id\": \"graph-config-object\"\n  }, \"Graph Config object\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(_cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Scatter_scatterTimeseriesPanning_js_dev_site_codeblock__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    mdxType: \"GraphConfig\"\n  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"h3\", {\n    \"id\": \"data-object\"\n  }, \"Data object\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"h4\", {\n    \"id\": \"dataset-1\"\n  }, \"dataset 1\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Scatter_dataset1timeseries_js_dev_site_codeblock__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    mdxType: \"DataObject1\"\n  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"h4\", {\n    \"id\": \"dataset-2\"\n  }, \"dataset 2\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Scatter_dataset1timeseriesNewData_js_dev_site_codeblock__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    mdxType: \"DataObject2\"\n  })));\n}\n;\nMDXContent.isMDXComponent = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvZ3JhcGgvU2NhdHRlckdyYXBoLmcvRHluYW1pY0RhdGEuNy5ncmFwaC5tZHgiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ3lCO0FBQ1U7O0FBRW5DO0FBQ0E7QUFDNEc7QUFDdUM7QUFDYjtBQUNPO0FBQzdJTSxtQkFBTyxDQUFDLGtFQUFrQixDQUFDO0FBRzNCLElBQU1DLFdBQVcsR0FBRyxDQUVwQixDQUFDO0FBQ0QsSUFBTUMsU0FBUyxHQUFHLFNBQVM7QUFDWixTQUFTQyxVQUFVQSxDQUFBQyxJQUFBLEVBRy9CO0VBQUEsSUFGREMsVUFBVSxHQUFBRCxJQUFBLENBQVZDLFVBQVU7SUFDUEMsS0FBSyxHQUFBQywwRkFBQSxDQUFBSCxJQUFBLEVBQUFJLFNBQUE7RUFFUixPQUFPYixrREFBQSxDQUFDTyxTQUFTLEVBQUFPLDBFQUFBLEtBQUtSLFdBQVcsRUFBTUssS0FBSztJQUFFRCxVQUFVLEVBQUVBLFVBQVc7SUFBQ0ssT0FBTyxFQUFDO0VBQVcsSUFFdkZmLGtEQUFBO0lBQ0UsSUFBSSxFQUFFO0VBQThCLGlDQUNDLENBQUMsRUFDeENBLGtEQUFBLHdGQUFvRixDQUFDLEVBQ3JGQSxrREFBQTtJQUNFLElBQUksRUFBRTtFQUFpQixvQkFDQyxDQUFDLEVBQzNCQSxrREFBQSxhQUNFQSxrREFBQTtJQUFJZ0IsVUFBVSxFQUFDO0VBQUksb0JBQWtCaEIsa0RBQUE7SUFBR2dCLFVBQVUsRUFBQyxJQUFJO0lBQ25ELE1BQU0sRUFBRTtFQUF3QixVQUNuQixDQUFDLE9BQ2hCaEIsa0RBQUE7SUFBSWdCLFVBQVUsRUFBQztFQUFJLEdBQ2pCaEIsa0RBQUE7SUFBSWdCLFVBQVUsRUFBQztFQUFJLEdBQUNoQixrREFBQTtJQUFZZ0IsVUFBVSxFQUFDO0VBQUksMkNBQXVELENBQUssQ0FDekcsQ0FDRixDQUNGLENBQUMsRUFDTGhCLGtEQUFBO0lBQ0UsSUFBSSxFQUFFO0VBQU8sVUFDQyxDQUFDLEVBQ2pCQSxrREFBQSxjQUFLQSxrREFBQTtJQUFNZ0IsVUFBVSxFQUFDLEtBQUs7SUFDdkIsV0FBVyxFQUFFO0VBQWEsOEdBRzFCLENBQU0sQ0FBQyxFQUNYaEIsa0RBQUE7SUFDRSxJQUFJLEVBQUU7RUFBUyxZQUNDLENBQUMsRUFDbkJBLGtEQUFBLENBQUNDLCtHQUFtQjtJQUFDYyxPQUFPLEVBQUM7RUFBcUIsQ0FBRSxDQUFDLEVBQ3JEZixrREFBQSxrQkFDRUEsa0RBQUE7SUFBU2lCLEtBQUssRUFBRTtNQUNkQyxRQUFRLEVBQUU7SUFDWjtFQUFFLEdBQ0FsQixrREFBQSxZQUFHLGNBQWUsQ0FDWCxDQUFDLEVBQ1ZBLGtEQUFBO0lBQ0UsSUFBSSxFQUFFO0VBQXFCLHdCQUNDLENBQUMsRUFDL0JBLGtEQUFBLENBQUNFLGdLQUFXO0lBQUNhLE9BQU8sRUFBQztFQUFhLENBQUUsQ0FBQyxFQUNyQ2Ysa0RBQUE7SUFDRSxJQUFJLEVBQUU7RUFBYSxnQkFDQyxDQUFDLEVBQ3ZCQSxrREFBQTtJQUNFLElBQUksRUFBRTtFQUFXLGNBQ0MsQ0FBQyxFQUNyQkEsa0RBQUEsQ0FBQ0csbUpBQVc7SUFBQ1ksT0FBTyxFQUFDO0VBQWEsQ0FBRSxDQUFDLEVBQ3JDZixrREFBQTtJQUNFLElBQUksRUFBRTtFQUFXLGNBQ0MsQ0FBQyxFQUNyQkEsa0RBQUEsQ0FBQ0ksMEpBQVc7SUFBQ1csT0FBTyxFQUFDO0VBQWEsQ0FBRSxDQUM3QixDQUNFLENBQUM7QUFDaEI7QUFDQTtBQUNBUCxVQUFVLENBQUNXLGNBQWMsR0FBRyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVycmEtZ3JhcGhzLy4vcGFja2FnZXMvdGVycmEtZ3JhcGhzLWRvY3Mvc3JjL3RlcnJhLWRldi1zaXRlL2dyYXBoL1NjYXR0ZXJHcmFwaC5nL0R5bmFtaWNEYXRhLjcuZ3JhcGgubWR4P2UwMTEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuaW1wb3J0IFNjYXR0ZXJHcmFwaFBhbm5pbmcgZnJvbSAnLi4vZXhhbXBsZS9HcmFwaHMtQ2FyYm9uL1NjYXR0ZXJHcmFwaC9SZWZsb3cvRHluYW1pY0RhdGE/ZGV2LXNpdGUtZXhhbXBsZSc7XG5pbXBvcnQgR3JhcGhDb25maWcgZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvZXhhbXBsZS1kYXRhc2V0cy9ncmFwaENvbmZpZ09iamVjdHMvU2NhdHRlci9zY2F0dGVyVGltZXNlcmllc1Bhbm5pbmcuanM/ZGV2LXNpdGUtY29kZWJsb2NrJztcbmltcG9ydCBEYXRhT2JqZWN0MSBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL2RhdGFPYmplY3RzL1NjYXR0ZXIvZGF0YXNldDF0aW1lc2VyaWVzLmpzP2Rldi1zaXRlLWNvZGVibG9jayc7XG5pbXBvcnQgRGF0YU9iamVjdDIgZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9TY2F0dGVyL2RhdGFzZXQxdGltZXNlcmllc05ld0RhdGEuanM/ZGV2LXNpdGUtY29kZWJsb2NrJztcbnJlcXVpcmUoJ2RldGFpbHMtcG9seWZpbGwnKTtcblxuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG4gICAgPGgxIHsuLi57XG4gICAgICBcImlkXCI6IFwic2NhdHRlci1ncmFwaC0tLWR5bmFtaWMtZGF0YVwiXG4gICAgfX0+e2BTY2F0dGVyIEdyYXBoIC0gRHluYW1pYyBEYXRhYH08L2gxPlxuICAgIDxwPntgVGhpcyBpcyBhIHNjYXR0ZXIgZ3JhcGggZXhhbXBsZSB0aGF0IGltcGxlbWVudHMgcGFubmluZyB3aXRoIGR5bmFtaWMgZGF0YS5gfTwvcD5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJnZXR0aW5nLXN0YXJ0ZWRcIlxuICAgIH19PntgR2V0dGluZyBTdGFydGVkYH08L2gyPlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YEluc3RhbGwgd2l0aCBgfTxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly93d3cubnBtanMuY29tL1wiXG4gICAgICAgIH19PntgbnBtanNgfTwvYT57YDpgfVxuICAgICAgICA8dWwgcGFyZW50TmFtZT1cImxpXCI+XG4gICAgICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntgbnBtIGkgQGNlcm5lci9jYXJib24tZ3JhcGhzIC0tc2F2ZS1kZXZgfTwvaW5saW5lQ29kZT48L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcInVzYWdlXCJcbiAgICB9fT57YFVzYWdlYH08L2gyPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtanNcIlxuICAgICAgfX0+e2BpbXBvcnQgQ2FyYm9uIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocyc7XG5pbXBvcnQgJ0BjZXJuZXIvY2FyYm9uLWdyYXBocy9kaXN0L2Nzcy9jYXJib24tZ3JhcGhzLmNzcyc7XG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJleGFtcGxlXCJcbiAgICB9fT57YEV4YW1wbGVgfTwvaDI+XG4gICAgPFNjYXR0ZXJHcmFwaFBhbm5pbmcgbWR4VHlwZT1cIlNjYXR0ZXJHcmFwaFBhbm5pbmdcIiAvPlxuICAgIDxkZXRhaWxzPlxuICAgICAgPHN1bW1hcnkgc3R5bGU9e3tcbiAgICAgICAgZm9udFNpemU6IDI0XG4gICAgICB9fT5cbiAgICAgICAgPGI+RXhhbXBsZSBEYXRhPC9iPlxuICAgICAgPC9zdW1tYXJ5PlxuICAgICAgPGgzIHsuLi57XG4gICAgICAgIFwiaWRcIjogXCJncmFwaC1jb25maWctb2JqZWN0XCJcbiAgICAgIH19PntgR3JhcGggQ29uZmlnIG9iamVjdGB9PC9oMz5cbiAgICAgIDxHcmFwaENvbmZpZyBtZHhUeXBlPVwiR3JhcGhDb25maWdcIiAvPlxuICAgICAgPGgzIHsuLi57XG4gICAgICAgIFwiaWRcIjogXCJkYXRhLW9iamVjdFwiXG4gICAgICB9fT57YERhdGEgb2JqZWN0YH08L2gzPlxuICAgICAgPGg0IHsuLi57XG4gICAgICAgIFwiaWRcIjogXCJkYXRhc2V0LTFcIlxuICAgICAgfX0+e2BkYXRhc2V0IDFgfTwvaDQ+XG4gICAgICA8RGF0YU9iamVjdDEgbWR4VHlwZT1cIkRhdGFPYmplY3QxXCIgLz5cbiAgICAgIDxoNCB7Li4ue1xuICAgICAgICBcImlkXCI6IFwiZGF0YXNldC0yXCJcbiAgICAgIH19PntgZGF0YXNldCAyYH08L2g0PlxuICAgICAgPERhdGFPYmplY3QyIG1keFR5cGU9XCJEYXRhT2JqZWN0MlwiIC8+XG4gICAgPC9kZXRhaWxzPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1keCIsIlNjYXR0ZXJHcmFwaFBhbm5pbmciLCJHcmFwaENvbmZpZyIsIkRhdGFPYmplY3QxIiwiRGF0YU9iamVjdDIiLCJyZXF1aXJlIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiX3JlZiIsImNvbXBvbmVudHMiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIl9leHRlbmRzIiwibWR4VHlwZSIsInBhcmVudE5hbWUiLCJzdHlsZSIsImZvbnRTaXplIiwiaXNNRFhDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/graph/ScatterGraph.g/DynamicData.7.graph.mdx\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/example-datasets/dataObjects/Scatter/dataset1timeseriesNewData.js?dev-site-codeblock":
/*!*****************************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/dataObjects/Scatter/dataset1timeseriesNewData.js?dev-site-codeblock ***!
  \*****************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MDXContent; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ \"./node_modules/@mdx-js/react/dist/cjs.js\");\n\n\nvar _excluded = [\"components\"];\n\n\n\n/* @jsxRuntime classic */\n/* @jsx mdx */\n\nvar layoutProps = {};\nvar MDXLayout = \"wrapper\";\nfunction MDXContent(_ref) {\n  var components = _ref.components,\n    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, _excluded);\n  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(MDXLayout, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\"\n  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"pre\", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"code\", {\n    parentName: \"pre\",\n    \"className\": \"language-js\"\n  }, \"import Carbon from '@cerner/carbon-graphs';\\nimport { loadPopup } from '@cerner/terra-graphs-docs/lib/example-datasets/popup';\\n\\nconst data = {\\n  key: 'uid_1',\\n  label: {\\n    display: 'Data Label 1',\\n  },\\n  color: Carbon.helpers.COLORS.BLACK,\\n  onClick: loadPopup,\\n  values: [\\n    {\\n      x: new Date(2016, 0, 1, 1, 5).toISOString(),\\n      y: 28,\\n    },\\n    {\\n      x: new Date(2016, 0, 1, 2, 15).toISOString(),\\n      y: 5,\\n    },\\n    {\\n      x: new Date(2016, 0, 1, 3, 15).toISOString(),\\n      y: 25,\\n    },\\n    {\\n      x: new Date(2016, 0, 1, 4, 15).toISOString(),\\n      y: 16,\\n    },\\n    {\\n      x: new Date(2016, 0, 1, 5, 15).toISOString(),\\n      y: 17,\\n    },\\n    {\\n      x: new Date(2016, 0, 1, 6, 15).toISOString(),\\n      y: 15,\\n    },\\n    {\\n      x: new Date(2016, 0, 1, 7, 0).toISOString(),\\n      y: 6,\\n    },\\n    {\\n      x: new Date(2016, 0, 1, 8, 15).toISOString(),\\n      y: 8,\\n    },\\n    {\\n      x: new Date(2016, 0, 1, 9, 45).toISOString(),\\n      y: 9,\\n    },\\n    {\\n      x: new Date(2016, 0, 1, 12, 15).toISOString(),\\n      y: 17,\\n    },\\n    {\\n      x: new Date(2016, 0, 1, 13, 15).toISOString(),\\n      y: 18,\\n    },\\n    {\\n      x: new Date(2016, 0, 1, 14, 15).toISOString(),\\n      y: 22,\\n    },\\n    {\\n      x: new Date(2016, 0, 1, 19, 45).toISOString(),\\n      y: 7,\\n    },\\n    {\\n      x: new Date(2016, 0, 1, 21, 15).toISOString(),\\n      y: 21,\\n    },\\n  ],\\n};\\n\\nexport default data;\\n\\n\")));\n}\n;\nMDXContent.isMDXComponent = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9TY2F0dGVyL2RhdGFzZXQxdGltZXNlcmllc05ld0RhdGEuanM/ZGV2LXNpdGUtY29kZWJsb2NrIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ3lCO0FBQ1U7O0FBRW5DO0FBQ0E7O0FBSUEsSUFBTUUsV0FBVyxHQUFHLENBRXBCLENBQUM7QUFDRCxJQUFNQyxTQUFTLEdBQUcsU0FBUztBQUNaLFNBQVNDLFVBQVVBLENBQUFDLElBQUEsRUFHL0I7RUFBQSxJQUZEQyxVQUFVLEdBQUFELElBQUEsQ0FBVkMsVUFBVTtJQUNQQyxLQUFLLEdBQUFDLDBGQUFBLENBQUFILElBQUEsRUFBQUksU0FBQTtFQUVSLE9BQU9SLGtEQUFBLENBQUNFLFNBQVMsRUFBQU8sMEVBQUEsS0FBS1IsV0FBVyxFQUFNSyxLQUFLO0lBQUVELFVBQVUsRUFBRUEsVUFBVztJQUFDSyxPQUFPLEVBQUM7RUFBVyxJQUN2RlYsa0RBQUEsY0FBS0Esa0RBQUE7SUFBTVcsVUFBVSxFQUFDLEtBQUs7SUFDdkIsV0FBVyxFQUFFO0VBQWEsaThDQXlFMUIsQ0FBTSxDQUNDLENBQUM7QUFDaEI7QUFDQTtBQUNBUixVQUFVLENBQUNTLGNBQWMsR0FBRyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVycmEtZ3JhcGhzLy4vcGFja2FnZXMvdGVycmEtZ3JhcGhzLWRvY3Mvc3JjL2V4YW1wbGUtZGF0YXNldHMvZGF0YU9iamVjdHMvU2NhdHRlci9kYXRhc2V0MXRpbWVzZXJpZXNOZXdEYXRhLmpzPzRlNWUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0J1xuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuXG5cblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIFxufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLWpzXCJcbiAgICAgIH19PntgaW1wb3J0IENhcmJvbiBmcm9tICdAY2VybmVyL2NhcmJvbi1ncmFwaHMnO1xuaW1wb3J0IHsgbG9hZFBvcHVwIH0gZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvZXhhbXBsZS1kYXRhc2V0cy9wb3B1cCc7XG5cbmNvbnN0IGRhdGEgPSB7XG4gIGtleTogJ3VpZF8xJyxcbiAgbGFiZWw6IHtcbiAgICBkaXNwbGF5OiAnRGF0YSBMYWJlbCAxJyxcbiAgfSxcbiAgY29sb3I6IENhcmJvbi5oZWxwZXJzLkNPTE9SUy5CTEFDSyxcbiAgb25DbGljazogbG9hZFBvcHVwLFxuICB2YWx1ZXM6IFtcbiAgICB7XG4gICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAwLCAxLCAxLCA1KS50b0lTT1N0cmluZygpLFxuICAgICAgeTogMjgsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAwLCAxLCAyLCAxNSkudG9JU09TdHJpbmcoKSxcbiAgICAgIHk6IDUsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAwLCAxLCAzLCAxNSkudG9JU09TdHJpbmcoKSxcbiAgICAgIHk6IDI1LFxuICAgIH0sXG4gICAge1xuICAgICAgeDogbmV3IERhdGUoMjAxNiwgMCwgMSwgNCwgMTUpLnRvSVNPU3RyaW5nKCksXG4gICAgICB5OiAxNixcbiAgICB9LFxuICAgIHtcbiAgICAgIHg6IG5ldyBEYXRlKDIwMTYsIDAsIDEsIDUsIDE1KS50b0lTT1N0cmluZygpLFxuICAgICAgeTogMTcsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAwLCAxLCA2LCAxNSkudG9JU09TdHJpbmcoKSxcbiAgICAgIHk6IDE1LFxuICAgIH0sXG4gICAge1xuICAgICAgeDogbmV3IERhdGUoMjAxNiwgMCwgMSwgNywgMCkudG9JU09TdHJpbmcoKSxcbiAgICAgIHk6IDYsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAwLCAxLCA4LCAxNSkudG9JU09TdHJpbmcoKSxcbiAgICAgIHk6IDgsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAwLCAxLCA5LCA0NSkudG9JU09TdHJpbmcoKSxcbiAgICAgIHk6IDksXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAwLCAxLCAxMiwgMTUpLnRvSVNPU3RyaW5nKCksXG4gICAgICB5OiAxNyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHg6IG5ldyBEYXRlKDIwMTYsIDAsIDEsIDEzLCAxNSkudG9JU09TdHJpbmcoKSxcbiAgICAgIHk6IDE4LFxuICAgIH0sXG4gICAge1xuICAgICAgeDogbmV3IERhdGUoMjAxNiwgMCwgMSwgMTQsIDE1KS50b0lTT1N0cmluZygpLFxuICAgICAgeTogMjIsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiBuZXcgRGF0ZSgyMDE2LCAwLCAxLCAxOSwgNDUpLnRvSVNPU3RyaW5nKCksXG4gICAgICB5OiA3LFxuICAgIH0sXG4gICAge1xuICAgICAgeDogbmV3IERhdGUoMjAxNiwgMCwgMSwgMjEsIDE1KS50b0lTT1N0cmluZygpLFxuICAgICAgeTogMjEsXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG5cbmB9PC9jb2RlPjwvcHJlPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlOyJdLCJuYW1lcyI6WyJSZWFjdCIsIm1keCIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTURYQ29udGVudCIsIl9yZWYiLCJjb21wb25lbnRzIiwicHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJfZXh0ZW5kcyIsIm1keFR5cGUiLCJwYXJlbnROYW1lIiwiaXNNRFhDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/dataObjects/Scatter/dataset1timeseriesNewData.js?dev-site-codeblock\n");

/***/ })

}]);