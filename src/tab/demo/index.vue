<template>
  <demo-section>
    <demo-block title="基础用法">
      <lym-tab v-model="tabIndex1" @click="handleClick">
        <lym-tab-item v-for="item in tabData1" :title="item.label" :value='item.value'
          :key="item.value" :info='true'>
          <div class="tab-item-content">
            {{ item.label }}
          </div>
        </lym-tab-item>
      </lym-tab>
    </demo-block>
    <!-- <demo-block title="标签栏滚动">
      <lym-tab v-model="tabIndex2">
        <lym-tab-item v-for="item in tabData2" :title="item" :key="item">
          <div class="tab-item-content">
            {{ item }}
          </div>
        </lym-tab-item>
      </lym-tab>
    </demo-block>

    <demo-block title="滑动切换">
      <lym-tab v-model="tabIndex3" :swipeable='true'>
        <lym-tab-item v-for="item in tabData2" :title="item" :key="item">
          <div class="tab-item-content">
            {{ item }}
          </div>
        </lym-tab-item>
      </lym-tab>
    </demo-block> -->
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
      tabIndex1: 0,
      tabIndex2: 0,
      tabIndex3: 0,
      tabData1: [
        {
          label: "选项111",
          value: 'all',
          info: true,
        },
        {
          label: "选项二",
          value: 'aaa',
          info: true,
        },
        {
          label: "选项三",
          value: 'bbb',
        },
        {
          label: "选项四",
          value: 'ccc',
          info: true,
        },
      ],
      tabData2: [
        "选项1",
        "选项2",
        "选项3",
        "选项4",
        "选项5",
        "选项6",
        "选项7",
        "选项8",
      ],
    }
  },
  computed: {

  },
  watch: {

  },
  created () {
  },
  mounted () { },
  methods: {
    async initData () { },
    handleClick (val) {
      console.log("handleClick -> val", val)

    }
  },
}
</script>

<style lang='less' scoped>
.main-wrap {
}
.tab-item-content {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

