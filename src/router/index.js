import Vue from 'vue'
import Router from 'vue-router'
import addDetail from '@/pages/addDetail.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'addDetail',
      meta: {
        keepAlive: true // 需要被缓存
      },
      component: addDetail
    }
  ]
})
