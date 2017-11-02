import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "./assets/css/reset.css"
Vue.config.silent = true
new Vue({
  el: '#app',
  router,
  render: (c) => c(App)
})
