<template>
    <div class="topic">
        <v-header title="详情" :back="back"></v-header>
        <loading :loadingTop="loadingTop">
            <div class="markdown-body" v-html="topic.content"></div>
        </loading>
    </div>
</template>

<script>
    import {getTopic} from '@/api/publicApi';
    import loading from '@/components/loading';
    import header from '@/components/header';
    export default{
        props: {},
        data() {
            return {
                topic: {},
                loadingTop: true,
                back: true
            }
        },
        components: {
            'v-header': header,
            loading
        },
        created() {
            this._getData();
        },
        computed: {},
        methods: {
            _getData() {
                let {id} = this.$route.params;
                getTopic(`/topic/${id}`).then((data) => {
                    this.loadingTop = false;
                    this.topic = data.data;
                })
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .topic {
        .markdown-body {
            padding: 20px 10px;
        }
    }
</style>
