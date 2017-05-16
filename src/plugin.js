let Papa = require('./components/Papa.vue');

module.exports = {
  install: function (vue) {
    vue.component('papa-parse', Papa);
  },
};
