// 权限拦截  用导航守卫
import router from '../router'
// 全局的前置守卫
router.beforeEach((to, from, next) => {
  // 必须要判断拦截地址
  if (to.path.startsWith('/home')) {
    // 如果要进入home就要进行权限判断,判断有没有token,如果有就放行，如果没有就回到登录页
    let token = window.localStorage.getItem('user-token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next() // 直接放行
  }
})
