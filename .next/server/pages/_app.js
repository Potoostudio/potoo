"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./comps/Navbar.js







function Navbar() {
  const {
    0: isOpened,
    1: setIsOpened
  } = (0,external_react_.useState)(false);
  const {
    0: isActive,
    1: setActive
  } = (0,external_react_.useState)(false);

  function toggle() {
    setIsOpened(wasOpened => !wasOpened);
    setActive(!isActive);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "nav",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "latest-project",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/projects/seedstock",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "latest-work-a",
            children: "latest work"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "logo-box",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: "potoo-logo-a d-block",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
              src: "/new-potoo-logo.svg",
              width: "100%",
              height: "140px",
              alt: "Potoo logo"
            })
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "hamburger-menu",
        "aria-label": "menu",
        onClick: toggle,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `menu-icon ${isActive ? 'activeNav' : ''}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: `menu ${isActive ? `menu-active` : ''}`,
            children: "Menu"
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mobile-header container",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "header-box",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `menu-list ${isActive ? 'activeNav' : ''}`,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
            className: "list header-list",
            children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "item",
              onClick: toggle,
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/about",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "mobile-navBar-item design-a",
                  children: "Studio"
                })
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: "item",
              onClick: toggle,
              children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/projects",
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "mobile-navBar-item code-a",
                  children: "Work"
                })
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "phone-menu-footer footer-container container",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row justify-content-lg-around justify-content-md-center justify-content-center pb-4 pt-4 pt-lg-4 pb-lg-3 mb-lg-5 mt-lg-2 mt-3 phone-email-row",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-lg-4 col-11 text-lg-left text-center pb-3 pb-md-0 pt-2 pt-md-0 order-lg-1",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "mailto:ideas@potoo.studio",
                  "aria-label": "email",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "say-hello-a pb-lg-2",
                    children: ["ideas@potoo.studio", /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "bottom-line"
                    })]
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-lg-4 col-11 text-center text-lg-right pt-md-0 pt-2 pt-md-4 pt-lg-0 pb-3 pb-md-3 pb-lg-0 order-lg-5",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "tel:3202604416",
                  "aria-label": "phone",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "say-hello-a pb-lg-2",
                    children: ["+1 320 260 4416", /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "bottom-line"
                    })]
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-lg-1 col-4 col-md-2 text-center text-md-right pt-4 pt-md-4  mt-md-1 pb-md-3 pt-lg-0 order-lg-2",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "https://www.instagram.com/potoostudio/",
                  "aria-label": "instagram",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "social-media-a",
                    children: "IG"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-lg-1 col-4 col-md-2 text-center text-md-right pt-4 pt-md-4  mt-md-1 pb-md-3 pt-lg-0 order-lg-3",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "https://www.behance.net/potoostudio",
                  "aria-label": "behance",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "social-media-a",
                    children: "BE"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-lg-1 col-4 col-md-2 text-center text-md-left pt-4 pt-md-4 mt-md-1 pb-md-3 pt-lg-0 order-lg-4",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "https://dribbble.com/potoostudio",
                  "aria-label": "dribbble",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "social-media-a",
                    children: "DB"
                  })
                })
              })]
            })
          })]
        })
      })
    })]
  });
}

/* harmony default export */ const comps_Navbar = (Navbar);
;// CONCATENATED MODULE: external "react-live-clock"
const external_react_live_clock_namespaceObject = require("react-live-clock");
var external_react_live_clock_default = /*#__PURE__*/__webpack_require__.n(external_react_live_clock_namespaceObject);
;// CONCATENATED MODULE: ./comps/Footer.js






const impressionsList = ["cheerful", "neat", "trusting", "bright", "luxury", "positive", "slick"];
class Footer extends external_react_.Component {
  constructor() {
    super();
    this.state = {
      textIdx: 0
    };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({
        textIdx: currentIdx + 1
      });
    }, 950);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let impressionsChange = impressionsList[this.state.textIdx % impressionsList.length];
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container-fluid footer-container",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row justify-content-center pb-md-3 mx-md-5 pt-md-4",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "col-lg-9 col-12 text-center",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
              className: "say-hello-h1 pb-md-5 pb-2",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "Creating"
              }), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: impressionsChange
              }), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "impressions"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "row justify-content-lg-around justify-content-md-center justify-content-center pb-4 pt-4 pt-lg-4 pb-lg-3 mt-lg-3 mt-3 phone-email-row",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-lg-4 col-12 text-lg-left text-center py-2 pb-md-0",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "mailto:ideas@potoo.studio",
                  "aria-label": "email",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "say-hello-a pb-lg-2",
                    children: ["ideas@potoo.studio", /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "bottom-line"
                    })]
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-lg-1 col-4 col-md-2 text-md-center text-md-right py-3 pt-md-4  mt-md-1 pb-md-3 pt-lg-0",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "https://www.instagram.com/potoostudio",
                  "aria-label": "instagram",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "social-media-a",
                    children: "IG"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-lg-1 col-4 col-md-2 text-md-center text-md-right py-3 pt-md-4  mt-md-1 pb-md-3 pt-lg-0",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "https://www.behance.net/potoostudio",
                  "aria-label": "behance",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "social-media-a",
                    children: "BE"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-lg-1 col-4 col-md-2 text-md-center text-md-left py-3 pt-md-4 mt-md-1 pb-md-3 pt-lg-0",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "https://dribbble.com/potoostudio",
                  "aria-label": "dribbble",
                  children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                    className: "social-media-a",
                    children: "DB"
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "col-lg-4 col-12 text-lg-right py-2 pb-md-4",
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "tel:3202604416",
                  "aria-label": "phone",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "say-hello-a pb-lg-2",
                    children: ["+1 320 260 4416", /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: "bottom-line"
                    })]
                  })
                })
              })]
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container-fluid pl-lg-0 co-container pt-lg-2 mt-lg-2 pb-lg-2 mt-5 mb-4 mb-md-0",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "row justify-content-md-center justify-content-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-3 col-10",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "co-made text-center mb-3",
              children: "Made in the high altitude of Colorado"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-4 col-10",
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "co-made adress text-center mb-3",
              children: "2000 S Colorado Blvd Tower 1, Suite 2000-511 Denver, CO 80222"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-lg-2 col-10 text-center",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("time", {
              className: "clock mb-3",
              children: ["It's ", /*#__PURE__*/jsx_runtime_.jsx((external_react_live_clock_default()), {
                className: "digital-clock",
                format: 'HH:mm',
                ticking: true,
                timezone: 'US/Mountain'
              }), " in the Rockies"]
            })
          })]
        })
      })]
    });
  }

}
;// CONCATENATED MODULE: ./comps/Layout.js






const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(comps_Navbar, {}), children, /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
};

/* harmony default export */ const comps_Layout = (Layout);
;// CONCATENATED MODULE: external "styled-components"
const external_styled_components_namespaceObject = require("styled-components");
;// CONCATENATED MODULE: ./ThemeConfig.js

const lightTheme = {
  body: '#FFF',
  text: '#363537',
  a: '#363537',
  toggleBorder: '#FFF',
  background: '#363537'
};
const darkTheme = {
  body: '#0b0b0b',
  text: '#fff',
  a: '#fff',
  toggleBorder: '#6B8096',
  background: '#999'
};
const GlobalStyles = external_styled_components_namespaceObject.createGlobalStyle`
  body {
    background: ${({
  theme
}) => theme.body};
    color: ${({
  theme
}) => theme.text};
    font-family: 'Inter';
    transition: all 0.5s linear;
  }
`;
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function MyApp({
  Component,
  pageProps,
  router
}) {
  const {
    0: isActive,
    1: setActive
  } = (0,external_react_.useState)("false");
  const {
    0: theme,
    1: setTheme
  } = (0,external_react_.useState)("dark");

  const toggleTheme = () => {
    theme == 'dark' ? setTheme('light') : setTheme('dark');
    setActive(!isActive);
  };

  const spring = {
    type: "spring",
    damping: 29,
    stiffness: 90,
    when: "afterChildren",
    delay: 0.5
  };
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
      exitBeforeEnter: true,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_styled_components_namespaceObject.ThemeProvider, {
        theme: theme == 'dark' ? darkTheme : lightTheme,
        children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalStyles, {}), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
          transition: spring,
          initial: {
            opacity: 0.3,
            y: "100vh"
          },
          animate: {
            opacity: 1,
            y: "0vh"
          },
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(comps_Layout, {
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              className: isActive ? "mode-btn dark" : "mode-btn light",
              onClick: toggleTheme,
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "mode-icon"
              })
            }), /*#__PURE__*/(0,external_react_.createElement)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
              key: router.pathname
            }))]
          })
        }, router.pathname)]
      })
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 762:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 654:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,675], () => (__webpack_exec__(2198)));
module.exports = __webpack_exports__;

})();