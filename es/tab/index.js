import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import './index-sfc.css';

var __vue_render__ = function __vue_render__ () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_c('div', {
    staticClass: "tab-wrap",
    style: {
      background: _vm.background,
      'border-bottom': _vm.borderStyle
    }
  }, [_c('ul', {
    ref: "tab",
    staticClass: "tab-nav-ul",
    style: {
      transform: _vm.scrollLeft
    }
  }, [_c('li', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showline,
      expression: "showline"
    }],
    staticClass: "li-line",
    style: _vm.customizeStyleUl
  }), _vm._v(" "), _vm._l(_vm.tabList, function (item, index) {
    return _c('li', {
      key: index,
      class: [{
        active: _vm.tabIndex === index
      }, {
        scrollable: _vm.thanFour
      }],
      style: {
        color: _vm.tabIndex === index ? _vm.activeColor : _vm.color
      },
      on: {
        "click": function click ($event) {
          return _vm.tab(index);
        }
      }
    }, [_vm._v("\n        " + _vm._s(item.tabName) + "\n      ")]);
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "line"
  }), _vm._v(" "), _c('div', {
    staticClass: "tarch-container",
    on: {
      "touchstart": function touchstart ($event) {
        return _vm.start($event);
      },
      "touchmove": function touchmove ($event) {
        return _vm.move($event);
      },
      "touchend": function touchend ($event) {
        return _vm.end($event);
      }
    }
  }, [_c('div', {
    staticClass: "slot-container",
    style: _vm.swiperAnimation
  }, [_vm._t("default")], 2)])]);
};

var __vue_staticRenderFns__ = [];
export default {
  _scopeId: 'data-v-9b044674',
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__,
  name: "lym-tab",
  components: {},
  model: {
    prop: "tabIndex",
    // 当前点击的下标 从0开始
    event: "change"
  },
  props: {
    // 边框颜色，仅在border为true时生效
    borderColor: {
      type: String,
      default: "#a5a5a5"
    },
    // 是否显示底部边框
    border: {
      type: Boolean,
      default: false
    },
    // 是否开启切换动画
    animated: {
      type: Boolean,
      default: false
    },
    // 是否滑动切换
    swipeable: {
      type: Boolean,
      default: false
    },
    // 底部条高度，默认单位px
    lineHeight: {
      type: String,
      default: "3px"
    },
    // 底部条宽度，默认单位px
    lineWidth: {
      type: String,
      default: "auto"
    },
    // 底部条背景颜色
    lineColor: {
      type: String,
      default: "#ee0a24"
    },
    // 动画时间，单位秒
    duration: {
      type: [Number, String],
      default: "0.3"
    },
    // 标签栏背景色
    background: {
      type: String,
      default: "white"
    },
    // 标签栏字体颜色
    color: {
      type: String,
      default: "#646566"
    },
    activeColor: {
      type: String,
      default: "orange"
    },
    // 当前点击的tab序号
    tabIndex: {
      type: Number,
      default: 0
    }
  },
  data: function data () {
    return {
      scrollLeft: 0,
      lockScroll: false,
      // 阻止导航滚动
      showline: false,
      tabList: [],
      trsitionName: "sideLeft",
      thanFive: false,
      localTabIndex: 0
    };
  },
  computed: {
    borderStyle: function borderStyle () {
      return this.border ? "1px solid " + this.borderColor : "none";
    },
    swiperAnimation: function swiperAnimation () {
      if (this.animated) {
        return {
          display: "flex",
          transform: "translate3d(" + -1 * this.tabIndex * 100 + "%, 0, 0)",
          transitionDuration: this.duration + "s"
        };
      }

      return "";
    },
    clientWidth: function clientWidth () {
      return document.body.clientWidth;
    },
    // 计算 底部条宽度
    getLineWidth: function getLineWidth () {
      return parseInt(this.getTabItemWidth * 0.6);
    },
    // 计算tabitem宽度
    getTabItemWidth: function getTabItemWidth () {
      if (this.thanFour) {
        return parseInt(this.clientWidth / 100 * 22);
      }

      return parseInt(this.clientWidth / (this.tabList.length || 1));
    },
    // 计算ul总长度
    getTabUlWidth: function getTabUlWidth () {
      return this.tabList.length * this.getTabItemWidth;
    },
    // 计算底部条样式
    customizeStyleUl: function customizeStyleUl () {
      return {
        "transition-duration": this.duration + "s",
        height: this.lineHeight,
        width: this.lineWidth === "auto" ? this.getLineWidth + "px" : this.lineWidth,
        background: this.lineColor,
        left: this.getLineTransform + "px"
      };
    },
    // 计算底部条位移距离
    getLineTransform: function getLineTransform () {
      return (this.tabIndex + 0.5) * this.getTabItemWidth;
    },
    // 计算tab数量是否超过4个
    thanFour: function thanFour () {
      return this.tabList.length > 4;
    }
  },
  watch: {
    tabIndex: function tabIndex (val, old) {
      if (val && val !== old) {
        this.getScrollLeft(val);
      }
    },
    scrollLeft: function scrollLeft (val) {
      console.log("scrollLeft -> val", val);
    }
  },
  created: function created () {
    this.localTabIndex = this.tabIndex;
    this.initData();
  },
  mounted: function mounted () {
    var _this = this;

    // 解决 初始化页面底部条产生动画问题
    setTimeout(function () {
      _this.showline = true;
    }, 0); // this.$refs.tab.scrollLeft = 380;
    // console.log("mounted -> this.$refs.tab", this.$refs.tab.scrollLeft);

    this.getTabList();
  },
  methods: {
    getAngle: function getAngle (angx, angy) {
      return Math.atan2(angy, angx) * 180 / Math.PI;
    },
    getDirection: function getDirection (startx, starty, endx, endy) {
      var angx = endx - startx;
      var angy = endy - starty;
      var result = 0; // 默认标记没有滑动
      // 如果滑动距离太短

      if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
      }

      var angle = this.getAngle(angx, angy);

      if (angle >= -135 && angle <= -45) {
        result = 1; // 向上
      } else if (angle > 45 && angle < 135) {
        result = 2; // 向下
      } else if (angle >= 135 && angle <= 180 || angle >= -180 && angle < -135) {
        result = 3; // 向左
      } else if (angle >= -45 && angle <= 45) {
        result = 4; // 向右
      }

      return result;
    },
    start: function start (event) {

      var touchS = event.targetTouches[0]; // touches数组对象获得屏幕上所有的touch，取第一个touch

      this.startPos = {
        x: touchS.pageX,
        y: touchS.pageY,
        time: new Date()
      }; // 取第一个touch的坐标值
    },
    move: function move (event) {
      // 当屏幕有多个touch或者页面被缩放过，就不执行move操作
      if (event.targetTouches.length > 1 || event.scale && event.scale !== 1) return;
    },
    end: function end (event) {
      var touchE = event.changedTouches[0];
      this.endPos = {
        x: touchE.pageX,
        y: touchE.pageY,
        timeStemp: new Date()
      };
      var direction = this.getDirection(this.startPos.x, this.startPos.y, this.endPos.x, this.endPos.y);
      if (!this.swipeable) return;
      this.swiperChangeTab(direction);
      console.log("end -> direction", direction);
    },
    swiperChangeTab: function swiperChangeTab (type) {
      // eslint-disable-next-line no-debugger
      switch (type) {
        // 向左滑动
        case 3:
          if (this.tabIndex === this.tabList.length - 1) return;
          this.tab(this.tabIndex + 1);
          break;
        // 向右滑动

        case 4:
          if (this.tabIndex === 0) return;
          this.tab(this.tabIndex - 1);
          break;
      }
    },
    getScrollLeft: function getScrollLeft (index) {
      if (this.lockScroll) return; // 当前点击的TabItem总长度

      var currentTabItemSumWidth = this.getTabItemWidth * (index + 1);
      var harfClientWidth = this.clientWidth / 2;
      var harfTabItemWidth = this.getTabItemWidth / 2; // 计算出当前需要位移的长度

      var leftValue = currentTabItemSumWidth - harfClientWidth - harfTabItemWidth; // 最大位移长度

      var maxLeft = this.getTabUlWidth - this.clientWidth;

      if (leftValue > maxLeft) {
        leftValue = maxLeft;
      } else if (leftValue <= 0) {
        leftValue = 0;
      }

      this.scrollLeft = " translate(" + -leftValue + "px ,0px) translateZ(0px)";
    },
    initData: function initData () {
      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee () {
        return _regeneratorRuntime.wrap(function _callee$ (_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getTabList: function getTabList () {
      var _this2 = this;

      if (!this.$slots || !this.$slots.default) {
        return;
      }

      if (this.$slots.default.length > 0) {
        // eslint-disable-next-line no-debugger
        var slots = this.$slots.default.filter(function (item) {
          return item.elm.nodeType !== 3;
        });
        slots.forEach(function (item, index) {
          console.log("getTabList -> item", item);
          var propsData = item.componentOptions.propsData;

          _this2.tabList.push({
            url: propsData.url || "",
            tabName: propsData.title || "",
            to: propsData.to || "",
            replace: propsData.replace || "",
            index: index
          });
        });
      }
    },
    tab: function tab (index) {
      if (this.tabList[index]) {
        // eslint-disable-next-line no-debugger
        var _this$tabList$index = this.tabList[index],
          tabIndex = _this$tabList$index.index,
          tabName = _this$tabList$index.tabName,
          url = _this$tabList$index.url,
          to = _this$tabList$index.to,
          replace = _this$tabList$index.replace;
        console.log(this.tabList[index]);

        if (url) {
          var target = replace ? "_self" : "_blank";
          window.open("//" + url, target);
        }

        if (to) {
          this.$router.push(to);
        }

        this.$emit("click", {
          value: tabIndex,
          label: tabName
        });

        if (this.localTabIndex !== tabIndex) {
          this.$emit("change", tabIndex);
        }
      }

      this.localTabIndex = index;
    }
  }
};