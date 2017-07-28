// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import MintUI from 'mint-ui'
// import ElementUI from 'element-ui'
import VueMaterial from 'vue-material'
import filters from './filters'

Vue.use(VueMaterial)
Vue.config.productionTip = false
// Vue.use(MintUI)
// Vue.use(ElementUI)
// console.log(filters)
for (var name in filters) {
    if (filters.hasOwnProperty(name)) {
        Vue.filter(name, filters[name])
    }
}
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
})
