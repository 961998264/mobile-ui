<template>
  <div>
    <div class="tab-wrap" :style="{ background: background, 'border-bottom': borderStyle }">
      <ul class="tab-nav-ul" ref="tab" :style="{ transform: scrollLeft }">
        <li class="li-line" :style="customizeStyleUl" v-show="showline"></li>
        <li v-for="(item, index) in tabList" :key="index" @click="tab(index)"
          :class="[{ active: tabIndex === index }, { scrollable: thanFour },{info:item.info}]"
          :style="{ color: tabIndex === index ? activeColor : color }">
          {{ item.tabName }}
        </li>
      </ul>
    </div>
    <div class="line"></div>
    <div class="tarch-container" @touchstart="start($event)" @touchmove="move($event)"
      @touchend="end($event)">
      <div class="slot-container" :style="swiperAnimation">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "lym-tab",
  components: {},
  model: {
    prop: "tabIndex", // 当前点击的下标 从0开始
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
    }, // 是否滑动切换
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
    //
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
  data () {
    return {
      scrollLeft: 0,
      lockScroll: false, // 阻止导航滚动
      showline: false,
      tabList: [],
      trsitionName: "sideLeft",
      thanFive: false,
      localTabIndex: 0
    };
  },
  computed: {
    borderStyle () {
      return this.border ? `1px solid ${this.borderColor}` : "none";
    },
    swiperAnimation () {
      if (this.animated) {
        return {
          display: "flex",
          transform: `translate3d(${-1 * this.tabIndex * 100}%, 0, 0)`,
          transitionDuration: `${this.duration}s`
        };
      }
      return "";
    },
    clientWidth () {
      return document.body.clientWidth;
    },

    // 计算 底部条宽度
    getLineWidth () {
      return parseInt(this.getTabItemWidth * 0.6);
    },
    // 计算tabitem宽度
    getTabItemWidth () {
      if (this.thanFour) {
        return parseInt((this.clientWidth / 100) * 22);
      }
      return parseInt(this.clientWidth / (this.tabList.length || 1));

    },
    // 计算ul总长度
    getTabUlWidth () {
      return this.tabList.length * this.getTabItemWidth;
    },
    // 计算底部条样式
    customizeStyleUl () {
      return {
        "transition-duration": this.duration + "s",
        height: this.lineHeight,
        width:
          this.lineWidth === "auto" ? this.getLineWidth + "px" : this.lineWidth,
        background: this.lineColor,
        left: this.getLineTransform + "px"
      };
    },
    // 计算底部条位移距离
    getLineTransform () {
      return (this.tabIndex + 0.5) * this.getTabItemWidth;
    },
    // 计算tab数量是否超过4个
    thanFour () {
      return this.tabList.length > 4;
    }
  },
  watch: {
    tabIndex (val, old) {
      if (val && val !== old) {
        this.getScrollLeft(val);
      }
    },
    scrollLeft (val) {
      console.log("scrollLeft -> val", val);
    }
  },
  created () {
    this.localTabIndex = this.tabIndex;
    this.initData();
  },
  mounted () {
    // 解决 初始化页面底部条产生动画问题
    setTimeout(() => {
      this.showline = true;
    }, 0);
    // this.$refs.tab.scrollLeft = 380;
    // console.log("mounted -> this.$refs.tab", this.$refs.tab.scrollLeft);
    this.getTabList();
  },
  methods: {
    getAngle (angx, angy) {
      return (Math.atan2(angy, angx) * 180) / Math.PI;
    },
    getDirection (startx, starty, endx, endy) {
      const angx = endx - startx;
      const angy = endy - starty;
      let result = 0; // 默认标记没有滑动
      // 如果滑动距离太短
      if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
      }
      const angle = this.getAngle(angx, angy);
      if (angle >= -135 && angle <= -45) {
        result = 1; // 向上
      } else if (angle > 45 && angle < 135) {
        result = 2; // 向下
      } else if (
        (angle >= 135 && angle <= 180) ||
        (angle >= -180 && angle < -135)
      ) {
        result = 3; // 向左
      } else if (angle >= -45 && angle <= 45) {
        result = 4; // 向右
      }
      return result;
    },
    start (event) {
      const touchS = event.targetTouches[0]; // touches数组对象获得屏幕上所有的touch，取第一个touch
      this.startPos = {
        x: touchS.pageX,
        y: touchS.pageY,
        time: new Date()
      }; // 取第一个touch的坐标值
    },
    move (event) {
      // 当屏幕有多个touch或者页面被缩放过，就不执行move操作
      if (event.targetTouches.length > 1 || (event.scale && event.scale !== 1))
        return;
    },
    end (event) {
      const touchE = event.changedTouches[0];
      this.endPos = {
        x: touchE.pageX,
        y: touchE.pageY,
        timeStemp: new Date()
      };
      const direction = this.getDirection(
        this.startPos.x,
        this.startPos.y,
        this.endPos.x,
        this.endPos.y
      );
      if (!this.swipeable) return;
      this.swiperChangeTab(direction);
      console.log("end -> direction", direction);
    },
    swiperChangeTab (type) {
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
    getScrollLeft (index) {
      if (this.lockScroll) return;
      // 当前点击的TabItem总长度
      const currentTabItemSumWidth = this.getTabItemWidth * (index + 1);
      const harfClientWidth = this.clientWidth / 2;
      const harfTabItemWidth = this.getTabItemWidth / 2;
      // 计算出当前需要位移的长度
      let leftValue =
        currentTabItemSumWidth - harfClientWidth - harfTabItemWidth;
      // 最大位移长度
      const maxLeft = this.getTabUlWidth - this.clientWidth;
      if (leftValue > maxLeft) {
        leftValue = maxLeft;
      } else if (leftValue <= 0) {
        leftValue = 0;
      }
      this.scrollLeft = ` translate(${-leftValue}px ,0px) translateZ(0px)`;
    },
    async initData () { },
    getTabList () {
      if (!this.$slots || !this.$slots.default) {
        return;
      }
      if (this.$slots.default.length > 0) {
        // eslint-disable-next-line no-debugger
        const slots = this.$slots.default.filter(item => {
          return item.elm.nodeType !== 3;
        });
        slots.forEach((item, index) => {
          const { propsData } = item.componentOptions;

          this.tabList.push({
            url: propsData.url || "",
            tabName: propsData.title || "",
            to: propsData.to || "",
            replace: propsData.replace || "",
            value: propsData.value || "",
            info: item.info,
            index
          });
          console.log("getTabList -> this.tabList", this.tabList)

        });

      }
    },
    tab (index) {
      if (this.tabList[index]) {
        console.log("tab -> this.tabList[index", this.tabList[index])
        // eslint-disable-next-line no-debugger

        const { index: tabIndex, tabName, url, to, replace, value, info } = this.tabList[
          index
        ];
        console.log(this.tabList[index]);
        if (url) {
          const target = replace ? "_self" : "_blank";
          window.open("//" + url, target);
        }
        if (to) {
          this.$router.push(to);
        }
        this.$emit("click", { index: tabIndex, label: tabName, value, info });
        if (this.localTabIndex !== tabIndex) {
          this.$emit("change", tabIndex);
        }
      }
      this.localTabIndex = index;
    }
  }
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.absolute {
  position: absolute;
  top: 50%;
  transform: translateX(-50%);
}
.border {
  border: 1px solid red;
}
.tab-text-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.li-font {
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  line-height: 48px;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.tab-wrap {
  overflow-x: hidden;
  position: relative;
  height: 44px;
  width: 100%;
  &::-webkit-scrollbar {
    height: 0;
  }
  .tab-nav-ul {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;

    user-select: none;
    transition: all 0.3s ease-in-out;
    .info {
      &::after {
        content: '';
        position: absolute;
        right: 11px;
        top: 11px;
        width: 8px;
        min-width: 0;
        height: 8px;
        background-color: #ee0a24;
        border-radius: 100%;
      }
    }
    li:not(.li-line) {
      .li-font;
      cursor: pointer;
      list-style: none;
      height: 100%;
      flex: 1;
      // padding: 0 20px;
      box-sizing: border-box;
      position: relative;
    }
    li.li-line {
      border-radius: 3px;
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateX(-50%);
      z-index: 100;
      transition-property: left;
    }
  }

  .scrollable {
    justify-content: flex-start !important;
    flex: 0 0 22% !important;
  }

  .slot-container {
    .border;
    padding: 30px 0;
  }
  .line {
    width: 100%;
    height: 1px;
    background: #e8e8e8;
  }
}

.slide-left-enter {
  animation: left-slide-fade-in 0.6s ease;
}
.slide-left-leave {
  animation: left-slide-fade-out 0.6s ease forwards;
}
.slide-left-enter-active {
  animation: slide-dialog-fade-in 0.6s ease;
}
.slide-left-leave-active {
  animation: slide-dialog-fade-out 0.6s ease forwards;
}

@keyframes left-slide-fade-in {
  0% {
    left: -100%;
    opacity: 0;
  }
  100% {
    left: 0;
    opacity: 1;
  }
}

@keyframes left-slide-fade-out {
  0% {
    left: 0%;
    opacity: 1;
  }
  100% {
    left: -100%;
    opacity: 0;
  }
}
</style>
