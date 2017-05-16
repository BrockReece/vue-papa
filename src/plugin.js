let Papa = require('./components/Papa.vue');

module.export = {
  install: function (vue) {
    vue.component('papa-parse', Papa);
  },
};
