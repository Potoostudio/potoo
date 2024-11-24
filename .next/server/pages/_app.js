(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./styles/globals.scss
var globals = __webpack_require__(3716);
// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__(9090);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./comps/Navbar.js




function Navbar() {
    const [isOpened, setIsOpened] = (0,react_.useState)(false);
    const [isActive, setActive] = (0,react_.useState)(false);
    function toggle() {
        setIsOpened((wasOpened)=>!wasOpened);
        setActive(!isActive);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "nav px-md-5 py-md-4 py-2 mr-md-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "item d-lg-only",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "potoo-logo-a",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/Potoo Word Logo.svg",
                                width: "80",
                                height: "16",
                                alt: "Potoo logo"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "item center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "potoo-logo-a d-flex d-lg-none",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/Potoo Word Logo.svg",
                                width: "200",
                                height: "53",
                                alt: "Potoo logo",
                                className: "text-center bird-logo p-3 p-m-0",
                                title: "Potoo Bird. A quiue bird lives in Brazil"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "item pr-md-4 d-lg-only",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/work",
                            className: "nav-a",
                            children: "Work"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "item d-lg-only pr-md-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/studio",
                            className: "nav-a",
                            children: "Studio"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "item d-lg-only pr-md-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/journal",
                            className: "nav-a",
                            children: "Journal"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "item d-lg-only pr-md-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/art",
                            className: "nav-a",
                            children: "Art"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `mobile-menu ${isActive ? `menu-active` : ""}`,
                "aria-label": "menu",
                onClick: toggle,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `menu-icon ${isActive ? "activeNav" : ""}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: `menu ${isActive ? "activeNav" : ""}`
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mobile-header container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header-box",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: `menu-list ${isActive ? "activeNav" : ""}`,
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: "list header-list pt-5 mt-4 pt-md-5 mt-md-0",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "item",
                                        onClick: toggle,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/work",
                                            className: "mobile-navBar-item code-a luxury-title",
                                            children: "Work"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "item",
                                        onClick: toggle,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/studio",
                                            className: "mobile-navBar-item design-a luxury-title",
                                            children: "Studio"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "item",
                                        onClick: toggle,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/journal",
                                            className: "mobile-navBar-item code-a luxury-title",
                                            children: "Journal"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        className: "item",
                                        onClick: toggle,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/art",
                                            className: "mobile-navBar-item code-a luxury-title",
                                            children: "Art"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "phone-menu-footer footer-container container-fluid",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row justify-content-lg-around justify-content-md-center justify-content-center pb-3 pt-0 pt-lg-4 pb-lg-3 mb-lg-0 mt-lg-2 mt-0 phone-email-row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-md-2 col-6 text-left pt-4 pt-md-0",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "contact-list",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "footer-small-title",
                                                        children: "contact info"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "item",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                            href: "mailto:ideas@potoo.studio",
                                                            "aria-label": "email",
                                                            className: "say-hello-a pb-lg-2",
                                                            children: [
                                                                "ideas@potoo.studio",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "bottom-line"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "item pt-md-2 pt-2",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                            href: "tel:3202604416",
                                                            "aria-label": "phone",
                                                            className: "say-hello-a pb-lg-2",
                                                            children: [
                                                                "+1 320.260.4416",
                                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                    className: "bottom-line"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-md-2 col-4 pt-4 pt-md-0",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "media-list text-right text-md-left",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "footer-small-title",
                                                        children: "social media"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "item",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "https://www.instagram.com/potoostudio",
                                                            "aria-label": "instagram",
                                                            className: "social-media-a",
                                                            children: "Instagram"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "item pt-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "https://www.behance.net/potoostudio",
                                                            "aria-label": "behance",
                                                            className: "social-media-a",
                                                            children: "Behance"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "item pt-1",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "https://dribbble.com/potoostudio",
                                                            "aria-label": "dribbble",
                                                            className: "social-media-a",
                                                            children: "Dribbble"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const comps_Navbar = (Navbar);

;// CONCATENATED MODULE: external "react-live-clock"
const external_react_live_clock_namespaceObject = require("react-live-clock");
var external_react_live_clock_default = /*#__PURE__*/__webpack_require__.n(external_react_live_clock_namespaceObject);
;// CONCATENATED MODULE: ./comps/Footer.js





const impressionsList = [
    "future",
    "product",
    "book",
    "shop",
    "brand",
    "business",
    "idea",
    "studio"
];
class Footer extends react_.Component {
    constructor(){
        super();
        this.state = {
            textIdx: 0
        };
    }
    componentDidMount() {
        this.timeout = setInterval(()=>{
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
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container-fluid footer-container pt-5 pb-md-0 pb-4",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row justify-content-between pb-md-3 mx-md-5 pt-md-4 border-bottom",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12 col-md-2 text-left pr-md-5 pb-md-0 pb-4",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "image-container",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: "/Potoo Word Logo.svg",
                                        layout: "fill",
                                        className: "image",
                                        alt: "Potoo Studio Logo Word"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "col-12 col-md-4 text-left pb-md-0 pt-md-0 pb-0 pt-3 mobile-display-none font-small",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        className: "",
                                        children: [
                                            "We are a design studio focused on creating verbal and visual identity of your brilliant ",
                                            impressionsChange
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "say-list"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row justify-content-between pb-0 mx-md-5 pt-md-4 mt-5",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12 col-md-5 text-left mt-0",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row justify-content-start contact-list",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "col-6 col-md-5",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((external_react_live_clock_default()), {
                                                    className: "digital-clock",
                                                    format: "h:mm A",
                                                    ticking: true,
                                                    timezone: "US/Mountain"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "container p-0 mt-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "https://potoo.studio/branding-agency-in-denver",
                                                        "aria-label": "dribbble",
                                                        className: "say-hello-a",
                                                        children: "Denver"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "container p-0 mt-2",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                        href: "mailto:ideas@potoo.studio",
                                                        "aria-label": "email",
                                                        className: "say-hello-a font-small",
                                                        children: [
                                                            "ideas@potoo.studio",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "bottom-line"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "container p-0 mt-0",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                        href: "tel:3202604416",
                                                        "aria-label": "phone",
                                                        className: "say-hello-a font-small",
                                                        children: [
                                                            "+1 (320) 260.4416",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "bottom-line"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "col-6 col-md-5 text-left mt-0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((external_react_live_clock_default()), {
                                                    className: "digital-clock",
                                                    format: "h:mm A",
                                                    ticking: true,
                                                    timezone: "Asia/Baghdad"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "container p-0 mt-0",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "https://potoo.studio/branding-agency-in-baghdad",
                                                        "aria-label": "dribbble",
                                                        className: "say-hello-a",
                                                        children: "Baghdad"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "container p-0 mt-2",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                        href: "mailto:ideas@potoo.studio",
                                                        "aria-label": "email",
                                                        className: "say-hello-a font-small",
                                                        children: [
                                                            "ideas@potoo.studio",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "bottom-line"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "container p-0 mt-0",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                        href: "tel:009647809000956",
                                                        "aria-label": "phone",
                                                        className: "say-hello-a font-small",
                                                        children: [
                                                            "+964 7809 000956",
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "bottom-line"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-12 col-md-4 pt-5 pt-md-0",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "row justify-content-between",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-md-4 col-6 pt-0 mt-md-0 mt-0",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "media-list text-left",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "item footer-small-title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "https://www.instagram.com/potoostudio",
                                                            "aria-label": "instagram",
                                                            className: "social-media-a say-hello-a",
                                                            children: "Instagram"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "item pt-1 footer-small-title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "https://www.behance.net/potoostudio",
                                                            "aria-label": "behance",
                                                            className: "social-media-a say-hello-a",
                                                            children: "Behance"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "item pt-1 footer-small-title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "https://dribbble.com/potoostudio",
                                                            "aria-label": "dribbble",
                                                            className: "social-media-a say-hello-a",
                                                            children: "Dribbble"
                                                        })
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-md-4 col-6 pt-0 mt-md-0 mt-0",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "media-list text-left",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "item footer-small-title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "https://potoo.studio/work",
                                                            "aria-label": "instagram",
                                                            className: "social-media-a say-hello-a",
                                                            children: "Work"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "item pt-1 footer-small-title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "https://potoo.studio/studio",
                                                            "aria-label": "behance",
                                                            className: "social-media-a say-hello-a",
                                                            children: "Studio"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "item pt-1 footer-small-title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "https://potoo.studio/journal",
                                                            "aria-label": "behance",
                                                            className: "social-media-a say-hello-a",
                                                            children: "Journal"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "item pt-1 footer-small-title",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "https://potoo.studio/art",
                                                            "aria-label": "behance",
                                                            className: "social-media-a say-hello-a",
                                                            children: "Art"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row justify-content-center pb-md-4 mx-md-5 pt-md-4 pt-4",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-2 col-4 text-left pt-2 pt-md-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-left footer-bottom-info mb-3",
                                children: "Site Made In House"
                            })
                        })
                    })
                ]
            })
        });
    }
}

;// CONCATENATED MODULE: ./comps/Layout.js



const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(comps_Navbar, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
        ]
    });
};
/* harmony default export */ const comps_Layout = (Layout);

;// CONCATENATED MODULE: external "styled-components"
const external_styled_components_namespaceObject = require("styled-components");
;// CONCATENATED MODULE: ./ThemeConfig.js

const lightTheme = {
    body: "#FFF",
    text: "#363537",
    a: "#363537",
    toggleBorder: "#FFF",
    background: "#363537"
};
const darkTheme = {
    body: "#020202",
    text: "#fff",
    a: "#fff",
    toggleBorder: "#6B8096",
    background: "#101415"
};
const GlobalStyles = external_styled_components_namespaceObject.createGlobalStyle`
  body {
    background: ${({ theme  })=>theme.body};
    color: ${({ theme  })=>theme.text};
    font-family: 'Inter';
  }
`;

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
;// CONCATENATED MODULE: external "react-scroll-parallax"
const external_react_scroll_parallax_namespaceObject = require("react-scroll-parallax");
;// CONCATENATED MODULE: ./pages/_app.js










function MyApp({ Component , pageProps , router  }) {
    const [isActive, setActive] = (0,react_.useState)("false");
    const [theme, setTheme] = (0,react_.useState)("dark");
    const toggleTheme = ()=>{
        theme == "dark" ? setTheme("light") : setTheme("dark");
        setActive(!isActive);
    };
    // const spring = {
    //   type: "spring",
    //   damping: 29,
    //   stiffness: 90,
    //   when: "afterChildren",
    //   delay: 0.5
    // };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
            exitBeforeEnter: true,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_styled_components_namespaceObject.ThemeProvider, {
                theme: theme == "dark" ? darkTheme : lightTheme,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(GlobalStyles, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_framer_motion_.motion.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: 2
                        },
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(comps_Layout, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: isActive ? "mode-btn dark" : "mode-btn light",
                                    onClick: toggleTheme,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "mode-icon"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(external_react_scroll_parallax_namespaceObject.ParallaxProvider, {
                                    children: /*#__PURE__*/ (0,react_.createElement)(Component, {
                                        ...pageProps,
                                        key: router.pathname
                                    })
                                })
                            ]
                        })
                    }, router.pathname)
                ]
            })
        })
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 9090:
/***/ (() => {



/***/ }),

/***/ 3716:
/***/ (() => {



/***/ }),

/***/ 9034:
/***/ ((module) => {

"use strict";
module.exports = require("framer-motion");

/***/ }),

/***/ 8038:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 6786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [965,675,664], () => (__webpack_exec__(327)));
module.exports = __webpack_exports__;

})();