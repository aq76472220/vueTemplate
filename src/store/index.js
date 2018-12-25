
import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'
// const myPluginWithSnapshot = store => {
//   let prevState = _.cloneDeep(store.state)
//   store.subscribe((mutation, state) => {
//     let nextState = _.cloneDeep(state)
//
//     // 比较 prevState 和 nextState...
//
//     // 保存状态，用于下一次 mutation
//     prevState = nextState
//   })
// }

export  default  new Vuex.Store({
  //plugins: process.env.NODE_ENV !== 'production' ? [myPluginWithSnapshot] : [],
  state:{
    count:10,
    message:'这是一个测试的input'
  },
  mutations:{
    increment(state){
      return state.count++
    },

    updateMessage (state, message) {
      state.obj.message = message
    }

  },
})
