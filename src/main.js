// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from  './store'
import _ from 'lodash'
import axios from  './axios'
import fetch from  './services/http'

Vue.prototype.$axios = axios
Vue.prototype.fetch = fetch
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
  provide: function () {
    return {
      getMap: this.getMap
    }
  },

  template: '<App/>'
})
