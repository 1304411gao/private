import Vue from 'vue'
import Router from 'vue-router'

/* 测试 */
import HelloWorld from '@/components/HelloWorld'
/* 首页 */
import Index from '@/pages/index'

import About from '@/pages/about'

import Filed from '@/pages/filed'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/filed',
            name: 'Filed',
            component: Filed
        }
    ]
})
