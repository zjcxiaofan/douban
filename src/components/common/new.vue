<template>
  <div>
    <!-- 设置组件的html 需要一个根节点  div就是根节点-->
  </div>
</template>

<script>
  // 导出组件
  export default {
    // data是用来储存数据的，需要用return返回数据
    data () {
      return {
        title:'假装是数据'
      }
    },
    methods: {
      // 这里用来定义方法
      
    } 
  }
</script>

<!-- 在style加入scoped当前css只在当前组件生效 -->
<style scoped>
  /*这里是模板的css*/
</style>
