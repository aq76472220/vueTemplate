<template>
    <div>

      <br><br><br>

      <div><input type="text" placeholder="账号"  v-model.lazy="userAccount" name="" id=""></div>
      <div><input type="text" placeholder="密码"  v-model="passWord"></div>
      <div><input type="text" placeholder="验证码" maxlength="4" v-model="codeNumber"></div>
      <img v-show="captchaCodeImg" :src="captchaCodeImg">
      <div class="change_img" @click="getCaptchaCodeHandle">
        <p>看不清</p>
        <p>换一张</p>
      </div>

      <mt-button type="default" @click="mobileLogin">登录</mt-button>
    </div>
</template>

<script>
  import {mapMutations, mapState} from 'vuex'
  import { Button ,Toast  } from 'mint-ui';
  import {isNull} from '../utils/util'
  console.log(isNull)
  export default {
    name: "login",
    components:{
       Button
    },
    data(){
      return{
        userAccount: null, //用户名
        passWord: null, //密码
        codeNumber:null,//验证码
        captchaCodeImg: null, //验证码地址
        userInfo:null //用户信息
      }
    },
    created(){
      this.getCaptchaCodeHandle()
    },
    methods:{
      ...mapMutations([
        'RECORD_USERINFO',
      ]),
      async getCaptchaCodeHandle(){  //验证码看不清楚再次点击发生的事情
        let  captchaCodeData  = await this.$http.post('/v1/captchas')
        console.log(captchaCodeData)
        this.captchaCodeImg = captchaCodeData.code;
      },
      async mobileLogin(){
        if (isNull(this.userAccount)){
          Toast('请输入账号');
          return
        }
        if (isNull(this.passWord)){
          Toast('请输入密码');
          return
        }
        if (isNull(this.codeNumber)){
          Toast('请输入验证码');
          return
        }

        //用户名登录
        this.userInfo  = await this.$http.post('/v2/login',{username:this.userAccount, password:this.passWord, captcha_code:this.codeNumber})
        console.dir(this.userInfo )
        if (!this.userInfo.user_id) {
          Toast(this.userInfo.message);
          //this.getCaptchaCodeHandle()
        }else {
          this.RECORD_USERINFO(this.userInfo)
        }
      }
    }
  }
</script>

<style scoped>

</style>
