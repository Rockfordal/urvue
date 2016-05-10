<template>
  <div>
  <h1>Hem</h1>
    Hemsidan

    <p>
      Du kanske till titta på
      <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
      <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
      <br/> <br/>
    </p>

    <br/> <br/>

  </div>
</template>

<script>
export default {
  data () {
    return {
      showLoginModal: false,
      model: 'first',
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
h1 {
  color: #42b983;
}
</style>
