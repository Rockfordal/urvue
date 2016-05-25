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
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="person in people">
          <th scope="row">{{person.id}}</th>
          <td>{{person.firstname}}</td>
          <td>{{person.lastname}}</td>
          <td>{{person.username}}</td>
          <td>
            <button v-on:click="deletePerson(person)" class="btn btn-default red">
              <i class="material-icons">delete</i>
            </button>

            <button v-link="{ path: 'people/' + person.id }" class="btn btn-default blue">
              <i class="material-icons">edit</i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <button v-on:click="getPeople" class="btn btn-default blue">Ny person</button>
  </div>
</template>

<script>
import $ from 'jquery'

// import Lokka from 'lokka'
// const Transport = require('lokka-transport-http').Transport
//
// const client = new Lokka({
//   transport: new Transport('http://localhost:4000/graphql')
// })
//
// client.query('{ people { firstname } }').then(
//   function (res) {
//     console.log('response', res)
//   })

export default {
  data () {
    return {
      people: []
    }
  },
  ready: function () {
    this.getPeople()
  },
  methods: {
    deletePerson: function (person) {
      let q = `mutation PublicMutation { deleteperson(id: ${person.id} ) { id } }`
      console.log('query: ' + q)
      $.ajax({
        url: 'http://localhost:4000/graphql/',
        crossDomain: true,
        data: {
          query: q
        }
      }).done(response => {
        console.log(response.data)
        this.$data.people.$remove(person)
      })
    },
    showPerson: function (person) {
      window.alert('yo ' + person.firstname)
    },
    getPeople: function () {
      $.ajax({
        url: 'http://localhost:4000/graphql/',
        crossDomain: true,
        data: {
          query: '{ people { id firstname lastname username } }'
        }
      }).done(response => {
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
