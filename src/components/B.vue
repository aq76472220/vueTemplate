<template>
    <div>
      这里是B组件
      <input type="text" ref="dateInput" />


      <a_a></a_a>
    </div>
</template>

<script>
  import 'pikaday/css/pikaday.css'
  import a_a from './A/A'
  import  Pikaday from 'Pikaday'
  export default {
    components:{a_a},
    data(){
      return {
        date:'',
      }
    },
    mounted(){
      // var i18n = { // 需要在程序中进行定义，才可以进行汉化
      //   previousMonth : '上个月',
      //   nextMonth   : '下个月',
      //   months      : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
      //   weekdays    : ['周日','周一','周二','周三','周四','周五','周六'],
      //   weekdaysShort : ['日','一','二','三','四','五','六']
      // }
      // var picker = new Pikaday({
      //   field: this.$refs.dateInput,   //绑定日期插件的input对象
      //   format: 'YYYY/M/D',
      // });
      // this.$once('hook:beforeDestroy', function () {   //销毁控件所占资源
      //   console.log('我被销毁了...')
      //   picker.destroy()
      // })


      this.$http.get('/broker/product/index',{uid:17162}).then((res)=>{
        console.log(res)
      })

    },
    // beforeDestroy: function () {
    //   this.picker.destroy()
    //   console.log('我被销毁了...')
    // }
}

</script>

<style scoped>

</style>
