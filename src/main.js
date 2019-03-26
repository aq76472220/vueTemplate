// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from  './store'
import _ from 'lodash'
import Mint from 'mint-ui';
Vue.use(Mint);
import 'mint-ui/lib/style.css'
import './assets/css/style.css'
import {http} from './http/api'
Vue.prototype.$http = http
Vue.prototype._ = _
Vue.config.productionTip = false


if (process.env.NODE_ENV !== 'production') {
  Vue.config.devtools = true
  Vue.config.performance = true;
  console.log(process.env)
}

import 'vue-event-calendar-lu/dist/style.css'
import vueEventCalendar from 'vue-event-calendar-lu'
Vue.use(vueEventCalendar, { color: '#ff6633',locale: 'zh', weekStartOn: 3})



Vue.directive('numberInt',{
    bind: function(el, binding, vnode) {
      const element = el
      const len = binding.arg  // 初始化设置
      element.value = Number(element.value ).toFixed(len)  // 失焦时候格式化
      element.addEventListener('blur', function() {
        console.dir(vnode)
        if (isNaN(element.value)) {
          vnode.data.model.callback(0)
        } else {
          console.log(vnode)
          vnode.data.model.callback(Math.abs(Number(element.value).toFixed(len)))
        }
      })
    }
  })


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  methods:{
    getMap(){
      console.log('执行了根实例的方法了...')
    }
  },
  mounted(){
  },
  provide: function () { //边界情况--依赖注入
    return {
      getMap: this.getMap
    }
  },

  template: '<App/>'
})
