import 'Style/main.sass'

import Vue from 'vue'

import router from './router'
import store from './store'
import App from './App'

Vue.config.productionTip = false

window.addEventListener('message', e => {
  if (process.env.NODE_ENV !== 'production' && e.data && e.data.type === 'webpackInvalid') {
    console.clear()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
