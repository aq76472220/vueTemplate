import Vue from 'vue'
import Router from 'vue-router'
import addDetail from '@/pages/addDetail.vue'
import add from '@/pages/add.vue'

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
    }
  ]
})
