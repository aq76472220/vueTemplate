<template>
    <div>
      <div>
        <router-link to="/add/addDetail">
          <input type="text" placeholder="小区/写字楼/学校等" readonly="readonly" v-model="addAddress" />
        </router-link>
      </div>
      <transition name="router-slid" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex'
  export default {
    name: "add",
    data(){
      return {

      }
    },
    computed:{
      ...mapState([
        'addAddress'
      ])
    }
  }
</script>

<style scoped>
  .router-slid-enter-active, .router-slid-leave-active {transition: all .4s;}
  .router-slid-enter, .router-slid-leave-active {transform: translate3d(2rem, 0, 0);opacity: 0;}
</style>
