import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import {routes} from './routes';
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

// Global registration
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead);

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});
new Vue({
  el: '#app',
  render: h => h(App),
  router : router
});
