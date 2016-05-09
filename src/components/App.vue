<template>
  <div>
    <vs-navbar fixed="top" variant="default">
        <a class="navbar-brand" v-link="{ path: '/' }">UrVue</a>
        <vs-nav type="navbar" :vertical="false" class="pull-left">
          <vs-nav-item link="projects">Projekt</vs-nav-item>
          <vs-nav-item link="people">Personer</vs-nav-item>
          <form class="form-inline navbar-form pull-right">
            <input class="form-control" type="text" placeholder="Sök..">
            <button class="btn btn-success-outline" type="submit">Sök</button>
          </form>
        </vs-nav>
    </vs-navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import vuestrapBase from 'vuestrap-base-components'

// r = require('rethinkdb');
// import rethinkdb as r
// let connection = null;

export default {
  components: {
    'vs-modal': vuestrapBase.modal,
    'vs-card': vuestrapBase.card,
    'vs-btn': vuestrapBase.buttons,
    'vs-alert': vuestrapBase.alert,
    'vs-badge': vuestrapBase.badge,
    'vs-progress': vuestrapBase.progress,
    'vs-navbar': vuestrapBase.navbar,
    'vs-nav': vuestrapBase.nav,
    'vs-nav-item': vuestrapBase.navItem
  },
  data () {
    return {
      showLoginModal: false,
      msg: 'Hello World!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #3333FF;
}
</style>
