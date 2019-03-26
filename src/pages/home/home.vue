<template>
  <div>
    <div>我是home</div>
    <div>
      <h2>热门城市</h2>
      <ul>
        <router-link tag="li" v-for="item in hotcity" :to="'/city/'+item.id" :key="item.id">
          {{item.name}}
        </router-link>
      </ul>
    </div>
    <div>
      <h2>字母排序城市</h2>
      <ul>
        <li v-for="(value, key) in sortgroupcity" :key="key">
          <h3>{{key}}</h3>
           <ul>
             <router-link tag="li" v-for="item in value" :to="'/city/' + item.id" :key="item.id">
               {{item.name}}
             </router-link>
           </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data(){
      return {
        guessCity: '',   //当前城市
        guessCityid: '', //当前城市id
        hotcity:[],      //热门城市列表
        groupcity: [],   //所有城市列表
      }
    },
    computed:{
      //将获取的数据按照A-Z字母开头排序
      sortgroupcity(){
        let sortobj = {};
        for (let i = 65; i <= 90; i++) {
          if (this.groupcity[String.fromCharCode(i)]) {
            sortobj[String.fromCharCode(i)] = this.groupcity[String.fromCharCode(i)];
          }
        }
        return sortobj
      }
    },
    mounted(){
      //获取当前城市
      this.$http.get('/v1/cities',{type: 'guess'}).then((res)=>{
        console.log(res)
        this.guessCity = res.name;
        this.guessCityid = res.id;
      })

      //获取当前热门城市
      this.$http.get('/v1/cities',{type: 'hot'}).then((res)=>{
        this.hotcity = res
      })

      //获取当前所有城市
      this.$http.get('/v1/cities',{type: 'group'}).then((res)=>{
        console.log(res,'@@@@@@@@@@@')
        this.groupcity = res
      })
    }
  }
</script>

<style scoped>

</style>
