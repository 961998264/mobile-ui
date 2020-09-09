

<template>
  <div ref="wrapper" class="wrapper">
    <template v-if="!this.isRefresh">
      <slot></slot>
    </template>
    <template v-else>
      <div>
        <slot></slot>
      </div>
    </template>
  </div>
</template>
<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import scrollMixin from '../mixins/scroll'
// import Pullup from '@better-scroll/pull-up'
// import PullDown from '@better-scroll/pull-down'
// import Scrollbar from '@better-scroll/scroll-bar'

// 注册插件
// BScroll.use(Pullup)
// BScroll.use(PullDown)
// BScroll.use(Scrollbar)
export default {
  name: 'lym-scroll',
  mixins: [scrollMixin],
  data () {
    return {
      height: ''
    }
  },
  watch: {
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    data: {
      immediate: true,
      handler () {
        setTimeout(() => {
          this.refresh()
        }, this.refreshDelay)
      }
    },
  },
  created () {

  },
  mounted () {

    // 保证在DOM渲染完毕后初始化better-scroll
    setTimeout(() => {
      this._initScroll()
      console.log("mounted ->   this.getHeight()", this.getHeight())
    }, 20)
  },
  methods: {
    getHeight () {
      return this.$refs.wrapper.clientHeight
    },
    _initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      // better-scroll的初始化
      this.scroll = new BScroll(this.$refs.wrapper, {
        scrollbar: this.scrollbar,
        probeType: this.probeType,
        startX: 0,
        click: this.click,
        bounce: this.bounce,
        // 这个配置用于做下拉刷新功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启下拉刷新
        pullDownRefresh: true,
        // 这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
        pullUpLoad: true,
        // pullUpLoad: this.pullUpLoad,
        scrollX: this.scrollX
      })
      this.scroll.on('scroll', (pos) => {
        this.$emit('scroll', pos)
      })
      // 是否派发滚动到底部事件，用于上拉加载
      this.scroll.on('pullingUp', async () => {
        if (!this.loading) {
          this.$emit('pullUp')
          this.$emit('pull-up')
        }
      })
      // 是否派发顶部下拉事件，用于下拉刷新
      // if (this.pulldown && !this.loading) {
      //   this.scroll.on('touchEnd', (pos) => { // 下拉动作
      //     if (pos.y > this.offsetTop) {
      //       this.$emit('pulldown')
      //     }
      //   })
      // }
      this.scroll.on('pullingDown', () => {
        console.log('下拉刷新')
        this.$emit('refresh')
        // this.scroll.finishPullDown(); // 事情做完，需要调用此方法告诉 better-scroll 数据已加载，否则下拉事件只会执行一次
      });
      // 是否派发列表滚动开始的事件
      if (this.beforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScroll')
        })
      }
    },
    // 下拉刷新加载数据完毕通知better-scroll
    handlefinishPullDown () {
      this.scroll.finishPullDown();// 通知bettwer-scroll已经加载完毕
      this.scroll.refresh();// 重新计算 better-scroll，当 DOM 结构发生变化的时候务必要调用确保滚动的效果正常。

    },
    disable () {
      // 代理better-scroll的disable方法
      this.scroll && this.scroll.disable()
    },
    enable () {
      // 代理better-scroll的enable方法
      this.scroll && this.scroll.enable()
    },
    refresh () {
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh()
    },
    scrollTo () {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement () {
      // 代理better-scroll的scrollToElement方法
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}
</style>