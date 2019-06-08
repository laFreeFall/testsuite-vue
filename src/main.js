import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
axios.defaults.baseURL = 'http://testsuite.loc/api'

Vue.use(VueRouter)
Vue.router = router

Vue.use(require('@websanova/vue-auth'), {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
})

Vue.use(Vuetify)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
