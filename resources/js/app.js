require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router';

import router from './Router/index'
// import store from './Store/index';
import App from './App.vue'

import { BootstrapVue } from 'bootstrap-vue'

Vue.use(VueRouter)

Vue.component('pagination', require('laravel-vue-pagination'));


const app = new Vue({
  el: '#app',
  router,
//   store,
  components: { App }
});
