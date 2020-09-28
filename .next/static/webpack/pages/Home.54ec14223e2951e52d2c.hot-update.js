webpackHotUpdate_N_E("pages/Home",{

/***/ "./src/components/identification/styles.js":
/*!*************************************************!*\
  !*** ./src/components/identification/styles.js ***!
  \*************************************************/
/*! exports provided: StyledIdentification, Form, Text, ButtonSubmit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledIdentification\", function() { return StyledIdentification; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonSubmit\", function() { return ButtonSubmit; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\\n  width: 60%;\\n  height:  5rem;\\n  padding: 0 2rem;\\n  margin-top: 2rem;\\n  background: #BD93F9;\\n  color: #44475A;\\n  border: 0;\\n  font-weight: bold;\\n\\n  min-width: 20rem;\\n\\n  cursor: pointer;\\n  transition: all .4s ease;\\n\\n  &:hover{\\n\\n    background: #44475A;\\n    color: #BD93F9;\\n\\n  }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 6rem;\\n  margin-bottom: 10rem;  \\n  color: #F8F8F2;\\n\\n  \"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 2rem;\\n  color: #F8F8F2;\\n\\n  \"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 4rem;\\n  white-space: 2rem;\\n  color: #BD93F9;\\n\\n  \", \";\\n\\n\\n  \", \";\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-direction: column;\\n  width: 100%;\\n  height: 100%;\\n\\n  span{\\n    margin: 2rem 0 0.5rem 0; \\n    width: 20%;\\n\\n \\n\\n    input,select, option{\\n        width: 100%;\\n        height:  5rem;\\n        padding: 1rem;\\n        margin-top: 1rem ;\\n        background: #F8F8F2;\\n        border: 0;\\n        color: #44475A;\\n\\n        min-width: 20rem;\\n\\n        ::placeholder{\\n        color: #44475A;\\n\\n        }\\n    }\\n\\n  }\\n  \\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  flex-direction: row;\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar StyledIdentification = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].main(_templateObject());\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].form(_templateObject2());\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1(_templateObject3(), function (props) {\n  return props.label && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject4());\n}, function (props) {\n  return props.tecTitle && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])(_templateObject5());\n});\nvar ButtonSubmit = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button(_templateObject6());\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaWRlbnRpZmljYXRpb24vc3R5bGVzLmpzPzg4YTciXSwibmFtZXMiOlsiU3R5bGVkSWRlbnRpZmljYXRpb24iLCJzdHlsZWQiLCJtYWluIiwiRm9ybSIsImZvcm0iLCJUZXh0IiwiaDEiLCJwcm9wcyIsImxhYmVsIiwiY3NzIiwidGVjVGl0bGUiLCJCdXR0b25TdWJtaXQiLCJidXR0b24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR08sSUFBTUEsb0JBQW9CLEdBQUdDLHlEQUFNLENBQUNDLElBQVYsbUJBQTFCO0FBWUEsSUFBTUMsSUFBSSxHQUFHRix5REFBTSxDQUFDRyxJQUFWLG9CQUFWO0FBb0NBLElBQU1DLElBQUksR0FBR0oseURBQU0sQ0FBQ0ssRUFBVixxQkFLYixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLElBQWVDLDZEQUFmLG9CQUFKO0FBQUEsQ0FMUSxFQVliLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNHLFFBQU4sSUFBa0JELDZEQUFsQixvQkFBSjtBQUFBLENBWlEsQ0FBVjtBQXFCQSxJQUFNRSxZQUFZLEdBQUdWLHlEQUFNLENBQUNXLE1BQVYsb0JBQWxCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvaWRlbnRpZmljYXRpb24vc3R5bGVzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cblxuZXhwb3J0IGNvbnN0IFN0eWxlZElkZW50aWZpY2F0aW9uID0gc3R5bGVkLm1haW5gXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuYDtcblxuXG5cblxuZXhwb3J0IGNvbnN0IEZvcm0gPSBzdHlsZWQuZm9ybWBcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgc3BhbntcbiAgICBtYXJnaW46IDJyZW0gMCAwLjVyZW0gMDsgXG4gICAgd2lkdGg6IDIwJTtcblxuIFxuXG4gICAgaW5wdXQsc2VsZWN0LCBvcHRpb257XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6ICA1cmVtO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtIDtcbiAgICAgICAgYmFja2dyb3VuZDogI0Y4RjhGMjtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBjb2xvcjogIzQ0NDc1QTtcblxuICAgICAgICBtaW4td2lkdGg6IDIwcmVtO1xuXG4gICAgICAgIDo6cGxhY2Vob2xkZXJ7XG4gICAgICAgIGNvbG9yOiAjNDQ0NzVBO1xuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgfVxuICBcbmA7XG5cblxuZXhwb3J0IGNvbnN0IFRleHQgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgd2hpdGUtc3BhY2U6IDJyZW07XG4gIGNvbG9yOiAjQkQ5M0Y5O1xuXG4gICR7cHJvcHMgPT4gcHJvcHMubGFiZWwgJiYgY3NzYFxuICBmb250LXNpemU6IDJyZW07XG4gIGNvbG9yOiAjRjhGOEYyO1xuXG4gIGB9O1xuXG5cbiAgJHtwcm9wcyA9PiBwcm9wcy50ZWNUaXRsZSAmJiBjc3NgXG4gIGZvbnQtc2l6ZTogNnJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07ICBcbiAgY29sb3I6ICNGOEY4RjI7XG5cbiAgYH07XG5gO1xuXG5cbmV4cG9ydCBjb25zdCBCdXR0b25TdWJtaXQgPSBzdHlsZWQuYnV0dG9uYFxuXG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogIDVyZW07XG4gIHBhZGRpbmc6IDAgMnJlbTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgYmFja2dyb3VuZDogI0JEOTNGOTtcbiAgY29sb3I6ICM0NDQ3NUE7XG4gIGJvcmRlcjogMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgbWluLXdpZHRoOiAyMHJlbTtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcblxuICAmOmhvdmVye1xuXG4gICAgYmFja2dyb3VuZDogIzQ0NDc1QTtcbiAgICBjb2xvcjogI0JEOTNGOTtcblxuICB9XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/identification/styles.js\n");

/***/ })

})