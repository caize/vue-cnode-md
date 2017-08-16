export default {
    getLoading: state => state.loading,
    getType: state => state.current,
    getTypeData: state => state.datas[state.current],
    getTypePage: state => state.pages[state.current],

    getDetail: state => state.detail,

    getLoginStatu: state => !!state.me.loginname,

    getUserInfo: state => state.user
}
