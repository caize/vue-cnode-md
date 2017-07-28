<template lang="html">
<md-list-item>
    <router-link  :key="topic.id" :to="{name: 'Detail', params: {id: topic.id}}">
        <md-avatar>
            <img :src="topic.author.avatar_url" alt="">
        </md-avatar>
        <div class="md-list-text-container">
            <span>
                <span class="type-tab good" v-if="topic.top">置顶</span>
                <span class="type-tab good" v-else-if="topic.good">精华</span>
                <span class="type-tab" v-else>{{type}}</span>
                {{topic.title}}
            </span>
            <p>{{topic.author.loginname}}</p>
        </div>
        <md-divider class="md-inset"></md-divider>
    </router-link>
</md-list-item>
</template>

<script>
export default {
    props: ['topic', 'type']
}
</script>

<style lang="scss">
.type-tab{
    background-color: #e5e5e5;
    color: #999;
    padding: 0 5px;
    margin-bottom: 5px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 8px;
    display: inline-block;
    &.good{
        background: #80bd01;
        color: #fff;
    }
}
</style>
