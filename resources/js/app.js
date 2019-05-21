require('./bootstrap');

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router'

Vue.use(Vuex);
Vue.use(VueRouter);

import router from './router';
import App from './components/App';

new Vue({
    el: '#app',
    components: { App },
    router
});
