<template>
  <div>
    <nav>
    <div class="nav-wrapper">
      <a v-link="'/'" class="brand-logo">UrVue</a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="right hide-on-med-and-down">
        <li v-bind:class="{ 'active': true }"><a v-link="'projects'" >Project</a></li>
        <li><a v-link="'people'">Personer</a></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <li v-bind:class="{ 'active': true }"><a v-link="'projects'" >Project</a></li>
        <li><a v-link="'people'">Personer</a></li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
  </div>
</template>
<script>

export default {
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
