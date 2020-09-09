<template>
  <div :class='["lym-popup",position]' v-show='isPopupShow'>
    <lym-overlay @maskClick='$_maskClick' :visible='isPopupBoxShow&&hasMask' z-index='1001'>
    </lym-overlay>
    <lym-transition :name='transition' @before-enter="$_onPopupTransitionStart"
      @before-leave="$_onPopupTransitionStart" @after-enter="$_onPopupTransitionEnd"
      @after-leave="$_onPopupTransitionEnd">
      <div v-show="isPopupBoxShow" class="lym-popup-box"
        :class="[largeRadius?'large-radius':'',transition]">
        <slot></slot>
      </div>
    </lym-transition>
  </div>
</template>

<script>
import Transition from '../transition'
import Overlay from '../overlay'
import popupMixin from '../mixins/popup'

export default {
  name: 'lym-popup',
  components: {
    'lym-transition': Transition,
    'lym-overlay': Overlay
  },
  mixins: [popupMixin],
  props: {
    largeRadius: {
      type: Boolean,
      default: false,
    },
    preventScroll: {
      type: Boolean,
      default: false,
    },
    hasMask: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'center',
    },
    transition: {
      type: String,
      default () {
        switch (this.position) {
          case 'bottom':
            return 'lym-slide-up'
          /* istanbul ignore next */
          case 'top':
            return 'lym-slide-down'
          /* istanbul ignore next */
          case 'left':
            return 'lym-slide-right'
          /* istanbul ignore next */
          case 'right':
            return 'lym-slide-left'
          default:
            return 'lym-fade' // fade/fade-bounce/fade-slide/fade-zoom
        }
      },
    },

    preventScrollExclude: {
      type: [String, Function],
      default () {
        return ''
      },
    },

  },
  data () {
    return {
      isPopupShow: false,
      isPopupBoxShow: false,
      isAnimation: true,
    }
  },
  computed: {

  },
  watch: {
    value (val) {
      if (val) {
        if (this.isAnimation) {
          setTimeout(() => {
            this.$_showPopup()
          }, 50)
        } else {
          this.$_showPopup()
        }
      } else {
        this.$_hidePopup()
      }
    },

  },
  created () {
  },
  mounted () {
    this.value && this.$_showPopup()
  },
  methods: {
    $_maskClick () {
      if (this.maskClosable) {
        this.$_hidePopup()
        this.$emit('maskClick')
      }
    },
    $_showPopup () {
      this.isPopupShow = true
      this.isAnimation = true
      this.isPopupBoxShow = true
      this.changeBodyStyle()
      this.lockScroll && this.$_preventScroll(true)
    },
    $_hidePopup () {
      this.isPopupBoxShow = false
      this.changeBodyStyle('remove')
      if (this.isAnimation) {
        setTimeout(() => {
          this.isPopupShow = false
          this.lockScroll && this.$_preventScroll(false)
          this.$emit('input', false)
        }, 300)
      } else {
        this.isPopupShow = false
        this.lockScroll && this.$_preventScroll(false)
        this.$emit('input', false)
      }

    },
    $_preventScroll (isBind) {
      const handler = isBind ? 'addEventListener' : 'removeEventListener'
      const boxer = this.$el.querySelector('.lym-popup-box')
      boxer && boxer[handler]('touchmove', this.$_preventDefault, false)
    },
    changeBodyStyle (type = 'add') {
      const body = document.getElementsByTagName("body")[0]
      if (type === 'add') {
        body.style.overflow = 'hidden'
      } else {
        body.style.overflow = 'auto'
        // body.classList.remove('lym-hiden')
      }
    },
    $_onPopupTransitionEnd () {
      if (!this.isPopupBoxShow) {
        this.isPopupShow = false
        this.$emit('hide')
      } else {
        this.$emit('show')
      }
    },
    $_preventDefault (event) {
      event.preventDefault()
    },
    $_onPopupTransitionStart () {
      if (!this.isPopupBoxShow) {
        this.$emit('beforeHide')
        this.$emit('before-hide')
      } else {
        this.$emit('beforeShow')
        this.$emit('before-show')
      }
    },
  },
}
</script>

<style lang='less' scoped>
.lym-hiden {
  overflow: hidden;
}
.lym-popup {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 1000;
  &.center {
    align-items: center;
    justify-content: center;
  }
  &.left {
    justify-content: flex-start;
    .lym-popup-box {
      height: 100%;
    }
  }
  &.bottom {
    flex-direction: column;
    justify-content: flex-end;
    .lym-popup-box {
      width: 100%;
    }
  }
  &.right {
    justify-content: flex-end;
    .lym-popup-box {
      height: 100%;
    }
  }
  &.top {
    flex-direction: column;
    justify-content: flex-start;
    .lym-popup-box {
      width: 100%;
    }
  }
  .lym-popup-box {
    position: relative;
    pointer-events: auto;
    z-index: 2;
    max-height: 100%;
    overflow: auto;
    z-index: 1002;
  }
  .large-radius {
    border-radius: 18px 18px 0 0;
  }
}
</style>
