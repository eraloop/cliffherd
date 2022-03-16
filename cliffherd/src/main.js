import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin, BIcon, BIconArrowUp, BIconArrowDown, BForm, BIconCupFill} from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// registered components 
Vue.component('BIcon', BIcon)
Vue.component('BIconCupFill',  BIconCupFill)
Vue.component('BForm', BForm)
Vue.component('BIconArrowUp', BIconArrowUp)
Vue.component('BIconArrowDown', BIconArrowDown)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
