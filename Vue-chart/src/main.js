import Vue from 'vue'
import App from './App.vue'
import "@/plugins/echarts";

// Importamos JQuery
const $ = require('jquery')
// Lo declaramos globalmente
window.$ = $
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
