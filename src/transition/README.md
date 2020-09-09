# Transition 动画

### 介绍

复用动画切换组件

### 引入

```js
import Vue from 'vue';
import { Transition } from 'vant';

Vue.use(Transition);
```

## 代码演示

### 基础用法

```html
  <lym-transition name='lym-slide-left'>
    <div v-show="visible" class="bg">
      lym-slide-left
    </div>
  </lym-transition>
```

```js
export default {
  data() {
    return {
      visible: false
    }
  }
},
```
## API

`lym-transition`组件为Vue内置`transtion`的一层封装，支持所有Transition的属性参数。

其中内置动画`name`参数如下：

- `lym-fade`
- `lym-fade-up`
- `lym-fade-down`
- `lym-fade-left`
- `lym-fade-right`
- `lym-slide-up`
- `lym-slide-down`
- `lym-slide-left`
- `lym-slide-right`
- `lym-bounce`
- `lym-punch`
- `lym-zoom`


### Props

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 动画名称 | _string_ | -- |

### Events

| 事件名 | 说明       | 回调参数       |
| ------ | ---------- | -------------- |
| before-enter  | 动画进入前触发 | _event: Event_ |
| before-leave  | 动画离开前触发 | _event: Event_ |
| after-enter  | 动画进入后触发 | _event: Event_ |
| after-leave  | 动画进离开后触发 | _event: Event_ |

