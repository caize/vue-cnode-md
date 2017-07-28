import {mapGetters} from 'vuex'

export default {
    computed: {
        ...mapGetters({
            loginstatue: 'getLoginStatu'
        })
    },
    mounted() {
        console.log('In MemberMixin')
    }
}
