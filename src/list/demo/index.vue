<template>
  <demo-section>
    <lym-tab v-model="tabIndex">
      <lym-tab-item title='基础用法'>
        <div class="box">
          <lym-list :data="option.basic.emojis" :load='loadData' :mounted-load='true' pull-up-load
            :finished='option.basic.finished' :loading.sync='option.basic.loading'>
            <ul class="content">
              <li class="scroll-item" v-for="(item, index) in option.basic.emojis" :key="index"
                @click="click(index)">
                {{item}}</li>
            </ul>
          </lym-list>
        </div>
      </lym-tab-item>
      <lym-tab-item title='错误提示'>
        <div class="box">
          <lym-list ref="loadMore1" :data="option.error.emojis" :load='loadDataError' pull-up-load
            finished-text='没有更多' :finished='option.error.finished'
            :loading.sync='option.error.loading'>
            <ul class="content">
              <li class="scroll-item" v-for="(item, index) in option.error.emojis" :key="index"
                @click="click(index)">
                {{item}}</li>
            </ul>
          </lym-list>
        </div>

      </lym-tab-item>
      <lym-tab-item title='下拉刷新'>
        <div class="box">
          <lym-list ref="loadMore" :pull-up-load='false' :is-refresh='true'
            :refresh-loading='option.refresh.refreshLoading' :data="option.refresh.emojis"
            :load='loadDataError' :refresh='refresh'>
            <ul class="content">
              <li class="scroll-item" v-for="(item, index) in option.error.emojis" :key="index"
                @click="click(index)">
                {{item}}</li>
            </ul>
          </lym-list>
        </div>
      </lym-tab-item>
    </lym-tab>
  </demo-section>

</template>
<script>

export default {
  components: {
  },
  data () {
    return {
      tabIndex: 0,
      index: 0,
      option: {
        basic: {
          finished: false,
          loading: false,
          emojis: [

          ],
        },
        error: {
          finished: false,
          loading: false,
          error: false,
          emojis: [
            '😄 😅 😆 😉 😊',
            '😫 😴 😌 😛 😜',
            '😄 😅 😆 😉 😊',
            '😫 😴 😌 😛 😜',
            '😄 😅 😆 😉 😊',
            '😫 😴 😌 😛 😜',
            '😄 😅 😆 😉 😊',
            '😄 😅 😆 😉 😊',
            '😫 😴 😌 😛 😜',
            '😄 😅 😆 😉 😊',
          ],
        },
        refresh: {
          refreshLoading: false,
          emojis: [

          ],
        },
      },
      pulldown: true
    }
  },
  async created () {

  },
  mounted () {

  },
  methods: {
    click (index) {
      alert('点击了' + index)
    },
    loadData () {
      console.log('loading')
      this.option.basic.loading = true
      ++this.index;
      if (this.index >= 5) {
        this.option.basic.finished = true
        return
      }
      setTimeout(() => {
        console.log('load')
        this.option.basic.emojis.push(
          '😄 😅 😆 😉 😊',
          '😫 😴 😌 😛 😜',
          '👆🏻 😒 😓 😔 👇🏻',
          '😑 😶 🙄 😏 😣',
          '😞 😟 😤 😢 😭',
          '🤑 😲 ☹️ 🙁 😖',
          '👍 👎 👊 ✊ 🤛',
          '☝️ ✋ 🤚 🖐 🖖',
          '👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼',
          '☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽',
          '🌖 🌗 🌘 🌑 🌒')
        this.option.basic.loading = false
      }, 2000)
    },
    loadDataError () {
      console.log('loading')
      this.option.error.loading = true
      setTimeout(() => {
        this.option.error.error = true
        this.$refs.loadMore1.error()
      }, 1000)
    },
    refresh () {
      this.option.refresh.refreshLoading = true
      setTimeout(() => {
        this.option.refresh.refreshLoading = false
      }, 2000);

    },
    scroll (vla) {
      console.log("scroll -> vla", vla)

    }
  }
}
</script>

<style lang="less" scoped>
.box {
  height: 500px;
  width: 100%;
}
.content {
  width: 100%;
  overflow: hidden;
  li {
    height: 50px;
    margin-bottom: 20px;
    text-align: center;
    line-height: 50px;
  }
}

.horizontal-container {
  .scroll-content {
    display: inline-block;
    .scroll-item {
      display: inline-block;
      height: 50px;
      margin-right: 20px;
      text-align: center;
      line-height: 50px;
    }
  }
}
</style>