import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/pages/home.vue'], resolve)
    },
    {
      path: '/round',
      name: 'round',
      component: resolve => require(['../pages/round.vue'], resolve)
    }
  ]
})
