webpackHotUpdate_N_E("pages/home",{

/***/ "./src/components/identification/index.js":
/*!************************************************!*\
  !*** ./src/components/identification/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/identification/styles.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/components/identification/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Identification = function Identification() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      name = _useState[0],\n      setName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('linux'),\n      valueCategory = _useState2[0],\n      setValueCategory = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('easy'),\n      valueDificulty = _useState3[0],\n      setValueDificulty = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showDanger = _useState4[0],\n      setShowDanger = _useState4[1];\n\n  var handleSubmit = function handleSubmit(event) {\n    event.preventDefault();\n\n    if (!name) {\n      setShowDanger(true);\n      console.log('Name is required');\n    }\n\n    ;\n  };\n\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    tecTitle: \"true\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, \"TEQUIZ\"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    description: \"true\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, \"To start the game, fill out the form \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 69\n    }\n  }, \" \", ':)')), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"StyledIdentification\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    onSubmit: handleSubmit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    label: \"true\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }\n  }, \" Name\"), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"StyledInput\"], {\n    placeholder: \"Type your name\",\n    danger: showDanger,\n    onChange: function onChange(event) {\n      return setName(event.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }\n  })), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 11\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    label: \"true\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, \"Category\"), __jsx(\"select\", {\n    name: \"category\",\n    id: \"category\",\n    onChange: function onChange(event) {\n      return setValueCategory(event.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }\n  }, __jsx(\"option\", {\n    value: \"linux\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 15\n    }\n  }, \"Linux\"), __jsx(\"option\", {\n    value: \"devOps\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 15\n    }\n  }, \"DevOps\"), __jsx(\"option\", {\n    value: \"networking\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 15\n    }\n  }, \"Networking\"), __jsx(\"option\", {\n    value: \"programming\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 15\n    }\n  }, \"Programming\"), __jsx(\"option\", {\n    value: \"cloud\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 15\n    }\n  }, \"Cloud\"), __jsx(\"option\", {\n    value: \"docker\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 15\n    }\n  }, \"Docker\"), __jsx(\"option\", {\n    value: \"kubernetes\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 15\n    }\n  }, \"Kubernetes\"))), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n    label: \"true\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  }, \"Dificulty\"), __jsx(\"select\", {\n    name: \"dificulty\",\n    id: \"dificulty\",\n    onChange: function onChange(event) {\n      return setValueDificulty(event.target.value);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }, __jsx(\"option\", {\n    value: \"easy\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 15\n    }\n  }, \"Easy\"), __jsx(\"option\", {\n    value: \"medium\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 15\n    }\n  }, \"Medium\"), __jsx(\"option\", {\n    value: \"hard\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 15\n    }\n  }, \"Hard\"))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"ButtonSubmit\"], {\n    type: \"submit\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 11\n    }\n  }, \"START GAME\"))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__[\"Footer\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 9\n    }\n  }, \"Created By:\", __jsx(\"a\", {\n    target: \"_blank\",\n    href: \"https://github.com/Matheus0liveira\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }, \" Matheus Oliveira \\uD83D\\uDC9C\"))));\n};\n\n_s(Identification, \"ERSeiecwEsVSPfqBa8eY5oK5ojY=\");\n\n_c = Identification;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Identification);\n\nvar _c;\n\n$RefreshReg$(_c, \"Identification\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaWRlbnRpZmljYXRpb24vaW5kZXguanM/NzhiZCJdLCJuYW1lcyI6WyJJZGVudGlmaWNhdGlvbiIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJ2YWx1ZUNhdGVnb3J5Iiwic2V0VmFsdWVDYXRlZ29yeSIsInZhbHVlRGlmaWN1bHR5Iiwic2V0VmFsdWVEaWZpY3VsdHkiLCJzaG93RGFuZ2VyIiwic2V0U2hvd0RhbmdlciIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUE7O0FBR0EsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQUE7O0FBQUEsa0JBQ0hDLHNEQUFRLENBQUMsRUFBRCxDQURMO0FBQUEsTUFDcEJDLElBRG9CO0FBQUEsTUFDZEMsT0FEYzs7QUFBQSxtQkFFZUYsc0RBQVEsQ0FBQyxPQUFELENBRnZCO0FBQUEsTUFFcEJHLGFBRm9CO0FBQUEsTUFFTEMsZ0JBRks7O0FBQUEsbUJBR2lCSixzREFBUSxDQUFDLE1BQUQsQ0FIekI7QUFBQSxNQUdwQkssY0FIb0I7QUFBQSxNQUdKQyxpQkFISTs7QUFBQSxtQkFJU04sc0RBQVEsQ0FBQyxLQUFELENBSmpCO0FBQUEsTUFJcEJPLFVBSm9CO0FBQUEsTUFJUkMsYUFKUTs7QUFNM0IsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFXO0FBRTlCQSxTQUFLLENBQUNDLGNBQU47O0FBR0EsUUFBRyxDQUFDVixJQUFKLEVBQVU7QUFFUk8sbUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDQUksYUFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDRDs7QUFBQTtBQUVGLEdBWEQ7O0FBY0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtB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QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVBGLEVBUUU7QUFBUSxTQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsQ0FIRixDQWxDRixFQWtERSxNQUFDLG9EQUFEO0FBQWMsUUFBSSxFQUFDLFFBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbERGLENBRkYsQ0FMRixFQThERSxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUlFO0FBQUcsVUFBTSxFQUFDLFFBQVY7QUFBbUIsUUFBSSxFQUFDLG9DQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUpGLENBREYsQ0E5REYsQ0FERjtBQTBFRCxDQTlGRDs7R0FBTWhCLGM7O0tBQUFBLGM7QUFrR1NBLDZFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaWRlbnRpZmljYXRpb24vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgU3R5bGVkSWRlbnRpZmljYXRpb24sIEZvcm0sIFN0eWxlZElucHV0LCBUZXh0LCBCdXR0b25TdWJtaXQsIEZvb3RlciB9IGZyb20gJy4vc3R5bGVzJztcblxuXG5jb25zdCBJZGVudGlmaWNhdGlvbiA9ICgpID0+IHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdmFsdWVDYXRlZ29yeSwgc2V0VmFsdWVDYXRlZ29yeV0gPSB1c2VTdGF0ZSgnbGludXgnKTtcbiAgY29uc3QgW3ZhbHVlRGlmaWN1bHR5LCBzZXRWYWx1ZURpZmljdWx0eV0gPSB1c2VTdGF0ZSgnZWFzeScpO1xuICBjb25zdCBbc2hvd0Rhbmdlciwgc2V0U2hvd0Rhbmdlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGV2ZW50KSA9PiB7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBcblxuICAgIGlmKCFuYW1lKSB7XG4gICAgICBcbiAgICAgIHNldFNob3dEYW5nZXIodHJ1ZSk7XG4gICAgICBjb25zb2xlLmxvZygnTmFtZSBpcyByZXF1aXJlZCcpXG4gICAgfTtcblxuICB9O1xuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPFRleHQgdGVjVGl0bGU9J3RydWUnID5URVFVSVo8L1RleHQ+XG4gICAgICA8VGV4dCBkZXNjcmlwdGlvbj0ndHJ1ZSc+VG8gc3RhcnQgdGhlIGdhbWUsIGZpbGwgb3V0IHRoZSBmb3JtIDxzcGFuPiB7JzopJ308L3NwYW4+PC9UZXh0PlxuXG5cbiAgICAgIDxTdHlsZWRJZGVudGlmaWNhdGlvbj5cblxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cblxuICAgICAgICAgIDxzcGFuPlxuXG4gICAgICAgICAgICA8VGV4dCBsYWJlbD0ndHJ1ZSc+IE5hbWU8L1RleHQ+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxTdHlsZWRJbnB1dFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVHlwZSB5b3VyIG5hbWUnXG4gICAgICAgICAgICAgIGRhbmdlcj17c2hvd0Rhbmdlcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0TmFtZShldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIDxzcGFuPlxuXG4gICAgICAgICAgICA8VGV4dCBsYWJlbD0ndHJ1ZSc+Q2F0ZWdvcnk8L1RleHQ+XG5cbiAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgbmFtZT1cImNhdGVnb3J5XCJcbiAgICAgICAgICAgICAgaWQ9XCJjYXRlZ29yeVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFZhbHVlQ2F0ZWdvcnkoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxpbnV4XCI+TGludXg8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRldk9wc1wiPkRldk9wczwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibmV0d29ya2luZ1wiPk5ldHdvcmtpbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInByb2dyYW1taW5nXCI+UHJvZ3JhbW1pbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImNsb3VkXCI+Q2xvdWQ8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImRvY2tlclwiPkRvY2tlcjwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwia3ViZXJuZXRlc1wiPkt1YmVybmV0ZXM8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgPHNwYW4+XG5cbiAgICAgICAgICAgIDxUZXh0IGxhYmVsPSd0cnVlJz5EaWZpY3VsdHk8L1RleHQ+XG4gICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgIG5hbWU9XCJkaWZpY3VsdHlcIlxuICAgICAgICAgICAgICBpZD1cImRpZmljdWx0eVwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFZhbHVlRGlmaWN1bHR5KGV2ZW50LnRhcmdldC52YWx1ZSl9XG5cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImVhc3lcIj5FYXN5PC9vcHRpb24+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhhcmRcIj5IYXJkPC9vcHRpb24+XG4gICAgICAgICAgICA8L3NlbGVjdD5cblxuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIDxCdXR0b25TdWJtaXQgdHlwZT0nc3VibWl0Jz5TVEFSVCBHQU1FPC9CdXR0b25TdWJtaXQ+XG4gICAgICAgIDwvRm9ybT5cblxuICAgICAgPC9TdHlsZWRJZGVudGlmaWNhdGlvbj5cblxuICAgICAgPEZvb3Rlcj5cbiAgICAgICAgPHA+XG5cbiAgICAgICAgICBDcmVhdGVkIEJ5OlxuICAgICAgICAgIFxuICAgICAgICAgIDxhIHRhcmdldD0nX2JsYW5rJyBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL01hdGhldXMwbGl2ZWlyYVwiPiBNYXRoZXVzIE9saXZlaXJhIPCfkpw8L2E+XG5cbiAgICAgICAgPC9wPlxuICAgICAgPC9Gb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgSWRlbnRpZmljYXRpb247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/identification/index.js\n");

/***/ })

})