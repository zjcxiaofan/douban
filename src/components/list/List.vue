<template>
  <div>
    <section class="list">
      <ul>
        <li v-for='item in movieList'>
          <router-link tag='a' :to="{ name: 'Detail', params: { id: item.id }}"> 
            <img :src="item.images.large" :alt="item.title">
            <p>
              <span class="title">{{item.title}}</span>
              <em class="average">{{item.rating.average}}分</em>
            </p>
            <p class="type">类型：<span v-for='type in item.genres'>{{ type }} </span></p>
         </router-link>
        </li>
      </ul>
    </section>
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
        movieList: [],
        isloding: true
      }
    },
    created () {
      this.loadMovieList()
    },
    //当组件被复用时，需要检测路由的变化
    watch: {
      '$route' () {
        this.isloding = true
        this.loadMovieList()
      }
    },
    methods: {
      loadMovieList () {
        // console.log(this.$route)
        axios.get('/api/movie/' + this.$route.path)
        .then( res => {
          // console.log(res.data.subjects)
          this.movieList = res.data.subjects
          this.isloding = false
        })
      }
    }
  }
</script>

<style>
.list {
  width: 80%;
  margin:0 auto;
  min-width: 1000px
}

.list ul li {
  margin-top:20px;
  float: left;
  width: 20%;
  padding:20px;
}

.list ul li a {
  display: block;
  background: #fff;
  width: 200px;
  transition: all .3s;
  cursor: pointer;
}

.list ul li a:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
  transform: scale(1.05);
}

.list ul li a img {
  width: 200px;
  height: 280px;
  margin-bottom: 5px;
}

.list ul li a .title {
  display: inline-block;
  font-size: 16px;
  max-width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.list ul li a .average {
  float: right;
  color: red;
}

.list ul li a .type {
  font-size: 13px;
}

.list ul li a .type span {
  display: inline-block;
  padding: 0px 2px 0px 2px;
  background: #ccc;
  margin-right: 5px;
  border-radius: 3px
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
