<template>
    <div>
      <p>vuex实验</p>
      <p>{{count}}</p>
      <button @click="add">add(添加)</button>
      <!--<input :value="message" @input="updateMessage">-->
    </div>
</template>

<script>
  import { mapMutations,mapState } from 'vuex'
    export default {
      data(){
        return {

        }
      },
      name: "vuex",
      computed:{
        ...mapState([
          'count'
        ]),
        ...mapState({
          message: state => state.obj.message
        })
      },
      created(){
      },

      methods:{
        ...mapMutations({
          add:'increment'
        }),
        updateMessage (e) {
          this.$store.commit('updateMessage', e.target.value)
        }
      },
    }
</script>

<style scoped>

</style>
