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
import 'swiper/dist/css/swiper.css'
import {http} from './http/api'
Vue.prototype.$http = http


Vue.prototype._ = _
Vue.config.productionTip = false

if (process.env.NODE_ENV !== 'production') {
  console.log(process.env.NODE_ENV)
}


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
