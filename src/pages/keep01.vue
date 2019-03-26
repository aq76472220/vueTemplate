<template>
    <div>
      <input type="text" v-model="num">

      <router-link to="/keep02"><button>我要跳转了...</button></router-link>

    </div>
</template>

<script>
  export default {
    name: "keep01",
    data () {
      return {
        num: '我的值会被缓存吗？'
      }
    },
    mounted () {
      console.log('我走了mounted...........')
    },
    activated () {
      console.log('我走了activated...........')
    },
    deactivated () {
      console.log('我走了deactivated...........')
    },
    updated (e) {
      console.log('我走了updated...........', e)
    },
    destroyed () {
      console.log('我走了destroyed...........', e)
    }
  }
</script>

<style scoped>

</style>
