import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Routes from './routes'
import Vuex from 'vuex';
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

// eslint-disable-next-line no-unused-vars
const router=new VueRouter({
  routes:Routes
})

new Vue({
  vuetify,
  store,
  render: h => h(App),
  router:router
}).$mount('#app')
