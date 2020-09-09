

<template>
  <div class="scroll-container" ref="wrapper">
    <lym-scroll @pullUp="pullUp" :loading='isLoading' :click='true' @scroll='scroll'
      :finished='finished' :pull-up-load='isPullUpLoad' :is-refresh='isPullDownRefresh' ref="scroll"
      :data="data" @refresh='refresh'>
      <div class="scroll-container-l1" :style="{'min-height':height,'top':isRefresh?'-50px':'0'}">
        <div class="pull-refresh__head" v-if="isRefresh">
          {{refreshText}}
        </div>
        <slot>
        </slot>
        <lym-scroll-text v-if='pullUpLoad' :error-text='errorText' :status='status'
          :loading-text='loadingText' :finished-text='finishedText'>
        </lym-scroll-text>
      </div>
    </lym-scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import scrollText from './scroll-text'
import Refresh from '../mixins/refresh'
import LoadMore from '../mixins/loadMore'

export default {
  name: 'lym-list',
  components: {
    [scrollText.name]: scrollText
  },
  mixins: [LoadMore, Refresh],
  props: {
    data: {
      type: [Array, Object]
    },
    scroll: {
      type: Function,
      default: () => { }
    },

  },
  data () {
    return {
      isError: false,
      errorText: '',
      height: '',
    }
  },
  computed: {
    isLoading () {
      return this.loading || this.refreshLoading
    }
  },
  created () { },
  mounted () {
    this.height = this.$refs.scroll.getHeight() + 1 + 'px'
  },
  watcj: {

  },
  methods: {

  }

}
</script>

<style lang="less" scoped>
.scroll-container {
  overflow: hidden;
  height: calc(100%);
  width: 100%;
}
.loading-container {
  height: 50px;
}
.scroll-container-l1 {
  position: relative;
}
.pull-refresh__head {
  height: 50px;
  width: 100%;
  line-height: 50px;
  text-align: center;
  overflow: hidden;
  color: #969799;
  font-size: 14px;
}
</style>