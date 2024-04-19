"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkterra_graphs"] = self["webpackChunkterra_graphs"] || []).push([["packages_terra-graphs-docs_src_terra-dev-site_graph_CoreConcepts_b_Padding_f_graph_mdx"],{

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConcepts.b/Padding.f.graph.mdx":
/*!************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConcepts.b/Padding.f.graph.mdx ***!
  \************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MDXContent; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ \"./node_modules/@mdx-js/react/dist/cjs.js\");\n/* harmony import */ var _docs_assets_graph_container_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../docs/assets/graph-container.png */ \"./packages/terra-graphs-docs/docs/assets/graph-container.png\");\n/* harmony import */ var _docs_assets_graph_content_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../docs/assets/graph-content.png */ \"./packages/terra-graphs-docs/docs/assets/graph-content.png\");\n\n\nvar _excluded = [\"components\"];\n\n\n\n/* @jsxRuntime classic */\n/* @jsx mdx */\n\n\nvar layoutProps = {};\nvar MDXLayout = \"wrapper\";\nfunction MDXContent(_ref) {\n  var components = _ref.components,\n    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, _excluded);\n  return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(MDXLayout, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, layoutProps, props, {\n    components: components,\n    mdxType: \"MDXLayout\"\n  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"h1\", {\n    \"id\": \"padding\"\n  }, \"Padding\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"ul\", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"li\", {\n    parentName: \"ul\"\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"a\", {\n    parentName: \"li\",\n    \"href\": \"#container-padding\"\n  }, \"Container Padding\")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"li\", {\n    parentName: \"ul\"\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"a\", {\n    parentName: \"li\",\n    \"href\": \"#content-padding\"\n  }, \"Content Padding\")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"li\", {\n    parentName: \"ul\"\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"a\", {\n    parentName: \"li\",\n    \"href\": \"#structure\"\n  }, \"Structure\")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"li\", {\n    parentName: \"ul\"\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"a\", {\n    parentName: \"li\",\n    \"href\": \"#properties\"\n  }, \"Properties\"))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"p\", null, \"There are 2 kinds of padding that can be applied to graphs:\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"ol\", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"li\", {\n    parentName: \"ol\"\n  }, \"Container Padding\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"li\", {\n    parentName: \"ol\"\n  }, \"Content Padding\")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"h2\", {\n    \"id\": \"container-padding\"\n  }, \"Container Padding\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"p\", null, \"Consumer can add CSS padding/margin on the container of the graph whose ID is provided to Carbon's input (via JSON) for inserting the graph. Above properties applied will be used to position the graph's axis, grid, labels, legend etc.\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"p\", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"strong\", {\n    parentName: \"p\"\n  }, \"Example use case:\"), \" Consumer has multiple graphs and they want to position/line-up all the graphs vertically.\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"img\", {\n    src: _docs_assets_graph_container_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    alt: \"Container\",\n    style: {\n      width: 1200,\n      height: 400,\n      paddingLeft: 50\n    }\n  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"h2\", {\n    \"id\": \"content-padding\"\n  }, \"Content Padding\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"p\", null, \"Consumer can use the input JSON's \", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"inlineCode\", {\n    parentName: \"p\"\n  }, \"padding\"), \" property to position the content of the graph in the container.\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"p\", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"strong\", {\n    parentName: \"p\"\n  }, \"WARNING:\"), \"\\nUse of content-based \", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"inlineCode\", {\n    parentName: \"p\"\n  }, \"padding\"), \" property is strictly use-case specific. Flags such as \", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"inlineCode\", {\n    parentName: \"p\"\n  }, \"showLabel\"), \" and \", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"inlineCode\", {\n    parentName: \"p\"\n  }, \"axis.x.show\"), \" and \", (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"inlineCode\", {\n    parentName: \"p\"\n  }, \"axis.y.show\"), \" needs to be hidden appropriately by the consumer.\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"p\", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"strong\", {\n    parentName: \"p\"\n  }, \"Example use case:\"), \" Consumer has their own axis and labels and wants to only make use of the content and grid lines.\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"img\", {\n    src: _docs_assets_graph_content_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n    alt: \"Content\",\n    style: {\n      width: 1200,\n      height: 400,\n      paddingLeft: 50\n    }\n  }), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"h2\", {\n    \"id\": \"structure\"\n  }, \"Structure\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"pre\", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"code\", {\n    parentName: \"pre\",\n    \"className\": \"language-javascript\"\n  }, \"var padding = {\\n    top: 10,\\n    bottom: 10,\\n    left: 30,\\n    right: 50\\n};\\n\")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"h2\", {\n    \"id\": \"properties\"\n  }, \"Properties\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"table\", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"thead\", {\n    parentName: \"table\"\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"tr\", {\n    parentName: \"thead\"\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"th\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, \"Property Name\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"th\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, \"Expected\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"th\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, \"Default\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"th\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, \"Description\"))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"tbody\", {\n    parentName: \"table\"\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"tr\", {\n    parentName: \"tbody\"\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"td\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"inlineCode\", {\n    parentName: \"td\"\n  }, \"top\")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"td\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, \"number\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"td\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"inlineCode\", {\n    parentName: \"td\"\n  }, \"10\")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"td\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, \"Customize the top-start point of the graph content\")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"tr\", {\n    parentName: \"tbody\"\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"td\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"inlineCode\", {\n    parentName: \"td\"\n  }, \"bottom\")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"td\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, \"number\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"td\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"inlineCode\", {\n    parentName: \"td\"\n  }, \"10\")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"td\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, \"Customize the length from the bottom of content relative to bottom-end point of the graph content\")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"tr\", {\n    parentName: \"tbody\"\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"td\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"inlineCode\", {\n    parentName: \"td\"\n  }, \"left\")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"td\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, \"number\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"td\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"inlineCode\", {\n    parentName: \"td\"\n  }, \"30\")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"td\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, \"Customize the left-start point of the graph content\")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"tr\", {\n    parentName: \"tbody\"\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"td\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"inlineCode\", {\n    parentName: \"td\"\n  }, \"right\")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"td\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, \"number\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"td\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"inlineCode\", {\n    parentName: \"td\"\n  }, \"50\")), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"td\", {\n    parentName: \"tr\",\n    \"align\": null\n  }, \"Customize the right-end point of the graph content\")))), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"ul\", null, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"li\", {\n    parentName: \"ul\"\n  }, \"For some graphs like Gantt, if top padding is not properly padded, the custom dateline indicators might get cut-off.\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"li\", {\n    parentName: \"ul\"\n  }, \"Axes Labels can appear within the graph if not padded properly.\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"li\", {\n    parentName: \"ul\"\n  }, \"Axes ticks and text might get cut-off when the padding being used is too low than the default padding values.\"), (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__.mdx)(\"li\", {\n    parentName: \"ul\"\n  }, \"Using negative values for padding is allowed, doing so, it shifts graph content more towards the padded side.\")));\n}\n;\nMDXContent.isMDXComponent = true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvZ3JhcGgvQ29yZUNvbmNlcHRzLmIvUGFkZGluZy5mLmdyYXBoLm1keCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3lCO0FBQ1U7O0FBRW5DO0FBQ0E7QUFDb0U7QUFDSjtBQUdoRSxJQUFNSSxXQUFXLEdBQUcsQ0FFcEIsQ0FBQztBQUNELElBQU1DLFNBQVMsR0FBRyxTQUFTO0FBQ1osU0FBU0MsVUFBVUEsQ0FBQUMsSUFBQSxFQUcvQjtFQUFBLElBRkRDLFVBQVUsR0FBQUQsSUFBQSxDQUFWQyxVQUFVO0lBQ1BDLEtBQUssR0FBQUMsMEZBQUEsQ0FBQUgsSUFBQSxFQUFBSSxTQUFBO0VBRVIsT0FBT1Ysa0RBQUEsQ0FBQ0ksU0FBUyxFQUFBTywwRUFBQSxLQUFLUixXQUFXLEVBQU1LLEtBQUs7SUFBRUQsVUFBVSxFQUFFQSxVQUFXO0lBQUNLLE9BQU8sRUFBQztFQUFXLElBRXZGWixrREFBQTtJQUNFLElBQUksRUFBRTtFQUFTLFlBQ0MsQ0FBQyxFQUNuQkEsa0RBQUEsYUFDRUEsa0RBQUE7SUFBSWEsVUFBVSxFQUFDO0VBQUksR0FBQ2Isa0RBQUE7SUFBR2EsVUFBVSxFQUFDLElBQUk7SUFDbEMsTUFBTSxFQUFFO0VBQW9CLHNCQUNILENBQUssQ0FBQyxFQUNuQ2Isa0RBQUE7SUFBSWEsVUFBVSxFQUFDO0VBQUksR0FBQ2Isa0RBQUE7SUFBR2EsVUFBVSxFQUFDLElBQUk7SUFDbEMsTUFBTSxFQUFFO0VBQWtCLG9CQUNILENBQUssQ0FBQyxFQUNqQ2Isa0RBQUE7SUFBSWEsVUFBVSxFQUFDO0VBQUksR0FBQ2Isa0RBQUE7SUFBR2EsVUFBVSxFQUFDLElBQUk7SUFDbEMsTUFBTSxFQUFFO0VBQVksY0FDSCxDQUFLLENBQUMsRUFDM0JiLGtEQUFBO0lBQUlhLFVBQVUsRUFBQztFQUFJLEdBQUNiLGtEQUFBO0lBQUdhLFVBQVUsRUFBQyxJQUFJO0lBQ2xDLE1BQU0sRUFB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Q2pCLE9BQU8sRUFBRTtFQUFJLHdEQUMrQyxDQUM1RCxDQUFDLEVBQ0xiLGtEQUFBO0lBQUlhLFVBQVUsRUFBQztFQUFPLEdBQ3BCYixrREFBQTtJQUFJYSxVQUFVLEVBQUMsSUFBSTtJQUNqQixPQUFPLEVBQUU7RUFBSSxHQUNaYixrREFBQTtJQUFZYSxVQUFVLEVBQUM7RUFBSSxVQUFzQixDQUFLLENBQUMsRUFDMURiLGtEQUFBO0lBQUlhLFVBQVUsRUFBQyxJQUFJO0lBQ2pCLE9BQU8sRUFBRTtFQUFJLFdBQ0UsQ0FBQyxFQUNsQmIsa0RBQUE7SUFBSWEsVUFBVSxFQUFDLElBQUk7SUFDakIsT0FBTyxFQUFFO0VBQUksR0FDWmIsa0RBQUE7SUFBWWEsVUFBVSxFQUFDO0VBQUksT0FBbUIsQ0FBSyxDQUFDLEVBQ3ZEYixrREFBQTtJQUFJYSxVQUFVLEVBQUMsSUFBSTtJQUNqQixPQUFPLEVBQUU7RUFBSSx1REFDOEMsQ0FDM0QsQ0FDQyxDQUNGLENBQUMsRUFDUmIsa0RBQUEsYUFDRUEsa0RBQUE7SUFBSWEsVUFBVSxFQUFDO0VBQUkseUhBQTZILENBQUMsRUFDakpiLGtEQUFBO0lBQUlhLFVBQVUsRUFBQztFQUFJLG9FQUF3RSxDQUFDLEVBQzVGYixrREFBQTtJQUFJYSxVQUFVLEVBQUM7RUFBSSxrSEFBc0gsQ0FBQyxFQUMxSWIsa0RBQUE7SUFBSWEsVUFBVSxFQUFDO0VBQUksa0hBQXNILENBQ3ZJLENBQ08sQ0FBQztBQUNoQjtBQUNBO0FBQ0FSLFVBQVUsQ0FBQ2UsY0FBYyxHQUFHLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvZ3JhcGgvQ29yZUNvbmNlcHRzLmIvUGFkZGluZy5mLmdyYXBoLm1keD8wMmE2Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCdcblxuLyogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyogQGpzeCBtZHggKi9cbmltcG9ydCBjb250YWluZXIgZnJvbSAnLi4vLi4vLi4vLi4vZG9jcy9hc3NldHMvZ3JhcGgtY29udGFpbmVyLnBuZyc7XG5pbXBvcnQgY29udGVudCBmcm9tICcuLi8uLi8uLi8uLi9kb2NzL2Fzc2V0cy9ncmFwaC1jb250ZW50LnBuZyc7XG5cblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIFxufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuICAgIDxoMSB7Li4ue1xuICAgICAgXCJpZFwiOiBcInBhZGRpbmdcIlxuICAgIH19PntgUGFkZGluZ2B9PC9oMT5cbiAgICA8dWw+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIjY29udGFpbmVyLXBhZGRpbmdcIlxuICAgICAgICB9fT57YENvbnRhaW5lciBQYWRkaW5nYH08L2E+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcIiNjb250ZW50LXBhZGRpbmdcIlxuICAgICAgICB9fT57YENvbnRlbnQgUGFkZGluZ2B9PC9hPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIjc3RydWN0dXJlXCJcbiAgICAgICAgfX0+e2BTdHJ1Y3R1cmVgfTwvYT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiI3Byb3BlcnRpZXNcIlxuICAgICAgICB9fT57YFByb3BlcnRpZXNgfTwvYT48L2xpPlxuICAgIDwvdWw+XG4gICAgPHA+e2BUaGVyZSBhcmUgMiBraW5kcyBvZiBwYWRkaW5nIHRoYXQgY2FuIGJlIGFwcGxpZWQgdG8gZ3JhcGhzOmB9PC9wPlxuICAgIDxvbD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwib2xcIj57YENvbnRhaW5lciBQYWRkaW5nYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJvbFwiPntgQ29udGVudCBQYWRkaW5nYH08L2xpPlxuICAgIDwvb2w+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwiY29udGFpbmVyLXBhZGRpbmdcIlxuICAgIH19PntgQ29udGFpbmVyIFBhZGRpbmdgfTwvaDI+XG4gICAgPHA+e2BDb25zdW1lciBjYW4gYWRkIENTUyBwYWRkaW5nL21hcmdpbiBvbiB0aGUgY29udGFpbmVyIG9mIHRoZSBncmFwaCB3aG9zZSBJRCBpcyBwcm92aWRlZCB0byBDYXJib24ncyBpbnB1dCAodmlhIEpTT04pIGZvciBpbnNlcnRpbmcgdGhlIGdyYXBoLiBBYm92ZSBwcm9wZXJ0aWVzIGFwcGxpZWQgd2lsbCBiZSB1c2VkIHRvIHBvc2l0aW9uIHRoZSBncmFwaCdzIGF4aXMsIGdyaWQsIGxhYmVscywgbGVnZW5kIGV0Yy5gfTwvcD5cbiAgICA8cD48c3Ryb25nIHBhcmVudE5hbWU9XCJwXCI+e2BFeGFtcGxlIHVzZSBjYXNlOmB9PC9zdHJvbmc+e2AgQ29uc3VtZXIgaGFzIG11bHRpcGxlIGdyYXBocyBhbmQgdGhleSB3YW50IHRvIHBvc2l0aW9uL2xpbmUtdXAgYWxsIHRoZSBncmFwaHMgdmVydGljYWxseS5gfTwvcD5cbiAgICA8aW1nIHNyYz17Y29udGFpbmVyfSBhbHQ9XCJDb250YWluZXJcIiBzdHlsZT17e1xuICAgICAgd2lkdGg6IDEyMDAsXG4gICAgICBoZWlnaHQ6IDQwMCxcbiAgICAgIHBhZGRpbmdMZWZ0OiA1MFxuICAgIH19IC8+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwiY29udGVudC1wYWRkaW5nXCJcbiAgICB9fT57YENvbnRlbnQgUGFkZGluZ2B9PC9oMj5cbiAgICA8cD57YENvbnN1bWVyIGNhbiB1c2UgdGhlIGlucHV0IEpTT04ncyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYWRkaW5nYH08L2lubGluZUNvZGU+e2AgcHJvcGVydHkgdG8gcG9zaXRpb24gdGhlIGNvbnRlbnQgb2YgdGhlIGdyYXBoIGluIHRoZSBjb250YWluZXIuYH08L3A+XG4gICAgPHA+PHN0cm9uZyBwYXJlbnROYW1lPVwicFwiPntgV0FSTklORzpgfTwvc3Ryb25nPntgXG5Vc2Ugb2YgY29udGVudC1iYXNlZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BwYWRkaW5nYH08L2lubGluZUNvZGU+e2AgcHJvcGVydHkgaXMgc3RyaWN0bHkgdXNlLWNhc2Ugc3BlY2lmaWMuIEZsYWdzIHN1Y2ggYXMgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgc2hvd0xhYmVsYH08L2lubGluZUNvZGU+e2AgYW5kIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGF4aXMueC5zaG93YH08L2lubGluZUNvZGU+e2AgYW5kIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGF4aXMueS5zaG93YH08L2lubGluZUNvZGU+e2AgbmVlZHMgdG8gYmUgaGlkZGVuIGFwcHJvcHJpYXRlbHkgYnkgdGhlIGNvbnN1bWVyLmB9PC9wPlxuICAgIDxwPjxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YEV4YW1wbGUgdXNlIGNhc2U6YH08L3N0cm9uZz57YCBDb25zdW1lciBoYXMgdGhlaXIgb3duIGF4aXMgYW5kIGxhYmVscyBhbmQgd2FudHMgdG8gb25seSBtYWtlIHVzZSBvZiB0aGUgY29udGVudCBhbmQgZ3JpZCBsaW5lcy5gfTwvcD5cbiAgICA8aW1nIHNyYz17Y29udGVudH0gYWx0PVwiQ29udGVudFwiIHN0eWxlPXt7XG4gICAgICB3aWR0aDogMTIwMCxcbiAgICAgIGhlaWdodDogNDAwLFxuICAgICAgcGFkZGluZ0xlZnQ6IDUwXG4gICAgfX0gLz5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJzdHJ1Y3R1cmVcIlxuICAgIH19PntgU3RydWN0dXJlYH08L2gyPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtamF2YXNjcmlwdFwiXG4gICAgICB9fT57YHZhciBwYWRkaW5nID0ge1xuICAgIHRvcDogMTAsXG4gICAgYm90dG9tOiAxMCxcbiAgICBsZWZ0OiAzMCxcbiAgICByaWdodDogNTBcbn07XG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJwcm9wZXJ0aWVzXCJcbiAgICB9fT57YFByb3BlcnRpZXNgfTwvaDI+XG4gICAgPHRhYmxlPlxuICAgICAgPHRoZWFkIHBhcmVudE5hbWU9XCJ0YWJsZVwiPlxuICAgICAgICA8dHIgcGFyZW50TmFtZT1cInRoZWFkXCI+XG4gICAgICAgICAgPHRoIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICB9fT57YFByb3BlcnR5IE5hbWVgfTwvdGg+XG4gICAgICAgICAgPHRoIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICB9fT57YEV4cGVjdGVkYH08L3RoPlxuICAgICAgICAgIDx0aCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgfX0+e2BEZWZhdWx0YH08L3RoPlxuICAgICAgICAgIDx0aCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgfX0+e2BEZXNjcmlwdGlvbmB9PC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHkgcGFyZW50TmFtZT1cInRhYmxlXCI+XG4gICAgICAgIDx0ciBwYXJlbnROYW1lPVwidGJvZHlcIj5cbiAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJ0ZFwiPntgdG9wYH08L2lubGluZUNvZGU+PC90ZD5cbiAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgIH19PntgbnVtYmVyYH08L3RkPlxuICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInRkXCI+e2AxMGB9PC9pbmxpbmVDb2RlPjwvdGQ+XG4gICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICB9fT57YEN1c3RvbWl6ZSB0aGUgdG9wLXN0YXJ0IHBvaW50IG9mIHRoZSBncmFwaCBjb250ZW50YH08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHIgcGFyZW50TmFtZT1cInRib2R5XCI+XG4gICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YGJvdHRvbWB9PC9pbmxpbmVDb2RlPjwvdGQ+XG4gICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICB9fT57YG51bWJlcmB9PC90ZD5cbiAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJ0ZFwiPntgMTBgfTwvaW5saW5lQ29kZT48L3RkPlxuICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgfX0+e2BDdXN0b21pemUgdGhlIGxlbmd0aCBmcm9tIHRoZSBib3R0b20gb2YgY29udGVudCByZWxhdGl2ZSB0byBib3R0b20tZW5kIHBvaW50IG9mIHRoZSBncmFwaCBjb250ZW50YH08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHIgcGFyZW50TmFtZT1cInRib2R5XCI+XG4gICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YGxlZnRgfTwvaW5saW5lQ29kZT48L3RkPlxuICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgfX0+e2BudW1iZXJgfTwvdGQ+XG4gICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YDMwYH08L2lubGluZUNvZGU+PC90ZD5cbiAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgIH19PntgQ3VzdG9taXplIHRoZSBsZWZ0LXN0YXJ0IHBvaW50IG9mIHRoZSBncmFwaCBjb250ZW50YH08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHIgcGFyZW50TmFtZT1cInRib2R5XCI+XG4gICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwidGRcIj57YHJpZ2h0YH08L2lubGluZUNvZGU+PC90ZD5cbiAgICAgICAgICA8dGQgcGFyZW50TmFtZT1cInRyXCIgey4uLntcbiAgICAgICAgICAgIFwiYWxpZ25cIjogbnVsbFxuICAgICAgICAgIH19PntgbnVtYmVyYH08L3RkPlxuICAgICAgICAgIDx0ZCBwYXJlbnROYW1lPVwidHJcIiB7Li4ue1xuICAgICAgICAgICAgXCJhbGlnblwiOiBudWxsXG4gICAgICAgICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInRkXCI+e2A1MGB9PC9pbmxpbmVDb2RlPjwvdGQ+XG4gICAgICAgICAgPHRkIHBhcmVudE5hbWU9XCJ0clwiIHsuLi57XG4gICAgICAgICAgICBcImFsaWduXCI6IG51bGxcbiAgICAgICAgICB9fT57YEN1c3RvbWl6ZSB0aGUgcmlnaHQtZW5kIHBvaW50IG9mIHRoZSBncmFwaCBjb250ZW50YH08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YEZvciBzb21lIGdyYXBocyBsaWtlIEdhbnR0LCBpZiB0b3AgcGFkZGluZyBpcyBub3QgcHJvcGVybHkgcGFkZGVkLCB0aGUgY3VzdG9tIGRhdGVsaW5lIGluZGljYXRvcnMgbWlnaHQgZ2V0IGN1dC1vZmYuYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgQXhlcyBMYWJlbHMgY2FuIGFwcGVhciB3aXRoaW4gdGhlIGdyYXBoIGlmIG5vdCBwYWRkZWQgcHJvcGVybHkuYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgQXhlcyB0aWNrcyBhbmQgdGV4dCBtaWdodCBnZXQgY3V0LW9mZiB3aGVuIHRoZSBwYWRkaW5nIGJlaW5nIHVzZWQgaXMgdG9vIGxvdyB0aGFuIHRoZSBkZWZhdWx0IHBhZGRpbmcgdmFsdWVzLmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFVzaW5nIG5lZ2F0aXZlIHZhbHVlcyBmb3IgcGFkZGluZyBpcyBhbGxvd2VkLCBkb2luZyBzbywgaXQgc2hpZnRzIGdyYXBoIGNvbnRlbnQgbW9yZSB0b3dhcmRzIHRoZSBwYWRkZWQgc2lkZS5gfTwvbGk+XG4gICAgPC91bD5cbiAgICA8L01EWExheW91dD47XG59XG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTsiXSwibmFtZXMiOlsiUmVhY3QiLCJtZHgiLCJjb250YWluZXIiLCJjb250ZW50IiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiX3JlZiIsImNvbXBvbmVudHMiLCJwcm9wcyIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIl9leGNsdWRlZCIsIl9leHRlbmRzIiwibWR4VHlwZSIsInBhcmVudE5hbWUiLCJzcmMiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwicGFkZGluZ0xlZnQiLCJpc01EWENvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/graph/CoreConcepts.b/Padding.f.graph.mdx\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/docs/assets/graph-container.png":
/*!********************************************************************!*\
  !*** ./packages/terra-graphs-docs/docs/assets/graph-container.png ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"cb846c5995363a0ef6cb3da3d336d6f3.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9kb2NzL2Fzc2V0cy9ncmFwaC1jb250YWluZXIucG5nIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxxQkFBdUIseUNBQXlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVycmEtZ3JhcGhzLy4vcGFja2FnZXMvdGVycmEtZ3JhcGhzLWRvY3MvZG9jcy9hc3NldHMvZ3JhcGgtY29udGFpbmVyLnBuZz9iZGY2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjYjg0NmM1OTk1MzYzYTBlZjZjYjNkYTNkMzM2ZDZmMy5wbmdcIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/docs/assets/graph-container.png\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/docs/assets/graph-content.png":
/*!******************************************************************!*\
  !*** ./packages/terra-graphs-docs/docs/assets/graph-content.png ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ceb0f1477985e1a70891cbc2f293027a.png\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9kb2NzL2Fzc2V0cy9ncmFwaC1jb250ZW50LnBuZyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUscUJBQXVCLHlDQUF5QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL2RvY3MvYXNzZXRzL2dyYXBoLWNvbnRlbnQucG5nP2Q2ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNlYjBmMTQ3Nzk4NWUxYTcwODkxY2JjMmYyOTMwMjdhLnBuZ1wiOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/docs/assets/graph-content.png\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _extends; }\n/* harmony export */ });\nfunction _extends() {\n  _extends = Object.assign ? Object.assign.bind() : function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n    return target;\n  };\n  return _extends.apply(this, arguments);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzP2MwMWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/extends.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _objectWithoutProperties; }\n/* harmony export */ });\n/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\");\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n  var target = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(source, excluded);\n  var key, i;\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n  return target;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkU7QUFDOUQ7QUFDZjtBQUNBLGVBQWUsNEVBQTRCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiw2QkFBNkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcz9hOGY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _objectWithoutPropertiesLoose; }\n/* harmony export */ });\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n  return target;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsdUJBQXVCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzPzc0MDIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js\n");

/***/ })

}]);