import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Projects from './components/Projects'
import People from './components/People'
import Person from './components/Person'
import NotFound from './components/NotFound'
import Counter from './components/Counter'

Vue.use(VueRouter)

const router = new VueRouter({
  history: true,
  saveScrollPosition: true,
  suppressTransitionError: true
})

// export default (router) => {
router.map({
  '/': {
    component: Home
  },
  '/counter': {
    component: Counter
  },
  '/projects': {
    component: Projects
  },
  '/people/:personId': {
    component: Person
  },
  '/people/': {
    component: People
  },
  '*': {
    component: NotFound
  }
})
// router.beforeEach((transition)=>{
//   transition.next()
// })
// }

export default router
