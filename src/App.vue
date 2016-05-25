<template>
  <div>
    <nav>
    <div class="nav-wrapper">
      <a v-link="'/'" class="brand-logo">UrVue</a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li v-bind:class="{ 'active': true }"><a v-link="{path: '/projects'}" >Projekt</a></li>
        <li v-bind:class="{ 'active': true }"><a v-link="{path: '/people'}" >Personer</a></li>
        <li v-bind:class="{ 'active': true }"><a v-link="{path: '/counter'}" >Räknare</a></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <li v-bind:class="{ 'active': true }"><a v-link="{path: '/projects'}" >Projekt</a></li>
        <li v-bind:class="{ 'active': true }"><a v-link="{path: '/people'}" >Personer</a></li>
        <li v-bind:class="{ 'active': true }"><a v-link="{path: '/counter'}" >Räknare</a></li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
import store from './vuex/store'
export default {
  store,
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
