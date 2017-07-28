<template lang="html">
<div id="homePage">
    <md-whiteframe md-tag="md-toolbar" md-elevation="3" md-theme="light-blue" class="fixed-top fixed-one">
        <!-- <md-toolbar fixed class="md-dense"> -->
            <div class="md-toolbar-container">
                <md-button class="md-icon-button" @click="toggleSlideNav()">
                    <md-icon>menu</md-icon>
                </md-button>

                <h2 class="md-title" style="flex: 1;">{{title[type]}}</h2>
            </div>
        <!-- </md-toolbar> -->
    </md-whiteframe>

    <md-sidenav class="md-left md-fixed" ref="menuSlidenav" @open="open('Left')" @close="close('Left')">
        <md-toolbar class="md-large">
            <div class="md-toolbar-container">
                <h3 class="md-title">CNode.js</h3>
            </div>
        </md-toolbar>
        <md-list>
            <md-list-item v-for="(name, type) in title" :key="type" @click="changeType(type)">
                <div class="md-list-text-container">
                    <span>{{name}}</span>
                </div>
                <md-divider></md-divider>
            </md-list-item>
        </md-list>
    </md-sidenav>
    <div id="homeContent" >
        <md-list>
            <!-- <router-link :to="{ name: '', params: {} }"> -->
            <topic-item v-for="topic in topics" :key="topic.id" v-if="topic" :topic="topic" :type="title[topic.tab || type]"></topic-item>

        </md-list>
        <infinite-loading :on-infinite="loadMore" ref="infiniteLoading">
        </infinite-loading>
    </div>
</div>
</template>

<script>
import {
    mapGetters,
    mapActions
} from 'vuex'

import TopicItem from '@/components/TopicItem'
import InfiniteLoading from 'vue-infinite-loading'
import axios from 'axios'
// import {MtHeader} from 'mint-ui'
const BASE_URL = 'https://cnodejs.org/api/v1'
export default {
    components: {
        TopicItem,
        InfiniteLoading
    },
    data() {
        return {
            curLoading: false,
            title: {
                default: '首页',
                ask: '问答',
                share: '分享',
                job: '招聘',
                good: '精华'
            }
        }
    },
    computed: {
        ...mapGetters({
            loading: 'getLoading',
            type: 'getType',
            topics: 'getTypeData',
            page: 'getTypePage'
        })
    },
    mounted() {
        console.log('mounted')
        this.getData()
    },
    methods: {
        ...mapActions([
            'setLoading'
        ]),
        loadMore() {
            console.log('loadMore')
            let type
            let page
            type = this.type
            page = this.page + 1
            this.$store.dispatch('storePage', {type, page})
            // this.page + 1
            this.getData()
        },
        changeLoading() {
            this.$store.dispatch('switchLoading', this.curLoading)
            this.curLoading = !this.curLoading
        },
        getData() {
            // console.log(this.type)
            console.log('getData')
            // this.$store.dispatch('switchLoading', !!1)
            let type
            let page
            type = this.type
            page = this.page
            console.log({type, page})
            if (this.topics.length === 0 || this.page > 1) {
                // this.$store.dispatch('getTypeData', {
                //     type,
                //     page
                // })
                axios.get(BASE_URL + '/topics?tab=' + (type === 'default' ? '' : type) + '&page=' + page)
                    .then((res) => {
                        var data = res.data.data
                        // console.log({type, page, data})
                        this.$store.dispatch('switchLoading', !!0)
                        this.$store.dispatch('storeType', {type, data})
                        this.$store.dispatch('storePage', {type, page})
                        if (data.length > 0) {
                            this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
                        } else {
                            this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
                        }
                        // commit(types.STORE_TYPE, {type, data})
                        // commit(types.STORE_PAGE, {type, page})
                        // commit(types.LOADING, !!0)
                    })
            }
        },
        toggleSlideNav() {
            this.$refs.menuSlidenav.toggle()
        },
        changeType(type) {
            this.$router.push({
                name: 'Home',
                params: {
                    type
                }
            })
            this.$store.dispatch('switchType', type || '')
            console.log('changeType', this.type)
            this.toggleSlideNav()
            // this.getData()
        }
    },
    beforeRouteUpdate(to, from, next) {
        let type
        type = to.params.type
        // this.$router.push({name: 'Home', params: {type}})
        this.$store.dispatch('switchType', type || '')
        console.log('beforeRouteUpdate', type)
        this.getData()
    }
    // store
}
</script>

<style lang="scss" scoped="">
#homeContent{
    margin-top: 65px;
}
</style>
