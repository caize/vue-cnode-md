<template lang="html">
<div id="topicDetail">
    <md-toolbar class="md-large md-accent">
        <div class="md-toolbar-container">
            <md-button class="md-icon-button" @click="$router.go(-1)">
                <md-icon class="md-size-1x" md-iconset="fa fa-angle-left"></md-icon>
            </md-button>

            <span style="flex: 1;"></span>

            <md-button>
                <span style="margin-right:20px;">
                    <md-icon class="" v-if="detail.good" md-iconset="fa fa-thumbs-o-up"></md-icon>
                </span>
                <span>
                    <md-icon class="md-size-1x" v-if="detail.is_collect" md-iconset="fa fa-star"></md-icon>
                    <md-icon class="md-size-1x" v-else="" md-iconset="fa fa-star-o"></md-icon>
                </span>
            </md-button>
        </div>
        <div class="md-toolbar-container">
            <h2 class="md-title">{{detail.title}}</h2>
        </div>
    </md-toolbar>
    <md-list>
        <md-list-item>
            <md-avatar>
                <img :src="detail.author.avatar_url" alt="">
            </md-avatar>
            <div class="md-list-text-container">
                <!-- <span>{{detail.title}}</span> -->
                <p>{{detail.author.loginname}}</p>
                <p>发表于：{{detail.create_at | dateFormat('YYYY-MM-DD HH:mm:ss')}}</p>
                <p>浏览次数：{{detail.visit_count}}</p>
            </div>
        </md-list-item>
        <md-list-item>
            <div class="detail-content" v-html="detail.content">
            </div>
            <md-divider></md-divider>
        </md-list-item>
        <md-list-item>
            <div class="md-list-text-container">
                <span>
                    <md-icon class="md-accent" md-iconset="fa fa-comments-o"></md-icon>
                    <span class="count">{{detail.reply_count}}</span>
                    条评论
                </span>
            </div>
            <md-divider></md-divider>
        </md-list-item>
        <!-- <md-list-item v-for="reply in detail.replies" :key="reply.id">
            <md-avatar>
                <img :src="reply.author.avatar_url" alt="">
            </md-avatar>
            <div class="detail-content">
                <span>{{reply.author.loginname}}</span>
                <div v-html="reply.content"></div>
            </div>
            <md-divider class="md-inset"></md-divider>
        </md-list-item> -->
        <detail-comment v-for="reply in detail.replies" v-if="reply" :key="reply.id" :reply="reply"></detail-comment>
    </md-list>
</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import DetailComment from '@/components/DetailComment'
import MemberMixin from '@/mixins/member'
export default {
    mixins: MemberMixin,
    components: {
        DetailComment
    },
    computed: {
        ...mapGetters({
            detail: 'getDetail'
        })
    },
    methods: {
        ...mapActions({
            getData: 'getTopicDetail'
        })
    },
    mounted() {
        let id
        id = this.$route.params.id
        window.scrollTo(0, 0)
        this.$store.dispatch('getTopicDetail', id)
        // this.getData(id)
    }
}
</script>

<style lang="scss" scoped="">
.detail-content {
    width: 100%;
    word-wrap:break-word;
    overflow-x: hidden;
}

.count{
    color: #e91e63
}
code, pre{
    overflow: scroll;
}
</style>
