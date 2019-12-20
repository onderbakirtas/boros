import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/settings',
    name: 'settings',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Settings.vue')
  },
  {
    path: '/music',
    name: 'music',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Music.vue')
  },
  {
    path: '/video',
    name: 'video',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Video.vue')
  },
  {
    path: '/startup',
    name: 'startup',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Startup.vue')
  },
  {
    path: '/search',
    name: 'search',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Search.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
