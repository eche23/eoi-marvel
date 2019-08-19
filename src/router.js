import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Comics from './views/Comics.vue'
import Characters from './views/Characters.vue'
import Series from './views/Series.vue'
import Detail from './views/Detail.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/comics',
      name: 'comics',
      component: Comics
    },
    {
      path: '/characters',
      name: 'characters',
      component: Characters
    },
    {
      path: '/series',
      name: 'series',
      component: Series
    },
    {
      path: '/comics/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/characters/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/series/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
