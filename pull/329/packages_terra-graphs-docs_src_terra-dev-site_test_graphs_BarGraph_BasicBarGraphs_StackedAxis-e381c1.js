"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkterra_graphs"] = self["webpackChunkterra_graphs"] || []).push([["packages_terra-graphs-docs_src_terra-dev-site_test_graphs_BarGraph_BasicBarGraphs_StackedAxis-e381c1"],{

/***/ "./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bar/stackedBarData1AxisInfo.js":
/*!****************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bar/stackedBarData1AxisInfo.js ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/carbon */ \"./packages/carbon-graphs/src/js/carbon.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/popup */ \"./packages/terra-graphs-docs/src/example-datasets/popup.js\");\n\n\nvar data = {\n  key: 'stacked_bar_1',\n  label: {\n    display: 'Dataset 1'\n  },\n  color: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.GREEN,\n  onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadBarPopup,\n  values: [{\n    x: 1,\n    y: 30\n  }, {\n    x: 2,\n    y: 10\n  }, {\n    x: 3,\n    y: 13\n  }, {\n    x: 4,\n    y: 15\n  }, {\n    x: 5,\n    y: 18\n  }],\n  axisInfoRow: [{\n    axis: 'x',\n    x: 1,\n    value: {\n      onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadTextLabelPopup,\n      characterCount: 4,\n      color: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.ORANGE,\n      shape: {\n        path: {\n          d: 'M24,0l24,24L24,48L0,24L24,0z',\n          fill: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.ORANGE\n        },\n        options: {\n          x: -6,\n          y: -6,\n          scale: 0.25\n        }\n      },\n      label: {\n        display: '1234567',\n        secondaryDisplay: 'ICU'\n      }\n    }\n  }, {\n    axis: 'x',\n    x: 2,\n    value: {\n      onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadTextLabelPopup,\n      color: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n      shape: {\n        path: {\n          d: 'M24,0l24,24L24,48L0,24L24,0z',\n          fill: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.PURPLE\n        },\n        options: {\n          x: -6,\n          y: -6,\n          scale: 0.25\n        }\n      },\n      label: {\n        display: '65',\n        secondaryDisplay: 'ICU'\n      }\n    }\n  }, {\n    axis: 'x',\n    x: 3,\n    value: {\n      onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadTextLabelPopup,\n      color: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.GREEN,\n      shape: {\n        path: {\n          d: 'M24,0l24,24L24,48L0,24L24,0z'\n        },\n        options: {\n          x: -6,\n          y: -6,\n          scale: 0.25\n        }\n      },\n      label: {\n        display: '42',\n        secondaryDisplay: 'ICU'\n      }\n    }\n  }, {\n    axis: 'x',\n    x: 4,\n    value: {\n      onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadTextLabelPopup,\n      color: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n      shape: {},\n      label: {\n        display: '23',\n        secondaryDisplay: ''\n      }\n    }\n  }, {\n    axis: 'x',\n    x: 5,\n    value: {\n      onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadTextLabelPopup,\n      color: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n      shape: {},\n      label: {\n        display: '',\n        secondaryDisplay: 'ICU'\n      }\n    }\n  }, {\n    axis: 'x',\n    x: 6,\n    value: {\n      onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadTextLabelPopup,\n      color: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n      shape: {},\n      label: {\n        display: '25',\n        secondaryDisplay: 'ICU'\n      }\n    }\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9CYXIvc3RhY2tlZEJhckRhdGExQXhpc0luZm8uanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXlEO0FBQytDO0FBRXhHLElBQU1HLElBQUksR0FBRztFQUNYQyxHQUFHLEVBQUUsZUFBZTtFQUNwQkMsS0FBSyxFQUFFO0lBQ0xDLE9BQU8sRUFBRTtFQUNYLENBQUM7RUFDREMsS0FBSyxFQUFFUCwyRUFBTSxDQUFDUSxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztFQUNsQ0MsT0FBTyxFQUFFViw4RkFBWTtFQUNyQlcsTUFBTSxFQUFFLENBQ047SUFDRUMsQ0FBQyxFQUFFLENBQUM7SUFDSkMsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxFQUNEO0lBQ0VELENBQUMsRUFBRSxDQUFDO0lBQ0pDLENBQUMsRUFBRTtFQUNMLENBQUMsRUFDRDtJQUNFRCxDQUFDLEVBQUUsQ0FBQztJQUNKQyxDQUFDLEVBQUU7RUFDTCxDQUFDLEVBQ0Q7SUFDRUQsQ0FBQyxFQUFFLENBQUM7SUFDSkMsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxFQUNEO0lBQ0VELENBQUMsRUFBRSxDQUFDO0lBQ0pDLENBQUMsRUFBRTtFQUNMLENBQUMsQ0FDRjtFQUNEQyxXQUFXLEVBQUUsQ0FDWDtJQUNFQyxJQUFJLEVBQUUsR0FBRztJQUNUSCxDQUFDLEVBQUUsQ0FBQztJQUNKSSxLQUFLLEVBQUU7TUFDTE4sT0FBTyxFQUFFVCxvR0FBa0I7TUFDM0JnQixjQUFjLEVBQUUsQ0FBQztNQUNqQlgsS0FBSyxFQUFFUCwyRUFBTSxDQUFDUSxPQUFPLENBQUNDLE1BQU0sQ0FBQ1UsTUFBTTtNQUNuQ0MsS0FBSyxFQUFFO1FBQ0xDLElBQUksRUFBRTtVQUNKQyxDQUFDLEVBQUUsOEJBQThCO1VBQ2pDQyxJQUFJLEVBQUV2QiwyRUFBTSxDQUFDUSxPQUFPLENBQUNDLE1BQU0sQ0FBQ1U7UUFDOUIsQ0FBQztRQUNESyxP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YXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy9leGFtcGxlLWRhdGFzZXRzL2RhdGFPYmplY3RzL0Jhci9zdGFja2VkQmFyRGF0YTFBeGlzSW5mby5qcz8wYjczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJib24gZnJvbSAnQGNlcm5lci9jYXJib24tZ3JhcGhzL2xpYi9qcy9jYXJib24nO1xuaW1wb3J0IHsgbG9hZEJhclBvcHVwLCBsb2FkVGV4dExhYmVsUG9wdXAgfSBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL3BvcHVwJztcblxuY29uc3QgZGF0YSA9IHtcbiAga2V5OiAnc3RhY2tlZF9iYXJfMScsXG4gIGxhYmVsOiB7XG4gICAgZGlzcGxheTogJ0RhdGFzZXQgMScsXG4gIH0sXG4gIGNvbG9yOiBDYXJib24uaGVscGVycy5DT0xPUlMuR1JFRU4sXG4gIG9uQ2xpY2s6IGxvYWRCYXJQb3B1cCxcbiAgdmFsdWVzOiBbXG4gICAge1xuICAgICAgeDogMSxcbiAgICAgIHk6IDMwLFxuICAgIH0sXG4gICAge1xuICAgICAgeDogMixcbiAgICAgIHk6IDEwLFxuICAgIH0sXG4gICAge1xuICAgICAgeDogMyxcbiAgICAgIHk6IDEzLFxuICAgIH0sXG4gICAge1xuICAgICAgeDogNCxcbiAgICAgIHk6IDE1LFxuICAgIH0sXG4gICAge1xuICAgICAgeDogNSxcbiAgICAgIHk6IDE4LFxuICAgIH0sXG4gIF0sXG4gIGF4aXNJbmZvUm93OiBbXG4gICAge1xuICAgICAgYXhpczogJ3gnLFxuICAgICAgeDogMSxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIG9uQ2xpY2s6IGxvYWRUZXh0TGFiZWxQb3B1cCxcbiAgICAgICAgY2hhcmFjdGVyQ291bnQ6IDQsXG4gICAgICAgIGNvbG9yOiBDYXJib24uaGVscGVycy5DT0xPUlMuT1JBTkdFLFxuICAgICAgICBzaGFwZToge1xuICAgICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgIGQ6ICdNMjQsMGwyNCwyNEwyNCw0OEwwLDI0TDI0LDB6JyxcbiAgICAgICAgICAgIGZpbGw6IENhcmJvbi5oZWxwZXJzLkNPTE9SUy5PUkFOR0UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICB4OiAtNixcbiAgICAgICAgICAgIHk6IC02LFxuICAgICAgICAgICAgc2NhbGU6IDAuMjUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnMTIzNDU2NycsXG4gICAgICAgICAgc2Vjb25kYXJ5RGlzcGxheTogJ0lDVScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgYXhpczogJ3gnLFxuICAgICAgeDogMixcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIG9uQ2xpY2s6IGxvYWRUZXh0TGFiZWxQb3B1cCxcbiAgICAgICAgY29sb3I6IENhcmJvbi5oZWxwZXJzLkNPTE9SUy5CTEFDSyxcbiAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkOiAnTTI0LDBsMjQsMjRMMjQsNDhMMCwyNEwyNCwweicsXG4gICAgICAgICAgICBmaWxsOiBDYXJib24uaGVscGVycy5DT0xPUlMuUFVSUExFLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgeDogLTYsXG4gICAgICAgICAgICB5OiAtNixcbiAgICAgICAgICAgIHNjYWxlOiAwLjI1LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogJzY1JyxcbiAgICAgICAgICBzZWNvbmRhcnlEaXNwbGF5OiAnSUNVJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBheGlzOiAneCcsXG4gICAgICB4OiAzLFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgb25DbGljazogbG9hZFRleHRMYWJlbFBvcHVwLFxuICAgICAgICBjb2xvcjogQ2FyYm9uLmhlbHBlcnMuQ09MT1JTLkdSRUVOLFxuICAgICAgICBzaGFwZToge1xuICAgICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgIGQ6ICdNMjQsMGwyNCwyNEwyNCw0OEwwLDI0TDI0LDB6JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHg6IC02LFxuICAgICAgICAgICAgeTogLTYsXG4gICAgICAgICAgICBzY2FsZTogMC4yNSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6ICc0MicsXG4gICAgICAgICAgc2Vjb25kYXJ5RGlzcGxheTogJ0lDVScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgYXhpczogJ3gnLFxuICAgICAgeDogNCxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIG9uQ2xpY2s6IGxvYWRUZXh0TGFiZWxQb3B1cCxcbiAgICAgICAgY29sb3I6IENhcmJvbi5oZWxwZXJzLkNPTE9SUy5CTEFDSyxcbiAgICAgICAgc2hhcGU6IHt9LFxuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6ICcyMycsXG4gICAgICAgICAgc2Vjb25kYXJ5RGlzcGxheTogJycsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgYXhpczogJ3gnLFxuICAgICAgeDogNSxcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIG9uQ2xpY2s6IGxvYWRUZXh0TGFiZWxQb3B1cCxcbiAgICAgICAgY29sb3I6IENhcmJvbi5oZWxwZXJzLkNPTE9SUy5CTEFDSyxcbiAgICAgICAgc2hhcGU6IHt9LFxuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6ICcnLFxuICAgICAgICAgIHNlY29uZGFyeURpc3BsYXk6ICdJQ1UnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGF4aXM6ICd4JyxcbiAgICAgIHg6IDYsXG4gICAgICB2YWx1ZToge1xuICAgICAgICBvbkNsaWNrOiBsb2FkVGV4dExhYmVsUG9wdXAsXG4gICAgICAgIGNvbG9yOiBDYXJib24uaGVscGVycy5DT0xPUlMuQkxBQ0ssXG4gICAgICAgIHNoYXBlOiB7fSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnMjUnLFxuICAgICAgICAgIHNlY29uZGFyeURpc3BsYXk6ICdJQ1UnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcbiJdLCJuYW1lcyI6WyJDYXJib24iLCJsb2FkQmFyUG9wdXAiLCJsb2FkVGV4dExhYmVsUG9wdXAiLCJkYXRhIiwia2V5IiwibGFiZWwiLCJkaXNwbGF5IiwiY29sb3IiLCJoZWxwZXJzIiwiQ09MT1JTIiwiR1JFRU4iLCJvbkNsaWNrIiwidmFsdWVzIiwieCIsInkiLCJheGlzSW5mb1JvdyIsImF4aXMiLCJ2YWx1ZSIsImNoYXJhY3RlckNvdW50IiwiT1JBTkdFIiwic2hhcGUiLCJwYXRoIiwiZCIsImZpbGwiLCJvcHRpb25zIiwic2NhbGUiLCJzZWNvbmRhcnlEaXNwbGF5IiwiQkxBQ0siLCJQVVJQTEUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bar/stackedBarData1AxisInfo.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bar/stackedBarData2.js":
/*!********************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bar/stackedBarData2.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/carbon */ \"./packages/carbon-graphs/src/js/carbon.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/popup */ \"./packages/terra-graphs-docs/src/example-datasets/popup.js\");\n\n\nvar data = {\n  key: 'stacked_bar_2',\n  label: {\n    display: 'Dataset 2'\n  },\n  group: 'stacked_bar_1',\n  color: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.LIGHT_PURPLE,\n  onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadBarPopup,\n  values: [{\n    x: 1,\n    y: 30\n  }, {\n    x: 2,\n    y: 5\n  }, {\n    x: 3,\n    y: 8\n  }, {\n    x: 4,\n    y: 10\n  }, {\n    x: 5,\n    y: 10\n  }, {\n    x: 6,\n    y: 10\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9CYXIvc3RhY2tlZEJhckRhdGEyLmpzIiwibWFwcGluZ3MiOiI7OztBQUF5RDtBQUMyQjtBQUVwRixJQUFNRSxJQUFJLEdBQUc7RUFDWEMsR0FBRyxFQUFFLGVBQWU7RUFDcEJDLEtBQUssRUFBRTtJQUNMQyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RDLEtBQUssRUFBRSxlQUFlO0VBQ3RCQyxLQUFLLEVBQUVQLDJFQUFNLENBQUNRLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxZQUFZO0VBQ3pDQyxPQUFPLEVBQUVWLDhGQUFZO0VBQ3JCVyxNQUFNLEVBQUUsQ0FDTjtJQUNFQyxDQUFDLEVBQUUsQ0FBQztJQUNKQyxDQUFDLEVBQUU7RUFDTCxDQUFDLEVBQ0Q7SUFDRUQsQ0FBQyxFQUFFLENBQUM7SUFDSkMsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxFQUNEO0lBQ0VELENBQUMsRUFBRSxDQUFDO0lBQ0pDLENBQUMsRUFBRTtFQUNMLENBQUMsRUFDRDtJQUNFRCxDQUFDLEVBQUUsQ0FBQztJQUNKQyxDQUFDLEVBQUU7RUFDTCxDQUFDLEVBQ0Q7SUFDRUQsQ0FBQyxFQUFFLENBQUM7SUFDSkMsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxFQUNEO0lBQ0VELENBQUMsRUFBRSxDQUFDO0lBQ0pDLENBQUMsRUFBRTtFQUNMLENBQUM7QUFFTCxDQUFDO0FBRUQsK0RBQWVaLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9CYXIvc3RhY2tlZEJhckRhdGEyLmpzPzJjN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmJvbiBmcm9tICdAY2VybmVyL2NhcmJvbi1ncmFwaHMvbGliL2pzL2NhcmJvbic7XG5pbXBvcnQgeyBsb2FkQmFyUG9wdXAgfSBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL3BvcHVwJztcblxuY29uc3QgZGF0YSA9IHtcbiAga2V5OiAnc3RhY2tlZF9iYXJfMicsXG4gIGxhYmVsOiB7XG4gICAgZGlzcGxheTogJ0RhdGFzZXQgMicsXG4gIH0sXG4gIGdyb3VwOiAnc3RhY2tlZF9iYXJfMScsXG4gIGNvbG9yOiBDYXJib24uaGVscGVycy5DT0xPUlMuTElHSFRfUFVSUExFLFxuICBvbkNsaWNrOiBsb2FkQmFyUG9wdXAsXG4gIHZhbHVlczogW1xuICAgIHtcbiAgICAgIHg6IDEsXG4gICAgICB5OiAzMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHg6IDIsXG4gICAgICB5OiA1LFxuICAgIH0sXG4gICAge1xuICAgICAgeDogMyxcbiAgICAgIHk6IDgsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiA0LFxuICAgICAgeTogMTAsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiA1LFxuICAgICAgeTogMTAsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiA2LFxuICAgICAgeTogMTAsXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRhdGE7XG4iXSwibmFtZXMiOlsiQ2FyYm9uIiwibG9hZEJhclBvcHVwIiwiZGF0YSIsImtleSIsImxhYmVsIiwiZGlzcGxheSIsImdyb3VwIiwiY29sb3IiLCJoZWxwZXJzIiwiQ09MT1JTIiwiTElHSFRfUFVSUExFIiwib25DbGljayIsInZhbHVlcyIsIngiLCJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bar/stackedBarData2.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bar/stackedBarData3.js":
/*!********************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bar/stackedBarData3.js ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/carbon */ \"./packages/carbon-graphs/src/js/carbon.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/popup */ \"./packages/terra-graphs-docs/src/example-datasets/popup.js\");\n\n\nvar data = {\n  key: 'stacked_bar_3',\n  label: {\n    display: 'Dataset 3'\n  },\n  group: 'stacked_bar_1',\n  color: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLUE,\n  onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadBarPopup,\n  values: [{\n    x: 1,\n    y: 30\n  }, {\n    x: 2,\n    y: 8\n  }, {\n    x: 3,\n    y: 9\n  }, {\n    x: 4,\n    y: 10\n  }, {\n    x: 5,\n    y: 7\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9CYXIvc3RhY2tlZEJhckRhdGEzLmpzIiwibWFwcGluZ3MiOiI7OztBQUF5RDtBQUMyQjtBQUVwRixJQUFNRSxJQUFJLEdBQUc7RUFDWEMsR0FBRyxFQUFFLGVBQWU7RUFDcEJDLEtBQUssRUFBRTtJQUNMQyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RDLEtBQUssRUFBRSxlQUFlO0VBQ3RCQyxLQUFLLEVBQUVQLDJFQUFNLENBQUNRLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJO0VBQ2pDQyxPQUFPLEVBQUVWLDhGQUFZO0VBQ3JCVyxNQUFNLEVBQUUsQ0FDTjtJQUNFQyxDQUFDLEVBQUUsQ0FBQztJQUNKQyxDQUFDLEVBQUU7RUFDTCxDQUFDLEVBQ0Q7SUFDRUQsQ0FBQyxFQUFFLENBQUM7SUFDSkMsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxFQUNEO0lBQ0VELENBQUMsRUFBRSxDQUFDO0lBQ0pDLENBQUMsRUFBRTtFQUNMLENBQUMsRUFDRDtJQUNFRCxDQUFDLEVBQUUsQ0FBQztJQUNKQyxDQUFDLEVBQUU7RUFDTCxDQUFDLEVBQ0Q7SUFDRUQsQ0FBQyxFQUFFLENBQUM7SUFDSkMsQ0FBQyxFQUFFO0VBQ0wsQ0FBQztBQUVMLENBQUM7QUFFRCwrREFBZVosSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy9leGFtcGxlLWRhdGFzZXRzL2RhdGFPYmplY3RzL0Jhci9zdGFja2VkQmFyRGF0YTMuanM/ZjQzOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyYm9uIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocy9saWIvanMvY2FyYm9uJztcbmltcG9ydCB7IGxvYWRCYXJQb3B1cCB9IGZyb20gJ0BjZXJuZXIvdGVycmEtZ3JhcGhzLWRvY3MvbGliL2V4YW1wbGUtZGF0YXNldHMvcG9wdXAnO1xuXG5jb25zdCBkYXRhID0ge1xuICBrZXk6ICdzdGFja2VkX2Jhcl8zJyxcbiAgbGFiZWw6IHtcbiAgICBkaXNwbGF5OiAnRGF0YXNldCAzJyxcbiAgfSxcbiAgZ3JvdXA6ICdzdGFja2VkX2Jhcl8xJyxcbiAgY29sb3I6IENhcmJvbi5oZWxwZXJzLkNPTE9SUy5CTFVFLFxuICBvbkNsaWNrOiBsb2FkQmFyUG9wdXAsXG4gIHZhbHVlczogW1xuICAgIHtcbiAgICAgIHg6IDEsXG4gICAgICB5OiAzMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHg6IDIsXG4gICAgICB5OiA4LFxuICAgIH0sXG4gICAge1xuICAgICAgeDogMyxcbiAgICAgIHk6IDksXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiA0LFxuICAgICAgeTogMTAsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiA1LFxuICAgICAgeTogNyxcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGF0YTtcbiJdLCJuYW1lcyI6WyJDYXJib24iLCJsb2FkQmFyUG9wdXAiLCJkYXRhIiwia2V5IiwibGFiZWwiLCJkaXNwbGF5IiwiZ3JvdXAiLCJjb2xvciIsImhlbHBlcnMiLCJDT0xPUlMiLCJCTFVFIiwib25DbGljayIsInZhbHVlcyIsIngiLCJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bar/stackedBarData3.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Bar/barDefault.js":
/*!**********************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Bar/barDefault.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar getbarConfig = function getbarConfig(id) {\n  return {\n    bindTo: id,\n    bindLegendTo: null,\n    axis: {\n      x: {\n        show: true,\n        label: 'Data',\n        lowerLimit: 0,\n        upperLimit: 8,\n        ticks: {\n          values: [1, 2, 3, 4, 5, 6, 7],\n          format: '.0f'\n        }\n      },\n      y: {\n        show: true,\n        label: 'Bar Set A',\n        lowerLimit: 0,\n        upperLimit: 35\n      },\n      y2: {\n        show: false,\n        label: 'Bar Set B',\n        lowerLimit: 0,\n        upperLimit: 30\n      }\n    },\n    showLabel: true,\n    showLegend: true,\n    showShapes: true,\n    showVGrid: false,\n    showHGrid: true\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getbarConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9ncmFwaENvbmZpZ09iamVjdHMvQmFyL2JhckRlZmF1bHQuanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxFQUFFO0VBQUEsT0FBTTtJQUM1QkMsTUFBTSxFQUFFRCxFQUFFO0lBQ1ZFLFlBQVksRUFBRSxJQUFJO0lBQ2xCQyxJQUFJLEVBQUU7TUFDSkMsQ0FBQyxFQUFFO1FBQ0RDLElBQUksRUFBRSxJQUFJO1FBQ1ZDLEtBQUssRUFBRSxNQUFNO1FBQ2JDLFVBQVUsRUFBRSxDQUFDO1FBQ2JDLFVBQVUsRUFBRSxDQUFDO1FBQ2JDLEtBQUssRUFBRTtVQUNMQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7VUFDN0JDLE1BQU0sRUFBRTtRQUNWO01BQ0YsQ0FBQztNQUNEQyxDQUFDLEVBQUU7UUFDRFAsSUFBSSxFQUFFLElBQUk7UUFDVkMsS0FBSyxFQUFFLFdBQVc7UUFDbEJDLFVBQVUsRUFBRSxDQUFDO1FBQ2JDLFVBQVUsRUFBRTtNQUNkLENBQUM7TUFDREssRUFBRSxFQUFFO1FBQ0ZSLElBQUksRUFBRSxLQUFLO1FBQ1hDLEtBQUssRUFBRSxXQUFXO1FBQ2xCQyxVQUFVLEVBQUUsQ0FBQztRQUNiQyxVQUFVLEVBQUU7TUFDZDtJQUNGLENBQUM7SUFDRE0sU0FBUyxFQUFFLElBQUk7SUFDZkMsVUFBVSxFQUFFLElBQUk7SUFDaEJDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxTQUFTLEVBQUUsS0FBSztJQUNoQkMsU0FBUyxFQUFFO0VBQ2IsQ0FBQztBQUFBLENBQUM7QUFFRiwrREFBZW5CLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9ncmFwaENvbmZpZ09iamVjdHMvQmFyL2JhckRlZmF1bHQuanM/NTkxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRiYXJDb25maWcgPSAoaWQpID0+ICh7XG4gIGJpbmRUbzogaWQsXG4gIGJpbmRMZWdlbmRUbzogbnVsbCxcbiAgYXhpczoge1xuICAgIHg6IHtcbiAgICAgIHNob3c6IHRydWUsXG4gICAgICBsYWJlbDogJ0RhdGEnLFxuICAgICAgbG93ZXJMaW1pdDogMCxcbiAgICAgIHVwcGVyTGltaXQ6IDgsXG4gICAgICB0aWNrczoge1xuICAgICAgICB2YWx1ZXM6IFsxLCAyLCAzLCA0LCA1LCA2LCA3XSxcbiAgICAgICAgZm9ybWF0OiAnLjBmJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB5OiB7XG4gICAgICBzaG93OiB0cnVlLFxuICAgICAgbGFiZWw6ICdCYXIgU2V0IEEnLFxuICAgICAgbG93ZXJMaW1pdDogMCxcbiAgICAgIHVwcGVyTGltaXQ6IDM1LFxuICAgIH0sXG4gICAgeTI6IHtcbiAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgbGFiZWw6ICdCYXIgU2V0IEInLFxuICAgICAgbG93ZXJMaW1pdDogMCxcbiAgICAgIHVwcGVyTGltaXQ6IDMwLFxuICAgIH0sXG4gIH0sXG4gIHNob3dMYWJlbDogdHJ1ZSxcbiAgc2hvd0xlZ2VuZDogdHJ1ZSxcbiAgc2hvd1NoYXBlczogdHJ1ZSxcbiAgc2hvd1ZHcmlkOiBmYWxzZSxcbiAgc2hvd0hHcmlkOiB0cnVlLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldGJhckNvbmZpZztcblxuIl0sIm5hbWVzIjpbImdldGJhckNvbmZpZyIsImlkIiwiYmluZFRvIiwiYmluZExlZ2VuZFRvIiwiYXhpcyIsIngiLCJzaG93IiwibGFiZWwiLCJsb3dlckxpbWl0IiwidXBwZXJMaW1pdCIsInRpY2tzIiwidmFsdWVzIiwiZm9ybWF0IiwieSIsInkyIiwic2hvd0xhYmVsIiwic2hvd0xlZ2VuZCIsInNob3dTaGFwZXMiLCJzaG93VkdyaWQiLCJzaG93SEdyaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Bar/barDefault.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/BarGraph/BasicBarGraphs/StackedAxisInfoTextLabels.test.jsx":
/*!******************************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/BarGraph/BasicBarGraphs/StackedAxisInfoTextLabels.test.jsx ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/helpers/utils */ \"./packages/carbon-graphs/src/js/helpers/utils.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_graphs_src_components_Bar_BarGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Bar/BarGraph.jsx\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_dev_site_ExampleGraphContainer_ExampleGraphContainer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss */ \"./packages/terra-graphs-docs/src/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Bar_barDefault__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault */ \"./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Bar/barDefault.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Bar_stackedBarData1AxisInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData1AxisInfo */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bar/stackedBarData1AxisInfo.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Bar_stackedBarData2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData2.js */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bar/stackedBarData2.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Bar_stackedBarData3_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/stackedBarData3.js */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bar/stackedBarData3.js\");\n\n\n\n\n\n\n\n\nvar graphConfig = _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone((0,_cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Bar_barDefault__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('#stackedAxisInfoTextLabelsBarGraph'));\nvar dataset = [_cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Bar_stackedBarData1AxisInfo__WEBPACK_IMPORTED_MODULE_5__[\"default\"]), _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Bar_stackedBarData2_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]), _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Bar_stackedBarData3_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"tooltip\",\n    className: \"initial-tooltip\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_cerner_terra_graphs_docs_lib_terra_graphs_src_components_Bar_BarGraph__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    graphID: \"stackedAxisInfoTextLabelsBarGraph\",\n    graphConfig: graphConfig,\n    dataset: dataset\n  }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9ncmFwaHMvQmFyR3JhcGgvQmFzaWNCYXJHcmFwaHMvU3RhY2tlZEF4aXNJbmZvVGV4dExhYmVscy50ZXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDcUM7QUFDK0I7QUFDZ0I7QUFDRjtBQUNNO0FBQ0w7QUFDQTtBQUU3RyxJQUFNTyxXQUFXLEdBQUdOLGtGQUFLLENBQUNPLFNBQVMsQ0FBQ0wsNEhBQVksQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0FBQ3ZGLElBQU1NLE9BQU8sR0FBRyxDQUNkUixrRkFBSyxDQUFDTyxTQUFTLENBQUNKLDhIQUFZLENBQUMsRUFDN0JILGtGQUFLLENBQUNPLFNBQVMsQ0FBQ0gseUhBQVksQ0FBQyxFQUM3Qkosa0ZBQUssQ0FBQ08sU0FBUyxDQUFDRix5SEFBWSxDQUFDLENBQzlCO0FBRUQsK0RBQWU7RUFBQSxvQkFDYk4sZ0RBQUEsQ0FBQUEsMkNBQUEscUJBQ0VBLGdEQUFBO0lBQUtZLEVBQUUsRUFBQyxTQUFTO0lBQUNDLFNBQVMsRUFBQztFQUFpQixDQUFFLENBQUMsZUFDaERiLGdEQUFBLENBQUNFLDhHQUFRO0lBQUNZLE9BQU8sRUFBQyxtQ0FBbUM7SUFBQ1AsV0FBVyxFQUFFQSxXQUFZO0lBQUNFLE9BQU8sRUFBRUE7RUFBUSxDQUFFLENBQ25HLENBQUM7QUFBQSxDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVycmEtZ3JhcGhzLy4vcGFja2FnZXMvdGVycmEtZ3JhcGhzLWRvY3Mvc3JjL3RlcnJhLWRldi1zaXRlL3Rlc3QvZ3JhcGhzL0JhckdyYXBoL0Jhc2ljQmFyR3JhcGhzL1N0YWNrZWRBeGlzSW5mb1RleHRMYWJlbHMudGVzdC5qc3g/OTVhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocy9saWIvanMvaGVscGVycy91dGlscyc7XG5pbXBvcnQgQmFyR3JhcGggZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL0Jhci9CYXJHcmFwaCc7XG5pbXBvcnQgJ0BjZXJuZXIvdGVycmEtZ3JhcGhzLWRvY3MvbGliL3RlcnJhLWRldi1zaXRlL0V4YW1wbGVHcmFwaENvbnRhaW5lci9FeGFtcGxlR3JhcGhDb250YWluZXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IGdldEJhckNvbmZpZyBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL2dyYXBoQ29uZmlnT2JqZWN0cy9CYXIvYmFyRGVmYXVsdCc7XG5pbXBvcnQgZXhhbXBsZURhdGExIGZyb20gJ0BjZXJuZXIvdGVycmEtZ3JhcGhzLWRvY3MvbGliL2V4YW1wbGUtZGF0YXNldHMvZGF0YU9iamVjdHMvQmFyL3N0YWNrZWRCYXJEYXRhMUF4aXNJbmZvJztcbmltcG9ydCBleGFtcGxlRGF0YTIgZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9CYXIvc3RhY2tlZEJhckRhdGEyLmpzJztcbmltcG9ydCBleGFtcGxlRGF0YTMgZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9CYXIvc3RhY2tlZEJhckRhdGEzLmpzJztcblxuY29uc3QgZ3JhcGhDb25maWcgPSB1dGlscy5kZWVwQ2xvbmUoZ2V0QmFyQ29uZmlnKCcjc3RhY2tlZEF4aXNJbmZvVGV4dExhYmVsc0JhckdyYXBoJykpO1xuY29uc3QgZGF0YXNldCA9IFtcbiAgdXRpbHMuZGVlcENsb25lKGV4YW1wbGVEYXRhMSksXG4gIHV0aWxzLmRlZXBDbG9uZShleGFtcGxlRGF0YTIpLFxuICB1dGlscy5kZWVwQ2xvbmUoZXhhbXBsZURhdGEzKSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPD5cbiAgICA8ZGl2IGlkPVwidG9vbHRpcFwiIGNsYXNzTmFtZT1cImluaXRpYWwtdG9vbHRpcFwiIC8+XG4gICAgPEJhckdyYXBoIGdyYXBoSUQ9XCJzdGFja2VkQXhpc0luZm9UZXh0TGFiZWxzQmFyR3JhcGhcIiBncmFwaENvbmZpZz17Z3JhcGhDb25maWd9IGRhdGFzZXQ9e2RhdGFzZXR9IC8+XG4gIDwvPlxuKTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInV0aWxzIiwiQmFyR3JhcGgiLCJnZXRCYXJDb25maWciLCJleGFtcGxlRGF0YTEiLCJleGFtcGxlRGF0YTIiLCJleGFtcGxlRGF0YTMiLCJncmFwaENvbmZpZyIsImRlZXBDbG9uZSIsImRhdGFzZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJpZCIsImNsYXNzTmFtZSIsImdyYXBoSUQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/BarGraph/BasicBarGraphs/StackedAxisInfoTextLabels.test.jsx\n");

/***/ })

}]);