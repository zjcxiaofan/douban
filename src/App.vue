<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <sidebar></sidebar>  
  </div>
</template>

<script>
  import Sidebar from './components/common/Sidebar.vue'
  import Navbar from './components/common/Navbar.vue'
  export default {
    data () {
      return {
        title: 'hello'
      }
    },
    components: {
      Sidebar,
      Navbar
    }
  }
  
</script>

<style>
  
</style>
