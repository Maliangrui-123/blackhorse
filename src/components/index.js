import LayoutAsize from './home/layout-aside'
import LayoutHeader from './home/layout-header'
export default {
  install (Vue) {
    Vue.component('layout-aside', LayoutAsize)
    Vue.component('layout-header', LayoutHeader)// 全局注册
  }
}
