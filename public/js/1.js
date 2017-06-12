webpackJsonp([1],{

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(46)(
  /* script */
  __webpack_require__(52),
  /* template */
  __webpack_require__(59),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/alex/Code/tuts/90dayplanner/resources/assets/js/pages/Metrics.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Metrics.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e09e9480", Component.options)
  } else {
    hotAPI.reload("data-v-e09e9480", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 46:
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

/***/ 52:
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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      metrics: [{ name: '' }]
    };
  },
  mounted: function mounted() {
    Foundation.Motion.animateIn(this.$el, 'slide-in-left fast');
  },


  methods: {
    next: function next() {
      var _this = this;

      Foundation.Motion.animateOut(this.$el, 'slide-out-right fast', function () {
        _this.$store.dispatch('goToNextStep');
      });
    },
    add: function add() {
      this.metrics.push({ name: '' });
    },
    remove: function remove(index) {
      if (this.metrics.length > 1) {
        this.metrics.splice(index, 1);
      }
    }
  }
});

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "callout secondary shadow"
  }, [_vm._m(0), _vm._v(" "), _c('form', [_vm._l((_vm.metrics), function(metric, index) {
    return _c('div', {
      staticClass: "input-group"
    }, [_vm._m(1, true), _vm._v(" "), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (metric.name),
        expression: "metric.name"
      }, {
        name: "focus",
        rawName: "v-focus"
      }],
      staticClass: "input-group-field",
      attrs: {
        "type": "text",
        "placeholder": "Metric..."
      },
      domProps: {
        "value": (metric.name)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          metric.name = $event.target.value
        }
      }
    }), _vm._v(" "), _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.metrics.length > 1),
        expression: "metrics.length > 1"
      }],
      staticClass: "input-group-button"
    }, [_c('button', {
      staticClass: "button alert",
      attrs: {
        "type": "button",
        "title": "Remove metric"
      },
      on: {
        "click": function($event) {
          _vm.remove(index)
        }
      }
    }, [_c('i', {
      staticClass: "fa fa-minus"
    })])])])
  }), _vm._v(" "), _c('button', {
    staticClass: "button expanded tiny warning",
    attrs: {
      "type": "button",
      "title": "Add another metric"
    },
    on: {
      "click": _vm.add
    }
  }, [_c('i', {
    staticClass: "fa fa-plus"
  })]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('button', {
    staticClass: "button expanded",
    attrs: {
      "type": "submit"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.next($event)
      }
    }
  }, [_vm._v("Next")])], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "callout-header primary"
  }, [_c('h4', [_vm._v("Metrics")]), _vm._v(" "), _c('p', [_vm._v("What criteria or metric(s) will be used to measure success?")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('span', {
    staticClass: "input-group-label"
  }, [_c('i', {
    staticClass: "fa fa-line-chart"
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-e09e9480", module.exports)
  }
}

/***/ })

});