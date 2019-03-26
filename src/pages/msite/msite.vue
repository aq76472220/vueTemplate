<template>
  <div>
    <!--<div class="swiper-container">-->
      <!--<div class="swiper-wrapper">-->
        <!--<div class="swiper-slide">Slide 1</div>-->
        <!--<div class="swiper-slide">Slide 2</div>-->
        <!--<div class="swiper-slide">Slide 3</div>-->
      <!--</div>-->
      <!--&lt;!&ndash; 如果需要分页器 &ndash;&gt;-->
      <!--<div class="swiper-pagination"></div>-->

      <!--&lt;!&ndash; 如果需要导航按钮 &ndash;&gt;-->
      <!--<div class="swiper-button-prev"></div>-->
      <!--<div class="swiper-button-next"></div>-->

      <!--&lt;!&ndash; 如果需要滚动条 &ndash;&gt;-->
      <!--<div class="swiper-scrollbar"></div>-->
    <!--</div>-->

    <div class="swiper-container" v-if="foodTypes.length">
      <div class="swiper-wrapper">
        <div class="swiper-slide food_types_container" v-for="(item, index) in foodTypes" :key="index">
          <router-link :to="{path: '/food', query: {geohash, title: foodItem.title, restaurant_category_id: getCategoryId(foodItem.link)}}" v-for="foodItem in item" :key="foodItem.id" class="link_to_food">
            <figure>
              <img :src="imgBaseUrl + foodItem.image_url">
              <figcaption>{{foodItem.title}}</figcaption>
            </figure>
          </router-link>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

  </div>
</template>

<script>
  import  {mapMutations} from 'vuex'
  import Swiper from 'swiper'
  export default {
    name: "msite",
    data(){
      return {
        geohash: '', // city页面传递过来的地址geohash
        msiteTitle: '请选择地址...', // msite页面头部标题
        foodTypes: [], // 食品分类列表
        hasGetData: false, //是否已经获取地理位置数据，成功之后再获取商铺列表信息
        imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
      }
    },
    async beforeMount(){
      if (!this.$route.query.geohash){
        const address = await this.$http.get('/v1/cities',{type: 'guess'})
        this.geohash = address.latitude + ',' + address.longitude;
      } else {
        this.geohash = this.$route.query.geohash
      }

      // 保存gehash到vuex
      this.SAVE_GEOHASH(this.geohash)
      let res = await this.$http.get('/v2/pois/'+this.geohash)
      this.msiteTitle = res.name
      //存储地址相关信息
      this.RECORD_ADDRESS(res)
      this.hasGetData = true
    },
    mounted(){
      // 获取导航食品类型列表
      this.$http.get('/v2/index_entry',{geohash:this.geohash,group_type:'1','flags[]': 'F'}).then((res)=>{
        console.log(res,'获取所有食品类型列表')
        let resArr = [...res];
        let foodArr = [];
        for (let i = 0 , j = 0; i < res.length ; i+=8, j++){
          foodArr[j] = resArr.splice(0,8)
        }
        this.foodTypes = foodArr
        this.$nextTick(()=>{
          new Swiper ('.swiper-container', {
            loop: true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            // 如果需要滚动条
            scrollbar: '.swiper-scrollbar',
          })
        })
      })
    },
    methods:{
      ...mapMutations([
        'SAVE_GEOHASH',
        'RECORD_ADDRESS'
      ]),
      // 解码url地址，求去restaurant_category_id值
      getCategoryId(url){
        console.log(url)
        let urlData = decodeURIComponent(url.split('=')[1].replace('&target_name',''));
        if (/restaurant_category_id/gi.test(urlData)) {
          console.log(JSON.parse(urlData))
          return JSON.parse(urlData).restaurant_category_id.id
        }else{
          return ''
        }
      }
    }
  }
</script>

<style scoped>

</style>
