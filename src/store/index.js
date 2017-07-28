import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getter'

Vue.use(Vuex)

const state = {
    datas: {
        default: [],
        ask: [],
        share: [],
        job: [],
        good: []
    },
    pages: {
        default: 1,
        ask: 1,
        share: 1,
        job: 1,
        good: 1
    },
    current: 'default',
    loading: true,
    detail: {
        author: {
            avatar_url: '',
            loginname: ''
        },
        content: '',
        replies: []
    },
    user: {
        loginname: '',
        id: '',
        avatar_url: ''
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
