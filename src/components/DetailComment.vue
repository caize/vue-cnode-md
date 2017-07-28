<template lang="html">
<div class="detail-comment" :id="reply.id">
    <md-list-item>
        <md-avatar>
            <img :src="reply.author.avatar_url" alt="">
        </md-avatar>
        <div class="detail-content">
            <span>{{reply.author.loginname}}</span>
            <div v-html="reply.content"></div>
            <p>{{reply.create_at | dateFormat('YYYY-MM-DD HH:mm')}}</p>
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

<style lang="css">
</style>
