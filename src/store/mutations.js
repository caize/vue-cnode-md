import * as types from './mutations-types'

export default {
    [types.LOADING](state, loading) {
        state.loading = loading
    },
    [types.SWITCH_TYPE](state, type) {
        state.current = type
    },
    [types.STORE_TYPE](state, {type, data}) {
        type = type || 'default'
        console.log(data)
        state.datas[type] = state.datas[type].concat(data)
    },
    [types.STORE_PAGE](state, {type, page}) {
        // state.datas[type] = state.datas[type].concat(data)
        state.pages[type] = page
    },
    [types.STORE_DETAIL](state, detail) {
        // state.datas[type] = state.datas[type].concat(data)
        state.detail = detail
    }
}
