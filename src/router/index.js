import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Detail from '@/pages/Detail'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/topic/:type',
        name: 'Home',
        component: Home,
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition
            } else {
                return {
                    x: 0,
                    y: 0
                }
            }
        }
    }, {
        path: '/',
        redirect: '/topic/default'
    }, {
        path: '/Detail/:id',
        name: 'Detail',
        component: Detail
    }]
})
