export default {
    namespaced: true,
    state: {
        clicks: 0
    },
    mutations: {
        increment (state) {
            state.clicks++;
        }
    },
    actions: {
        click (context) {
            context.commit('increment');
        }
    },
    getters: {
        clicks: (state) => state.clicks
    }
};
