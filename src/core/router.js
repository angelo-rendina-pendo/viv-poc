import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/core/pages/home.vue';
import About from '@/core/pages/about.vue';
import NotFound from '@/core/pages/404.vue';
import PluginPage from '@/core/pages/plugin.vue';
import Plugin from 'viv-plugin';

Vue.use(VueRouter);

const router = new VueRouter({
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
            component: PluginPage
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

router.afterEach((to) => {
    if (to.path.startsWith('/plugin')) {
        Plugin.$router.push(to, () => {});
    }
});

export default router;
