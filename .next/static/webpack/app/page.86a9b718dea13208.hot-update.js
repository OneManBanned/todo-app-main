"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/LatestTodos.tsx":
/*!****************************************!*\
  !*** ./app/components/LatestTodos.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LatestTodos; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nasync function authId() {\n    const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.getSession)();\n    return session;\n}\nfunction LatestTodos() {\n    _s();\n    const session = authId();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    session.then((res)=>{\n        console.log(res === null || res === void 0 ? void 0 : res.user.id);\n    });\n    if (session !== undefined) {\n        (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n            fetch(\"http://localhost:3000/api/todos/\".concat(session)).then((res)=>res.json()).then((d)=>{\n                setMessage(d);\n            });\n        }, []);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            children: message ? message === null || message === void 0 ? void 0 : message.message : \"hi\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Oem\\\\brendan\\\\frontend_mentor\\\\intermediate\\\\todo-app-main\\\\app\\\\components\\\\LatestTodos.tsx\",\n            lineNumber: 37,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Oem\\\\brendan\\\\frontend_mentor\\\\intermediate\\\\todo-app-main\\\\app\\\\components\\\\LatestTodos.tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this);\n}\n_s(LatestTodos, \"oxT8SEz5FIjvFP5ix50Ku0sapH4=\");\n_c = LatestTodos;\nvar _c;\n$RefreshReg$(_c, \"LatestTodos\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0xhdGVzdFRvZG9zLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUV3RDtBQUNiO0FBRTNDLGVBQWVHO0lBQ1gsTUFBTUMsVUFBVSxNQUFNSiwyREFBVUE7SUFDaEMsT0FBT0k7QUFDWDtBQUVlLFNBQVNDOztJQUVwQixNQUFNRCxVQUFVRDtJQUNoQixNQUFNLENBQUNHLFNBQVNDLFdBQVcsR0FBR0wsK0NBQVFBLENBQUM7SUFFdkNFLFFBQ0NJLElBQUksQ0FBQyxDQUFDQztRQUNDQyxRQUFRQyxHQUFHLENBQUNGLGdCQUFBQSwwQkFBQUEsSUFBS0csSUFBSSxDQUFDQyxFQUFFO0lBQzVCO0lBRUosSUFBSVQsWUFBWVUsV0FBVztRQUd2QmIsZ0RBQVNBLENBQUM7WUFDTmMsTUFBTSxtQ0FBMkMsT0FBUlgsVUFDcENJLElBQUksQ0FBQ0MsQ0FBQUEsTUFBT0EsSUFBSU8sSUFBSSxJQUNwQlIsSUFBSSxDQUFDUyxDQUFBQTtnQkFDRlYsV0FBV1U7WUFDZjtRQUNSLEdBQUcsRUFBRTtJQUdUO0lBRUEscUJBQ0ksOERBQUNDO2tCQUNHLDRFQUFDQztzQkFBSWIsVUFBVUEsb0JBQUFBLDhCQUFBQSxRQUFTQSxPQUFPLEdBQUc7Ozs7Ozs7Ozs7O0FBRzlDO0dBN0J3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTGF0ZXN0VG9kb3MudHN4P2IxZmIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcblxyXG5pbXBvcnQgeyBnZXRTZXNzaW9uLCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGF1dGhJZCgpIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcclxuICAgIHJldHVybiBzZXNzaW9uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXRlc3RUb2RvcygpIHtcclxuXHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXV0aElkKClcclxuICAgIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgc2Vzc2lvblxyXG4gICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXM/LnVzZXIuaWQpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICBpZiAoc2Vzc2lvbiAhPT0gdW5kZWZpbmVkKSB7XHJcblxyXG5cclxuICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS90b2Rvcy8ke3Nlc3Npb259YClcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TWVzc2FnZShkKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9LCBbXSlcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bGk+e21lc3NhZ2UgPyBtZXNzYWdlPy5tZXNzYWdlIDogJ2hpJ308L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbImdldFNlc3Npb24iLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF1dGhJZCIsInNlc3Npb24iLCJMYXRlc3RUb2RvcyIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiaWQiLCJ1bmRlZmluZWQiLCJmZXRjaCIsImpzb24iLCJkIiwidWwiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/LatestTodos.tsx\n"));

/***/ })

});