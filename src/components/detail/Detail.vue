<template>
  <div class="detail">
    <h1>{{detail.title}}</h1>
    <img :src="detail.images.large" alt="">
    <div class="type">
      <p>导演：<span v-for='item in detail.directors'>{{ item.name }} </span></p>
      <p>主演：<span v-for='item in detail.casts'>{{ item.name }} </span></p>
      <p>类型：<span v-for='item in detail.genres'>{{ item }} </span></p>
      <p>国家：<span v-for='item in detail.countries'>{{ item }} </span></p>
      <p>评分：<span> {{detail.rating.average}} </span></p>
      <p>时间：<span> {{detail.year}} </span></p>
      <p>别名: <span v-for='item in detail.aka'> {{ item }} </span></p>
    </div>
    <p class="summary">剧情介绍：<span>{{ detail.summary }}</span></p>
    <div class="modal" v-show='isloding'>
      <img src="../../assets/images/loading2.gif"  alt="">
    </div>
  </div>

</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        detail: {},
        isloding: true
      }
    },
    created () {
      //获取路由传递过来的数据
      // console.log(this.$route.params)
      const id = this.$route.params.id
      this.loadDetail(id)
    },
    methods: {
      loadDetail (id) {
        axios.get('/api/movie/subject/' + id )
        .then( res => {
          console.log(res.data)
          this.detail = res.data
          this.isloding = false
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
  margin:0 auto;
  margin-top: 50px;
  padding: 5px
}

.detail h1 {
  font-size: 25px;
  margin-bottom:10px;
}

.detail>img {
  width: auto;
  height: 350px;
  float: left;
}

.detail .type {
  height: 350px;
  display: flex;
  flex-direction:column;
}
.detail .type p {
  font-weight: 700;
  flex: 1;
  margin-left: 20px
}

.detail .type p span {
  font-weight: normal;
}

.summary {
  font-weight: 700;
  margin-top:10px;
  line-height: 30px;
  text-align: center;
}

.summary span {
  font-weight: normal;
  color: #676767
}

.modal {
  background: rgba(0,0,0,0.8);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 1000;
}
.modal img {
  position: absolute;
  left: 50%;
  top:50%;
  transform: translate(-50%,-50%);
}
</style>
