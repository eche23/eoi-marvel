import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Comics from './views/Comics.vue'
import Characters from './views/Characters.vue'
import Series from './views/Series.vue'

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
