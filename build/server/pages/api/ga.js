"use strict";
(() => {
var exports = {};
exports.id = 207;
exports.ids = [207];
exports.modules = {

/***/ 5854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "event": () => (/* binding */ event),
/* harmony export */   "pageview": () => (/* binding */ pageview)
/* harmony export */ });
// log the pageview with their URL
const pageview = (url)=>{
    window.gtag("config", "G-JDP4HBPC05", {
        page_path: url
    });
};
// log specific events happening.
const event = ({ action , params  })=>{
    window.gtag("event", action, params);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5854));
module.exports = __webpack_exports__;

})();