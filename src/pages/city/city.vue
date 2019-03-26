<template>
  <div>
      <div>
        <div class="relative b-line ml10 mr10">
          <mt-field   placeholder="请输入用户名" v-model="inputVaule"  ><i>12</i></mt-field>
        </div>
        <input type="submit" name="submit" @click='postpois' value="提交">
      </div>

        <ul>
          <li v-for="(item,index) in placelist" :key="index"  @click='nextpage(index, item.geohash)'>
            <h2>{{item.name}}}</h2>
            <p>{{item.adress}}</p>
          </li>
        </ul>
  </div>
</template>

<script>
  import {setStore,getStore,removeStore} from  '@/config/utils'
  export default {
    name: "city",
    data(){
      return {
        cityid:'', // 当前城市id
        inputVaule:'',  // 搜索地址
        placelist:[], //搜索城市列表
        placeHistory:[], // 历史搜索记录
      }
    },
    mounted(){
      this.cityid = this.$route.params.cityid;

      //获取当前城市名称
      this.$http.get('/v1/cities/'+this.cityid,{}).then((res)=>{
        console.log(res)
      })
    },
    methods:{
      //发送搜索信息inputVaule
      postpois(){
        //输入值不为空时才发送信息
        if (this.inputVaule) {
          // searchplace(this.cityid, this.inputVaule).then(res => {
          //   this.historytitle = false;
          //   this.placelist = res;
          //   this.placeNone = res.length? false : true;
          // })

          this.$http.get('/v1/pois',{type:'search',city_id:this.cityid,keyword:this.inputVaule}).then((res)=>{
            this.placelist = res;
          })

        }
      },
      /**
       * 点击搜索结果进入下一页面时进行判断是否已经有一样的历史记录
       * 如果没有则新增，如果有则不做重复储存，判断完成后进入下一页
       */
      nextpage(index,geohash){
        console.log(index,geohash)
        let history = getStore('placeHistory');
        let choosePlace = this.placelist[index];
        if (history) {
          let checkrepeat = false;
          this.placeHistory = JSON.parse(history);
          this.placeHistory.forEach(item => {
            if (item.geohash == geohash) {
              checkrepeat = true;
            }
          })
          if (!checkrepeat) {
            this.placeHistory.push(choosePlace)
          }
        }else {
          this.placeHistory.push(choosePlace)
        }
        setStore('placeHistory',this.placeHistory)
        this.$router.push({path:'/msite', query:{geohash}})
      }
    }
  }
</script>

<style scoped>

</style>
