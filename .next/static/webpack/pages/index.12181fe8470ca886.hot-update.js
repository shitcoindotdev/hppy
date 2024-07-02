'use strict'
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self['webpackHotUpdate_N_E']('pages/index', {
	/***/ './src/components/Navbar.jsx':
		/*!***********************************!*\
  !*** ./src/components/Navbar.jsx ***!
  \***********************************/
		/***/ function (module, __webpack_exports__, __webpack_require__) {
			eval(
				__webpack_require__.ts(
					'__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MMButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MMButton */ "./src/components/MMButton.jsx");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Navlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navlist */ "./src/components/Navlist.jsx");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Navbar(param) {\n    let { className } = param;\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function openMenu() {\n        setIsOpen(true);\n    }\n    function closeMenu() {\n        setIsOpen(false);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {\n        className: "fixed z-50 flex w-full flex-col items-center justify-between py-2 pl-[16px] pr-[32px] backdrop-blur-sm transition-all duration-300 ease-in-out ".concat(isOpen ? "bg-black/90" : "bg-black/20", " ").concat(className),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                className: "relative flex w-full items-center justify-between",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        className: "w-[40vw] md:h-[48px] md:w-auto",\n                        src: "/hoppyLogo.png",\n                        width: 2048,\n                        height: 585,\n                        alt: "hoppy logo"\n                    }, void 0, false, {\n                        fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n                        lineNumber: 22,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navlist__WEBPACK_IMPORTED_MODULE_4__["default"], {\n                        className: "hidden text-[22px] lg:flex"\n                    }, void 0, false, {\n                        fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n                        lineNumber: 29,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                        className: "absolute left-1/2 hidden -translate-x-1/2 rounded-full border border-white px-8 py-3 text-[18px] md:block",\n                        href: "#",\n                        children: "Buy Now"\n                    }, void 0, false, {\n                        fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n                        lineNumber: 30,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MMButton__WEBPACK_IMPORTED_MODULE_2__["default"], {\n                        isOpen: isOpen,\n                        closeMenu: closeMenu,\n                        openMenu: openMenu,\n                        className: "h-[33px] w-[33px] lg:hidden"\n                    }, void 0, false, {\n                        fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n                        lineNumber: 36,\n                        columnNumber: 5\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n                lineNumber: 21,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                className: "flex w-full items-center justify-center overflow-hidden rounded-bl-xl rounded-br-xl duration-300 ease-in-out ".concat(isOpen ? "h-[30vh]" : "h-0"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navlist__WEBPACK_IMPORTED_MODULE_4__["default"], {\n                    className: "flex-col items-center text-[22px]"\n                }, void 0, false, {\n                    fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n                    lineNumber: 46,\n                    columnNumber: 5\n                }, this)\n            }, void 0, false, {\n                fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n                lineNumber: 43,\n                columnNumber: 4\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: "/Users/ludwig/shitcoindev/hppy/src/components/Navbar.jsx",\n        lineNumber: 18,\n        columnNumber: 3\n    }, this);\n}\n_s(Navbar, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__["default"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, "Navbar");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ0M7QUFDSDtBQUNDO0FBRS9CLFNBQVNJLE9BQU8sS0FBYTtRQUFiLEVBQUVDLFNBQVMsRUFBRSxHQUFiOztJQUNmLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUVyQyxTQUFTUTtRQUNSRCxVQUFVO0lBQ1g7SUFFQSxTQUFTRTtRQUNSRixVQUFVO0lBQ1g7SUFFQSxxQkFDQyw4REFBQ0c7UUFDQUwsV0FBVyxrSkFBNExBLE9BQTFDQyxTQUFTLGdCQUFnQixlQUFjLEtBQWEsT0FBVkQ7OzBCQUV2TSw4REFBQ007Z0JBQUlOLFdBQVU7O2tDQUNkLDhEQUFDSCxtREFBS0E7d0JBQ0xHLFdBQVU7d0JBQ1ZPLEtBQUk7d0JBQ0pDLE9BQU87d0JBQ1BDLFFBQVE7d0JBQ1JDLEtBQUk7Ozs7OztrQ0FFTCw4REFBQ1osZ0RBQU9BO3dCQUFDRSxXQUFZOzs7Ozs7a0NBQ3JCLDhEQUFDVzt3QkFDQVgsV0FBVTt3QkFDVlksTUFBSztrQ0FDTDs7Ozs7O2tDQUdELDhEQUFDaEIsaURBQVFBO3dCQUNSSyxRQUFRQTt3QkFDUkcsV0FBV0E7d0JBQ1hELFVBQVVBO3dCQUNWSCxXQUFZOzs7Ozs7Ozs7Ozs7MEJBR2QsOERBQUNNO2dCQUNBTixXQUFXLGdIQUE0SSxPQUE1QkMsU0FBUyxhQUFhOzBCQUVqSiw0RUFBQ0gsZ0RBQU9BO29CQUFDRSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QjtHQTVDU0Q7S0FBQUE7QUE4Q1QsK0RBQWVBLE1BQU1BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTmF2YmFyLmpzeD85MGZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTU1CdXR0b24gZnJvbSAnLi9NTUJ1dHRvbidcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IE5hdmxpc3QgZnJvbSAnLi9OYXZsaXN0J1xuXG5mdW5jdGlvbiBOYXZiYXIoeyBjbGFzc05hbWUgfSkge1xuXHRjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cblx0ZnVuY3Rpb24gb3Blbk1lbnUoKSB7XG5cdFx0c2V0SXNPcGVuKHRydWUpXG5cdH1cblxuXHRmdW5jdGlvbiBjbG9zZU1lbnUoKSB7XG5cdFx0c2V0SXNPcGVuKGZhbHNlKVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8bmF2XG5cdFx0XHRjbGFzc05hbWU9e2BmaXhlZCB6LTUwIGZsZXggdy1mdWxsIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktMiBwbC1bMTZweF0gcHItWzMycHhdIGJhY2tkcm9wLWJsdXItc20gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICR7aXNPcGVuID8gJ2JnLWJsYWNrLzkwJyA6ICdiZy1ibGFjay8yMCd9ICR7Y2xhc3NOYW1lfWB9XG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuXCI+XG5cdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInctWzQwdnddIG1kOmgtWzQ4cHhdIG1kOnctYXV0b1wiXG5cdFx0XHRcdFx0c3JjPVwiL2hvcHB5TG9nby5wbmdcIlxuXHRcdFx0XHRcdHdpZHRoPXsyMDQ4fVxuXHRcdFx0XHRcdGhlaWdodD17NTg1fVxuXHRcdFx0XHRcdGFsdD1cImhvcHB5IGxvZ29cIlxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8TmF2bGlzdCBjbGFzc05hbWU9e2BoaWRkZW4gdGV4dC1bMjJweF0gbGc6ZmxleGB9IC8+XG5cdFx0XHRcdDxhXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0xLzIgaGlkZGVuIC10cmFuc2xhdGUteC0xLzIgcm91bmRlZC1mdWxsIGJvcmRlciBib3JkZXItd2hpdGUgcHgtOCBweS0zIHRleHQtWzE4cHhdIG1kOmJsb2NrXCJcblx0XHRcdFx0XHRocmVmPVwiI1wiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHRCdXkgTm93XG5cdFx0XHRcdDwvYT5cblx0XHRcdFx0PE1NQnV0dG9uXG5cdFx0XHRcdFx0aXNPcGVuPXtpc09wZW59XG5cdFx0XHRcdFx0Y2xvc2VNZW51PXtjbG9zZU1lbnV9XG5cdFx0XHRcdFx0b3Blbk1lbnU9e29wZW5NZW51fVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YGgtWzMzcHhdIHctWzMzcHhdIGxnOmhpZGRlbmB9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPXtgZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLWJsLXhsIHJvdW5kZWQtYnIteGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICR7aXNPcGVuID8gJ2gtWzMwdmhdJyA6ICdoLTAnfWB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxOYXZsaXN0IGNsYXNzTmFtZT17J2ZsZXgtY29sIGl0ZW1zLWNlbnRlciB0ZXh0LVsyMnB4XSd9IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L25hdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIk1NQnV0dG9uIiwiSW1hZ2UiLCJOYXZsaXN0IiwiTmF2YmFyIiwiY2xhc3NOYW1lIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwib3Blbk1lbnUiLCJjbG9zZU1lbnUiLCJuYXYiLCJkaXYiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navbar.jsx\n',
				),
			)

			/***/
		},
})
