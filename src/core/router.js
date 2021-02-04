import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/core/pages/home.vue';
import About from '@/core/pages/about.vue';
import NotFound from '@/core/pages/404.vue';
import Plugin from '@/core/pages/plugin.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/plugin*',
            component: Plugin
        },
        {
            path: '/404',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
