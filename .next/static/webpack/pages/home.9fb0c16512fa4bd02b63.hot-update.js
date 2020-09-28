webpackHotUpdate_N_E("pages/home",{

/***/ "./src/components/identification/styles.js":
/*!*************************************************!*\
  !*** ./src/components/identification/styles.js ***!
  \*************************************************/
/*! exports provided: StyledIdentification, Form, StyledInput, Text, ButtonSubmit, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledIdentification\", function() { return StyledIdentification; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledInput\", function() { return StyledInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonSubmit\", function() { return ButtonSubmit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar StyledIdentification = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].main.withConfig({\n  displayName: \"styles__StyledIdentification\",\n  componentId: \"sc-1u4z7r9-0\"\n})([\"width:100%;display:flex;align-items:center;justify-content:space-around;flex-direction:row;\"]);\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].form.withConfig({\n  displayName: \"styles__Form\",\n  componentId: \"sc-1u4z7r9-1\"\n})([\"display:flex;align-items:center;justify-content:center;flex-direction:column;width:100vw;height:100%;padding:2rem 0;span{margin:2rem 0 0.5rem 0;width:30%;min-width:30rem;select,option{font-weight:bold;width:100%;height:5rem;padding:1rem;margin-top:1rem;background:#F8F8F2;border:0;color:#44475A;}}\"]);\nvar StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input.withConfig({\n  displayName: \"styles__StyledInput\",\n  componentId: \"sc-1u4z7r9-2\"\n})([\"\"]);\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"styles__Text\",\n  componentId: \"sc-1u4z7r9-3\"\n})([\"\", \";\", \";\", \";\"], function (props) {\n  return props.label && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"font-size:2rem;color:#F8F8F2;\"]);\n}, function (props) {\n  return props.tecTitle && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"font-size:min(14vw,6rem);margin-bottom:10rem;color:#F8F8F2;text-align:center;\"]);\n}, function (props) {\n  return props.description && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"text-align:center;font-weight:lighter;font-size:min(4vw,1.9rem);color:#BD93F9;\"]);\n});\nvar ButtonSubmit = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"styles__ButtonSubmit\",\n  componentId: \"sc-1u4z7r9-4\"\n})([\"width:30%;min-width:30rem;height:5rem;padding:0 2rem;margin-top:4rem;background:#BD93F9;color:#44475A;border:0;font-weight:bold;cursor:pointer;transition:all .4s ease;&:hover{background:#44475A;color:#BD93F9;}\"]);\nvar Footer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].footer.withConfig({\n  displayName: \"styles__Footer\",\n  componentId: \"sc-1u4z7r9-5\"\n})([\"display:flex;align-items:center;justify-content:center;position:fixed;bottom:0;left:0;right:0;padding:1rem 0;p,a{font-size:1.4rem;}a{text-decoration:none;color:#BD93F9;transition:opacity .2s ease;&:hover{opacity:0.5;}}\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaWRlbnRpZmljYXRpb24vc3R5bGVzLmpzPzg4YTciXSwibmFtZXMiOlsiU3R5bGVkSWRlbnRpZmljYXRpb24iLCJzdHlsZWQiLCJtYWluIiwiRm9ybSIsImZvcm0iLCJTdHlsZWRJbnB1dCIsImlucHV0IiwiVGV4dCIsImgxIiwicHJvcHMiLCJsYWJlbCIsImNzcyIsInRlY1RpdGxlIiwiZGVzY3JpcHRpb24iLCJCdXR0b25TdWJtaXQiLCJidXR0b24iLCJGb290ZXIiLCJmb290ZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdPLElBQU1BLG9CQUFvQixHQUFHQyx5REFBTSxDQUFDQyxJQUFWO0FBQUE7QUFBQTtBQUFBLG1HQUExQjtBQVlBLElBQU1DLElBQUksR0FBR0YseURBQU0sQ0FBQ0csSUFBVjtBQUFBO0FBQUE7QUFBQSxpVEFBVjtBQW1DQSxJQUFNQyxXQUFXLEdBQUdKLHlEQUFNLENBQUNLLEtBQVY7QUFBQTtBQUFBO0FBQUEsUUFBakI7QUFpQkEsSUFBTUMsSUFBSSxHQUFHTix5REFBTSxDQUFDTyxFQUFWO0FBQUE7QUFBQTtBQUFBLHdCQUVmLFVBQUFDLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sSUFBZUMsNkRBQWYsbUNBQUo7QUFBQSxDQUZVLEVBVWYsVUFBQUYsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0csUUFBTixJQUFrQkQsNkRBQWxCLG1GQUFKO0FBQUEsQ0FWVSxFQWtCZixVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDSSxXQUFOLElBQXFCRiw2REFBckIsb0ZBQUo7QUFBQSxDQWxCVSxDQUFWO0FBaUNBLElBQU1HLFlBQVksR0FBR2IseURBQU0sQ0FBQ2MsTUFBVjtBQUFBO0FBQUE7QUFBQSx5TkFBbEI7QUF1QkEsSUFBTUMsTUFBTSxHQUFHZix5REFBTSxDQUFDZ0IsTUFBVjtBQUFBO0FBQUE7QUFBQSxrT0FBWiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL2lkZW50aWZpY2F0aW9uL3N0eWxlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5cbmV4cG9ydCBjb25zdCBTdHlsZWRJZGVudGlmaWNhdGlvbiA9IHN0eWxlZC5tYWluYFxuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbmA7XG5cblxuXG5cbmV4cG9ydCBjb25zdCBGb3JtID0gc3R5bGVkLmZvcm1gXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMnJlbSAwO1xuXG4gIHNwYW57XG4gICAgbWFyZ2luOiAycmVtIDAgMC41cmVtIDA7IFxuICAgIHdpZHRoOiAzMCU7XG5cbiAgICBtaW4td2lkdGg6IDMwcmVtO1xuXG4gICAgXG5cbiAgICBzZWxlY3QsIG9wdGlvbntcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6ICA1cmVtO1xuICAgICAgICBwYWRkaW5nOiAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtIDtcbiAgICAgICAgYmFja2dyb3VuZDogI0Y4RjhGMjtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBjb2xvcjogIzQ0NDc1QTtcblxuXG4gICAgICAgXG4gICAgfVxuXG4gIH1cbiAgXG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkSW5wdXQgPSBzdHlsZWQuaW5wdXRgXG5cbi8qICR7cHJvcHMgPT4gcHJvcHMuZGFuZ2VyICYmIGNzc2AgKi9cblxuICAgIGJvcmRlcjogMXJlbSBzb2xpZCByZWQ7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuXG4gICAgIDo6cGxhY2Vob2xkZXJ7XG4gICAgICAgIGNvbG9yOiAjNDQ0NzVBO1xuXG4gICAgICAgIH1cbiAgLyogYFxuICB9OyAqL1xuXG5gO1xuXG5cbmV4cG9ydCBjb25zdCBUZXh0ID0gc3R5bGVkLmgxYFxuXG4ke3Byb3BzID0+IHByb3BzLmxhYmVsICYmIGNzc2BcblxuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBjb2xvcjogI0Y4RjhGMjtcblxuICBgfTtcblxuXG4ke3Byb3BzID0+IHByb3BzLnRlY1RpdGxlICYmIGNzc2BcblxuICAgIGZvbnQtc2l6ZTogbWluKDE0dncsIDZyZW0pOyBcbiAgICBtYXJnaW4tYm90dG9tOiAxMHJlbTsgIFxuICAgIGNvbG9yOiAjRjhGOEYyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBgfTtcbiR7cHJvcHMgPT4gcHJvcHMuZGVzY3JpcHRpb24gJiYgY3NzYFxuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGZvbnQtc2l6ZTogbWluKDR2dywgMS45cmVtKTsgXG4gICAgY29sb3I6ICNCRDkzRjk7XG4gICAgXG5cblxuXG4gIGB9O1xuXG5gO1xuXG5cbmV4cG9ydCBjb25zdCBCdXR0b25TdWJtaXQgPSBzdHlsZWQuYnV0dG9uYFxud2lkdGg6IDMwJTtcbm1pbi13aWR0aDogMzByZW07XG5oZWlnaHQ6IDVyZW07XG5wYWRkaW5nOiAwIDJyZW07XG5tYXJnaW4tdG9wOiA0cmVtO1xuYmFja2dyb3VuZDogI0JEOTNGOTtcbmNvbG9yOiAjNDQ0NzVBO1xuYm9yZGVyOiAwO1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG5cblxuY3Vyc29yOiBwb2ludGVyO1xudHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xuXG4gICY6aG92ZXJ7XG5cbiAgYmFja2dyb3VuZDogIzQ0NDc1QTtcbiAgY29sb3I6ICNCRDkzRjk7XG5cbn1cbmA7XG5cbmV4cG9ydCBjb25zdCBGb290ZXIgPSBzdHlsZWQuZm9vdGVyYFxuXG5kaXNwbGF5OiBmbGV4O1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xucG9zaXRpb246IGZpeGVkO1xuYm90dG9tOiAwO1xubGVmdDogMDtcbnJpZ2h0OiAwO1xucGFkZGluZzogMXJlbSAwO1xucCwgYXtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbmF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICNCRDkzRjk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzIGVhc2U7XG5cbiAgICAmOmhvdmVye1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuXG59XG5gOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/identification/styles.js\n");

/***/ })

})