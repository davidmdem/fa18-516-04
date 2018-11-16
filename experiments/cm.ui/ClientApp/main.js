import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './filters'


// Vue wrappers for Bootstrap components
// https://bootstrap-vue.js.org/docs/components
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './style.scss'
Vue.use(BootstrapVue)


// Font awesome icons 
// https://fontawesome.com/icons?d=gallery
// https://github.com/FortAwesome/vue-fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faAws, faMicrosoft, faGoogle, faOpera } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas, faAws, faMicrosoft, faGoogle, faOpera)
Vue.component('font-awesome-icon', FontAwesomeIcon)


// Enable this.$notify throught the app.
// https://github.com/euvl/vue-notification#props
import Notifications from 'vue-notification'
Vue.use(Notifications)


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
