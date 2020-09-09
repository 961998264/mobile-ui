module.exports = {
  name: 'lym-ui',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/lym-ui/',
    },
  },
  site: {
    title: 'lym-ui',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: 'Basic',
        items: [
          {
            path: 'loading',
            title: 'loading',
          },
          {
            path: 'tab',
            title: 'tab',
          },

          {
            path: 'tabbar',
            title: 'tabBar',
          },
          {
            path: 'bscroll',
            title: 'bscroll',
          },
        ],
      },

      {
        title: '反馈组件',
        items: [
          {
            path: 'overlay',
            title: '蒙层',
          },
          {
            path: 'popup',
            title: '弹出面板',
          },
          {
            path: 'transition',
            title: '动画面板',
          },
          {
            path: 'scroll-view',
            title: 'scroll-view',
          },
          {
            path: 'list',
            title: 'list',
          },

        ],
      },
    ],

    versions: [
      {
        label: '1.x',
        link: 'https://youzan.github.io/vant/1.x/',
      },
    ],

  },
};
