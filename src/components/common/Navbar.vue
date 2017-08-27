<template>
  <nav>
    <div class="navbar clearfix">
        
       <ul>
        <li class="title">豆瓣电影</li>
        <li><a>首页</a></li>
        <li>
          <router-link to='/in_theaters'>正在热映</router-link>
        </li>
        <li>
          <router-link to='/coming_soon'>即将上映</router-link>
        </li>
        <li>
          <router-link to='/top250'>Top250</router-link>
        </li>
      </ul>
      <form action="">
        <input type="text" placeholder="请输入搜索内容..." v-model="searchText" >
        <button @click='search'>搜索</button>
      </form>
    </div>
  </nav>
</template>

<script>
  import router from '../../router'
  export default {
    data () {
      return {
        searchText:''
      }
    },
    methods: {
      search () {
        const searchText = this.searchText.trim()
        if( searchText.length == 0) return
        
        router.push('/search?q=' + searchText)
      }
    }
  }
</script>

<style>
.navbar {
  min-width: 1000px;
  background-color: #07A7E1;
}

.navbar li {
  float: left;
  height: 40px;
  line-height: 40px;
}

.navbar .title {
  color: red;
  margin-left: 20px
}

.navbar li a {
  display: block;
  padding: 0px 15px 0px 15px
}

.navbar li a:hover {
  background: #0095bb;
}
.active {
  background:#0095bb;
}

form {
  float: right;
  line-height: 40px;
  margin-right: 50px
}

form input {
  padding-left: 5px;
  width: 160px;
  border: 1px solid #fff;
  height: 28px;
  border-radius: 5px
}

form button {
  height: 28px;
  width: 50px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

</style>
