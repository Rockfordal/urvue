import Vue from 'vue'
import Home from './components/Home'
import Projects from './components/Projects'
import NotFound from './components/NotFound'

const People = Vue.extend({
  template: 'Look at all the people who work here!'
  // <!-- <li><a v-link="{ name: 'showperson', params: { personId: 5 }}">Person 5</a></li> -->
})

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
