"use strict";

exports.__esModule = true;
exports.default = void 0;

require("./index-sfc.css");

var _default = {
  name: 'lym-transition',
  functional: true,
  render: function render (h, context) {
    return h('transition', context.data, context.children);
  }
};
exports.default = _default;