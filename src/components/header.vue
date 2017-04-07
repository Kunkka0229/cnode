<template>
    <header class="border-1px">
        <i class="iconfont icon-fanhui back" v-if="back" @click="$router.go(-1)"></i>
        <h2>{{ title }}</h2>
        <i class="iconfont icon-tuichu login-out" v-if="success" @click="loginOut"></i>
    </header>
</template>

<script>
    import { LOGIN_OUT } from '@/store/mutation-types';
    export default{
        props: {
            back: {
              type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ''
            },
            success: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {}
        },
        components: {},
        computed: {},
        methods: {
            loginOut() {
                this.$store.dispatch(LOGIN_OUT);
            }
        }
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../common/scss/mixins";
    header {
        width: 100%;
        height: 100px;
        line-height: 100px;
        font-size: 32px;/*px*/
        text-align: center;
        box-shadow: 0 0 8px rgba(0, 0, 0, .2);/*no*/
        @include border-1px(#ddd);
        i{
            display: inline-block;
            position: absolute;
            top: 0;
            width: 100px;
            height: 100px;
            font-size: 40px;/*px*/
        }
        .back{
            left: 0;
        }
        .login-out{
            right: 0;
        }
    }
</style>
