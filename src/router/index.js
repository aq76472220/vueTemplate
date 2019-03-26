import Vue from 'vue'
import Router from 'vue-router'
import addDetail from '@/pages/addDetail.vue'
import add from '@/pages/add.vue'
import login from '@/pages/login.vue'
import index from '@/pages/index.vue'
import keep01 from '@/pages/keep01.vue'
import keep02 from '@/pages/keep02.vue'
import index02 from '@/pages/index02.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/add',
      name: 'add',
      meta: {
        keepAlive: false // 需要被缓存
      },
      component: add,
      children:[{
        path:'addDetail',
        name: 'addDetail',
        component:addDetail
      }]
    },
    {
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
  ]
})
