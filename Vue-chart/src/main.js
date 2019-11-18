import Vue from 'vue'
import App from './App.vue'
import "@/plugins/echarts";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import * as VueGoogleMaps from "vue2-google-maps";
import "./plugins/allauth";
import vueRouter from 'vue-router';
import routes from "./routes.js";
import axiosVue from 'axios-vue';

Vue.use(axiosVue)

Vue.use(vueRouter);


Vue.use(BootstrapVue)

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyC-ovkGazHkqkiz0AZV3w3DD0Zz7v-951A",
    libraries: "places" //necessary for places input
  }
});

const router = new vueRouter({
  routes: routes
})

// Importamos JQuery
const $ = require('jquery')
// Lo declaramos globalmente
window.$ = $
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
