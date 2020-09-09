export default {
  props: {
    /* 1 滚动的时候会派发scroll事件，会截流。
     2 滚动的时候实时派发scroll事件，不会截流。
     3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件     */
    // 是否正在加载数据
    loading: {
      type: Boolean,
      default: false
    },
    scrollbar: Boolean,
    probeType: {
      type: Number,
      default: 1
    },
    // 是否已加载完成，加载完成后不再触发load事件
    finished: {
      type: Boolean,
      default: false
    },
    //  点击列表是否派发click事件
    click: {
      type: Boolean,
      default: true
    },
    pullUpLoad: {
      type: [Boolean, Object],
      default: false
    },

    isRefresh: {
      type: [Boolean, Object],
      default: false
    },
    //  是否开启横向滚动
    scrollX: {
      type: Boolean,
      default: false
    },

    //  列表的数据
    data: {
      type: [Array, Object],
      default: null
    },
    /** * 是否派发滚动到底部的事件，用于上拉加载 */
    pullup: {
      type: Boolean,
      default: true
    },
    /** * 是否派发顶部下拉的事件，用于下拉刷新 */
    pulldown: {
      type: Boolean,
      default: true
    },
    /** * 是否派发列表滚动开始的事件 */
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /** * 是否派发列表滚动开始的事件 */
    bounce: {
      type: Boolean,
      default: true
    },
    /** * 当数据更新后，刷新scroll的延时。 */
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  watch: {
    loading (val) {
      if (!val) {
        this.scroll.finishPullUp()
        this.scroll.finishPullDown();
      }
    }
  }
}