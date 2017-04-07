<template>
    <div class="topic-list">
        <loading :loadingTop="loadingTop" :loadingBottom="loadingBottom" :complete="complete">
            <ul>
                <li class="item" v-for="topic in topics">
                    <router-link class="item-wrapper" :to="'/topic/' + topic.id">
                        <div class="item-user">
                            <div class="user-avatar">
                                <img :src="topic.author.avatar_url" alt="">
                            </div>
                            <div class="user-detail">
                                <span class="username">{{ topic.author.loginname }}</span>
                                <span class="label" v-if="topic.top">置顶</span>
                                <span class="label">{{ topic.tab | textFormat }}</span>
                                <p class="user-time">{{ topic.create_at | formatDateToEditor }}</p>
                            </div>
                        </div>
                        <div class="item-content border-1px">
                            <p class="item-content-title">{{ topic.title }}</p>
                        </div>
                        <div class="item-btn-wrapper">
                            <div class="btn">
                                <i class="iconfont icon-204"></i>
                                <span>{{ topic.visit_count }}</span>
                            </div>
                            <div class="btn">
                                <i class="iconfont icon-pinglun"></i>
                                <span>{{ topic.reply_count }}</span>
                            </div>
                            <div class="btn">
                                <i class="iconfont icon-share"></i>
                                <span>分享</span>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </loading>
    </div>
</template>

<script>
    import {formatDateToEditor} from '../common/js/date';
    import loading from '@/components/loading';
    export default{
        props: {
            topics: [Array, Object],
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
        components: {
            loading
        },
        computed: {},
        methods: {},
        filters: {
            textFormat(value) {
                let str = '';
                let map = {
                    share: '分享',
                    ask: '问答',
                    job: '招聘',
                    good: '精华'
                }
                if (!value) {
                    return '暂无'
                }
                str = map[value];
                return str;
            },
            formatDateToEditor(date) {
                return formatDateToEditor(date);
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "../common/scss/mixins";

    .topic-list {
        background-color: #eee;
        .item {
            display: flex;
            padding-top: 30px;
            background: #fff;
            a {
                display: block;
                color: #333;
                width: 100%;
                .item-user {
                    display: flex;
                    flex-direction: row;
                    padding: 0 20px;
                    .user-avatar {
                        flex: 0 0 80px;
                        margin-right: 30px;
                        width: 80px;
                        height: 80px;
                        img {
                            width: 100%;
                            border-radius: 50%;
                        }
                    }
                    .user-detail {
                        flex: 1;
                        .username {
                            font-size: 30px; /*px*/
                            color: #369219;
                            margin-right: 10px;
                        }
                        .label {
                            padding: 5px 10px;
                            font-size: 28px; /*px*/
                            color: #369219;
                            border: 1px solid #369219;
                            margin-right: 10px;
                        }
                        .user-time {
                            margin-top: 30px;
                            color: #999;
                        }
                    }
                }
                .item-content {
                    @include border-1px(rgba(7, 17, 27, .1));
                    padding: 36px 20px 20px;
                    .item-content-title {
                        font-size: 30px; /*px*/
                    }
                }
                .item-btn-wrapper {
                    display: flex;
                    flex-direction: row;
                    height: 84px;
                    width: 100%;
                    line-height: 84px;
                    text-align: center;
                    font-size: 0;
                    .btn {
                        flex: 1;
                        position: relative;
                        color: #929292;
                        i {
                            font-size: 34px; /*px*/
                            vertical-align: baseline;
                            margin-right: 8px;
                        }
                        span {
                            font-size: 28px; /*px*/
                            display: inline-block;
                        }
                        &:after {
                            content: '';
                            position: absolute;
                            top: 50%;
                            right: 0;
                            transform: translate3d(0, -50%, 0);
                            width: 1px;
                            height: 70%;
                            background-image: linear-gradient(#fff, #e7e7e7, #fff);
                        }
                        &:last-child:after {
                            display: none;
                        }
                    }
                }
            }
        }
        .item + .item {
            margin-top: 20px;
        }
    }
</style>
