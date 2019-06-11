import Vue from 'vue'
import App from './App.vue'

require('./assets/js/rem.js')
require('./assets/css/common.css')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
