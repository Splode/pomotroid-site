import Vue from 'vue'
import App from './App.vue'

require('bootstrap-nucleus')
require('./assets/styles/main.scss')

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
