"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _transition = _interopRequireDefault(require("../transition"));

var _overlay = _interopRequireDefault(require("../overlay"));

var _popup = _interopRequireDefault(require("../mixins/popup"));

require("./index-sfc.css");

var __vue_render__ = function __vue_render__ () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isPopupShow,
      expression: "isPopupShow"
    }],
    class: ["lym-popup", _vm.position]
  }, [_c('lym-overlay', {
    attrs: {
      "visible": _vm.isPopupBoxShow && _vm.hasMask,
      "z-index": "1001"
    },
    on: {
      "maskClick": _vm.$_maskClick
    }
  }), _vm._v(" "), _c('lym-transition', {
    attrs: {
      "name": _vm.transition
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isPopupBoxShow,
      expression: "isPopupBoxShow"
    }],
    staticClass: "lym-popup-box",
    class: [_vm.largeRadius ? 'large-radius' : '', _vm.transition]
  }, [_vm._t("default")], 2)])], 1);
};

var __vue_staticRenderFns__ = [];
var _default2 = {
  _scopeId: 'data-v-019e0a84',
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__,
  name: 'lym-popup',
  components: {
    'lym-transition': _transition.default,
    'lym-overlay': _overlay.default
  },
  mixins: [_popup.default],
  props: {
    largeRadius: {
      type: Boolean,
      default: false
    },
    preventScroll: {
      type: Boolean,
      default: false
    },
    hasMask: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'center'
    },
    transition: {
      type: String,
      default: function _default () {
        switch (this.position) {
          case 'bottom':
            return 'lym-slide-up';

          /* istanbul ignore next */

          case 'top':
            return 'lym-slide-down';

          /* istanbul ignore next */

          case 'left':
            return 'lym-slide-right';

          /* istanbul ignore next */

          case 'right':
            return 'lym-slide-left';

          default:
            return 'lym-fade';
          // fade/fade-bounce/fade-slide/fade-zoom
        }
      }
    },
    preventScrollExclude: {
      type: [String, Function],
      default: function _default () {
        return '';
      }
    }
  },
  data: function data () {
    return {
      isPopupShow: false,
      isPopupBoxShow: false,
      isAnimation: true
    };
  },
  computed: {},
  watch: {
    value: function value (val) {
      var _this = this;

      if (val) {
        if (this.isAnimation) {
          setTimeout(function () {
            _this.$_showPopup();
          }, 50);
        } else {
          this.$_showPopup();
        }
      } else {
        this.$_hidePopup();
      }
    }
  },
  created: function created () { },
  mounted: function mounted () {
    this.value && this.$_showPopup();
    this.changeBodyStyle();
  },
  methods: {
    $_maskClick: function $_maskClick () {
      if (this.maskClosable) {
        this.$_hidePopup();
        this.$emit('maskClick');
      }
    },
    $_showPopup: function $_showPopup () {
      this.isPopupShow = true;
      this.isAnimation = true;
      this.isPopupBoxShow = true; // this.changeBodyStyle()

      this.lockScroll && this.$_preventScroll(true);
    },
    $_hidePopup: function $_hidePopup () {
      var _this2 = this;

      this.isPopupBoxShow = false; // this.changeBodyStyle('remove')

      if (this.isAnimation) {
        setTimeout(function () {
          _this2.isPopupShow = false;
          _this2.lockScroll && _this2.$_preventScroll(false);

          _this2.$emit('input', false);
        }, 300);
      } else {
        this.isPopupShow = false;
        this.lockScroll && this.$_preventScroll(false);
        this.$emit('input', false);
      }
    },
    $_preventScroll: function $_preventScroll (isBind) {
      var handler = isBind ? 'addEventListener' : 'removeEventListener';
      var masker = this.$el.querySelector('.lym-popup-mask');
      var boxer = this.$el.querySelector('.lym-popup-box');
      masker && masker[handler]('touchmove', this.$_preventDefault, false);
      boxer && boxer[handler]('touchmove', this.$_preventDefault, false);
      this.$_preventScrollExclude(isBind);
    },
    $_preventScrollExclude: function $_preventScrollExclude (isBind, preventScrollExclude) {
      var handler = isBind ? 'addEventListener' : 'removeEventListener';
      preventScrollExclude = preventScrollExclude || this.preventScrollExclude;
      var excluder = preventScrollExclude && typeof preventScrollExclude === 'string' ? this.$el.querySelector(preventScrollExclude) : preventScrollExclude;
      excluder && excluder[handler]('touchmove', this.$_stopImmediatePropagation, false);
    },
    changeBodyStyle: function changeBodyStyle (type) {
      if (type === void 0) {
        type = 'add';
      }

      var body = document.getElementsByTagName("body")[0];

      if (type === 'add') {
        body.classList.add('lym-hiden');
      } else {
        body.classList.remove('lym-hiden');
      }
    }
  }
};
exports.default = _default2;