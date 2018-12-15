import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: require('Views/ViewWelcome').default,
      meta: {
        layout: 'NoMenu'
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: require('Views/ViewHome').default,
      meta: {
        layout: 'Main'
      }
    },
    {
      path: '/schedule',
      name: 'Schedule',
      component: require('Views/ViewSchedule').default,
      meta: {
        layout: 'Main'
      }
    },
    {
      path: '/stats',
      name: 'Stats',
      component: require('Views/ViewStats').default,
      meta: {
        layout: 'Main'
      }
    },
    {
      path: '/settings',
      name: 'Settings',
      component: require('Views/ViewSettings').default,
      meta: {
        layout: 'Main'
      }
    }
  ]
})

export default router
