<template lang="html">
<div id="userInfo">
    <md-toolbar class="md-large">
        <div class="md-toolbar-container">
            <md-button class="md-icon-button" @click="$router.go(-1)">
                <md-icon class="md-size-1x" md-iconset="fa fa-angle-left"></md-icon>
            </md-button>

            <span style="flex: 1;"></span>

            <router-link :to="github">
                <md-button class="md-icon-button">
                    <md-icon class="md-size-1x" md-iconset="fa fa-github"></md-icon>
                </md-button>
            </router-link>
        </div>

        <div class="md-toolbar-container">
            <h1 class="user-loginname">{{user.loginname}}</h1>

            <md-avatar class="md-large">
                <div class="avatar">
                    <img :src="user.avatar_url" alt="">
                </div>
            </md-avatar>
        </div>
    </md-toolbar>

    <div class="my-topics-list">
        <h3>TA 的话题</h3>
        <md-list class=" md-triple-line">
            <topic-item v-for="topic in user.recent_topics" :key="topic.id" v-if="topic" :topic="topic" type=""></topic-item>
        </md-list>
    </div>

    <div class="my-topics-list">
        <h3>TA 的回复</h3>
        <md-list class=" md-triple-line">
            <topic-item v-for="topic in user.recent_replies" :key="topic.id" v-if="topic" :topic="topic" type=""></topic-item>
        </md-list>
    </div>
</div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import {
    mapGetters
    // mapActions
} from 'vuex'
import TopicItem from '@/components/TopicItem'

export default {
    components: {
        InfiniteLoading,
        TopicItem
    },
    computed: {
        ...mapGetters({
            user: 'getUserInfo'
        }),
        github() {
            return 'https://github.com/' + this.user.githubUsername
        }
    },
    mounted() {
        let loginname = this.$route.params.loginname
        this.$store.dispatch('getUserInfo', loginname)
    }
}
</script>

<style lang="scss" scoped="">
$avatar_width: 80px;
$avatar_margin: 4px;

.md-avatar {
    margin: 0;
    position: absolute;
    bottom: -40px;
    left: 16px;
    width: $avatar_width;
    height: $avatar_width;
    background: #fff;
    .avatar{
        margin: $avatar_margin;
        width: $avatar_width - $avatar_margin*2;
        height: $avatar_width - $avatar_margin*2;
        overflow: hidden;
        border-radius: 999px;
    }
}
.user-loginname{
    margin-left: $avatar_width + 10;
}
.md-toolbar{
    margin-bottom: $avatar_width / 2 + 20;
}
.my-topics-list{
    margin-bottom: 20px;
    h3{
        margin: 0;
        padding-left: 10px;
    }
}
</style>
