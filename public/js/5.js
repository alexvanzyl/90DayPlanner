webpackJsonp([5],{

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(43)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(51),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/alex/Code/tuts/90dayplanner/resources/assets/js/pages/Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e434539c", Component.options)
  } else {
    hotAPI.reload("data-v-e434539c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 43:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row align-center"
  }, [_c('div', {
    staticClass: "small-12 columns"
  }, [_c('div', {
    staticClass: "callout text-center secondary mt-50 shadow"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "row align-center"
  }, [_c('div', {
    staticClass: "columns small-12 large-7"
  }, [_c('blockquote', {
    staticClass: "text-left"
  }, [_vm._v("\n            90 days is the perfect unit of time to make headway on your big-picture goals and to give them the focus they need.\n            "), _c('cite', [_c('a', {
    attrs: {
      "target": "_blank",
      "href": "https://www.fastcompany.com/3068537/work-smart/the-one-page-cheat-sheet-to-your-most-productive-90-days-ever"
    }
  }, [_vm._v("\n                Fast Company\n              ")])])])], 1), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _c('router-link', {
    staticClass: "button large warning",
    attrs: {
      "to": "/create"
    }
  }, [_vm._v("GET STARTED")])], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "callout-header primary"
  }, [_c('h1', [_vm._v("90 Day Action Planner")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "columns large-7"
  }, [_c('div', {
    staticClass: "callout text-left"
  }, [_c('ul', {
    staticClass: "steps circle-bullets"
  }, [_c('li', [_c('span', [_vm._v("1")]), _vm._v(" PICK THREE THINGS TO FOCUS ON")]), _vm._v(" "), _c('li', [_c('span', [_vm._v("2")]), _vm._v(" DECIDE HOW YOU’LL JUDGE YOUR PROGRESS")]), _vm._v(" "), _c('li', [_c('span', [_vm._v("3")]), _vm._v(" IDENTIFY WHICH STEPS TO TAKE (AND WHO’S GOING TO TAKE THEM)")])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e434539c", module.exports)
  }
}

/***/ })

});