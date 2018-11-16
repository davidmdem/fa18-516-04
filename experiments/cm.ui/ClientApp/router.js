import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/Home.vue'
import Vm from './pages/Vm.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/vm',
            name: 'vm',
            component: Vm
        },
        {
            path: '/vm2',
            name: 'vm',
            component: Vm
        }
    ]
})
