export default {
  props: {
    isRefresh: Boolean,
    // 下拉过程提示文案
    pullingText: {
      type: String,
      default: '释放即可刷新...'
    },
    refreshLoading: {
      type: Boolean,
      default: false
    },
    refresh: {
      type: Function,
      default: () => {
        console.log('refresh')
      }
    },
  },
  data () {
    return {
    }
  },
  methods: {

  },
  watch: {

  },
  computed: {
    isPullDownRefresh () {
      if (this.isRefresh) {
        return {
          threshold: 30,
          stop: 50
        }
      }
      return false
    },
    refreshText () {
      if (this.refreshLoading) {
        return '加载中...'
      }
      return this.pullingText
    }
  }
}
