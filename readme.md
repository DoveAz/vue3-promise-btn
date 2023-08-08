### vue3-promise-btn

参考 [vue-promise-btn](https://www.npmjs.com/package/vue-promise-btn) 支持element-plus、vant等库，理论上button组件内部用loading控制加载状态的都支持


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
<el-button v-promise-btn @click="a_function_that_must_returns_a_promise">提交</el-button>
```

