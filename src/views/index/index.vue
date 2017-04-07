<template>
    <div>
        <nav class="tab border-1px">
            <div class="tab-item" :class="{active: !this.$route.query.tab}" @click="tab()">
                <router-link to="/index">全部</router-link>
            </div>
            <div class="tab-item" :class="{active: this.$route.query.tab === 'good'}" @click="tab()">
                <router-link to="/index?tab=good">精华</router-link>
            </div>
            <div class="tab-item" :class="{active: this.$route.query.tab === 'share'}" @click="tab()">
                <router-link to="/index?tab=share">分享</router-link>
            </div>
            <div class="tab-item" :class="{active: this.$route.query.tab === 'ask'}" @click="tab()">
                <router-link to="/index?tab=ask">问答</router-link>
            </div>
            <div class="tab-item" :class="{active: this.$route.query.tab === 'job'}" @click="tab()">
                <router-link to="/index?tab=job">招聘</router-link>
            </div>
        </nav>
        <div class="topic-list-wrapper" ref="topicListWrapper">
            <topicList :topics="topics" :loadingTop="loadingTop" :loadingBottom="loadingBottom" :complete="complete"></topicList>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script>
    import BScroll from 'better-scroll';
    import footer from '@/components/footer';
    import topicList from '@/components/topicList';
    import {getTopics} from '@/api/publicApi';
    export default{
        data() {
            return {
                searchOption: {
                    page: 1,
                    tab: 'all',
                    limit: 20,
                    mdrender: false
                }, // 请求参数
                topics: [], // 返回数据列表
                loadingTop: false, // 是否请求成功
                loadingBottom: false, // 是否请求成功
                complete: false // 是否加载完所有数据
            }
        },
        components: {
            'v-footer': footer,
            topicList
        },
        mounted(){
            // 初始化ajax请求
            getTopics(this.searchOption).then((data) => {
                this.topics = data.data;
                // DOM 更新了 操作dom时一定要在$nextTick里
                this.$nextTick(() => {
                    this._initScroll();
                })
            })
        },
        methods: {
            // 点击选项卡导航
            tab() {
                // 显示loading
                this.loadingTop = true;
                // 获取地址栏参数
                let tab = this.$route.query.tab;
                if(tab === undefined){
                    tab = 'all'
                }
                this.searchOption = Object.assign({}, this.searchOption, {tab: tab, page: 1});
                // 请求数据
                getTopics(this.searchOption).then((data) => {
                    this.topics = data.data;
                    // 页面返回顶部 并刷新BScroll
                    this.$nextTick(() => {
                        // 回到顶部
                        this.topicListScroll.scrollTo(0, 500);
                        // 刷新BScroll
                        this.topicListScroll.refresh();
                        // 隐藏loading
                        this.loadingTop = false;
                    })
                })
            },
            _initScroll() {
                // 保持this
                let self = this;
                // 初始化BScroll
                this.topicListScroll = new BScroll(this.$refs.topicListWrapper, {
                    click: true,
                    probeType: 3
                });

                // 上拉加载
                this.topicListScroll.on('touchend', function(pos) {
                    if(pos.y < this.maxScrollY-10){
                        if(self.loading || self.complete) return;
                        self.loadingBottom = true;
                        let page = ++self.searchOption.page;
                        this.searchOption = Object.assign({}, self.searchOption, {page: page});
                        // 加载数据
                        getTopics(this.searchOption).then((data) => {
                            // 判断是否还有新数据
                            if(data.data.length > 0){
                                data.data.forEach((item) => self.topics.push(item));
                            }else{
                                self.complete = true;
                            }
                            // 刷新BScroll
                            self.$nextTick(() => {
                                self.topicListScroll.refresh();
                                self.loadingBottom = false;
                            })
                        });
                    }
                })
            }
        },
        computed: {}
    }

</script>

<style lang="scss" scoped>
    @import "../../common/scss/mixins";

    .tab {
        display: flex;
        width: 100%;
        height: 100px;
        line-height: 100px;
        @include border-1px(#ddd);
        position: fixed;
        background-color: #fff;
        z-index: 9999;
        .tab-item {
            flex: 1;
            text-align: center;
            & > a {
                font-size: 28px; /*px*/
                color: #a2a2a2;
            }
        }
        .tab-item.active {
            border-bottom: 5px solid #80bd01;
            & > a {
                color: #222;
            }
        }
    }
    .topic-list-wrapper{
        position: fixed;
        top: 100px;
        bottom: 100px;
        width: 100%;
        overflow: hidden;
    }
</style>
