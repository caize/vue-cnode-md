<template lang="html">
<div class="detail-comment" :id="reply.id">
    <md-list-item>
        <md-avatar>
            <img :src="reply.author.avatar_url" alt="">
        </md-avatar>
        <div class="reply-content">
            <router-link :to="{ name: 'User', params: {loginname: reply.author.loginname} }">{{reply.author.loginname}}</router-link>
            <!-- <span class="loginname">{{reply.author.loginname}}</span> -->
            <div v-html="reply.content"></div>
            <span class="timestamp">{{reply.create_at | dateFormat('YYYY-MM-DD HH:mm')}}</span>
        </div>
        <md-divider class="md-inset"></md-divider>
    </md-list-item>
</div>
</template>

<script>
export default {
    props: ['reply']
}
</script>

<style lang="scss">
.reply-content{
    word-break: break-all;
    color: #555;
    p{
        margin: 5px 0;
    }
}
.loginname{
    margin-top: 4px;
    font-weight: bold;
    color: #333;
    display: block;
}
.timestamp{
    font-size: .8em;
    color: #999;
}
</style>
