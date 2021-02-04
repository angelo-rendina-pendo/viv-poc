import Vue from 'vue';
import Vuex from 'vuex';
import fidget from '@/core/store/fidget.js';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        fidget
    }
});
