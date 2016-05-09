<template>
  <div>
  <h1>Projekt</h1>

    <vs-table hover responsive>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="project in projects">
            <th scope="row">{{project.id}}</th>
            <td>{{project.name}}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </vs-table>

    <button v-on:click="getProjects" class="btn btn-default btn-success">Spara</button>
  </div>
</template>

<script>
import vuestrapBase from 'vuestrap-base-components'
import $ from 'jquery'

export default {
  components: {
    'vs-btn': vuestrapBase.buttons,
    'vs-table': vuestrapBase.tables
  },
  data () {
    return {
      projects: []
    }
  },
  created: function () {
    this.getProjects()
  },
  methods: {
    getProjects: function () {
      $.ajax({
        url: 'http://localhost:4000/graphql/',
        crossDomain: true,
        data: {
          query: '{ authors { id name } }'
        }
      }).done(response => {
        console.log(response.data)
        this.projects = response.data.authors
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
