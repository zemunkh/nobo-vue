import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import { store } from './store.js'
import './assets/scss/app.scss'
const fb = require('./firebaseConfig.js')
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = true;

let app = ''

fb.auth.onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
  }
});

