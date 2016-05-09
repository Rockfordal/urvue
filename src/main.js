import Vue from 'vue'
import VueRouter from 'vue-router'
import configRouter from './routes'
import App from './components/App'
// import VueValidator from 'vue-validator'
// import filters from './utils/filters'
// import { sync } from 'vuex-router-sync'

Vue.use(VueRouter)
// Vue.use(VueValidator)

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})

// var App = Vue.extend({})
configRouter(router)
// sync(store, router)
router.start(App, '#app')
// window.router = router
