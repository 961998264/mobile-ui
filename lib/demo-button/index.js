"use strict";

exports.__esModule = true;
exports.default = void 0;

require("./index-sfc.css");

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('button', {
    staticClass: "demo-button",
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
var _default = {
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__,
  name: 'demo-button',
  props: {
    color: String,
    type: {
      type: String,
      default: 'primary'
    }
  },
  methods: {
    handleClick: function handleClick(e) {
      this.$emit('click', e);
    }
  }
};
exports.default = _default;