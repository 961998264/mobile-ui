import './index-sfc.css';
export default {
  name: 'lym-transition',
  functional: true,
  render: function render (h, context) {
    return h('transition', context.data, context.children);
  }
};