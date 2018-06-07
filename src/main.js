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

import 'vue2-timepicker/dist/vue2-timepicker.min.js'

import 'vue2-timepicker/dist/vue2-timepicker.min.css'

import $ from "jquery";

import { VueEditor, Quill } from 'vue2-editor'


import VueNotifications from 'vue-notifications'
import 'jquery'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'

function toast ({title, message, type, timeout, cb}) {
  if (type === VueNotifications.types.warn) type = 'warning'
  return toastr[type](message, title, {timeOut: timeout})
}

const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.use(VueNotifications, options)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

