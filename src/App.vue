<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
        <!-- 这里是会被缓存的视图组件，比如 Home！ -->
      </router-view>
    </keep-alive>

    <router-view v-if="!$route.meta.keepAlive">
      <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
    </router-view>
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
