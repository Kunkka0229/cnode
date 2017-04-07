<template>
    <div class="login">
        <v-header title="登录"></v-header>
        <section class="login-wrapper">
            <input class="input-text" type="text" placeholder="Access Token" autofocus v-model="accessToken"
                   maxlength="36" @keydown.enter="handleLogin">
            <button class="btn" @click="handleLogin">登录</button>
        </section>
    </div>
</template>

<script>
    import header from '@/components/header';
    import { LOGIN } from '@/store/mutation-types';
    export default{
        props: {},
        data() {
            return {
                accessToken: ''
            }
        },
        components: {
            'v-header': header
        },
        methods: {
            handleLogin() {
                const data = {
                    accesstoken: this.accessToken
                };
                this.$store.dispatch(LOGIN, data);
                this.$router.push('/my');
            }
        },
        computed: {}
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .login {
        .login-wrapper {
            padding: 30px;
            margin-top: 100px;
            .input-text {
                border: none;
                outline: none;
                width: 100%;
                height: 66px;
                line-height: 66px;
                border-bottom: 1px solid #22c37b;
                font-size: 28px; /*px*/
                padding-left: 10px;
            }
            .btn {
                width: 100%;
                height: 60px;
                line-height: 60px;
                background: #22c37b;
                box-shadow: 0 6px #1b985f;
                border-radius: 8px; /*no*/
                margin-top: 50px;
                color: #fff;
                font-size: 30px; /*px*/
                &:active{
                    box-shadow: 0 3px #1b985f;
                    transform: translateY(3px);
                }
            }
        }
    }
</style>
