webpackHotUpdate_N_E("pages/home",{

/***/ "./src/components/identification/index.js":
/*!************************************************!*\
  !*** ./src/components/identification/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/identification/styles.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/components/identification/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Identification = function Identification(_ref) {\n  var name = _ref.name,\n      category = _ref.category,\n      dificulty = _ref.dificulty,\n      showDanger = _ref.showDanger,\n      submitForm = _ref.submitForm;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    tecTitle: \"true\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, \"TEC.QUIZ\"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    description: \"true\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, \"Your technology quiz \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 53\n    }\n  }, \" \", ':)')), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"StyledIdentification\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    onSubmit: submitForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    label: \"true\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, \" Name\"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"DangerText\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, showDanger.showDanger && 'Name is required!'), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"StyledInput\"], {\n    placeholder: \"Type your name\",\n    danger: showDanger.showDanger,\n    onChange: function onChange(event) {\n      return name.setName(event.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  })), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    label: \"true\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, \"Category\"), __jsx(\"select\", {\n    name: \"category\",\n    id: \"category\",\n    onChange: function onChange(event) {\n      return category.setValueCategory(event.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, __jsx(\"option\", {\n    value: \"linux\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 15\n    }\n  }, \"Linux\"), __jsx(\"option\", {\n    value: \"devOps\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 15\n    }\n  }, \"DevOps\"), __jsx(\"option\", {\n    value: \"networking\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 15\n    }\n  }, \"Networking\"), __jsx(\"option\", {\n    value: \"programming\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 15\n    }\n  }, \"Programming\"), __jsx(\"option\", {\n    value: \"cloud\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 15\n    }\n  }, \"Cloud\"), __jsx(\"option\", {\n    value: \"docker\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 15\n    }\n  }, \"Docker\"), __jsx(\"option\", {\n    value: \"kubernetes\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 15\n    }\n  }, \"Kubernetes\"))), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 11\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    label: \"true\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 13\n    }\n  }, \"Dificulty\"), __jsx(\"select\", {\n    name: \"dificulty\",\n    id: \"dificulty\",\n    onChange: function onChange(event) {\n      return dificulty.setValueDificulty(event.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 13\n    }\n  }, __jsx(\"option\", {\n    value: \"5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 15\n    }\n  }, \"Easy\"), __jsx(\"option\", {\n    value: \"10\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 15\n    }\n  }, \"Medium\"), __jsx(\"option\", {\n    value: \"20\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 15\n    }\n  }, \"Hard\"))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"ButtonSubmit\"], {\n    danger: showDanger,\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }, \"START GAME\"))));\n};\n\n_c = Identification;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Identification);\n\nvar _c;\n\n$RefreshReg$(_c, \"Identification\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaWRlbnRpZmljYXRpb24vaW5kZXguanM/NzhiZCJdLCJuYW1lcyI6WyJJZGVudGlmaWNhdGlvbiIsIm5hbWUiLCJjYXRlZ29yeSIsImRpZmljdWx0eSIsInNob3dEYW5nZXIiLCJzdWJtaXRGb3JtIiwiZXZlbnQiLCJzZXROYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRWYWx1ZUNhdGVnb3J5Iiwic2V0VmFsdWVEaWZpY3VsdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFVQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQTJEO0FBQUEsTUFBeERDLElBQXdELFFBQXhEQSxJQUF3RDtBQUFBLE1BQWxEQyxRQUFrRCxRQUFsREEsUUFBa0Q7QUFBQSxNQUF4Q0MsU0FBd0MsUUFBeENBLFNBQXdDO0FBQUEsTUFBN0JDLFVBQTZCLFFBQTdCQSxVQUE2QjtBQUFBLE1BQWpCQyxVQUFpQixRQUFqQkEsVUFBaUI7QUFJaEYsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0Q0FBRDtBQUFNLFlBQVEsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRSxNQUFDLDRDQUFEO0FBQU0sZUFBVyxFQUFDLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQThDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUSxJQUFSLENBQTlDLENBRkYsRUFLRSxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDRDQUFEO0FBQU0sWUFBUSxFQUFFQSxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1B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U0EsNkVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZGVudGlmaWNhdGlvbi9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQge1xuICBTdHlsZWRJZGVudGlmaWNhdGlvbixcbiAgRm9ybSxcbiAgU3R5bGVkSW5wdXQsXG4gIFRleHQsXG4gIERhbmdlclRleHQsXG4gIEJ1dHRvblN1Ym1pdFxufSBmcm9tICcuL3N0eWxlcyc7XG5cblxuY29uc3QgSWRlbnRpZmljYXRpb24gPSAoeyBuYW1lLCBjYXRlZ29yeSwgZGlmaWN1bHR5LCBzaG93RGFuZ2VyLCBzdWJtaXRGb3JtIH0pID0+IHtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFRleHQgdGVjVGl0bGU9J3RydWUnID5URUMuUVVJWjwvVGV4dD5cbiAgICAgIDxUZXh0IGRlc2NyaXB0aW9uPSd0cnVlJz5Zb3VyIHRlY2hub2xvZ3kgcXVpeiA8c3Bhbj4geyc6KSd9PC9zcGFuPjwvVGV4dD5cblxuXG4gICAgICA8U3R5bGVkSWRlbnRpZmljYXRpb24+XG5cbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e3N1Ym1pdEZvcm19PlxuXG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8VGV4dCBsYWJlbD0ndHJ1ZSc+IE5hbWU8L1RleHQ+XG5cbiAgICAgICAgICAgIDxEYW5nZXJUZXh0PntzaG93RGFuZ2VyLnNob3dEYW5nZXIgJiYgJ05hbWUgaXMgcmVxdWlyZWQhJ308L0RhbmdlclRleHQ+XG4gICAgICAgICAgICA8U3R5bGVkSW5wdXRcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgeW91ciBuYW1lJ1xuICAgICAgICAgICAgICBkYW5nZXI9e3Nob3dEYW5nZXIuc2hvd0Rhbmdlcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gbmFtZS5zZXROYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgPHNwYW4+XG5cbiAgICAgICAgICAgIDxUZXh0IGxhYmVsPSd0cnVlJz5DYXRlZ29yeTwvVGV4dD5cblxuICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICBuYW1lPVwiY2F0ZWdvcnlcIlxuICAgICAgICAgICAgICBpZD1cImNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gY2F0ZWdvcnkuc2V0VmFsdWVDYXRlZ29yeShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibGludXhcIj5MaW51eDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZGV2T3BzXCI+RGV2T3BzPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJuZXR3b3JraW5nXCI+TmV0d29ya2luZzwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicHJvZ3JhbW1pbmdcIj5Qcm9ncmFtbWluZzwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY2xvdWRcIj5DbG91ZDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZG9ja2VyXCI+RG9ja2VyPC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJrdWJlcm5ldGVzXCI+S3ViZXJuZXRlczwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8c3Bhbj5cblxuICAgICAgICAgICAgPFRleHQgbGFiZWw9J3RydWUnPkRpZmljdWx0eTwvVGV4dD5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgbmFtZT1cImRpZmljdWx0eVwiXG4gICAgICAgICAgICAgIGlkPVwiZGlmaWN1bHR5XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gZGlmaWN1bHR5LnNldFZhbHVlRGlmaWN1bHR5KGV2ZW50LnRhcmdldC52YWx1ZSl9XG5cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjVcIj5FYXN5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxMFwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMjBcIj5IYXJkPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIDxCdXR0b25TdWJtaXQgZGFuZ2VyPXtzaG93RGFuZ2VyfSB0eXBlPSdzdWJtaXQnPlNUQVJUIEdBTUU8L0J1dHRvblN1Ym1pdD5cbiAgICAgICAgPC9Gb3JtPlxuXG4gICAgICA8L1N0eWxlZElkZW50aWZpY2F0aW9uPlxuXG5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBJZGVudGlmaWNhdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/identification/index.js\n");

/***/ })

})