<template>
  <demo-section>
    <demo-block title="基础用法">
      <div class="btn" @click="showOverlay">显示遮罩层</div>
      <lym-overlay @maskClick='maskClick' :visible.sync='visible' z-index='1001'>
      </lym-overlay>
    </demo-block>
    <demo-block title="嵌入内容">
      <div class="btn" @click="visible1 = true">显示遮罩层</div>
      <lym-overlay :visible.sync='visible1'>
        <div class="wrapper">
          <div class="block"></div>
        </div>
      </lym-overlay>
    </demo-block>

    <demo-block title="允许滚动">
      <div class="btn" @click="visible2 = true">显示遮罩层</div>
      <lym-overlay :visible.sync='visible2'>
        <div class="bg">
          22345666ddfe222
        </div>
      </lym-overlay>
    </demo-block>
  </demo-section>
</template>


<script>
export default {
  name: '',
  components: {
  },
  props: {
  },
  data () {
    return {
      visible: false,
      visible1: false,
      visible2: false,
    }
  },
  computed: {

  },
  watch: {

  },
  created () {
  },
  mounted () {
  },
  methods: {
    showOverlay () {
      this.visible = true
    },
    maskClick (e) {
      console.log("maskClick -> e", e)
    }
  },
}
</script>

<style lang='less' scoped>
@import '../../style/var';
.btn {
  padding: 0 15px;
  font-size: 14px;
  height: 50px;
  color: #fff;
  width: 80px;
  border-radius: 2px;
  background-color: #07c160;
  border: 1px solid #07c160;
  line-height: 50px;
  text-align: center;
}

.demo-overlay {
  background: @white;

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .block {
    width: 120px;
    height: 120px;
    background-color: @white;
  }
  .bg {
    width: 100%;
    height: 3000px;
    background: pink;
  }
}
@keyframes bounce-in {
  0% {
    transform: scale(0.5);
  }
  45% {
    transform: scale(1.05);
  }
  80% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
</style>
