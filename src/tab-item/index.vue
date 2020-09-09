<template>
  <div class="lym-tab-item" v-show="isShow">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "lym-tab-item",
  props: {
    title: String,
    url: String,
    to: String,
    value: String,

    info: {
      type: Boolean,
      default: false
    },
    replace: {
      type: Boolean,
      default: true
    }
    // tabIndex: [String, Number]
  },
  data () {
    return {
      selfIndex: 0,
      transitionName: "slide-left"
    };
  },
  computed: {
    isShow () {
      return this.$parent.animated || this.selfIndex === this.tabIndex;
    },
    tabIndex () {
      return this.$parent.tabIndex;
    }
  },
  watch: {},
  created () {
    this.initData();
  },
  mounted () {
    console.log(this.$parent.tabIndex, "tabIndex");
  },
  methods: {
    async initData () {
      this.selfIndex = (this.$parent.$children.length || 1) - 1;
    }
  }
};
</script>

<style lang="less" scoped>
.swiperAnimate {
  flex: 0 0 100%;
}
.lym-tab-item {
  .swiperAnimate;
  width: 100%;
  position: relative;
  display: flex;
  font-size: 14px;
}
</style>
