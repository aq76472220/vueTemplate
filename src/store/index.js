
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import _ from 'lodash'
import mutations from './mutations'

const state = {
  addAddress:'', //新增地址
  userInfo:null, //用户信息
}

Vue.use(Vuex)
export  default  new Vuex.Store({
  plugins: process.env.NODE_ENV !== 'production' ? [createLogger()] : [],
  state,
  mutations,
})
