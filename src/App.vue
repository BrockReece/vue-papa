<template>
  <div id="app">
    <papa-parse :config="{header: true}" @complete="complete"></papa-parse>
    <div>{{ parsed }}</div>
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
