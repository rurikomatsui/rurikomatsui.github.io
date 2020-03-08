import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/thirdpartyjs/typekit.js' // ten-mincho
import '@/bootstrap_vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
