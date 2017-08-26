<template>
  <div class="detail">
    <h1>{{ detail.title }}</h1>
    <img :src="detail.images.large">
    <p>导演：</p>
    <p>演员：</p>
    <p>{{ detail.summary }}</p>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        detail: {}
      }
    },
    created () {
      //获取路由传递过来的数据
      console.log(this.$route.params)
      const id = this.$route.params.id
      this.loadDetail(id)
    },
    methods: {
      loadDetail (id) {
        axios.get('/api/movie/subject/' + id )
        .then( res => {
          console.log(res.data)
          this.detail = res.data
        })
      }
    }
  }
</script>

<style>
.detail {
  min-width:1000px;
  width:70%; 
  background: #fff;
  height: 500px;
  margin:0 auto;
  margin-top: 50px
}
</style>
