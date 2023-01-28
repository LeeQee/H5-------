import Vue from 'vue'
import VueRouter from 'vue-router'
import { Toast } from 'vant'

Vue.use(VueRouter)

import routes from './routes'

const router = new VueRouter({
  routes,
  
})
// 路由守衛
router.afterEach((to, from) => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
  //将滚动条恢复到最顶端
  window.onunload = unload; //兼容谷哥
})
function unload (e){
  window.scrollTo(0,0);
}


export default router

// // 路由守卫，如果没有登录强制登录页
// router.beforeEach((to, from, next) => {
//   // 1.如果访问的是登录页面（无需权限），直接放行
//   if (to.path === '/login') return next()
//   // 2.如果访问的是有登录权限的页面，先要获取token
//   const tokenStr = localStorage.getItem('token')
//   // 2.1如果token为空，强制跳转到登录页面；否则，直接放行
//   if (!tokenStr) {
//     return next('/login')
//   }
//   next()
// })