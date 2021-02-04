import Vue from 'vue';
import router from '@/core/router.js';
import store from '@/core/store/store.js';
import App from '@/core/app.vue';

new Vue({
    el: '#core-mount',
    router,
    store,
    render: (h) => h(App)
});
