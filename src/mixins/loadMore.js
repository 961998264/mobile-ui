export default {
  props: {

    // 是否初始化的时候就加载
    mountedLoad: {
      type: Boolean,
      default: false,
    },
    finished: Boolean,
    // 	滚动条与底部距离小于 offset 时触发load事件
    offset: {
      type: Number,
      default: 20
    },

    loadingText: {
      type: String,
      default: '加载中...'
    },
    finishedText: {
      type: String,
      default: '没有更多了'
    },
    loading: {
      type: Boolean,
      default: false
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    load: {
      type: Function,
      default () {
        return () => {
          console.log('触发load')
        }
      }
    },
  },
  watch: {

  },
  mounted () {
    if (this.mountedLoad) {
      this.pullUp()
    }
  },
  methods: {
    error (val) {
      this.isError = true
      this.errorText = val
    },
    clearError () {
      this.isError = false
    },
    pullUp () {
      if (!this.finished && !this.loading && this.pullUpLoad) {
        this.load()
      }
    },

  },

  computed: {
    isPullUpLoad () {
      if (this.pullUpLoad) {
        return {
          threshold: this.offset
        }
      }
      return false
    },
    status () {
      if (this.isError) {
        return 'error'
      } if (this.finished) {
        return 'finished'
      } if (this.loading) {
        return 'loading'
      }
      return 'normal'
    }
  },
}