import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入Elementui组件库
import ElementUI from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'

// 引入axios
import axios from 'axios'

// 配置到Vue的属性
Vue.prototype.axios = axios

// 配置EL到Vue上
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
