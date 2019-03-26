<template>
<<<<<<< HEAD
    <div>
      <!--<vue-event-calendar-lu-->
        <!--:title="'这是日期标题'"-->
        <!--:events="demoEvents"-->
        <!--@day-changed="handleDayChanged"-->
        <!--@month-changed="handleMonthChanged"-->
      <!--&gt;-->
      <!--</vue-event-calendar-lu>-->

      <input type="text"  v-numberInt:2="reward" v-model="reward">
    </div>
</template>

<script>
  let today = new Date()
  export default {
    name: "index",
    data () {
      return {
        reward:'',
        demoEvents: [{
          date: `${today.getFullYear()}/${today.getMonth() + 1}/15`,
          title: 'Title-1',
          desc: 'longlonglong description'
        },{
          date: `${today.getFullYear()}/${today.getMonth() + 1}/24`,
          title: 'Title-2'
        },{
          date: `${today.getFullYear()}/${today.getMonth() === 11 ? 1 : today.getMonth() + 2}/06`,
          title: 'Title-3',
          desc: 'description'
        }]
      }
    },
    methods:{
      handleDayChanged(e){
        console.log(e,111)
      },
      handleMonthChanged(e){
        console.log(e,222)
      }
    }
  }
</script>

<style scoped>

=======
  <div class="ss-st">
    <p>我是p元素</p>
    <span>我是span元素</span>
    <a href="###">我是链接</a>
  </div>
</template>

<script>
  export default {
    name: "index"
  }
</script>

<style lang="scss" scoped>

  .box {
    width:10px * 2;
  }
>>>>>>> 5c5124d382f5a452914d460f246e2fcb00ef4446
</style>
