<template>
  <div>
    <section class="list">
      <ul class="clearfix">
        <li v-for='item in movieList' :key='item.id'>
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
      <div class='page'>
        <button @click='loadPrevious'>上一页</button>
        <span> {{ currentpage }} / {{totalpage}} 页</span>
        <button @click='loadNext'>下一页</button>
      </div>
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
        isloding: true,
        pagesize: 10,
        currentpage: 1,
        totalpage: null
      }
    },
    created () {
      this.loadMovieList(this.currentpage,this.pagesize)
    },
    //当组件被复用时，需要检测路由的变化
    watch: {
      '$route' () {
        this.isloding = true
        this.loadMovieList(this.currentpage,this.pagesize)
      }
    },
    methods: {
      loadMovieList (page, pagesize) {
        // console.log(this.$route)
        axios.get('/api/movie/' + this.$route.path,{
          params: {
            start: (page - 1) * pagesize,
            count: pagesize
          }
        })
        .then( res => {
          console.log(res.data)
          this.totalpage = Math.ceil(res.data.total / res.data.count)
          this.movieList = res.data.subjects
          this.isloding = false
        })
      },
      loadPrevious () {
        if(this.currentpage > 1) {
          this.isloding = true
          this.currentpage -= 1
          this.loadMovieList(this.currentpage, this.pagesize)
        }
        
      },
      loadNext () {
        if(this.currentpage < this.totalpage){
          this.isloding = true
          this.currentpage += 1
          this.loadMovieList(this.currentpage, this.pagesize)
        }
        
      }
    }
  }
</script>

<style>
.list {
  width: 80%;
  margin:0 auto;
  min-width: 1200px
}

.list ul li {
  float: left;
  width: 20%;
  padding:20px;
}

.list ul li a {
  display: block;
  background: #fff;
  width: 180px;
  transition: all .3s;
  cursor: pointer;
}

.list ul li a:hover {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
  transform: scale(1.05);
}

.list ul li a img {
  width: 180px;
  height: 250px;
  margin-bottom: 5px;
}

.list ul li a .title {
  display: inline-block;
  font-size: 16px;
  max-width: 120px;
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

.page {
  text-align: center;
  height: 50px;
}
.page span {
  display: inline-block;
  margin:0px 5px 0px 5px;
  height: 30px;
  line-height: 30px
}
.page button {
  vertical-align: center;
  border:none;
  height: 30px;
  width: 100px;
  cursor: pointer;
  border-radius: 8px;
  background-color: #2aabd2 ;
}

</style>
