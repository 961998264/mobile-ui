import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import './index-sfc.css';

var __vue_render__ = function __vue_render__ () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isShow,
      expression: "isShow"
    }],
    staticClass: "lym-tab-item"
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
export default {
  _scopeId: 'data-v-41fa08eb',
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__,
  name: "lym-tab-item",
  props: {
    title: String,
    url: String,
    to: String,
    replace: {
      type: Boolean,
      default: true
    } // tabIndex: [String, Number]

  },
  data: function data () {
    return {
      selfIndex: 0,
      transitionName: "slide-left"
    };
  },
  computed: {
    isShow: function isShow () {
      return this.$parent.animated || this.selfIndex === this.tabIndex;
    },
    tabIndex: function tabIndex () {
      return this.$parent.tabIndex;
    }
  },
  watch: {},
  created: function created () {
    this.initData();
  },
  mounted: function mounted () {
    console.log(this.$parent.tabIndex, "tabIndex");
  },
  methods: {
    initData: function initData () {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee () {
        return _regeneratorRuntime.wrap(function _callee$ (_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.selfIndex = (_this.$parent.$children.length || 1) - 1;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
};