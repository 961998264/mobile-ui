<template>
  <demo-section>
    <demo-block title="竖向" ref="wrapper">
      <div class="box">
        <lym-scroll scrollbar>
          <ul class="content">
            <li class="scroll-item" v-for="(item, index) in emojis" :key="index">
              {{item}}</li>
          </ul>
        </lym-scroll>
      </div>
    </demo-block>
    <demo-block title="横向" ref="wrapper">
      <div class="box1">
        <lym-scroll :scroll-x='true' :bounce='false' scrollbar>
          <ul class="content1">
            <li class="scroll-item" v-for="(item, index) in emojis" :key="index">
              {{item}}</li>
          </ul>
        </lym-scroll>
      </div>
    </demo-block>
  </demo-section>
</template>
<script>
export default {
  data () {
    return {
      loading: false,
      data: [
        '22222334566777',
        '22222334566777',
        '22222334566777',
        '22222334566777',
      ],
      emojis: [
        '👉🏼 😁 😂 🤣 👈🏼',
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
        '😑 😶 🙄 😏 😣',
        '😞 😟 😤 😢 😭',
        '🤑 😲 ☹️ 🙁 😖',
        '👍 👎 👊 ✊ 🤛',
        '☝️ ✋ 🤚 🖐 🖖',
        '👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼',
      ],
      pulldown: true
    }
  },
  created () {
    // this.loadData()
  },

  methods: {
    click (e) {
      console.log("click -> e", e)
    },
    loadData () {
      // this.isLoading = true
      setTimeout(() => {

        console.log('loadData')
        setTimeout(() => {
          this.emojis.push(
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
        }, 2000)
      })
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
.box1 {
  height: 30px;
  width: 100%;
  .content1 {
    height: 100%;
    display: inline-flex;
    li {
    }
  }
}
</style>