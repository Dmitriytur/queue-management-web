// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

import VueDragTree from 'vue-drag-tree'

Vue.component('vue-drag-tree', VueDragTree)

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'sl-vue-tree/dist/sl-vue-tree.js'
import * as moment from 'moment';

import $ from "jquery";

import { VueEditor, Quill } from 'vue2-editor'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

