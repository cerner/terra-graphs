"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkterra_graphs"] = self["webpackChunkterra_graphs"] || []).push([["packages_terra-graphs-docs_src_terra-dev-site_test_graphs_BarGraph_BasicBarGraphs_AxisInfoTex-0a7e48"],{

/***/ "./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bar/dataset1axisInfoLabels.js":
/*!***************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bar/dataset1axisInfoLabels.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/carbon */ \"./packages/carbon-graphs/src/js/carbon.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/popup */ \"./packages/terra-graphs-docs/src/example-datasets/popup.js\");\n\n\nvar data = {\n  key: 'axisinfo_bar_1',\n  label: {\n    display: 'Dataset 1'\n  },\n  group: 'uid_bar_1',\n  color: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.YELLOW,\n  onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadBarPopup,\n  values: [{\n    x: 1,\n    y: 10\n  }, {\n    x: 2,\n    y: 15\n  }, {\n    x: 3,\n    y: 18\n  }, {\n    x: 4,\n    y: 6\n  }, {\n    x: 5,\n    y: 0\n  }, {\n    x: 6,\n    y: 10\n  }],\n  axisInfoRow: [{\n    axis: 'x',\n    x: 1,\n    value: {\n      onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadTextLabelPopup,\n      characterCount: 4,\n      color: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.ORANGE,\n      shape: {\n        path: {\n          d: 'M24,0l24,24L24,48L0,24L24,0z',\n          fill: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.ORANGE\n        },\n        options: {\n          x: -6,\n          y: -6,\n          scale: 0.25\n        }\n      },\n      label: {\n        display: '1234567',\n        secondaryDisplay: 'ICU'\n      }\n    }\n  }, {\n    axis: 'x',\n    x: 2,\n    value: {\n      onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadTextLabelPopup,\n      color: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n      shape: {\n        path: {\n          d: 'M24,0l24,24L24,48L0,24L24,0z',\n          fill: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.PURPLE\n        },\n        options: {\n          x: -6,\n          y: -6,\n          scale: 0.25\n        }\n      },\n      label: {\n        display: '65',\n        secondaryDisplay: 'ICU'\n      }\n    }\n  }, {\n    axis: 'x',\n    x: 3,\n    value: {\n      onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadTextLabelPopup,\n      color: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.GREEN,\n      shape: {\n        path: {\n          d: 'M24,0l24,24L24,48L0,24L24,0z'\n        },\n        options: {\n          x: -6,\n          y: -6,\n          scale: 0.25\n        }\n      },\n      label: {\n        display: '42',\n        secondaryDisplay: 'ICU'\n      }\n    }\n  }, {\n    axis: 'x',\n    x: 4,\n    value: {\n      onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadTextLabelPopup,\n      color: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n      shape: {},\n      label: {\n        display: '23',\n        secondaryDisplay: ''\n      }\n    }\n  }, {\n    axis: 'x',\n    x: 5,\n    value: {\n      onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadTextLabelPopup,\n      color: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n      shape: {},\n      label: {\n        display: '',\n        secondaryDisplay: 'ICU'\n      }\n    }\n  }, {\n    axis: 'x',\n    x: 6,\n    value: {\n      onClick: _cerner_terra_graphs_docs_lib_example_datasets_popup__WEBPACK_IMPORTED_MODULE_1__.loadTextLabelPopup,\n      color: _cerner_carbon_graphs_lib_js_carbon__WEBPACK_IMPORTED_MODULE_0__[\"default\"].helpers.COLORS.BLACK,\n      shape: {},\n      label: {\n        display: '25',\n        secondaryDisplay: 'ICU'\n      }\n    }\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9CYXIvZGF0YXNldDFheGlzSW5mb0xhYmVscy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBeUQ7QUFDK0M7QUFFeEcsSUFBTUcsSUFBSSxHQUFHO0VBQ1hDLEdBQUcsRUFBRSxnQkFBZ0I7RUFDckJDLEtBQUssRUFBRTtJQUNMQyxPQUFPLEVBQUU7RUFDWCxDQUFDO0VBQ0RDLEtBQUssRUFBRSxXQUFXO0VBQ2xCQyxLQUFLLEVBQUVSLDJFQUFNLENBQUNTLE9BQU8sQ0FBQ0MsTUFBTSxDQUFDQyxNQUFNO0VBQ25DQyxPQUFPLEVBQUVYLDhGQUFZO0VBQ3JCWSxNQUFNLEVBQUUsQ0FDTjtJQUNFQyxDQUFDLEVBQUUsQ0FBQztJQUNKQyxDQUFDLEVBQUU7RUFDTCxDQUFDLEVBQ0Q7SUFDRUQsQ0FBQyxFQUFFLENBQUM7SUFDSkMsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxFQUNEO0lBQ0VELENBQUMsRUFBRSxDQUFDO0lBQ0pDLENBQUMsRUFBRTtFQUNMLENBQUMsRUFDRDtJQUNFRCxDQUFDLEVBQUUsQ0FBQztJQUNKQyxDQUFDLEVBQUU7RUFDTCxDQUFDLEVBQ0Q7SUFDRUQsQ0FBQyxFQUFFLENBQUM7SUFDSkMsQ0FBQyxFQUFFO0VBQ0wsQ0FBQyxFQUNEO0lBQ0VELENBQUMsRUFBRSxDQUFDO0lBQ0pDLENBQUMsRUFBRTtFQUNMLENBQUMsQ0FDRjtFQUNEQyxXQUFXLEVBQUUsQ0FDWDtJQUNFQyxJQUFJLEVBQUUsR0FBRztJQUNUSCxDQUFDLEVBQUUsQ0FBQztJQUNKSSxLQUFLLEVBQUU7TUFDTE4sT0FBTyxFQUFFVixvR0FBa0I7TUFDM0JpQixjQUFjLEVBQUUsQ0FBQztNQUNqQlgsS0FBSyxFQUFFUiwyRUFBTSxDQUFDUyxPQUFPLENBQUNDLE1BQU0sQ0FBQ1UsTUFBTTtNQUNuQ0MsS0FBSyxFQUFFO1FBQ0xDLElBQUksRUFBRTtVQUNKQyxDQUFDLEVBQUUsOEJB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QUNwQjtJQUNGO0VBQ0YsQ0FBQztBQUVMLENBQUM7QUFFRCwrREFBZXhCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9CYXIvZGF0YXNldDFheGlzSW5mb0xhYmVscy5qcz9iZjFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJib24gZnJvbSAnQGNlcm5lci9jYXJib24tZ3JhcGhzL2xpYi9qcy9jYXJib24nO1xuaW1wb3J0IHsgbG9hZEJhclBvcHVwLCBsb2FkVGV4dExhYmVsUG9wdXAgfSBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL3BvcHVwJztcblxuY29uc3QgZGF0YSA9IHtcbiAga2V5OiAnYXhpc2luZm9fYmFyXzEnLFxuICBsYWJlbDoge1xuICAgIGRpc3BsYXk6ICdEYXRhc2V0IDEnLFxuICB9LFxuICBncm91cDogJ3VpZF9iYXJfMScsXG4gIGNvbG9yOiBDYXJib24uaGVscGVycy5DT0xPUlMuWUVMTE9XLFxuICBvbkNsaWNrOiBsb2FkQmFyUG9wdXAsXG4gIHZhbHVlczogW1xuICAgIHtcbiAgICAgIHg6IDEsXG4gICAgICB5OiAxMCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHg6IDIsXG4gICAgICB5OiAxNSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHg6IDMsXG4gICAgICB5OiAxOCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHg6IDQsXG4gICAgICB5OiA2LFxuICAgIH0sXG4gICAge1xuICAgICAgeDogNSxcbiAgICAgIHk6IDAsXG4gICAgfSxcbiAgICB7XG4gICAgICB4OiA2LFxuICAgICAgeTogMTAsXG4gICAgfSxcbiAgXSxcbiAgYXhpc0luZm9Sb3c6IFtcbiAgICB7XG4gICAgICBheGlzOiAneCcsXG4gICAgICB4OiAxLFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgb25DbGljazogbG9hZFRleHRMYWJlbFBvcHVwLFxuICAgICAgICBjaGFyYWN0ZXJDb3VudDogNCxcbiAgICAgICAgY29sb3I6IENhcmJvbi5oZWxwZXJzLkNPTE9SUy5PUkFOR0UsXG4gICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgcGF0aDoge1xuICAgICAgICAgICAgZDogJ00yNCwwbDI0LDI0TDI0LDQ4TDAsMjRMMjQsMHonLFxuICAgICAgICAgICAgZmlsbDogQ2FyYm9uLmhlbHBlcnMuQ09MT1JTLk9SQU5HRSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHg6IC02LFxuICAgICAgICAgICAgeTogLTYsXG4gICAgICAgICAgICBzY2FsZTogMC4yNSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6ICcxMjM0NTY3JyxcbiAgICAgICAgICBzZWNvbmRhcnlEaXNwbGF5OiAnSUNVJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBheGlzOiAneCcsXG4gICAgICB4OiAyLFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgb25DbGljazogbG9hZFRleHRMYWJlbFBvcHVwLFxuICAgICAgICBjb2xvcjogQ2FyYm9uLmhlbHBlcnMuQ09MT1JTLkJMQUNLLFxuICAgICAgICBzaGFwZToge1xuICAgICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgIGQ6ICdNMjQsMGwyNCwyNEwyNCw0OEwwLDI0TDI0LDB6JyxcbiAgICAgICAgICAgIGZpbGw6IENhcmJvbi5oZWxwZXJzLkNPTE9SUy5QVVJQTEUsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICB4OiAtNixcbiAgICAgICAgICAgIHk6IC02LFxuICAgICAgICAgICAgc2NhbGU6IDAuMjUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICBkaXNwbGF5OiAnNjUnLFxuICAgICAgICAgIHNlY29uZGFyeURpc3BsYXk6ICdJQ1UnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGF4aXM6ICd4JyxcbiAgICAgIHg6IDMsXG4gICAgICB2YWx1ZToge1xuICAgICAgICBvbkNsaWNrOiBsb2FkVGV4dExhYmVsUG9wdXAsXG4gICAgICAgIGNvbG9yOiBDYXJib24uaGVscGVycy5DT0xPUlMuR1JFRU4sXG4gICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgcGF0aDoge1xuICAgICAgICAgICAgZDogJ00yNCwwbDI0LDI0TDI0LDQ4TDAsMjRMMjQsMHonLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgeDogLTYsXG4gICAgICAgICAgICB5OiAtNixcbiAgICAgICAgICAgIHNjYWxlOiAwLjI1LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogJzQyJyxcbiAgICAgICAgICBzZWNvbmRhcnlEaXNwbGF5OiAnSUNVJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBheGlzOiAneCcsXG4gICAgICB4OiA0LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgb25DbGljazogbG9hZFRleHRMYWJlbFBvcHVwLFxuICAgICAgICBjb2xvcjogQ2FyYm9uLmhlbHBlcnMuQ09MT1JTLkJMQUNLLFxuICAgICAgICBzaGFwZToge30sXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogJzIzJyxcbiAgICAgICAgICBzZWNvbmRhcnlEaXNwbGF5OiAnJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICBheGlzOiAneCcsXG4gICAgICB4OiA1LFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgb25DbGljazogbG9hZFRleHRMYWJlbFBvcHVwLFxuICAgICAgICBjb2xvcjogQ2FyYm9uLmhlbHBlcnMuQ09MT1JTLkJMQUNLLFxuICAgICAgICBzaGFwZToge30sXG4gICAgICAgIGxhYmVsOiB7XG4gICAgICAgICAgZGlzcGxheTogJycsXG4gICAgICAgICAgc2Vjb25kYXJ5RGlzcGxheTogJ0lDVScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgYXhpczogJ3gnLFxuICAgICAgeDogNixcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIG9uQ2xpY2s6IGxvYWRUZXh0TGFiZWxQb3B1cCxcbiAgICAgICAgY29sb3I6IENhcmJvbi5oZWxwZXJzLkNPTE9SUy5CTEFDSyxcbiAgICAgICAgc2hhcGU6IHt9LFxuICAgICAgICBsYWJlbDoge1xuICAgICAgICAgIGRpc3BsYXk6ICcyNScsXG4gICAgICAgICAgc2Vjb25kYXJ5RGlzcGxheTogJ0lDVScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkYXRhO1xuIl0sIm5hbWVzIjpbIkNhcmJvbiIsImxvYWRCYXJQb3B1cCIsImxvYWRUZXh0TGFiZWxQb3B1cCIsImRhdGEiLCJrZXkiLCJsYWJlbCIsImRpc3BsYXkiLCJncm91cCIsImNvbG9yIiwiaGVscGVycyIsIkNPTE9SUyIsIllFTExPVyIsIm9uQ2xpY2siLCJ2YWx1ZXMiLCJ4IiwieSIsImF4aXNJbmZvUm93IiwiYXhpcyIsInZhbHVlIiwiY2hhcmFjdGVyQ291bnQiLCJPUkFOR0UiLCJzaGFwZSIsInBhdGgiLCJkIiwiZmlsbCIsIm9wdGlvbnMiLCJzY2FsZSIsInNlY29uZGFyeURpc3BsYXkiLCJCTEFDSyIsIlBVUlBMRSIsIkdSRUVOIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bar/dataset1axisInfoLabels.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Bar/barDefault.js":
/*!**********************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Bar/barDefault.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nvar getbarConfig = function getbarConfig(id) {\n  return {\n    bindTo: id,\n    bindLegendTo: null,\n    axis: {\n      x: {\n        show: true,\n        label: 'Data',\n        lowerLimit: 0,\n        upperLimit: 8,\n        ticks: {\n          values: [1, 2, 3, 4, 5, 6, 7],\n          format: '.0f'\n        }\n      },\n      y: {\n        show: true,\n        label: 'Bar Set A',\n        lowerLimit: 0,\n        upperLimit: 35\n      },\n      y2: {\n        show: false,\n        label: 'Bar Set B',\n        lowerLimit: 0,\n        upperLimit: 30\n      }\n    },\n    showLabel: true,\n    showLegend: true,\n    showShapes: true,\n    showVGrid: false,\n    showHGrid: true\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (getbarConfig);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9ncmFwaENvbmZpZ09iamVjdHMvQmFyL2JhckRlZmF1bHQuanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxFQUFFO0VBQUEsT0FBTTtJQUM1QkMsTUFBTSxFQUFFRCxFQUFFO0lBQ1ZFLFlBQVksRUFBRSxJQUFJO0lBQ2xCQyxJQUFJLEVBQUU7TUFDSkMsQ0FBQyxFQUFFO1FBQ0RDLElBQUksRUFBRSxJQUFJO1FBQ1ZDLEtBQUssRUFBRSxNQUFNO1FBQ2JDLFVBQVUsRUFBRSxDQUFDO1FBQ2JDLFVBQVUsRUFBRSxDQUFDO1FBQ2JDLEtBQUssRUFBRTtVQUNMQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7VUFDN0JDLE1BQU0sRUFBRTtRQUNWO01BQ0YsQ0FBQztNQUNEQyxDQUFDLEVBQUU7UUFDRFAsSUFBSSxFQUFFLElBQUk7UUFDVkMsS0FBSyxFQUFFLFdBQVc7UUFDbEJDLFVBQVUsRUFBRSxDQUFDO1FBQ2JDLFVBQVUsRUFBRTtNQUNkLENBQUM7TUFDREssRUFBRSxFQUFFO1FBQ0ZSLElBQUksRUFBRSxLQUFLO1FBQ1hDLEtBQUssRUFBRSxXQUFXO1FBQ2xCQyxVQUFVLEVBQUUsQ0FBQztRQUNiQyxVQUFVLEVBQUU7TUFDZDtJQUNGLENBQUM7SUFDRE0sU0FBUyxFQUFFLElBQUk7SUFDZkMsVUFBVSxFQUFFLElBQUk7SUFDaEJDLFVBQVUsRUFBRSxJQUFJO0lBQ2hCQyxTQUFTLEVBQUUsS0FBSztJQUNoQkMsU0FBUyxFQUFFO0VBQ2IsQ0FBQztBQUFBLENBQUM7QUFFRiwrREFBZW5CLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXJyYS1ncmFwaHMvLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvZXhhbXBsZS1kYXRhc2V0cy9ncmFwaENvbmZpZ09iamVjdHMvQmFyL2JhckRlZmF1bHQuanM/NTkxMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZXRiYXJDb25maWcgPSAoaWQpID0+ICh7XG4gIGJpbmRUbzogaWQsXG4gIGJpbmRMZWdlbmRUbzogbnVsbCxcbiAgYXhpczoge1xuICAgIHg6IHtcbiAgICAgIHNob3c6IHRydWUsXG4gICAgICBsYWJlbDogJ0RhdGEnLFxuICAgICAgbG93ZXJMaW1pdDogMCxcbiAgICAgIHVwcGVyTGltaXQ6IDgsXG4gICAgICB0aWNrczoge1xuICAgICAgICB2YWx1ZXM6IFsxLCAyLCAzLCA0LCA1LCA2LCA3XSxcbiAgICAgICAgZm9ybWF0OiAnLjBmJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICB5OiB7XG4gICAgICBzaG93OiB0cnVlLFxuICAgICAgbGFiZWw6ICdCYXIgU2V0IEEnLFxuICAgICAgbG93ZXJMaW1pdDogMCxcbiAgICAgIHVwcGVyTGltaXQ6IDM1LFxuICAgIH0sXG4gICAgeTI6IHtcbiAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgbGFiZWw6ICdCYXIgU2V0IEInLFxuICAgICAgbG93ZXJMaW1pdDogMCxcbiAgICAgIHVwcGVyTGltaXQ6IDMwLFxuICAgIH0sXG4gIH0sXG4gIHNob3dMYWJlbDogdHJ1ZSxcbiAgc2hvd0xlZ2VuZDogdHJ1ZSxcbiAgc2hvd1NoYXBlczogdHJ1ZSxcbiAgc2hvd1ZHcmlkOiBmYWxzZSxcbiAgc2hvd0hHcmlkOiB0cnVlLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGdldGJhckNvbmZpZztcblxuIl0sIm5hbWVzIjpbImdldGJhckNvbmZpZyIsImlkIiwiYmluZFRvIiwiYmluZExlZ2VuZFRvIiwiYXhpcyIsIngiLCJzaG93IiwibGFiZWwiLCJsb3dlckxpbWl0IiwidXBwZXJMaW1pdCIsInRpY2tzIiwidmFsdWVzIiwiZm9ybWF0IiwieSIsInkyIiwic2hvd0xhYmVsIiwic2hvd0xlZ2VuZCIsInNob3dTaGFwZXMiLCJzaG93VkdyaWQiLCJzaG93SEdyaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Bar/barDefault.js\n");

/***/ }),

/***/ "./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/BarGraph/BasicBarGraphs/AxisInfoTextLabels.test.jsx":
/*!***********************************************************************************************************************!*\
  !*** ./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/BarGraph/BasicBarGraphs/AxisInfoTextLabels.test.jsx ***!
  \***********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @cerner/carbon-graphs/lib/js/helpers/utils */ \"./packages/carbon-graphs/src/js/helpers/utils.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_graphs_src_components_Bar_BarGraph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-graphs-src/components/Bar/BarGraph */ \"./packages/terra-graphs-docs/src/terra-graphs-src/components/Bar/BarGraph.jsx\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_terra_dev_site_ExampleGraphContainer_ExampleGraphContainer_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss */ \"./packages/terra-graphs-docs/src/terra-dev-site/ExampleGraphContainer/ExampleGraphContainer.module.scss\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Bar_barDefault__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/graphConfigObjects/Bar/barDefault */ \"./packages/terra-graphs-docs/src/example-datasets/graphConfigObjects/Bar/barDefault.js\");\n/* harmony import */ var _cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Bar_dataset1axisInfoLabels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @cerner/terra-graphs-docs/lib/example-datasets/dataObjects/Bar/dataset1axisInfoLabels */ \"./packages/terra-graphs-docs/src/example-datasets/dataObjects/Bar/dataset1axisInfoLabels.js\");\n\n\n\n\n\n\nvar graphConfig = _cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone((0,_cerner_terra_graphs_docs_lib_example_datasets_graphConfigObjects_Bar_barDefault__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('#axisInfoTextLabelsBarGraph'));\nvar dataset = [_cerner_carbon_graphs_lib_js_helpers_utils__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deepClone(_cerner_terra_graphs_docs_lib_example_datasets_dataObjects_Bar_dataset1axisInfoLabels__WEBPACK_IMPORTED_MODULE_5__[\"default\"])];\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"tooltip\",\n    className: \"initial-tooltip\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_cerner_terra_graphs_docs_lib_terra_graphs_src_components_Bar_BarGraph__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    graphID: \"axisInfoTextLabelsBarGraph\",\n    graphConfig: graphConfig,\n    dataset: dataset\n  }));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy90ZXJyYS1ncmFwaHMtZG9jcy9zcmMvdGVycmEtZGV2LXNpdGUvdGVzdC9ncmFwaHMvQmFyR3JhcGgvQmFzaWNCYXJHcmFwaHMvQXhpc0luZm9UZXh0TGFiZWxzLnRlc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEI7QUFDcUM7QUFDK0I7QUFDZ0I7QUFDRjtBQUNJO0FBRWhILElBQU1LLFdBQVcsR0FBR0osa0ZBQUssQ0FBQ0ssU0FBUyxDQUFDSCw0SEFBWSxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDaEYsSUFBTUksT0FBTyxHQUFHLENBQUNOLGtGQUFLLENBQUNLLFNBQVMsQ0FBQ0YsNkhBQVcsQ0FBQyxDQUFDO0FBRTlDLCtEQUFlO0VBQUEsb0JBQ2JKLGdEQUFBLENBQUFBLDJDQUFBLHFCQUNFQSxnREFBQTtJQUFLVSxFQUFFLEVBQUMsU0FBUztJQUFDQyxTQUFTLEVBQUM7RUFBaUIsQ0FBRSxDQUFDLGVBQ2hEWCxnREFBQSxDQUFDRSw4R0FBUTtJQUFDVSxPQUFPLEVBQUMsNEJBQTRCO0lBQUNQLFdBQVcsRUFBRUEsV0FBWTtJQUFDRSxPQUFPLEVBQUVBO0VBQVEsQ0FBRSxDQUM1RixDQUFDO0FBQUEsQ0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlcnJhLWdyYXBocy8uL3BhY2thZ2VzL3RlcnJhLWdyYXBocy1kb2NzL3NyYy90ZXJyYS1kZXYtc2l0ZS90ZXN0L2dyYXBocy9CYXJHcmFwaC9CYXNpY0JhckdyYXBocy9BeGlzSW5mb1RleHRMYWJlbHMudGVzdC5qc3g/YjIyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BjZXJuZXIvY2FyYm9uLWdyYXBocy9saWIvanMvaGVscGVycy91dGlscyc7XG5pbXBvcnQgQmFyR3JhcGggZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvdGVycmEtZ3JhcGhzLXNyYy9jb21wb25lbnRzL0Jhci9CYXJHcmFwaCc7XG5pbXBvcnQgJ0BjZXJuZXIvdGVycmEtZ3JhcGhzLWRvY3MvbGliL3RlcnJhLWRldi1zaXRlL0V4YW1wbGVHcmFwaENvbnRhaW5lci9FeGFtcGxlR3JhcGhDb250YWluZXIubW9kdWxlLnNjc3MnO1xuaW1wb3J0IGdldEJhckNvbmZpZyBmcm9tICdAY2VybmVyL3RlcnJhLWdyYXBocy1kb2NzL2xpYi9leGFtcGxlLWRhdGFzZXRzL2dyYXBoQ29uZmlnT2JqZWN0cy9CYXIvYmFyRGVmYXVsdCc7XG5pbXBvcnQgZXhhbXBsZURhdGEgZnJvbSAnQGNlcm5lci90ZXJyYS1ncmFwaHMtZG9jcy9saWIvZXhhbXBsZS1kYXRhc2V0cy9kYXRhT2JqZWN0cy9CYXIvZGF0YXNldDFheGlzSW5mb0xhYmVscyc7XG5cbmNvbnN0IGdyYXBoQ29uZmlnID0gdXRpbHMuZGVlcENsb25lKGdldEJhckNvbmZpZygnI2F4aXNJbmZvVGV4dExhYmVsc0JhckdyYXBoJykpO1xuY29uc3QgZGF0YXNldCA9IFt1dGlscy5kZWVwQ2xvbmUoZXhhbXBsZURhdGEpXTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8PlxuICAgIDxkaXYgaWQ9XCJ0b29sdGlwXCIgY2xhc3NOYW1lPVwiaW5pdGlhbC10b29sdGlwXCIgLz5cbiAgICA8QmFyR3JhcGggZ3JhcGhJRD1cImF4aXNJbmZvVGV4dExhYmVsc0JhckdyYXBoXCIgZ3JhcGhDb25maWc9e2dyYXBoQ29uZmlnfSBkYXRhc2V0PXtkYXRhc2V0fSAvPlxuICA8Lz5cbik7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1dGlscyIsIkJhckdyYXBoIiwiZ2V0QmFyQ29uZmlnIiwiZXhhbXBsZURhdGEiLCJncmFwaENvbmZpZyIsImRlZXBDbG9uZSIsImRhdGFzZXQiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJpZCIsImNsYXNzTmFtZSIsImdyYXBoSUQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/terra-graphs-docs/src/terra-dev-site/test/graphs/BarGraph/BasicBarGraphs/AxisInfoTextLabels.test.jsx\n");

/***/ })

}]);