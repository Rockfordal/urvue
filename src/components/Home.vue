<template>
  <div>
  <h1>Hem</h1>
    <vs-modal id="modal1" size="md" :fade="false">
      <div slot="modal-header">
        <h3>header</h3>
      </div>
      <div slot="modal-body">
        body
      </div>
      <div slot="modal-footer">
        <button class="btn btn-primary" v-on:click="$broadcast('hide::modal', 'modal1')">
          OK
        </button>
      </div>
    </vs-modal>

    <!-- <vs-card variant="default" type="default" align="left">
      <img class="card-img img-fluid" src="https://placehold.it/350x150" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </vs-card> -->

    <img class="logo" src="../assets/logo.png" width="10%">

    <p>
      Du kanske till titta på
      <a href="https://github.com/vuejs/vue-router/" target="_blank">vue-router</a> for routing and
      <a href="https://github.com/vuejs/vuex/" target="_blank">vuex</a> for state management.
      <br/> <br/>
    </p>

    <vs-badge variant="default" type="pill">open</vs-badge>

    <br/> <br/>

    <vs-button-radio
      :model.sync="model"
      :list="[{
          text: 'First',
          value: 'first',
        }, {
          text: 'Second',
          value: 'second',
        }, {
          text: 'Third',
          value: 'third',
        }]"
      size="md"
      variant="primary"
      return-boject>
    </vs-button-radio>

     <!-- <vs-progress
      variant="primary"
      value="25"
      striped>
      25%
    </vs-progress> -->

  </div>
</template>

<script>
import vuestrapBase from 'vuestrap-base-components'

export default {
  components: {
    'vs-modal': vuestrapBase.modal,
    'vs-card': vuestrapBase.card,
    'vs-btn': vuestrapBase.buttons,
    'vs-button-radio': vuestrapBase.buttonRadio,
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
