<template>
    <div class="my">
        <v-header title="个人中心" :success="userInfo.success"></v-header>
        <div class="login-wrapper">
            <router-link to="/my/login" v-if="!userInfo.success">
                <div class="bg"></div>
                <div class="avatar">
                    <img src="../../assets/logo.png" />
                </div>
                <div class="loginname">你还未登录，请先登录！</div>
            </router-link>
            <router-link to="/user" v-else>
                <div class="bg"></div>
                <div class="avatar">
                    <img :src="userInfo.avatar_url" />
                </div>
                <div class="loginname">{{ userInfo.loginname }}</div>
            </router-link>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import header from '@/components/header';
    import footer from '@/components/footer';
    export default{
        props: {},
        data() {
            return {}
        },
        components: {
            'v-header': header,
            'v-footer': footer
        },
        computed: {
            ...mapGetters([
                'userInfo'
            ])
        },
        methods: {}
    }

</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .my {
        .login-wrapper {
            width: 100%;
            height: 600px;
            position: relative;
            .bg{
                height: 360px;
                background: url("../../assets/login-bg.jpg") no-repeat center center;
                background-size: cover;
            }
            .avatar{
                position: absolute;
                bottom: 120px;
                left: 50%;
                transform: translateX(-50%);
                width: 240px;
                height:240px;
                background-color: #eee;
                background-size: cover;
                border-radius: 50%;
                border: 1px solid #ddd;
                img{
                    width: 100%;
                    border-radius: 50%;
                }
            }
            .loginname{
                position: absolute;
                bottom: 0;
                left: 0;
                height: 120px;
                width: 100%;
                line-height: 120px;
                text-align: center;
                font-size: 30px;/*px*/
                color: #222;
            }
        }
    }
</style>
