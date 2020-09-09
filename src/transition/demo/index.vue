<template>
  <demo-section>
    <demo-block title="左滑动">
      <demo-button type="primary" style="margin-bottom: 15px;" @click="visible=!visible">点击显示动画
      </demo-button>
      <lym-transition name='lym-slide-left' @before-enter="enter">
        <div v-show="visible" class="bg">
          lym-slide-left
        </div>
      </lym-transition>
    </demo-block>
    <demo-block title="右滑动">
      <demo-button type="primary" style="margin-bottom: 15px;" @click="visible1=!visible1">点击显示动画
      </demo-button>
      <lym-transition name='lym-slide-right'>
        <div v-show="visible1" class="bg">
          lym-slide-right
        </div>
      </lym-transition>
    </demo-block>
    <demo-block title="上滑动">
      <demo-button type="primary" style="margin-bottom: 15px;" @click="visible2=!visible2">点击显示动画
      </demo-button>
      <lym-transition name='lym-slide-down'>
        <div v-show="visible2" class="bg">
          lym-slide-down
        </div>
      </lym-transition>
    </demo-block>
    <demo-block title="下滑动">
      <demo-button type="primary" style="margin-bottom: 15px;" @click="visible3=!visible3">点击显示动画
      </demo-button>
      <lym-transition name='lym-slide-up'>
        <div v-show="visible3" class="bg">
          lym-slide-up
        </div>
      </lym-transition>
    </demo-block>
    <demo-block title="弹跳动画">
      <demo-button type="primary" style="margin-bottom: 15px;" @click="visible4=!visible4">点击显示动画
      </demo-button>
      <lym-transition name='lym-bounce'>
        <div v-show="visible4" class="bg">
          lym-bounce
        </div>
      </lym-transition>
    </demo-block>
    <demo-block title="中心缩放动画">
      <demo-button type="primary" style="margin-bottom: 15px;" @click="visible5=!visible5">点击显示动画
      </demo-button>
      <lym-transition name='lym-zoom'>
        <div v-show="visible5" class="bg">
          lym-zoom
        </div>
      </lym-transition>
    </demo-block>

    <demo-block title="穿孔动画">
      <demo-button type="primary" style="margin-bottom: 15px;" @click="visible5=!visible5">点击显示动画
      </demo-button>
      <lym-transition name='lym-punch'>
        <div v-show="visible5" class="bg">
          lym-punch
        </div>
      </lym-transition>
    </demo-block>
    <demo-block title="渐变动画">
      <demo-button type="primary" style="margin-bottom: 15px;" @click="visible6=!visible6">点击显示动画
      </demo-button>
      <lym-transition name='lym-fade'>
        <div v-show="visible6" class="bg">
          lym-fade
        </div>
      </lym-transition>

    </demo-block>
    <demo-block title="左渐变">
      <demo-button type="primary" style="margin-bottom: 15px;" @click="visible7=!visible7">点击显示动画
      </demo-button>
      <lym-transition name='lym-fade-left'>
        <div v-show="visible7" class="bg">
          lym-fade-left ：右、下、上、同理
        </div>
      </lym-transition>

    </demo-block>
    <demo-block title="飞入动画">
      <demo-button type="primary" style="margin-bottom: 15px;" @click="visible8=!visible8">点击显示动画
      </demo-button>
      <lym-transition name='lym-fly'>
        <div v-show="visible8" class="bg">
          lym-fly
        </div>
      </lym-transition>

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
      visible3: false,
      visible4: false,
      visible5: false,
      visible6: false,
      visible7: false,
      visible8: false,
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
    enter (e) {
      console.log("enter -> e", e)
    },

  },
}
</script>

<style lang='less' scoped>
@import '../../style/var';
.bg {
  width: 100%;
  height: 100px;
  background: pink;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
