// 封装一个axios
import axios from 'axios'
// 赋值黑马头条的默认地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 请求一个拦截器
axios.interceptors.request.use(function (config) { // 参数config是axios的所有配置
  // 执行请求成功
  let token = window.localStorage.getItem('user-token') // 获取token
  config.headers.Authorization = `Bearer ${token}` // 统一注入token
  return config // 返回的config就会作为新的请求选项去请求
}, function () {
  // 执行请求失败
})
// 导出axios
export default axios
