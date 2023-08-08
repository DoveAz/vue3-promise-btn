### vue3-promise-btn

参考 [vue-promise-btn](https://www.npmjs.com/package/vue-promise-btn) 不支持配置，支持element-plus、vant等库，理论上button组件内部用loading控制加载状态的都支持


##### 安装

```shell
yarn add vue3-promise-btn
```



##### 使用方法

``` javascript
import { promiseButton } from 'vue3-promise-btn'
const app = createApp(App)
app.use(promiseButton).use(ElementPlus).mount('#app')
```

```vue
<el-button v-promise-btn @click="a function that must returns a promise">提交</el-button>
```

