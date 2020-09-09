export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      isVisible: false
    };
  },
  methods: {
    show: function show() {
      this.isVisible = true;
    },
    hide: function hide() {
      this.isVisible = false;
    },
    maskClick: function maskClick(e) {
      this.$emit('maskClick', e);

      if (this.maskClosable) {
        this.hide();
      }
    }
  },
  watch: {
    visible: {
      immediate: true,
      handler: function handler(val) {
        if (val) {
          this.show();
        } else {
          this.hide();
        }
      }
    },
    isVisible: function isVisible(newVal) {
      this.$emit('update:visible', newVal);
    }
  }
};