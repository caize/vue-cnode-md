import * as types from './mutations-types'
import axios from 'axios'

const BASE_URL = 'https://cnodejs.org/api/v1'

export default {
    switchLoading({commit}, bool) {
        commit(types.LOADING, bool)
    },
    switchType({commit}, type) {
        commit(types.SWITCH_TYPE, type)
    },
    storeType({commit}, payload) {
        commit(types.STORE_TYPE, payload)
    },
    storePage({commit}, payload) {
        commit(types.STORE_PAGE, payload)
    },
    getTypeData({commit}, {type, page}) {
        commit(types.LOADING, !!1)
        axios.get(BASE_URL + '/topics?tab=' + (type === 'default' ? '' : type) + '&page=' + page)
            .then((res) => {
                var data = res.data.data
                commit(types.STORE_TYPE, {type, data})
                commit(types.STORE_PAGE, {type, page})
                commit(types.LOADING, !!0)
            })
    },
    getTopicDetail({commit}, id) {
        commit(types.LOADING, !!1)
        axios.get(BASE_URL + '/topic/' + id)
            .then((res) => {
                // console.log(res)
                var data = res.data.data
                commit(types.STORE_DETAIL, data)
                commit(types.LOADING, !!0)
            })
    },
    getUserInfo({commit}, loginname) {
        axios.get(BASE_URL + '/user/' + loginname)
            .then((res) => {
                var userInfo = res.data.data
                console.log(userInfo)
                commit(types.STORE_USER, userInfo)
                commit(types.LOADING, !!0)
            })
    }
}
