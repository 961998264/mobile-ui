<template>
  <demo-section>
    <demo-block title="基础用法">
      <div class="button-box">
        <div class="child">
          <demo-button @click="showPopUp('bottom')">bottom</demo-button>
          <demo-button @click="showPopUp('top')">top</demo-button>
          <demo-button @click="showPopUp('left')">left</demo-button>
          <demo-button @click="showPopUp('right')">right</demo-button>
        </div>

      </div>
      <lym-popup v-model="isPopupShow.bottom" position="bottom" @beforeHide='beforeHide'
        @show='show' @hide='hide' @beforeShow='beforeShow'>
        <div class="lym-example-popup bottom-demo">
          <div class="bottom_child">
            Popup bottom
          </div>
        </div>
      </lym-popup>
      <lym-popup v-model="isPopupShow.top" position="top">
        <div class="lym-example-popup top-demo">
          Popup top
        </div>
      </lym-popup>
      <lym-popup v-model="isPopupShow.left" position="left">
        <div class="lym-example-popup left-demo ">
          Popup left
        </div>
      </lym-popup>
      <lym-popup v-model="isPopupShow.right" position="right">
        <div class="lym-example-popup right-demo">
          Popup right
        </div>
      </lym-popup>
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
      isPopupShow: {},
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
    hide () {
      console.log('hide')
    },
    show () {
      console.log('show')
    },
    beforeHide () {
      console.log('beforeHide')
    },
    beforeShow () {
      console.log('beforeshow')
    },
    showPopUp (type) {
      console.log(this.isPopupShow, 'isPopupShow')
      this.$set(this.isPopupShow, type, true)
    },
    hidePopUp (type) {
      console.log(this.isPopupShow, 'isPopupShow')
      this.$set(this.isPopupShow, type, false)
    },
  },
}
</script>

<style lang='less' scoped>
.button-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 1000px;
  position: relative;
}
.child {
  height: 300px;
  width: 100%;
  position: absolute;
  bottom: 300px;
  left: 0;
}
.lym-example-popup {
  background: white;
}
.bottom-demo {
  height: 300px;
  overflow: scroll;
  .bottom_child {
    height: 3000px;
    width: 100%;
  }
}
.left-demo {
  height: 100%;
  width: 200px;
  background: white;
}
.right-demo {
  height: 100%;
  width: 200px;
  background: white;
}

.demo1 {
  width: 100%;
  height: 100vh;
  overflow: scroll;
  position: relative;
  .demo2 {
    width: 100%;
    height: 400vh;
    overflow: scroll;
    position: relative;
    border: 1px solid red;
    .demo3 {
      position: fixed;
      bottom: 0;
      left: 0;
      height: 400px;
      width: 100%;
      background: pink;
      overflow: scroll;
      .demo4 {
        height: 2000px;
        width: 100%;
        background: blue;
      }
    }
  }
}
</style>

