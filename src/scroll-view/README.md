# lym-scroll 

### 介绍

lym-scroll  是一个滚动组件，依赖bettle-scroll库

### 引入

```js
import Vue from 'vue';
import { DemoButton } from 'lym-ui';

Vue.use(DemoButton);
```

## 代码演示

### 基础用法

```html
<demo-button type="primary" />
```

## API

### Props

| 参数 | 说明 | 类型 | 默认值 |
|------|------|------|------|
| type | 按钮类型 | *string* | `primary` |
| color `1.0.0` | 按钮颜色 | *string* | - |

### Events

| 事件名 | 说明 | 回调参数 |
|------|------|------|
| click | 点击时触发 | event: Event |

### Slots

| 名称 | 说明 |
|------|------|
| default | 默认插槽 |
