<template>
  <div id="app" class="container">
    <papa-parse :config="{header: true}" @complete="complete"></papa-parse>
    <table class="table is-striped is-narrow" v-if="parsed.data">
      <thead>
        <th v-for="field in parsed.meta.fields">{{ field }}</th>
      </thead>
      <tbody>
        <tr v-for="row in parsed.data">
          <td v-for="field in parsed.meta.fields">{{ row[field] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PapaParse from './components/Papa';

export default {
  name: 'app',

  data() {
    return {
      parsed: {},
    };
  },

  components: {
    PapaParse,
  },

  methods: {
    complete(results) {
      this.parsed = results;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
