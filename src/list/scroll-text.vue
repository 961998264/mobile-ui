<template>
  <div class='scroll-text'>
    <span v-show="status === 'normal'">上拉加载更多</span>
    <div v-show="status !== 'normal'" @click="load" class='loading-text'>
      {{statusText}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'lym-scroll-text',
  components: {
  },
  props: {
    status: {
      type: String,
      default: 'normal'
    },
    loadingText: {
      type: String,
      default: '加载中...'
    },
    finishedText: {
      type: String,
      default: '没有更多了'
    },
    errorText: {
      type: String,
      default: '请求失败'
    },
  },
  data () {
    return {
      // error: false,
    }
  },

  computed: {
    statusText () {
      switch (this.status) {
        case 'loading':
          return this.loadingText
        case 'error':
          return (this.errorText || '请求失败') + ', 点击重新加载'
        case 'finished':
          return this.finishedText
        default:
          return this.loadingText
      }
    }
  },
  watch: {

  },
  created () {
  },
  mounted () { },
  methods: {
    load () {
      if (this.status === 'error') {
        this.$parent.$parent.clearError()
        this.$parent.$parent.load()
        console.log("load -> this.$parent.$parent.load", this.$parent.$parent.load)
      }
    }
  },
}
</script>

<style lang='less' scoped>
.scroll-text {
  color: #969799;
  font-size: 14px;
  line-height: 50px;
  text-align: center;
  height: 50px;
  .loading-text {
    padding: 0 32px;
    overflow: hidden;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
