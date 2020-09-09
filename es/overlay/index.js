import _extends from "@babel/runtime/helpers/esm/extends";
import { preventDefault } from '../utils/dom/event';
import overlayMixins from '../mixins/overlay';
import './index-sfc.css';

var __vue_render__ = function __vue_render__ () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('lym-transition', {
    attrs: {
      "name": "lym-fade"
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isVisible,
      expression: "isVisible"
    }],
    staticClass: "lym-overlay",
    style: _vm.style,
    on: {
      "click": _vm.maskClick,
      "touchmove": _vm.onTouchMove
    }
  }, [_vm.$slots.default ? _c('div', {
    staticClass: "lym-overlay-content"
  }, [_vm._t("default")], 2) : _c('div', {
    staticClass: "lym-overlay-content",
    domProps: {
      "innerHTML": _vm._s(_vm.content)
    }
  })])]);
};

var __vue_staticRenderFns__ = [];
export default {
  _scopeId: 'data-v-07bcb30d',
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__,
  name: 'lym-overlay',
  components: {},
  mixins: [overlayMixins],
  props: {
    customStyle: {
      type: Object,
      default: function _default () {
        return null;
      }
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    zIndex: {
      // 组件层级
      type: [Number, String],
      default: function _default () {
        return 1;
      }
    },
    content: {
      type: String,
      default: ''
    }
  },
  data: function data () {
    return {};
  },
  computed: {
    style: function style () {
      return _extends({
        'z-index': this.zIndex
      }, this.customStyle);
    },
    containerClass: function containerClass () {
      var center = this.center;
      return {
        'lym-popup-center': center
      };
    }
  },
  methods: {
    onTouchMove: function onTouchMove (e) {
      this.lockScroll && preventDefault(e);
    }
  }
};