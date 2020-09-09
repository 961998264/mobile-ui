export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    visible: {
      type: Boolean,
      default: false
    },
  },
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    show () {
      this.isVisible = true
    },
    hide () {
      this.isVisible = false
    },
    maskClick (e) {
      this.$emit('maskClick', e)
      if (this.maskClosable) {
        this.hide()
      }
    }
  },
  watch: {
    visible: {
      immediate: true,
      handler (val) {
        if (val) {
          this.show()
        } else {
          this.hide()
        }
      }
    },
    isVisible (newVal) {
      this.$emit('update:visible', newVal)
    }
  }
}
