import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from './utils/request' // 引入自己封装的一个axios
import './styles/index.less'
import 'element-ui/lib/theme-chalk/index.css'
import Component from './components'
import './permission' // 直接引入JS

Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Component) // 注册全局组件对象 =>会调用该对象中的方法
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
