import Vue from 'vue';
import Router from 'vue-router';

import index from '@/views/index/index';
import createTopic from '@/views/topics/create/index';
import message from '@/views/message/index';
import my from '@/views/my/index';
import login from '@/views/my/login';
import topic from '@/views/topics/topic/topic'

Vue.use(Router);

export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    base: __dirname,
    routes: [
        {
            path: '/index',
            component: index
        },
        {
            path: '/topics/create',
            component: createTopic
        },
        {
            path: '/topic/:id',
            component: topic
        },
        {
            path: '/message',
            component: message
        },
        {
            path: '/my',
            component: my
        },
        {
            path: '/my/login',
            component: login
        }
    ]
})

