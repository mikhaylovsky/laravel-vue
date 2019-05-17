import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isLoggedIn: !! localStorage.getItem('token'),
        token: localStorage.getItem('token') || null,
    },

    mutations: {
        loginUser (state) {
            state.isLoggedIn = true;
            state.token = localStorage.getItem('token');
        },

        logoutUser (state) {
            state.isLoggedIn = false;
            state.token = null;
            localStorage.setItem('token', '');
        }
    }
})