<template>
  <div class="lym-loading">
    <span class="lym-loading-spinners" :style="style">
      <i class="lym-loading-spinner" :class="'lym-loading-spinner'+(index+1)" :key="index"
        v-for="(item,index) in balde"></i>
    </span>
  </div>
</template>
<script type="text/ecmascript-6">
const COMPONENT_NAME = 'lymLoading'
export default {
  name: COMPONENT_NAME,
  props: {
    size: {
      type: Number
    }
  },
  data () {
    return {
      balde: 12
    }
  },
  computed: {
    style () {
      if (!this.size) {
        return
      }
      const value = `${this.size}px`
      // console.log(this.value)
      return {
        width: value,
        height: value
      }
    }
  }
}
</script>
<style lang="less" scoped>
.lym-loading {
  font-size: 24px;
}

.lym-loading-spinners {
  position: relative;
  display: block;
  width: 1em;
  height: 1em;
}

.lym-loading-spinner {
  position: absolute;
  left: 44.5%;
  top: 37%;
  width: 2px; // for rem
  height: 25%;
  border-radius: 50% / 20%;
  opacity: 0.25;
  background-color: currentColor;
  animation: spinner-fade 1s linear infinite;
}
.lym-loading-spinners(12);
.lym-loading-spinners(@n, @i: 1) when (@i =< @n) {
  .lym-loading-spinner@{i} {
    animation-delay: ((@i - 1) / 12) * 1s;
    transform: rotate(30deg * (@i - 7)) translateY(-150%);
  }
  .lym-loading-spinners(@n, (@i + 1));
}

@keyframes spinner-fade {
  0% {
    opacity: 0.85;
  }

  50% {
    opacity: 0.25;
  }

  100% {
    opacity: 0.25;
  }
}
</style>
