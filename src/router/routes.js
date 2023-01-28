export default [
  {
    path: '/',
    redirect: 'home',
    component:() => import('@/views/home/home'),
  },
  {
    path: '/home',
    name: 'home',
    component:() => import('@/views/home/home'),
    meta:{
      title:'首页'
    },
  },
  {
    path: '/login',
    name: 'login',
    component:() => import('@/views/login/index'),
    meta:{
      title:'登录'
    },
  },
  {
    path: '/customer',
    name: 'customer',
    component:() => import('@/views/customer/index'),
    meta:{
      title:'客户'
    }
  },
  {
    path: '/customerDetail',
    name: 'customerDetail',
    component:() => import('@/views/customer/detail'),
    meta:{
      title:'详情'
    }
  },
  {
    path: '/editCustomer',
    name: 'editCustomer',
    component:() => import('@/views/customer/edit'),
    meta:{
      title:'新建用户'
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component:() => import('@/views/mine/index'),
    meta:{
      title:'我的'
    },
  },
  {
    path: '/info',
    name: 'info',
    component:() => import('@/views/mine/info'),
    meta:{
      title:'基本信息'
    },
  },
 ]

