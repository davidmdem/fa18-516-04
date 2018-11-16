

import Vue from 'vue'


// Vue wrappers for Bootstrap components
// https://bootstrap-vue.js.org/docs/components
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)


// Enable this.$notify throught the app.
// https://github.com/euvl/vue-notification#props
import Notifications from 'vue-notification'
Vue.use(Notifications)


// Bootstrap root application.
new Vue({
    el: '#app'
})
