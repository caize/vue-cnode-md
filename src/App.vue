<template>
<div id="app">
    <router-view></router-view>
    <div id="loading" v-show="loading">
        <span class="loading">
            <md-spinner :md-size="50" md-indeterminate></md-spinner>
        </span>
    </div>
</div>
</template>

<script>
// import Vue from 'vue'
import store from '@/store'
import {mapGetters} from 'vuex'

export default {
    name: 'app',
    store,
    computed: {
        ...mapGetters({
            loading: 'getLoading'
        })
    }
}
</script>

<style lang='scss'>
// *{
//     margin: 0;
//     padding: 0;
//     border: 0;
//     background: transparent;
//     box-sizing: border-box;
// }
#loading{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 100%;
    text-align: center;
    z-index: 999;
    background: rgba(255, 255, 255, 0.5);
    .loading {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
    }
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    // margin-top: 60px;
}
img{
    max-width: 100%
}
.fixed-one{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 90;
    &.fixed-top{
        top: 0;
    }
}
.md-icon{
    &.md-size-1x{
        font-size: 24px;
    }
}
</style>
