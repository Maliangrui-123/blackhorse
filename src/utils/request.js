// 封装一个axios
import axios from 'axios'
import router from '../router' // 引入路由实例对象
import { Message } from 'element-ui'
import JSONBig from 'json-bigint'
// 赋值黑马头条的默认地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'
// 请求拦截
axios.interceptors.request.use(function (config) { // 参数config是axios的所有配置
  // 执行请求成功
  let token = window.localStorage.getItem('user-token') // 获取token
  config.headers.Authorization = `Bearer ${token}` // 统一注入token
  return config // 返回的config就会作为新的请求选项去请求
}, function () {
  // 执行请求失败
})
// 后台数据 到达响应拦截之前走的一个参数
axios.defaults.transformResponse = [ function (data) {
  return JSONBig.parse(data)
}]
// 响应拦截
axios.interceptors.response.use(function (response) {
  // 成功时执行
  return response.data ? response.data : {} // 解决,当data不存在时,then中读取数据的报错问题
}, function (error) {
  // 失败时执行 状态码不会是200或者201/204
  // 统一处理失败
  // 获取状态码,根据状态码进行相应的提示和操作
  let status = error.response.status // 获取状态码
  // 根据状态码进行提示
  let message = '' // 提示信息
  switch (status) {
    case 400:
      message = '请求参数错误'
      break
    case 401:
      // token过期
      router.push('/login')
      break
    case 403:
      // 如果同样的状态码，不同意思，需要通过请求地址来判断是哪个的响应
      // resfehtoken过期,resfehtoken是用来换取token的
      router.push('/login')
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 404:
      message = '手机号不正确'
      break
    default:
      break
  }
  // 状态码提示
  Message({ type: 'warning', message }) // 提示消息
  return Promise.reject(error)
})
// 导出axios
export default axios
