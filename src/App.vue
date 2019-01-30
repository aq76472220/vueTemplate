<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      app:'我是根实例...'
    }
  },
  methods:{
    getMap(){
      console.log('执行了根实例的方法了app...')
    }
  },
  provide: function () {
    return {
      getMap: this.getMap
    }
  },
}
</script>

<style>

</style>
