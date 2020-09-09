<template>
  <button class="demo-button" @click="handleClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'demo-button',

  props: {
    color: String,
    type: {
      type: String,
      default: 'primary',
    },
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
};
</script>

<style lang="less">
.demo-button {
  min-width: 120px;
  color: #fff;
  font-size: 16px;
  line-height: 36px;
  background-color: #f44;
  border: none;
  border-radius: 30px;
}
</style>
