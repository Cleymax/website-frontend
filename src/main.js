import Vue from 'vue'
import Vuetify from 'vuetify'
import Resource from 'vue-resource'
import App from './App.vue'
import Router from 'vue-router'
import 'vuetify/dist/vuetify.css'

Vue.use(Router)
Vue.use(Resource)
Vue.use(Vuetify)

Vue.component('repository', require('./components/Repository.vue').default)

const router = new Router({
  routes: [
    {
      path: '/',
      component: require('./views/Home.vue').default
    }
  ],
  mode: 'history'
})

var main = new Vue({
  router,
  el: '#app',
  render: h => h(App)
})

export default main
