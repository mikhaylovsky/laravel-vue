import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//TODO refactor isLoggedIn method - this should send a request to server
export default new Vuex.Store({
    state: {
        isLoggedIn: !! localStorage.getItem('token'),
        token: localStorage.getItem('token') || null,
        user: localStorage.getItem('user') || {},
    },

    mutations: {
        loginUser (state) {
            state.isLoggedIn = true;
            state.token = localStorage.getItem('token');
            state.user = localStorage.getItem('user');
        },

        logoutUser (state) {
            state.isLoggedIn = false;
            state.token = null;
            state.user = {};
            localStorage.setItem('token', '');
            localStorage.setItem('user', {});
        }
    }
})