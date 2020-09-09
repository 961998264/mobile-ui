"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.install = install;
exports.default = exports.version = void 0;

var _demoButton = _interopRequireDefault(require("./demo-button"));

exports.DemoButton = _demoButton.default;

var _loading = _interopRequireDefault(require("./loading"));

exports.Loading = _loading.default;

var _overlay = _interopRequireDefault(require("./overlay"));

exports.Overlay = _overlay.default;

var _popup = _interopRequireDefault(require("./popup"));

exports.Popup = _popup.default;

var _tab = _interopRequireDefault(require("./tab"));

exports.Tab = _tab.default;

var _tabItem = _interopRequireDefault(require("./tab-item"));

exports.TabItem = _tabItem.default;

var _transition = _interopRequireDefault(require("./transition"));

exports.Transition = _transition.default;
var version = '1.0.0';
exports.version = version;

function install(Vue) {
  var components = [_demoButton.default, _loading.default, _overlay.default, _popup.default, _tab.default, _tabItem.default, _transition.default];
  components.forEach(function (item) {
    if (item.install) {
      Vue.use(item);
    } else if (item.name) {
      Vue.component(item.name, item);
    }
  });
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var _default = {
  install: install,
  version: version
};
exports.default = _default;