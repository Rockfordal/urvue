<template>
  <div>
  <h1>Personer</h1>

    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Förnamn</th>
          <th>Efternamn</th>
          <th>Användarnamn</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in people">
          <th scope="row">{{person.id}}</th>
          <td>{{person.firstname}}</td>
          <td>{{person.lastname}}</td>
          <td>{{person.username}}</td>
        </tr>
      </tbody>
    </table>

    <button v-on:click="getPeople" class="btn btn-default blue">Spara</button>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      people: []
    }
  },
  created: function () {
    this.getPeople()
  },
  methods: {
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

<style>
h1 {
  color: #42b983;
}
</style>
