"use strict";

exports.__esModule = true;
exports.default = void 0;

require("./index-sfc.css");

var COMPONENT_NAME = 'lymLoading';

var __vue_render__ = function __vue_render__ () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "lym-loading"
  }, [_c('span', {
    staticClass: "lym-loading-spinners",
    style: _vm.style
  }, _vm._l(_vm.balde, function (item, index) {
    return _c('i', {
      key: index,
      staticClass: "lym-loading-spinner",
      class: 'lym-loading-spinner' + (index + 1)
    });
  }), 0)]);
};

var __vue_staticRenderFns__ = [];
var _default = {
  _scopeId: 'data-v-17ae37cd',
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__,
  name: COMPONENT_NAME,
  props: {
    size: {
      type: Number
    }
  },
  data: function data () {
    return {
      balde: 12
    };
  },
  computed: {
    style: function style () {
      if (!this.size) {
        return;
      }

      var value = this.size + "px"; // console.log(this.value)

      return {
        width: value,
        height: value
      };
    }
  }
};
exports.default = _default;