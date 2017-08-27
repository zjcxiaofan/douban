import Vue from 'vue'
import Router from 'vue-router'
import List from '../components/list/List.vue'
import Detail from '../components/detail/Detail.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/in_theaters'
    },
    {
      path: '/in_theaters',
      component: List
    },
    {
      path: '/coming_soon',
      component: List
    },
    {
      path: '/top250',
      component: List
    },
    {
      name: 'Detail',
      path: '/detail/:id',
      component: Detail
    },
    {
      name: 'Detail',
      path: '/detail',
      component: Detail
    },
    {
      path: '/search',
      component: List
    }
  ]
})
