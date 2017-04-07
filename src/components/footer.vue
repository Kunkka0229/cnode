<template>
    <div class="footer">
        <ul>
            <li v-for="item in lists">
                <router-link :to="item.path">
                    <i class="iconfont" :class="item.icon"></i>
                    <span>{{ item.title }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        props: {},
        data() {
            return {
                lists: [
                   {
                     title: '首页',
                     path: '/index',
                     icon: 'icon-shouyeshouye'
                   },
                   {
                     title: '发表',
                     path: '/topics/create',
                     icon: 'icon-fabiao'
                   },
                   {
                     title: '消息',
                     path: '/message',
                     icon: 'icon-icon066'
                   },
                   {
                     title: '我的',
                     path: '/my',
                     icon: 'icon-my'
                   }
                ]
            }
        },
        components: {},
        methods: {},
        computed: {}
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100px;
        border-top: 1px solid #ddd;
        background-color: #fff;
        ul{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            height: 100%;
            li{
                flex: 1;
                i{
                    display: block;
                    font-size: 40px;/*px*/
                    color: #222;
                }
                span{
                    font-size: 28px;/*px*/
                    color: #222;
                }
                a.active{
                    i{
                        color: #80bd01;
                    }
                    span{
                        color: #80bd01;
                    }
                }
            }
        }
    }
</style>
