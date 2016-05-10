<template>
  <div>
  <h1>Projekt</h1>

    <table class="table">
      <thead>
        <tr>
          <th>Namn</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects">
          <td>{{project.name}}</td>
        </tr>
      </tbody>
    </table>

    <button v-on:click="getProjects" class="btn btn-default blue">Spara</button>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
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
          query: '{ projects { id name } }'
        }
      }).done(response => {
        console.log(response.data)
        this.projects = response.data.projects
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
