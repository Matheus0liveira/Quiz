webpackHotUpdate_N_E("pages/quiz",{

/***/ "./src/pages/quiz/index.js":
/*!*********************************!*\
  !*** ./src/pages/quiz/index.js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_useUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/useUser */ \"./src/utils/useUser.js\");\n/* harmony import */ var _components_Question__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Question */ \"./src/components/Question/index.js\");\n/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Results */ \"./src/components/Results/index.js\");\nvar _this = undefined,\n    _jsxFileName = \"/media/matheus-oliveira/Data/Projects/ReactJs/quiz/src/pages/quiz/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Quiz = function Quiz(_ref) {\n  _s();\n\n  var quiz = _ref.quiz;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([{\n    question: '',\n    answers: {\n      answer_a_correct: \"\",\n      answer_b: \"\",\n      answer_c: \"\",\n      answer_d: \"\",\n      answer_e: \"\",\n      answer_f: \"\"\n    },\n    correct_answers: {\n      answer_a: \"\",\n      answer_b: \"\",\n      answer_c: \"\",\n      answer_d: \"\",\n      answer_e: \"\",\n      answer_f: \"\"\n    }\n  }]),\n      quizQuestion = _useState[0],\n      setQuizQuestion = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(0),\n      countQuestion = _useState2[0],\n      setCountQuestion = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      showResults = _useState3[0],\n      setShowResults = _useState3[1];\n\n  var _useUSer = Object(_utils_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      user = _useUSer.user;\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    if (!user.name) {\n      return next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/home');\n    }\n\n    ;\n  }, [user]);\n\n  var handleNextQuest = function handleNextQuest() {\n    if (countQuestion < user.dificulty) {\n      var newQuiz = {\n        question: quiz[countQuestion].question,\n        answers: quiz[countQuestion].answers,\n        correct_answers: quiz[countQuestion].correct_answers\n      };\n      console.log('*** newQuiz: ' + newQuiz);\n      setCountQuestion(function (prevState) {\n        return prevState + 1;\n      });\n      setQuizQuestion(newQuiz);\n    }\n\n    ; // countQuestion < quizQuestion.length - 1\n    //   ?\n    //   (\n    //   )\n    //   :\n    //   (\n    //     setShowResults(true)\n    //   )\n  };\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, console.log(quiz), console.log(quizQuestion), !showResults ? __jsx(_components_Question__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    countQuestion: countQuestion,\n    question: quizQuestion.question,\n    answers: quizQuestion.answers // correct_answers={quizQuestion[countQuestion].correct_answers}\n    ,\n    nextQuestion: handleNextQuest,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 11\n    }\n  }) : __jsx(_components_Results__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 11\n    }\n  }), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 117,\n      columnNumber: 7\n    }\n  }));\n};\n\n_s(Quiz, \"v/QtxBl7yczYOjDkueU9vTRRQv0=\", false, function () {\n  return [_utils_useUser__WEBPACK_IMPORTED_MODULE_2__[\"default\"]];\n});\n\n_c = Quiz;\n;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Quiz);\n\nvar _c;\n\n$RefreshReg$(_c, \"Quiz\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3F1aXovaW5kZXguanM/OTk1NyJdLCJuYW1lcyI6WyJRdWl6IiwicXVpeiIsInVzZVN0YXRlIiwicXVlc3Rpb24iLCJhbnN3ZXJzIiwiYW5zd2VyX2FfY29ycmVjdCIsImFuc3dlcl9iIiwiYW5zd2VyX2MiLCJhbnN3ZXJfZCIsImFuc3dlcl9lIiwiYW5zd2VyX2YiLCJjb3JyZWN0X2Fuc3dlcnMiLCJhbnN3ZXJfYSIsInF1aXpRdWVzdGlvbiIsInNldFF1aXpRdWVzdGlvbiIsImNvdW50UXVlc3Rpb24iLCJzZXRDb3VudFF1ZXN0aW9uIiwic2hvd1Jlc3VsdHMiLCJzZXRTaG93UmVzdWx0cyIsInVzZVVTZXIiLCJ1c2VyIiwidXNlRWZmZWN0IiwibmFtZSIsIlJvdXRlciIsInB1c2giLCJoYW5kbGVOZXh0UXVlc3QiLCJkaWZpY3VsdHkiLCJuZXdRdWl6IiwiY29uc29sZSIsImxvZyIsInByZXZTdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUNBOztBQUlBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWM7QUFBQTs7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQUEsa0JBQ2VDLHNEQUFRLENBQUMsQ0FBQztBQUVoREMsWUFBUSxFQUFFLEVBRnNDO0FBR2hEQyxXQUFPLEVBQUU7QUFDUEMsc0JBQWdCLEVBQUUsRUFEWDtBQUVQQyxjQUFRLEVBQUUsRUFGSDtBQUdQQyxjQUFRLEVBQUUsRUFISDtBQUlQQyxjQUFRLEVBQUUsRUFKSDtBQUtQQyxjQUFRLEVBQUUsRUFMSDtBQU1QQyxjQUFRLEVBQUU7QUFOSCxLQUh1QztBQVdoREMsbUJBQWUsRUFBRTtBQUNmQyxjQUFRLEVBQUUsRUFESztBQUVmTixjQUFRLEVBQUUsRUFGSztBQUdmQyxjQUFRLEVBQUUsRUFISztBQUlmQyxjQUFRLEVBQUUsRUFKSztBQUtmQyxjQUFRLEVBQUUsRUFMSztBQU1mQyxjQUFRLEVBQUU7QUFOSztBQVgrQixHQUFELENBQUQsQ0FEdkI7QUFBQSxNQUNsQkcsWUFEa0I7QUFBQSxNQUNKQyxlQURJOztBQUFBLG1CQXNCaUJaLHNEQUFRLENBQUMsQ0FBRCxDQXRCekI7QUFBQSxNQXNCbEJhLGFBdEJrQjtBQUFBLE1Bc0JIQyxnQkF0Qkc7O0FBQUEsbUJBdUJhZCxzREFBUSxDQUFDLEtBQUQsQ0F2QnJCO0FBQUEsTUF1QmxCZSxXQXZCa0I7QUFBQSxNQXVCTEMsY0F2Qks7O0FBQUEsaUJBeUJSQyw4REFBTyxFQXpCQztBQUFBLE1BeUJqQkMsSUF6QmlCLFlBeUJqQkEsSUF6QmlCOztBQTJCekJDLHlEQUFTLENBQUMsWUFBTTtBQUVkLFFBQUksQ0FBQ0QsSUFBSSxDQUFDRSxJQUFWLEVBQWdCO0FBRWQsYUFBT0Msa0RBQU0sQ0FBQ0MsSUFBUCxDQUFZLE9BQVosQ0FBUDtBQUVEOztBQUFBO0FBUUYsR0FkUSxFQWNOLENBQUNKLElBQUQsQ0FkTSxDQUFUOztBQWdCQSxNQUFNSyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIsUUFBSVYsYUFBYSxHQUFHSyxJQUFJLENBQUNNLFNBQXpCLEVBQW9DO0FBRWxDLFVBQU1DLE9BQU8sR0FBRztBQUVkeEIsZ0JBQVEsRUFBRUYsSUFBSSxDQUFDYyxhQUFELENBQUosQ0FBb0JaLFFBRmhCO0FBR2RDLGVBQU8sRUFBRUgsSUFBSSxDQUFDYyxhQUFELENBQUosQ0FBb0JYLE9BSGY7QUFJZE8sdUJBQWUsRUFBRVYsSUFBSSxDQUFDYyxhQUFELENBQUosQ0FBb0JKO0FBSnZCLE9BQWhCO0FBUUFpQixhQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBa0JGLE9BQTlCO0FBQ0FYLHNCQUFnQixDQUFDLFVBQUFjLFNBQVM7QUFBQSxlQUFJQSxTQUFTLEdBQUcsQ0FBaEI7QUFBQSxPQUFWLENBQWhCO0FBQ0FoQixxQkFBZSxDQUFDYSxPQUFELENBQWY7QUFDRDs7QUFBQSxLQWQyQixDQWdCNUI7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdELEdBL0JEOztBQWlDQSxTQUNFLG1FQUNHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWTVCLElBQVosQ0FESCxFQUVHMkIsT0FBTyxDQUFDQyxHQUFSLENBQVloQixZQUFaLENBRkgsRUFJRyxDQUFDSSxXQUFELEdBSUcsTUFBQyw0REFBRDtBQUNFLGlCQUFhLEVBQUVGLGFBRGpCO0FBRUUsWUFBUSxFQUFFRixZQUFZLENBQUNWLFFBRnpCO0FBR0UsV0FBTyxFQUFFVSxZQUFZLENBQUNULE9BSHhCLENBSUU7QUFKRjtBQUtFLGdCQUFZLEVBQUVxQixlQUxoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkgsR0FnQkcsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJOLEVBNEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE1QkYsQ0FERjtBQXFDRCxDQWpIRDs7R0FBTXpCLEk7VUF5QmFtQixzRDs7O0tBekJibkIsSTtBQTBLTDs7QUFFY0EsbUVBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvcXVpei9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgdXNlVVNlciBmcm9tICcuLi8uLi91dGlscy91c2VVc2VyJztcblxuaW1wb3J0IFF1ZXN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUXVlc3Rpb24nO1xuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9SZXN1bHRzJztcblxuXG5cbmNvbnN0IFF1aXogPSAoeyBxdWl6IH0pID0+IHtcbiAgY29uc3QgW3F1aXpRdWVzdGlvbiwgc2V0UXVpelF1ZXN0aW9uXSA9IHVzZVN0YXRlKFt7XG5cbiAgICBxdWVzdGlvbjogJycsXG4gICAgYW5zd2Vyczoge1xuICAgICAgYW5zd2VyX2FfY29ycmVjdDogXCJcIixcbiAgICAgIGFuc3dlcl9iOiBcIlwiLFxuICAgICAgYW5zd2VyX2M6IFwiXCIsXG4gICAgICBhbnN3ZXJfZDogXCJcIixcbiAgICAgIGFuc3dlcl9lOiBcIlwiLFxuICAgICAgYW5zd2VyX2Y6IFwiXCIsXG4gICAgfSxcbiAgICBjb3JyZWN0X2Fuc3dlcnM6IHtcbiAgICAgIGFuc3dlcl9hOiBcIlwiLFxuICAgICAgYW5zd2VyX2I6IFwiXCIsXG4gICAgICBhbnN3ZXJfYzogXCJcIixcbiAgICAgIGFuc3dlcl9kOiBcIlwiLFxuICAgICAgYW5zd2VyX2U6IFwiXCIsXG4gICAgICBhbnN3ZXJfZjogXCJcIixcbiAgICB9XG4gIH1dKTtcblxuICBjb25zdCBbY291bnRRdWVzdGlvbiwgc2V0Q291bnRRdWVzdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3Nob3dSZXN1bHRzLCBzZXRTaG93UmVzdWx0c10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VVU2VyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcblxuICAgIGlmICghdXNlci5uYW1lKSB7XG5cbiAgICAgIHJldHVybiBSb3V0ZXIucHVzaCgnL2hvbWUnKTtcblxuICAgIH07XG5cblxuXG5cblxuXG5cbiAgfSwgW3VzZXJdKTtcblxuICBjb25zdCBoYW5kbGVOZXh0UXVlc3QgPSAoKSA9PiB7XG4gICAgaWYgKGNvdW50UXVlc3Rpb24gPCB1c2VyLmRpZmljdWx0eSkge1xuXG4gICAgICBjb25zdCBuZXdRdWl6ID0ge1xuXG4gICAgICAgIHF1ZXN0aW9uOiBxdWl6W2NvdW50UXVlc3Rpb25dLnF1ZXN0aW9uLFxuICAgICAgICBhbnN3ZXJzOiBxdWl6W2NvdW50UXVlc3Rpb25dLmFuc3dlcnMsXG4gICAgICAgIGNvcnJlY3RfYW5zd2VyczogcXVpeltjb3VudFF1ZXN0aW9uXS5jb3JyZWN0X2Fuc3dlcnNcblxuICAgICAgfTtcblxuICAgICAgY29uc29sZS5sb2coJyoqKiBuZXdRdWl6OiAnICsgbmV3UXVpeilcbiAgICAgIHNldENvdW50UXVlc3Rpb24ocHJldlN0YXRlID0+IHByZXZTdGF0ZSArIDEpXG4gICAgICBzZXRRdWl6UXVlc3Rpb24obmV3UXVpeik7XG4gICAgfTtcblxuICAgIC8vIGNvdW50UXVlc3Rpb24gPCBxdWl6UXVlc3Rpb24ubGVuZ3RoIC0gMVxuXG4gICAgLy8gICA/XG5cbiAgICAvLyAgIChcblxuICAgIC8vICAgKVxuXG4gICAgLy8gICA6XG5cbiAgICAvLyAgIChcbiAgICAvLyAgICAgc2V0U2hvd1Jlc3VsdHModHJ1ZSlcbiAgICAvLyAgIClcblxuXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2NvbnNvbGUubG9nKHF1aXopfVxuICAgICAge2NvbnNvbGUubG9nKHF1aXpRdWVzdGlvbil9XG5cbiAgICAgIHshc2hvd1Jlc3VsdHNcbiAgICAgICAgP1xuICAgICAgICAoXG5cbiAgICAgICAgICA8UXVlc3Rpb25cbiAgICAgICAgICAgIGNvdW50UXVlc3Rpb249e2NvdW50UXVlc3Rpb259XG4gICAgICAgICAgICBxdWVzdGlvbj17cXVpelF1ZXN0aW9uLnF1ZXN0aW9ufVxuICAgICAgICAgICAgYW5zd2Vycz17cXVpelF1ZXN0aW9uLmFuc3dlcnN9XG4gICAgICAgICAgICAvLyBjb3JyZWN0X2Fuc3dlcnM9e3F1aXpRdWVzdGlvbltjb3VudFF1ZXN0aW9uXS5jb3JyZWN0X2Fuc3dlcnN9XG4gICAgICAgICAgICBuZXh0UXVlc3Rpb249e2hhbmRsZU5leHRRdWVzdH1cbiAgICAgICAgICAvPlxuXG4gICAgICAgIClcbiAgICAgICAgOlxuICAgICAgICAoXG5cbiAgICAgICAgICA8UmVzdWx0cyAvPlxuXG4gICAgICAgIClcbiAgICAgIH1cblxuXG5cblxuICAgICAgPGRpdiA+XG5cblxuXG4gICAgICA8L2Rpdj5cblxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuXG5cbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vcXVpemFwaS5pby9hcGkvdjEvcXVlc3Rpb25zJywge1xuXG5cbiAgICBoZWFkZXJzOiB7ICdYLUFwaS1LZXknOiBwcm9jZXNzLmVudi50b2tlbkFQSSB9LFxuXG5cbiAgfSk7XG5cbiAgY29uc3QgbmV3UXVpeiA9IGRhdGEubWFwKHF1aXogPT4ge1xuXG4gICAgcmV0dXJuIHtcblxuICAgICAgaWQ6IHF1aXouaWQsXG4gICAgICBxdWVzdGlvbjogcXVpei5xdWVzdGlvbixcbiAgICAgIGFuc3dlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIHF1ZXN0OiBxdWl6LmFuc3dlcnMuYW5zd2VyX2EsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMixcbiAgICAgICAgICBxdWVzdDogcXVpei5hbnN3ZXJzLmFuc3dlcl9iLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgcXVlc3Q6IHF1aXouYW5zd2Vycy5hbnN3ZXJfYyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgIHF1ZXN0OiBxdWl6LmFuc3dlcnMuYW5zd2VyX2QsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogNSxcbiAgICAgICAgICBxdWVzdDogcXVpei5hbnN3ZXJzLmFuc3dlcl9lLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgcXVlc3Q6IHF1aXouYW5zd2Vycy5hbnN3ZXJfZixcbiAgICAgICAgfSxcbiAgICAgIF0uZmlsdGVyKGFuc3dlciA9PiBhbnN3ZXIucXVlc3QgIT09IG51bGwpLFxuICAgICAgY29ycmVjdF9hbnN3ZXJzOiBxdWl6LmNvcnJlY3RfYW5zd2VycyxcbiAgICAgIG11bHRpcGxlX2NvcnJlY3RfYW5zd2VyczogcXVpei5tdWx0aXBsZV9jb3JyZWN0X2Fuc3dlcnMsXG4gICAgICBjYXRlZ29yeTogcXVpei5jYXRlZ29yeSxcblxuICAgIH1cbiAgfSk7XG5cblxuXG4gIGNvbnN0IHF1aXogPSBuZXdRdWl6O1xuXG4gIHJldHVybiB7IHByb3BzOiB7IHF1aXogfSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUXVpejsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/quiz/index.js\n");

/***/ })

})