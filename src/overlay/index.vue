<template>
  <lym-transition name="lym-fade">
    <div class="lym-overlay" :style="style" v-show="isVisible" @click="maskClick"
      @touchmove='onTouchMove'>
      <div v-if="$slots.default" class="lym-overlay-content">
        <slot></slot>
      </div>
      <div v-else v-html="content" class="lym-overlay-content">
      </div>
    </div>
  </lym-transition>
</template>

<script>
import { preventDefault } from '../utils/dom/event'
import overlayMixins from '../mixins/overlay'

export default {
  name: 'lym-overlay',
  components: {
  },

  mixins: [overlayMixins],
  props: {
    customStyle: {
      type: Object,
      default: () => null
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    zIndex: { // 组件层级
      type: [Number, String],
      default: () => {
        return 1;
      }
    },
    content: {
      type: String,
      default: ''
    },
  },

  data () {
    return {

    }
  },
  computed: {
    style () {
      return {
        'z-index': this.zIndex,
        ...this.customStyle
      }
    },
    containerClass () {
      const { center } = this
      return {
        'lym-popup-center': center
      }
    }
  },
  methods: {
    onTouchMove (e) {
      this.lockScroll && preventDefault(e)
    }
  },
}
</script>

<style lang='less' scoped>
@import '../style/var.less';
.lym-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: @overlay-z-index;
  width: 100%;
  height: 100%;
  background-color: @overlay-background-color;
}
.lym-overlay-content {
  height: 100%;
  width: 100%;
  overflow-y: auto;
}
</style>
