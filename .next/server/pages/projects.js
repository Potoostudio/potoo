/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/projects";
exports.ids = ["pages/projects"];
exports.modules = {

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"react-intersection-observer\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-countdown */ \"react-countdown\");\n/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/ahmed./Desktop/Potoo/Website/Potoo/pages/projects.js\";\n\n\n\n\n\n\n\n\nconst completedMsg = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n  children: \"Project is loading\"\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 9,\n  columnNumber: 28\n}, undefined);\n\nconst renderer = ({\n  days,\n  hours,\n  minutes,\n  seconds,\n  completed\n}) => {\n  if (completed) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"completedMsg\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 12\n    }, undefined);\n  } else {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n      children: [hours, \" : \", minutes, \" : \", seconds]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined);\n  }\n};\n\nfunction Projects() {\n  const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useAnimation)();\n  const [ref, inView] = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)();\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    if (inView) {\n      controls.start(\"visible\");\n    }\n  }, [controls, inView]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Potoo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"container-fluid projects-container mw-1450 pt-lg-5 pb-lg-5 mt-md-5\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row justify-content-around py-lg-5 my-lg-3\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          className: \"waiting-for-projects\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_countdown__WEBPACK_IMPORTED_MODULE_7___default()), {\n            date: Date.now() + 19960708000000,\n            renderer: renderer\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"row justify-content-around py-lg-5 my-lg-3\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          className: \"finish-project-h1\",\n          children: \"Until we finish our first project\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0ai8uL3BhZ2VzL3Byb2plY3RzLmpzPzQ0NzEiXSwibmFtZXMiOlsiY29tcGxldGVkTXNnIiwicmVuZGVyZXIiLCJkYXlzIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImNvbXBsZXRlZCIsIlByb2plY3RzIiwiY29udHJvbHMiLCJ1c2VBbmltYXRpb24iLCJyZWYiLCJpblZpZXciLCJ1c2VJblZpZXciLCJ1c2VFZmZlY3QiLCJzdGFydCIsIkRhdGUiLCJub3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsWUFBWSxHQUFHLG1CQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQTNCOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxDQUFDO0FBQUNDLE1BQUQ7QUFBT0MsT0FBUDtBQUFjQyxTQUFkO0FBQXVCQyxTQUF2QjtBQUFnQ0M7QUFBaEMsQ0FBRCxLQUFnRDtBQUMvRCxNQUFJQSxTQUFKLEVBQWU7QUFDYix3QkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsd0JBQ0U7QUFBQSxpQkFDR0gsS0FESCxTQUNhQyxPQURiLFNBQ3lCQyxPQUR6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREY7QUFLRDtBQUNGLENBVkQ7O0FBWWUsU0FBU0UsUUFBVCxHQUFvQjtBQUVqQyxRQUFNQyxRQUFRLEdBQUdDLDJEQUFZLEVBQTdCO0FBQ0EsUUFBTSxDQUFDQyxHQUFELEVBQU1DLE1BQU4sSUFBZ0JDLHNFQUFTLEVBQS9CO0FBRUFDLGtEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlGLE1BQUosRUFBWTtBQUNWSCxjQUFRLENBQUNNLEtBQVQsQ0FBZSxTQUFmO0FBQ0Q7QUFDRixHQUpRLEVBSU4sQ0FBQ04sUUFBRCxFQUFXRyxNQUFYLENBSk0sQ0FBVDtBQU9BLHNCQUNFO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBS0U7QUFBSyxlQUFTLEVBQUMsb0VBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsNENBQWY7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUMsc0JBQWQ7QUFBQSxpQ0FDRSw4REFBQyx3REFBRDtBQUFXLGdCQUFJLEVBQUVJLElBQUksQ0FBQ0MsR0FBTCxLQUFhLGNBQTlCO0FBQThDLG9CQUFRLEVBQUVmO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBTUU7QUFBSyxpQkFBUyxFQUFDLDRDQUFmO0FBQUEsK0JBQ0U7QUFBSSxtQkFBUyxFQUFDLG1CQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxGO0FBQUEsa0JBREY7QUFxQkQiLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCJcbmltcG9ydCB7IGFuaW1hdGUsIG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIlxuaW1wb3J0IENvdW50ZG93biBmcm9tIFwicmVhY3QtY291bnRkb3duXCI7XG5cbmNvbnN0IGNvbXBsZXRlZE1zZyA9ICgpID0+IDxzcGFuPlByb2plY3QgaXMgbG9hZGluZzwvc3Bhbj5cblxuY29uc3QgcmVuZGVyZXIgPSAoe2RheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBjb21wbGV0ZWR9KSA9PiB7XG4gIGlmIChjb21wbGV0ZWQpIHtcbiAgICByZXR1cm4gPGNvbXBsZXRlZE1zZy8+XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuPlxuICAgICAgICB7aG91cnN9IDoge21pbnV0ZXN9IDoge3NlY29uZHN9XG4gICAgICA8L3NwYW4+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RzKCkge1xuXG4gIGNvbnN0IGNvbnRyb2xzID0gdXNlQW5pbWF0aW9uKCk7XG4gIGNvbnN0IFtyZWYsIGluVmlld10gPSB1c2VJblZpZXcoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpblZpZXcpIHtcbiAgICAgIGNvbnRyb2xzLnN0YXJ0KFwidmlzaWJsZVwiKTtcbiAgICB9XG4gIH0sIFtjb250cm9scywgaW5WaWV3XSk7XG5cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBvdG9vPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcHJvamVjdHMtY29udGFpbmVyIG13LTE0NTAgcHQtbGctNSBwYi1sZy01IG10LW1kLTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWFyb3VuZCBweS1sZy01IG15LWxnLTNcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwid2FpdGluZy1mb3ItcHJvamVjdHNcIj5cbiAgICAgICAgICAgIDxDb3VudGRvd24gZGF0ZT17RGF0ZS5ub3coKSArIDE5OTYwNzA4MDAwMDAwfSByZW5kZXJlcj17cmVuZGVyZXJ9Lz5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWFyb3VuZCBweS1sZy01IG15LWxnLTNcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZmluaXNoLXByb2plY3QtaDFcIj5cbiAgICAgICAgICAgICAgVW50aWwgd2UgZmluaXNoIG91ciBmaXJzdCBwcm9qZWN0XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects.js\n");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-countdown":
/*!**********************************!*\
  !*** external "react-countdown" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-countdown");;

/***/ }),

/***/ "react-intersection-observer":
/*!**********************************************!*\
  !*** external "react-intersection-observer" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-intersection-observer");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_extends_js-node_modules_babel_runtime_helpers_inte-f89ba9","vendors-node_modules_next_image_js-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/projects.js"); });
module.exports = __webpack_exports__;

})();