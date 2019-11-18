import Vue from 'vue'
import App from './App.vue'
import "@/plugins/echarts";
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

// Importamos JQuery
const $ = require('jquery')
// Lo declaramos globalmente
window.$ = $
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
