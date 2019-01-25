<template>

  <div>
    <div>这里是C组件</div>
    <button>跳转到A组件刷新A组件</button>
    <InputNumber v-model="value" />
  </div>

</template>

<script>
  import InputNumber from './model.vue';
  export default {
    name: "C",
    components:{InputNumber},
    data(){
      return {
        value: 1
      }
    }
  }
</script>

<style scoped>

</style>
