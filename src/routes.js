import Vue from 'vue'
import Home from './components/Home'
import Projects from './components/Projects'
import People from './components/People'
import NotFound from './components/NotFound'

const Person = Vue.extend({
  template: 'Person ID is {{$route.params.personId}}'
})

export default (router) => {
  router.map({
    '/': {
      component: Home
    },
    '/projects': {
      component: Projects
    },
    '/people': {
      component: People
    },
    '/people/:personId': {
      component: Person,
      name: 'showperson'
    },
    '*': {
      component: NotFound
    }
  })
  // router.beforeEach((transition)=>{
  //   transition.next()
  // })
}
