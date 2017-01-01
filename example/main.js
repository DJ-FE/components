import Vue from 'vue'
import App from './App'
import djcomponents from '../dist/component'
Vue.use(djcomponents)

// import { Loading } from './dist/component'
// Vue.component(Loading.name, Loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
