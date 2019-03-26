
import Vue from 'vue'

import Router from 'vue-router'
<<<<<<< HEAD
import addDetail from '@/pages/addDetail.vue'
import add from '@/pages/add.vue'
import login from '@/pages/login.vue'
import index from '@/pages/index.vue'
import keep01 from '@/pages/keep01.vue'
import keep02 from '@/pages/keep02.vue'
import index02 from '@/pages/index02.vue'
=======
const home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home')
const city = r => require.ensure([], () => r(require('@/pages/city/city')), 'city')
const msite = r => require.ensure([], () => r(require('@/pages/msite/msite')), 'msite')



const add = r => require.ensure([], () => r(require('@/pages/add')), 'add')
const addDetail = r => require.ensure([], () => r(require('@/pages/addDetail')), 'addDetail')

// const login = r => require.ensure([], () => r(require('@/pages/login')), 'login')
>>>>>>> 5c5124d382f5a452914d460f246e2fcb00ef4446

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
<<<<<<< HEAD
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/index',
      name:'index',
      component:index
    },
    {
      path:'/keep01',
      name:'keep01',
      meta: {
        keepAlive: true // 需要被缓存
      },
      component:keep01
    },
    {
      path:'/keep02',
      name:'keep02',
      meta: {
        keepAlive: true // 需要被缓存
      },
      component:keep02
    },
    {
      path:'/',
      name:'index02',
      component:index02
    }
=======
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
>>>>>>> 5c5124d382f5a452914d460f246e2fcb00ef4446
  ]
})
