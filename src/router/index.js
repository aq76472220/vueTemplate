
import Vue from 'vue'

import Router from 'vue-router'
const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home')
const city = r => require.ensure([], () => r(require('@/pages/city/city')), 'city')
const msite = r => require.ensure([], () => r(require('@/pages/msite/msite')), 'msite')



const add = r => require.ensure([], () => r(require('@/pages/add')), 'add')
const addDetail = r => require.ensure([], () => r(require('@/pages/addDetail')), 'addDetail')

// const login = r => require.ensure([], () => r(require('@/pages/login')), 'login')

Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home',
      //redirect:{name:'home'},
      // redirect: to =>{
      //   console.log(to,'......')
      //   return '/home'
      // }
    },
    //首页城市列表页
    {
      path:'/home',
      name:'home',
      component: home
    },
    //当前选择的城市页
    {
      path:'/city/:cityid',
      name:'name',
      component:city

    },
    {
      path:'/city/:cityid',
      name:'name',
      component:city

    },
    //所有商铺列表页
    {
      path: '/msite',
      component: msite,
      meta: { keepAlive: true },
    },
    // {
    //   path: '/add',
    //   name: 'add',
    //   meta: {
    //     keepAlive: false // 需要被缓存
    //   },
    //   component: add,
    //   children:[{
    //     path:'addDetail',
    //     name: 'addDetail',
    //     component:addDetail
    //   }]
    // },
    // {
    //   path:'/login',
    //   name:'login',
    //   component:login
    // }
  ]
})
