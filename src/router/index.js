import Vue from 'vue'
import Router from 'vue-router'
import A from '@/components/A'
import B from '@/components/B'
import C from '@/components/C'
import vuex from '@/components/vuex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'a',
      meta: {
        keepAlive: true // 需要被缓存
      },
      component: A
    },
    {
      path: '/b',
      name: 'b',
      component: B
    },
    {
      path: '/c',
      name: 'c',
      component: C
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: vuex
    }
  ]
})
