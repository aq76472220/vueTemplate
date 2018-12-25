<template>
    <div>
        这里是A组件
    </div>
</template>

<script>
    export default {
      name: "",
      created(){
       this.$axios.get('broker/product/index',{
         params: {
           uid: 17162
         }}).then((res)=>{
          console.log(res)
       })
      }
    }
</script>

<style scoped>

</style>
