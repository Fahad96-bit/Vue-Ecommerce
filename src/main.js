import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Routes from './routes'
Vue.config.productionTip = false
Vue.use(VueRouter)

// eslint-disable-next-line no-unused-vars
const router=new VueRouter({
  routes:Routes
})

new Vue({
  vuetify,
  render: h => h(App),
  router:router
}).$mount('#app')
