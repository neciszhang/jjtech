import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Head from './components/Head.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/head",
      name: "head",
      component: Head
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/work',
      name: 'work',
      component: () => import('./views/Work.vue')
    },
    {
      path: '/latest',
      name: 'latest',
      component: () => import('./views/Latest.vue')
    },
    {
      path: '/people-careers',
      name: 'people-careers',
      component: () => import('./views/PeopleCareers.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    }
  ]
})
