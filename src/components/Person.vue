<template>
  <div>
    <h1>Personer</h1>
    <p>Person ID is {{$route.params.personId}}</p>
    <p>{{store.state.route.params}}</p>
    <button v-link="'/people'" class="btn btn-default grey">Tillbaka</button>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data () {
    return {
    }
  },
  methods: {
    // ready: function () {
    // created: function () {
    //   getPeople()
    // },
    getPeople: function () {
      $.ajax({
        url: 'http://localhost:4000/graphql/',
        crossDomain: true,
        data: {
          query: '{ people { id firstname lastname username } }'
        }
      }).done(response => {
        console.log(response.data)
        this.people = response.data.people
      })
    }
  }
}
</script>
