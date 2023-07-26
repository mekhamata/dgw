"use strict";
exports.id = 12;
exports.ids = [12];
exports.modules = {

/***/ 7012:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(303);
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2765);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__]);
([_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

const { library  } = __webpack_require__(3195);





library.add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__.fas, _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_4__.far, _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_3__.fab);
const IconComponent = ({ ...props })=>{
    const [theType, setType] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("fab");
    const [theClass, setClass] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("bottomIcon");
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        setType(props.type);
        setClass(props.className);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        props
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {
        // icon={[props.type, props.name]}
        icon: [
            theType,
            props.name
        ],
        className: theClass
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;