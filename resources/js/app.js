require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router';

import router from './Router/index'
// import store from './Store/index';
import App from './App.vue'

import VueGoodTablePlugin from 'vue-good-table';

// import the styles
import 'vue-good-table/dist/vue-good-table.css'

Vue.use(VueGoodTablePlugin);


Vue.use(VueRouter)

const app = new Vue({
  el: '#app',
  router,
//   store,
  components: { App }
});
