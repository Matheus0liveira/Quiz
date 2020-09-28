webpackHotUpdate_N_E("pages/home",{

/***/ "./src/components/identification/styles.js":
/*!*************************************************!*\
  !*** ./src/components/identification/styles.js ***!
  \*************************************************/
/*! exports provided: StyledIdentification, Form, StyledInput, Text, ButtonSubmit, Footer, DangerText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledIdentification\", function() { return StyledIdentification; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Form\", function() { return Form; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StyledInput\", function() { return StyledInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Text\", function() { return Text; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonSubmit\", function() { return ButtonSubmit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Footer\", function() { return Footer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DangerText\", function() { return DangerText; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar StyledIdentification = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].main.withConfig({\n  displayName: \"styles__StyledIdentification\",\n  componentId: \"sc-1u4z7r9-0\"\n})([\"width:100%;display:flex;align-items:center;justify-content:space-around;flex-direction:row;\"]);\nvar Form = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].form.withConfig({\n  displayName: \"styles__Form\",\n  componentId: \"sc-1u4z7r9-1\"\n})([\"display:flex;align-items:center;justify-content:center;flex-direction:column;width:100vw;height:100%;padding:2rem 0;span{margin:2rem 0 0.5rem 0;width:30%;min-width:30rem;select,option{font-weight:bold;width:100%;height:5rem;padding:1rem;margin-top:1rem;background:#F8F8F2;border:0;color:#44475A;}}\"]);\nvar StyledInput = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input.withConfig({\n  displayName: \"styles__StyledInput\",\n  componentId: \"sc-1u4z7r9-2\"\n})([\"font-weight:bold;width:100%;height:5rem;padding:1rem;margin-top:1rem;background:#F8F8F2;border:0;color:#44475A;::placeholder{color:#44475A;};\", \";\"], function (props) {\n  return props.danger && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"  border:0.4rem solid #FF5555;\"]);\n});\nvar Text = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h1.withConfig({\n  displayName: \"styles__Text\",\n  componentId: \"sc-1u4z7r9-3\"\n})([\"\", \";\", \";\", \";\"], function (props) {\n  return props.label && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"font-size:2rem;color:#F8F8F2;\"]);\n}, function (props) {\n  return props.tecTitle && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"font-size:min(14vw,6rem);margin-bottom:10rem;color:#F8F8F2;text-align:center;\"]);\n}, function (props) {\n  return props.description && Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"css\"])([\"text-align:center;font-weight:lighter;font-size:min(4vw,1.9rem);color:#BD93F9;\"]);\n});\nvar ButtonSubmit = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button.withConfig({\n  displayName: \"styles__ButtonSubmit\",\n  componentId: \"sc-1u4z7r9-4\"\n})([\"width:30%;min-width:30rem;height:5rem;padding:0 2rem;margin-top:4rem;background:#BD93F9;color:#44475A;border:0;font-weight:bold;cursor:pointer;transition:all .4s ease;&:hover{background:#44475A;color:#BD93F9;}\"]);\nvar Footer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].footer.withConfig({\n  displayName: \"styles__Footer\",\n  componentId: \"sc-1u4z7r9-5\"\n})([\"display:flex;align-items:center;justify-content:center;position:fixed;bottom:0;left:0;right:0;padding:1rem 0;p,a{font-size:1.4rem;}a{text-decoration:none;color:#BD93F9;transition:opacity .2s ease;&:hover{opacity:0.5;}}\"]);\nvar DangerText = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].span.withConfig({\n  displayName: \"styles__DangerText\",\n  componentId: \"sc-1u4z7r9-6\"\n})([\"margin:2rem;color:#FF5555;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvaWRlbnRpZmljYXRpb24vc3R5bGVzLmpzPzg4YTciXSwibmFtZXMiOlsiU3R5bGVkSWRlbnRpZmljYXRpb24iLCJzdHlsZWQiLCJtYWluIiwiRm9ybSIsImZvcm0iLCJTdHlsZWRJbnB1dCIsImlucHV0IiwicHJvcHMiLCJkYW5nZXIiLCJjc3MiLCJUZXh0IiwiaDEiLCJsYWJlbCIsInRlY1RpdGxlIiwiZGVzY3JpcHRpb24iLCJCdXR0b25TdWJtaXQiLCJidXR0b24iLCJGb290ZXIiLCJmb290ZXIiLCJEYW5nZXJUZXh0Iiwic3BhbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHTyxJQUFNQSxvQkFBb0IsR0FBR0MseURBQU0sQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQSxtR0FBMUI7QUFZQSxJQUFNQyxJQUFJLEdBQUdGLHlEQUFNLENBQUNHLElBQVY7QUFBQTtBQUFBO0FBQUEsaVRBQVY7QUFtQ0EsSUFBTUMsV0FBVyxHQUFHSix5REFBTSxDQUFDSyxLQUFWO0FBQUE7QUFBQTtBQUFBLDJKQWNyQixVQUFBQyxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxNQUFOLElBQWdCQyw2REFBaEIsb0NBQUo7QUFBQSxDQWRnQixDQUFqQjtBQXlCQSxJQUFNQyxJQUFJLEdBQUdULHlEQUFNLENBQUNVLEVBQVY7QUFBQTtBQUFBO0FBQUEsd0JBRWYsVUFBQUosS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0ssS0FBTixJQUFlSCw2REFBZixtQ0FBSjtBQUFBLENBRlUsRUFVZixVQUFBRixLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDTSxRQUFOLElBQWtCSiw2REFBbEIsbUZBQUo7QUFBQSxDQVZVLEVBa0JmLFVBQUFGLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNPLFdBQU4sSUFBcUJMLDZEQUFyQixvRkFBSjtBQUFBLENBbEJVLENBQVY7QUFpQ0EsSUFBTU0sWUFBWSxHQUFHZCx5REFBTSxDQUFDZSxNQUFWO0FBQUE7QUFBQTtBQUFBLHlOQUFsQjtBQXVCQSxJQUFNQyxNQUFNLEdBQUdoQix5REFBTSxDQUFDaUIsTUFBVjtBQUFBO0FBQUE7QUFBQSxrT0FBWjtBQTBCQSxJQUFNQyxVQUFVLEdBQUdsQix5REFBTSxDQUFDbUIsSUFBVjtBQUFBO0FBQUE7QUFBQSxrQ0FBaEIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9pZGVudGlmaWNhdGlvbi9zdHlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuXG5leHBvcnQgY29uc3QgU3R5bGVkSWRlbnRpZmljYXRpb24gPSBzdHlsZWQubWFpbmBcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG5gO1xuXG5cblxuXG5leHBvcnQgY29uc3QgRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDJyZW0gMDtcblxuICBzcGFue1xuICAgIG1hcmdpbjogMnJlbSAwIDAuNXJlbSAwOyBcbiAgICB3aWR0aDogMzAlO1xuXG4gICAgbWluLXdpZHRoOiAzMHJlbTtcblxuICAgIFxuXG4gICAgc2VsZWN0LCBvcHRpb257XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAgNXJlbTtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbSA7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGOEY4RjI7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgY29sb3I6ICM0NDQ3NUE7XG5cblxuICAgICAgIFxuICAgIH1cblxuICB9XG4gIFxuYDtcblxuZXhwb3J0IGNvbnN0IFN0eWxlZElucHV0ID0gc3R5bGVkLmlucHV0YFxuXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAgNXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbSA7XG4gIGJhY2tncm91bmQ6ICNGOEY4RjI7XG4gIGJvcmRlcjogMDtcbiAgY29sb3I6ICM0NDQ3NUE7XG4gIDo6cGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6ICAjNDQ0NzVBO1xuXG4gICAgfTtcbiAke3Byb3BzID0+IHByb3BzLmRhbmdlciAmJiBjc3NgIFxuXG4gIGJvcmRlcjogMC40cmVtIHNvbGlkICNGRjU1NTU7XG5cblxuICAgYFxuICB9OyBcblxuYDtcblxuXG5leHBvcnQgY29uc3QgVGV4dCA9IHN0eWxlZC5oMWBcblxuJHtwcm9wcyA9PiBwcm9wcy5sYWJlbCAmJiBjc3NgXG5cbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgY29sb3I6ICNGOEY4RjI7XG5cbiAgYH07XG5cblxuJHtwcm9wcyA9PiBwcm9wcy50ZWNUaXRsZSAmJiBjc3NgXG5cbiAgICBmb250LXNpemU6IG1pbigxNHZ3LCA2cmVtKTsgXG4gICAgbWFyZ2luLWJvdHRvbTogMTByZW07ICBcbiAgICBjb2xvcjogI0Y4RjhGMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgYH07XG4ke3Byb3BzID0+IHByb3BzLmRlc2NyaXB0aW9uICYmIGNzc2BcblxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBmb250LXNpemU6IG1pbig0dncsIDEuOXJlbSk7IFxuICAgIGNvbG9yOiAjQkQ5M0Y5O1xuICAgIFxuXG5cblxuICBgfTtcblxuYDtcblxuXG5leHBvcnQgY29uc3QgQnV0dG9uU3VibWl0ID0gc3R5bGVkLmJ1dHRvbmBcbndpZHRoOiAzMCU7XG5taW4td2lkdGg6IDMwcmVtO1xuaGVpZ2h0OiA1cmVtO1xucGFkZGluZzogMCAycmVtO1xubWFyZ2luLXRvcDogNHJlbTtcbmJhY2tncm91bmQ6ICNCRDkzRjk7XG5jb2xvcjogIzQ0NDc1QTtcbmJvcmRlcjogMDtcbmZvbnQtd2VpZ2h0OiBib2xkO1xuXG5cbmN1cnNvcjogcG9pbnRlcjtcbnRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcblxuICAmOmhvdmVye1xuXG4gIGJhY2tncm91bmQ6ICM0NDQ3NUE7XG4gIGNvbG9yOiAjQkQ5M0Y5O1xuXG59XG5gO1xuXG5leHBvcnQgY29uc3QgRm9vdGVyID0gc3R5bGVkLmZvb3RlcmBcblxuZGlzcGxheTogZmxleDtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbnBvc2l0aW9uOiBmaXhlZDtcbmJvdHRvbTogMDtcbmxlZnQ6IDA7XG5yaWdodDogMDtcbnBhZGRpbmc6IDFyZW0gMDtcbnAsIGF7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG5he1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjQkQ5M0Y5O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycyBlYXNlO1xuXG4gICAgJjpob3ZlcntcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxufVxuYDtcblxuZXhwb3J0IGNvbnN0IERhbmdlclRleHQgPSBzdHlsZWQuc3BhbmBcblxuICBtYXJnaW46IDJyZW07XG4gIGNvbG9yOiAjRkY1NTU1O1xuYDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/identification/styles.js\n");

/***/ })

})