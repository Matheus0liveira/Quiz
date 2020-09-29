webpackHotUpdate_N_E("pages/home",{

/***/ "./src/components/identification/index.js":
/*!************************************************!*\
  !*** ./src/components/identification/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/identification/styles.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/components/identification/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Identification = function Identification(_ref) {\n  var name = _ref.name,\n      category = _ref.category,\n      dificulty = _ref.dificulty,\n      showDanger = _ref.showDanger,\n      submitForm = _ref.submitForm;\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    tecTitle: \"true\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, \"TEC.QUIZ\"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    description: \"true\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, \"Your technology quiz \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 53\n    }\n  }, \" \", ':)')), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"StyledIdentification\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    onSubmit: submitForm,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    label: \"true\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }\n  }, \" Name\"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"DangerText\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }\n  }, showDanger.showDanger && 'Name is required!'), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"StyledInput\"], {\n    placeholder: \"Type your name\",\n    danger: showDanger.showDanger,\n    onChange: function onChange(event) {\n      return name.setName(event.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }\n  })), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 11\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    label: \"true\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, \"Dificulty\"), __jsx(\"select\", {\n    name: \"dificulty\",\n    id: \"dificulty\",\n    onChange: function onChange(event) {\n      return dificulty.setValueDificulty(event.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, __jsx(\"option\", {\n    value: \"5\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 15\n    }\n  }, \"Easy\"), __jsx(\"option\", {\n    value: \"10\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 15\n    }\n  }, \"Medium\"), __jsx(\"option\", {\n    value: \"20\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 15\n    }\n  }, \"Hard\"))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"ButtonSubmit\"], {\n    danger: showDanger,\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 11\n    }\n  }, \"START GAME\"))));\n};\n\n_c = Identification;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Identification);\n\nvar _c;\n\n$RefreshReg$(_c, \"Identification\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaWRlbnRpZmljYXRpb24vaW5kZXguanM/NzhiZCJdLCJuYW1lcyI6WyJJZGVudGlmaWNhdGlvbiIsIm5hbWUiLCJjYXRlZ29yeSIsImRpZmljdWx0eSIsInNob3dEYW5nZXIiLCJzdWJtaXRGb3JtIiwiZXZlbnQiLCJzZXROYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJzZXRWYWx1ZURpZmljdWx0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVBOztBQVVBLElBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBMkQ7QUFBQSxNQUF4REMsSUFBd0QsUUFBeERBLElBQXdEO0FBQUEsTUFBbERDLFFBQWtELFFBQWxEQSxRQUFrRDtBQUFBLE1BQXhDQyxTQUF3QyxRQUF4Q0EsU0FBd0M7QUFBQSxNQUE3QkMsVUFBNkIsUUFBN0JBLFVBQTZCO0FBQUEsTUFBakJDLFVBQWlCLFFBQWpCQSxVQUFpQjtBQUloRixTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDRDQUFEO0FBQU0sWUFBUSxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFLE1BQUMsNENBQUQ7QUFBTSxlQUFXLEVBQUMsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBOEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFRLElBQVIsQ0FBOUMsQ0FGRixFQUtFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsNENBQUQ7QUFBTSxZQUFRLEVBQUVBLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0Q0FBRDtBQUFNLFNBQUssRUFBQyxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUdFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFhRCxVQUFVLENBQUNBLFVBQVgsSUFBeUIsbUJBQXRDLENBSEYsRUFJRSxNQUFDLG1EQUFEO0FBQ0UsZUFBVyxFQUFDLGdCQURkO0FBRUUsVUFBTSxFQUFFQSxVQUFVLENBQUNBLFVBRnJCO0FBR0UsWUFBUSxFQUFFLGtCQUFDRSxLQUFEO0FBQUEsYUFBV0wsSUFBSSxDQUFDTSxPQUFMLENBQWFELEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUExQixDQUFYO0FBQUEsS0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkYsQ0FGRixFQWVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFRSxNQUFDLDRDQUFEO0FBQU0sU0FBSyxFQUFDLE1BQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixFQUdFO0FBQ0UsUUFBSSxFQUFDLFdBRFA7QUFFRSxNQUFFLEVBQUMsV0FGTDtBQUdFLFlBQVEsRUFBRSxrQkFBQ0gsS0FBRDtBQUFBLGFBQVdILFNBQVMsQ0FBQ08saUJBQVYsQ0FBNEJKLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxLQUF6QyxDQUFYO0FBQUEsS0FIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUU7QUFBUSxTQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsRUFPRTtBQUFRLFNBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRixFQVFFO0FBQVEsU0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLENBSEYsQ0FmRixFQStCRSxNQUFDLG9EQUFEO0FBQWMsVUFBTSxFQUFFTCxVQUF0QjtBQUFrQyxRQUFJLEVBQUMsUUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkEvQkYsQ0FGRixDQUxGLENBREY7QUErQ0QsQ0FuREQ7O0tBQU1KLGM7QUF1RFNBLDZFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaWRlbnRpZmljYXRpb24vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHtcbiAgU3R5bGVkSWRlbnRpZmljYXRpb24sXG4gIEZvcm0sXG4gIFN0eWxlZElucHV0LFxuICBUZXh0LFxuICBEYW5nZXJUZXh0LFxuICBCdXR0b25TdWJtaXRcbn0gZnJvbSAnLi9zdHlsZXMnO1xuXG5cbmNvbnN0IElkZW50aWZpY2F0aW9uID0gKHsgbmFtZSwgY2F0ZWdvcnksIGRpZmljdWx0eSwgc2hvd0Rhbmdlciwgc3VibWl0Rm9ybSB9KSA9PiB7XG5cblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxUZXh0IHRlY1RpdGxlPSd0cnVlJyA+VEVDLlFVSVo8L1RleHQ+XG4gICAgICA8VGV4dCBkZXNjcmlwdGlvbj0ndHJ1ZSc+WW91ciB0ZWNobm9sb2d5IHF1aXogPHNwYW4+IHsnOiknfTwvc3Bhbj48L1RleHQ+XG5cblxuICAgICAgPFN0eWxlZElkZW50aWZpY2F0aW9uPlxuXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtzdWJtaXRGb3JtfT5cblxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPFRleHQgbGFiZWw9J3RydWUnPiBOYW1lPC9UZXh0PlxuXG4gICAgICAgICAgICA8RGFuZ2VyVGV4dD57c2hvd0Rhbmdlci5zaG93RGFuZ2VyICYmICdOYW1lIGlzIHJlcXVpcmVkISd9PC9EYW5nZXJUZXh0PlxuICAgICAgICAgICAgPFN0eWxlZElucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUeXBlIHlvdXIgbmFtZSdcbiAgICAgICAgICAgICAgZGFuZ2VyPXtzaG93RGFuZ2VyLnNob3dEYW5nZXJ9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IG5hbWUuc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgIDwvc3Bhbj5cblxuXG4gICAgICAgICAgPHNwYW4+XG5cbiAgICAgICAgICAgIDxUZXh0IGxhYmVsPSd0cnVlJz5EaWZpY3VsdHk8L1RleHQ+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIG5hbWU9XCJkaWZpY3VsdHlcIlxuICAgICAgICAgICAgICBpZD1cImRpZmljdWx0eVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGRpZmljdWx0eS5zZXRWYWx1ZURpZmljdWx0eShldmVudC50YXJnZXQudmFsdWUpfVxuXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI1XCI+RWFzeTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTBcIj5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjIwXCI+SGFyZDwvb3B0aW9uPlxuICAgICAgICAgICAgPC9zZWxlY3Q+XG5cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8QnV0dG9uU3VibWl0IGRhbmdlcj17c2hvd0Rhbmdlcn0gdHlwZT0nc3VibWl0Jz5TVEFSVCBHQU1FPC9CdXR0b25TdWJtaXQ+XG4gICAgICAgIDwvRm9ybT5cblxuICAgICAgPC9TdHlsZWRJZGVudGlmaWNhdGlvbj5cblxuXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgSWRlbnRpZmljYXRpb247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/identification/index.js\n");

/***/ })

})