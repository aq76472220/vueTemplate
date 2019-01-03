<template>
    <div>
        这里是A组件
        <input ref="input">
    </div>
</template>

<script>

    export default {

      name: "",
      inject: ['getMap'],
      created(){
        this.$nextTick(()=>{
          console.log( this.$refs)
          // this.$refs.input.focus()
          this.$refs.input.style.height = 100+'px'
        })
        this.getMap()
      },
      mounted(){

      },
    }
</script>

<style scoped>

</style>
