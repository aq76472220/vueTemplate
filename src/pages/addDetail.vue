<template>
    <div>
      <input type="text"   id="" v-model="inputAdress">
      <div  @click="searchSureHandle">搜索</div>
      <ul>
        <li v-for="(item,index) in adressList" @click="listClickHandle($event,index)">
          <p>{{item.name}}</p>
          <p>{{item.adress}}</p>
        </li>
      </ul>
    </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'
  export default {
    name: "addDetail",
    data(){
      return {
        inputAdress:'', //input 搜索的地址
        adressList:[]
      }
    },
    mounted(){

    },
    methods:{
      ...mapMutations([
        'SAVE_ADDDETAIL'
      ]),
      async searchSureHandle(){ //搜索地址
        var  adressData  = await this.$http.get('/v1/pois',{type: 'nearby',keyword:this.inputAdress})
        this.adressList = adressData
      },
      listClickHandle(e,index){
        this.SAVE_ADDDETAIL(this.adressList[index].name)
        this.$router.go(-1)
      }
    },
  }
</script>

<style scoped>

</style>
