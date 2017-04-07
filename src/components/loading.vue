<template>
    <div class="loading-wrapper">
        <div class="loading-top" v-if="loadingTop">
            <div class='uil-default-css' style='transform:scale(0.15);'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <slot></slot>
        <div class="loading-bottom" v-if="loadingBottom">
            <div class='uil-default-css' style='transform:scale(0.15);'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="no-data" v-if="complete">到底了!</div>
    </div>
</template>

<script>
    export default{
        props: {
            loadingTop: {
                type: Boolean,
                default: false
            },
            loadingBottom: {
                type: Boolean,
                default: false
            },
            complete: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {}
        },
        components: {},
        computed: {},
        methods: {}
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .loading-wrapper {
        @keyframes uil-default-anim {
            0% {
                opacity: 1
            }
            100% {
                opacity: 0
            }
        }
        .loading-top{
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: #fff;
            z-index: 999;
        }

        .loading-bottom {
            width: 100%;
            height: 200px;
            background-color: #fff;
        }
        .uil-default-css {
            position: relative;
            background: none;
            width: 100%;
            height: 200px;

            & > div {
                width: 28px;
                height: 80px;
                background: #00b2ff;
                border-radius: 20px;
                position: absolute;
                top: 50%;
                left: 50%;
            }

            & > div:nth-of-type(1) {
                transform: rotate(0deg) translate(0, -120px);
                animation: uil-default-anim 1s linear infinite;
                animation-delay: -0.5s;
            }
            & > div:nth-of-type(2) {
                transform: rotate(30deg) translate(0, -120px);
                animation: uil-default-anim 1s linear infinite;
                animation-delay: -0.4166666666666667s;
            }
            & > div:nth-of-type(3) {
                transform: rotate(60deg) translate(0, -120px);
                animation: uil-default-anim 1s linear infinite;
                animation-delay: -0.33333333333333337s;
            }
            & > div:nth-of-type(4) {
                transform: rotate(90deg) translate(0, -120px);
                animation: uil-default-anim 1s linear infinite;
                animation-delay: -0.25s;
            }
            & > div:nth-of-type(5) {
                transform: rotate(120deg) translate(0, -120px);
                animation: uil-default-anim 1s linear infinite;
                animation-delay: -0.16666666666666669s;
            }
            & > div:nth-of-type(6) {
                transform: rotate(150deg) translate(0, -120px);
                animation: uil-default-anim 1s linear infinite;
                animation-delay: -0.08333333333333331s;
            }
            & > div:nth-of-type(7) {
                transform: rotate(180deg) translate(0, -120px);
                animation: uil-default-anim 1s linear infinite;
                animation-delay: 0s;
            }
            & > div:nth-of-type(8) {
                transform: rotate(210deg) translate(0, -120px);
                animation: uil-default-anim 1s linear infinite;
                animation-delay: 0.08333333333333337s;
            }
            & > div:nth-of-type(9) {
                transform: rotate(240deg) translate(0, -120px);
                animation: uil-default-anim 1s linear infinite;
                animation-delay: 0.16666666666666663s;
            }
            & > div:nth-of-type(10) {
                transform: rotate(270deg) translate(0, -120px);
                animation: uil-default-anim 1s linear infinite;
                animation-delay: 0.25s;
            }
            & > div:nth-of-type(11) {
                transform: rotate(300deg) translate(0, -120px);
                animation: uil-default-anim 1s linear infinite;
                animation-delay: 0.33333333333333337s;
            }
            & > div:nth-of-type(12) {
                transform: rotate(330deg) translate(0, -120px);
                animation: uil-default-anim 1s linear infinite;
                animation-delay: 0.41666666666666663s;
            }
        }
        .no-data {
            width: 100%;
            height: 100px;
            line-height: 100px;
            background-color: #eee;
            text-align: center;
            color: #ccc;
        }
    }


</style>
